import { useEffect, useState } from "react";
import { MyCard } from "./MyCard";
import { Selections } from "./SelectionsOfAddtask";

const status = ["To Do", "In Progress", "Stuck", "Done"];
const states = ["Low", "Mid", "High"];

const headers = ["ToDo", "In-progress", "Stuck", "Done"];
export const Cards = (props) => {
  const {}=props
  const [card, setCard] = useState(false);
  const [array, setArray] = useState([]);
  const [titlevalue, setTitlevalue] = useState("");
  const [descriptionvalue, setDesctionvalue] = useState("");
  const [statusValue, setStatusValue] = useState("");

  const Modal = () => {
    setCard((item) => !item);
  };
  const addtask = () => {
    const newtitle = [...array];
    newtitle.push({
      title: titlevalue,
      description: descriptionvalue,
      status: statusValue,
    });
    console.log("ee", newtitle);

    const temp = JSON.stringify(newtitle);
    localStorage.setItem("array", temp);
    setArray(newtitle);
    setTitlevalue("");
    setDesctionvalue("");
  };

  return (
    <div>
      <div>
        <div className="flex gap-12">
          {headers.map((item, i) => {
            return (
              <div onClick={Modal} key={i}>
                <MyCard done={item} />
              </div>
            );
          })}
        </div>
      </div>
      <div>
        {card && (
          <div>
            <div className="fixed left-[41%] top-[250px] bg-[#fff] w-[500px] flex flex-col font-sans gap-8 p-8 rounded-lg">
              <h1 className="text-5xl font-bold ">Add Task</h1>
              <div className="flex gap-4 text-[25px] flex-col ">
                <div>
                  <h2>Title</h2>
                  <input
                    onChange={(e) => setTitlevalue(e.target.value)}
                    value={titlevalue}
                    className="border border-black rounded-lg pl-[10px] w-[100%]"
                  />
                </div>
                <div>
                  <h2>Description</h2>
                  <input
                    onChange={(e) => setDesctionvalue(e.target.value)}
                    value={descriptionvalue}
                    className="border border-black rounded-lg w-[100%] pl-[10px]"
                  />
                </div>
                <div className="">
                  <h2>Status</h2>
                  <Selections option={status} setStatusValue={setStatusValue} />
                </div>
                <div>
                  <h2>Priority</h2>
                  <Selections option={states} />
                </div>
              </div>
              <div onClick={() => addtask()}>
                <div
                  onClick={Modal}
                  className="bg-black py-[10px] text-white text-[30px] flex  justify-center rounded-lg"
                >
                  add task
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
