import React from 'react'

interface IconProps {
    color?: string;
    size?: Number;
} 

export const MTL: React.FC<IconProps> = ({ color, size, ...rest}: IconProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={`${size}`} height={`${size}`} viewBox="0 0 32 32" fill={color} {...rest} ><path d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zM8 9v14h1V9H8zm5 3v9h1v-9h-1zm5 2v5h1v-5h-1zm5-5v14h1V9h-1z"/></svg>
)
          
MTL.defaultProps = {
  color: '#000',
  size: 32,
}
          