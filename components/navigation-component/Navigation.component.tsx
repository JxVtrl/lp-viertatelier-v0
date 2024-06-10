import React from "react";
import { navigation_data } from "@/data/navigation-data";

const Navigation: React.FC = () => {
  return (
    <nav>
      <ul className="
        flex
        gap-x-[20px]
        text-[#fff]
        font-bold
        text-[18px]
        uppercase
        tracking-[1px]
      ">
        {navigation_data.map((navigation) => (
          <a href={navigation.url} key={navigation.id}>
            <li>{navigation.title}</li>
          </a>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
