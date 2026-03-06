interface SectionHeadingProps {
  children: React.ReactNode;
}

export function SectionHeading({ children }: SectionHeadingProps) {
  return (
    <h2 className="text-2xl font-normal text-gray-900 mb-8 tracking-tight">
      {children}
    </h2>
  );
}
