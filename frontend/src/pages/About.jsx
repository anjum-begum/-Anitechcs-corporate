import Footer from "../components/Footer";

export default function About() {
  return (
    <>
      <section className="py-20 text-center bg-accent">
        <h1 className="text-3xl font-bold mb-4">About AnitechCS</h1>
        <p className="max-w-3xl mx-auto text-gray-600">
          AnitechCS is a technology-driven company offering innovative software, cloud, and web solutions.
          We aim to empower businesses with cutting-edge technologies that drive digital transformation.
        </p>
      </section>

      <section className="max-w-5xl mx-auto px-6 py-12">
        <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
        <p className="text-gray-700 leading-relaxed">
          To deliver high-quality digital products that meet global standards, ensuring scalability,
          performance, and long-term client success.
        </p>
      </section>
    </>
  );
}
