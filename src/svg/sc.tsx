import React from 'react'

interface IconProps {
    color?: string;
    size?: Number;
} 

export const SC: React.FC<IconProps> = ({ color, size, ...rest}: IconProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={`${size}`} height={`${size}`} viewBox="0 0 32 32" fill={color} {...rest} ><path fill-rule="evenodd" d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm0-24.5a8.5 8.5 0 100 17h8.5V16A8.5 8.5 0 0016 7.5zm5.1 13.6h-5.023c-2.82 0-5.163-2.255-5.177-5.074a5.106 5.106 0 015.126-5.126c2.819.014 5.074 2.358 5.074 5.177V21.1z"/></svg>
)
          
SC.defaultProps = {
  color: '#000',
  size: 32,
}
          