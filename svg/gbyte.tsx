import React from 'react'

interface IconProps {
    color?: string;
    size?: Number;
} 

export const GBYTE: React.FC<IconProps> = ({ color, size}: IconProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={`${size}`} height={`${size}`} fill={color}><path d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm0-5c6.075 0 11-4.925 11-11S22.075 5 16 5 5 9.925 5 16s4.925 11 11 11z"/></svg>
)
          
GBYTE.defaultProps = {
  color: '#000',
  size: 32,
}
          