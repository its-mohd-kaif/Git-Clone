import LandingPage from "./Components/LandingPage";
import { Provider } from "react-redux";
import store from "./redux/store";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import Profile from "./Components/Profile/Profile";

function App() {
  return (
    <div>
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<LandingPage/>} />
          <Route path="/profile" element={<Profile/>} />
        </Routes>
      </Provider>
    </div>
  );
}

export default App;
