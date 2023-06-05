import { AiOutlineSearch } from "react-icons/ai";
import avatar from "../assets/logo/avatar.jpg";

const HeaderSearch = () => {
  return (
    <div className="md:bg-[#31333c]  flex items-center justify-center md:px-1 md:gap-1 md:rounded-full ">
      <AiOutlineSearch className="hidden md:block" />
      <input
        className="bg-transparent  w-0 text-sm hover:border-0 outline-none md:w-[50px]"
        type="text"
        placeholder="Search"
      />
      <img className="w-[25px] object-contain" src={avatar} alt="profile" />
    </div>
  );
};
export default HeaderSearch;
