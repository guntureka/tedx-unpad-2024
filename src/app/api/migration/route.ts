import { db } from "@/utils/db";
import { NextResponse } from "next/server";

/**
 * Performs a POST request to migrate user data.
 *
 * @returns A Promise that resolves to a JSON response indicating the success of the migration.
 */
export const POST = async () => {
  // try {
  //   const users = await db.user.findMany();

  //   if (!users) {
  //     return NextResponse.json({ error: "User doesnt exist" });
  //   }

  //   users.map(async (user, index) => {
  //     let firstName = "";
  //     let lastName = "";
  //     if (user.first_name) {
  //       firstName = user.first_name;
  //     }
  //     if (user.last_name) {
  //       lastName = user.last_name;
  //     }
  //     const name = firstName.concat(" ", lastName);

  //     await db.user.update({
  //       where: {
  //         id: user.id,
  //       },
  //       data: {
  //         name: name,
  //       },
  //     });

  //     const existingProfile = await db.profile.findFirst({
  //       where: {
  //         userId: user.id,
  //       },
  //     });

  //     if (existingProfile) {
  //       await db.profile.update({
  //         where: {
  //           userId: user.id,
  //         },
  //         data: {
  //           firstName: firstName,
  //           lastName: lastName,
  //         },
  //       });
  //     } else {
  //       await db.profile.create({
  //         data: {
  //           firstName: firstName,
  //           lastName: lastName,
  //           user: {
  //             connect: {
  //               id: user.id,
  //             },
  //           },
  //         },
  //       });
  //     }
  //   });

  //   return Response.json({ message: "Success migrate" });
  // } catch (error) {
  //   Response.json(error);
  // }
};
