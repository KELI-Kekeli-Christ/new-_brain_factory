import { motion } from "framer-motion";

export default function Services() {
  const services = [
    {
      title: "Développement Web",
      description: "Création de sites web modernes et d'applications sur mesure",
      features: [
        "Sites web responsifs",
        "Applications web progressives",
        "E-commerce",
        "API et intégrations"
      ],
      icon: "💻"
    },
    {
      title: "Design Graphique",
      description: "Identité visuelle et supports de communication professionnels",
      features: [
        "Logo et charte graphique",
        "Brochures et catalogues",
        "Affiches et bannières",
        "Design d'interface"
      ],
      icon: "🎨"
    },
    {
      title: "Marketing Digital",
      description: "Stratégies digitales pour augmenter votre visibilité en ligne",
      features: [
        "SEO et référencement",
        "Gestion des réseaux sociaux",
        "Email marketing",
        "Publicité en ligne"
      ],
      icon: "📈"
    },
    {
      title: "Hébergement Web",
      description: "Solutions d'hébergement sécurisées et performantes",
      features: [
        "Hébergement mutualisé",
        "Serveurs dédiés",
        "Cloud computing",
        "Maintenance et support"
      ],
      icon: "☁️"
    }
  ];

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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Nos Services</h1>
            <p className="text-xl text-blue-100">
              Des solutions digitales complètes pour votre entreprise
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="text-4xl mr-4">{service.icon}</div>
                    <h2 className="text-2xl font-bold text-blue-900">{service.title}</h2>
                  </div>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <ul className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <span className="text-blue-600 mr-2">✓</span>
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-50 py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-blue-900 mb-6">
              Prêt à transformer votre entreprise ?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Contactez-nous dès aujourd'hui pour discuter de votre projet et découvrir
              comment nous pouvons vous aider à atteindre vos objectifs.
            </p>
            <button className="bg-blue-900 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-800 transition-colors">
              Contactez-nous
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
} 