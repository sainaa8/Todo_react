export const MyCard = (props) => {
  const { done } = props;

  return (
    <div>
      <div className=" h-fit bg-amber-600 rounded-xl">
        <div className="w-[100%] h-[60px]text-[30px] font-sans  items-center 	">
          <div className="ml-[20px] text-[30px] flex gap-[10px]">
            <div className="font-bold">{done}</div>
            <div>0</div>
          </div>
        </div>
        <div className="w-[100%] h-[70px] flex justify-center items-center">
          <div className=" w-[95%] h-[70%] flex text-[30px] gap-[20px] font-sans items-center  hover:bg-amber-800 rounded-lg">
            <div className="ml-[40px]">+</div>
            <div className="w-[200px] flex ">add card</div>
          </div>
        </div>
      </div>
    </div>
  );
};
