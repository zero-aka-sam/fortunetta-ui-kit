  import React from 'react';
  import './input.css';


  export const Input = ({
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
        className={['storybook-input', `storybook-input--${size}`,isIcon&&'input_icon'].join(' ')}
        style={{ backgroundColor }}
        {...props}
      />
      </div>
    );
  };