import { ChangeEvent, FC, HTMLInputTypeAttribute } from 'react';
import { Textbox } from '@components/textboxes';
import { ErrorTooltip } from '@components/typographies';
import { IFormEvent } from '@interfaces/IFormEvent';

interface IProps {
  name?: string;
  editing?: boolean;
  value?: string | number;
  type?: HTMLInputTypeAttribute;
  className?: string;
  placeholder?: string;
  onChange?: (event: IFormEvent) => void;
  validate?: (value: unknown) => string | undefined;
}

export const TableTextbox: FC<IProps> = (props) => {
  const {
    onChange,
    validate,
    name,
    editing,
    value,
    type,
    placeholder,
    className,
  } = props;

  if (!editing)
    return <span className='text-gray-700 dark:text-gray-400'>{value}</span>;

  const message = editing && validate && validate(value);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange &&
      onChange({
        currentTarget: {
          name: name || '',
          value:
            type === 'number'
              ? parseInt(event.currentTarget.value)
              : event.currentTarget.value,
        },
      });
  };

  return (
    <div className='relative w-full box-border'>
      <Textbox
        min={0}
        type={type}
        className='py-1.5'
        name={name}
        onChange={handleChange}
        value={value}
        placeholder={placeholder}
      />
      {message && <ErrorTooltip>{message}</ErrorTooltip>}
    </div>
  );
};
