import React from 'react'

interface IconProps {
    color?: string;
    size?: Number;
} 

export const R: React.FC<IconProps> = ({ color, size}: IconProps) => (
    <svg height="32" viewBox="0 0 32 32" width="32" xmlns="http://www.w3.org/2000/svg"><path d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm-5.5-7.362l3.467-1.812V10.745l4.952 2.778-3.714 1.933v3.987L23.5 25v-3.745l-5.076-3.503 4.21-2.175v-3.866L13.966 7 10.5 8.812z"/></svg>
)
          
R.defaultProps = {
  color: '#000',
  size: 32,
}
          