export default function IconButton({ as: As = "a", className = "", ...props }) {
  return (
    <As
      className={`inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-white/90 hover:bg-white/10 transition ${className}`}
      {...props}
    />
  );
}
