import servicePic from "../assets/vo5tj29l.png";

const Browse = () => {
  return (
    <div className="w-full pt-10">
      <div className="w-10/12 mx-auto p-10 flex justify-between relative">
        <h1 className="text-4xl font-semibold">
          Home services at your
          <br /> doorstep
        </h1>
        <div className="flex gap-x-2">
          <div className="flex flex-col gap-y-2">
            <img
              src="https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template/w_233,dpr_1,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/home-screen/1681371120474-301f47.jpeg"
              alt=""
              className="rounded-tl-lg"
            />
            <img
              src="https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template/w_233,dpr_1,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/luminosity/1652168690740-f5ed68.png"
              alt=""
              className="rounded-bl-lg"
            />
          </div>
          <img src={servicePic} alt="" className="w-[230px]" />
        </div>
        <div className="flex flex-col absolute top-[10rem] border-2 p-3 rounded-lg items-center">
          <h1 className="text-2xl font-semibold text-gray-500">
            What are you looking for?
          </h1>
          <div className="grid grid-cols-3 mt-6 gap-y-7">
            <div className="flex flex-col items-center justify-center gap-y-2">
              <div className="bg-[#F5F5F5] w-[130px] flex justify-center items-center py-3 px-7 rounded-lg">
                <img
                  src="https://res.cloudinary.com/urbanclap/image/upload/t_high_res_category/w_56,dpr_1,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/supply/customer-app-supply/1678864013225-bfc1de.jpeg"
                  alt=""
                />
              </div>
              <p className="text-xs">{"Women's Salon & Spa"}</p>
            </div>
            <div className="flex flex-col items-center justify-center gap-y-2">
              <div className="bg-[#F5F5F5] w-[130px] flex justify-center items-center py-3 px-7 rounded-lg">
                <img
                  src="https://res.cloudinary.com/urbanclap/image/upload/t_high_res_category/w_56,dpr_1,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/luminosity/1710241114433-5cfa7c.jpeg"
                  alt=""
                />
              </div>
              <p className="text-xs">{"Men's Salon & Massage"}</p>
            </div>
            <div className="flex flex-col items-center justify-center gap-y-2">
              <div className="bg-[#F5F5F5] w-[130px] flex justify-center items-center py-3 px-7 rounded-lg">
                <img
                  src="https://res.cloudinary.com/urbanclap/image/upload/t_high_res_category/w_56,dpr_1,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/home-screen/1679292077307-6143d7.jpeg"
                  alt=""
                />
              </div>
              <p className="text-xs">{"AC & Appliance Repair"}</p>
            </div>
            <div className="flex flex-col items-center justify-center gap-y-2">
              <div className="bg-[#F5F5F5] w-[130px] flex justify-center items-center py-3 px-7 rounded-lg">
                <img
                  src="https://res.cloudinary.com/urbanclap/image/upload/t_high_res_category/w_56,dpr_1,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/home-screen/1681711961404-75dfec.jpeg"
                  alt=""
                />
              </div>
              <p className="text-xs">{"Cleaning"}</p>
            </div>
            <div className="flex flex-col items-center justify-center gap-y-2">
              <div className="bg-[#F5F5F5] w-[130px] flex justify-center items-center py-3 px-7 rounded-lg">
                <img
                  src="https://res.cloudinary.com/urbanclap/image/upload/t_high_res_category/w_56,dpr_1,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/luminosity/1658402794135-faf080.png"
                  alt=""
                />
              </div>
              <p className="text-xs">{"Electrician, Plumber & Carpenter"}</p>
            </div>
            <div className="flex flex-col items-center justify-center gap-y-2">
              <div className="bg-[#F5F5F5] w-[130px] flex justify-center items-center py-3 px-7 rounded-lg">
                <img
                  src="https://res.cloudinary.com/urbanclap/image/upload/t_high_res_category/w_56,dpr_1,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/luminosity/1705340729734-0a23f7.jpeg"
                  alt=""
                />
              </div>
              <p className="text-xs">{"Water Purifer"}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Browse;
