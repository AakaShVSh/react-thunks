import { legacy_createStore as createstore ,combineReducers} from "redux";
import { logreducer, regreducer } from "./reducer";

const rootreducer = combineReducers({
    register:regreducer,
    login:logreducer
})

export const store = createstore(rootreducer)