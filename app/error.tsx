"use client";

import Link from "next/link";

export default function Error() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md max-w-md">
        <h1 className="text-6xl text-red-500">Oops!</h1>
        <p className="text-2xl text-gray-700 mb-4">Something went wrong.</p>
        <p className="text-lg text-gray-700 mt-4">
          You can try going{" "}
          <Link href="/" className="text-blue-500 hover:underline">
            back to the homepage
          </Link>
        </p>
      </div>
    </div>
  );
}
