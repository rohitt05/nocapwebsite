"use client";
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function Terms() {
    const { scrollY } = useScroll();
    const yOffset = useTransform(scrollY, [0, 200], [0, -20]);
    const fontSize = useTransform(scrollY, [0, 200], [28, 36]);

    return (
        <div className="container mx-auto px-4 py-12 max-w-3xl">
            <motion.div
                className="sticky top-0 bg-black text-white w-full flex items-center justify-between py-6 mb-6 z-20"
                style={{ y: yOffset }}
            >
                <Link href="/" className="flex items-center gap-2 hover:underline text-white text-base">
                    <ArrowLeft className="h-5 w-5" />
                    <span className="leading-none">Go Back</span>
                </Link>
                <motion.h1
                    className="font-bold leading-none"
                    style={{ fontSize }}
                >
                    Terms of Service
                </motion.h1>
            </motion.div>

            <div className="prose space-y-6">
                <p><strong>Effective Date:</strong> May 8, 2025</p>

                <p>Welcome to NoCap! Our mission is to help you share your true moments with your real friends. These Terms of Service (&quot;Terms&quot;), together with our Privacy Policy and Community Guidelines (collectively, the &quot;User Agreement&quot;), govern your use of NoCap. Please read them carefully. If you do not agree, please do not use our services.</p>

                <h2>1. Definitions</h2>
                <ul>
                    <li><strong>Services:</strong> All features of NoCap including mobile/web apps, website, APIs, and associated software.</li>
                    <li><strong>Content:</strong> Any text, images, videos, audio, or other material you upload, post, or share.</li>
                    <li><strong>User Agreement:</strong> These Terms, Privacy Policy, and Community Guidelines.</li>
                </ul>

                <h2>2. Eligibility</h2>
                <p>You must be at least 13 years old to use NoCap. If you are under the age of majority in your jurisdiction, you need a parent or guardian&apos;s consent.</p>

                <h2>3. Account Registration</h2>
                <p>When you register, you agree to provide accurate information and maintain your password confidentiality.</p>

                <h2>4. User Conduct</h2>
                <p>You agree not to:</p>
                <ul>
                    <li>Post illegal, harmful, or infringing content.</li>
                    <li>Harass, threaten, or defame others.</li>
                    <li>Use bots or automated scripts.</li>
                </ul>

                <h2>5. Content Ownership & License</h2>
                <p>You own your Content. By posting, you grant NoCap a worldwide, non-exclusive, royalty-free license to use and display it in connection with the Services.</p>

                <h2>6. Community Standards & Reporting</h2>
                <p>We prohibit hate speech, violence, sexual exploitation, and other harmful content. Report violations via the in-app feature.</p>

                <h2>7. Intellectual Property</h2>
                <p>All platform IP (logos, trademarks, software) is owned by NoCap. You may not use our trademarks without permission.</p>

                <h2>8. Account Suspension & Termination</h2>
                <p>We may suspend or delete your account for breaches of the User Agreement or legal obligations.</p>

                <h2>9. Disclaimers & Limitation of Liability</h2>
                <p>Services are provided &quot;as is&quot;. To the maximum extent permitted by law, NoCap is not liable for indirect or consequential damages.</p>

                <h2>10. Indemnification</h2>
                <p>You agree to indemnify NoCap against any claims arising from your use of the Services.</p>

                <h2>11. Privacy & Data Protection</h2>
                <p>Your privacy is important. See our Privacy Policy for details on data collection and processing.</p>

                <h2>12. Governing Law & Jurisdiction</h2>
                <p>These Terms are governed by Indian law. Disputes will be resolved in Mumbai courts.</p>

                <h2>13. Changes to Terms</h2>
                <p>We may update these Terms. Significant changes will be notified 30 days before they take effect.</p>

                <h2>14. Contact Us</h2>
                <p>Questions? Contact us at <a href="mailto:nocaaappppp@gmail.com" className="text-blue-600 hover:underline">nocaaappppp@gmail.com</a>.</p>

                <p className="text-sm text-gray-500">© 2025 NoCap. All rights reserved.</p>
            </div>
        </div>
    );
}
