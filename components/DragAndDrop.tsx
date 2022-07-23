import React from "react";

const DragAndDrop = () => {
  return (
    <div className="w-full border-dashed border border-[#1379C6] bg-[#F6F8FF] rounded-lg py-[60px]">
      <div className="md:w-[118px] md:h-[118px] h-[90px] w-[90px] border-4 border-[#1379C6] rounded-full mx-auto flex items-center justify-center">
        <img
          src="/assets/img/upload.png"
          alt="Upload"
          className="w-14 h-14 object-contain"
        />
      </div>
      <div className="text-sm mx-auto text-center mt-6">
        <span className="text-base text-[#1379C6]">Drag &amp; Drop</span> files
        here to upload or <br />
        <span className="text-xs">
          The Upload Template file is in .CSV format
        </span>
      </div>
      <button
        className="bg-[#1379C6] focus:outline-none text-white text-xs py-2 px-3.5 rounded mt-6 mx-auto block"
        type="button"
      >
        Select File
      </button>
    </div>
  );
};

export default DragAndDrop;
