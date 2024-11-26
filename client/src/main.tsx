import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Switch, Route } from "wouter";
import "./index.css";
import { SWRConfig } from "swr";
import { Analytics } from '@vercel/analytics/react';
import { onCLS, onFID, onLCP } from 'web-vitals';
import { fetcher } from "./lib/fetcher";
import Home from "./pages/Home";

// Initialize analytics and web vitals reporting
const reportCallback = ({ name, value, rating }: any) => {
  // Send metrics to analytics
  console.log({ name, value, rating });
};

// Report Core Web Vitals

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <SWRConfig value={{ fetcher }}>
      <Switch>
        <Route path="/" component={Home} />
        <Route>404 Page Not Found</Route>
      </Switch>
      <Analytics />
    </SWRConfig>
  </StrictMode>,
);
