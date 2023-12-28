
import CardComponent from "@/components/Card";
import CreateUserForm from "@/components/CreateUserForm";
import { getAllUsers } from "@/lib/functions";

export type User = {
  id?: number;
  name: string;
  email: string;
};

const Home = async () => {
  const users = await getAllUsers()

  return (
    <main className="h-screen w-full flex flex-col items-center justify-center space-y-10">
      <CreateUserForm/>
      <CardComponent users={users} />
    </main>
  );
}

export default Home
