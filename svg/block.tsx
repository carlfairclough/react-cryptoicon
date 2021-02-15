import React from 'react'

interface IconProps {
    color?: string;
    size?: Number;
} 

export const BLOCK: React.FC<IconProps> = ({ color, size}: IconProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={`${size}`} height={`${size}`} fill={color}><path d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zM11.022 7l5.069 9-5.16 9H21.25l5.25-9-5.25-9H11.022zm5.43 3.166h2.988L22.789 16l-3.35 5.834h-2.986L19.802 16l-3.35-5.834zm-4.34.86L10.29 7.79 5.5 16l4.748 8.14 1.84-3.21L9.21 16l2.902-4.974z"/></svg>
)
          
BLOCK.defaultProps = {
  color: '#000',
  size: 32,
}
          