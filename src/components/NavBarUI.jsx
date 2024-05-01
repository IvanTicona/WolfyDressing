/* eslint-disable no-unused-vars */
import {
  Button,
  Image,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/react";
import { Link, useLocation } from "react-router-dom";
import { SearchInputUI } from "./SearchInputUI";
import { useState } from "react";



export const NavBarUI = () => {

  let path = useLocation();
  // location = path.pathname.split("/")[1];

  return (
    <Navbar shouldHideOnScroll isBordered classNames={{
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
    }}>
      <NavbarBrand>
        {/* <AcmeLogo /> */}
        <Image src="/favicon.svg" alt="Wolfy" width={160} />
        {/* <p className="font-bold text-inherit">ACME</p> */}
      </NavbarBrand>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem isActive>
          <Link color="foreground" to="/">
            Home
          </Link>
        </NavbarItem>

        <NavbarItem isActive>
          <Link color="foreground" to="/contact">
            Contact
          </Link>
        </NavbarItem>

        <NavbarItem isActive>
          <Link color="foreground" to="/offers">
            Offers
          </Link>
        </NavbarItem>

        <NavbarItem isActive>
          <Link color="foreground" to="/tracking">
            Tracking
          </Link>
        </NavbarItem>

        <NavbarItem isActive>
          <Link color="foreground" to="/product">
            Product
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent justify="end">
        
        <SearchInputUI/>

        <NavbarItem className="hidden lg:flex">
          <Link href="#">Login</Link>
        </NavbarItem>

        <NavbarItem>
          <Button as={Link} color="primary" href="#" variant="flat">
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};
