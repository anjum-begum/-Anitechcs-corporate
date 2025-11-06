import ServiceCard from "../components/ServiceCard";
import Footer from "../components/Footer";

export default function Home() {
  const services = [
    { icon: "💻", title: "Web Development", description: "Modern, scalable websites with React, Angular, or Node.js." },
    { icon: "☁️", title: "Cloud Hosting", description: "Reliable cloud infrastructure with AWS & DigitalOcean." },
    { icon: "🔒", title: "Security & Support", description: "Continuous maintenance, audits, and 24/7 support." },
  ];

  return (
    <>
      <section className="bg-primary text-white text-center py-20">
        <h1 className="text-4xl font-bold mb-4">Empowering Your Digital Future</h1>
        <p className="max-w-2xl mx-auto text-lg mb-6">
          Innovative IT solutions that transform businesses through technology.
        </p>
        <a href="/contact" className="bg-white text-primary px-6 py-3 rounded-md font-semibold">
          Get a Quote
        </a>
      </section>

      <section className="py-16 bg-accent">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-center mb-10">Our Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((s, i) => <ServiceCard key={i} {...s} />)}
          </div>
        </div>
      </section>

      
    </>
  );
}
