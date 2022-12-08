import {
  Route,
  Routes,
  BrowserRouter,
} from "react-router-dom";
import Header from "./components/header/header"
import HomePage from "./components/pages/home-page/home-page"
import './index.css'
import { Provider } from "react-redux";
import { store } from "./redux";
import { GamePage } from "./components/pages/game-page/game-page";
import { OrderPage } from "./components/pages/order-pade/order-page";


function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header/>
          <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/game" element={<GamePage/>}/>
            <Route path="/order" element={<OrderPage/>}/>
          </Routes> 
          
      </BrowserRouter>
    </Provider>   
  );
}                                       
export default App;
