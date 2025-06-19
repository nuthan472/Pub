import { motion } from "framer-motion";

const Hero = () => (
  <div
    className="bg-cover bg-center h-[80vh] flex items-center justify-center text-center"
    style={{ backgroundImage: "url('/bg.jpg')" }}
  >
    <motion.div
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="bg-black/60 p-10 rounded-xl"
    >
      <h1 className="text-5xl font-bold text-white mb-4">Top Pubs in Bangalore 🍻</h1>
      <p className="text-orange-400 text-lg">Organized by NR Events</p>
    </motion.div>
  </div>
);

export default Hero;
