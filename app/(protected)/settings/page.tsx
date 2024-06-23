import { auth, signOut } from "@/auth";
import Link from "next/link";

const SettingsPage = async () => {
    const session = await auth();

    return (
        <div>
            {JSON.stringify(session)}
            <form action={async () => {
                "use server";

                await signOut();
            }}> 
                <button type="submit">
                    Signout
                </button>
            </form>
            <nav>
                <Link href="/dashboard">
                    Dashboard
                </Link>
            </nav>
        </div>
    )
}

export default SettingsPage;
