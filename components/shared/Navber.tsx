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
import { CgMenu, CgClose } from "react-icons/cg";
import NavOverlay from "./NavOverlay";

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
  const [icon, setIcon] = useState<boolean>(false);
  const [nav, setNav] = useState<boolean>(false);
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
      <header
        className={`fixed left-0 right-0 top-0  z-[999] flex h-20 ${
          icon && "max-lg:h-full"
        }   w-full  items-center border-b border-gray bg-white backdrop-blur-xl max-lg:z-[1010] ${
          icon ? "max-lg:w-[60%]" : ""
        }`}
      >
        <div className='max-lg:relative container max-lg:h-full max-lg:w-full '>
          <div
            className={` ${
              !icon
                ? "absolute  right-5 top-6 px-1 py-1 cursor-pointer border border-blue rounded-full lg:hidden flex items-center justify-center"
                : "active"
            }`}
          >
            <div className='mobile-navber-btn  eq relative '>
              <CgMenu
                name='menu-outline'
                className='mobile-navber-icon  eq text-lg '
                onClick={() => setIcon(true)}
              />
              <CgClose
                name='close-outline'
                className='mobile-navber-icon max-lg:-mt-2 eq  close-outline '
                onClick={() => setIcon(false)}
              />
            </div>
          </div>

          <nav className='max-lg:absolute  max-lg:h-full max-lg:w-full  max-lg:top-5 max-lg:left-0   lg:flex items-center lg:justify-between justify-center  gap-5'>
            <div className='max-lg:pl-5'>
              <Link href='/' className='text-2xl font-semibold'>
                arina<span className='text-red'>▪</span>
              </Link>
            </div>

            <div
              className={`${
                !icon && "max-lg:hidden "
              } max-lg:h-full max-lg:flex max-lg:justify-center max-lg:items-center `}
            >
              <ul className='lg:flex origin-top justify-center items-center max-lg:bg-white  duration-700  lg:gap-10  '>
                {navContents.map((item) => (
                  <li
                    className='max-lg:py-5    flex justify-center items-center '
                    key={item.label}
                  >
                    <Link
                      onClick={() => setIcon(false)}
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
                    onClick={() => setIcon(false)}
                    href='/sign-in'
                    className={cn(
                      buttonVariants({ variant: "danger" }),
                      "max-lg:flex max-lg:justify-center max-lg:items-center max-lg:mt-10"
                    )}
                  >
                    Sign In
                  </Link>
                ) : (
                  <div
                    className='flex max-lg: items-center gap-5 justify-center h-full bg-red'
                    onClick={() =>
                      setShouldProfilePopupOpen(!shouldProfilePopupOpen)
                    }
                  >
                    <div className='group relative h-12 w-12 cursor-pointer rounded-full '>
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
                        <ul className='absolute right-0 top-[calc(100%+1rem)] max-lg:-top-10 max-lg:left-40   z-[102] flex flex-col items-start gap-5 rounded-xl bg-white px-10 max-lg:pr-32 py-5 shadow-md'>
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
            </div>
          </nav>
        </div>
      </header>

      <div onClick={() => setIcon(false)}>{icon && <NavOverlay />}</div>

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
