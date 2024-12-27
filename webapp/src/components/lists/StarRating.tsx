import { StarIcon } from '@components/icons';
import { cn } from '@utils/Common';
import React, { FC, useState } from 'react';

interface IProps {
  rating?: boolean;
  score: number;
  className?: string;
  onRating?: (score: number) => void;
}

export const StarRating: FC<IProps> = (props) => {
  const { score, rating = false, onRating } = props;

  const [selected, setSelected] = useState(-1);

  return (
    <div className='flex items-center'>
      {Array.from({ length: 5 }).map((_, index) => (
        <span
          onMouseOver={() => rating && setSelected(index)}
          onMouseOut={() => rating && setSelected(-1)}
          onClick={() => onRating && onRating(index + 1)}
        >
          <StarIcon
            key={index}
            className={cn({
              'text-yellow-300 dark:text-yellow-400':
                (score - 1 >= index && selected < 0) || selected >= index,
              'cursor-pointer': rating,
            })}
          />
        </span>
      ))}
    </div>
  );
};
