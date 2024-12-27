import { ChangeEvent, FC, HTMLInputTypeAttribute } from 'react';
import { Textbox } from '@components/textboxes';
import { ErrorTooltip } from '@components/typographies';
import { cn } from '@utils/Common';

interface IProps {
  name?: string;
  value?: string | number;
  type?: HTMLInputTypeAttribute;
  className?: string;
  placeholder?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  validate?: (value: unknown) => string | undefined;
}

export const FormTextbox: FC<IProps> = (props) => {
  const { onChange, validate, name, value, type, placeholder, className } =
    props;

  const message = validate && validate(value);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange && onChange(event);
  };

  return (
    <div className='relative w-full box-border'>
      <Textbox
        min={0}
        type={type}
        className={cn('py-1.5', className)}
        name={name}
        onChange={handleChange}
        value={value}
        placeholder={placeholder}
      />
      {message && <ErrorTooltip>{message}</ErrorTooltip>}
    </div>
  );
};
