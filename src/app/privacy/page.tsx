"use client";
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function Privacy() {
    const { scrollY } = useScroll();
    // Map scroll position to vertical translate and font size
    const yOffset = useTransform(scrollY, [0, 200], [0, -20]);
    const fontSize = useTransform(scrollY, [0, 200], [28, 36]); // px values for larger text

    return (
        <div className="container mx-auto px-4 py-12 max-w-3xl">
            {/* Sticky animated header: black background, white text, vertically centered */}
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
                    Privacy Policy
                </motion.h1>
            </motion.div>

            <div className="prose space-y-6">
                <p>Last updated: April 30, 2025</p>

                <h2>1. Introduction</h2>
                <p>
                    Welcome to NoCap. We value your privacy and are committed to protecting your personal data. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our mobile and web applications.
                </p>

                <h2>2. Information We Collect</h2>
                <h3>2.1 Personal Information</h3>
                <ul>
                    <li>Name, email address, profile picture, and other account details when you register.</li>
                    <li>Phone number or social media identifiers if you connect accounts.</li>
                </ul>
                <h3>2.2 Usage Data</h3>
                <ul>
                    <li>Posts, interactions, and content you share in the app.</li>
                    <li>Device information, IP address, and browser type.</li>
                    <li>Analytics data to improve features and performance.</li>
                </ul>

                <h2>3. How We Use Your Information</h2>
                <ul>
                    <li>To provide, maintain, and improve our services.</li>
                    <li>To personalize your experience, such as custom prompts and friend suggestions.</li>
                    <li>To communicate with you about updates, support, and promotional offers (opt-in).</li>
                    <li>To monitor and analyze usage trends and preferences.</li>
                </ul>
                <h3>How to Delete Your Data?</h3>
                <p>
                    If you'd like to permanently delete your account and all associated data, we’ve made the process simple.
                    To learn more about how your data is handled and how to remove it completely,
                    <Link href="/deleteAccount" className="text-blue-600 hover:underline">click here</Link>.
                </p>

                <h2>4. Legal Basis for Processing</h2>
                <p>
                    We process your data based on your consent, to fulfill our contract with you, and to comply with legal obligations or our legitimate interests in improving our services.
                </p>

                <h2>5. Sharing Your Information</h2>
                <ul>
                    <li>With service providers (e.g., hosting, analytics) under strict confidentiality agreements.</li>
                    <li>For legal reasons if required by law or to protect our rights.</li>
                    <li>With your consent, such as sharing your profile with third-party integrations.</li>
                </ul>

                <h2>6. Cookies and Tracking Technologies</h2>
                <p>
                    We use cookies and similar technologies to recognize your device, understand usage patterns, and improve functionality. You can manage cookie preferences in your browser settings.
                </p>

                <h2>7. Data Retention</h2>
                <p>
                    We retain your personal information as long as necessary to provide services and comply with legal obligations. You can request deletion at any time.
                </p>

                <h2>8. Your Rights</h2>
                <ul>
                    <li>Access, correct, or delete your personal data.</li>
                    <li>Withdraw consent for processing at any time.</li>
                    <li>Object to or restrict processing of your data.</li>
                </ul>
                <p>
                    To exercise these rights, contact us at <a href="mailto:nocaaappppp@gmail.com" className="text-blue-600 hover:underline">nocaaappppp@gmail.com</a>.
                </p>

                <h2>9. Security Measures</h2>
                <p>
                    We implement industry-standard security measures, including encryption at rest and in transit, secure servers, and access controls to protect your data.
                </p>

                <h2>10. International Transfers</h2>
                <p>
                    Your information may be transferred to and processed in countries other than your own. We ensure adequate safeguards are in place to protect your data.
                </p>

                <h2>11. Children&apos;s Privacy</h2>
                <p>
                    NoCap is not intended for children under 13. We do not knowingly collect data from users under 13. If you believe we have, please contact us.
                </p>

                <h2>12. Changes to This Policy</h2>
                <p>
                    We may update this Privacy Policy periodically. We will notify you of significant changes via email or in-app notifications.
                </p>

                <h2>13. Compliance with Laws and Regulations</h2>
                <h3>13.1 India</h3>
                <ul>
                    <li><strong><a href="https://www.dlapiperdataprotection.com/index.html?c=IN&t=law" className="text-blue-600 hover:underline">Digital Personal Data Protection Act, 2023 (DPDP Act)</a></strong>: Governs collection, processing, storage, and transfer of digital personal data within India; applies to online and digitized offline data, and to data processed outside India for offering goods or services in India.</li>
                    <li><strong><a href="https://www.nirmauni.ac.in/data-privacy-protection-in-india-technology-vis-a-vis-law/" className="text-blue-600 hover:underline">Information Technology Act, 2000 (Section 43A & SPDI Rules 2011)</a></strong>: Requires reasonable security practices and procedures for handling sensitive personal data; bodies corporate are liable for negligence.</li>
                    <li><strong><a href="https://en.wikipedia.org/wiki/Right_to_Privacy_in_India" className="text-blue-600 hover:underline">Supreme Court Right to Privacy Verdict (Puttaswamy)</a></strong>: Recognizes privacy as a fundamental right under Article 21 of the Constitution of India.</li>
                    <li><strong><a href="https://en.wikipedia.org/wiki/Draft_Personal_Data_Protection_Bill,_2019" className="text-blue-600 hover:underline">Draft Personal Data Protection Bill, 2019</a></strong>: Earlier framework detailing consent, data localization, and government access provisions (withdrawn but influential).</li>
                </ul>
                <p>The Policy is governed by the laws of India and the courts of the State of Maharashtra in Mumbai shall have exclusive jurisdiction.</p>

                <h2>14. Contact Us</h2>
                <p>
                    If you have questions or concerns about this policy, please contact us at <a href="mailto:nocaaappppp@gmail.com" className="text-blue-600 hover:underline">nocaaappppp@gmail.com</a>.
                </p>
            </div>
        </div>
    );
}
