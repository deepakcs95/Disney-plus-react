const HeaderItem = ({ name, Logo }) => {
  return (
    <div className="flex lg:text-xl   items-center gap-1 cursor-pointer hover:underline underline-offset-8  ">
      <Logo />
      <h2 className="hidden    md:block ">{name}</h2>
    </div>
  );
};
export default HeaderItem;
