"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Button, { buttonVariants } from "../ui/Button";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import Image from "next/image";
import { useState } from "react";
import toast from "react-hot-toast";
import { logout } from "@/redux/features/auth/authSlice";

const navContents = [
  { href: "/", label: "Home" },
  { href: "/packages", label: "Packages" },
  { href: "/specialists", label: "Specialists" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

const Navber = () => {
  const pathname = usePathname();
  const [shouldProfilePopupOpen, setShouldProfilePopupOpen] =
    useState<boolean>(false);
  const session = useSelector((state: RootState) => state.auth.userAndToken);
  const dispatch = useDispatch();

  const sessionNavContents = [
    { href: "/profile", label: "Profile" },
    { href: "/user/manage/bookings", label: "My Bookings" },
    {
      href: "/admin/manage/packages",
      label: "Manage Packages",
    },
    {
      href: "/admin/manage/specialists",
      label: "Manage Specialists",
    },
    {
      href: "/admin/manage/users",
      label: "Manage Users",
    },
    {
      href: "/admin/manage/bookings",
      label: "Manage Bookings",
    },
  ];

  return (
    <>
      <header className='fixed left-0 right-0 top-0 z-[999] flex h-20 w-full items-center border-b border-gray bg-white/90 backdrop-blur-xl'>
        <nav className='container flex items-center justify-between gap-5'>
          <Link href='/' className='text-2xl font-semibold'>
            arina<span className='text-red'>.</span>
          </Link>
          <ul className='flex items-center gap-5 text-lg'>
            {navContents.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className={cn(
                    "link-item",
                    pathname === item.href ? "text-black" : "text-black/50"
                  )}
                >
                  {item.label}
                </Link>
              </li>
            ))}

            {!session?.user ? (
              <Link
                href='/sign-in'
                className={cn(buttonVariants({ variant: "danger" }))}
              >
                Sign In
              </Link>
            ) : (
              <div
                className='flex items-center gap-5'
                onClick={() =>
                  setShouldProfilePopupOpen(!shouldProfilePopupOpen)
                }
              >
                <div className='group relative h-12 w-12 cursor-pointer rounded-full'>
                  <Image
                    src={session.user.photoUrl}
                    alt={session.user.name}
                    height={64}
                    width={64}
                    priority
                    className='eq h-full w-full rounded-full object-cover group-hover:brightness-50'
                  />
                  {/* PROFILE POP-UP */}
                  {shouldProfilePopupOpen && (
                    <ul className='absolute right-0 top-[calc(100%+1rem)] z-[102] flex flex-col items-start gap-5 rounded-xl bg-white px-10 py-5 shadow-md'>
                      {session?.user?.role === "admin" &&
                        sessionNavContents.map((item) => (
                          <li key={item.label}>
                            <Link
                              href={item.href}
                              className={cn(
                                "link-item whitespace-nowrap",
                                pathname === item.href
                                  ? "text-black"
                                  : "text-black/50"
                              )}
                            >
                              {item.label}
                            </Link>
                          </li>
                        ))}

                      {session?.user?.role === "user" &&
                        sessionNavContents.slice(0, 2).map((item) => (
                          <li key={item.label}>
                            <Link
                              href={item.href}
                              className={cn(
                                "link-item whitespace-nowrap",
                                pathname === item.href
                                  ? "text-black"
                                  : "text-black/50"
                              )}
                            >
                              {item.label}
                            </Link>
                          </li>
                        ))}
                    </ul>
                  )}
                </div>
                <Button
                  onClick={() => {
                    dispatch(logout());
                    toast.success("Logout success!");
                  }}
                  variant='secondary'
                >
                  Logout
                </Button>
              </div>
            )}
          </ul>
        </nav>
      </header>

      {/* POP-UP OVERLAY */}
      {shouldProfilePopupOpen && (
        <div
          onClick={() => setShouldProfilePopupOpen(false)}
          className='fixed bottom-0 left-0 right-0 top-0 z-[101] h-full w-full'
        ></div>
      )}
    </>
  );
};

export default Navber;
