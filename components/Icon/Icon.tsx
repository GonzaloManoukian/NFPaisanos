import React from 'react'
import Image from 'next/image'
import style from './Icon.module.css'

type IconProps = {
    src: string,
    alt?: string,
    fill?: boolean,
    width?: number,
    height?: number
}

export const Icon = ({ src, alt, fill, width, height }: IconProps) => {
  return (
    <div className={style.icon} style={{ width, height }}>
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
