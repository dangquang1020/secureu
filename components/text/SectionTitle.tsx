type IMetaProps = {
  title: string;
  className?: string
};

const SectionTitle = (props: IMetaProps) => {
  return (
    <h2 className={`section-title ${props.className || ''}`}>{props.title}</h2>
  )
}

export { SectionTitle };
