import React from 'react';
import './Badge.scss';

interface BadgeProps {
  children: React.ReactNode;
}

const Badge = ({ children }: BadgeProps) => {
  return <span className="badge">{children}</span>;
};

export default Badge;
