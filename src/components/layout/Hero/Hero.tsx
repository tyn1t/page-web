import Image from "next/image"

export function Hero (){
    return (
        <section className="grid grid-cols-2">
            <div>
                <h1 className="text-4xl font-semibold">Perfonalizer sua Roupa</h1>
                <p className="mt-4 text-gray-500"> 
                    teste teste teste teste teste  teste testeteste
                    teste teste teste teste teste  teste testeteste
                    teste teste teste teste teste  teste testeteste
                </p>
                <div className="flex items-center gap-4 m-8">
                    <button className="bg-primary text-white px-8 py-2 rounded-full">
                        Order now
                    </button>
                    <button>Learn more</button>
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