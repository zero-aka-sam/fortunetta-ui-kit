import React from 'react';
import './input.css';

export interface InputProps {
  primary?: boolean;
  backgroundColor?: string;
  size?: 'small' | 'medium' | 'large';
  type?:String,
  label: string;
}

/**
 * Primary UI component for user interaction
 */
export const Input: React.FC<InputProps> = ({
  primary = false,
  size = 'medium',
  type="text",
  backgroundColor,
  label,
  ...props
}) => {
  return (
    <input
      type={`${type}`}
      className={['storybook-input', `storybook-input--${size}`].join(' ')}
      style={{ backgroundColor }}
      {...props}
    />
  );
};