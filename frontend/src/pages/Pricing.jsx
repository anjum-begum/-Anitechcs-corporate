import Footer from "../components/Footer";

export default function Pricing() {
  const plans = [
    { name: "Starter", price: "$199", features: ["1 Website", "Basic SEO", "Email Support"] },
    { name: "Professional", price: "$499", features: ["5 Pages", "Advanced SEO", "Priority Support"] },
    { name: "Enterprise", price: "$999", features: ["Custom Solution", "Dedicated Manager", "24/7 Support"] },
  ];

  return (
    <>
      <section className="py-20 text-center bg-accent">
        <h1 className="text-3xl font-bold mb-10">Pricing Plans</h1>
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 px-6">
          {plans.map((plan) => (
            <div key={plan.name} className="bg-white shadow-md rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>
              <p className="text-primary text-3xl font-bold mb-4">{plan.price}</p>
              <ul className="text-gray-600 space-y-2 mb-4">
                {plan.features.map((f, i) => <li key={i}>✅ {f}</li>)}
              </ul>
              <a href="/contact" className="bg-primary text-white px-4 py-2 rounded">Choose Plan</a>
            </div>
          ))}
        </div>
      </section>
      
    </>
  );
}
