import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

export default function FAQ() {
    return (
        <div className="container mx-auto px-4 py-12 max-w-3xl">
            <div className="w-full flex justify-start mb-6">
                <Link href="/" className="flex items-center gap-2 hover:underline text-sm">
                    <ArrowLeft className="h-4 w-4" />
                    <span>Go Back</span>
                </Link>
            </div>
            <h1 className="text-3xl font-bold mb-6">FAQ - Frequently Asked Questions</h1>

            <div className="space-y-8">
                <div>
                    <h3 className="text-xl font-medium mb-2">What is NoCap?</h3>
                    <p>A private, no-algorithm social app focused on close friendships.</p>
                </div>

                <div>
                    <h3 className="text-xl font-medium mb-2">Who can I add?</h3>
                    <p>All your real friends. No followers. No pressure.</p>
                </div>

                <div>
                    <h3 className="text-xl font-medium mb-2">Is my data safe?</h3>
                    <p>Yes. Your data stays yours. Always.</p>
                </div>

                <div>
                    <h3 className="text-xl font-medium mb-2">When are you launching?</h3>
                    <p>Soon! Join our waitlist to be first in line.</p>
                </div>

                <div>
                    <h3 className="text-xl font-medium mb-2">How do I give feedback?</h3>
                    <p>DM us or email at <a href="mailto:nocaaappppp@gmail.com" className="text-blue-600 hover:underline">nocaaappppp@gmail.com</a> — we read everything.</p>
                </div>
            </div>
        </div>
    );
}