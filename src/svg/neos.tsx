import React from 'react'

interface IconProps {
    color?: string;
    size?: Number;
} 

export const NEOS: React.FC<IconProps> = ({ color, size, ...rest}: IconProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={`${size}`} height={`${size}`} viewBox="0 0 32 32" fill={color} {...rest} ><path d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zM10.5 9.358V26h2.429V13.948l5.714 3.433v-3.097zm11 13.284V6h-2.429v12.052l-5.714-3.433v3.097z" fill-rule="evenodd"/></svg>
)
          
NEOS.defaultProps = {
  color: '#000',
  size: 32,
}
          