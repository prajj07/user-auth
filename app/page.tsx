import { Poppins } from "next/font/google";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { LoginButton } from "@/components/auth/login-button";

const font = Poppins({
  subsets: ["latin"],
  weight: ["600"]
})

export default function Home() {
  
  return (
    <main className="flex h-full flex-col items-center justify-center bg-blue-200">
      <div className="space-y-6 text-center">
        <h1 className={cn("text-6xl font-semibold text-gray-600 drop-shadow-md",
          font.className,
        )}>
            Auth
        </h1>
        <p className="text-gray-500 text-lg">Authentication service</p>
      </div>
      <LoginButton>
      <Button variant="outline" className="size-lg">
        Sign in 
      </Button>
      </LoginButton>
      
    </main>
  );
}
