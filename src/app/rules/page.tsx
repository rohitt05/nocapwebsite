/* eslint-disable react/no-unescaped-entities */
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

export default function Rules() {
    return (
        <div className="container mx-auto px-4 py-12 max-w-3xl">
            <div className="w-full flex justify-start mb-6">
                <Link href="/" className="flex items-center gap-2 hover:underline text-sm">
                    <ArrowLeft className="h-4 w-4" />
                    <span>Go Back</span>
                </Link>
            </div>
            <h1 className="text-3xl font-bold mb-6">Community Rules</h1>

            <div className="prose">
                <p className="mb-4">NoCap is about real friendships and good vibes. Here's how we keep it that way:</p>

                <ol className="list-decimal pl-5 space-y-4">
                    <li>
                        <strong>Be Respectful</strong>: No hate speech, bullying, or harassment.
                    </li>
                    <li>
                        <strong>Be Real</strong>: No impersonation, spam, or fake profiles.
                    </li>
                    <li>
                        <strong>No NSFW</strong>: This isn't the place for explicit or illegal content.
                    </li>
                    <li>
                        <strong>Report Issues</strong>: Use the in-app report button or email us if something feels off.
                    </li>
                    <li>
                        <strong>Safe Space</strong>: We're building a cozy corner of the internet. Help us protect it.
                    </li>
                </ol>

                <p className="mt-6 font-medium">Break the vibe = lose the access.</p>
            </div>
        </div>
    );
}