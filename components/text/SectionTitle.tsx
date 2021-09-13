type IMetaProps = {
  title: string;
};

const SectionTitle = (props: IMetaProps) => {
  return (
    <h2>{props.title}</h2>
  )
}

export { SectionTitle };
