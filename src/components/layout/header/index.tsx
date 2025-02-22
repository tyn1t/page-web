import Link from "next/link";

export function Header() {
    return (
        <header className="flex items-center justify-between">
            <Link className="text-green-500 font-semibold text-3xl" href={"/"}>Seven</Link>
            <nav className="flex items-center gap-8 text-gray-600 font-semibold">
                <Link href={"/"}>Home</Link>
                <Link href={"#"}>Menu</Link>
                <Link href={"#"}>Acout</Link>
                <Link href={"#"}>Contad</Link>
            </nav>
            <nav className="flex items-center gap-4 text-gray-600 font-semibold">
                <Link href={"#"}>Login</Link>
                <Link href={"/registro"} className="bg-primary rounded-full text-white px-8 py-2">
                    Registro
                </Link>
            </nav>
        </header>
    )
}