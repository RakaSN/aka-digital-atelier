type ButtonProps = {
  children: React.ReactNode;
};

export function Button({ children }: ButtonProps) {
  return (
    <button className="text-sm text-zinc-300 transition hover:text-white">
      {children} →
    </button>
  );
}