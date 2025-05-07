/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import { useEffect, useRef, useState } from "react";

const AutoScrollFlyer = () => {
    const scrollRef = useRef<HTMLDivElement>(null);
    const [scrollSpeed] = useState<number>(1);
    const animationRef = useRef<number | null>(null);
    const genzEmojis = ["🔥", "💯", "🧊", "🤬"];

    useEffect(() => {
        const scrollElement = scrollRef.current;
        if (!scrollElement) return;

        // Base text element width (used for calculating clones)
        const baseText = document.createElement("div");
        baseText.className = "scroll-text inline-block px-4";
        baseText.innerHTML = `
      <span class="text-white font-medium">
        🔥 The <span class="font-bold">NoCap</span>. The internet's chillest corner. 💯
      </span>
    `;
        scrollElement.appendChild(baseText);

        // Wait for it to mount to measure
        requestAnimationFrame(() => {
            const baseWidth = baseText.offsetWidth;
            scrollElement.innerHTML = ""; // Clear the dummy

            const cloneCount = Math.ceil((window.innerWidth * 2) / baseWidth) + 3;

            let prevBeforeEmoji = "";
            let prevAfterEmoji = "";

            for (let i = 0; i < cloneCount; i++) {
                let beforeEmoji;
                do {
                    beforeEmoji = genzEmojis[Math.floor(Math.random() * genzEmojis.length)];
                } while (beforeEmoji === prevBeforeEmoji && genzEmojis.length > 1);

                let afterEmoji;
                do {
                    afterEmoji = genzEmojis[Math.floor(Math.random() * genzEmojis.length)];
                } while (afterEmoji === prevAfterEmoji && genzEmojis.length > 1);

                prevBeforeEmoji = beforeEmoji;
                prevAfterEmoji = afterEmoji;

                const newElement = document.createElement("div");
                newElement.className = "scroll-text inline-block px-4";
                newElement.innerHTML = `
          <span class="text-white font-medium">
            ${beforeEmoji} The <span class="font-bold">NoCap</span>. The internet's chillest corner. ${afterEmoji}
          </span>
        `;
                scrollElement.appendChild(newElement);
            }

            const animateScroll = () => {
                if (!scrollElement) return;

                scrollElement.scrollLeft += scrollSpeed;

                // Loop the scroll
                if (scrollElement.scrollLeft >= scrollElement.scrollWidth / 2) {
                    scrollElement.scrollLeft = 0;
                }

                animationRef.current = requestAnimationFrame(animateScroll);
            };

            animationRef.current = requestAnimationFrame(animateScroll);
        });

        return () => {
            if (animationRef.current) cancelAnimationFrame(animationRef.current);
        };
    }, [scrollSpeed]);

    return (
        <div className="w-full bg-neutral-900 py-2 overflow-hidden">
            <div
                ref={scrollRef}
                className="flex whitespace-nowrap overflow-hidden"
                style={{ scrollBehavior: "auto" }}
            ></div>
        </div>
    );
};

export default AutoScrollFlyer;
