export function Wordmark({ className = "" }: { className?: string }) {
  return (
    <span className={`font-sans font-normal uppercase tracking-[-0.02em] ${className}`}>
      nowt<span className="text-brass">.</span>
    </span>
  );
}
