import { twMerge } from 'tailwind-merge';
import { ReactNode, ComponentProps } from 'react';
import Link from 'next/link';

interface ButtonProps extends ComponentProps<'button'> {
  children: ReactNode;
  navigateTo?: string;
}

export function Button({ children, className, navigateTo = '' }: ButtonProps) {
  return (
    <Link
      href={navigateTo}
      className={twMerge(
        'bg-primary border-2 border-solid border-black shadow-card text-black block text-xl px-4 py-3 max-w-[14rem] text-center no-underline uppercase',
        className,
      )}>
      {children}
    </Link>
  );
}
