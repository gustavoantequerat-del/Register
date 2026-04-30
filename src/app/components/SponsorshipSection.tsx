import imgFactorIt from "../../imports/Html→Body/4cd7b5f6114917fb921cd86bf993378c04283b0d.png";
import imgINadvance from "../../imports/Html→Body/78b367cbb135d870033ba249ac1ddd6da2f9069e.png";

export function SponsorshipSection() {
  return (
    <section className="bg-[#f8fafc] border-t border-[#f1f5f9] py-8 sm:py-12 md:py-16 px-4 sm:px-6 md:px-12">
      <div className="max-w-[896px] mx-auto text-center space-y-6 sm:space-y-8">
        <p className="text-[#3b4a40] text-sm sm:text-base uppercase tracking-wide">CON EL APOYO DE</p>

        <div className="flex items-center justify-center gap-8 sm:gap-12 md:gap-24 opacity-60 mix-blend-luminosity flex-wrap">
          <img src={imgFactorIt} alt="Factor It" className="h-8 sm:h-10 w-auto" />
          <img src={imgINadvance} alt="INadvance" className="h-8 sm:h-10 w-auto" />
        </div>
      </div>
    </section>
  );
}
