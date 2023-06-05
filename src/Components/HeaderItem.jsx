const HeaderItem = ({ name, Logo }) => {
  return (
    <div className="flex  items-center gap-3 cursor-pointer hover:underline underline-offset-8 transition-all ease-in-out delay-150 ">
      <Logo />
      <h2 className="hidden  md:block">{name}</h2>
    </div>
  );
};
export default HeaderItem;
