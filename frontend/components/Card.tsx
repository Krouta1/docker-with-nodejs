import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { User} from "@/app/page";
import UpdateUserForm from "./UpdateUserForm";
import DeleteUser from "./DeleteUser";


const CardComponent = ({users}:{users:User[]}) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>User identity card</CardTitle>
        <CardDescription>Get to know our users</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col space-y-2">
        {users.map((user) => (
          <div key={user.name} className="flex items-center justify-between gap-5">
            <p className="text-sm text-muted-foreground">ID: {user.id}</p>
            <h3 className="text-primary text-lg font-semibold">{user.name}</h3>
            <p className="text-muted-foreground font-medium">{user.email}</p>
            <UpdateUserForm user={user}/>
            <DeleteUser user={user}/>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default CardComponent;
