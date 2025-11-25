import Link from 'next/link';
import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitterSquare } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-300 py-10">
            <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Left: Brand */}
                <div>
                    <Link href={"/"} className="text-xl font-bold bg-linear-to-r from-purple-500 via-pink-500 to-red-500 bg-clip-text text-transparent">
                                                    NextBazar
                                                </Link>
                    <p className="mt-3 text-sm">Hybrid smartwatches & fitness trackers designed to empower your health journey.</p>
                </div>

                {/* Middle: Navigation */}
                <div>
                    <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
                    <ul className="space-y-2">
                        <li>
                            <Link href="/" className="hover:text-orange-400">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link href="/about" className="hover:text-orange-400">
                                About
                            </Link>
                        </li>
                        <li>
                            <Link href="/contact" className="hover:text-orange-400">
                                Contact
                            </Link>
                        </li>
                        <li>
                            <Link href="/products" className="hover:text-orange-400">
                                Products
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Right: Contact + Social */}
                <div>
                    <h3 className="text-lg font-semibold text-white mb-3">Get in Touch</h3>
                    <p className="text-sm">Email: support@nextbazar.com</p>
                    <p className="text-sm">Phone: +880 1234 567890</p>

                    <div className="flex gap-4 mt-4">
                        <a href="#" className="hover:text-orange-400">
                            <FaFacebookF />
                        </a>
                        <a href="#" className="hover:text-orange-400">
                            <FaTwitterSquare />
                        </a>
                        <a href="#" className="hover:text-orange-400">
                            <FaInstagram />
                        </a>
                        <a href="#" className="hover:text-orange-400">
                            <FaLinkedinIn />
                        </a>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm text-gray-400">© {new Date().getFullYear()} NextBazar. All rights reserved.</div>
        </footer>
    );
};

export default Footer;