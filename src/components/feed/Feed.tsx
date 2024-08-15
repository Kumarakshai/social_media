import { auth } from "@clerk/nextjs/server";
import Post from "./Post";
import prisma from "@/lib/clinet";

const Feed = async ({ username }: { username?: string }) => {
  const { userId } = auth();
  let posts;

  if (username) {
    posts = await prisma.post.findMany({
      where: {
        user: {
          username: username,
        },
      },
    });
  }
  return (
    <div className="p-4 bg-white shadow-md rounded-2xl flex flex-col gap-12">
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </div>
  );
};

export default Feed;
