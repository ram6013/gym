import Repeticiones from "./Repeticiones";
import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import { toast } from "react-hot-toast";

const Ejercicios = ({ cantidadEjercicios, colors }) => {
  const [sets, setSets] = useState(Array(cantidadEjercicios).fill(0));
  const [visible, setVisible] = useState(Array(cantidadEjercicios).fill(true));

  const handleSetsChange = (event, index) => {
    let value = parseInt(event.target.value, 10);
    if (value > 15) {
      toast.error("The number cant be more than 15.", { duration: 3000 });

      value = 0;
    } else if (value < 0) {
      toast.error("The number cant be less than 0.", { duration: 3000 });
      value = 0;
    }
    const newSets = [...sets];
    newSets[index] = value;
    setSets(newSets);
  };

  const handleSetVisible = (index) => {
    const newVisible = [...visible];
    newVisible[index] = !newVisible[index];
    setVisible(newVisible);
  };

  return (
    <div>
      {Array(cantidadEjercicios)
        .fill("")
        .map((_, index) => (
          <div key={index} className="mb-4 flex flex-col items-center">
            <div className="flex items-center justify-center mb-2 gap-2">
              {visible[index] ? (
                <FaMinus
                  color={colors.icon2}
                  onClick={() => handleSetVisible(index)}
                  className={`cursor-pointer`}
                />
              ) : (
                <FaPlus
                  color={colors.icon2}
                  onClick={() => handleSetVisible(index)}
                  className={`cursor-pointer`}
                />
              )}
              <textarea
                className={`${colors} p-2 border rounded-xl border-gray-300 text-center resize-none`}
                placeholder="Exercise:"
              ></textarea>
              <input
                min={0}
                max={15}
                value={sets[index] || ""}
                type="number"
                placeholder="Sets"
                onChange={(event) => handleSetsChange(event, index)}
                className="p-2 border text-center rounded-xl  [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
              />
            </div>
            {sets[index] > 0 && visible[index] && (
              <div className="flex flex-col w-full items-center">
                <Repeticiones colors={colors} sets={sets[index]} />
              </div>
            )}
          </div>
        ))}
    </div>
  );
};

export default Ejercicios;
