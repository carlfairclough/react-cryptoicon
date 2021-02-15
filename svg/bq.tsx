import React from 'react'

interface IconProps {
    color?: string;
    size?: Number;
} 

export const BQ: React.FC<IconProps> = ({ color, size}: IconProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={`${size}`} height={`${size}`} fill={color}><path fill="#1D1D1D" fill-rule="evenodd" d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zM9.966 21.094c2.387 2.103 5.662 1.828 7.633.048 2.021-1.825 2.473-4.756 1.078-7.051-.923-1.519-2.28-2.408-4.044-2.677-1.781-.272-3.31.293-4.683 1.44 0-.992-.003-1.94.002-2.886a1.891 1.891 0 00-.542-1.363A1.925 1.925 0 008 8v14.367h1.966v-1.273zm-.004-4.14c0-2.11 1.726-3.818 3.858-3.82a3.834 3.834 0 013.858 3.868c-.001 2.084-1.725 3.787-3.847 3.8a3.849 3.849 0 01-3.87-3.848zm6.363 5.387c2.146.66 4.024.234 5.722-1.189v2.87c0 .531.18.995.552 1.376.379.388.845.587 1.401.602V11.631h-1.97v1.276c-.78-.648-1.614-1.122-2.58-1.341-.973-.22-1.932-.157-2.916.113l.158.096c.517.297 1.002.642 1.402 1.084.216.238.447.359.77.42 2.17.414 3.483 2.32 3.111 4.48-.283 1.643-1.787 2.988-3.457 3.084a.528.528 0 00-.38.18 5.713 5.713 0 01-1.651 1.221c-.043.022-.084.05-.162.097z"/></svg>
)
          
BQ.defaultProps = {
  color: '#000',
  size: 32,
}
          