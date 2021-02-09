import { HashRouter, Route } from 'react-router-dom';
import  Layout from './components/Layout';
import { Home } from './components/pages/Home/Home';
import { Avarage } from './components/pages/Avarage/Avarage';
import { Provider } from 'react-redux';
import { store } from './store';

function App() {
  return (
    <Provider store={store}>
      <HashRouter>
        <Layout>
          <Route exact path="/" component={Home} />
          <Route exact path="/avarage" component={Avarage} />
        </Layout>
      </HashRouter>
    </Provider>
  );
}

export default App;
