import React from 'react'

interface IconProps {
    color?: string;
    size?: Number;
} 

export const CRED: React.FC<IconProps> = ({ color, size}: IconProps) => (
    <svg fill={color} height={`${size}`} width={`${size}`} xmlns="http://www.w3.org/2000/svg"><path d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm-3.864-16.034l-1.253 1.271L15.618 22 26 11.539l-1.253-1.271-9.13 9.19zm2.11-.31l1.255 1.273 5.616-5.658L19.864 10zm-2.276 4.83L7.251 15.7 6 16.97l4.734 4.762z" fill-rule="evenodd"/></svg>
)
          
CRED.defaultProps = {
  color: '#000',
  size: 32,
}
            