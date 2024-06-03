import { useSession } from "next-auth/react";

export const useCurrentID = () => {
  const session = useSession();

  return session.data?.user?.id;
};
