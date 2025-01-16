import { BadgeDollarSign } from "lucide-react";

function HeaderTop() {
  return (
    <header className="bg-white px-10">
      <div className="mx-auto flex h-16 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8 font-bold ">
        <a className=" text-teal-600 items-center inline-flex" href="#">
          <span className="sr-only">Home</span>
          <BadgeDollarSign className="h-8 w-8" />
          Save'o{" "}
        </a>

        <div className="flex flex-1 items-center justify-end md:justify-between">
          <nav aria-label="Global" className="hidden md:block"></nav>

          <div className="flex items-center gap-4">
            <div className="sm:flex sm:gap-4">
              <ul className="flex items-center gap-6 text-sm">
                <li>
                  <a
                    className="text-gray-500 transition hover:text-teal-600"
                    href="#"
                  >
                    {" "}
                    About{" "}
                  </a>
                </li>

                <li>
                  <a
                    className="text-gray-500 transition hover:text-teal-600"
                    href="#"
                  >
                    {" "}
                    Projects{" "}
                  </a>
                </li>
              </ul>
            </div>

            <button className="block rounded bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75 md:hidden">
              <span className="sr-only">Toggle menu</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
export default HeaderTop;
