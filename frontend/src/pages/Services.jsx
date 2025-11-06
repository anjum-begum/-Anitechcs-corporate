import ServiceCard from "../components/ServiceCard";
import Footer from "../components/Footer";

export default function Services() {
  const services = [
    { icon: "🧠", title: "AI & Automation", description: "Intelligent process automation and data insights." },
    { icon: "📱", title: "Mobile Apps", description: "Cross-platform mobile solutions with Flutter & React Native." },
    { icon: "🛒", title: "E-Commerce", description: "Secure, scalable online stores built for performance." },
  ];

  return (
    <>
      <section className="py-20 bg-accent text-center">
        <h1 className="text-3xl font-bold mb-10">Our Expertise</h1>
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 px-6">
          {services.map((s, i) => <ServiceCard key={i} {...s} />)}
        </div>
      </section>
      
    </>
  );
}
