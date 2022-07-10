const CTABanner = () => (
  <div className="text-center flex flex-col p-4 sm:text-left sm:flex-row sm:items-center sm:justify-between sm:p-12 bg-black-900 text-white  rounded-md">
    <div className="text-2xl font-semibold">
      <div className="text-white">
        Register now to recieve updates about your favorite team
      </div>
    </div>
    <a
      href="/account/login"
      className=" flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-red-600 hover:bg-red-700"
    >
      Get Started!
    </a>
    <div className="whitespace-no-wrap mt-3 sm:mt-0 sm:ml-2"></div>
  </div>
);

export { CTABanner };
