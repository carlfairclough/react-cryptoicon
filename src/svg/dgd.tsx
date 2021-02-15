import React from 'react'

interface IconProps {
    color?: string;
    size?: Number;
} 

export const DGD: React.FC<IconProps> = ({ color, size}: IconProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={`${`${size}`}`} height={`${`${size}`}`} fill={color}><path fill-rule="evenodd" d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zM5.5 11v10h10V11h-10zm7 3v-3h1v4h-8v-1h7zm-5 3h6v2h-6v-2zm19-4v-2h-10v10h10v-6h-6v2h4v2h-6v-6h8z"/></svg>
)
          
DGD.defaultProps = {
  color: '#000',
  size: 32,
}
          