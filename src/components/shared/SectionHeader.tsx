type Props = {
  title: string;
  text: string;
  className?: string;
};

function SectionHeader({ title, text, className }: Props) {
  return (
    <div
      className={`flex items-center justify-between text-xs text-ink font-medium ${className}`}
    >
      <p className="[word-spacing:5px]">{title}</p>
      <p className="[word-spacing:5px]">{text}</p>
    </div>
  );
}

export default SectionHeader;
