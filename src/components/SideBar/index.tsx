import React, {useState} from "react";
import {IMenuProps} from "@/components/SideBar/types";
import classes from "./SideBar.module.scss"
import {Icon} from "@/components";
import clsx from "clsx";
import {TypographyBase} from "@/components/Typography";

export const SideBar: React.FC<IMenuProps> = () => {
    const [isOpen, setIsOpen] = useState(false);
    const bottomMenu = ["Language", "Get Help", "Exit"];

    const mainMenu = [
        {icon: <Icon name='search'/>, label: "Search"},
        {icon: <Icon name='home'/>, label: "Home"},
        {icon: <Icon name='video'/>, label: "TV Shows"},
        {icon: <Icon name='movie'/>, label: "Movies"},
        {icon: <Icon name='alias'/>, label: "Genres"},
        {icon: <Icon name='history'/>, label: "Watch Later"},
    ];

    return (
        <>
            <div
                className={clsx(classes.Overlay, isOpen && classes.Show)}
                onMouseEnter={() => setIsOpen(true)}
                onMouseLeave={() => setIsOpen(false)}
            />

            <div
                className={clsx(classes.Sidebar, isOpen && classes.Open)}
                onMouseEnter={() => setIsOpen(true)}
                onMouseLeave={() => setIsOpen(false)}
            >
                <div className={clsx(classes.Profile, isOpen && classes.ShowProfile)}>
                    <Icon
                        name='man'
                        className={classes.Avatar}
                    />
                    <TypographyBase size='base-lg' bold='bold' color='light-grey'>Daniel</TypographyBase>
                </div>

                <div className={classes.Menu}>
                    {mainMenu.map((item, idx) => (
                        <div
                            key={idx}
                            className={clsx(classes.MenuItem, !isOpen && classes.Centered, idx === 1 && isOpen && classes.ItemSection)}
                        >

                            <div className={clsx(classes.IconWrapper, idx === 1 && classes.ActiveSection)}>
                                {item.icon}
                            </div>

                            {isOpen && <TypographyBase size='md' color='light-grey'>{item.label}</TypographyBase>}
                        </div>
                    ))}
                </div>

                <div className={clsx(classes.BottomMenu, !isOpen && classes.Collapsed)}>
                    {bottomMenu.map((label, idx) => (
                        <div key={idx} className={classes.MenuItem}>
                            <TypographyBase size='base-lg' transform='uppercase' color='grey' bold='bold'>
                                {label}
                            </TypographyBase>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}