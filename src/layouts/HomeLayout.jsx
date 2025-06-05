import React from 'react';
import Header from '../components/Header';
import { Outlet } from 'react-router';
import LatestNews from '../components/LatestNews';
import Navbar from '../components/Navbar';
import LeftAside from '../components/homelayout/LeftAside';
import RightAside from '../components/homelayout/RightAside';

const HomeLayout = () => {
    return (
        <div>
            <header>
                <Header></Header>
                <section className='w-11/12 mx-auto my-3'>
                    <LatestNews></LatestNews>
                </section>
                <nav className='w-11/12 mx-auto my-3'>
                    <Navbar></Navbar>
                </nav>
            </header>
            <main className='w-11/12 mx-auto my-3 gap-4 grid grid-cols-12'>
                {/* <button className='btn btn-secondary'>Click Me</button> */}
                <aside className='col-span-3'>
                    <LeftAside></LeftAside>
                </aside>
                <section className="main col-span-6">
                    <Outlet></Outlet>
                </section>
                <aside className='col-span-3'>
                    <RightAside></RightAside>
                </aside>
            </main>
            <footer>
                {/* <!-- copyright section --> */}
                <div class="text-center mt-5 pt-5">
                    <p>&copy; 2025 All Rights Reserved | Designed By <a class="hover:text-orange-700" href="https://github.com/Samiul2024">Samiul</a></p>
                </div>
            </footer>
        </div>
    );
};

export default HomeLayout;