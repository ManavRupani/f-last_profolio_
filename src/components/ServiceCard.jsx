import React from 'react';

const ServiceCard = ({ title, description, borderColor, icon1, icon2 }) => {
  return (
    <div className={`relative h-full p-5 bg-white border-2 rounded-lg flex flex-col justify-center items-center shadow-md transition-all hover:bg-[#d9fb69] hover:border hover:border-black hover:shadow-custom ${borderColor}`}>
      <div className="flex justify-center space-x-[100px]">
        {icon1}
        {icon2}
      </div>
      <h3 className="my-2 ml-3 text-lg font-bold text-gray-800">{title}</h3>
      <p className="mt-3 mb-1 text-xs font-medium uppercase">------------</p>
      <p className="mb-2 text-gray-600">{description}</p>
    </div>
  );
}

export default ServiceCard;
