import clsx from 'clsx';
import { ReactNode } from 'react';

interface CustomButtonProps {
  label: string;
  icon?: ReactNode;
  variant?: 'default' | 'secondary';
  onClick?: () => void;
  className?: string;
}

const CustomButton = ({
  label,
  icon,
  variant = 'default',
  onClick,
  className,
}: CustomButtonProps) => {
  return (
    <button
      className={clsx(
        'flex items-center p-2 gap-2 text-sm font-medium rounded-md',
        variant === 'default' ? 'bg-secondary' : 'bg-primary text-white',
        className
      )}
      onClick={onClick}
    >
      <span className="hidden sm:block">{label}</span>
      {icon && <span>{icon}</span>}
    </button>
  );
};

export default CustomButton;
