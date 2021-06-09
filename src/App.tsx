import { lazy } from 'react';
import './App.css';


const Repository = lazy(()=> import('./page/repository'));
const Developers = lazy(()=> import('./page/developers'));
const NotFound = lazy(()=> import('./page/notfound'));


function App() {
  return (
    <div className="App">
      {/* repository , user , notFound Page */}
    </div>
  );
}

export default App;
