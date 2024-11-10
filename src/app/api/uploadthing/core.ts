/* eslint-disable @typescript-eslint/only-throw-error */
import { auth } from "@/server/auth";
import { db } from "@/server/db";
import { createUploadthing, type FileRouter } from "uploadthing/next";
import { UploadThingError } from "uploadthing/server";

const ut = createUploadthing();

export const fileRouter = {
  imageUploader: ut({ image: { maxFileSize: "4MB" } })
    .middleware(async () => {
      const session = await auth();

      if (!session) throw new UploadThingError("Unauthenticated");

      const user = await db.user.findFirst({
        where: {
          id: session?.user?.id,
        },
      });

      if (!user) throw new UploadThingError("UserNotFound");
      if (user.role !== "ADMIN") throw new UploadThingError("Unauthorized");

      // Whatever is returned here is accessible in onUploadComplete as `metadata`
      return { userEmail: user.email };
    })
    .onUploadComplete(async ({ metadata, file }) => {
      console.log("Upload complete for user email:", metadata.userEmail, "file url", file.url);

      // * Whatever is returned here is sent to the client-side `onClientUploadComplete` callback
      return { uploadedBy: metadata.userEmail, url: file.url };
    }),
} satisfies FileRouter;

export type OurFileRouter = typeof fileRouter;
