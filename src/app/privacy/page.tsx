import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

export default function Privacy() {
    return (
        <div className="container mx-auto px-4 py-12 max-w-3xl">
            <div className="w-full flex justify-start mb-6">
                <Link href="/" className="flex items-center gap-2 hover:underline text-sm">
                    <ArrowLeft className="h-4 w-4" />
                    <span>Go Back</span>
                </Link>
            </div>
            <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>

            <div className="prose">
                <p className="mb-4">We respect your privacy. Here&apos;s what you need to know:</p>

                <ul className="list-disc pl-5 space-y-4">
                    <li>
                        <strong>No Selling Data</strong>: We never sell your data to advertisers or third parties.
                    </li>
                    <li>
                        <strong>Minimal Tracking</strong>: We use only essential cookies and analytics to improve the app.
                    </li>
                    <li>
                        <strong>Your Control</strong>: You can delete your data and account anytime.
                    </li>
                    <li>
                        <strong>Secure Storage</strong>: Your data is stored securely and encrypted.
                    </li>
                    <li>
                        <strong>Third Parties</strong>: We use secure third-party services (e.g., Supabase) under strict data protection standards.
                    </li>
                </ul>

                <p className="mt-6">Questions? Reach out at <a href="mailto:nocaaappppp@gmail.com" className="text-blue-600 hover:underline">nocaaappppp@gmail.com</a>.</p>

                <p className="text-sm text-gray-500 mt-8">Last updated: April 2025</p>
            </div>
        </div>
    );
}