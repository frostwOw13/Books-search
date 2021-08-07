import { createStore } from 'redux';
import reducers from './reducers/index';

/* eslint-disable no-underscore-dangle */
const RootState = createStore(
  reducers,
  {},
  (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__(),
);
/* eslint-enable */

export default RootState;
