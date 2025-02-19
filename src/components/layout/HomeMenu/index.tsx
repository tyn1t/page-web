import Image from "next/image"

export function HomeMenu () {
    return (
        <section className="left-0 right-0 w-full justify-start">
            <div>
                <div className="h-48  absolute w-48 -left-12 text-left">
                        <Image 
                            src={"/sallad1.png"}
                            alt={"sallad"}
                            fill
                            className="object-contain"
                        />
                    </div>
                    <div className="h-48 absolute w-48 -top-12 -right-12 text-right">
                        <Image 
                            src={"/sallad2.png"}
                            alt={"sallad"}
                            fill
                            className="object-contain"
                        />
                    </div>
            </div>
            <div className="text-center">
                <h3 className="uppercase text-gray-500 font-semibold leading-3">Check out</h3>
                <h2 className="text-primary font-bold text-4xl italic">Menu</h2>
            </div>
        </section>
    )
}