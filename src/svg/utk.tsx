import React from 'react'

interface IconProps {
    color?: string;
    size?: Number;
} 

export const UTK: React.FC<IconProps> = ({ color, size}: IconProps) => (
    <svg fill={color} height={`${size}`} viewBox="0 0 32 32" width={`${size}`} xmlns="http://www.w3.org/2000/svg"><path d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm-1.647-9.702h3.294V9.028H21.5V6h-11v3.028h3.853zM13.466 26h5.104c1.988 0 2.93-.956 2.93-2.978V9.896h-2.893v12.992c0 .32-.105.426-.419.426h-4.34c-.313 0-.418-.107-.418-.426V9.896h-2.893v13.126c0 2.022.94 2.978 2.93 2.978z" fill-rule="evenodd"/></svg>
)
          
UTK.defaultProps = {
  color: '#000',
  size: 32,
}
          