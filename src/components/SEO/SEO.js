import { useEffect } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';

// eslint-disable-next-line no-unused-vars
const SEO = ({ 
  title, 
  description, 
  keywords, 
  image, 
  url, 
  type = 'website' 
}) => {
  const { language } = useLanguage();

  useEffect(() => {
    // Update document title
    if (title) {
      document.title = title;
    }

    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription && description) {
      metaDescription.setAttribute('content', description);
    }

    // Update meta keywords
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords && keywords) {
      metaKeywords.setAttribute('content', keywords);
    }

    // Update Open Graph tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle && title) {
      ogTitle.setAttribute('content', title);
    }

    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription && description) {
      ogDescription.setAttribute('content', description);
    }

    const ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl && url) {
      ogUrl.setAttribute('content', url);
    }

    const ogImage = document.querySelector('meta[property="og:image"]');
    if (ogImage && image) {
      ogImage.setAttribute('content', image);
    }

    const ogType = document.querySelector('meta[property="og:type"]');
    if (ogType && type) {
      ogType.setAttribute('content', type);
    }

    // Update Twitter tags
    const twitterTitle = document.querySelector('meta[property="twitter:title"]');
    if (twitterTitle && title) {
      twitterTitle.setAttribute('content', title);
    }

    const twitterDescription = document.querySelector('meta[property="twitter:description"]');
    if (twitterDescription && description) {
      twitterDescription.setAttribute('content', description);
    }

    const twitterImage = document.querySelector('meta[property="twitter:image"]');
    if (twitterImage && image) {
      twitterImage.setAttribute('content', image);
    }

    // Update canonical URL
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    if (canonical && url) {
      canonical.setAttribute('href', url);
    }

    // Update hreflang tags for language versions
    const baseUrl = 'https://podiumracing-me.vercel.app';
    const currentPath = window.location.pathname;
    
    // Remove existing hreflang tags
    const existingHreflang = document.querySelectorAll('link[rel="alternate"][hreflang]');
    existingHreflang.forEach(link => link.remove());

    // Add hreflang tags
    const hreflangEn = document.createElement('link');
    hreflangEn.setAttribute('rel', 'alternate');
    hreflangEn.setAttribute('hreflang', 'en');
    hreflangEn.setAttribute('href', `${baseUrl}${currentPath}`);
    document.head.appendChild(hreflangEn);

    const hreflangAr = document.createElement('link');
    hreflangAr.setAttribute('rel', 'alternate');
    hreflangAr.setAttribute('hreflang', 'ar');
    hreflangAr.setAttribute('href', `${baseUrl}${currentPath}`);
    document.head.appendChild(hreflangAr);

    const hreflangXDefault = document.createElement('link');
    hreflangXDefault.setAttribute('rel', 'alternate');
    hreflangXDefault.setAttribute('hreflang', 'x-default');
    hreflangXDefault.setAttribute('href', `${baseUrl}${currentPath}`);
    document.head.appendChild(hreflangXDefault);

  }, [title, description, keywords, image, url, type, language]);

  return null; // This component doesn't render anything
};

export default SEO;
