/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // Permet d'exporter le site en HTML statique
  basePath: "/Portfolio", // Remplacez par le nom de votre dépôt GitHub
  images: {
    unoptimized: true, // Nécessaire pour désactiver l'optimisation des images
  },
};

export default nextConfig;
