import React from 'react'

interface IconProps {
    color?: string;
    size?: Number;
} 

export const VET: React.FC<IconProps> = ({ color, size}: IconProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={`${size}`} height={`${size}`} fill={color}><path fill-rule="evenodd" d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm-1.262-7.266c.502 1.021 1.952 1.021 2.453 0l7.78-15.849a.258.258 0 00-.233-.376h-.331a.382.382 0 00-.34.206l-5.605 11.372c-.5 1.02-1.951 1.02-2.452 0L10.388 8.706a.382.382 0 00-.34-.206H7.38a.38.38 0 00-.34.546l7.698 15.688z"/></svg>
)
          
VET.defaultProps = {
  color: '#000',
  size: 32,
}
          