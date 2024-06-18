import React from "react";
import UserTable from "@/components/admin-dashboard/UserTable";
import {auth} from '@/auth'
import { redirect } from 'next/navigation'
import { getUserById } from "@/actions/user";

const page = async () => {
  const session = await auth()
  if (!session){
      return null;
  }
  const user = await getUserById(session.user.id!)
  if (!user) {
    return <div>not found</div>;
  }
  if(user.role !== 'ADMIN'){
    redirect('/')
  
  }
  return (
    <div className="my-[150px] mx-[50px]">
      <UserTable />
    </div>
  );
};

export default page;