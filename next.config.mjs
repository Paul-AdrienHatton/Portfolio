/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // Permet d'exporter le site en HTML statique
  basePath: process.env.NODE_ENV === "production" ? "/Portfolio" : "", // Use basePath only in production
  assetPrefix: process.env.NODE_ENV === "production" ? "/Portfolio/" : "",
  images: {
    unoptimized: true, // Nécessaire pour désactiver l'optimisation des images
  },
};

export default nextConfig;
