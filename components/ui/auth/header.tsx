import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";

const font=Poppins({
    subsets:["latin"],
    weight:["600"]
})

interface HeaderProps{
    label:string
}

export const Header=({
    label,
}:HeaderProps)=>{
    return (
        <div className="flex flex-col justify-center text-center items-center gap-y-3">
            <h1 className="text-3xl font-semibold ">
                🔐Auth
            </h1>
            <p className="text-muted-foreground text-sm">
                {label}
            </p>
        </div>
    )
}