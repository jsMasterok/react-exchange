import React from 'react';
import PreloaderVector from '../../img/preloader.svg';
export default function Preloader({ error, ...props }) {
    return (
        <div className="fixed top-0 left-0 flex h-full w-full flex-col items-center justify-center bg-base-black bg-opacity-60 p-5">
            <img src={PreloaderVector} alt="Preloader" />
            {error && (
                <div className="absolute bottom-10  w-60  rounded-md bg-gull-gray bg-opacity-50 p-2 text-center text-base font-bold text-snow-white">
                    Oops,something wrong,if you see this text,please reload page
                </div>
            )}
        </div>
    );
}
