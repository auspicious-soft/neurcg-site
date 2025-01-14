"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import Image from "next/image";
import { ToggleClose, ToggleIcon } from "../utils/svgicons";
import logo from "@/assets/images/logo.png";
import { usePathname, useRouter } from "next/navigation";
import clsx from "clsx";

const Header = () => {
  const pathname = usePathname();
  const router = useRouter();

  const [isToggleOpen, setIsToggleOpen] = useState(false);
  const [activeLink, setActiveLink] = useState<string>(pathname);

  useEffect(() => {
    setActiveLink(pathname);
  }, [pathname]);

  const isActive = (path: string) => {
    return activeLink === path;
  };

  const handleToggleOpen = () => {
    setIsToggleOpen(!isToggleOpen);
  };

  const handleToggleClose = () => {
    setIsToggleOpen(false);
  };

  // Handle link click to close the sidebar
  const handleLinkClick = (path: string) => {
    setActiveLink(path);
    setIsToggleOpen(false);
  };

  // Handle "Use Cases" link click
  const handleUseCasesClick = () => {
    if (pathname === "/") {
      const useCaseSection = document.getElementById("use-case");
      if (useCaseSection) {
        const offset = 100;
        const elementPosition = useCaseSection.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;
  
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    } else {
      router.push("/#use-case");
    }
    handleLinkClick("#use-case");
  };

  // Handle "About Us" link click
  const handleAboutUsClick = () => {
    if (pathname === "/") {
      const contactSection = document.getElementById("contact-us");
      if (contactSection) {
        const offset = 120;
        const elementPosition = contactSection.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;
  
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }
    } else {
      router.push("/#contact-us");
    }
    handleLinkClick("#contact-us");
  };

  return (
    <header className="px-[15px] my-[10px] sticky top-[10px] z-10 lg:my-[30px] lg:px-[30px] lg:top-[30px]">
      <div className="shadow-md nav-container w-full bg-white flex rounded-[7px] items-center justify-between py-[12.5px] px-[15px] md:px-[30px]">
        <div className="nav_logo lg:w-[188px]">
          <Link href="/" className="nav-logo-link">
            <Image src={logo} alt="Logo" />
          </Link>
        </div>
        <div className={`nav-menu ${isToggleOpen ? "open" : ""}`}>
          <ul className="lg:flex items-center gap-[36px]">
            <button className="close-btn lg:hidden" onClick={handleToggleClose}>
              <ToggleClose />
            </button>
            <li>
              <Link
                href="/"
                className={clsx("nav-menu-list", { active: isActive("/") })}
                onClick={() => handleLinkClick("/")}
              >
                Home
              </Link>
            </li>
            <li>
              <button
                className={clsx("nav-menu-list", { active: isActive("#use-case") })}
                onClick={handleUseCasesClick}
              >
                Use Cases
              </button>
            </li>
            <li>
              <Link
                href="/about"
                className={clsx("nav-menu-list", { active: isActive("/about") })}
                onClick={() => handleLinkClick("/about")}
              >
                About Us
              </Link>
            </li>
            <li>
              <button
                className={clsx("nav-menu-list", { active: isActive("#contact-us") })}
                onClick={handleAboutUsClick}
              >
                Contact Us
              </button>
            </li>
            <li>
              <Link
                href="/pricing"
                className={clsx("nav-menu-list", { active: isActive("/pricing") })}
                onClick={() => handleLinkClick("/pricing")}
              >
                Pricing
              </Link>
            </li>
            <li className="md:hidden">
              <Link
               href={`${process.env.NEXT_PUBLIC_USER_LINK}`}
                className="nav-menu-list"
                onClick={() => handleLinkClick("/contact")}
              >
                Free Trial
              </Link>
            </li>
            <li className="md:hidden">
              <Link
                href={`${process.env.NEXT_PUBLIC_USER_LINK}`}
                className="nav-menu-list"
                onClick={() => handleLinkClick("/contact")}
              >
                Login
              </Link>
            </li>
          </ul>
        </div>
        <div className="hidden lg:flex gap-[30px] justify-end items-center">
          <p>
            <Link href={`${process.env.NEXT_PUBLIC_USER_LINK}`} className="nav-menu-list">
              Login
            </Link>
          </p>
          <p>
            <Link
               href={`${process.env.NEXT_PUBLIC_USER_LINK}`}
              className="nav-menu-list lg:!inline-block !text-white bg-[#E56F20] rounded-[4px] lg:!px-[30px] !py-[12px]"
            >
              Free Trial
            </Link>
          </p>
        </div>
        <p className="menuToggleBtn lg:hidden" onClick={handleToggleOpen}>
          <ToggleIcon />
        </p>
      </div>
    </header>
  );
};

export default Header;
