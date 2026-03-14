export default function MediaPlaceholder({ className, text = "MEDIA PLACEHOLDER" }: { className?: string, text?: string }) {
  return (
    <div className={`bg-neutral-100 flex items-center justify-center border border-neutral-200 overflow-hidden relative ${className}`}>
      <span className="text-neutral-400 font-mono text-xs md:text-sm tracking-widest uppercase z-10 mix-blend-difference text-center px-4">{text}</span>
      {/* Subtle animated gradient pattern in the background */}
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-neutral-300 to-transparent"></div>
    </div>
  );
}
