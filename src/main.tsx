import ReactDOM from 'react-dom/client'
import Register from './Register.tsx'
import Protected from './Protected.tsx'
import Home from './Home.tsx'
import './index.css'
import Login from './Login.tsx'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <Router>
        <Routes>
            <Route path="/" Component={Home} />
            <Route path="/register" Component={Register} />
            <Route path="/login" Component={Login} />
            <Route path="/protected" Component={Protected} />
        </Routes>
    </Router>
)
