import { IoIosSearch } from "react-icons/io";
export const  Search = () => {
  return (
    <>
      <form action="#" className="w-full flex space-x-3 items-center">
        <IoIosSearch className="text-[#979797] text-md md:text-2xl" />
        <input
          placeholder="Search"
          className="flex-grow h-full outline-transparent "
        />
      </form>
    </>
  );
};
