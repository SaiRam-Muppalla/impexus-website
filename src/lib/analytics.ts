// TODO: wire to chosen analytics vendor (Plausible, GA4, Mixpanel, etc.)
// Call init() once in main.tsx after the app mounts.
// Call track() for key user actions (form submit, CTA click, topic view).

type EventProps = Record<string, string | number | boolean | undefined>;

export function init(): void {
  // TODO: analytics.init(import.meta.env.VITE_ANALYTICS_KEY)
}

export function track(event: string, props?: EventProps): void {
  if (import.meta.env.DEV) {
    console.debug("[analytics] track:", event, props ?? {});
  }
  // TODO: analytics.track(event, props)
}
