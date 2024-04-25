import { Button } from "@/components/ui/button"
import { Poppins } from "next/font/google"
import { cn } from "@/lib/utils"
import React from 'react'
import { LoginButton } from "@/components/ui/auth/login-button"

const font=Poppins({
  subsets:["latin"],
  weight:["600"]
})
const page = () => {
  return (
   <main className="flex h-full flex-col items-center justify-center bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% ...">
    <div className="space-y-6">
        <h1 className={cn("text-6xl font-semibold text-white drop-shadow-md",font.className)}>
            🔐Auth
        </h1>
        <p className="text-white text-lg">
          A simple authentication service
        </p>
    </div>
    <LoginButton>
    <Button variant="secondary" size="lg" className="mt-5">
      Sign-In
    </Button>
    </LoginButton>
   </main>
  )
}

export default page
