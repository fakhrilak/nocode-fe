import Sidebar from "./components/sidebar/Sidebar";
import { ProSidebarProvider } from 'react-pro-sidebar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import MyApp from "./pages/MyApp/MyApp";
import Profile from "./pages/Profile/Profile";
import Dnd from "./components/Dnd/Dnd";
import { Provider } from "react-redux";
import store from "./redux/store/store"
import "./App.css"
import DetailMyApp from "./pages/MyApp/DetailMyApp";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <ProSidebarProvider>
          <Sidebar>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/myapp"  element={<MyApp/>}/>
              <Route path="/myapp/:appname" element={<DetailMyApp/>}/>
              <Route path="/profile" element={<Profile/>}/>
              <Route path="/dnd" element={<Dnd/>}/>
            </Routes>
          </Sidebar>
        </ProSidebarProvider>
      </Router>
    </Provider>
  );
}

export default App;
