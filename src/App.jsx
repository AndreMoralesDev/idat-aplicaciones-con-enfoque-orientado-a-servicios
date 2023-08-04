import { Routes, Route, Navigate } from 'react-router-dom';
import { Header } from './components/container/Header/Header'
import { HomePage } from './pages/HomePage/HomePage';
import { LoginPage } from './pages/LoginPage/LoginPage';
import { SignupPage } from './pages/SignupPage/SignupPage';
import './App.css'
import { useAuthStore } from './store/useAuthStore';
import { NotFoundPage } from './pages/NotFoundPage/NotFoundPage';

function App() {
    const user = useAuthStore(state => state.user);

    return (<>
        <Header />
        <p>User: { JSON.stringify(user) }</p>
        <main>
            <Routes>
                <Route path="/" element={
                    user ? <HomePage /> : <Navigate to="/login" />
                } />
                <Route path="/signup" element={ 
                    !user ? <SignupPage /> : <Navigate to="/" />
                } />
                <Route path="/login" element={<LoginPage />} />
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </main>
    </>)
}

export default App;
