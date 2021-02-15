import React from 'react'

interface IconProps {
    color?: string;
    size?: Number;
} 

export const XVC: React.FC<IconProps> = ({ color, size, ...rest}: IconProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={`${size}`} height={`${size}`} viewBox="0 0 32 32" fill={color} {...rest} ><path d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm-5.882-21.257V24h4.74L26 8h-4.286l-7.916 10.717V8H9.664L8 10.743z" fill-rule="evenodd"/></svg>
)
          
XVC.defaultProps = {
  color: '#000',
  size: 32,
}
          