import React from 'react';

const Coffee = () => {
  return (
    <div className="fixed inset-x-0 lg:inset-x-auto bottom-6 lg:right-8 xl:right-10 xl:bottom-8 z-20">
      <div className="lg:w-72 px-6 lg:px-0">
        <div className="p-2 bg-blue-600 rounded-lg shadow-lg sm:p-3">
          <div className="flex flex-wrap items-center justify-between">
            <a
              target="_blank"
              href="https://www.buymeacoffee.com/khatabwedaa"
              className="flex items-center flex-1 w-0"
            >
              <span className="flex p-2 bg-blue-800 rounded-lg">
                <svg
                  className="h-6 w-6 text-white"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.12954 3.00772C5.48563 2.38457 6.14831 2 6.86603 2H17.134C17.8517 2 18.5144 2.38457 18.8704 3.00772L20.0133 5.00772C20.6612 6.14163 20.0618 7.51107 18.9235 7.89532C18.9276 7.97661 18.9269 8.0591 18.9209 8.14249L18.0638 20.1425C17.989 21.1891 17.1181 22 16.0689 22H7.9311C6.88182 22 6.01094 21.1891 5.93618 20.1425L5.07904 8.14249C5.07308 8.0591 5.07231 7.97661 5.07645 7.89531C3.93813 7.51105 3.33874 6.14162 3.98668 5.00772L5.12954 3.00772ZM7.07396 8L7.28824 11H16.7117L16.926 8H7.07396ZM7.71681 17L7.9311 20H16.0689L16.2831 17H7.71681ZM18.2768 6L17.134 4L6.86603 4L5.72317 6H18.2768Z"
                    fill="currentColor"
                  />
                </svg>
              </span>

              <p className="ml-3 font-medium tracking-wide text-white truncate">
                By me a coffee
              </p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Coffee;
