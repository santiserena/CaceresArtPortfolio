// src/reducers/index.js
const initialState = {
  someValue: 0, // Inicializa una propiedad en el estado
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_VALUE":
      return {
        ...state, // Copia el estado actual
        someValue: action.payload, // Actualiza someValue con el nuevo valor desde la acción
      };
    default:
      return state; // Retorna el estado sin cambios si no se reconoce la acción
  }
};

export default rootReducer;
