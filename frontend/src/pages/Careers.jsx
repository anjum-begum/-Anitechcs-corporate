import Footer from "../components/Footer";

export default function Careers() {
  const openings = [
    { role: "Frontend Developer", location: "Remote / Bengaluru", type: "Full-time" },
    { role: "UI/UX Designer", location: "Remote", type: "Contract" },
  ];

  return (
    <>
      <section className="py-20 bg-accent text-center">
        <h1 className="text-3xl font-bold mb-6">Careers at AnitechCS</h1>
        <p className="max-w-2xl mx-auto text-gray-600 mb-12">
          Join our passionate team of developers, designers, and thinkers who create impactful digital products.
        </p>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8 px-6">
          {openings.map((job, i) => (
            <div key={i} className="bg-white shadow-md p-6 rounded-lg text-left">
              <h3 className="text-lg font-semibold">{job.role}</h3>
              <p className="text-gray-600 text-sm">{job.location}</p>
              <p className="text-primary font-medium mt-2">{job.type}</p>
              <a href="/contact" className="inline-block mt-4 text-primary hover:underline">
                Apply Now →
              </a>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
