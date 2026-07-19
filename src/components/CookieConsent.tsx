'use client';

import { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { Button } from '@/components/ui/Button';

const CONSENT_COOKIE_NAME = 'pdfkoi_cookie_consent';
const CONSENT_VERSION = '1.0';

interface ConsentPreferences {
  essential: boolean;
  functional: boolean;
  advertising: boolean;
  version: string;
  timestamp: string;
}

export function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  useEffect(() => {
    // Check if user has already given consent
    const consent = localStorage.getItem(CONSENT_COOKIE_NAME);
    if (!consent) {
      // Small delay to avoid flash on page load
      setTimeout(() => setShowBanner(true), 1000);
    } else {
      // Check if consent version matches
      try {
        const parsed: ConsentPreferences = JSON.parse(consent);
        if (parsed.version !== CONSENT_VERSION) {
          setShowBanner(true);
        }
      } catch {
        setShowBanner(true);
      }
    }
  }, []);

  const saveConsent = (preferences: Omit<ConsentPreferences, 'version' | 'timestamp'>) => {
    const consent: ConsentPreferences = {
      ...preferences,
      version: CONSENT_VERSION,
      timestamp: new Date().toISOString(),
    };
    localStorage.setItem(CONSENT_COOKIE_NAME, JSON.stringify(consent));
    setShowBanner(false);

    // Reload page to apply consent preferences
    if (preferences.advertising) {
      // Load AdSense script if user consented to advertising
      window.location.reload();
    }
  };

  const acceptAll = () => {
    saveConsent({
      essential: true,
      functional: true,
      advertising: true,
    });
  };

  const acceptEssentialOnly = () => {
    saveConsent({
      essential: true,
      functional: false,
      advertising: false,
    });
  };

  if (!showBanner) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center pointer-events-none">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/20 backdrop-blur-sm pointer-events-auto" />

      {/* Banner */}
      <div className="relative w-full max-w-4xl mx-4 mb-4 bg-white dark:bg-gray-800 rounded-lg shadow-2xl border border-gray-200 dark:border-gray-700 pointer-events-auto">
        <div className="p-6">
          {/* Header */}
          <div className="flex items-start justify-between mb-4">
            <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100">
              Cookie Settings
            </h2>
            <button
              onClick={acceptEssentialOnly}
              className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
              aria-label="Close and accept essential only"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Main message */}
          <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
            We use cookies to provide essential website functionality, remember your preferences,
            and display relevant advertisements through Google AdSense. Your PDF files are
            never shared with advertisers - all processing happens locally in your browser.
          </p>

          {/* Details toggle */}
          {!showDetails ? (
            <button
              onClick={() => setShowDetails(true)}
              className="text-sm text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 underline mb-4"
            >
              Show cookie details
            </button>
          ) : (
            <div className="mb-4 space-y-3 text-sm">
              <div className="p-3 bg-gray-50 dark:bg-gray-700/50 rounded">
                <div className="flex items-center justify-between mb-1">
                  <span className="font-semibold text-gray-900 dark:text-gray-100">
                    Essential Cookies
                  </span>
                  <span className="text-xs text-gray-500 dark:text-gray-400">Always Active</span>
                </div>
                <p className="text-gray-600 dark:text-gray-300">
                  Required for the website to function properly. These cannot be disabled.
                </p>
              </div>

              <div className="p-3 bg-gray-50 dark:bg-gray-700/50 rounded">
                <div className="flex items-center justify-between mb-1">
                  <span className="font-semibold text-gray-900 dark:text-gray-100">
                    Functional Cookies
                  </span>
                  <span className="text-xs text-gray-500 dark:text-gray-400">Optional</span>
                </div>
                <p className="text-gray-600 dark:text-gray-300">
                  Remember your language preference and other settings to improve your experience.
                </p>
              </div>

              <div className="p-3 bg-gray-50 dark:bg-gray-700/50 rounded">
                <div className="flex items-center justify-between mb-1">
                  <span className="font-semibold text-gray-900 dark:text-gray-100">
                    Advertising Cookies
                  </span>
                  <span className="text-xs text-gray-500 dark:text-gray-400">Optional</span>
                </div>
                <p className="text-gray-600 dark:text-gray-300">
                  Used by Google AdSense and partners to show relevant ads. You can opt out anytime
                  via{' '}
                  <a
                    href="https://adssettings.google.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    Google Ads Settings
                  </a>
                  .
                </p>
              </div>

              <button
                onClick={() => setShowDetails(false)}
                className="text-sm text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 underline"
              >
                Hide details
              </button>
            </div>
          )}

          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row gap-3">
            <Button
              onClick={acceptAll}
              className="flex-1 bg-blue-600 hover:bg-blue-700 text-white"
            >
              Accept All Cookies
            </Button>
            <Button
              onClick={acceptEssentialOnly}
              variant="outline"
              className="flex-1"
            >
              Accept Essential Only
            </Button>
          </div>

          {/* Privacy policy link */}
          <p className="mt-4 text-xs text-center text-gray-500 dark:text-gray-400">
            Learn more in our{' '}
            <a
              href="/privacy"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              Privacy Policy
            </a>
            {' '}and{' '}
            <a
              href="/cookies"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              Cookie Policy
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

// Helper function to check if user has consented to advertising
export function hasAdvertisingConsent(): boolean {
  if (typeof window === 'undefined') return false;

  try {
    const consent = localStorage.getItem(CONSENT_COOKIE_NAME);
    if (!consent) return false;

    const parsed: ConsentPreferences = JSON.parse(consent);
    return parsed.advertising === true;
  } catch {
    return false;
  }
}

// Helper function to get full consent preferences
export function getConsentPreferences(): ConsentPreferences | null {
  if (typeof window === 'undefined') return null;

  try {
    const consent = localStorage.getItem(CONSENT_COOKIE_NAME);
    if (!consent) return null;
    return JSON.parse(consent);
  } catch {
    return null;
  }
}
