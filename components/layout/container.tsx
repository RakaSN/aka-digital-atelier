type ContainerProps = {
  children: React.ReactNode;
};

export function Container({
  children,
}: ContainerProps) {
  return (
    <div className="mx-auto w-full max-w-[1400px] px-8 lg:px-12">
      {children}
    </div>
  );
}