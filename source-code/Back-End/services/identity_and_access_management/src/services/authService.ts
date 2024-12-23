// import { Prisma, PrismaClient, User } from "@prisma/client";
// import { HttpError } from "../errors/httpError";
// import { createUserDTO, updateUserDTO, userResponseDTO } from "../interfaces/users";
// import { handleDatabaseError } from "../utils/handleDatabaseErrors";
// import dotenv from "dotenv";

// // Load environment variables from .env file
// dotenv.config();

// // Instantiate Prisma Client
// const prisma = new PrismaClient();

// export class UserService {

//   public async getUserById({ userId, tenantId }: { tenantId: number; userId: number }): Promise<userResponseDTO | never> {
//     try {
//       const user = await prisma.user.findUnique({
//         where: { value },
//       });
//       if (!user) throw new HttpError({ message: "User not found", statusCode: 404 });
//       return user;
//     } catch (error) {
//       console.log(error);

//       handleDatabaseError("Could not retrieve user", error);
//     }
//   }
// }
