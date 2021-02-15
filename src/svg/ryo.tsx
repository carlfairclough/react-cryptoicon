import React from 'react'

interface IconProps {
    color?: string;
    size?: Number;
} 

export const RYO: React.FC<IconProps> = ({ color, size}: IconProps) => (
    <svg width={`${`${size}`}`} height={`${`${size}`}`} fill={color} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm-.014-28C9.376 4 4 9.376 4 15.986S9.376 27.97 15.986 27.97 27.97 22.595 27.97 15.986C27.971 9.376 22.595 4 15.986 4zm0 1.632a10.34 10.34 0 0110.353 10.354 10.34 10.34 0 01-10.353 10.353A10.34 10.34 0 015.632 15.986 10.341 10.341 0 0115.986 5.632zm-4.453 5.928v8.85h8.905v-8.85h-8.905zm1.45 1.45h6.004v5.95h-6.003v-5.95z"/></svg>
)
          
RYO.defaultProps = {
  color: '#000',
  size: 32,
}
          