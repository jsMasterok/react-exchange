import React from 'react';
import { AiOutlineTransaction } from 'react-icons/ai';

export default function Logo() {
    return (
        <div className="flex h-fit w-fit items-center gap-1 rounded-md bg-gull-gray px-2 py-1">
            <AiOutlineTransaction size={30} color="#fff" />
            <span className="text-base font-semibold capitalize text-snow-white">
                react-exchange
            </span>
        </div>
    );
}
