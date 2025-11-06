import { useState } from "react";
import axios from "axios";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "", service: "" });
  const [response, setResponse] = useState("");

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/contact", form);
      setResponse(res.data.message);
    } catch (err) {
      setResponse("Error sending message. Try again.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto">
      <input name="name" placeholder="Name" onChange={handleChange} className="border p-2 w-full" required />
      <input name="email" type="email" placeholder="Email" onChange={handleChange} className="border p-2 w-full" required />
      <select name="service" onChange={handleChange} className="border p-2 w-full">
        <option>Select Service</option>
        <option>Website Development</option>
        <option>Cloud Hosting</option>
        <option>Maintenance & Support</option>
      </select>
      <textarea name="message" placeholder="Message" onChange={handleChange} className="border p-2 w-full"></textarea>
      <button type="submit" className="bg-primary text-white px-4 py-2 rounded">Send Message</button>
      {response && <p>{response}</p>}
    </form>
  );
}
