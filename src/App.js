import { Route, Routes } from 'react-router-dom';

import { HomeScreen, MainScreen, NotFoundScreen } from './pages';
import { Layout } from './components';

const App = () => {
  return (
    <Routes>
        <Route path='/' element={<Layout/>}>
            <Route index element={<HomeScreen/>} />
            <Route path='date/:day' element={<MainScreen/>} />
            <Route path='*' element={<NotFoundScreen/>} />
        </Route>
    </Routes>
  );
}

export default App;
