import { MenuItems } from "@/components/menu/MenuItems"
import Image from "next/image"
import { SectionHeaer } from "../SectionHeader/SectionHeader"

export function HomeMenu () {
    return (
        <section>
            <div className="absolute left-0 right-0 w-full justify-start">
                <div className=" absolute left-0 -top-[70px]  -z-10">
                        <Image 
                            src={"/sallad1.png"}
                            alt={"sallad"}
                            width={109}
                            height={189}
                            className="object-contain"
                        />
                    </div>
                    <div className=" absolute -top-[100px]  -right-0 -z-10">
                        <Image 
                            src={"/sallad2.png"}
                            alt={"sallad"}
                            width={109}
                            height={189}
                            className="object-contain"
                        />
                    </div>
            </div>
            <div className="text-center mb-4">
                <SectionHeaer
                    subHeader={"check out"}
                    mainHeader={"Meny"}
                />
            </div>
            <div className=" grid grid-cols-3 gap-4">
                <MenuItems/>
                <MenuItems/>
                <MenuItems/>
                <MenuItems/>
                <MenuItems/>
                <MenuItems/>
            </div>
        </section>
    )
}