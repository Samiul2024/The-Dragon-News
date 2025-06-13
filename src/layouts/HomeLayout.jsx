import React from 'react';
import Header from '../components/Header';
import { Outlet, useNavigation } from 'react-router';
import LatestNews from '../components/LatestNews';
import Navbar from '../components/Navbar';
import LeftAside from '../components/homelayout/LeftAside';
import RightAside from '../components/homelayout/RightAside';
import Footer from '../components/Footer';
import Loading from './pages/Loading';

const HomeLayout = () => {
    const { state } = useNavigation();
    return (
        <div>
            <header className=''>
                <Header></Header>
                {import.meta.env.VITE_name}
                <section className='w-11/12 mx-auto my-3 '>
                    <LatestNews></LatestNews>
                </section>
                <nav className='w-11/12 mx-auto my-3'>
                    <Navbar></Navbar>
                </nav>
            </header>
            <main className='w-11/12 mx-auto my-3 gap-4 grid grid-cols-12'>
                {/* <button className='btn btn-secondary'>Click Me</button> */}
                <aside className='col-span-3 sticky top-0 h-fit'>
                    <LeftAside></LeftAside>
                </aside>
                <section className="main col-span-6">
                    {state == "loading" ? <Loading /> :
                        <Outlet></Outlet>
                    }
                </section>
                <aside className='col-span-3 sticky top-0 h-fit'>
                    <RightAside></RightAside>
                </aside>
            </main>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default HomeLayout;