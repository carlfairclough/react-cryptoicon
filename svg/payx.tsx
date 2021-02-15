import React from 'react'

interface IconProps {
    color?: string;
    size?: Number;
} 

export const PAYX: React.FC<IconProps> = ({ color, size}: IconProps) => (
    <svg width={`${size}`} height={`${size}`} fill={color} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm-4.313-21.938h.032c2.875.063 5.75-.062 8.625.063.718 0 1.562.344 1.718 1.094.25 1.75-1.218 3.344-2.812 3.75-1.75.281-3.5.187-5.219.187a923.905 923.905 0 01-1.25 3.063c2.094 0 4.188.093 6.25-.219a8.712 8.712 0 006.344-5.688c.5-1.312.719-2.968-.281-4.124C24.25 7.125 22.75 7.125 21.5 7.03L12.937 7l-1.25 3.063zM8 10.906v.031l-1.375 3.438h10.188l1.343-3.469H8zm1.625 4.25h.031L6 24.531h3.469l3.687-9.375H9.625z"/></svg>
)
          
PAYX.defaultProps = {
  color: '#000',
  size: 32,
}
          