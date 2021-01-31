import React, { useState, ReactNode } from "react";
import { useAuth } from "../providers/AuthProvider.tsx";
import { NavBarExternalLink, NavBarExternalLinkProps } from "./NavBarExternalLink";
import { NavBarLink } from "../navigation/NavBarLink";
import { Routes } from "../Router";

export function NavBar(): JSX.Element {
  const [isOpen, setIsOpen] = useState(false);
  const { isAuthenticated, user } = useAuth();
  console.log("[NavBar]", isAuthenticated, user);

  function toggleIsOpen() {
    setIsOpen(!isOpen);
  }

  function handleClick() {
    toggleIsOpen();
  }

  function svgIconPath() {
    if (isOpen) {
      return (
        <path
          fillRule="evenodd"
          d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
        />
      );
    } else {
      return (
        <path
          fillRule="evenodd"
          d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
        />
      );
    }
  }

  function generateLogoutButton(): ReactNode {
    return (
      <NavBarExternalLink name="Logout" href="/auth/destroy/">
        <span className="inline-block mr-2">{user.name}</span>
        <img alt="Avatar Image" src={user.picture} className="inline-block h-6 rounded-full" />
      </NavBarExternalLink>
    );
  }

  // NOTE: mr-auto pushes the bar left. Remove mr-auto for right aligned navs
  const navClasses = ["px-2", "pt-2", "pb-3", "sm:flex", "mr-auto"];
  const toolbarClasses = ["px-2", "pt-2", "pb-3", "sm:flex"];
  if (!isOpen) {
    navClasses.push("hidden");
    toolbarClasses.push("hidden");
  }

  const authenticationButton = isAuthenticated ? (
    generateLogoutButton()
  ) : (
    <NavBarExternalLink name="Login" href="/auth/google/" />
  );

  const navBar = (
    <>
      <div className={navClasses.join(" ")}>
        <NavBarLink name="Home" route={Routes.Home} />
        <NavBarLink name="Test" route={Routes.Test} />
      </div>
      <div className={toolbarClasses.join(" ")}>{authenticationButton}</div>
    </>
  );

  return (
    <div id="Router" className="sm:flex sm:justify-between bg-gray-900">
      <div className="flex items-center justify-between px-4 py-3">
        <div className="text-white font-bold">Bandar</div>
        <div className="sm:hidden">
          <button
            type="button"
            className="block text-gray-500 hover:text-white focus:text-white focus:outline-none"
            onClick={handleClick}
          >
            <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
              {svgIconPath()}
            </svg>
          </button>
        </div>
      </div>
      {navBar}
    </div>
  );
}
