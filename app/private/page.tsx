"use client";

import { useHypershipAuth } from "@hypership/auth-react";
import { useRouter } from "next/navigation";
import Image from "next/image";

const PrivatePage = () => {
  const router = useRouter();
  const { isAuthenticated, currentUser, signOut, authenticating } =
    useHypershipAuth();

  if (authenticating) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        Loading...
      </div>
    );
  }

  if (!isAuthenticated) {
    router.push("/auth");
    return null;
  }

  const handleSignOut = async () => {
    await signOut();
    router.push("/auth");
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
      <div className="max-w-md w-full space-y-4">
        <div className="terminal-content">
          <p className="text-lg mb-4">
            This page is only visible to signed-in users - if you&apos;re seeing
            this, it means you&apos;ve successfully authenticated.
          </p>
          <div className="comment mb-4">
            <p className="mb-2">Current User: {currentUser?.username}</p>
            <p>User ID: {currentUser?.id}</p>
          </div>
        </div>
        <button
          className="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white dark:bg-purple-500 dark:hover:bg-purple-600 rounded-lg transition-colors"
          onClick={handleSignOut}
        >
          Sign Out
        </button>
      </div>
    </div>
  );
};

export default PrivatePage;
