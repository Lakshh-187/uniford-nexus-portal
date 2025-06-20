
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
}

const SEO = ({ 
  title, 
  description, 
  keywords = "Uniford, institutes, UNCIF, Pitchburg, CSR Grants, Tender, Un-pitch, Uniwave, education, innovation, technology, scholarships, frontliners, academic excellence, research, development",
  canonical,
  ogImage = "https://lovable.dev/opengraph-image-p98pqg.png"
}: SEOProps) => {
  const fullTitle = `${title} | UNCIF - Uniford National Council of Institutes and Frontliners`;
  const siteUrl = "https://uncif.org";
  const fullCanonical = canonical ? `${siteUrl}${canonical}` : siteUrl;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="UNCIF - Uniford National Council of Institutes and Frontliners" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="canonical" href={fullCanonical} />

      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={fullCanonical} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content="UNCIF - Uniford National Council" />

      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@UNCIF_org" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* Additional SEO Meta Tags */}
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
      <meta name="distribution" content="Global" />
      <meta name="rating" content="General" />

      {/* Schema.org structured data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "UNCIF - Uniford National Council of Institutes and Frontliners",
          "url": siteUrl,
          "logo": ogImage,
          "description": description,
          "sameAs": [
            "https://twitter.com/UNCIF_org",
            "https://linkedin.com/company/uncif"
          ]
        })}
      </script>
    </Helmet>
  );
};

export default SEO;
