"use client";

import { acceptFollowRequest, declineFollowRequest } from "@/lib/actions";
import { FolloweRequest, User } from "@prisma/client";
import { request } from "http";
import Image from "next/image";
import { useOptimistic, useState } from "react";
type RequestWithUser = FolloweRequest & {
  sender: User;
};

const FriendRequestList = ({ requests }: { requests: RequestWithUser[] }) => {
  const [requestState, setRequestState] = useState(requests);

  const accept = async (requestId: number, userId: string) => {
    removeOptimisticRequests(requestId);
    try {
      await acceptFollowRequest(userId);
      setRequestState((prev) => prev.filter((req) => req.id !== requestId));
    } catch (error) {}
  };
  const decline = async (requestId: number, userId: string) => {
    removeOptimisticRequests(requestId);
    try {
      await declineFollowRequest(userId);
      setRequestState((prev) => prev.filter((req) => req.id !== requestId));
    } catch (error) {}
  };

  const [optimisticRequests, removeOptimisticRequests] = useOptimistic(
    requestState,
    (state, value: number) => state.filter((req) => req.id !== value)
  );
  return (
    <div>
      {requests.map((request) => (
        <div className="flex justify-between items-center" key={request.id}>
          <div className="flex items-center gap-4">
            <Image
              src={request.sender.avatar || "/noAvatar.png"}
              alt=""
              width={40}
              height={40}
              className="w-9 h-9 rounded-full object-cover"
            />
            <span className="font-semibold">
              {request.sender?.name && request.sender?.surname
                ? request.sender?.name + " " + request.sender?.surname
                : request.sender?.username}
            </span>
          </div>
          <div className="flex gap-3 justify-end">
            <form action={() => accept(request.id, request.sender.id)}>
              <button>
                <Image
                  src="/accept.png"
                  alt=""
                  width={20}
                  height={20}
                  className="cursor-pointer"
                />
              </button>
            </form>
            <form action={() => accept(request.id, request.sender.id)}>
              <button>
                <Image
                  src="/reject.png"
                  alt=""
                  width={20}
                  height={20}
                  className="cursor-pointer"
                />
              </button>
            </form>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FriendRequestList;
