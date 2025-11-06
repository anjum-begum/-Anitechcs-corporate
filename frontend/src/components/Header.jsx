import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-secondary text-white px-6 py-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold">AnitechCS</h1>
      <nav className="space-x-4">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/services">Services</Link>
        <Link to="/pricing">Pricing</Link>
        <Link to="/careers">Careers</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </header>
  );
}
