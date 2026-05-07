import Link from 'next/link';

type StripeButtonProps = {
  href: string;
  label: string;
  price?: number;
  variant?: 'primary' | 'pink' | 'secondary';
  className?: string;
};

export function StripeButton({
  href,
  label,
  price,
  variant = 'primary',
  className = '',
}: StripeButtonProps) {
  const cls = variant === 'pink' ? 'btn-pink' : variant === 'secondary' ? 'btn-secondary' : 'btn-primary';
  return (
    <Link href={href} className={`${cls} ${className}`} target="_blank" rel="noopener noreferrer">
      {label}
      {price !== undefined && <span className="ml-2 font-serif text-base normal-case tracking-normal">${price}</span>}
    </Link>
  );
}
