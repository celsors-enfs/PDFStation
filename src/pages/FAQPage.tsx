import React from 'react';
import { Layout } from '@/layouts/Layout';
import { FaqAccordion } from '@/components/FaqAccordion';
import { AdPlaceholder } from '@/components/AdPlaceholder';
import { Seo } from '@/components/Seo';

export const FAQPage: React.FC = () => {
  return (
    <Layout>
      <Seo
        title="Frequently Asked Questions (FAQ) | PDFStation"
        description="Find answers to common questions about PDFStation file conversion service. Free forever, up to 500MB per file. Learn about file sizes, formats, security, and more."
        canonical="/faq"
      />

      <div className="container mx-auto px-4 py-4">
        <AdPlaceholder id="ad-top-banner" position="top-banner" />
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-3">
            <FaqAccordion />
          </div>
          <div className="lg:col-span-1">
            <AdPlaceholder id="ad-right-rail" position="right-rail" className="sticky top-20" />
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <AdPlaceholder id="ad-in-content" position="in-content" />
      </div>

      <div className="container mx-auto px-4 py-8">
        <AdPlaceholder id="ad-footer-banner" position="footer-banner" />
      </div>
    </Layout>
  );
};

