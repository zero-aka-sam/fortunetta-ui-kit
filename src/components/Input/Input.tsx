  import React from 'react';
  import './input.css';

  export interface InputProps {
    primary?: boolean;
    backgroundColor?: string;
    size?: 'small' | 'medium' | 'large';
    type?:String,
    label: string;
    isIcon?: boolean,
    iconName?: string
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
    iconName,
    isIcon = false,
    ...props
  }) => {
    const inputIcons = isIcon ? 'inputIcons' : '';
    return (
      <div className = {inputIcons}>
        {isIcon ? <img src={iconName} alt = {iconName} className='icons' /> : ''}
        <input
        type={`${type}`}
        className={['storybook-input', `storybook-input--${size}`].join(' ')}
        style={{ backgroundColor }}
        {...props}
      />
      </div>
    );
  };