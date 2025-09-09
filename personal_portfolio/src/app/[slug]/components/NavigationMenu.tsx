"use client";

import Link from "next/link";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const hoverUnderlineClass = `
  relative
  before:absolute before:bottom-0 before:left-0 before:w-0 before:h-[3px] before:bg-current
  before:transition-[width] before:duration-300
  hover:before:w-full
`;

export function Navigation() {
  return (
    <NavigationMenu viewport={false}>
      <NavigationMenuList className="flex gap-4">
        <NavigationMenuItem>
          <NavigationMenuLink asChild>
            <Link
              href="#home"
              className={`${navigationMenuTriggerStyle()} ${hoverUnderlineClass}`}
            >
              Home
            </Link>
          </NavigationMenuLink>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuLink asChild>
            <Link
              href="#portfolio"
              className={`${navigationMenuTriggerStyle()} ${hoverUnderlineClass}`}
            >
              Portfolio
            </Link>
          </NavigationMenuLink>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuLink asChild>
            <Link
              href="#services"
              className={`${navigationMenuTriggerStyle()} ${hoverUnderlineClass}`}
            >
              Serviços
            </Link>
          </NavigationMenuLink>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuLink asChild>
            <Link
              href="#about"
              className={`${navigationMenuTriggerStyle()} ${hoverUnderlineClass}`}
            >
              Sobre
            </Link>
          </NavigationMenuLink>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuLink asChild>
            <Link
              href="#contact"
              className={`${navigationMenuTriggerStyle()} ${hoverUnderlineClass}`}
            >
              Contato
            </Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
