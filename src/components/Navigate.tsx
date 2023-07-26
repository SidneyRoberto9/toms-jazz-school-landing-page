import { twMerge } from 'tailwind-merge';
import { ReactNode, ComponentProps } from 'react';

interface NavigateProps extends ComponentProps<'a'> {
  url: string;
  children: ReactNode;
}

export function Navigate({ url, children, className, ...props }: NavigateProps) {
  return (
    <a href={url} className={twMerge('text-black text-xl p-2 no-underline', className)} {...props}>
      {children}
    </a>
  );
}
