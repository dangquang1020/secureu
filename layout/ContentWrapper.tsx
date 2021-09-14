
interface ContentWrapperProps {
  className?: string;
};

const ContentWrapper: React.FC<ContentWrapperProps> = ({
  className = '',
  children
}) => (
  <div
    className={`max-w-300 px-5 lg:px-20 xl:px-30 flex mx-auto ${className}`}
  >
    {children}
  </div>
);

export { ContentWrapper };
