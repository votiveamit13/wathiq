import ContactUs from "@/components/ContactUs";
import DownloadApp from "@/components/DownloadApp";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import HowToStart from "@/components/HowToStart";
import Packages from "@/components/Packages";
import PaymentMethods from "@/components/PaymentMethods";
import WhyChooseUs from "@/components/WhyChooseUs";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <div className="container-fluid mx-auto">
          <HowToStart/>
          <WhyChooseUs/>
          <div className="py-20">
            <PaymentMethods />
          </div>
          <div className="py-5">
            <DownloadApp/>
          </div>
          <div className="py-10">
            <Packages/>
          </div>
          <div className="py-2">
            <ContactUs/>
          </div>
          <div className="">
            <Footer/>
          </div>
        </div>
      </main>
    </>
  );
}
