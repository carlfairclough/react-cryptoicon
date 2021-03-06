import React from 'react'

interface IconProps {
    color?: string;
    size?: Number;
} 

export const BLCN: React.FC<IconProps> = ({ color, size, ...rest}: IconProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={`${size}`} height={`${size}`} viewBox="0 0 32 32" fill={color} {...rest} ><path d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zM7.9 7a.9.9 0 00-.9.9v6.2a.9.9 0 00.9.9h6.2a.9.9 0 00.9-.9V7.9a.9.9 0 00-.9-.9zm10 0a.9.9 0 00-.9.9v6.2a.9.9 0 00.9.9h6.2a.9.9 0 00.9-.9V7.9a.9.9 0 00-.9-.9zm0 10a.9.9 0 00-.9.9v6.2a.9.9 0 00.9.9h6.2a.9.9 0 00.9-.9v-6.2a.9.9 0 00-.9-.9zm-10 0a.9.9 0 00-.9.9v6.2a.9.9 0 00.9.9h6.2a.9.9 0 00.9-.9v-6.2a.9.9 0 00-.9-.9z" fill-rule="evenodd"/></svg>
)
          
BLCN.defaultProps = {
  color: '#000',
  size: 32,
}
          