"use client";

import Image from "next/image";

const CartModal = () => {
    const cartItems = true;
    return (
        <div className="w-max flex flex-col gap-6 absolute p-4 rounded-md top-12 right-0 text-sm bg-white shadow-[0_3px_10px_rgb(0,0,0,0.2)] z-20">
            {!cartItems ? (
                <div className="flex justify-center items-center h-24">
                    <p className="text-center">Your cart is empty</p>
                </div>
            ) : (
                <>
                    <h2 className="text-xl">Shopping Cart</h2>
                    {/* LIST */}
                    <div className="flex flex-col gap-8">
                        {/* ITEM */}
                        <div className="flex gap-4">
                            <Image src={"https://fastly.picsum.photos/id/3/536/354.jpg?hmac=UsgKVJNj2lH1bw1HWHOAVqVZI76Fc2X7n9wEK6_DbO4"} alt={"Product 1"} width={72} height={96} className="object-cover rounded-md w-full h-full" />
                            <div className="flex flex-col justify-between w-full">
                                {/* TOP */}
                                <div>
                                    {/* TITLE */}
                                    <div className="flex items-center justify-between gap-8">
                                        <h3 className="font-semibold">Product Name</h3>
                                        <div className="p-1 bg-slate-200 rounded-md">₺49</div>
                                    </div>
                                    {/* DESC */}
                                    <div className="text-sm text-gray-500">
                                        available
                                    </div>
                                </div>
                                {/* BOTTOM */}
                                <div className="flex justify-between text-sm">
                                    <span className="text-gray-500">Qty. 2</span>
                                    <span className="text-blue-500">Remove</span>
                                </div>
                            </div>
                        </div>
                        {/* ITEM */}
                        <div className="flex gap-4">
                            <Image src={"https://fastly.picsum.photos/id/3/536/354.jpg?hmac=UsgKVJNj2lH1bw1HWHOAVqVZI76Fc2X7n9wEK6_DbO4"} alt={"Product 1"} width={72} height={96} className="object-cover rounded-md w-full h-full" />
                            <div className="flex flex-col justify-between w-full">
                                {/* TOP */}
                                <div>
                                    {/* TITLE */}
                                    <div className="flex items-center justify-between gap-8">
                                        <h3 className="font-semibold">Product Name</h3>
                                        <div className="p-1 bg-slate-200 rounded-md">₺49</div>
                                    </div>
                                    {/* DESC */}
                                    <div className="text-sm text-gray-500">
                                        available
                                    </div>
                                </div>
                                {/* BOTTOM */}
                                <div className="flex justify-between text-sm">
                                    <span className="text-gray-500">Qty. 2</span>
                                    <span className="text-blue-500">Remove</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* BOTTOM */}
                    <div className="">
                        <div className="flex items-center justify-between font-semibold">
                            <span className="">Subtotal</span>
                            <span className="">₺49</span>
                        </div>
                        <p className="text-gray-500 text-sm mt-2 mb-4">
                            Lorem ipsum dolor sit amet consectetur.
                        </p>
                        <div className="flex justify-between text-sm">
                            <button className="rounded-md py-3 px-4 ring-1 ring-gray-300">View Cart</button>
                            <button className="rounded-md py-3 px-4 bg-black text-white">Checkout</button>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
}

export default CartModal;