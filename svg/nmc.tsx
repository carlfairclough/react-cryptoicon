import React from 'react'

interface IconProps {
    color?: string;
    size?: Number;
} 

export const NMC = ({ color, size }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={`${size}`} height={`${size}`} fill={color}><path fill-rule="evenodd" d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm3.261-8.5l.001-.002a1.8 1.8 0 00.458-.05c.876-.205 1.617-.97 1.793-1.796L25 8.556l-2.772-.014-2.286 8.568-6.18-8.597-.004.004.003-.01L12.74 8.5v.001a1.9 1.9 0 00-.459.049c-.875.206-1.616.971-1.793 1.796L7 23.445l2.773.012 2.285-8.568 6.18 8.598h.003l1.02.013zm-6.593-10.894l.483-1.81 6.181 8.599-.483 1.81-6.18-8.6z"/></svg>
)
          
NMC.defaultProps = {
  color: '#000',
  size: 32,
}
          