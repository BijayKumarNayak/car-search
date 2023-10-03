import React from "react";

const Card = ({ data }) => {
 
  const { carName, year, capacity, fuel, milage, type, rent, duration, image } =
    data;
    

  return (
    <div className="p-4 border rounded-lg w-96 bg-slate-100 drop-shadow-md">
      <div className="mb-2 overflow-hidden rounded-lg h-52">
        <img src={image} alt=" " className="object-cover object-center w-full h-full" />
      </div>
      <div className="flex items-center justify-between ">
        <span className="font-semibold">{carName}</span>
        <span className="p-1 text-sm font-semibold border border-dashed rounded-lg border-sky-400">{year}</span>
      </div>
      <div className="py-4 border-b-2 border-stone-200">
        <div className="flex items-center ">
          <div className="flex items-center w-1/2">
            <span className="mr-1 text-xs material-symbols-outlined text-sky-400">group</span>
            <span className="text-xs">{capacity}</span>
          </div>{" "}
          <div className="flex items-center w-1/2">
            <div>
              <span className="mr-1 text-xs material-symbols-outlined text-sky-400">oil_barrel</span>
            </div>
            <span className="text-xs">{fuel}</span>
          </div>
        </div>
        <div className="flex items-center ">
          <div className="flex items-center w-1/2">
            <span className="mr-1 text-xs material-symbols-outlined text-sky-400">speed</span>
            <span className="text-xs">{milage}</span>
          </div>{" "}
          <div className="flex items-center w-1/2">
            <div>
              <span className="mr-1 text-xs material-symbols-outlined text-sky-400">
                swap_driving_apps_wheel
              </span>
            </div>
            <span className="text-xs">{type}</span>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between py-2">
      <div className="flex py-2 ">
      <span className="font-semibold">{`$ ${rent}`}</span> <div className="pt-1"><p className="text-sm ">{`/${duration}`}</p></div>

      </div>
      <div className="flex items-center ">
      <div className="flex items-center justify-center px-2 py-1 rounded-lg bg-slate-200">
      <span className="text-base material-symbols-outlined text-sky-400 ">
      favorite
      </span>
      </div>
     
<button className="p-1 ml-2 text-sm font-semibold text-white bg-blue-500 rounded-lg">Rent Now</button>
      
      
      </div>
      </div>
    </div>
  );
};

export default Card;
