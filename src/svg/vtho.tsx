import React from 'react'

interface IconProps {
    color?: string;
    size?: Number;
} 

export const VTHO: React.FC<IconProps> = ({ color, size, ...rest}: IconProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={`${size}`} height={`${size}`} viewBox="0 0 32 32" fill={color} {...rest} ><path d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm4.272-26.942h-5.763l-4.487 11.78h4.45l-3.94 10.104 12.18-14.3h-5.1l5.683-7.584h-3.023z"/></svg>
)
          
VTHO.defaultProps = {
  color: '#000',
  size: 32,
}
          