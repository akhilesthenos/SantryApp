import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
//Sentry for error alerts in production
import * as Sentry from "@sentry/react";
import { BrowserTracing } from "@sentry/tracing";

Sentry.init({
    dsn:
        "https://1d8b3e30eca84a858cfa4a1962110b1d@o1331499.ingest.sentry.io/6595791",
    integrations: [new BrowserTracing()],

    // Set tracesSampleRate to 1.0 to capture 100%
    // of transactions for performance monitoring.
    // We recommend adjusting this value in production
    tracesSampleRate: 1.0,
});
//end of sentry

ReactDOM.render(<App />, document.getElementById("root"));
