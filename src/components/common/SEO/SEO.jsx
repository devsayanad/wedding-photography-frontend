import React from "react";
import { Helmet } from "react-helmet-async";

const SEO = ({
  title = "Eternal Moments Wedding Photography",
  description = "Professional wedding photography capturing authentic, romantic moments",
  keywords = "wedding photographer, wedding photography, engagement photos",
  ogImage = "https://eternalmoments.com/og-image.jpg",
  url = "https://eternalmoments.com",
  type = "website",
}) => {
  // if the provided title already contains the brand, don't append it again
  const brand = "Eternal Moments Photography";
  const siteTitle = title.includes("Eternal Moments")
    ? title
    : `${title} | ${brand}`;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>{siteTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={brand} />
      <meta name="robots" content="index, follow" />

      {/* Open Graph */}
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={brand} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={siteTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* Canonical */}
      <link rel="canonical" href={url} />

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          name: "Eternal Moments Wedding Photography",
          description: description,
          url: url,
          telephone: "+977-123-4567",
          address: {
            "@type": "PostalAddress",
            streetAddress: "simpani",
            addressLocality: "Pokhara",
            addressRegion: "PKR",
            postalCode: "14777",
            addressCountry: "NP",
          },
          geo: {
            "@type": "GeoCoordinates",
            latitude: 40.7128,
            longitude: -74.006,
          },
          openingHours: "Mo-Fr 09:00-18:00",
          priceRange: "$$$",
          sameAs: [
            "https://www.instagram.com/eternalmoments",
            "https://www.facebook.com/eternalmoments",
            "https://www.pinterest.com/eternalmoments",
          ],
        })}
      </script>
    </Helmet>
  );
};

export default SEO;
