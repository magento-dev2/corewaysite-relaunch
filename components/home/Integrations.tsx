"use client";

import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const integrations = [
  { name: "Magento", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/magento.svg" },
  { name: "Shopify", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/shopify.svg" },
  { name: "Stripe", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/stripe.svg" },
  { name: "PayPal", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/paypal.svg" },
  { name: "Razorpay", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/razorpay.svg" },
  { name: "FedEx", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/fedex.svg" },
  { name: "DHL", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/dhl.svg" },
  { name: "ShipRocket", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/rocket.svg" },
  { name: "EasyPost", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/easypost.svg" },
  { name: "Delhivery", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/delhivery.svg" },
  { name: "ShipStation", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/shipstation.svg" },
  { name: "BlueDart", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/rocket.svg" },
  { name: "UPS", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/ups.svg" },
  { name: "Google Analytics", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/googleanalytics.svg" },
  { name: "Meta Pixel", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/meta.svg" },
  { name: "Klaviyo", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/klaviyo.svg" },
  { name: "Mailchimp", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/mailchimp.svg" },
  { name: "HubSpot", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/hubspot.svg" },
  { name: "Zoho", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/zoho.svg" },
  { name: "Segment", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/segment.svg" },
  { name: "Zapier", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/zapier.svg" },
  { name: "Make", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/make.svg" },
  { name: "OpenAI", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/openai.svg" },
  { name: "n8n", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/n8n.svg" },
  { name: "Slack", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/slack.svg" },
  { name: "Discord", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/discord.svg" },
  { name: "Twilio", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/twilio.svg" },
  { name: "Telegram", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/telegram.svg" },
  { name: "Instagram", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/instagram.svg" },
  { name: "Facebook", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/facebook.svg" },
  { name: "LinkedIn", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/linkedin.svg" },
  { name: "YouTube", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/youtube.svg" },
  { name: "WhatsApp", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/whatsapp.svg" },
];

function InfiniteScroller({ items, reverse = false }: { items: Array<{name: string; icon: string}>; reverse?: boolean }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (containerRef.current) {
      setWidth(containerRef.current.scrollWidth / 2);
    }
  }, []);

  return (
    <div className="relative overflow-hidden">
      <motion.div
        ref={containerRef}
        className="flex space-x-6"
        animate={{ x: reverse ? [0, -width] : [-width, 0] }}
        transition={{
          duration: 40,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {[...items, ...items].map((integration, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-40 h-28 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl flex flex-col items-center justify-center gap-3 hover:bg-white/10 hover:border-purple-500/50 transition-all hover:scale-105"
          >
            <img
              src={integration.icon}
              alt={integration.name}
              className="w-10 h-10 invert opacity-80"
            />
            <p className="text-white text-sm font-medium">{integration.name}</p>
          </div>
        ))}
      </motion.div>

      {/* Gradient edges */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#0E0918] to-transparent pointer-events-none z-10"></div>
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#0E0918] to-transparent pointer-events-none z-10"></div>
    </div>
  );
}

export default function Integrations() {
  const row1 = integrations.slice(0, 17);
  const row2 = integrations.slice(17);

  return (
    <section className="relative bg-gradient-to-b from-[#0E0918] via-[#1a1325] to-[#0E0918] py-16 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8">
        <div className="text-center mb-12">
          <div className="inline-block px-3 py-1.5 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full mb-4">
            <span className="text-xs font-medium text-gray-300">Integrations</span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
            Connect Everything
          </h2>

          <p className=" text-gray-300 text-lg leading-relaxed max-w-2xl mx-auto">
            Seamlessly integrate with all your favorite tools and platforms
          </p>
        </div>

        <div className="space-y-6">
          <InfiniteScroller items={row1} />

          <InfiniteScroller items={row2} reverse />
        </div>
      </div>
    </section>
  );
}
