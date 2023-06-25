import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

// reducers
import globalReducer from "./reducers/global";

const reducers = combineReducers({
    globalReducer,
});

const store = createStore(reducers, compose(applyMiddleware(thunk)));
export default store;
