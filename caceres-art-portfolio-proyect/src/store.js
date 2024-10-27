import { createStore } from "redux";
import rootReducer from "./reducers"; // Importa tu reducer

const store = createStore(rootReducer);

export default store;
