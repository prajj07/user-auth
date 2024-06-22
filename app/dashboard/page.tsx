import { auth } from "@/auth";
import { useRouter } from "next/router";

const DashboardPage = async () => {
  const session = await auth();
  const router = useRouter();

  if (!session) {
    router.push('/auth/login');
    return null;
  }

  return (
    <div>
      <h1>Dashboard</h1>
      <p>Welcome, {session.user?.name}!</p>
      <p>Email: {session.user?.email}</p>
    </div>
  );
};

export default DashboardPage;
