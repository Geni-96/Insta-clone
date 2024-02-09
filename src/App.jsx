import {Routes, Route, Navigate} from 'react-router-dom'
import HomePage from './pages/HomePage/HomePage'
import AuthPage from './pages/AuthPage/AuthPage'
import PageLayout from './Layouts/PageLayouts/PageLayout'
import ProfilePage from './components/Profile/ProfilePage';
import useAuthStore from './store/authStore';

function App() {
  const userLoggedIn = useAuthStore(state => state.user);
  return (
    <PageLayout>
      <Routes>
        <Route path="/" element={userLoggedIn ? <HomePage /> : <Navigate to="/auth" />}></Route>
        <Route path="/auth" element={!userLoggedIn ? <AuthPage /> : <Navigate to="/" />}></Route>
        <Route path="/:username" element={<ProfilePage />}></Route>
      </Routes>
    </PageLayout>
  );
}

export default App
