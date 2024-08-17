import servicePic from "../assets/vo5tj29l.png";
import {
  GRID_IMG1,
  GRID_IMG2,
  GRID_IMG3,
  GRID_IMG4,
  GRID_IMG5,
  GRID_IMG6,
  HOME_IMG1,
  HOME_IMG2,
} from "../utils/constants";

const Browse = () => {
  return (
    <div className="w-full pt-36">
      <div className="w-10/12 mx-auto p-10 flex justify-between relative">
        <h1 className="text-4xl font-semibold">
          Home services at your
          <br /> doorstep
        </h1>
        <div className="flex gap-x-2">
          <div className="flex flex-col gap-y-2">
            <img src={HOME_IMG1} alt="" className="rounded-tl-lg" />
            <img src={HOME_IMG2} alt="" className="rounded-bl-lg" />
          </div>
          <img src={servicePic} alt="" className="w-[230px]" />
        </div>
        <div className="flex flex-col absolute top-[10rem] border-2 p-3 rounded-lg items-center">
          <h1 className="text-2xl font-semibold text-gray-500">
            What are you looking for?
          </h1>
          <div className="grid grid-cols-3 mt-6 gap-y-7">
            <div className="flex flex-col items-center justify-center gap-y-2 group hover:opactiy-80 cursor-pointer">
              <div className="bg-[#F5F5F5] w-[130px] flex justify-center items-center py-3 px-7 rounded-lg group-hover:opacity-80">
                <img src={GRID_IMG1} alt="" />
              </div>
              <p className="text-xs group-hover:opacity-80">
                {"Women's Salon & Spa"}
              </p>
            </div>
            <div className="flex flex-col items-center justify-center gap-y-2 group hover:opactiy-80 cursor-pointer">
              <div className="bg-[#F5F5F5] w-[130px] flex justify-center items-center py-3 px-7 rounded-lg group-hover:opacity-80">
                <img src={GRID_IMG2} alt="" />
              </div>
              <p className="text-xs group-hover:opacity-80">
                {"Men's Salon & Massage"}
              </p>
            </div>
            <div className="flex flex-col items-center justify-center gap-y-2 group hover:opactiy-80 cursor-pointer">
              <div className="bg-[#F5F5F5] w-[130px] flex justify-center items-center py-3 px-7 rounded-lg group-hover:opacity-80">
                <img src={GRID_IMG3} alt="" />
              </div>
              <p className="text-xs group-hover:opacity-80">
                {"AC & Appliance Repair"}
              </p>
            </div>
            <div className="flex flex-col items-center justify-center gap-y-2 group hover:opactiy-80 cursor-pointer">
              <div className="bg-[#F5F5F5] w-[130px] flex justify-center items-center py-3 px-7 rounded-lg group-hover:opacity-80">
                <img src={GRID_IMG4} alt="" />
              </div>
              <p className="text-xs group-hover:opacity-80">{"Cleaning"}</p>
            </div>
            <div className="flex flex-col items-center justify-center gap-y-2 group hover:opactiy-80 cursor-pointer">
              <div className="bg-[#F5F5F5] w-[130px] flex justify-center items-center py-3 px-7 rounded-lg group-hover:opacity-80">
                <img src={GRID_IMG5} alt="" />
              </div>
              <p className="text-xs group-hover:opacity-80">
                {"Electrician, Plumber & Carpenter"}
              </p>
            </div>
            <div className="flex flex-col items-center justify-center gap-y-2 group hover:opactiy-80 cursor-pointer">
              <div className="bg-[#F5F5F5] w-[130px] flex justify-center items-center py-3 px-7 rounded-lg group-hover:opacity-80">
                <img src={GRID_IMG6} alt="" />
              </div>
              <p className="text-xs group-hover:opacity-80">
                {"Water Purifer"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Browse;
