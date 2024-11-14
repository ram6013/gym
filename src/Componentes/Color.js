const Color = ({ colores, cambiarColor, closeModal }) => {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
        <div className="bg-white p-6 rounded-lg w-96">
          <h2 className="text-2xl font-semibold mb-4">Elige un color</h2>
          <div className="grid grid-cols-3 gap-4 justify-items-center items-center">
            {Object.entries(colores).map(([colorName, colorObj], index) => (
              <button
                key={index}
                style={{ backgroundColor: colorObj.color }}
                className="w-12 h-12 rounded-full border-2 border-gray-300"
                onClick={() => cambiarColor(colorObj.color, colorObj.text, colorObj.icon)}
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