import Repeticiones from "./Repeticiones";
import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

const Ejercicios = ({ cantidadEjercicios, colors }) => {
  const [sets, setSets] = useState(Array(cantidadEjercicios).fill(0));
  const [visible, setVisible] = useState(Array(cantidadEjercicios).fill(false));

  const handleSetsChange = (event, index) => {
    const newSets = [...sets];
    newSets[index] = parseInt(event.target.value) || 0;
    setSets(newSets);
  };

  const handleSetVisible = (index) => {
    const newVisible = [...visible];
    newVisible[index] = !newVisible[index]; 
    setVisible(newVisible);
  };

  return (
    <div>
      {Array(cantidadEjercicios).fill("").map((_, index) => (
        <div key={index} className="mb-4 flex flex-col items-center">
          <div className="flex items-center justify-center mb-2 gap-2">
            {visible[index] ? (
              <FaMinus
                onClick={() => handleSetVisible(index)}
                className="cursor-pointer"
              />
            ) : (
              <FaPlus
                onClick={() => handleSetVisible(index)}
                className="cursor-pointer"
              />
            )}
            <textarea
              className={`${colors} p-2 border rounded text-center`}
              placeholder="Exercise:"
            ></textarea>
            <input
              min={0}
              max={20}
              value={sets[index]}
              type="number"
              placeholder="Sets"
              onChange={(event) => handleSetsChange(event, index)}
              className="p-2 border rounded text-center"
            />
          </div>
          {(sets[index] > 0 && visible[index]) && (
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
