import React from 'react'

interface IconProps {
    color?: string;
    size?: Number;
} 

export const WAVES: React.FC<IconProps> = ({ color, size, ...rest}: IconProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={`${size}`} height={`${size}`} viewBox="0 0 32 32" fill={color} {...rest} ><path d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm0-26L6 16l10 10 10-10z" fill-rule="evenodd"/></svg>
)
          
WAVES.defaultProps = {
  color: '#000',
  size: 32,
}
            
            