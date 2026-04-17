"use client";

import posthog from "posthog-js";
import { PostHogProvider as PHProvider } from "posthog-js/react";
import { usePathname, useSearchParams } from "next/navigation";
import { useEffect, Suspense } from "react";

// Open Sorcery has no provisioned PostHog project yet. Leaving the upstream
// key in place would send site analytics to manaflow's dashboard. The web
// analytics stack is intentionally off until a project-owned key lands here.
const OPEN_SORCERY_POSTHOG_KEY = "";
if (typeof window !== "undefined" && OPEN_SORCERY_POSTHOG_KEY) {
  posthog.init(OPEN_SORCERY_POSTHOG_KEY, {
    api_host: "https://us.i.posthog.com",
    ui_host: "https://us.posthog.com",
    person_profiles: "identified_only",
    capture_pageview: false,
    capture_pageleave: true,
  });
}

function PageviewTracker() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (pathname && posthog) {
      let url = window.origin + pathname;
      const search = searchParams.toString();
      if (search) url += "?" + search;
      posthog.capture("$pageview", { $current_url: url });
    }
  }, [pathname, searchParams]);

  return null;
}

export function PostHogProvider({ children }: { children: React.ReactNode }) {
  return (
    <PHProvider client={posthog}>
      <Suspense fallback={null}>
        <PageviewTracker />
      </Suspense>
      {children}
    </PHProvider>
  );
}
