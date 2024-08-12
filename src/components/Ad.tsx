import Image from "next/image";

const Ad = ({ size }: { size: "sm" | "md" | "lg" }) => {
  return (
    <div className="p-4 bg-white rounded-2xl shadow-md text-sm">
      {/* top */}
      <div className="flex items-center justify-between text-gray-500 font-medium">
        <span className="text-gray-500">Sponsored Ads</span>
        <Image src="/more.png" alt="" width={16} height={16} />
      </div>
      {/* bottom */}
      <div
        className={`flex flex-col mt-4 ${size === "sm" ? "gap-2" : "gap-4"}`}
      >
        <div
          className={`relative w-full ${
            size === "sm" ? "h-24" : size === "md" ? "h-36" : "h-48"
          }`}
        >
          <Image
            src="https://images.pexels.com/photos/1048036/pexels-photo-1048036.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
            fill
            className="rounded-2xl object-cover"
          />
        </div>
        <div className="flex items-center gap-4">
          <Image
            src="https://images.pexels.com/photos/1048036/pexels-photo-1048036.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
            width={24}
            height={24}
            className="rounded-2xl w-6 h-6 object-cover"
          />
          <span className="text-blue-500 font-medium">BigChef Loungs</span>
        </div>
        <p className={size === "sm" ? "text-xs" : "text-sm"}>
          {size === "sm"
            ? "Lorem ipsum dolor sit amet consectetur, adipisicing elit."
            : size === "md"
            ? "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum aliquid vero libero nostrum voluptatem quo error"
            : "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi quasi iure dolore illo. Laborum perferendis dolores nostrum dicta, ullam eligendi quasi temporibus alias, iure expedita magnam error delectus voluptatum aliquid"}
        </p>
        <button className="bg-gray-200 text-gray-500 p-2 text-xs rounded-2xl">
          Learn more
        </button>
      </div>
    </div>
  );
};

export default Ad;
