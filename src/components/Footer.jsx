import React from 'react';
import { Link } from 'react-router';

const Footer = () => {
    return (
        <div>
            <footer className="footer sm:footer-horizontal footer-center bg-base-300 text-base-content p-4">
                <aside>
                    <p> &copy; {new Date().getFullYear()} - Designed and Developed by <Link to='https://github.com/Samiul2024'>Samiul</Link></p>
                </aside>
            </footer>
        </div>
    );
};

export default Footer;