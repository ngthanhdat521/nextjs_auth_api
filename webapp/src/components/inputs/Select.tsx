import { SelectOption } from '@common-types/Controls';
import { cn } from '@utils/Common';
import { ChangeEventHandler, FC } from 'react';

interface IProps {
  options: SelectOption[];
  value?: string | number;
  name?: string;
  disabled?: boolean;
  className?: string;
  onChange?: ChangeEventHandler<HTMLSelectElement>;
  renderValue?: (option: SelectOption) => string | number;
  renderOption?: (option: SelectOption) => string | number;
}

export const Select: FC<IProps> = (props) => {
  const {
    options,
    value,
    name,
    disabled,
    className,
    onChange,
    renderValue,
    renderOption,
  } = props;

  return (
    <select
      disabled={disabled}
      value={value}
      name={name}
      style={{ boxShadow: 'none' }}
      onChange={onChange}
      className={cn(
        'bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg f focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white  dark:focus:border-blue-500 focus:shadow-none',
        className
      )}
    >
      {options.map((option, index) => (
        <option
          key={index}
          value={renderValue ? renderValue(option) : option.value}
        >
          {renderOption ? renderOption(option) : option.display}
        </option>
      ))}
    </select>
  );
};
