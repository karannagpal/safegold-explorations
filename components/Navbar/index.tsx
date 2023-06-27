import React from "react";

function Navbar() {
  const pagesList = [
    { title: "Home", link: "/" },
    { title: "Buy", link: "/" },
    { title: "Sell", link: "/" },
    { title: "Gift", link: "/" },
    { title: "Buy Coins", link: "/" },
    { title: "SIP", link: "/" },
    { title: "Jewellery", link: "/" },
    { title: "FAQ", link: "/" },
  ];

  const settings = ["My Profile", "Transactions", "Logout"];
  return (
    <div className="flex bg-[#f7f7f7] dark:bg-[#1b383d] mb-2">
      <h2 className="m-4 px-4">(Logo)</h2>
      {pagesList.map((pageLink) => {
        return (
          <h4 className="m-4 px-4" key={pageLink.title}>
            {pageLink.title}
          </h4>
        );
      })}
    </div>
  );
}

export default Navbar;
