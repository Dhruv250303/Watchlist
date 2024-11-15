import React from "react";

function Pagination({handlePrev,handleNext,pageno}) {
  return (
    <div className="bg-gray-500 text-center mt-4 flex justify-center">
      <div className="px-8">
        <i class="fa-solid fa-arrow-left hover:scale-110 duration-200" onClick={handlePrev}></i>
      </div>
      <div className="font-bold">{pageno}</div>
      <div className="px-8">
        <i className="fa-solid fa-arrow-right hover:scale-110 duration-200" onClick={handleNext}></i>
      </div>
    </div>
  );
}

export default Pagination;