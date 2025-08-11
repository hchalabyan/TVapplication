import React from 'react'
import classes from './typography.module.scss'
import clsx from 'clsx'

import {TypographyProps} from './types'

const safeClass = (key: string | undefined) => (key && classes[key]) || null

export const TypographyBase = ({
                                   size = 'base',
                                   bold = 'regular',
                                   color,
                                   transform,
                                   children,
                                   className,
                                   ...props
                               }: TypographyProps) => {
    return (
        <p
            className={clsx(
                safeClass(size),
                safeClass(bold),
                safeClass(color),
                safeClass(transform),
                className
            )}
            {...props}
        >
            {children}
        </p>
    )
}
