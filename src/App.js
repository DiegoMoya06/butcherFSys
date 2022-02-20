import { useEffect, useReducer } from 'react';
import { Provider } from 'react-redux';

import { AppRouter } from './routers/AppRouter';
import { store } from './store/store';
import { loadUser } from './actions/auth';

export const App = () => {

  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <Provider store={ store }>
      <AppRouter />
    </Provider>
  );
}
