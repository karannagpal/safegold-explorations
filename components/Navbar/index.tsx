import Link from "next/link";
import React from "react";

function Navbar() {
  const pagesList = [
    { title: "Buy", link: "/buy-gold" },
    { title: "Sell", link: "/sell-gold" },
    { title: "Gift", link: "/" },
    { title: "Buy Coins", link: "/" },
    { title: "SIP", link: "/" },
    { title: "Jewellery", link: "/" },
    { title: "FAQ", link: "/" },
  ];

  const settings = ["My Profile", "Transactions", "Logout"];
  return (
    <div className="flex bg-[#f7f7f7] dark:bg-[#1b383d] mb-2">
      <Link href="/">
        <h2 className="m-4 px-4">SafeGold</h2>
      </Link>
      {pagesList.map((pageLink) => {
        return (
          <Link className="m-4 px-4" key={pageLink.title} href={pageLink.link}>
            {pageLink.title}
          </Link>
        );
      })}
    </div>
  );
}

export default Navbar;
