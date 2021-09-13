type IMetaProps = {
  description: string;
  className?: string
};

const SectionDescription = (props: IMetaProps) => {
  return (
    <div className={`section-description ${props.className || ''}`}>{props.description}</div>
  )
}

export { SectionDescription };
