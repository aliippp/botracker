import {RiBookFill, RiHistoryFill, RiHome7Fill} from "react-icons/ri";
import Link from "next/link";
import React from "react";

export default function Sidebar ({children} : Readonly<{ children : React.ReactNode }>) {
    return (
        <div className="drawer drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle"/>
            <div className="drawer-content flex flex-col">
                {children}
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu p-5 w-24 min-h-full bg-base-200 text-base-content flex flex-col justify-center items-center gap-y-2">

                        <li>
                            <Link href="/">
                                <RiHome7Fill className="h-6 w-6"/>
                            </Link>
                        </li>
                        <li>
                            <Link href="/books">
                                <RiBookFill  className="h-6 w-6"/>
                            </Link>
                        </li>
                        <li>
                            <Link href="/history">
                                <RiHistoryFill className="h-6 w-6"/>
                            </Link>
                        </li>
                </ul>
            </div>
        </div>
    );
};