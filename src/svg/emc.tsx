import React from 'react'

interface IconProps {
    color?: string;
    size?: Number;
} 

export const EMC: React.FC<IconProps> = ({ color, size}: IconProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={`${`${size}`}`} height={`${`${size}`}`} fill={color}><path fill-rule="evenodd" d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zM8 8v3.2h6.4v3.2H8v3.2h9.6v-6.4h3.2v9.6H8V24h16V8H8z"/></svg>
)
          
EMC.defaultProps = {
  color: '#000',
  size: 32,
}
          