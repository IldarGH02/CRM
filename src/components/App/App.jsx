import AppContent from 'components/AppContent/AppContent';

import { BrowserRouter } from 'react-router-dom';

import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import Spiner from 'components/Spiner/Spiner';
import store, {persistor} from '../../store';

function App() {
  return (
    <BrowserRouter>
		<Provider store = {store}>
        	<PersistGate loading={<Spiner/>} persistor={persistor}>
            <AppContent/>
          </PersistGate>
      	</Provider>
    </BrowserRouter>
  );
}

export default App;
