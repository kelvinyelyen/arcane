"use client"

import { useRouter } from "next/navigation";
import useAuth from "@/context/use-auth";

const ProtectedLayout = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const { authStatus } = useAuth();

  if (!authStatus) {
    router.push("/")
    return <></>;
  }

  return children;
};

export default ProtectedLayout;

