import {ReactNode} from 'react'

export type typographySizes = 'base' | 'md' | 'base-lg' | 'lg' | 'xl'
export type typographyTypes = 'regular' | 'medium' | 'bold'
export type typographyColors =
    'primary'
    | 'secondary'
    | 'white'
    | 'hover'
    | 'text'
    | 'black'
    | 'active'
    | 'light-grey'
    | 'grey'
export type typographyTransform = 'uppercase'

export interface TypographyProps {
    size: typographySizes
    children: ReactNode
    bold?: typographyTypes
    transform?: typographyTransform
    className?: string
    color: typographyColors
}
