"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

const paths = [
  { name: "Register", href: "register" },
  { name: "Login", href: "login" },
];

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  const [input, setInput] = React.useState("");
  const pathName = usePathname();

  return (
    <div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <div>
        {paths.map((path) => {
          const isActive = pathName.startsWith(`/${path.href}`);

          return (
            <Link
              key={path.name}
              href={path.href}
              className={`${
                isActive
                  ? "text-black font-bold mr-4"
                  : "text-blue-500 font-bold mr-4"
              }`}
            >
              {path.name}
            </Link>
          );
        })}
      </div>

      {children}
    </div>
  );
};

export default AuthLayout;