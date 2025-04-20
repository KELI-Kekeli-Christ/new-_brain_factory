import { motion } from "framer-motion";

export default function Team() {
  const teamMembers = [
    {
      id: 1,
      name: "KARBOU",
      role: "Ingénieur",
      bio: "Diplômé en ingénierie informatique au Sénégal, expert en développement web et applications mobiles.",
      image: "https://via.placeholder.com/400x400"
    },
    {
      id: 2,
      name: "KPELOU",
      role: "Ingénieur",
      bio: "Diplômé en ingénierie informatique en Inde, spécialisé en intelligence artificielle et machine learning.",
      image: "https://via.placeholder.com/400x400"
    },
    {
      id: 3,
      name: "MADJOULBA",
      role: "Technicien",
      bio: "Diplômé en réseaux au Sénégal, expert en infrastructure réseau et sécurité informatique.",
      image: "https://via.placeholder.com/400x400"
    },
    {
      id: 4,
      name: "KOUASSI",
      role: "Ingénieur",
      bio: "Diplômé en ingénierie informatique au Gabon, spécialisé en développement d'applications d'entreprise.",
      image: "https://via.placeholder.com/400x400"
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Notre Équipe</h1>
            <p className="text-xl text-blue-100">
              Rencontrez les experts qui font de Brain New Factory une entreprise d'exception
            </p>
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="relative">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-80 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-6 text-white">
                      <p className="text-sm">{member.bio}</p>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-blue-900 mb-1">{member.name}</h3>
                  <p className="text-blue-600">{member.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-blue-50 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-blue-900 mb-12">
            Nos Valeurs
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Innovation",
                description: "Nous repoussons les limites de la technologie pour créer des solutions uniques et innovantes."
              },
              {
                title: "Excellence",
                description: "Nous nous engageons à fournir un travail de qualité supérieure dans tous nos projets."
              },
              {
                title: "Collaboration",
                description: "Nous croyons en la force du travail d'équipe et de la collaboration avec nos clients."
              }
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-8 rounded-xl shadow-lg"
              >
                <h3 className="text-xl font-bold text-blue-900 mb-4">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-blue-900 mb-6">
              Rejoignez notre équipe
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Nous sommes toujours à la recherche de talents passionnés pour rejoindre
              notre équipe dynamique.
            </p>
            <button className="bg-blue-900 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-800 transition-colors">
              Postuler maintenant
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
} 