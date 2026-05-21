"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  if (process.env.NODE_ENV === "development") {
    console.error(error);
  }

  return (
    <div className="flex min-h-[50vh] flex-col items-center justify-center px-4 py-20">
      <h1 className="font-display text-2xl font-bold text-text sm:text-3xl">
        Something went wrong
      </h1>
      <p className="mt-3 max-w-md text-center text-muted">
        Please try again. If the problem continues, email hello@izzystudios.com.
      </p>
      <button
        type="button"
        onClick={() => reset()}
        className="mt-8 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
      >
        Try again
      </button>
    </div>
  );
}
