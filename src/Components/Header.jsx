import logo from "../assets/logo/logo.svg";
import HeaderData from "../Data/HeaderData";
import HeaderItem from "./HeaderItem";
import HeaderSearch from "./HeaderSearch";
const Header = () => {
  return (
    <div className=" h-full   px-1 py-1 flex flex-col gap-5 md:items-center md:justify-between md:w-full md:h-max md:flex-row">
      <img className="max-w-fit" src={logo} alt="logo" />
      <div className="flex flex-col gap-[clamp(1rem,8vh,5rem)] items-center justify-center md:flex-row ">
        {HeaderData.map((item, index) => {
          return <HeaderItem key={index} name={item.name} Logo={item.logo} />;
        })}
      </div>
      <HeaderSearch />
    </div>
  );
};
export default Header;
