"use client";
import React from "react";


export default function DeleteAccountInstructions() {
    return (
        <div className="max-w-2xl mx-auto mt-16 px-6 py-10 bg-black text-white shadow-md rounded-xl">
            <h1 className="text-3xl font-bold text-white mb-4">How to Delete Your NoCap Account</h1>

            <p className="text-gray-300 mb-4">
                If you want to permanently delete your NoCap account and all associated data, just follow the steps below
                inside the app. This action cannot be undone.
            </p>

            <ol className="list-decimal list-inside text-gray-200 mb-6 space-y-2">
                <li>Open the <strong>NoCap</strong> app on your device.</li>
                <li>Go to your <strong>Profile</strong>.</li>
                <li>Tap on the <strong>Menu</strong> <span className="inline-block align-middle">☰</span> (hamburger icon).</li>
                <li>Select <strong>Privacy</strong>.</li>
                <li>Tap on <strong>Delete Account</strong>.</li>
                <li>Follow the final confirmation steps to permanently delete your account.</li>
            </ol>

            <p className="text-gray-400">
                Once deleted, your account data including responses, memories, and personal info will be permanently removed from our servers. This includes any media or text you've shared within the app.
            </p>

            <p className="text-sm text-gray-500 mt-4">
                If you have any issues deleting your account, please contact us at <a href="mailto:nocaaappppp@gmail.com" className="text-blue-500 underline">nocaaappppp@gmail.com</a>.
            </p>
        </div>
    );
}

