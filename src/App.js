import React from 'react';
import { Provider } from 'react-redux';
import { ToastsContainer, ToastsStore, ToastsContainerPosition } from 'react-toasts';

import SearchInput from './components/SearchInput';
import RespositoriesList from './components/RespositoriesList';

import './styles/global.css';

import './config/ReactotronConfig';

import store from './store';

function App() {
  return (
    <>

      <Provider store={store}>
        <SearchInput />

        <RespositoriesList />

        <ToastsContainer store={ToastsStore} position={ToastsContainerPosition.TOP_RIGHT} />

      </Provider>

    </>
  );
}

export default App;
