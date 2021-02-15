import React from 'react'

interface IconProps {
    color?: string;
    size?: Number;
} 

export const STORM: React.FC<IconProps> = ({ color, size}: IconProps) => (
    <svg fill={color} height={`${size}`} width={`${size}`} xmlns="http://www.w3.org/2000/svg"><path d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm7-26l-12.03 8.25 6.077 3.875L9 26l13.302-9.208-5.994-3.875z" fill-rule="evenodd"/></svg>
)
          
STORM.defaultProps = {
  color: '#000',
  size: 32,
}
          