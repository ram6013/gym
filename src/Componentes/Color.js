import React from 'react'
import { useOutsideClick } from "../hooks/UseOutsideClick";
const Color = ({ colores, cambiarColor, closeModal }) => {  const ref = React.useRef(null);
  useOutsideClick(ref, () => {
    closeModal(false);
  });

    return (
      <div ref={ref} className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
        <div className="bg-white p-6 rounded-lg w-96">
          <h2 className="text-2xl font-semibold mb-4">Elige un color</h2>
          <div className="grid grid-cols-3 gap-4 justify-items-center items-center">
            {Object.entries(colores).map(([colorName, colorObj], index) => (
              <button
                key={index}
                style={{ backgroundColor: colorObj.color }}
                className="w-12 h-12 rounded-full border-2 border-gray-300"
                onClick={() => {
                  console.log(colorObj);
                  cambiarColor(colorObj);
                }}colorborder
              />
            ))}
          </div>
          <button
            onClick={closeModal}
            className="mt-4 text-red-500 hover:text-red-700"
          >
            Cerrar
          </button>
        </div>
      </div>
    );
}
export default Color