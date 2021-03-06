import React from 'react'

interface IconProps {
    color?: string;
    size?: Number;
} 

export const VIB: React.FC<IconProps> = ({ color, size, ...rest}: IconProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={`${size}`} height={`${size}`} viewBox="0 0 32 32" fill={color} {...rest} ><path d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zM7 7l10.2 18H22V7h-3.6v12.775L11.2 7z"/></svg>
)
          
VIB.defaultProps = {
  color: '#000',
  size: 32,
}
          