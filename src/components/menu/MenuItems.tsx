import Image from "next/image"

interface MenuItemsProps {
    
}
export function MenuItems () {
    return (
        <div className=" bg-gray-300 p-4 rounded-lg text-center
        group hover:bg-white hover:shadow-2xl hover:shadow-black/50 transition-all">
            <Image 
                src={"/pizza.png"}
                alt={"Pizza"}
                width={140}
                height={140}
                className="m-auto"
            />
            <h1 className="font-semibold text-xl my-3">Pizza de nada</h1>
            <p className="text-gray-500 text-sm">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero at
                voluptatum cupiditate aut modi quia
            </p>
            <button className="mt-4 bg-primary text-white rounded-full px-4 py-2">
                Add to cart $12
            </button>
        </div>
    )
}