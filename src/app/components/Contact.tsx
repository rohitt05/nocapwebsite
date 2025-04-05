import React from 'react';
import { Mail } from 'lucide-react'; // clean icon set for v2 Tailwind vibes

const Contact = () => {
    return (
        <div className="w-[70%] mx-auto text-white text-center mt-10 flex items-center justify-center gap-3">
            <Mail className="h-5 w-5 text-white" />
            <a
                href="mailto:nocaaappppp@gmail.com"
                className="text-base md:text-lg font-medium hover:underline"
            >
                nocaaappppp@gmail.com
            </a>
        </div>
    );
};

export default Contact;
