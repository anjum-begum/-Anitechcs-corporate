export default function Footer() {
  return (
    <footer className="bg-secondary text-gray-300 py-10 mt-16">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-6">
        <div>
          <h2 className="text-xl font-bold text-white mb-3">AnitechCS</h2>
          <p className="text-sm leading-relaxed">
            Empowering businesses through web, cloud, and software solutions.
            We build reliable digital infrastructure that scales.
          </p>
        </div>

        <div>
          <h3 className="font-semibold text-white mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/" className="hover:text-primary">Home</a></li>
            <li><a href="/about" className="hover:text-primary">About</a></li>
            <li><a href="/services" className="hover:text-primary">Services</a></li>
            <li><a href="/pricing" className="hover:text-primary">Pricing</a></li>
            <li><a href="/contact" className="hover:text-primary">Contact</a></li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-white mb-3">Services</h3>
          <ul className="space-y-2 text-sm">
            <li>Web Development</li>
            <li>Cloud Hosting</li>
            <li>Digital Marketing</li>
            <li>Software Integration</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-white mb-3">Contact</h3>
          <p className="text-sm">
            📍 Bengaluru, India <br />
            📧 contact@anitechcs.com <br />
            ☎️ +91-9876543210
          </p>
        </div>
      </div>

      <div className="text-center text-gray-400 text-sm mt-10 border-t border-gray-700 pt-4">
        © {new Date().getFullYear()} AnitechCS. All rights reserved.
      </div>
    </footer>
  );
}
