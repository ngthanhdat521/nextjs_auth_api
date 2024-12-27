'use client';
import React, { useState, useRef, useEffect, FC, ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

interface IProps {
  children: [ReactNode, ReactNode];
  popupProps?: {
    className?: string;
  };
}

export const Dropdown: FC<IProps> = (props) => {
  const { children, popupProps } = props;
  const [visible, setVisible] = useState(false);
  const popupRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (
      popupRef.current &&
      !popupRef.current.contains(event.target as Node) &&
      contentRef.current &&
      !contentRef.current.contains(event.target as Node)
    ) {
      setVisible(false);
    }
  };

  useEffect(() => {
    if (visible) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [visible]);

  return (
    <div className='relative'>
      <div ref={contentRef} onClick={() => setVisible(!visible)}>
        {children[0]}
      </div>
      {visible && (
        <div
          ref={popupRef}
          className={twMerge(
            'absolute bottom-10 right-0',
            popupProps?.className
          )}
        >
          {children[1]}
        </div>
      )}
    </div>
  );
};
