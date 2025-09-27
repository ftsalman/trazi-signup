import { useEffect } from "react";
import { useState } from "react";

const AUTH_SLIDER_ITEMS = [
  {
    imgUrl: "/images/auth/carousal-imgs/1.png",
    head: "🎉 Start Free for 7 Days",
    descp:
      "Try all our smart features with zero risk. Just sign up and start growing your business through WhatsApp today!",
  },
  {
    imgUrl: "/images/auth/carousal-imgs/2.png",
    head: "🤖 Smart Chatbot That Works While You Sleep",
    descp:
      "Flowbee answers your customers instantly — even at 2am. Whether it’s booking an appointment, sending today’s price list, or collecting leads — it does the job without you lifting a finger.",
  },
  {
    imgUrl: "/images/auth/carousal-imgs/3.png",
    head: "📢 Send Bulk Messages in Just a Few Clicks",
    descp:
      "Got a new offer? Holiday timing? New price update? Send it to hundreds of customers at once, right from your Flowbee dashboard — fully personalized and WhatsApp-approved.",
  },
  {
    imgUrl: "/images/auth/carousal-imgs/6.png",
    head: "🔔 Auto-Reminders So You Never Forget a Customer",
    descp:
      "Flowbee sends polite follow-ups, reminders, and alerts — like “Your appointment is tomorrow!” or “Don’t forget to renew.” You stay on top without being on your phone.",
  },
  {
    imgUrl: "/images/auth/carousal-imgs/4.png",
    head: "👥 One WhatsApp. Many Team Members.",
    descp:
      "Flowbee’s shared inbox lets your whole team reply to customers from one WhatsApp number — assign chats, add notes, and never miss a conversation again.",
  },
  {
    imgUrl: "/images/auth/carousal-imgs/5.png",
    head: "🛍️ Built-In WhatsApp Catalog for Your Business",
    descp:
      "Upload your services, products, menus or price list and let customers browse right inside WhatsApp. Perfect for meat shops, salons, typing centers & more.",
  },
];

export const AuthSlider = () => {
  const [curr, setCurr] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurr((prev) => (prev + 1) % AUTH_SLIDER_ITEMS.length);
    }, 5000);

    return () => clearTimeout(timer);
  }, [curr]);

  const { head, descp,imgUrl } = AUTH_SLIDER_ITEMS[curr];

  return (
    <div className="flex items-center justify-center flex-col gap-4">
      <div className="relative flex items-center justify-center flex-shrink-0 overflow-clip pr-4">
        <img
          alt="brand-logo"
          srcSet="/svg/illustrations/auth-slider-bg.svg"
          src="/svg/illustrations/auth-slider-bg.svg"
        />
        <img
          key={curr}
          src={imgUrl}
          alt="slider-img-1"
          className="absolute animate-custom-test-sahad"
        />
      </div>
      <div
        key={curr}
        className="flex-shrink-0 text-center max-w-[500px] min-h-[200px] animate-fade-in-up"
      >
        <h4 className="text-[24px] font-semibold text-gray-800">{head}</h4>
        <h4 className="text-sm mt-2 text-gray-800">{descp}</h4>
      </div>
    </div>
  );
};
