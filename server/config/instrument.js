// Import with `import * as Sentry from "@sentry/node"` if you are using ESM
import * as Sentry from "@sentry/node"

Sentry.init({
  dsn: "https://20109004b9b744189f54eeb67f46c66c@o4508958611275776.ingest.us.sentry.io/4508958620254208",
  integrations: [
    Sentry.mongoIntegration(),
  ],
});