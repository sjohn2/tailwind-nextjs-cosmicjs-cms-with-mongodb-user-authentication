import { Fragment, useEffect, useState } from 'react';

import { Popover, Transition } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import { ChevronDownIcon } from '@heroicons/react/solid';
import { getCookie } from 'cookies-next';
import Link from 'next/link';

const teams = [
  {
    name: 'Alfa Romeo',
    href: '#',
  },
  {
    name: 'Ferrari',

    href: '#',
  },
  {
    name: 'McLaren',

    href: '#',
  },
  {
    name: 'Mercedes',

    href: '#',
  },
];

const schedule = [
  {
    name: 'Full Schedule',
    href: '#',
  },
  {
    name: 'Race Programme',

    href: '#',
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Nav() {
  const [authToken, setAuthToken] = useState("");

  const cookies = getCookie("authToken_abc");
  let cookiesValue = cookies;
  let cookieFlag = true;
  console.log(cookiesValue);
  if (cookiesValue) {
    if (cookiesValue === "00") {
      console.log(cookiesValue);
      cookieFlag = false;
    }
  } else {
    cookieFlag = false;
  }
  

  useEffect(() => {
    setAuthToken(cookieFlag);
  }, []);

  return (
    <Popover className="relative bg-red-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center py-4 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <Link href="/">
              <img
                className="h-8 w-auto sm:h-10"
                src="https://www.formula1.com/etc/designs/fom-website/images/f1_logo.svg"
                alt=""
              />
            </Link>
          </div>
          <div className="-mr-2 -my-2 md:hidden">
            <Popover.Button className="bg-red-900 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-white hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-red-500">
              <span className="sr-only">Open menu</span>
              <MenuIcon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>
          <Popover.Group as="nav" className="hidden md:flex space-x-10">
            <Popover className="relative">
              {({ open }) => (
                <>
                  <Popover.Button
                    className={classNames(
                      open ? 'text-gray-900' : 'text-white',
                      'group bg-red-900 rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500'
                    )}
                  >
                    <span>Schedule</span>
                    <ChevronDownIcon
                      className={classNames(
                        open ? 'text-gray-600' : 'text-gray-400',
                        'ml-2 h-5 w-5 group-hover:text-white'
                      )}
                      aria-hidden="true"
                    />
                  </Popover.Button>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1"
                  >
                    <Popover.Panel className="absolute z-15 -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2">
                      <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                        <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                          {schedule.map((item) => (
                            <a
                              key={item.name}
                              href={item.href}
                              className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                            >
                              <div className="ml-4">
                                <p className="text-base font-medium text-gray-900">
                                  {item.name}
                                </p>
                              </div>
                            </a>
                          ))}
                        </div>
                      </div>
                    </Popover.Panel>
                  </Transition>
                </>
              )}
            </Popover>

            <a
              href="#"
              className="text-base font-medium text-white hover:text-gray-900"
            >
              Latest
            </a>

            <Popover className="relative">
              {({ open }) => (
                <>
                  <Popover.Button
                    className={classNames(
                      open ? 'text-gray-900' : 'text-white',
                      'group bg-red-900 rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500'
                    )}
                  >
                    <span>Teams</span>
                    <ChevronDownIcon
                      className={classNames(
                        open ? 'text-gray-600' : 'text-gray-400',
                        'ml-2 h-5 w-5 group-hover:text-white'
                      )}
                      aria-hidden="true"
                    />
                  </Popover.Button>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1"
                  >
                    <Popover.Panel className="absolute z-15 -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2">
                      <div className=" relative z-15 rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                        <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                          {teams.map((item) => (
                            <a
                              key={item.name}
                              href={item.href}
                              className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                            >
                              <div className="ml-4">
                                <p className="text-base font-medium text-gray-900">
                                  {item.name}
                                </p>
                              </div>
                            </a>
                          ))}
                        </div>
                      </div>
                    </Popover.Panel>
                  </Transition>
                </>
              )}
            </Popover>

            <a
              href="#"
              className="text-base font-medium text-white hover:text-gray-900"
            >
              Drivers
            </a>

            <a
              href="#"
              className="text-base font-medium text-white hover:text-gray-900"
            >
              Store
            </a>
            <a
              href="#"
              className="text-base font-medium text-white hover:text-gray-900"
            >
              Videos
            </a>
            <a
              href="#"
              className="text-base font-medium text-white hover:text-gray-900"
            >
              Gaming
            </a>
          </Popover.Group>
          <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
            <a
              href="#"
              className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-red-600 hover:bg-red-700"
            >
              Ticket
            </a>

            {authToken && (
              <Link
                href={{
                  pathname: '/account/login',
                  query: { exit: '0' },
                }}
              >
                <a className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-red-600 hover:bg-red-700">
                  Sign Out
                </a>
              </Link>
            )}

            {!authToken && (
              <a
                href="/account/login"
                className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-red-600 hover:bg-red-700"
              >
                Sign In
              </a>
            )}
          </div>
        </div>
      </div>

      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel
          focus
          className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
        >
          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
            <div className="pt-5 pb-6 px-5">
              <div className="flex items-center justify-end">
                <div className="-mr-2">
                  <Popover.Button className="bg-red-500 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-white hover:bg-red-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-red-500">
                    <span className="sr-only">Close menu</span>
                    <XIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>

              <div className="py-6 px-1 space-y-6">
                <nav className="grid grid-cols-2 gap-y-4 gap-x-8">
                  {schedule.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="text-base font-medium text-black hover:text-gray-900"
                    >
                      {item.name}
                    </a>
                  ))}
                </nav>
              </div>
              <div className="py-6 px-1 space-y-6">
                <nav className="grid grid-cols-2 gap-y-4 gap-x-8">
                  {teams.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="text-base font-medium text-black hover:text-gray-900"
                    >
                      {item.name}
                    </a>
                  ))}
                </nav>
              </div>
            </div>
            <div className="py-6 px-5 space-y-6">
              <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                <a
                  href="#"
                  className="text-base font-medium text-black hover:text-gray-900"
                >
                  Drivers
                </a>
                <a
                  href="#"
                  className="text-base font-medium text-black hover:text-gray-900"
                >
                  Gaming
                </a>
                <a
                  href="#"
                  className="text-base font-medium text-black hover:text-gray-900"
                >
                  Store
                </a>
                <a
                  href="#"
                  className="text-base font-medium text-black hover:text-gray-900"
                >
                  Videos
                </a>
              </div>
              <div>
                <a
                  href="#"
                  className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-red-600 hover:bg-red-700"
                >
                  Ticket
                </a>
              </div>
              <div>
                <a
                  href="/account/login"
                  className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-red-600 hover:bg-red-700"
                >
                  Sign In
                </a>
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}

export const getInitialProps = async ({ query }) => {
  const { exit } = query;
  return { exit };
};
