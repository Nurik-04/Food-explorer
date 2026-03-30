import React from 'react'
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { Outlet } from 'react-router-dom';

const Layout = ({setIsLogin}) => {
    return (
        <div>
            <Header setIsLogin={setIsLogin} />
            <main>
                <Outlet />
            </main>
            <Footer/>   
        </div>
    )
}

export default Layout
