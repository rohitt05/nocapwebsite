import React from 'react';
import Link from 'next/link';
import { Mail } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="w-full bg-black text-white mt-20 py-10 px-6 flex flex-col md:flex-row items-center justify-between gap-8 rounded-t-[25%]">
            {/* Links */}
            <div className="flex flex-wrap gap-4 md:gap-6 text-sm md:text-base justify-center md:justify-start">
                <Link href="/terms" className="hover:underline">Terms of Service</Link>
                <Link href="/privacy" className="hover:underline">Privacy Policy</Link>
                <Link href="/rules" className="hover:underline">Community Rules</Link>
                <Link href="/faq" className="hover:underline">FAQ</Link>
                <Link href="/contact" className="hover:underline">Contact Us</Link>
                <Link href="/careers" className="hover:underline">Careers</Link>
            </div>

            {/* Logo + Email */}
            <div className="text-center md:text-right">
                <div className="text-5xl font-extrabold">no cap.</div>

                <div className="flex items-center justify-center md:justify-end gap-2 mt-2">
                    <Mail className="h-4 w-4 text-white" />
                    <a href="mailto:nocaaappppp@gmail.com" className="hover:underline text-sm">
                        nocaaappppp@gmail.com
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;