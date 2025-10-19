import { NavLink } from "react-router-dom";

interface NavLinksProps {
  isMobile?: boolean;
  onLinkClick?: (sectionId: string) => void;
}

const navItems = [
  { label: "Home", path: "/", id: "home" },
  { label: "About us", path: "/about", id: "about" },
  { label: "Plan and Services", path: "/services", id: "services" },
  { label: "Blogs", path: "/blogs", id: "blogs" },
  { label: "Customer Care", path: "/customer-care", id: "customer-care" },
];

export function NavLinks({ isMobile = false, onLinkClick }: NavLinksProps) {
  const handleClick = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    if (onLinkClick) {
      onLinkClick(id);
    }
  };

  if (isMobile) {
    return (
      <div className="flex flex-col space-y-3">
        {navItems.map((item) => (
          <NavLink
            key={item.id}
            to={item.path}
            className={({ isActive }) =>
              `text-sm font-medium py-2 ${
                isActive ? "text-red-600" : "text-gray-700"
              }`
            }
            onClick={(e) => handleClick(e, item.id)}
          >
            {item.label}
          </NavLink>
        ))}
      </div>
    );
  }

  return (
    <div className="hidden xl:flex items-center gap-6">
      {navItems.map((item) => (
        <NavLink
          key={item.id}
          to={item.path}
          end={item.path === "/"}
          onClick={(e) => handleClick(e, item.id)}
          className={({ isActive }) =>
            `text-sm font-medium pb-1 border-b-2 transition-colors whitespace-nowrap ${
              isActive
                ? "text-red-600 border-red-600"
                : "text-gray-700 border-transparent hover:text-red-600"
            }`
          }
        >
          {item.label}
        </NavLink>
      ))}
    </div>
  );
}
