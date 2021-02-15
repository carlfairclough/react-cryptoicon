import React from 'react'

interface IconProps {
    color?: string;
    size?: Number;
} 

export const MATIC: React.FC<IconProps> = ({ color, size}: IconProps) => (
    <svg width={`${`${size}`}`} height={`${`${size}`}`} viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M96 48c0 26.51-21.49 48-48 48S0 74.51 0 48 21.49 0 48 0s48 21.49 48 48zM58.014 29.759L68.002 24 78 29.764l-.044.026v35.79l-9.941 5.727-.014.028-.018-.01-.025.015v-.03l-9.953-5.736v-12.74L47.99 58.566l-.008.005-.005-.013-9.98-5.75v12.76L28 71.329v-.043l-.006.046L18 65.569V29.758l.005.002L28.001 24l29.968 17.283.036-.005v-11.52h.009z" fill={color}/></svg>
)
          
MATIC.defaultProps = {
  color: '#000',
  size: 32,
}
          