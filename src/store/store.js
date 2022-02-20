import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
/* import rootReducer from '../reducers'; */
import { authReducer } from '../reducers/authReducer';

const initialState = {
};
const reducers = combineReducers({
    auth: authReducer
});
const middleware = [thunk];

export const store = createStore(
    reducers,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
);