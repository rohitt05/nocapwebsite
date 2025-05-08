"use client";
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function Rules() {
  const { scrollY } = useScroll();
  const yOffset = useTransform(scrollY, [0, 200], [0, -20]);
  const fontSize = useTransform(scrollY, [0, 200], [28, 36]);

  return (
    <div className="container mx-auto px-4 py-12 max-w-3xl">
      {/* Sticky animated header for Community Rules */}
      <motion.div
        className="sticky top-0 bg-black text-white w-full flex items-center justify-between py-6 mb-6 z-20"
        style={{ y: yOffset }}
      >
        <Link href="/" className="flex items-center gap-2 hover:underline text-white text-base">
          <ArrowLeft className="h-5 w-5" />
          <motion.span
            className="leading-none"
            style={{ fontSize: useTransform(scrollY, [0, 200], [16, 20]) }}
          >
            Go Back
          </motion.span>
        </Link>
        <motion.h1
          className="font-bold leading-none"
          style={{ fontSize }}
        >
          Community Rules
        </motion.h1>
      </motion.div>

      <div className="prose space-y-6">
        <p className="mb-4">
          NoCap is about real friendships and positive experiences. To maintain a safe and authentic community, please follow these rules:
        </p>

        <ol className="list-decimal pl-5 space-y-4">
          <li>
            <strong>Respect and Kindness:</strong> Do not engage in bullying, harassment, or hateful speech. Treat others with dignity.
          </li>
          <li>
            <strong>Protection of Minors:</strong> Absolutely no sexual content involving minors or any depiction of child exploitation.
          </li>
          <li>
            <strong>Hate and Harassment:</strong> Content promoting violence, hatred, or discrimination against protected groups is prohibited.
          </li>
          <li>
            <strong>Illegal Activities:</strong> Do not promote, facilitate, or depict unlawful acts such as drug use or violence.
          </li>
          <li>
            <strong>Intellectual Property:</strong> Only share content you have the right to use; no copyright or trademark infringement.
          </li>
          <li>
            <strong>Privacy and Personal Data:</strong> Do not share personal or private information of others without consent.
          </li>
          <li>
            <strong>Self-Harm and Suicide:</strong> Content encouraging or glorifying self-harm or suicide is not allowed.
          </li>
          <li>
            <strong>Violence and Graphic Content:</strong> Do not post graphic or violent images intended to shock or disgust.
          </li>
          <li>
            <strong>Spam and Misrepresentation:</strong> Avoid spamming, misleading links, impersonation, or false information.
          </li>
          <li>
            <strong>NSFW Content:</strong> Explicit sexual content, pornography, or illicit behavior is banned.
          </li>
        </ol>

        <h3 className="mt-6">Enforcement and Reporting</h3>
        <p>
          If you encounter content that violates these rules, please use the in-app reporting feature. Our moderation team reviews reports promptly and may remove content or suspend accounts that breach these guidelines.
        </p>

        <h3 className="mt-4 font-medium">Consequences</h3>
        <p>
          Violations may lead to content removal, account warnings, temporary suspensions, or permanent bans, depending on severity and recurrence.
        </p>
      </div>
    </div>
  );
}
