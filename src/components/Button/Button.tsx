import './Button.scss';

type ButtonProps = {
  title: string;
  buttonType?: 'button' | 'submit' | 'reset';
  className?: string;
  clickFunction?: () => void | null;
};

function Button({
  title,
  buttonType = 'button',
  className,
  clickFunction,
}: ButtonProps) {
  const handleClick = () => {
    clickFunction ? clickFunction() : null;
  };

  return (
    <>
      <button
        id='thisButton'
        type={buttonType}
        className={className}
        onClick={handleClick}>
        {title}
      </button>
    </>
  );
}

export default Button;
