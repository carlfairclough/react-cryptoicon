import React from 'react'

interface IconProps {
    color?: string;
    size?: Number;
} 

export const ICN: React.FC<IconProps> = ({ color, size, ...rest}: IconProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={`${size}`} height={`${size}`} viewBox="0 0 32 32" fill={color} {...rest} ><path fill-rule="evenodd" d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm4.833-25v18H23.5V7h-2.667zm-4.444 9v9h2.667v-9h-2.667zm-4.445-4.5V25h2.667V11.5h-2.667zm-4.444 9V25h2.667v-4.5H7.5z"/></svg>
)
          
ICN.defaultProps = {
  color: '#000',
  size: 32,
}
          