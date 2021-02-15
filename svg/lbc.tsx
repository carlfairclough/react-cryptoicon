import React from 'react'

interface IconProps {
    color?: string;
    size?: Number;
} 

export const LBC: React.FC<IconProps> = ({ color, size}: IconProps) => (
    <svg height="32" width="32" xmlns="http://www.w3.org/2000/svg"><path d="M24.176 17.184l-8.37 5.182-8.787-4.39v-2.58l9.284-5.806 8.315 4.056v.363l-8.813 5.476-6.749-3.346-.444.896 7.247 3.593 9.759-6.063v-1.544l-9.375-4.573L6.02 14.842v3.752l9.839 4.916 8.872-5.493-.215.862.97.242.621-2.485-2.485-.621-.242.97zM16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16z" fill-rule="evenodd"/></svg>
)
          
LBC.defaultProps = {
  color: '#000',
  size: 32,
}
          