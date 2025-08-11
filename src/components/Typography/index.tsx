import React from 'react'
import classes from './typography.module.scss'
import clsx from 'clsx'

import {TypographyProps} from './types'

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
                classes[size],
                classes[bold],
                classes[color],
                classes[transform],
                className
            )}
            {...props}
        >
            {children}
        </p>
    )
}
