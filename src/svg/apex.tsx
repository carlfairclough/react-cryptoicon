import React from 'react'

interface IconProps {
    color?: string;
    size?: Number;
} 

export const APEX: React.FC<IconProps> = ({ color, size, ...rest}: IconProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={`${size}`} height={`${size}`} viewBox="0 0 32 32" fill={color} {...rest} ><path fill-rule="evenodd" d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zM6 19.25v4.25l10-12.75L26 23.5v-4.25L16 6.5 6 19.25zm10.5 1.25a2.5 2.5 0 100-5 2.5 2.5 0 000 5z"/></svg>
)
          
APEX.defaultProps = {
  color: '#000',
  size: 32,
}
          