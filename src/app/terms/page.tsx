import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

export default function Terms() {
    return (
        <div className="container mx-auto px-4 py-12 max-w-3xl">
            <div className="w-full flex justify-start mb-6">
                <Link href="/" className="flex items-center gap-2 hover:underline text-sm">
                    <ArrowLeft className="h-4 w-4" />
                    <span>Go Back</span>
                </Link>
            </div>
            <h1 className="text-3xl font-bold mb-6">Terms of Service</h1>

            <div className="prose">
                <p>Welcome to NoCap! By accessing or using the app, you agree to the following:</p>

                <ol className="list-decimal pl-5 space-y-4 mt-4">
                    <li>
                        <strong>Eligibility</strong>: You must be 13 years or older to use NoCap.
                    </li>
                    <li>
                        <strong>User Conduct</strong>: You agree not to post harmful, hateful, or illegal content.
                    </li>
                    <li>
                        <strong>Your Data</strong>: You own your data. We don&apos;t sell it. Ever.
                    </li>
                    <li>
                        <strong>Usage</strong>: We may suspend accounts violating our Community Rules or Terms.
                    </li>
                    <li>
                        <strong>Termination</strong>: You can delete your account anytime. We also reserve the right to suspend service with or without notice.
                    </li>
                </ol>

                <p className="mt-6">Use NoCap responsibly, kindly, and truthfully.</p>

                <p className="text-sm text-gray-500 mt-8">Last updated: April 2025</p>
            </div>
        </div>
    );
}