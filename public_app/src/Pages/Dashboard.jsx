import { Route, Routes } from 'react-router-dom';
import { Navbar } from '../components/Navbar';
import { Users } from './Users';
import { Home } from './Home';
import IndPost from './IndPost';

export const Dashboard = () => {
    return (
        <div>
            <Navbar />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/posts' element={<Home />} />
                <Route path=':id' element={<IndPost />} />
                <Route path='/users' element={<Users />} />
            </Routes>
        </div>
    );
}
