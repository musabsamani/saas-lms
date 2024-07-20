import Button from "./buttons/Button";

export default function Footer() {
  return (
    <section className="section footer bg-[#252641] !py-20">
      <div className="container mx-auto flex flex-col items-center gap-16">
        <div className="flex flex-col lg:flex-row justify-between items-center w-[400px] text-white">
          <div className="logo text-center w-1/3 relative">
            <span className="!z-0"></span>
            <span className="!z-10 relative bold text-3xl tracking-widest">TOTC</span>
          </div>
          <span className="w-[2px] h-20 lg:bg-[#626381]"></span>
          <p>Virtual Class for Zoom</p>
        </div>
        <div className="flex flex-col gap-10 items-center">
          <p className="font-medium text-2xl text-[#B2B3CF]">Subscribe to get our Newsletter</p>
          <form onSubmit={(e) => e.preventDefault()} className="flex flex-col lg:flex-row gap-5">
            <input type="text" placeholder="Your Email" className="w-[400px] bg-transparent border-2 border-[#83839A] px-8 py-3 rounded-3xl text-xl text-[#83839A]" />
            <Button type="submit" className="font-medium text-xl bg-[#49BBBD] text-white">
              Subscribe
            </Button>
          </form>
        </div>
        <div className="text-[#B2B3CF] flex flex-col lg:flex-row lg:items-center gap-10">
          <ul className="list-none flex flex-col lg:flex-row lg:divide-x-2 divide-[#B2B3CF]">
            <li className="px-5">Careers</li>
            <li className="px-5">Privacy Policy</li>
            <li className="px-5">Terms and Conditions</li>
          </ul>
          <p>© 2021 Class Technologies Inc. All rights reserved</p>
        </div>
      </div>
    </section>
  );
}
