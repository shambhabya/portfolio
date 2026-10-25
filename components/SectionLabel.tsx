export default function SectionLabel({
  number,
  children,
  className = "",
}: {
  number: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <span className="num-blob">{number}</span>
      <div className="flex flex-col gap-2">
        <span className="eyebrow text-ink">{children}</span>
        <span className="label-rule" />
      </div>
    </div>
  );
}
