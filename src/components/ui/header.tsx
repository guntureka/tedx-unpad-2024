"use client";

import { type Session } from "next-auth";
import { signOut } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";

const Header = ({ session }: { session: Session | null }) => {
  const [isOpen, setOpen] = useState<boolean>(false);
  const pathname = usePathname();
  return (
    <header className="flex w-full ">
      <div className="fixed z-[100] top-[30px] flex w-full lg:px-20 px-10">
        <div className="relative flex w-full justify-between items-center rounded-lg bg-[#FAFAFA] p-5">
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
          <div className=" hidden md:flex">
            {pathname.includes("/profile") ? (
              <div className="flex justify-center items-center gap-4 text-black">
                <Link href={"#"} className="text-black">
                  Profile
                </Link>
                <Link href={"#"} className="text-black">
                  Submission
                </Link>
              </div>
            ) : (
              <div className="flex justify-center items-center gap-4 text-black">
                <Link href={"#"} className="text-black">
                  Event
                </Link>
                <Link href={"#"} className="text-black">
                  Partnership
                </Link>
              </div>
            )}
          </div>
          {/* ------------------------- Right Menu -------------------------- */}
          <div>
            {session?.user ? (
              <div className="flex justify-center items-center">
                <button
                  className="text-black p-2"
                  onClick={() => setOpen(!isOpen)}
                >
                  {isOpen ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 32 32"
                      fill="currentColor"
                      className="h-[24px] w-[24px]"
                    >
                      <path d="M 7 4 C 6.744125 4 6.4879687 4.0974687 6.2929688 4.2929688 L 4.2929688 6.2929688 C 3.9019687 6.6839688 3.9019687 7.3170313 4.2929688 7.7070312 L 11.585938 15 L 4.2929688 22.292969 C 3.9019687 22.683969 3.9019687 23.317031 4.2929688 23.707031 L 6.2929688 25.707031 C 6.6839688 26.098031 7.3170313 26.098031 7.7070312 25.707031 L 15 18.414062 L 22.292969 25.707031 C 22.682969 26.098031 23.317031 26.098031 23.707031 25.707031 L 25.707031 23.707031 C 26.098031 23.316031 26.098031 22.682969 25.707031 22.292969 L 18.414062 15 L 25.707031 7.7070312 C 26.098031 7.3170312 26.098031 6.6829688 25.707031 6.2929688 L 23.707031 4.2929688 C 23.316031 3.9019687 22.682969 3.9019687 22.292969 4.2929688 L 15 11.585938 L 7.7070312 4.2929688 C 7.5115312 4.0974687 7.255875 4 7 4 z"></path>
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-[24px] w-[24px]"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  )}
                </button>

                {isOpen && (
                  <div className="w-full flex">
                    <div className="absolute top-28 left-0 w-full flex bg-white text-black rounded-lg">
                      <div className="relative flex flex-col justify-center items-start w-full p-5 space-y-2">
                        <div className=" flex-col justify-center items-start w-full space-y-2 md:flex">
                          <div
                            className={`${
                              pathname.includes("/profile")
                                ? `flex md:hidden `
                                : ` `
                            }flex flex-col justify-center items-start w-full space-y-2 `}
                          >
                            <Link
                              href={"/profile"}
                              onClick={() => setOpen(!isOpen)}
                              className="py-4 px-2 hover:px-4 w-full hover:bg-gray-200 hover:rounded-lg"
                            >
                              Profile
                            </Link>
                            <Link
                              href={"/profile"}
                              onClick={() => setOpen(!isOpen)}
                              className="py-4 px-2 hover:px-4 w-full hover:bg-gray-200 hover:rounded-lg"
                            >
                              Submission
                            </Link>
                            <hr className="bg-black w-full border" />
                          </div>
                          <div
                            className={`${
                              pathname.includes("/profile")
                                ? ``
                                : `flex md:hidden `
                            }flex flex-col justify-center items-start w-full space-y-2 `}
                          >
                            <Link
                              href={"/profile"}
                              onClick={() => setOpen(!isOpen)}
                              className="py-4 px-2 hover:px-4 w-full hover:bg-gray-200 hover:rounded-lg"
                            >
                              Events
                            </Link>
                            <Link
                              href={"/profile"}
                              onClick={() => setOpen(!isOpen)}
                              className="py-4 px-2 hover:px-4 w-full hover:bg-gray-200 hover:rounded-lg"
                            >
                              Partnership
                            </Link>
                            <hr className="bg-black w-full border" />
                          </div>
                          <button
                            className="rounded-lg text-white bg-red-600 p-4 hover:bg-red-700 w-full"
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
                <div className="md:flex justify-center items-center gap-4 hidden">
                  <Link href={"/auth/register"}>
                    <button className="outline-black outline outline-1 rounded-lg py-2 px-4  text-black hover:bg-gray-200">
                      Register
                    </button>
                  </Link>
                  <Link href={"/auth/login"}>
                    <button className="rounded-lg bg-red-600 py-2 px-4 hover:bg-red-700">
                      Login
                    </button>
                  </Link>
                </div>
                <div className="flex justify-center items-center md:hidden">
                  <button
                    className="text-black p-2"
                    onClick={() => setOpen(!isOpen)}
                  >
                    {isOpen ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 32 32"
                        fill="currentColor"
                        className="h-[24px] w-[24px]"
                      >
                        <path d="M 7 4 C 6.744125 4 6.4879687 4.0974687 6.2929688 4.2929688 L 4.2929688 6.2929688 C 3.9019687 6.6839688 3.9019687 7.3170313 4.2929688 7.7070312 L 11.585938 15 L 4.2929688 22.292969 C 3.9019687 22.683969 3.9019687 23.317031 4.2929688 23.707031 L 6.2929688 25.707031 C 6.6839688 26.098031 7.3170313 26.098031 7.7070312 25.707031 L 15 18.414062 L 22.292969 25.707031 C 22.682969 26.098031 23.317031 26.098031 23.707031 25.707031 L 25.707031 23.707031 C 26.098031 23.316031 26.098031 22.682969 25.707031 22.292969 L 18.414062 15 L 25.707031 7.7070312 C 26.098031 7.3170312 26.098031 6.6829688 25.707031 6.2929688 L 23.707031 4.2929688 C 23.316031 3.9019687 22.682969 3.9019687 22.292969 4.2929688 L 15 11.585938 L 7.7070312 4.2929688 C 7.5115312 4.0974687 7.255875 4 7 4 z"></path>
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 32 32"
                        fill="currentColor"
                        className="h-[24px] w-[24px]"
                      >
                        <path d="M 0 7.5 L 0 12.5 L 50 12.5 L 50 7.5 Z M 0 22.5 L 0 27.5 L 50 27.5 L 50 22.5 Z M 0 37.5 L 0 42.5 L 50 42.5 L 50 37.5 Z"></path>
                      </svg>
                    )}
                  </button>

                  {isOpen && (
                    <div className="w-full flex">
                      <div className="absolute top-28 left-0 w-full flex bg-white text-black rounded-lg">
                        <div className="relative flex flex-col justify-center items-start w-full p-5 space-y-2">
                          <div className=" md:hidden flex-col justify-center items-start w-full space-y-2 flex">
                            <Link
                              href={"#"}
                              onClick={() => setOpen(!isOpen)}
                              className="py-4 px-2 hover:px-4 w-full hover:bg-gray-200 hover:rounded-lg"
                            >
                              Events
                            </Link>
                            <Link
                              href={"#"}
                              onClick={() => setOpen(!isOpen)}
                              className="py-4 px-2 hover:px-4 w-full hover:bg-gray-200 hover:rounded-lg"
                            >
                              Partnership
                            </Link>
                            <hr className="bg-black w-full border" />
                          </div>
                          <Link
                            href={"/auth/register"}
                            className="w-full"
                            onClick={() => setOpen(!isOpen)}
                          >
                            <button className="outline-black outline outline-1 rounded-lg p-4  text-black hover:bg-gray-200 w-full">
                              Register
                            </button>
                          </Link>
                          <Link
                            href={"/auth/login"}
                            className="w-full"
                            onClick={() => setOpen(!isOpen)}
                          >
                            <button className="rounded-lg text-white bg-red-600 p-4 outline outline-red-600 outline-1 hover:bg-red-700 w-full">
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
