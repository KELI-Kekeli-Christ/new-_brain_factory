import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 to-blue-700 text-white py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">À propos de nous</h1>
            <p className="text-xl text-blue-100">
              Découvrez notre histoire, notre vision et notre passion pour l'innovation digitale
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold text-blue-900 mb-6">Notre Histoire</h2>
              <p className="text-gray-600 mb-4">
                Fondée en 2019, Brain New Factory est née d'une passion commune pour l'innovation
                et la transformation digitale. Notre équipe d'experts travaille sans relâche pour
                offrir des solutions technologiques de pointe à nos clients.
              </p>
              <p className="text-gray-600">
                Nous croyons que chaque entreprise mérite d'avoir une présence digitale forte
                et efficace. C'est pourquoi nous nous engageons à fournir des services de
                qualité supérieure, adaptés aux besoins spécifiques de chaque client.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-blue-50 p-8 rounded-xl"
            >
              <h3 className="text-2xl font-bold text-blue-900 mb-4">Notre Mission</h3>
              <ul className="space-y-4">
                {[
                  "Fournir des solutions digitales innovantes et performantes",
                  "Accompagner nos clients dans leur transformation digitale",
                  "Promouvoir l'excellence et la qualité dans tous nos services",
                  "Créer des expériences utilisateur exceptionnelles"
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-blue-600 mr-2">✓</span>
                    <span className="text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Stats Section */}
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "100+", label: "Projets réalisés" },
              { number: "50+", label: "Clients satisfaits" },
              { number: "5+", label: "Années d'expérience" },
              { number: "15+", label: "Experts dédiés" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl font-bold text-blue-900 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
} 