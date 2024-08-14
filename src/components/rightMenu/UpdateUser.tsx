"use client";

import { User } from "@prisma/client";

const UpdateUser = ({ user }: { user: User }) => {
  return (
    <div>
      <span className="text-blue-500 text-xs cursor-pointer">Update</span>
    </div>
  );
};
export default UpdateUser;
