import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://f2a1717d3c6bee7a99ed7fbf14878e42@o4508077560102912.ingest.us.sentry.io/4508077579501568",

  integrations: [Sentry.replayIntegration()],
  // Session Replay
  replaysSessionSampleRate: 0.1, // This sets the sample rate at 10%. You may want to change it to 100% while in development and then sample at a lower rate in production.
  replaysOnErrorSampleRate: 1.0, // If you're not already sampling the entire session, change the sample rate to 100% when sampling sessions where errors occur.
});
