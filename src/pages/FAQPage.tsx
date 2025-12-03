import React from 'react';
import { Layout } from '@/layouts/Layout';
import { FaqAccordion } from '@/components/FaqAccordion';
import { GoogleAd } from '@/components/GoogleAd';
import { Seo } from '@/components/Seo';

export const FAQPage: React.FC = () => {
  return (
    <Layout>
      <Seo
        title="Frequently Asked Questions (FAQ) | PDFStation"
        description="Find answers to common questions about PDFStation file conversion service. Free forever, up to 100MB per file. Learn about file sizes, formats, security, and more."
        canonical="/faq"
      />

      <div className="container mx-auto px-4 py-4">
        <GoogleAd slotKey="TOOL_HEADER" />
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-3">
            <FaqAccordion />
          </div>
          <div className="lg:col-span-1">
            <GoogleAd slotKey="SIDEBAR" className="sticky top-20" />
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <GoogleAd slotKey="IN_CONTENT" />
      </div>

      <div className="container mx-auto px-4 py-8">
        <GoogleAd slotKey="FOOTER" />
      </div>
    </Layout>
  );
};

