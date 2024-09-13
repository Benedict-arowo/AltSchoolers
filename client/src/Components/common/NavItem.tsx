import { ReactNode } from 'react';

interface NavItemProps {
  href: string;
  icon: ReactNode;
  label: string;
  badgeCount?: number;
  isActive?: boolean;
}

const NavItem = ({ href, icon, label, badgeCount, isActive }: NavItemProps) => {
  return (
    <a
      href={href}
      className={`flex items-center gap-3 rounded-lg p-2 transition-all hover:text-white hover:bg-primary ${
        isActive ? 'bg-primary text-white' : ''
      }`}
    >
      {icon}
      <span className="hidden lg:block font-light text-sm">{label}</span>
      {badgeCount !== undefined && (
        <span className="hidden lg:flex ml-auto bg-[#3BBA94] h-5 w-5 shrink-0 items-center justify-center rounded-full text-white text-xs font-light">
          {badgeCount}
        </span>
      )}
    </a>
  );
};

export default NavItem;
