'use client';

import { useEffect } from 'react';

/**
 * Adsterra Smartlink monetization component.
 *
 * Strategy: open the Smartlink in a new tab on the visitor's first
 * interaction (click / tap), frequency-capped so each visitor sees it
 * at most once per interval. A user-gesture trigger is required for
 * the browser to allow window.open (pop-up blockers).
 *
 * Compliance:
 * - Only active when the visitor granted `advertising` consent via the
 *   site's CookieConsent banner (localStorage `pdfkoi_cookie_consent`).
 * - Renders nothing; purely behavioral.
 */

const SMARTLINK_URL =
  'https://spongeascend.com/ke7ek5ka?key=b6c9cd63274d0335cd044421485c3575';

const LAST_SHOWN_KEY = 'pdfkoi_adsterra_smartlink_last';
/** Minimum interval between two Smartlink opens for the same visitor. */
const CAP_INTERVAL_MS = 3 * 60 * 60 * 1000; // 3 hours

function hasAdvertisingConsent(): boolean {
  try {
    const raw = localStorage.getItem('pdfkoi_cookie_consent');
    if (!raw) return false;
    const prefs = JSON.parse(raw) as { advertising?: boolean };
    return prefs?.advertising === true;
  } catch {
    return false;
  }
}

function isCapped(): boolean {
  try {
    const last = Number(localStorage.getItem(LAST_SHOWN_KEY) || 0);
    return Number.isFinite(last) && Date.now() - last < CAP_INTERVAL_MS;
  } catch {
    return true; // storage unavailable -> stay safe, do not open
  }
}

function markShown(): void {
  try {
    localStorage.setItem(LAST_SHOWN_KEY, String(Date.now()));
  } catch {
    /* ignore */
  }
}

export function AdsterraSmartlink() {
  useEffect(() => {
    if (!hasAdvertisingConsent()) return undefined;
    if (isCapped()) return undefined;

    const onFirstInteraction = (event: Event) => {
      // Must run synchronously inside the user gesture so the
      // browser's pop-up blocker does not swallow window.open.
      if (isCapped()) {
        document.removeEventListener('pointerdown', onFirstInteraction, true);
        return;
      }
      // Never hijack clicks on links/buttons that navigate somewhere
      // visitors explicitly chose? Adsterra popunders open alongside
      // navigation, so we keep the gesture and open a new tab.
      markShown();
      window.open(SMARTLINK_URL, '_blank', 'noopener,noreferrer');
      document.removeEventListener('pointerdown', onFirstInteraction, true);
    };

    document.addEventListener('pointerdown', onFirstInteraction, {
      capture: true,
    });
    return () => {
      document.removeEventListener('pointerdown', onFirstInteraction, true);
    };
  }, []);

  return null;
}
