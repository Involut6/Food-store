import React from "react";
import Time from "./icons/Time.jsx";
import Edit from "./icons/Edit.jsx";
import Cart from "./icons/Cart.jsx";

const Navbar = () => {
    return (
        <div className="space-x-12 flex items-center w-full px-12 py-4">
            <div className="flex justify-between items-center w-full">
            <p className="font-bold text-2xl">
                Logo
            </p>
            <ul className="flex p-2 space-x-8">
                <li className="flex space-x-[-30px]">
                    <p className="pl-6 pr-12 py-2 font-semibold text-sm bg-gray-200 rounded-full w-full">
                        Delivery
                    </p>
                    <p className="px-6 py-2 font-semibold text-white text-sm bg-black rounded-full w-full z-30">
                        Pickup
                    </p>
                </li>
                <li className="flex space-x-1 items-center">
                    <Time className="text-xl" />
                    <p className="font-semibold text-sm">ASAP - ready in 25 - 40mins</p>
                    <Edit className="text-xl" />
                </li>
            </ul>
            </div>
            <div className="flex items-center px-6 py-4 bg-[#08E9E1] space-x-2 rounded-xl">
                    <Cart className="text-2xl" />
                    <p className="font-bold">3</p>
                </div>
        </div>
    )
}

export default Navbar;