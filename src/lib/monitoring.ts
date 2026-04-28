// TODO: wire to chosen error-monitoring vendor (Sentry, LogRocket, etc.)
// Replace the console.error call below with the vendor's capture method.

type ErrorContext = Record<string, string | number | boolean | undefined | null>;

export function captureError(err: Error, ctx?: ErrorContext): void {
  console.error("[monitoring] Unhandled error:", err, ctx ?? {});
}
