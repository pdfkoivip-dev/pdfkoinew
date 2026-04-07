import { render, screen } from '@testing-library/react';
import { NextIntlClientProvider } from 'next-intl';
import { vi } from 'vitest';
import { describe, expect, it } from 'vitest';
import { ToolPage } from '@/components/tools/ToolPage';
import { getToolById } from '@/config/tools';
import type { ToolContent } from '@/types/tool';

vi.mock('@/components/layout/Header', () => ({
  Header: () => <div data-testid="mock-header" />,
}));

vi.mock('@/components/layout/Footer', () => ({
  Footer: () => <div data-testid="mock-footer" />,
}));

vi.mock('@/components/ui/FavoriteButton', () => ({
  FavoriteButton: () => <button type="button">Favorite</button>,
}));

const messages = {
  common: {
    navigation: {
      home: 'Home',
      tools: 'Tools',
    },
  },
  home: {
    categories: {
      editAnnotate: 'Edit & Annotate',
      convertToPdf: 'Convert to PDF',
      convertFromPdf: 'Convert from PDF',
      organizeManage: 'Organize & Manage',
      optimizeRepair: 'Optimize & Repair',
      securePdf: 'Secure PDF',
    },
  },
  tools: {
    about: 'About',
    howToUse: 'How to use',
    useCases: 'Use cases',
    faq: 'FAQ',
    relatedTools: 'Related tools',
  },
};

describe('ToolPage SEO markup', () => {
  it('renders FAQ content without FAQPage microdata markers', () => {
    const tool = getToolById('merge-pdf');

    expect(tool).toBeDefined();

    const content: ToolContent = {
      title: 'Merge PDF',
      metaDescription: 'Merge PDF files online for free.',
      description: 'Combine multiple PDFs in your browser.',
      howToUse: [
        { step: 1, title: 'Upload', description: 'Upload files.' },
      ],
      useCases: [
        { title: 'Reports', description: 'Combine report pages.', icon: 'briefcase' },
      ],
      faq: [
        { question: 'Is it free?', answer: 'Yes.' },
      ],
    };

    const { container } = render(
      <NextIntlClientProvider locale="en" messages={messages}>
        <ToolPage tool={tool!} content={content} locale="en">
          <div>Tool UI</div>
        </ToolPage>
      </NextIntlClientProvider>
    );

    expect(screen.getByTestId('tool-page-faq')).toBeInTheDocument();
    expect(container.querySelector('[itemtype="https://schema.org/FAQPage"]')).toBeNull();
    expect(container.querySelector('[itemtype="https://schema.org/Question"]')).toBeNull();
    expect(container.querySelector('[itemtype="https://schema.org/Answer"]')).toBeNull();
  });
});
