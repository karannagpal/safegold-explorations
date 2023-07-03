import Image from "next/image";

function InfoCard() {
  const copyText = "Why you must buy 24K Digital gold?";
  // box-shadow: 0px 1px 1px 0px #00000040
  return (
    <div className="info-card">
      <div className="card-heading3"> {copyText}</div>
      <div className="flex justify-between">
        <div>
          <Image
            src="images/capital-growth.svg"
            alt="Capital Growth"
            width={70}
            height={60}
            className="card-image"
          />
          <div className="card-heading5">
            Capital Growth
          </div>
        </div>
        <div>
          <Image
            src="images/sell-anytime.svg"
            alt="Capital Growth"
            width={63}
            height={70}
            className="card-image"
          />
          <div className="card-heading5">
            Sell Anytime
          </div>
        </div>
        <div>
          <Image
            src="images/secure-locker.svg"
            alt="Capital Growth"
            width={62}
            height={60}
            className="card-image"
          />
          <div className="card-heading5">
            100% Secure
          </div>
        </div>
      </div>
    </div>
  );
}

export default InfoCard;
