'use client';
import { FC } from 'react';
import { Textbox } from '@components/textboxes';
import { EmotionIcon, SendIcon } from '@components/icons';
import Picker from 'emoji-picker-react';
import { IconButton } from '../buttons';
import { Dropdown } from '../dropdowns';

export const CommentBox: FC = () => {
  return (
    <div className='w-full flex items-center justify-between p-3'>
      <img
        src='https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
        alt=''
        className='h-10 w-10 rounded-full bg-gray-50'
      />
      <div className='relative w-[75%]'>
        <Textbox type='text' className='' placeholder='Send a comment' />
        <div className='absolute inset-y-0 right-0 flex items-center pr-3'></div>
      </div>
      <Dropdown>
        <IconButton>
          <EmotionIcon className='w-7 h-7' />
        </IconButton>
        <Picker onEmojiClick={(...rest) => console.log(rest)} />
      </Dropdown>
      <IconButton>
        <SendIcon className='w-7 h-7' />
      </IconButton>
    </div>
  );
};
