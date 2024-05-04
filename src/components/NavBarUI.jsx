/* eslint-disable no-unused-vars */
import {
  Button,
  Image,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@nextui-org/react";
import { Link, useLocation } from "react-router-dom";
import { SearchInputUI } from "./SearchInputUI";
import { useEffect, useState } from "react";
import { CartIcon } from "../Icons/CartIcon";

export const NavBarUI = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [location, setLocation] = useState("");
  const currentPath = useLocation();

  const navbarItems = [
    { name: "Home", path: "/" },
    { name: "Contact", path: "/contact" },
    { name: "Offers", path: "/offers" },
    { name: "Tracking", path: "/tracking" },
    { name: "Product", path: "/product" },
    // { name:"Search",path: "/search" },
    // { name:"Cart",path: "/cart" },
    // { name:"Checkout",path: "/checkout" },
  ];

  const menuItems = [
    "Home",
    "Contact",
    "Offers",
    "Tracking",
    "Product",
    "Log Out",
  ];

  useEffect(() => {
    setLocation(currentPath.pathname);
  }, [currentPath]);

  return (
    <Navbar
      shouldHideOnScroll
      classNames={{
        item: [
          "flex",
          "relative",
          "h-full",
          "items-center",
          "data-[active=true]:text-primary",
          "data-[active=true]:after:content-['']",
          "data-[active=true]:after:absolute",
          "data-[active=true]:after:bottom-0",
          "data-[active=true]:after:left-0",
          "data-[active=true]:after:right-0",
          "data-[active=true]:after:h-[3px]",
          "data-[active=true]:after:rounded-[1px]",
          "data-[active=true]:after:bg-primary",
        ],
        wrapper: ["md:max-w-full", "md:px-32"],
      }}
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        />
      </NavbarContent>

      <NavbarBrand className="mt-3">
        <Image src="/logosvgDark.svg" alt="Wolfy" width={160} />
      </NavbarBrand>

      <NavbarContent className="hidden sm:flex gap-4" justify="start">
        {navbarItems.map((item, index) => (
          <NavbarItem
            className=""
            key={index * 3}
            isActive={location === item.path}
          >
            <Link color="foreground" to={item.path}>
              {item.name}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      <NavbarContent className="mt-3" justify="end">
        <SearchInputUI/>

        <NavbarItem>
          <Button
            isIconOnly
            as={Link}
            className="w-16"
            color="primary"
            href="#"
            variant="light"
          >
            <CartIcon />
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full"
              color={
                index === 2
                  ? "warning"
                  : index === menuItems.length - 1
                  ? "danger"
                  : "foreground"
              }
              to={`/${item.toLowerCase()}`}
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
};
