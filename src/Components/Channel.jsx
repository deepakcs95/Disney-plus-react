import ChannelData from "../Data/ChannelData";

const Channel = () => {
  return (
    <div className="grid grid-cols-5 gap-1 md:gap-7 md:py-8 md:px-10">
      {ChannelData.map((item, k) => (
        <div
          className="relative hover:outline hover:scale-110 hover:z-[100] outline-white rounded-lg overflow-hidden transition-all duration-200
           ease-in-out cursor-pointer shadow-xl shadow-black"
          key={k}
        >
          <img className=" z-[1] border-red-100 " src={item.logo} alt="logo" />
          <video
            className="w-fit absolute top-0 z-0 opacity-0 hover:opacity-100"
            autoPlay
            muted
            preload="auto"
            loop
          >
            <source type="video/mp4" src={item.video} />
          </video>
        </div>
      ))}
    </div>
  );
};
export default Channel;
