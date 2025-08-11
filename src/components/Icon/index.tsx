import React from 'react';
import {icons} from './constants';
import {IIconProps} from './types';

export const Icon: React.FC<IIconProps & { className?: string }> = ({
                                                                        name,
                                                                        className,
                                                                        ...rest
                                                                    }) => {
    const src = icons[name];

    if (!src) {
        return null;
    }

    return (
        <img
            className={className}
            src={src}
            alt={name}
            {...rest}
        />
    );
};
