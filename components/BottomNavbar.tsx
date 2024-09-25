import React from 'react';
import { Compass, Activity, ShoppingBag, MessageCircle } from 'lucide-react';

const BottomNavbar = () => {
  const navItems = [
    { icon: Compass, label: 'Verken', link: '/verken' },
    { icon: Activity, label: 'Activiteiten', link: '/activiteiten' },
    { icon: ShoppingBag, label: 'Shop', link: '/shop' },
    // { icon: MessageCircle, label: 'Contact', link: '/contact' },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-4 py-2 hidden sm:block xl:hidden">
      <ul className="flex justify-between items-center">
        {navItems.map(({ icon: Icon, label, link }) => (
          <a key={label} href={link} className="flex flex-col items-center">
            <button className="p-2 rounded-full hover:bg-gray-100 transition-colors duration-200">
              <Icon className="w-6 h-6 text-gray-600" />
            </button>
            <span className="text-xs text-gray-600 mt-1">{label}</span>
          </a>
        ))}
      </ul>
    </nav>
  );
};

export default BottomNavbar;