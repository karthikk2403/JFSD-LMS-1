"use client"; // If you're using Next.js 13+ with app directory for client-side actions
import { useRouter } from "next/navigation"; // For programmatic navigation
import Image from "next/image";
import Link from "next/link";

const Menu = ({ role }) => {
  const router = useRouter();

  const handleLogout = () => {
    // Clear any session data (if applicable)
    // For example: localStorage.clear(), cookie removal, etc.
    router.push("/login");
  };

  const menuItems = [
    {
      title: "MENU",
      items: [
        {
          icon: "/home.png",
          label: "Home",
          href: "/",
          visible: ["admin", "teacher", "student", "parent"],
        },
        // ... other menu items
        {
          icon: "/logout.png",
          label: "Logout",
          href: null, // Set href to null or omit it
          visible: ["admin", "teacher", "student", "parent"],
          action: handleLogout, // Add action for logout
        },
      ],
    },
    // OTHER menus
  ];

  return (
    <div className="mt-4 text-sm">
      {menuItems.map((section) => (
        <div className="flex flex-col gap-2" key={section.title}>
          <span className="hidden lg:block text-gray-400 font-light my-4">
            {section.title}
          </span>
          {section.items.map((item) => {
            if (item.visible.includes(role)) {
              return item.action ? (
                // Add action if it exists
                <button
                  key={item.label}
                  onClick={item.action}
                  className="flex items-center justify-center lg:justify-start gap-4 text-gray-500 py-2 md:px-2 rounded-md hover:bg-lamaSkyLight"
                >
                  <Image src={item.icon} alt="" width={20} height={20} />
                  <span className="hidden lg:block">{item.label}</span>
                </button>
              ) : (
                // Otherwise, use a link
                <Link
                  href={item.href}
                  key={item.label}
                  className="flex items-center justify-center lg:justify-start gap-4 text-gray-500 py-2 md:px-2 rounded-md hover:bg-lamaSkyLight"
                >
                  <Image src={item.icon} alt="" width={20} height={20} />
                  <span className="hidden lg:block">{item.label}</span>
                </Link>
              );
            }
          })}
        </div>
      ))}
    </div>
  );
};

export default Menu;
