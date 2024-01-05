import { useState } from "react";

const MyCard = (props) => {
  const { done } = props;
  return (
    <div>
      <div className="w-[400px] h-fit bg-amber-600 rounded-xl">
        <div className="w-[100%] h-[60px]text-[30px] font-sans  items-center 	">
          <div className="ml-[20px] text-[30px] flex gap-[10px]">
            <div className="font-bold">{done}</div>
            <div>0</div>
          </div>
        </div>
        <div className="w-[100%] h-[70px] flex justify-center items-center">
          <div className=" w-[95%] h-[70%] flex text-[30px] gap-[20px] font-sans items-center  hover:bg-amber-800 rounded-lg">
            <div className="ml-[40px]">+</div>
            <div className=" ">
              <div>add card</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
const Selections = ({ option, getOptionValue }) => {
  return (
    <select
      className="border border-black rounded-lg w-[100%]"
      onChange={getOptionValue}
    >
      {option.map((item, index) => (
        <option key={index} value={item}>
          {item}
        </option>
      ))}
    </select>
  );
};
const status = ["To Do", "In Progress", "Stuck", "Done"];
const states = ["Low", "Mid", "High"];

const headers = [
  { el: "ToDo" },
  { el: "In-progress" },
  { el: "Stuck" },
  { el: "Done" },
];
export const Cards = () => {
  const [card, setCard] = useState(false);
  const getModal = () => {
    setCard((item) => !item);
  };
  return (
    <div>
      <div>
        <div className="flex gap-12">
          {headers.map((el, i) => {
            return (
              <div onClick={getModal} key={i}>
                <MyCard done={el.el} />
              </div>
            );
          })}
        </div>
      </div>
      <div>
        {card && (
          <div>
            <div className="fixed left-[41%] top-[300px] bg-[#fff] w-[500px] flex flex-col font-sans gap-8 p-8 rounded-lg">
              <h1 className="text-5xl font-bold ">Add Task</h1>
              <div className="flex gap-4 text-[25px] flex-col ">
                <div>
                  <h2>Title</h2>
                  <input className="border border-black rounded-lg pl-[10px] w-[100%]" />
                </div>
                <div>
                  <h2>Description</h2>
                  <input className="border border-black rounded-lg w-[100%] pl-[10px]" />
                </div>
                <div className="">
                  <h2>Status</h2>
                  <Selections option={status} />
                </div>
                <div>
                  <h2>Priority</h2>
                  <Selections option={states} />
                </div>
              </div>
              <div
                onClick={getModal}
                className="bg-black py-[10px] text-white text-[30px] flex  justify-center rounded-lg"
              >
                add task
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
