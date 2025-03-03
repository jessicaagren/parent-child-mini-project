import './Button.scss';

type ButtonProps = {
  title: string;
  className?: string;
  clickFunction: () => void | null;
};

function Button({ title, className, clickFunction }: ButtonProps) {
  const handleClick = () => {
    clickFunction();
  };
  return (
    <>
      <button id='thisButton' className={className} onClick={handleClick}>
        {title}
      </button>
    </>
  );
}

export default Button;
