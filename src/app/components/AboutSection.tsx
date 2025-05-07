/* eslint-disable react/no-unescaped-entities */
// components/AboutSection.js
import React from 'react';

const AboutSection = () => {
    return (
        <div className="bg-neutral-995 text-white py-20 px-8 md:px-16 lg:px-24">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
                    No Algorithms. No Doomscrolling. Just Real Friends.
                </h2>
                <p className="text-base mb-6 text-gray-300 text-center italic">
                    An anti-algorithm social app made for you and your real ones.
                </p>
                <p className="text-base text-gray-300 text-center max-w-3xl mx-auto leading-relaxed">
                    NoCap isn’t about followers, filters, or going viral. It's where your close friends actually matter.
                    <br /><br />
                    Every day, we drop conversation sparks — random, hilarious, deep, or wild. You get 15 minutes to respond and see what your people have to say.
                    It’s less about performance, more about presence.
                    <br /><br />
                    This isn’t a feed. It’s a space. A digital campfire where you all show up, drop your thoughts, react, tease, overshare, and just vibe.
                    <br /><br />
                    Whether it’s “Who’s the friend most likely to go missing at a festival?” or “What’s something you've never told anyone?”, you’ll get to know your people in ways that stories and status updates just can’t.
                </p>

                {/* Action-style highlights below */}
                <ul className="text-center text-white mt-10 space-y-3 text-lg font-medium">
                    <li>🔥 No likes. No clout. Just real convos.</li>
                    <li>⚡ 15 minutes. Everyone, same time.</li>
                    <li>🎯 Be honest. Be weird. Be yourself.</li>
                </ul>

                <p className="text-center text-gray-400 mt-8 italic">
                    NoCap. The internet’s chillest corner. Built with love by a team of friends who get it.&lt;3
                </p>
            </div>
        </div>
    );
};

export default AboutSection;
