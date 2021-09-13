
interface ContentWrapperProps {
  className?: string;
};

const ContentWrapper: React.FC<ContentWrapperProps> = ({
  className = '',
  children
}) => (
  <div
    className={`content-wrapper ${className}`}
  >
    {children}
  </div>
);

export { ContentWrapper };
