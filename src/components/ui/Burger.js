import React, { useEffect } from 'react';
import { useState } from 'react';
import classNames from 'classnames';
import {
    AiOutlineMenu,
    AiFillDollarCircle,
    AiFillEuroCircle,
    AiOutlineCloseCircle,
    AiFillPoundCircle,
} from 'react-icons/ai';
export default function Burger({ rates }) {
    const [showMenu, setShowMenu] = useState(false);

    return (
        <>
            <div className="hidden w-fit items-center gap-2 md:flex">
                <span className="flex h-10 w-40 items-center justify-center gap-1 rounded-md bg-gull-gray text-xl font-bold text-snow-white shadow-sm shadow-snow-white">
                    <AiFillDollarCircle size={30} color="#fff" />
                    36.72
                </span>
                <span className="flex h-10 w-40 items-center justify-center gap-1 rounded-md bg-gull-gray text-xl font-bold text-snow-white shadow-sm shadow-snow-white">
                    <AiFillEuroCircle size={30} color="#fff" />
                    44.24
                </span>
                <span className="flex h-10 w-40 items-center justify-center gap-1 rounded-md bg-gull-gray text-xl font-bold text-snow-white shadow-sm shadow-snow-white">
                    <AiFillPoundCircle size={30} color="#fff" />
                    39.06
                </span>
            </div>
            <button
                className="block h-fit w-fit md:hidden"
                type="button"
                onClick={() => setShowMenu(!showMenu)}
            >
                <AiOutlineMenu size={30} color="#5A617O" />
            </button>
            <aside
                className={classNames(
                    showMenu ? 'right-0' : '-right-full',
                    'fixed top-0 flex h-full w-full max-w-xs flex-col items-center justify-center gap-4 bg-cornflower-blue bg-opacity-90 transition-all md:hidden'
                )}
            >
                <button
                    onClick={() => setShowMenu(!showMenu)}
                    className="absolute top-2 left-2 h-fit w-fit"
                    type="button"
                >
                    <AiOutlineCloseCircle size={30} color="#fff" />
                </button>
                <span className="flex h-10 w-40 items-center justify-center gap-1 rounded-md bg-snow-white text-xl font-bold text-gull-gray shadow-sm shadow-snow-white">
                    <AiFillDollarCircle size={30} color="#9DA6B8" />
                    36.72
                </span>
                <span className="flex h-10 w-40 items-center justify-center gap-1 rounded-md bg-snow-white text-xl font-bold text-gull-gray shadow-sm shadow-snow-white">
                    <AiFillEuroCircle size={30} color="#9DA6B8" />
                    44.24
                </span>
                <span className="flex h-10 w-40 items-center justify-center gap-1 rounded-md bg-snow-white text-xl font-bold text-gull-gray shadow-sm shadow-snow-white">
                    <AiFillPoundCircle size={30} color="#9DA6B8" />
                    39.06
                </span>
            </aside>
        </>
    );
}
