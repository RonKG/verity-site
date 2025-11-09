import { useCurrency } from '@/contexts/CurrencyContext';

export default function CurrencyDisplay({ amountInKSH, showBoth = true, className = '' }) {
  const { currency, formatPrice } = useCurrency();

  // If showing in KSH or user prefers KSH, just show KSH
  if (currency === 'KSH') {
    return <span className={className}>{formatPrice(amountInKSH, 'KSH')}</span>;
  }

  // For other currencies, show converted amount with KSH in parentheses
  if (showBoth) {
    return (
      <span className={className}>
        {formatPrice(amountInKSH, currency)}
        <span style={{ 
          fontSize: '0.85em', 
          color: 'var(--theme-text-muted)', 
          marginLeft: '0.35rem',
          fontWeight: 'normal'
        }}>
          ({formatPrice(amountInKSH, 'KSH')})
        </span>
      </span>
    );
  }

  // Show only converted currency
  return <span className={className}>{formatPrice(amountInKSH, currency)}</span>;
}
