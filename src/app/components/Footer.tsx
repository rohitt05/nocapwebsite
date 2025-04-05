import React, { useState } from 'react';
import { Mail } from 'lucide-react';
import Modal from './Modal';

const Footer = () => {
    const [activeModal, setActiveModal] = useState<null | 'terms' | 'privacy' | 'rules' | 'faq' | 'contact' | 'careers'>(null);

    const modalContent = {
        terms: `**Terms of Service**
        
Welcome to NoCap! By accessing or using the app, you agree to the following:

1. **Eligibility**: You must be 13 years or older to use NoCap.
2. **User Conduct**: You agree not to post harmful, hateful, or illegal content.
3. **Your Data**: You own your data. We don’t sell it. Ever, Ever, Ever, Ever.
4. **Usage**: We may suspend accounts violating our Community Rules or Terms.
5. **Termination**: You can delete your account anytime. We also reserve the right to suspend service with or without notice.

Use NoCap responsibly, kindly, and truthfully.

Last updated: April 2025`,

        privacy: `**Privacy Policy**

We respect your privacy. Here's what you need to know:

- **No Selling Data**: We never sell your data to advertisers or third parties.
- **Minimal Tracking**: We use only essential cookies and analytics to improve the app.
- **Your Control**: You can delete your data and account anytime.
- **Secure Storage**: Your data is stored securely and encrypted.
- **Third Parties**: We use secure third-party services (e.g., Supabase) under strict data protection standards.

Questions? Reach out at nocaaappppp@gmail.com.

Last updated: April 2025`,

        rules: `**Community Rules**

NoCap is about real friendships and good vibes. Here's how we keep it that way:

1. **Be Respectful**: No hate speech, bullying, or harassment.
2. **Be Real**: No impersonation, spam, or fake profiles.
3. **No NSFW**: This isn’t the place for explicit or illegal content.
4. **Report Issues**: Use the in-app report button or email us if something feels off.
5. **Safe Space**: We’re building a cozy corner of the internet. Help us protect it.

Break the vibe = lose the access.`,

        faq: `**FAQ - Frequently Asked Questions**

**Q: What is NoCap?**
A: A private, no-algorithm social app focused on close friendships.

**Q: Who can I add?**
A: All your real friends. No followers. No pressure.

**Q: Is my data safe?**
A: Yes. Your data stays yours. Always.

**Q: When are you launching?**
A: Soon! Join our waitlist to be first in line.

**Q: How do I give feedback?**
A: DM us or email at nocaaappppp@gmail.com — we read everything.`,

        contact: `**Contact Us**

We love hearing from you — feedback, bugs, ideas, memes... all welcome.

📧 Email: nocaaappppp@gmail.com  
📍 Based in Mumbai, building globally.

You can also follow our journey on [socials coming soon].`,

        careers: `**Careers at NoCap**

We’re a small team building something real. If you believe in meaningful social tech, let’s talk.

🚀 **Open Roles**:
- Frontend Dev (React Native | Expo | EAS | TypeScript)
- Mobile Dev (iOS/Android) Native.
- Backend Dev (Supabase/PostgreSQL)
- UX/UI Designer with Gen-Z intuition
- Community & Content Manager

💡 Perks:
- Fully remote
- Flexible hours
- Build from 0 to 1 with ownership

Interested? Email us: nocaaappppp@gmail.com  
Subject: “I wanna help build NoCap 🧠”`,
    };

    return (
        <>
            <footer className="w-full bg-black text-white mt-20 py-10 px-6 flex flex-col md:flex-row items-center justify-between gap-8">
                {/* Links */}
                <div className="flex flex-wrap gap-4 md:gap-6 text-sm md:text-base justify-center md:justify-start">
                    <button onClick={() => setActiveModal('terms')} className="hover:underline">Terms of Service</button>
                    <button onClick={() => setActiveModal('privacy')} className="hover:underline">Privacy Policy</button>
                    <button onClick={() => setActiveModal('rules')} className="hover:underline">Community Rules</button>
                    <button onClick={() => setActiveModal('faq')} className="hover:underline">FAQ</button>
                    <button onClick={() => setActiveModal('contact')} className="hover:underline">Contact Us</button>
                    <button onClick={() => setActiveModal('careers')} className="hover:underline">Careers</button>
                </div>

                {/* Logo + Email */}
                <div className="text-center md:text-right">
                    <div className="text-5xl font-extrabold">no cap.</div>

                    <div className="flex items-center justify-center md:justify-end gap-2 mt-2">
                        <Mail className="h-4 w-4 text-white" />
                        <a href="mailto:nocaaappppp@gmail.com" className="hover:underline text-sm">
                            nocaaappppp@gmail.com
                        </a>
                    </div>
                </div>
            </footer>

            {/* Conditional Modal */}
            {activeModal && (
                <Modal
                    title={{
                        terms: "Terms of Service",
                        privacy: "Privacy Policy",
                        rules: "Community Rules",
                        faq: "FAQ",
                        contact: "Contact Us",
                        careers: "Careers",
                    }[activeModal]}
                    content={modalContent[activeModal]}
                    onClose={() => setActiveModal(null)}
                />
            )}
        </>
    );
};

export default Footer;
