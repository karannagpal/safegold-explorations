// react imports
import { useEffect, useState } from "react";

// nextjs imports
import Link from "next/link";

// third party imports
import { useTheme } from "next-themes";

function Navbar() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true));

  const { theme, setTheme } = useTheme();

  const pagesList = [
    { title: "Buy", link: "/buy-gold" },
    { title: "Sell", link: "/sell-gold" },
    { title: "Geo-Location", link: "/geolocation" },
    { title: "Lease", link: "/" },
    { title: "FAQ", link: "/" },
  ];

  const settings = ["My Profile", "Transactions", "Logout"];
  return (
    <div className="sm:block md:flex bg-[#6c9396] p-4">
      <Link href="/">
        <h2 className="m-2 px-4">SafeGold</h2>
      </Link>
      {pagesList.map((pageLink) => {
        return (
          <Link className="m-2 px-4" key={pageLink.title} href={pageLink.link}>
            {pageLink.title}
          </Link>
        );
      })}
      <div className="m-2 px-4">
        <button
          className="btn"
          onClick={() => {
            setTheme(theme === "dark" ? "light" : "dark");
          }}
        >
          Switch to {theme === "dark" ? "light" : "dark"} theme
        </button>
      </div>
    </div>
  );
}

export default Navbar;
