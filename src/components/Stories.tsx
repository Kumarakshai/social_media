import { auth } from "@clerk/nextjs/server";
import Image from "next/image";
import StoryList from "./StoryList";
import prisma from "@/lib/clinet";

const Stories = async () => {
  const { userId: currentUserId } = auth();

  if (!currentUserId) return null;

  const stories = await prisma.story.findMany({
    where: {
      expiresAt: {
        gt: new Date(),
      },
      OR: [
        {
          User: {
            followers: {
              some: {
                followerId: currentUserId,
              },
            },
          },
        },
        {
          userId: currentUserId,
        },
      ],
    },
    include: {
      User: true,
    },
  });

  return (
    <div className="p-4 bg-white rounded-lg shadow-md overflow-scroll text-xs scrollbar-hide">
      <div className="flex gap-8 w-max">
        {/* <StoryList stories={stories} userId={currentUserId} /> */}
      </div>
    </div>
  );
};

export default Stories;
