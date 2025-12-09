/**
 * Hook for tracking page views
 * 
 * Automatically tracks page views when route changes.
 * Should be used once at the app level.
 */

import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { trackEvent, Events } from '@/lib/analytics/mixpanel';
import { useLanguage } from '@/contexts/LanguageContext';

/**
 * Get friendly page name from path
 */
function getPageName(pathname: string): string {
  if (pathname === '/') return 'Home';
  if (pathname.startsWith('/tools/')) {
    const slug = pathname.replace('/tools/', '');
    return `Tool: ${slug.replace(/-/g, ' ')}`;
  }
  if (pathname === '/about') return 'About';
  if (pathname === '/faq') return 'FAQ';
  if (pathname === '/login') return 'Login';
  if (pathname === '/signup') return 'Sign Up';
  if (pathname === '/privacy-policy') return 'Privacy Policy';
  if (pathname === '/terms-of-service') return 'Terms of Service';
  if (pathname === '/cookie-policy') return 'Cookie Policy';
  return pathname;
}

/**
 * Hook to track page views automatically
 */
export function usePageTracking(): void {
  const location = useLocation();
  const { language } = useLanguage();

  useEffect(() => {
    // Small delay to ensure page is fully loaded
    const timer = setTimeout(() => {
      trackEvent(Events.PageViewed, {
        path: location.pathname,
        page_name: getPageName(location.pathname),
        title: document.title,
        referrer: document.referrer || undefined,
        language: language,
      });
    }, 100);

    return () => clearTimeout(timer);
  }, [location.pathname, language]);
}

