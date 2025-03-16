"use client";

import Image from "next/image";

const AnalyticsPage = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center min-h-screen p-4">
      <div className="flex items-center mb-8">
        <Image
          className="bobbing-logo"
          src="/hypership.svg"
          alt="Hypership Logo"
          width={45}
          height={80}
          priority
        />
      </div>
      <p className="mb-4">
        By simply importing the{" "}
        <code className="hypership-code">&lt;HypershipAnalytics /&gt;</code>{" "}
        component, you can start logging page views and other metrics.
      </p>
      <p className="mb-4">
        Check the code in{" "}
        <code className="hypership-code">app/providers.tsx</code> to see how it
        works.
      </p>
      <p>
        Open the network tab in your browser and you&apos;ll see the page view
        events being logged.
      </p>
    </div>
  );
};

export default AnalyticsPage;
