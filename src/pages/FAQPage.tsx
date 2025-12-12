import React from 'react';
import { Layout } from '@/layouts/Layout';
import { FaqAccordion } from '@/components/FaqAccordion';
import { Seo } from '@/components/Seo';

export const FAQPage: React.FC = () => {
  return (
    <Layout>
      <Seo
        title="Frequently Asked Questions (FAQ) | PDFStation"
        description="Find answers to common questions about PDFStation file conversion service. Free forever, up to 100MB per file. Learn about file sizes, formats, security, and more."
        canonical="/faq"
      />

      {/* Ads removed from FAQ page per AdSense policy: "Ads served on screens without publisher content" */}
      {/* FAQ pages are primarily navigation/functional, so ads are disabled */}
      
      <div className="container mx-auto px-4 py-8">
        <FaqAccordion />
      </div>
      
      {/* All ads removed from FAQ page per AdSense policy compliance */}
    </Layout>
  );
};

