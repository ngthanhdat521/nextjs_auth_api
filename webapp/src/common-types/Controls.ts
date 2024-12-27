import { ReactNode } from 'react';

export type SelectOption = {
    value: string | number;
    display: string | ReactNode;
}