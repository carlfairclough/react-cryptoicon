import React from 'react'

interface IconProps {
    color?: string;
    size?: Number;
} 

export const ONT: React.FC<IconProps> = ({ color, size}: IconProps) => (
    <svg height="32" viewBox="0 0 32 32" width="32" xmlns="http://www.w3.org/2000/svg"><path d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm9-7.783V15.61C25 10.854 21.06 7 16.2 7c-2.43 0-4.63.964-6.223 2.521zM7 7.783v8.608C7 21.146 10.94 25 15.8 25c2.43 0 4.63-.964 6.223-2.521z"/></svg>
)
          
ONT.defaultProps = {
  color: '#000',
  size: 32,
}
          