"use client";

import { useEffect } from "react";

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <section className="min-h-screen flex flex-col items-center justify-center">
      <p>Oh no, something went wrong... maybe refresh?</p>
    </section>
  );
}
