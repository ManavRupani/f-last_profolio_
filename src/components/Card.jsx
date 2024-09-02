import React from 'react';

const Card = () => {
  return (
    <>
      <div className="card-square rounded-lg bg-gray-50 border border-white-300 h-[300px] w-[300px] hover:bg-[#d9fb69] hover:border hover:border-black hover:shadow-custom transition-all flex flex-col justify-center items-center shadow-md">
        
        {/* Icons at the top */}
        <div className="flex justify-center space-x-[100px]">
          <svg className="w-6 h-6 text-blue-500 top-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
          </svg>
          <svg className="w-6 h-6 text-blue-500 " fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
          </svg>
        </div>
        
        {/* Card content */}
        <div className="card-body p-4 text-center mt-4">
          <h5 className="card-title text-lg font-semibold mb-2">Card Title</h5>
          <p className="card-text text-gray-700 mt-2">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
      </div>
    </>
  );
}

export default Card;
