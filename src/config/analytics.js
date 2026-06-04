// Configuración de Analytics para Valdemar Studio
// Actualiza estos valores con tus IDs reales

export const ANALYTICS_CONFIG = {
  // Google Analytics 4 ID
  // Obtén tu ID en: https://analytics.google.com/
  GOOGLE_ANALYTICS_ID: 'G-XXXXXXXXXX', // Reemplazar con tu GA ID
  
  // Hotjar (opcional - para heatmaps)
  HOTJAR_ID: null,
  
  // Cloudflare Web Analytics (automático en Cloudflare)
  CLOUDFLARE_ENABLED: true,
};

// Event tracking helpers
export const trackEvent = (eventName, eventData = {}) => {
  if (window.gtag) {
    window.gtag('event', eventName, eventData);
  }
};

// Track page views
export const trackPageView = (pagePath) => {
  if (window.gtag) {
    window.gtag('config', ANALYTICS_CONFIG.GOOGLE_ANALYTICS_ID, {
      page_path: pagePath,
    });
  }
};

// Track conversions (contacto/WhatsApp click)
export const trackConversion = () => {
  trackEvent('conversion', {
    event_category: 'engagement',
    event_label: 'contact_click',
  });
};
