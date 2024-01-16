import React from "react";
import { useState } from "react";
const ChipInput = () => {
  const [searchName, setSearchName] = useState(" ");
  const [selectedData, setSelectedData] = useState([]);
  const [index, setIndex] = useState(0);
  const [inputData, setInputData] = useState([
    {
      _id: 0,
      name: "Kaushal Kumar Yadav",
      email: "kaushalyad321@gmail.com",
      src: "images/1.jpg",
    },
    {
      _id: 1,
      name: "Pappu Kumar Yadav",
      email: "pappuyad321@gmail.com",
      src: "images/1.jpg",
    },
    {
      _id: 2,
      name: "Nitish Kumar Yadav",
      email: "nitishyad321@gmail.com",
      src: "images/1.jpg",
    },
    {
      _id: 3,
      name: "Rahul Kumar Yadav",
      email: "rahulyad321@gmail.com",
      src: "images/1.jpg",
    },
    {
      _id: 4,
      name: "Mukesh Kumar Yadav",
      email: "mukeshyad321@gmail.com",
      src: "images/1.jpg",
    },
    {
      _id: 5,
      name: "Raushan Kumar Yadav",
      email: "raushanyad321@gmail.com",
      src: "images/1.jpg",
    },
    {
      _id: 6,
      name: "Mohan Kumar Yadav",
      email: "mohanyad321@gmail.com",
      src: "images/1.jpg",
    },
  ]);
  const removeFromSelectedData = (data) => {
    setInputData((inputData) => [...inputData, data]);
    let updatedSelectedData = selectedData.filter((el) => el._id !== data._id);
    setSelectedData(updatedSelectedData);
  };
  const addSelectedData = (data) => {
    setSelectedData((selectedData) => [...selectedData, data]);
    let updatedInputData = inputData.filter((val) => val._id !== data._id);
    setInputData(updatedInputData);
  };
  return (
    <div className="w-full text-center py-5 min-h-screen px-5">
      <div className="flex w-[95%] mx-auto  bg-gray-200 border-b-4  border-blue-400 rounded-3xl ">
        <div className="flex">
          {selectedData.map((data) => {
            return (
              <div
                className="flex justify-center items-center bg-gray-400 min-h-[65%] rounded-3xl my-auto pr-3 ml-2"
                key={data._id}
              >
                <div>
                  <img
                    src={`${data.src}`}
                    alt="img"
                    className="w-11  rounded-full "
                  ></img>
                </div>
                <div className="ml-1 w-40 ">
                  <p className=" text-[12px]">{data.name}</p>
                </div>
                <button
                  onClick={() => {
                    removeFromSelectedData(data);
                  }}
                >
                  X
                </button>
              </div>
            );
          })}
        </div>
        <input
          className="w-full border-b-4 h-14 bg-gray-200 focus:outline-none pl-7 text-2xl rounded-2xl "
          onChange={(e) => {
            setSearchName(e.target.value);
          }}
        />
      </div>
      <div className="flex flex-col w-[40%] mx-auto bg-white max-h-80 overflow-y-scroll rounded-lg">
        {inputData.map((data) => {
          let indexSet = new Set();
          let n = searchName.length;
          let charArray = data.name;
          if (n > 0) {
            let i = 0;

            while (i < data.name.length) {
              if (searchName === data.name.substring(i, i + n)) {
                indexSet.add(i);
              }

              i++;
            }
          }
          console.log(indexSet);
          return (
            <div
              key={data._id}
              className={`flex flex-row cursor-pointer ${
                searchName.localeCompare(data.name) === 0
                  ? " bg-gray-600"
                  : " bg-gray-100"
              } `}
              onClick={() => {
                addSelectedData(data);
              }}
            >
              <div className="ml-2">
                <img
                  src={`${data.src}`}
                  alt="img"
                  className="w-20 rounded-full p-2"
                ></img>
              </div>
              <div className="ml-2">
                <p className="pt-6">
                  {data.name
                    .split("")
                    .map((char) =>
                      indexSet.has(index) === true ? (
                        <span className=" text-red-600">
                          {data.name.substring(index, setIndex(index + n))}
                        </span>
                      ) : (
                        <span>{char}</span>
                      )
                    )}
                </p>
              </div>
              <div className="ml-6">
                <p className="p-6 text-gray-300">{data.email}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ChipInput;
