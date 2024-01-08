export const Selections = ({ option, setStatusValue }) => {
  
  return (
    <select className="border border-black rounded-lg w-[100%]">
      {option.map((item, index) => (
        <option
          key={index}
          value={item}
          onChange={(event) => setStatusValue(event.target.value)}
        >
          {item}
        </option>
      ))}
    </select>
  );
};
