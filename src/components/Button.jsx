export default function Button({ as: As = "button", className = "", variant = "primary", ...props }) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-2xl px-5 py-3 text-sm font-semibold transition focus:outline-none focus:ring-2 focus:ring-white/20";

  const variants = {
    primary:
      "bg-white text-black hover:bg-white/90 shadow-glow",
    secondary:
      "bg-white/10 text-white hover:bg-white/14 border border-white/10",
    ghost:
      "bg-transparent text-white hover:bg-white/8 border border-white/10",
  };

  return <As className={`${base} ${variants[variant]} ${className}`} {...props} />;
}
