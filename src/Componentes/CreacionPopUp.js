import { useRef, useState } from "react";
import { useOutsideClick } from "../hooks/UseOutsideClick";
import toast, { Toaster } from 'react-hot-toast';
const CreacionPopUp = ({ setShowPopup, agregarRutina }) => {
  const [nombreRutina, setNombreRutina] = useState("");
  const [ejercicios, setEjercicios] = useState("");
  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (nombreRutina && ejercicios) {
      agregarRutina(nombreRutina, ejercicios);
      setShowPopup(false);
    } else {
      toast.error(
        "Por favor, ingrese el nombre de la rutina y el número de ejercicios."
      , {duration: 3000});
    } 
  };

  const containerRef = useRef(null);
  useOutsideClick(containerRef, () => setShowPopup(false));
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div ref={containerRef} className="bg-white p-6 rounded-lg w-1/3">
        <h2 className="text-2xl mb-4">Create new rutine</h2>
        <form onSubmit={handleFormSubmit}>
          <div className="mb-4">
            <label className="block mb-2" htmlFor="nombreRutina">
              Rutine name:
            </label>
            <input
              type="text"
              id="nombreRutina"
              className="w-full p-2 border rounded"
              value={nombreRutina}
              onChange={(e) => setNombreRutina(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2" htmlFor="ejercicios">
              Exercise number:
            </label>
            <input
              type="number"
              id="ejercicios"
              className="w-full p-2 border rounded [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
              value={ejercicios}
              onChange={(e) => setEjercicios(e.target.value)}
              min={1}
              max={20}
            />
          </div>
          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-blue-700 text-white p-2 rounded hover:bg-blue-800"
            >
              Push
            </button>
            <button
              type="button"
              onClick={() => setShowPopup(false)}
              className="ml-2 bg-red-700 text-white p-2 rounded hover:bg-red-800"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
      <Toaster limit={1}/>
    </div>
  );
};

export default CreacionPopUp;
