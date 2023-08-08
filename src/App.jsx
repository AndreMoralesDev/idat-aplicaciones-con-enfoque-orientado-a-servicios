import { Routes, Route, Navigate } from 'react-router-dom';
import { Header } from './components/container/Header/Header'
import { HomePage } from './pages/HomePage/HomePage';
import { LoginPage } from './pages/LoginPage/LoginPage';
import { SignupPage } from './pages/SignupPage/SignupPage';
import { useAuthStore } from './store/useAuthStore';
import { NotFoundPage } from './pages/NotFoundPage/NotFoundPage';
import { AddPiecesPage } from './pages/AddPiecesPage/AddPiecesPage';
import './App.css'

function App() {
    const user = useAuthStore(state => state.user);

    return (<>
        <Header />
        <main>
            <Routes>
                <Route path="/signup" element={ 
                    !user ? <SignupPage /> : <Navigate to="/" />
                } />
                <Route path="/login" element={
                    !user ? <LoginPage /> : <Navigate to="/" />
                } />
                {
                    user 
                        ? (<>
                            <Route path="/" element={ <HomePage /> } />
                            <Route path="/pieces/add" element={<AddPiecesPage />} />
                        </>)
                        : <Route path="*" element={ <Navigate to="/login"/> } />
                }
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </main>
    </>)
}

export default App;
