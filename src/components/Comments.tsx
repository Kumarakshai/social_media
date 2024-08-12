import Image from "next/image";

const Comments = () => {
  return (
    <div className="">
      <div className="flex items-center gap-4 ">
        <Image
          src="https://images.pexels.com/photos/307008/pexels-photo-307008.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt=""
          width={32}
          height={32}
          className="w-8 h-8 rounded-full"
        />
        <div className="flex-1 flex items-center justify-between bg-slate-100 rounded-md text-sm px-6 py-2 w-full">
          <input
            type="text"
            placeholder="Write a comment...."
            className="bg-transparent outline-none flex-1"
          />
          <Image
            src="/emoji.png"
            alt=""
            width={16}
            height={16}
            className="cursor-pointer"
          />
        </div>
      </div>

      <div className="">
        <div className="flex gap-4 justify-between mt-6">
          <Image
            src="https://images.pexels.com/photos/307008/pexels-photo-307008.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
            width={40}
            height={40}
            className="w-10 h-10 rounded-full"
          />
          <div className="flex flex-col gap-2 flex-1">
            <span className="font-medium">Bernice Spencer</span>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut hic
              quo unde laboriosam laborum reiciendis possimus tempora, excepturi
              odit qui id culpa! Provident qui, nobis magni cumque id fuga quas?
            </p>
            <div className="flex items-center gap-8 text-xs text-gray-500">
              <div className="flex items-center gap-4">
                <Image
                  src="/like.png"
                  alt=""
                  width={12}
                  height={12}
                  className="w-4 h-4 cursor-pointer"
                />
                <span className="text-gray-300">|</span>
                <span className="text-gray-500">
                  41 <span className="hidden md:inline">Likes</span>
                </span>
              </div>
              <div className="">Reply</div>
            </div>
          </div>
          <Image
            src="/more.png"
            alt=""
            width={16}
            height={16}
            className="cursor-pointer w-4 h-4"
          />
        </div>
      </div>
    </div>
  );
};

export default Comments;
