import Link from "next/link";
import React from "react";

function Navbar() {
  const pagesList = [
    { title: "Buy", link: "/buy-gold" },
    { title: "Sell", link: "/sell-gold" },
    { title: "Geo-Location", link: "/geolocation" },
    { title: "Lease", link: "/" },
    { title: "FAQ", link: "/" },
  ];

  const settings = ["My Profile", "Transactions", "Logout"];
  return (
    <div className="sm:block md:flex bg-[#6c9396] mb-2 p-4">
      <Link href="/">
        <h2 className="m-4 px-4">SafeGold</h2>
      </Link>
      {pagesList.map((pageLink) => {
        return (
          <Link className="m-3 px-2" key={pageLink.title} href={pageLink.link}>
            {pageLink.title}
          </Link>
        );
      })}
    </div>
  );
}

export default Navbar;
