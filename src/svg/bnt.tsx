import React from 'react'

interface IconProps {
    color?: string;
    size?: Number;
} 

export const BNT: React.FC<IconProps> = ({ color, size}: IconProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={`${`${size}`}`} height={`${`${size}`}`} fill={color}><path d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm-.08-26.12l-4.518 2.647 4.518 2.648 4.603-2.648L15.92 5.88zm.743 14.134v5.295l6.137-3.501v-5.296l-6.137 3.502zm4.603-9.822l-4.604 2.648v5.296l4.604-2.648v-5.296zm-11.082 5.296l4.604 2.648V12.84l-4.604-2.648v5.296zm0 7.174l4.604 2.647v-5.295l-4.604-2.647v5.294z"/></svg>
)
          
BNT.defaultProps = {
  color: '#000',
  size: 32,
}
          