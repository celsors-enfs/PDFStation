/**
 * Mixpanel Analytics Module
 * 
 * Centralized analytics instrumentation for PDFStation.
 * All Mixpanel tracking should go through this module.
 * 
 * Features:
 * - Type-safe event tracking
 * - Automatic initialization with environment token
 * - NO-OP functions when token is missing (safe for development)
 * - Privacy-first: never tracks sensitive data
 */

import mixpanel from 'mixpanel-browser';

// Event names - centralized to avoid typos
export const Events = {
  PageViewed: 'Page Viewed',
  FileConversionStarted: 'File Conversion Started',
  FileConversionSucceeded: 'File Conversion Succeeded',
  FileConversionFailed: 'File Conversion Failed',
  ToolClicked: 'Tool Clicked',
  LanguageChanged: 'Language Changed',
} as const;

// Type helpers
export type EventName = typeof Events[keyof typeof Events];
export type EventProperties = Record<string, any>;

// Internal state
let isInitialized = false;
let isEnabled = false;

/**
 * Initialize Mixpanel
 * Should be called once at app startup
 */
export function initMixpanel(): void {
  // Don't initialize in test environment
  if (typeof window === 'undefined' || process.env.NODE_ENV === 'test') {
    return;
  }

  const token = import.meta.env.VITE_MIXPANEL_TOKEN;

  if (!token || token === 'SEU_TOKEN_AQUI' || token.trim() === '') {
    // Silently fail - analytics is optional
    if (process.env.NODE_ENV === 'development') {
      console.log('[Analytics] Mixpanel token not configured, analytics disabled');
    }
    return;
  }

  try {
    mixpanel.init(token, {
      debug: process.env.NODE_ENV === 'development',
      track_pageview: false, // We handle page views manually
      persistence: 'localStorage',
      autocapture: true,
      record_sessions_percent: 100,
    });

    isInitialized = true;
    isEnabled = true;

    if (process.env.NODE_ENV === 'development') {
      console.log('[Analytics] Mixpanel initialized');
    }
  } catch (error) {
    console.error('[Analytics] Failed to initialize Mixpanel:', error);
    isEnabled = false;
  }
}

/**
 * Track a generic event
 */
export function trackEvent(eventName: string, properties?: EventProperties): void {
  if (!isEnabled || !isInitialized) {
    return;
  }

  try {
    mixpanel.track(eventName, properties);
  } catch (error) {
    // Silently fail - don't break the app
    if (process.env.NODE_ENV === 'development') {
      console.error('[Analytics] Failed to track event:', error);
    }
  }
}

/**
 * Identify a user
 */
export function identifyUser(id: string, traits?: EventProperties): void {
  if (!isEnabled || !isInitialized) {
    return;
  }

  try {
    mixpanel.identify(id);
    if (traits) {
      mixpanel.people.set(traits);
    }
  } catch (error) {
    if (process.env.NODE_ENV === 'development') {
      console.error('[Analytics] Failed to identify user:', error);
    }
  }
}

/**
 * Set user properties
 */
export function setUserProps(props: EventProperties): void {
  if (!isEnabled || !isInitialized) {
    return;
  }

  try {
    mixpanel.people.set(props);
  } catch (error) {
    if (process.env.NODE_ENV === 'development') {
      console.error('[Analytics] Failed to set user props:', error);
    }
  }
}

/**
 * Track file conversion started
 */
export function trackFileConversionStarted(props: {
  tool_name: string;
  source_format: string;
  target_format: string;
  file_size_mb?: number;
  is_mobile?: boolean;
  plan?: string;
}): void {
  trackEvent(Events.FileConversionStarted, {
    ...props,
    plan: props.plan || 'free',
  });
}

/**
 * Track file conversion succeeded
 */
export function trackFileConversionSucceeded(props: {
  tool_name: string;
  source_format: string;
  target_format: string;
  file_size_mb?: number;
  result_file_size_mb?: number;
  conversion_time_ms?: number;
  is_mobile?: boolean;
  plan?: string;
}): void {
  trackEvent(Events.FileConversionSucceeded, {
    ...props,
    plan: props.plan || 'free',
  });
}

/**
 * Track file conversion failed
 */
export function trackFileConversionFailed(props: {
  tool_name: string;
  source_format: string;
  target_format: string;
  error_code?: number;
  error_message_simplified?: string;
}): void {
  trackEvent(Events.FileConversionFailed, props);
}

/**
 * Track tool clicked/opened
 */
export function trackToolClicked(props: {
  tool_name: string;
  position?: number;
  section?: string;
}): void {
  trackEvent(Events.ToolClicked, props);
}

/**
 * Track language change
 */
export function trackLanguageChanged(props: {
  from_language: string;
  to_language: string;
}): void {
  trackEvent(Events.LanguageChanged, props);
}

/**
 * Check if analytics is enabled
 */
export function isAnalyticsEnabled(): boolean {
  return isEnabled && isInitialized;
}

