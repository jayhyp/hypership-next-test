"use client";

import { useHypershipEvents } from "@hypership/events-react";
import Image from "next/image";

const EventsPage = () => {
  const { trackEvent } = useHypershipEvents();

  const handleClick = () => {
    // This is the event key you created in your hypership project dashboard
    // you can pass any data you want to the event as metadata
    trackEvent("test-event", {
      button_text: "Trigger Event",
      additional_data: "This is some additional data",
      nested_data: {
        nested_key: "nested_value",
      },
    });
    alert(
      "Event triggered successfully! Check your Hypership dashboard to see the event."
    );
  };

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
        The <code className="hypership-code">test-event</code> is already
        created in your Hypership project&apos;s dashboard. Click the button
        below to trigger it.
      </p>
      <p className="mb-8">
        Check this code in{" "}
        <code className="hypership-code">app/events/page.tsx</code> to see how
        it works.
      </p>
      <button
        onClick={handleClick}
        className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
      >
        Trigger Event
      </button>
    </div>
  );
};

export default EventsPage;
