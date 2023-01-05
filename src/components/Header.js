import React from 'react';
import Logo from './ui/Logo';
import Burger from './ui/Burger';

export default function Header({ rates, ...props }) {
    return (
        <header className="flex h-fit w-full items-center justify-between gap-2 rounded-md bg-snow-white p-2">
            <Logo />
            <Burger rates={rates} />
        </header>
    );
}
