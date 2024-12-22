import { AnchorHTMLAttributes } from 'react';
import { cn } from '@/lib/utils'; // Import the `cn` utility function

type LinkBtnProps = {
  children?: React.ReactNode;
  className?: string;
  href: string;
  target?: string;
  rel?: string;
} & AnchorHTMLAttributes<HTMLAnchorElement>;

export default function LinkBtn({
  children,
  href,
  target,
  rel,
  className,
  ...rest
}: LinkBtnProps) {
  return (
    <a
      className={cn(
        "rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44 hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent",
        className
      )}
      href={href}
      target={target ?? '_blank'}
      rel={rel || (target === '_blank' ? 'noopener noreferrer' : undefined)}
      aria-label={rest['aria-label'] ?? (typeof children === 'string' ? children : undefined)}
      {...rest}
    >
      {children}
    </a>
  );
}
