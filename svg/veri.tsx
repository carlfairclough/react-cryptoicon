import React from 'react'

interface IconProps {
    color?: string;
    size?: Number;
} 

export const VERI = ({ color, size }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={`${size}`} height={`${size}`} fill={color}><path d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zM6 8v.01c1.175 5.23 2.35 10.46 3.527 15.688h3.977L17.031 8h-3.204l-1.904 9.7c-.137.655-.24 1.32-.404 1.97a7.778 7.778 0 01-.116-.491L9.313 8c-1.105.003-2.21.003-3.313 0zm12.314 4.932v-.001c-.793.968-1.014 2.262-1.107 3.484-.07 1.253-.061 2.515.087 3.762.148 1.083.521 2.213 1.376 2.926.92.777 2.173.934 3.327.89 1.062-.043 2.184-.397 2.88-1.263.694-.833.89-1.953.95-3.013h-2.664c-.096.639-.188 1.337-.628 1.835-.33.364-.874.46-1.326.313-.424-.152-.69-.565-.834-.982-.296-.845-.24-1.756-.244-2.638H26c.001-1.195-.012-2.4-.263-3.57-.207-.936-.643-1.876-1.438-2.432-.898-.632-2.04-.728-3.1-.654-1.074.07-2.188.467-2.885 1.343zm2.274 1.245h.001c.495-.742 1.791-.74 2.2.089.331.67.326 1.445.373 2.178H20.13c-.008-.771.004-1.613.458-2.267z"/></svg>
)
          
VERI.defaultProps = {
  color: '#000',
  size: 32,
}
          