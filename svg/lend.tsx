import React from 'react'

interface IconProps {
    color?: string;
    size?: Number;
} 

export const LEND: React.FC<IconProps> = ({ color, size}: IconProps) => (
    <svg height="32" viewBox="0 0 32 32" width="32" xmlns="http://www.w3.org/2000/svg"><path d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm1.147-11.554l-5.474-5.7L10 16.45l3.92 3.995-3.777 3.849L11.697 26zm3.18-3.191L22 15.549l-3.92-3.995 3.777-3.849L20.303 6l-5.474 5.554zm-7.96-3.167l5.498 5.7 1.673-1.705-5.498-5.603z"/></svg>
)
          
LEND.defaultProps = {
  color: '#000',
  size: 32,
}
          