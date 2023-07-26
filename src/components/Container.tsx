import { twMerge } from 'tailwind-merge';
import { ReactNode, ComponentProps } from 'react';

interface ContainerProps extends ComponentProps<'div'> {
  children: ReactNode;
}
export function Container({ children, className, ...props }: ContainerProps) {
  return (
    <div
      className={twMerge(
        'lg:flex lg:items-center lg:mx-auto lg:my-0 lg:max-w-6xl xl:max-w-[90rem]',
        className,
      )}
      {...props}>
      {children}
    </div>
  );
}
