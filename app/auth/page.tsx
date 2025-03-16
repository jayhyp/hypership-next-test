"use client";

import { AuthFlowPage } from "@hypership/auth-react";
import { useRouter } from "next/navigation";

const AuthPage = () => {
  const router = useRouter();

  return <AuthFlowPage onAuthSuccess={() => router.push("/private")} />;
};

export default AuthPage;
