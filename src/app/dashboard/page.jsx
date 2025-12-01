"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { getToken, removeToken, authFetch } from "@/lib/api";
import Navbar from "@/components/Navbar";

export default function Dashboard() {
  const router = useRouter();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = getToken();
    if (!token) {
      router.push("/auth/login");
      return;
    }

    const fetchUser = async () => {
      const data = await authFetch("/auth/me");
      if (data?.user) setUser(data.user);
      else {
        removeToken();
        router.push("/auth/login");
      }
    };
    fetchUser();
  }, [router]);

  if (!user) return <p className="text-center mt-20">Loading...</p>;

  return (
    <div>
      <Navbar />
      <div className="min-h-screen flex flex-col items-center justify-center mt-20">
        <h1 className="text-3xl font-bold mb-4">Welcome, {user.name}</h1>
        <p className="text-gray-700">Role: {user.role}</p>
        <button
          onClick={() => {
            removeToken();
            router.push("/auth/login");
          }}
          className="mt-6 px-6 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition"
        >
          Logout
        </button>
      </div>
    </div>
  );
}
