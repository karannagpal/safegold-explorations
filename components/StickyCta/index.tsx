// import Checkbox from "@/assets/svg/Checkbox";
import FilledChevron from "@/assets/svg/FilledChevron";

function StickyCta() {
  return (
    <div className="p-[1px] pt-0 max-w-[360px] bg-gradient-to-b from-sg-dark-golden-500 to-sg-dark-green-900">
      <div className="bg-sg-dark-green-900">
        <div className="bg-sg-dark-golden-500 rounded-b-2xl m-[-1px] p-[1px] pt-0">
          <div className="bg-sg-dark-background rounded-b-2xl min-h-[16px]"></div>
        </div>
        <div className="flex justify-around p-6 pt-3">
          <div className="flex flex-col justify-around">
            <div className="mr-6">
              {/* <Checkbox custom_class="fill-sg-dark-secondary-300" /> */}
              <FilledChevron custom_class="fill-sg-dark-secondary-300" secondary_color="white" />
            </div>
          </div>
          <div className="text-xs w-72 text-sg-dark-grey-500">
            I authorize Karza Technologies Private Limited to access Aadhaar
            number and help me fetch my details. I understand that Karza will
            not be storing or sharing the same in any manner.
          </div>
        </div>
        <div className="p-4 pt-0 text-center text-white">
          <div className="golden-gradient-cta cta-inset-shadow h-12 rounded-3xl p-3 font-bold">
            Verify
          </div>
        </div>
      </div>
    </div>
  );
}

export default StickyCta;
