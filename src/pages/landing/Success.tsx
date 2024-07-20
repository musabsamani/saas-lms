import SuccessStat from "./components/success/SuccessStat";

export default function Success() {
  return (
    <section className="section">
      <div className="container mx-auto">
        <div className="max-w-[750px] mx-auto text-center">
          <h1 className="capitalize text-5xl font-bold text-[#010514]">our success</h1>
          <p className="pt-5 pb-28 text-lg text-[#010514] text-opacity-80">
            Ornare id fames interdum porttitor nulla turpis etiam. Diam vitae sollicitudin at nec nam et pharetra gravida. Adipiscing a quis ultrices eu ornare tristique vel nisl orci.
          </p>
        </div>
        <div className="w-full flex flex-wrap flex-col md:flex-row justify-center items-center gap-y-20">
          <SuccessStat number="15k+" text="students" />
          <SuccessStat number="75%" text="total success" />
          <SuccessStat number="35" text="main questions" />
          <SuccessStat number="26" text="cheif experts" />
          <SuccessStat number="16" text="years of experience" />
        </div>
      </div>
    </section>
  );
}
