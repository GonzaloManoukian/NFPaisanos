import Image from 'next/image'
import React from 'react'

import style from './Icon.module.css'

type IconProps = {
    src: string,
    alt?: string,
    fill?: boolean,
    width?: number,
    height?: number,
    className?: string
}

export const Icon = ({ src, alt, fill, width, height, className }: IconProps) => {
  return (
    <div className={`${style.icon} ${className}`} style={{ width, height }}>
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
