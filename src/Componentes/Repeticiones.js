const Repeticiones = ({ colors, sets }) => {
  const set = new Array(sets).fill("");
  return (
    <div
      className="w-full max-w-md flex flex-col items-center gap-4 overflow-auto"
      style={{ maxHeight: "400px" }}
    >
      {set.map((_, index) => (
        <div key={index} className="flex w-full gap-4 justify-between">
          <textarea
            className="flex-1 p-2 border rounded resize-none"
            placeholder="Weight"
            style={{ maxHeight: "30px", maxWidth: "90px" }}
          ></textarea>
          <textarea
            className="flex-1 p-2 border rounded resize-none"
            placeholder="RPE"
            style={{ maxHeight: "30px", maxWidth: "90px" }}
          ></textarea>
          <textarea
            className="flex-1 p-2 border rounded resize-none"
            placeholder="RP"
            style={{ maxHeight: "30px", maxWidth: "90px" }}
          ></textarea>
        </div>
      ))}
    </div>
  );
};

export default Repeticiones;
