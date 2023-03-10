import Image from 'next/image'
import React, { HTMLAttributes } from 'react'

import style from './CircleImage.module.css'

interface CircleImageProps extends HTMLAttributes<HTMLDivElement> {
  src: string,
  alt?: string,
  size: 'sm' | 'md',
  fill?: boolean
  width?: number,
  height?: number,
  bgColor?: string
  className?: string
}

export const CircleImage = ({ src, alt, size, fill, width, height, bgColor, className, ...divProps }: CircleImageProps) => {
  return (
    <div
      className={`
      ${style.circleImage}
      ${size === 'sm' && style.sm}
      ${size === 'md' && style.md}
      ${className}
      `}
      style={{
        background: bgColor
      }}
      {...divProps}
    >
      <Image
        src={src}
        alt={alt || ''}
        fill={fill}
        width={fill ? undefined : width}
        height={fill ? undefined : height}
      />
    </div>
  )
}
