// reducers:
const initialState = {
  deviceTypeSt: 'desktop', // Inicializa una propiedad en el estado
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_DEVICE_TYPE":
      return {
        ...state, // Copia el estado actual
        deviceTypeSt: action.payload, // Actualiza deviceTypeSt con el nuevo valor desde la acción
      };
    default:
      return state; // Retorna el estado sin cambios si no se reconoce la acción
  }
};

export default rootReducer;
