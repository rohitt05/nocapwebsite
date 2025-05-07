/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Link from 'next/link';
import { Rocket, Lightbulb, ArrowLeft } from 'lucide-react';

export default function Careers() {
    return (
        <div className="container mx-auto px-4 py-12 max-w-3xl">
            {/* Go Back Button - Added at the top left */}
            <div className="w-full flex justify-start mb-6">
                <Link href="/" className="flex items-center gap-2 hover:underline text-sm">
                    <ArrowLeft className="h-4 w-4" />
                    <span>Go Back</span>
                </Link>
            </div>

            <h1 className="text-3xl font-bold mb-6">Careers at NoCap</h1>

            <div className="prose">
                <p className="mb-8">We're a small team building something real. If you believe in meaningful social tech, let's talk.</p>

                <div className="mb-8">
                    <div className="flex items-center gap-2 mb-4">
                        <Rocket className="h-5 w-5" />
                        <h2 className="text-xl font-bold">Open Roles</h2>
                    </div>

                    <ul className="list-disc pl-5 space-y-2">
                        <li>Frontend Dev (React Native | Expo | EAS | TypeScript)</li>
                        <li>Mobile Dev (iOS/Android) Native</li>
                        <li>Backend Dev (Supabase/PostgreSQL)</li>
                        <li>UX/UI Designer with Gen-Z intuition</li>
                        <li>Community & Content Manager</li>
                    </ul>
                </div>

                <div className="mb-8">
                    <div className="flex items-center gap-2 mb-4">
                        <Lightbulb className="h-5 w-5" />
                        <h2 className="text-xl font-bold">Perks</h2>
                    </div>

                    <ul className="list-disc pl-5 space-y-2">
                        <li>Fully remote</li>
                        <li>Flexible hours</li>
                        <li>Build from 0 to 1 with ownership</li>
                    </ul>
                </div>

                <div className="bg-gray-100 p-6 rounded-lg">
                    <p className="font-medium mb-2">Interested?</p>
                    <p>Email us: <a href="mailto:nocaaappppp@gmail.com" className="text-blue-600 hover:underline">nocaaappppp@gmail.com</a><br />
                        Subject: "I wanna help build NoCap 🧠"</p>
                </div>
            </div>
        </div>
    );
}