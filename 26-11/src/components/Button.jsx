import React from 'react';

export default function Button({ onClick, children, variant = 'primary', className = '', ...rest }) {
const base = 'btn';
return (
<button
className={`${base} ${className}`}
onClick={onClick}
{...rest}
>
{children}
</button>
);
}