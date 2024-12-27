import { Button, OutlinedButton } from '@components/buttons';
import { Overlay } from '@components/templates';
import { FC, ReactNode } from 'react';
import { useTranslations } from 'use-intl';

export interface ICommonDialogProps {
  content: ReactNode;
  onCancel?: () => void;
  onConfirm?: () => void;
  confirm?: {
    disabled?: boolean;
  };
}

export const CommonDialog: FC<ICommonDialogProps> = (props) => {
  const { content, confirm, onConfirm, onCancel } = props;
  const t = useTranslations('common');

  return (
    <Overlay>
      <div className='fixed inset-0 z-10 w-screen overflow-y-auto'>
        <div className='flex min-h-full justify-center p-4 text-center items-center'>
          <div className='relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all'>
            <div className='bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4'>
              <div className='flex items-start'>
                <div className='ml-4'>
                  <h3 className='text-base font-semibold leading-6 text-gray-900'>
                    {t('confirmation')}
                  </h3>
                  <div className='mt-2'>
                    <div className='text-sm text-gray-500'>{content}</div>
                  </div>
                </div>
              </div>
            </div>
            <div className='px-4 py-3 flex gap-3 justify-end'>
              <OutlinedButton
                onClick={onCancel}
                type='button'
                className='px-3 py-2 text-sm font-semibold'
              >
                {t('cancel')}
              </OutlinedButton>
              <Button
                disabled={confirm?.disabled}
                onClick={onConfirm}
                type='button'
                className='px-3 py-2 text-sm font-semibold'
              >
                {t('save')}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Overlay>
  );
};
