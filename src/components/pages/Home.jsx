import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 to-blue-700 text-white py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/src/assets/pattern.svg')] opacity-10"></div>
        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Innovation & Créativité Digitale
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8">
              Transformons vos idées en solutions digitales modernes et performantes
            </p>
            <div className="flex gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-blue-900 px-8 py-3 rounded-full font-semibold hover:bg-blue-100 transition-colors"
              >
                Contactez-nous
              </Link>
              <Link
                to="/services"
                className="border-2 border-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-900 transition-colors"
              >
                Nos Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-900 mb-12">
            Nos Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Développement Web",
                description: "Sites web modernes et applications sur mesure",
                icon: "💻"
              },
              {
                title: "Design Graphique",
                description: "Identité visuelle et supports de communication",
                icon: "🎨"
              },
              {
                title: "Marketing Digital",
                description: "Stratégies digitales pour votre croissance",
                icon: "📈"
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-blue-50 p-8 rounded-xl text-center hover:shadow-lg transition-shadow"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-blue-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
