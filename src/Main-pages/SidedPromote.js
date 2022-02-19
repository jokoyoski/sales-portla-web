import React from "react";

const SidedPromote = () => {
  return (
    <div className="p-3 rounded-lg">
      <div className="flex p-3 text-blue-500 mt-3 flex-col bg-white h-64 overflow-hidden rounded-2xl">
        <div>
          <h5>No Dullling</h5> <h1 className="font-semibold">Shopping!!!</h1>{" "}
          <p>
            Shop From the best Stores here on BizinCloud and pickup at close by
            location
          </p>
        </div>{" "}
        <div>
          <img
            src="http://ak9.picdn.net/shutterstock/videos/2322890/thumb/1.jpg"
            alt="pmt_img"
          />{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
};

export default SidedPromote;
