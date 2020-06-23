import Link from 'next/link'

const Navigation = () => (
  <nav className="bg-gray-800">
    <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 container">
      <div className="relative flex items-center justify-between h-16">
        <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
          <div className="flex-shrink-0">
            <Link href="/">
              <img className="block lg:hidden h-8 w-auto" src="/logo.png" alt="hacker-news logo" />
            </Link>
            <Link href="/">
              <img className="hidden lg:block h-8 w-auto" src="/logo.png" alt="hacker-news logo" />
            </Link>
          </div>
          <div className="hidden sm:block sm:ml-6">
            <div className="flex">
              <Link href="/">
                <a  className="px-3 py-2 rounded-md text-sm font-medium leading-5 text-white bg-gray-900 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out">Hacker News</a>
              </Link>
              <Link href="/about">
                <a  className="ml-4 px-3 py-2 rounded-md text-sm font-medium leading-5 text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out">About</a>
              </Link>
              <Link href="/contact">
                <a className="ml-4 px-3 py-2 rounded-md text-sm font-medium leading-5 text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out">Contact</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
)


export default Navigation

// Examples
// const links = [
//   { href: "https://zeit.co/now", label: "ZEIT" },
//   { href: "https://github.com/zeit/next.js", label: "GitHub" }
// ].map(link => {
//   link.key = `nav-link-${link.href}-${link.label}`;
//   return link;
// });