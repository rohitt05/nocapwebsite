import React from 'react';
import { ArrowLeft, Mail, MapPin } from 'lucide-react';
import Link from 'next/link';

export default function Contact() {
    return (
        <div className="container mx-auto px-4 py-12 max-w-3xl">
            {/* Go Back Button - Added at the top left */}
            <div className="w-full flex justify-start mb-6">
                <Link href="/" className="flex items-center gap-2 hover:underline text-sm">
                    <ArrowLeft className="h-4 w-4" />
                    <span>Go Back</span>
                </Link>
            </div>
            <h1 className="text-3xl font-bold mb-6">Contact Us</h1>

            <div className="prose">
                <p className="mb-6">We love hearing from you — feedback, bugs, ideas, memes... all welcome.</p>

                <div className="flex items-center gap-2 mb-4">
                    <Mail className="h-5 w-5" />
                    <a href="mailto:nocaaappppp@gmail.com" className="text-blue-600 hover:underline">nocaaappppp@gmail.com</a>
                </div>

                <div className="flex items-center gap-2 mb-6">
                    <MapPin className="h-5 w-5" />
                    <span>Based in Mumbai, building globally.</span>
                </div>

                <p>You can also follow our journey on [socials coming soon].</p>
            </div>
        </div>
    );
}