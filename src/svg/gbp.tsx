import React from 'react'

interface IconProps {
    color?: string;
    size?: Number;
} 

export const GBP: React.FC<IconProps> = ({ color, size}: IconProps) => (
    <svg fill={color} height={`${size}`} width={`${size}`} xmlns="http://www.w3.org/2000/svg"><path d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm-4.913-17.185H9v2.637h2.087v4.462L9 22.523V24.5h13.947v-2.713h-8.585v-4.335h6.578v-2.637h-6.578V12.56c0-1.952 1.057-3.169 2.827-3.169 1.479 0 2.377.685 3.328 1.85L23 9.34c-1.268-1.598-2.906-2.84-5.838-2.84-3.856 0-6.075 2.307-6.075 5.983z" fill-rule="evenodd"/></svg>
)
          
GBP.defaultProps = {
  color: '#000',
  size: 32,
}
          