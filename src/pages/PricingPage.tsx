import React from 'react';
import { Layout } from '@/layouts/Layout';
import { PricingTable } from '@/components/PricingTable';
import { AdPlaceholder } from '@/components/AdPlaceholder';
import { Seo } from '@/components/Seo';

export const PricingPage: React.FC = () => {
  return (
    <Layout>
      <Seo
        title="Pricing Plans – Free, Pro & Business | PDFStation"
        description="Choose the perfect plan for your file conversion needs. Free plan available with 5 conversions per day. Upgrade to Pro or Business for unlimited conversions and advanced features."
        canonical="/pricing"
      />

      <div className="container mx-auto px-4 py-4">
        <AdPlaceholder id="ad-top-banner" position="top-banner" />
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-3">
            <PricingTable />
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

