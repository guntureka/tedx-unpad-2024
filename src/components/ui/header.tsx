"use client";

import { type Session } from "next-auth";
import { signOut } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";

const authorizeRoute = ["/profile", "/submission"];

const Header = ({ session }: { session: Session | null }) => {
  const [isOpen, setOpen] = useState<boolean>(false);
  const pathname = usePathname();
  return (
    <header className="flex w-full">
      <div className="fixed top-[30px] z-[100] flex w-full px-10 lg:px-20">
        <div className="relative flex w-full items-center justify-between rounded-lg bg-[#FAFAFA] p-5">
          {/* ------------------------- Logo -------------------------- */}
          <div>
            <Link href={"/"} onClick={() => setOpen(false)}>
              <Image
                src={"/logo-white.png"}
                alt="logo"
                width={164}
                height={32}
                className="hidden md:block"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="md:hidden"
                x="0px"
                y="0px"
                width="24px"
                height="24px"
                viewBox="0 0 48 48"
              >
                <path d="M39.5,43h-9c-1.381,0-2.5-1.119-2.5-2.5v-9c0-1.105-0.895-2-2-2h-4c-1.105,0-2,0.895-2,2v9c0,1.381-1.119,2.5-2.5,2.5h-9	C7.119,43,6,41.881,6,40.5V21.413c0-2.299,1.054-4.471,2.859-5.893L23.071,4.321c0.545-0.428,1.313-0.428,1.857,0L39.142,15.52	C40.947,16.942,42,19.113,42,21.411V40.5C42,41.881,40.881,43,39.5,43z"></path>
              </svg>
            </Link>
          </div>
          {/* ------------------------- Middle Menu -------------------------- */}
          <div className="flex">
            <div className="hidden md:flex">
              {authorizeRoute.includes(pathname) ? (
                <div className="flex items-center justify-center gap-4 text-black">
                  <Link href={"/profile"} className="text-black">
                    Profile
                  </Link>
                  <Link href={"/buy-ticket"} className="text-black">
                    Buy Ticket
                  </Link>
                </div>
              ) : (
                <div className="flex items-center justify-center gap-4 text-black">
                  <Link href={"/main-event"} className="text-black">
                    Event
                  </Link>
                  <Link href={"/partnership"} className="text-black">
                    Partnership
                  </Link>
                </div>
              )}
            </div>
            <Image
              src={"/logo-white.png"}
              alt="logo"
              width={164}
              height={32}
              className="block: md:hidden"
            />
          </div>
          {/* ------------------------- Right Menu -------------------------- */}
          <div>
            {session?.user ? (
              <div className="flex items-center justify-center">
                <button
                  className="p-2 text-black"
                  onClick={() => setOpen(!isOpen)}
                >
                  {isOpen ? (
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 32 32"
                        fill="currentColor"
                        className="h-[32px] w-[32px]"
                      >
                        <path d="M 7 4 C 6.744125 4 6.4879687 4.0974687 6.2929688 4.2929688 L 4.2929688 6.2929688 C 3.9019687 6.6839688 3.9019687 7.3170313 4.2929688 7.7070312 L 11.585938 15 L 4.2929688 22.292969 C 3.9019687 22.683969 3.9019687 23.317031 4.2929688 23.707031 L 6.2929688 25.707031 C 6.6839688 26.098031 7.3170313 26.098031 7.7070312 25.707031 L 15 18.414062 L 22.292969 25.707031 C 22.682969 26.098031 23.317031 26.098031 23.707031 25.707031 L 25.707031 23.707031 C 26.098031 23.316031 26.098031 22.682969 25.707031 22.292969 L 18.414062 15 L 25.707031 7.7070312 C 26.098031 7.3170312 26.098031 6.6829688 25.707031 6.2929688 L 23.707031 4.2929688 C 23.316031 3.9019687 22.682969 3.9019687 22.292969 4.2929688 L 15 11.585938 L 7.7070312 4.2929688 C 7.5115312 4.0974687 7.255875 4 7 4 z"></path>
                      </svg>
                    </div>
                  ) : (
                    <div>
                      {session.user.image ? (
                        <Image
                          src={session.user.image}
                          alt="profile-photo"
                          width={32}
                          height={32}
                          className="rounded-full"
                        />
                      ) : (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 32 32"
                          fill="currentColor"
                          className="h-[32px] w-[32px]"
                        >
                          <path
                            fillRule="evenodd"
                            d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
                            clipRule="evenodd"
                          />
                        </svg>
                      )}
                    </div>
                  )}
                </button>

                {isOpen && (
                  <div className="flex w-full">
                    <div className="absolute left-0 top-28 flex w-full rounded-lg bg-white text-black">
                      <div className="relative flex w-full flex-col items-start justify-center space-y-2 p-5">
                        <div className="w-full flex-col items-start justify-center space-y-2 md:flex">
                          {/* TODO: NEED TO FIX BY FE */}
                          {authorizeRoute.includes(pathname) ? (
                            <Link
                              href={"/profile"}
                              className="w-full px-2 py-4 hover:rounded-lg hover:bg-gray-200 hover:px-4"
                            >
                              Profile
                            </Link>
                          ) : (
                            <Link
                              href={"/profile"}
                              className="w-full px-2 py-4 hover:rounded-lg hover:bg-gray-200 hover:px-4"
                            >
                              Profile
                            </Link>
                          )}
                          <button
                            className="w-full rounded-lg bg-red-600 p-4 text-white hover:bg-red-700"
                            onClick={() => signOut()}
                          >
                            Logout
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <div>
                <div className="hidden items-center justify-center gap-4 md:flex">
                  <Link href={"/auth/register"}>
                    <button className="rounded-lg px-4 py-2 text-black outline outline-1 outline-black hover:bg-gray-200">
                      Register
                    </button>
                  </Link>
                  <Link href={"/auth/login"}>
                    <button className="rounded-lg bg-red-600 px-4 py-2 hover:bg-red-700">
                      Login
                    </button>
                  </Link>
                </div>
                <div className="flex items-center justify-center md:hidden">
                  <button
                    className="p-2 text-black"
                    onClick={() => setOpen(!isOpen)}
                  >
                    {isOpen ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 32 32"
                        fill="currentColor"
                        className="h-[32px] w-[32px]"
                      >
                        <path d="M 7 4 C 6.744125 4 6.4879687 4.0974687 6.2929688 4.2929688 L 4.2929688 6.2929688 C 3.9019687 6.6839688 3.9019687 7.3170313 4.2929688 7.7070312 L 11.585938 15 L 4.2929688 22.292969 C 3.9019687 22.683969 3.9019687 23.317031 4.2929688 23.707031 L 6.2929688 25.707031 C 6.6839688 26.098031 7.3170313 26.098031 7.7070312 25.707031 L 15 18.414062 L 22.292969 25.707031 C 22.682969 26.098031 23.317031 26.098031 23.707031 25.707031 L 25.707031 23.707031 C 26.098031 23.316031 26.098031 22.682969 25.707031 22.292969 L 18.414062 15 L 25.707031 7.7070312 C 26.098031 7.3170312 26.098031 6.6829688 25.707031 6.2929688 L 23.707031 4.2929688 C 23.316031 3.9019687 22.682969 3.9019687 22.292969 4.2929688 L 15 11.585938 L 7.7070312 4.2929688 C 7.5115312 4.0974687 7.255875 4 7 4 z"></path>
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 32 32"
                        fill="currentColor"
                        className="h-[32px] w-[32px]"
                      >
                        <path d="M 0 7.5 L 0 12.5 L 50 12.5 L 50 7.5 Z M 0 22.5 L 0 27.5 L 50 27.5 L 50 22.5 Z M 0 37.5 L 0 42.5 L 50 42.5 L 50 37.5 Z"></path>
                      </svg>
                    )}
                  </button>

                  {isOpen && (
                    <div className="flex w-full">
                      <div className="absolute left-0 top-28 flex w-full rounded-lg bg-white text-black">
                        <div className="relative flex w-full flex-col items-start justify-center space-y-2 p-5">
                          <div className="flex w-full flex-col items-start justify-center space-y-2 md:hidden">
                            <Link
                              href={"#"}
                              onClick={() => setOpen(!isOpen)}
                              className="w-full px-2 py-4 hover:rounded-lg hover:bg-gray-200 hover:px-4"
                            >
                              Events
                            </Link>
                            <Link
                              href={"#"}
                              onClick={() => setOpen(!isOpen)}
                              className="w-full px-2 py-4 hover:rounded-lg hover:bg-gray-200 hover:px-4"
                            >
                              Partnership
                            </Link>
                            <hr className="w-full border bg-black" />
                          </div>
                          <Link
                            href={"/auth/register"}
                            className="w-full"
                            onClick={() => setOpen(!isOpen)}
                          >
                            <button className="w-full rounded-lg p-4 text-black outline outline-1 outline-black hover:bg-gray-200">
                              Register
                            </button>
                          </Link>
                          <Link
                            href={"/auth/login"}
                            className="w-full"
                            onClick={() => setOpen(!isOpen)}
                          >
                            <button className="w-full rounded-lg bg-red-600 p-4 text-white outline outline-1 outline-red-600 hover:bg-red-700">
                              Login
                            </button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
