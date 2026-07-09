"use client";

import { signIn } from "next-auth/react";

export default function LoginPage() {
  return (
    <main className="min-h-screen flex items-center justify-center">
      <div className="rounded-xl border p-8">
        <h1 className="text-2xl font-semibold">
          Login to Raksa
        </h1>

        <button
          type="button"
          onClick={() => signIn("google")}
          className="mt-6 rounded-lg bg-black px-6 py-3 text-white"
        >
          Continue with Google
        </button>
      </div>
    </main>
  );
}