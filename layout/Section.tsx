
interface SectionProps {
  className?: string;
};

const Section: React.FC<SectionProps> = ({
  className = '',
  children
}) => (
  <div
    className={`w-full mx-auto ${className}`}
  >
    {children}
  </div>
);

export { Section };
