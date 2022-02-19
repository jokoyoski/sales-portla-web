import React from "react";

const Products = () => {
  return (
    <div className="px-28 space-y-7 mb-7">
      {" "}
      {/* Product Category and Product listings inside */}
      <div className="bg-gradient-to-r from-blue-700 to-blue-500 rounded-2xl  flex flex-col">
        <div className="Category-Name p-3 grid grid-cols-2 text-white">
          <div>
            <h5>Gadgets</h5>
          </div>
          <div className="flex justify-end">
            <h5 className="hover:underline transition duration-500 ease-in-out cursor-pointer">
              See all
            </h5>
          </div>
        </div>
        <div className="bg-white p-5 rounded-b-2xl w-full">
          {" "}
          <div className="flex space-x-4">
            {" "}
            <div className="shadow-md p-3 flex flex-col">
              {" "}
              <div className="grid grid-cols-2">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="#EF8923"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                  {/* Onclick of the Love icon Change the fill state to the Color */}
                </span>
                <span className="rounded-full bg-[#ef892338] px-3">
                  {" "}
                  <span className="text-[#EF8923] font-semibold">-25</span>{" "}
                </span>
              </div>
              <div className="w-full flex justify-center">
                <img
                  src="https://tse3.mm.bing.net/th?id=OIP.ECrXf7th7m33neLZ_9RAtQHaHa&pid=Api&P=0&w=161&h=161"
                  alt="product_img"
                  className="w-40"
                />
              </div>
              <div className="product_info">
                <div className="grid grid-cols-2">
                  <div>
                    {" "}
                    <div className="flex flex-col">
                      <span className="product_name font-semibold text-gray-500">
                        Legion M31
                      </span>{" "}
                      <small className="product_dec text-gray-300">
                        Lorem, ipsum dolor.
                      </small>
                    </div>
                    <h4 className="product_price font-bold text-gray-700">
                      $1000
                    </h4>
                  </div>
                  <div className="flex justify-end items-end">
                    <button className="bg-blue-500 px-3 py-1 text-white font-semibold hover:bg-blue-700 transition duration-500 ease-in-out rounded-lg">
                      Buy Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="shadow-md p-3 flex flex-col">
              {" "}
              <div className="grid grid-cols-2">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="#EF8923"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                  {/* Onclick of the Love icon Change the fill state to the Color */}
                </span>
                <span className="rounded-full bg-[#ef892338] px-3">
                  {" "}
                  <span className="text-[#EF8923] font-semibold">-25</span>{" "}
                </span>
              </div>
              <div className="w-full flex justify-center">
                <img
                  src="https://sp.yimg.com/ib/th?id=OP.nUBMkxgGmTRq3Q474C474&o=5&pid=21.1"
                  alt="product_img"
                  className="w-40"
                />
              </div>
              <div className="product_info">
                <div className="grid grid-cols-2">
                  <div>
                    {" "}
                    <div className="flex flex-col">
                      <span className="product_name font-semibold text-gray-500">
                        Legion M31
                      </span>{" "}
                      <small className="product_dec text-gray-300">
                        Lorem, ipsum dolor.
                      </small>
                    </div>
                    <h4 className="product_price font-bold text-gray-700">
                      $1000
                    </h4>
                  </div>
                  <div className="flex justify-end items-end">
                    <button className="bg-blue-500 px-3 py-1 text-white font-semibold hover:bg-blue-700 transition duration-500 ease-in-out rounded-lg">
                      Buy Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="shadow-md p-3 flex flex-col">
              {" "}
              <div className="grid grid-cols-2">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="#EF8923"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                  {/* Onclick of the Love icon Change the fill state to the Color */}
                </span>
                <span className="rounded-full bg-[#ef892338] px-3">
                  {" "}
                  <span className="text-[#EF8923] font-semibold">-25</span>{" "}
                </span>
              </div>
              <div className="w-full flex justify-center">
                <img
                  src="https://sp.yimg.com/ib/th?id=OP.qJiabYnufcTV6g474C474&o=5&pid=21.1"
                  alt="product_img"
                  className="w-40"
                />
              </div>
              <div className="product_info">
                <div className="grid grid-cols-2">
                  <div>
                    {" "}
                    <div className="flex flex-col">
                      <span className="product_name font-semibold text-gray-500">
                        Legion M31
                      </span>{" "}
                      <small className="product_dec text-gray-300">
                        Lorem, ipsum dolor.
                      </small>
                    </div>
                    <h4 className="product_price font-bold text-gray-700">
                      $1000
                    </h4>
                  </div>
                  <div className="flex justify-end items-end">
                    <button className="bg-blue-500 px-3 py-1 text-white font-semibold hover:bg-blue-700 transition duration-500 ease-in-out rounded-lg">
                      Buy Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="shadow-md p-3 flex flex-col">
              {" "}
              <div className="grid grid-cols-2">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="#EF8923"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                  {/* Onclick of the Love icon Change the fill state to the Color */}
                </span>
                <span className="rounded-full bg-[#ef892338] px-3">
                  {" "}
                  <span className="text-[#EF8923] font-semibold">-25</span>{" "}
                </span>
              </div>
              <div className="w-full flex justify-center">
                <img
                  src="https://sp.yimg.com/ib/th?id=OP.ReYo5UWbGM3EWA474C474&o=5&pid=21.1"
                  alt="product_img"
                  className="w-40"
                />
              </div>
              <div className="product_info">
                <div className="grid grid-cols-2">
                  <div>
                    {" "}
                    <div className="flex flex-col">
                      <span className="product_name font-semibold text-gray-500">
                        Legion M31
                      </span>{" "}
                      <small className="product_dec text-gray-300">
                        Lorem, ipsum dolor.
                      </small>
                    </div>
                    <h4 className="product_price font-bold text-gray-700">
                      $1000
                    </h4>
                  </div>
                  <div className="flex justify-end items-end">
                    <button className="bg-blue-500 px-3 py-1 text-white font-semibold hover:bg-blue-700 transition duration-500 ease-in-out rounded-lg">
                      Buy Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Second Category */}
      <div className="bg-gradient-to-r from-blue-700 to-blue-500 rounded-2xl  flex flex-col">
        <div className="Category-Name p-3 grid grid-cols-2 text-white">
          <div>
            <h5>Shoes</h5>
          </div>
          <div className="flex justify-end">
            <h5 className="hover:underline transition duration-500 ease-in-out cursor-pointer">
              See all
            </h5>
          </div>
        </div>
        <div className="bg-white p-5 rounded-b-2xl w-full">
          {" "}
          <div className="flex space-x-4">
            {" "}
            <div className="shadow-md p-3 flex flex-col">
              {" "}
              <div className="grid grid-cols-2">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="#EF8923"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                  {/* Onclick of the Love icon Change the fill state to the Color */}
                </span>
                <span className="rounded-full bg-[#ef892338] px-3">
                  {" "}
                  <span className="text-[#EF8923] font-semibold">-25</span>{" "}
                </span>
              </div>
              <div className="w-full flex justify-center">
                <img
                  src="https://sp.yimg.com/ib/th?id=OP.oKhzil%2fTrjhPaQ474C474&o=5&pid=21.1"
                  alt="product_img"
                  className="w-40"
                />
              </div>
              <div className="product_info">
                <div className="grid grid-cols-2">
                  <div>
                    {" "}
                    <div className="flex flex-col">
                      <span className="product_name font-semibold text-gray-500">
                        Legion M31
                      </span>{" "}
                      <small className="product_dec text-gray-300">
                        Lorem, ipsum dolor.
                      </small>
                    </div>
                    <h4 className="product_price font-bold text-gray-700">
                      $1000
                    </h4>
                  </div>
                  <div className="flex justify-end items-end">
                    <button className="bg-blue-500 px-3 py-1 text-white font-semibold hover:bg-blue-700 transition duration-500 ease-in-out rounded-lg">
                      Buy Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="shadow-md p-3 flex flex-col">
              {" "}
              <div className="grid grid-cols-2">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="#EF8923"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                  {/* Onclick of the Love icon Change the fill state to the Color */}
                </span>
                <span className="rounded-full bg-[#ef892338] px-3">
                  {" "}
                  <span className="text-[#EF8923] font-semibold">-25</span>{" "}
                </span>
              </div>
              <div className="w-full flex justify-center">
                <img
                  src="https://tse1.mm.bing.net/th?id=OIP.D-8SFCwqvrYNmS4mRpOkSQHaIq&pid=Api&P=0&w=145&h=170"
                  alt="product_img"
                  className="w-40"
                />
              </div>
              <div className="product_info">
                <div className="grid grid-cols-2">
                  <div>
                    {" "}
                    <div className="flex flex-col">
                      <span className="product_name font-semibold text-gray-500">
                        Legion M31
                      </span>{" "}
                      <small className="product_dec text-gray-300">
                        Lorem, ipsum dolor.
                      </small>
                    </div>
                    <h4 className="product_price font-bold text-gray-700">
                      $1000
                    </h4>
                  </div>
                  <div className="flex justify-end items-end">
                    <button className="bg-blue-500 px-3 py-1 text-white font-semibold hover:bg-blue-700 transition duration-500 ease-in-out rounded-lg">
                      Buy Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="shadow-md p-3 flex flex-col">
              {" "}
              <div className="grid grid-cols-2">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="#EF8923"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                  {/* Onclick of the Love icon Change the fill state to the Color */}
                </span>
                <span className="rounded-full bg-[#ef892338] px-3">
                  {" "}
                  <span className="text-[#EF8923] font-semibold">-25</span>{" "}
                </span>
              </div>
              <div className="w-full flex justify-center">
                <img
                  src="https://tse3.mm.bing.net/th?id=OIP.F4BWZT8dJStyvlS7Bcf4_QHaHa&pid=Api&P=0&w=167&h=167"
                  alt="product_img"
                  className="w-40"
                />
              </div>
              <div className="product_info">
                <div className="grid grid-cols-2">
                  <div>
                    {" "}
                    <div className="flex flex-col">
                      <span className="product_name font-semibold text-gray-500">
                        Legion M31
                      </span>{" "}
                      <small className="product_dec text-gray-300">
                        Lorem, ipsum dolor.
                      </small>
                    </div>
                    <h4 className="product_price font-bold text-gray-700">
                      $1000
                    </h4>
                  </div>
                  <div className="flex justify-end items-end">
                    <button className="bg-blue-500 px-3 py-1 text-white font-semibold hover:bg-blue-700 transition duration-500 ease-in-out rounded-lg">
                      Buy Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="shadow-md p-3 flex flex-col">
              {" "}
              <div className="grid grid-cols-2">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="#EF8923"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                  {/* Onclick of the Love icon Change the fill state to the Color */}
                </span>
                <span className="rounded-full bg-[#ef892338] px-3">
                  {" "}
                  <span className="text-[#EF8923] font-semibold">-25</span>{" "}
                </span>
              </div>
              <div className="w-full flex justify-center">
                <img
                  src="https://sp.yimg.com/ib/th?id=OP.GOPpkqRoyGHz9w474C474&o=5&pid=21.1&bw=0&bc=FFFFFF"
                  alt="product_img"
                  className="w-40"
                />
              </div>
              <div className="product_info">
                <div className="grid grid-cols-2">
                  <div>
                    {" "}
                    <div className="flex flex-col">
                      <span className="product_name font-semibold text-gray-500">
                        Legion M31
                      </span>{" "}
                      <small className="product_dec text-gray-300">
                        Lorem, ipsum dolor.
                      </small>
                    </div>
                    <h4 className="product_price font-bold text-gray-700">
                      $1000
                    </h4>
                  </div>
                  <div className="flex justify-end items-end">
                    <button className="bg-blue-500 px-3 py-1 text-white font-semibold hover:bg-blue-700 transition duration-500 ease-in-out rounded-lg">
                      Buy Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Third Category */}
      <div className="bg-gradient-to-r from-blue-700 to-blue-500 rounded-2xl  flex flex-col">
        <div className="Category-Name p-3 grid grid-cols-2 text-white">
          <div>
            <h5>Clothing</h5>
          </div>
          <div className="flex justify-end">
            <h5 className="hover:underline transition duration-500 ease-in-out cursor-pointer">
              See all
            </h5>
          </div>
        </div>
        <div className="bg-white p-5 rounded-b-2xl w-full">
          {" "}
          <div className="flex space-x-4">
            {" "}
            <div className="shadow-md p-3 flex flex-col">
              {" "}
              <div className="grid grid-cols-2">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="#EF8923"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                  {/* Onclick of the Love icon Change the fill state to the Color */}
                </span>
                <span className="rounded-full bg-[#ef892338] px-3">
                  {" "}
                  <span className="text-[#EF8923] font-semibold">-25</span>{" "}
                </span>
              </div>
              <div className="w-full flex justify-center">
                <img
                  src="https://sp.yimg.com/ib/th?id=OP.dTRnx3E8Rn5%2bxQ474C474&o=5&pid=21.1"
                  alt="product_img"
                  className="w-40"
                />
              </div>
              <div className="product_info">
                <div className="grid grid-cols-2">
                  <div>
                    {" "}
                    <div className="flex flex-col">
                      <span className="product_name font-semibold text-gray-500">
                        Legion M31
                      </span>{" "}
                      <small className="product_dec text-gray-300">
                        Lorem, ipsum dolor.
                      </small>
                    </div>
                    <h4 className="product_price font-bold text-gray-700">
                      $1000
                    </h4>
                  </div>
                  <div className="flex justify-end items-end">
                    <button className="bg-blue-500 px-3 py-1 text-white font-semibold hover:bg-blue-700 transition duration-500 ease-in-out rounded-lg">
                      Buy Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="shadow-md p-3 flex flex-col">
              {" "}
              <div className="grid grid-cols-2">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="#EF8923"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                  {/* Onclick of the Love icon Change the fill state to the Color */}
                </span>
                <span className="rounded-full bg-[#ef892338] px-3">
                  {" "}
                  <span className="text-[#EF8923] font-semibold">-25</span>{" "}
                </span>
              </div>
              <div className="w-full flex justify-center">
                <img
                  src="https://tse1.mm.bing.net/th?id=OIP.nA4D3w0u6MboOadvJ5rYzQHaJ4&pid=Api&P=0&w=124&h=165"
                  alt="product_img"
                  className="w-40"
                />
              </div>
              <div className="product_info">
                <div className="grid grid-cols-2">
                  <div>
                    {" "}
                    <div className="flex flex-col">
                      <span className="product_name font-semibold text-gray-500">
                        Legion M31
                      </span>{" "}
                      <small className="product_dec text-gray-300">
                        Lorem, ipsum dolor.
                      </small>
                    </div>
                    <h4 className="product_price font-bold text-gray-700">
                      $1000
                    </h4>
                  </div>
                  <div className="flex justify-end items-end">
                    <button className="bg-blue-500 px-3 py-1 text-white font-semibold hover:bg-blue-700 transition duration-500 ease-in-out rounded-lg">
                      Buy Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="shadow-md p-3 flex flex-col">
              {" "}
              <div className="grid grid-cols-2">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="#EF8923"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                  {/* Onclick of the Love icon Change the fill state to the Color */}
                </span>
                <span className="rounded-full bg-[#ef892338] px-3">
                  {" "}
                  <span className="text-[#EF8923] font-semibold">-25</span>{" "}
                </span>
              </div>
              <div className="w-full flex justify-center">
                <img
                  src="https://sp.yimg.com/ib/th?id=OP.g9NmhvlRyuZhBQ474C474&o=5&pid=21.1"
                  alt="product_img"
                  className="w-40"
                />
              </div>
              <div className="product_info">
                <div className="grid grid-cols-2">
                  <div>
                    {" "}
                    <div className="flex flex-col">
                      <span className="product_name font-semibold text-gray-500">
                        Legion M31
                      </span>{" "}
                      <small className="product_dec text-gray-300">
                        Lorem, ipsum dolor.
                      </small>
                    </div>
                    <h4 className="product_price font-bold text-gray-700">
                      $1000
                    </h4>
                  </div>
                  <div className="flex justify-end items-end">
                    <button className="bg-blue-500 px-3 py-1 text-white font-semibold hover:bg-blue-700 transition duration-500 ease-in-out rounded-lg">
                      Buy Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="shadow-md p-3 flex flex-col">
              {" "}
              <div className="grid grid-cols-2">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="#EF8923"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                  {/* Onclick of the Love icon Change the fill state to the Color */}
                </span>
                <span className="rounded-full bg-[#ef892338] px-3">
                  {" "}
                  <span className="text-[#EF8923] font-semibold">-25</span>{" "}
                </span>
              </div>
              <div className="w-full flex justify-center">
                <img
                  src="https://sp.yimg.com/ib/th?id=OP.cSJwXY6EIf7a2g474C474&o=5&pid=21.1"
                  alt="product_img"
                  className="w-40"
                />
              </div>
              <div className="product_info">
                <div className="grid grid-cols-2">
                  <div>
                    {" "}
                    <div className="flex flex-col">
                      <span className="product_name font-semibold text-gray-500">
                        Legion M31
                      </span>{" "}
                      <small className="product_dec text-gray-300">
                        Lorem, ipsum dolor.
                      </small>
                    </div>
                    <h4 className="product_price font-bold text-gray-700">
                      $1000
                    </h4>
                  </div>
                  <div className="flex justify-end items-end">
                    <button className="bg-blue-500 px-3 py-1 text-white font-semibold hover:bg-blue-700 transition duration-500 ease-in-out rounded-lg">
                      Buy Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
