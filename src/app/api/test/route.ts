import { getAllUser, getAllUserWithProfile } from "@/actions/user";

export const GET = async () => {
  try {
    const users = await getAllUserWithProfile();

    return Response.json(users);
  } catch (error) {
    return Response.json(error);
  }
};
