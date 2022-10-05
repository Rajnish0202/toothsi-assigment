import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './rootReducer';

const composeEnhancers = composeWithDevTools({});

// const initialState = {
//   cartReducer: {
//     cartItems: [],
//     qty: 1,
//     subtotal: [],
//     total: [],
//   },
// };

const store = createStore(rootReducer, composeEnhancers());

export default store;
