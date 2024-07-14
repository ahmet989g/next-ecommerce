"use client";

import Image from "next/image";
import { useState } from "react";

const images = [
    {
        id: 0,
        url: "https://fastly.picsum.photos/id/3/536/354.jpg?hmac=UsgKVJNj2lH1bw1HWHOAVqVZI76Fc2X7n9wEK6_DbO4"
    },
    {
        id: 1,
        url: "https://fastly.picsum.photos/id/152/402/536.jpg?hmac=ijyrRQ3K94VdfmiP9FWVEsOwJMu83koKvCPDHHGmAdY"
    },
    {
        id: 2,
        url: "https://fastly.picsum.photos/id/947/402/536.jpg?hmac=BcM4hZl4MsI--ihrfny2I11301H7tuOLJ9UbQNH2j6U"
    },
    {
        id: 3,
        url: "https://fastly.picsum.photos/id/696/402/536.jpg?hmac=OaRH8tKHPjAkEC39UOnRcMFDpJ900qEPTFoypc9ueno"
    },
]

const ProductImages = () => {

    const [index, setIndex] = useState<number>(0);

    return (
        <div className="">
            <div className="h-[500px] relative">
                <Image
                    src={images[index].url}
                    alt=""
                    fill
                    sizes="50vw"
                    className="object-cover rounded-md"
                />
            </div>
            <div className="flex justify-between gap-4 mt-8">
                {images.map((item: any, i: number) => (
                    <div
                        key={item.id}
                        className="w-1/4 h-32 relative gap-4 cursor-pointer"
                        onClick={() => setIndex(i)}
                    >
                        <Image
                            src={item.url}
                            alt="Products"
                            fill
                            sizes="30vw"
                            className="object-cover rounded-md"
                        />
                    </div>
                ))
                }
            </div>
        </div>
    );
}

export default ProductImages;