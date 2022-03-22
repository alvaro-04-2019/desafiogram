import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import AppLayoutBar from "./components/AppLayoutBar";
import Explore from "./pages/Explore";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { AuthProvider } from './context/authContext'


const App = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <AppLayoutBar />
        <Routes>
          <Route path="/" element={<Signup />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/explore" element={<Explore />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App