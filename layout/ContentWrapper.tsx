
interface ContentWrapperProps {
  className?: string;
};

const ContentWrapper: React.FC<ContentWrapperProps> = ({
  className = '',
  children
}) => (
  <div
    className={`content-wrapper max-w-300 px-5 lg:px-30 flex mx-auto ${className}`}
  >
    {children}
  </div>
);

export { ContentWrapper };
