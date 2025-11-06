import { useState } from "react";
import axios from "axios";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", service: "", message: "" });
  const [response, setResponse] = useState("");

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/contact", form);
      setResponse(res.data.message || "Message sent!");
    } catch (err) {
      setResponse("Error sending message. Try again.");
    }
  };

  return (
    <>
      <section className="py-20 bg-accent text-center">
        <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
        <p className="max-w-2xl mx-auto text-gray-600">
          We’d love to hear from you! Fill out the form below and our team will reach out soon.
        </p>

        <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-10 space-y-4 text-left">
          <input name="name" onChange={handleChange} placeholder="Your Name" className="w-full border p-2 rounded" required />
          <input name="email" type="email" onChange={handleChange} placeholder="Your Email" className="w-full border p-2 rounded" required />
          <select name="service" onChange={handleChange} className="w-full border p-2 rounded">
            <option value="">Select a Service</option>
            <option>Web Development</option>
            <option>Cloud Hosting</option>
            <option>Maintenance</option>
          </select>
          <textarea name="message" onChange={handleChange} placeholder="Your Message" className="w-full border p-2 rounded h-32" required />
          <button type="submit" className="bg-primary text-white px-4 py-2 rounded">Send Message</button>
          {response && <p className="text-sm text-gray-600 mt-2">{response}</p>}
        </form>
      </section>
    </>
  );
}
