import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SeoProps {
  title: string;
  description: string;
  canonical?: string;
  noIndex?: boolean;
  ogImage?: string;
}

export const Seo: React.FC<SeoProps> = ({
  title,
  description,
  canonical,
  noIndex = false,
  ogImage,
}) => {
  const siteUrl = typeof window !== 'undefined' ? window.location.origin : 'https://pdfstation.com';
  const fullUrl = canonical ? `${siteUrl}${canonical}` : siteUrl;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      
      {canonical && <link rel="canonical" href={fullUrl} />}
      
      {noIndex && <meta name="robots" content="noindex, nofollow" />}

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={fullUrl} />
      {ogImage && <meta property="og:image" content={ogImage} />}

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
    </Helmet>
  );
};




