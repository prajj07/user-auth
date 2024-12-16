import { auth, signOut } from "@/auth";

const DashboardPage = async () => {
    const session = await auth();

    if (!session) {
        if (typeof window !== "undefined") {
            window.location.href = "/login";
        }
        return null;
    }

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-3xl font-bold mb-4">Welcome to the Dashboard</h1>
            <p className="mb-4">User: {session.user?.email}</p>
            <form action={async () => {
                "use server";

                await signOut();
            }}> 
                <button type="submit" className="bg-gray-600 hover:bg-gray-800 text-white font-bold py-2 px-4 rounded">
                        Sign Out
                    </button>
            </form>
        </div>
    );
};

export default DashboardPage;
