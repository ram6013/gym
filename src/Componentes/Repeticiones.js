const Repeticiones = ({ colors, sets }) => {
  const set = new Array(sets).fill("");


  const communClassname = {
    input:
      "flex-1 p-2 border rounded resize-none scrollbar-hide [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none",
  };

  return (
    <div
      className="w-full max-w-md flex flex-col items-center gap-4 overflow-auto"
      style={{ maxHeight: "400px" }}
    >
      {set.map((_, index) => (
        <div key={index} className="flex w-full gap-4 justify-between">
          <input
            type="number"
            className={communClassname.input}
            placeholder="Weight"
            style={{ maxHeight: "30px", maxWidth: "90px" }}
          ></input>
          <input
            type="number"
            className={communClassname.input}
            placeholder="RPE"
            style={{ maxHeight: "30px", maxWidth: "90px" }}
          ></input>
          <input
            type="number"
            className={communClassname.input}
            placeholder="RP"
            style={{ maxHeight: "30px", maxWidth: "90px" }}
          ></input>
        </div>
      ))}
    </div>
  );
};

export default Repeticiones;
