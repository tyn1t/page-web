"use client"
import Image from "next/image"
import { useState } from "react"

export default function RegistroPage () {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    
    function handleFormSumit(ev:any) {
        ev.preventDefault();
        fetch('/api/register', {
            method: 'POST',
            body: JSON.stringify({email, password}),
            headers: {'Content-Type': 'application/json'},
        });
    }

    return (
        <section className="mt-8">
            <h1 className="text-center text-primary text-4xl">
                Registro
            </h1>
            <form className="block max-w-xs mx-auto" onSubmit={handleFormSumit}>
                <input type="email" placeholder="email" value={email}
                    onChange={ev => setEmail(ev.target.value)}
                />
                <input type="password" placeholder="password" value={password}
                    onChange={ev => setPassword(ev.target.value)}
                />
                <button type="submit">Registro</button>
                <div className="my-4 text-center text-gray-500">
                    or login with provider
                </div>
                <button className="flex gap-4 justify-center">
                    <Image 
                        src={"/google.png"}
                        alt={"Google"}
                        width={24}
                        height={24}
                    />
                    Login with google</button>
            </form>
        </section>
    )
}