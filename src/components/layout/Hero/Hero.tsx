import { Right } from "@/components/icons/right"
import Image from "next/image"

export function Hero(){
    return (
        <section className="hero">
            <div className="p-y">
                <h1 className="text-4xl font-semibold">
                    <span className="text-green-500">Perfonalizer</span> 
                    sua Roupa
                </h1>
                <p className="mt-4 text-gray-500"> 
                    teste teste teste teste teste  teste testeteste
                    teste teste teste teste teste  teste testeteste
                    teste teste teste teste teste  teste testeteste
                </p>
                <div className="flex items-center gap-4 m-8">
                    <button className="bg-primary items-center flex gap-2 text-white px-8 py-2 rounded-full">
                        Order now
                        <Right/>
                    </button>
                    <button className="flex items-center gap-2  py-2 text-gray-500 font-semibold rounded-full text-sm">
                        Learn more
                        <Right/>
                    </button>
                </div>
            </div>
            <div className="relative">
                <Image src={"/pizza.png"} 
                        alt={"pizza"}
                        fill
                        className="object-contain"
                />
            </div>
        </section>
    )
}