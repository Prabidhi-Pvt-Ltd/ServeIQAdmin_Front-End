import photo1 from "../assets/images/card1.png";
import photo2 from "../assets/images/card2.png";
import photo3 from "../assets/images/card3.png";
import photo4 from "../assets/images/card4.png";
import photo5 from "../assets/images/card4.png";
import type { FeatureItem } from "../types/feature";

export const features: FeatureItem[] = [
  {
    id: 1,
    title: "Restaurant & Customer Management",
    subtitle: "What happens when you book a DEMO with us",
    image: photo1,
    points: [
      {
        heading: "Guest Experience & Engagement",
        description:
          "Enhance guest satisfaction with personalized experiences.",
      },
      {
        heading: "Self - Ordering",
        description:
          "Empower customers with digital self-ordering for a seamless experience.",
      },
      {
        heading: "Reservation & Table Management",
        description: "Simplify reservation management and table assignments.",
      },
      {
        heading: "Bill Management",
        description:
          "Efficient bill management with KOT management printing and Payment History.",
      },
      {
        heading: "Manage Menu, Service Books & Track Records",
        description:
          "Simplify the way you present your menu and service book to the customers.",
      },
    ],
  },
  {
    id: 2,
    title: "Order & Kitchen Management ",
    subtitle: "What happens when you book a DEMO with us",
    image: photo2,
    points: [
      {
        heading: "Order Takin & Workflow",
        description:
          "Streamline order taking and kitchen workflow for maximum efficiency",
      },
      {
        heading: "Kitchen operations & co-ordination",
        description:
          "Integrate kitchen operation for seamless order preparation",
      },
      {
        heading: "Automate Kitchen Operations",
        description: "Simplify reservation management and table assignments.",
      },
      {
        heading: "Kitchen Display & Printing",
        description:
          "Real-time updates and printed tickets for faster order fulfillment",
      },
    ],
  },
  {
    id: 3,
    title: "Menu & Digital Channel Management ",
    subtitle: "What happens when you book a DEMO with us",
    image: photo3,
    points: [
      {
        heading: "Menu Management",
        description:
          "Easily update your menu, prices and specials offers in real time.",
      },
      {
        heading: "Restaurant Menu Software",
        description:
          "Digital menus that streamline ordering and improve accuracy",
      },
      {
        heading: "Digital Integration",
        description:
          "Seamless integration across all digital channels, including apps and websites.",
      },
      {
        heading: "Real time tracking",
        description:
          "Easily track out your payment history and manage payment gateway.",
      },
    ],
  },

  {
    id: 4,
    title: "Data & Business Insights ",
    subtitle: "What happens when you book a DEMO with us",
    image: photo4,
    points: [
      {
        heading: "Performance Monitoring",
        description: "Track key performance metrics to optimize operations.",
      },
      {
        heading: "Real-Time Analytics",
        description:
          "Get instant insights on sales, inventory and customer behavior.",
      },
      {
        heading: "Business Performance Dashboards",
        description:
          "Visual dashboards that allow you to make data-driven decisions.",
      },
      {
        heading: "Real time tracking",
        description:
          "Easily track out your payment history and manage payment gateway.",
      },
    ],
  },
  {
    id: 5,
    title: "System Accessibility & Support ",
    subtitle: "What happens when you book a DEMO with us",
    image: photo5,
    points: [
      {
        heading: "Flexibility & Access",
        description: "Access the system from any device , anytime , anywhere",
      },
      {
        heading: "Offline Mode",
        description:
          "Keep operation running smoothly, even without an internet connection.",
      },
      {
        heading: "24/7 Support",
        description: "Dedicated customer support whenever you need it.",
      },
      {
        heading: "Restaurant-Grade Hardware",
        description:
          "Reliable, robust, hardware built to withstand high-volume use.",
      },
    ],
  },
];
