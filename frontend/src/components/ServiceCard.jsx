export default function ServiceCard({ icon, title, description }) {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-xl transition-shadow">
      <div className="text-primary text-4xl mb-4">{icon}</div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  );
}
