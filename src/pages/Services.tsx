import React from 'react';
import technology from "../assets/images/services/technology.png"
import business from '../assets/images/services/business.png'
import restaurant from "../assets/images/services/restaurant.png"
import staffing from "../assets/images/services/staffing.png"
import training from "../assets/images/services/training.png"
import operations from "../assets/images/services/operations.png"
interface Service {
  id: number;
  title: string;
  image: string;
}

const Services: React.FC = () => {
  const services: Service[] = [
    {
      id: 1,
      title: "Technology & Digital Solutions",
      image: technology
    },
    {
      id: 2,
      title: "Business Development & Consultancy",
      image: business,
    },
    {
      id: 3,
      title: "Restaurant & Kitchen Setup",
      image: restaurant,
    },
    {
      id: 4,
      title: "Operations & Supply Chain Management",
      image: operations,
    },
    {
      id: 5,
      title: "Training, Compliance & Development",
      image: training
    },
    {
      id: 6,
      title: "Staffing Recruitment & Provising",
      image: staffing,
    }
  ];

  return (
    <div className="bg-white py-16 px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h2 className="text-[#cf1b1b] text-4xl font-bold mb-2">Our Services</h2>
          <p className="text-gray-600 text-sm">View all the services available in ServeIQ.</p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div 
              key={service.id} 
              className="bg-white rounded-lg  border-gray-200 p-6 hover:shadow-lg transition-shadow flex flex-col items-center"
            >
              {/* Image */}
              <div className="mb-4 h-32  rounded-lg overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className=" h-full object-cover"
                />
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold  text-[#1E293B]  min-h-[3rem]">
                {service.title}
              </h3>

              {/* Button */}
              <button className="bg-[#C71313] text-white px-6 py-2 rounded-full text-sm font-semibold hover:bg-red-700 transition-colors flex items-center gap-2">
                View Details
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;