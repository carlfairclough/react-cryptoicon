import React from 'react'

interface IconProps {
    color?: string;
    size?: Number;
} 

export const GAS: React.FC<IconProps> = ({ color, size}: IconProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={`${`${size}`}`} height={`${`${size}`}`} fill={color} viewBox="0 0 32 32"><path fill-rule="evenodd" d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm9-9.42V9.621l-6.99 2.48v7.22L25 22.58zM14.823 26V13.139L8 9.958V22.82L14.823 26zm10.01-16.843l.061-.021L18.165 6l-.062.021-.177.063-.084.03L8.27 9.51l6.729 3.136 2.843-1.008.167-.06 6.711-2.38.112-.04z"/></svg>
)
          
GAS.defaultProps = {
  color: '#000',
  size: 32,
}
          