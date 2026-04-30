import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({ title, description, url, image }) => {
  const siteTitle = title ? `${title} | MedRoam` : 'MedRoam';
  const metaDescription = description || 'MedRoam - Your medical roaming platform.';
  const siteUrl = url || 'http://localhost:5173';
  const ogImage = image || `${siteUrl}/default-og-image.jpg`;

  return (
    <Helmet>
      {/* Basic HTML Meta Tags */}
      <title>{siteTitle}</title>
      <meta name="description" content={metaDescription} />
      <link rel="canonical" href={siteUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={siteUrl} />
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:image" content={ogImage} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={siteUrl} />
      <meta property="twitter:title" content={siteTitle} />
      <meta property="twitter:description" content={metaDescription} />
      <meta property="twitter:image" content={ogImage} />
    </Helmet>
  );
};

export default SEO;
