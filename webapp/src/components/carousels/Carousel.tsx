import { cn } from '@utils/Common';
import React, { FC, useState } from 'react';

interface IProps {
  pictures: string[];
}

export const Carousel: FC<IProps> = (props) => {
  const { pictures } = props;
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % pictures.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + pictures.length) % pictures.length
    );
  };

  return (
    <div>
      <div className='relative w-[400px]'>
        <img
          src={pictures[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          className='w-[400px] h-[400px] object-cover transition-transform duration-700 ease-in-out transform shadow mb-5 rounded-lg'
        />
        <button
          onClick={prevSlide}
          type='button'
          className='absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none'
          data-carousel-prev=''
        >
          <span className='inline-flex items-center justify-center w-7 h-7 rounded-full bg-gray-400 hover:bg-gray-500'>
            <svg
              className='w-2.5 h-2.5 text-white rtl:rotate-180'
              aria-hidden='true'
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 6 10'
            >
              <path
                stroke='currentColor'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M5 1 1 5l4 4'
              />
            </svg>
            <span className='sr-only'>Previous</span>
          </span>
        </button>

        <button
          onClick={nextSlide}
          type='button'
          className='absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none'
          data-carousel-next=''
        >
          <span className='inline-flex items-center justify-center w-7 h-7 rounded-full bg-gray-400 hover:bg-gray-500'>
            <svg
              className='w-2.5 h-2.5 text-white rtl:rotate-180'
              aria-hidden='true'
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 6 10'
            >
              <path
                stroke='currentColor'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='m1 9 4-4-4-4'
              />
            </svg>
            <span className='sr-only'>Next</span>
          </span>
        </button>
      </div>
      <div className='flex justify-center gap-5'>
        {pictures.map((picture, index) => (
          <img
            key={index}
            src={picture}
            alt={`Slide ${index + 1}`}
            className={cn('w-[100px] rounded-lg shadow', {
              'border-[3px] border-indigo-600': index === currentIndex
            })}
          />
        ))}
      </div>
    </div>
  );
};
