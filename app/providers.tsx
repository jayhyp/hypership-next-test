"use client";

import { HypershipAnalyticsProvider } from "@hypership/analytics-react";
import { HypershipEventsProvider } from "@hypership/events-react";
import { HypershipAuthProvider } from "@hypership/auth-react";
import "@hypership/auth-react/style";
import { StrictMode, useEffect, useState } from "react";

export default function Providers({ children }: { children: React.ReactNode }) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <StrictMode>
      <HypershipAuthProvider
        apiKey={process.env.NEXT_PUBLIC_HYPERSHIP_PUBLIC_KEY!}
      >
        <HypershipAnalyticsProvider
          apiKey={process.env.NEXT_PUBLIC_HYPERSHIP_PUBLIC_KEY!}
        />
        <HypershipEventsProvider
          apiKey={process.env.NEXT_PUBLIC_HYPERSHIP_PUBLIC_KEY!}
        >
          {children}
        </HypershipEventsProvider>
      </HypershipAuthProvider>
    </StrictMode>
  );
}
