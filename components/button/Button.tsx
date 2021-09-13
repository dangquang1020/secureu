

type IButtonProps = {
  className?: string;
  children: string;
};

const Button = (props: IButtonProps) => {
  return (
    <div className={props.className}>
      {props.children}
    </div>
  );
};

export { Button };
