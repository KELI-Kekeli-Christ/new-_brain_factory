import { motion } from "framer-motion";
import { useState } from "react";

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState("all");

  const projects = [
    {
      id: 1,
      title: "Site E-commerce",
      category: "web",
      image: "https://via.placeholder.com/600x400",
      description: "Plateforme de vente en ligne complète avec système de paiement intégré"
    },
    {
      id: 2,
      title: "Application Mobile",
      category: "mobile",
      image: "https://via.placeholder.com/600x400",
      description: "Application mobile native pour la gestion de tâches"
    },
    {
      id: 3,
      title: "Logo Design",
      category: "design",
      image: "https://via.placeholder.com/600x400",
      description: "Identité visuelle pour une entreprise de technologie"
    },
    {
      id: 4,
      title: "Site Vitrine",
      category: "web",
      image: "https://via.placeholder.com/600x400",
      description: "Site web moderne pour une entreprise de services"
    },
    {
      id: 5,
      title: "Application Web",
      category: "web",
      image: "https://via.placeholder.com/600x400",
      description: "Application web progressive pour la gestion de projets"
    },
    {
      id: 6,
      title: "Brochure Design",
      category: "design",
      image: "https://via.placeholder.com/600x400",
      description: "Brochure publicitaire pour un événement"
    }
  ];

  const filteredProjects = activeFilter === "all"
    ? projects
    : projects.filter(project => project.category === activeFilter);

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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Notre Portfolio</h1>
            <p className="text-xl text-blue-100">
              Découvrez nos réalisations et projets récents
            </p>
          </motion.div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {["all", "web", "mobile", "design"].map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-2 rounded-full font-semibold transition-colors ${
                  activeFilter === filter
                    ? "bg-blue-900 text-white"
                    : "bg-blue-50 text-blue-900 hover:bg-blue-100"
                }`}
              >
                {filter === "all" ? "Tous" : filter === "web" ? "Web" : filter === "mobile" ? "Mobile" : "Design"}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="relative group">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-blue-900 bg-opacity-0 group-hover:bg-opacity-75 transition-all duration-300 flex items-center justify-center">
                    <button className="opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 bg-white text-blue-900 px-6 py-2 rounded-full font-semibold">
                      Voir le projet
                    </button>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-blue-900 mb-2">{project.title}</h3>
                  <p className="text-gray-600">{project.description}</p>
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
              Vous avez un projet en tête ?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Contactez-nous pour discuter de votre projet et découvrir comment nous pouvons
              vous aider à le concrétiser.
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