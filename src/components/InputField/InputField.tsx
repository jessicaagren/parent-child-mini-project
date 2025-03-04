import './InputField.scss';

type InputFieldProps = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onEnterPress?: () => void;
  placeholder?: string;
  maxLength?: number;
  autoFocus?: boolean;
  type?: string;
  name?: string;
  id?: string;
  className?: string;
  required?: boolean;
};

function InputField({
  value,
  onChange,
  onEnterPress,
  placeholder = '',
  maxLength,
  autoFocus = false,
  type = 'text',
  name,
  id,
  className = 'InputField',
  required = false,
}: InputFieldProps) {
  return (
    <input
      autoFocus={autoFocus}
      type={type}
      name={name}
      id={id}
      placeholder={placeholder}
      maxLength={maxLength}
      value={value}
      onChange={onChange}
      onKeyDown={(e) => onEnterPress && e.key === 'Enter' && onEnterPress()}
      className={className}
      required={required}
    />
  );
}

export default InputField;
