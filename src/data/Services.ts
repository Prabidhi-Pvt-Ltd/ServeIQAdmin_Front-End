// src/data/services.ts
import technology from "../assets/images/services/technology.png";
import business from "../assets/images/services/business.png";
import restaurant from "../assets/images/services/restaurant.png";
import staffing from "../assets/images/services/staffing.png";
import training from "../assets/images/services/training.png";
import operations from "../assets/images/services/operations.png";

export interface Service {
  id: number;
  title: string;
  image: string;
  slug?: string; // optional: URL slug for linking
}

export const services: Service[] = [
  {
    id: 1,
    title: "Technology & Digital Solutions",
    image: technology,
    slug: "technology-digital-solutions",
  },
  {
    id: 2,
    title: "Business Development & Consultancy",
    image: business,
    slug: "business-development-consultancy",
  },
  {
    id: 3,
    title: "Restaurant & Kitchen Setup",
    image: restaurant,
    slug: "restaurant-kitchen-setup",
  },
  {
    id: 4,
    title: "Operations & Supply Chain Management",
    image: operations,
    slug: "operations-supply-chain",
  },
  {
    id: 5,
    title: "Training, Compliance & Development",
    image: training,
    slug: "training-compliance-development",
  },
  {
    id: 6,
    title: "Staffing Recruitment & Provising",
    image: staffing,
    slug: "staffing-recruitment-provisioning",
  },
];
