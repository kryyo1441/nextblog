import Link from "next/link";
import { Button } from "../ui/button";

export function Navbar() {
    return(
        <nav className="py-5 flex items-center justify-between">
            <div className="flex items-center gap-6">
                <Link href={"/"}>
                    <h1 className="text-4xl font-bold"><span className="text-blue-500">Next</span>Blog</h1>
                </Link>     

                <div className="hidden sm:flex items-center gap-6">
                    <Link href={"/"} className="text-sm font-medium hover:text-blue-500">
                        Home
                    </Link>

                    <Link href={"/dashboard"} className="text-sm font-medium hover:text-blue-500">
                        Dashboard
                    </Link>
                </div>           
            </div>

            <div className="flex items-center gap-2">
                <Button>Sign Up</Button>
                <Button>Login</Button>
            </div>
        </nav>
    )
}
