// src/components/Loader.jsx
import { motion } from 'framer-motion';

const Loader = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gradient-to-b from-blue-50/90 to-white/90 backdrop-blur-sm z-50">
      <div className="flex flex-col items-center">
        <div className="relative">
          {/* Main circle */}
          <motion.div
            className="w-20 h-20 border-4 border-blue-200 rounded-full"
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          />
          {/* Smaller rotating circle */}
          <motion.div
            className="absolute top-0 right-0 w-8 h-8 border-4 border-t-blue-500 border-r-blue-500 border-b-transparent border-l-transparent rounded-full"
            animate={{ rotate: -360 }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
          />
        </div>
        
        {/* Loading text */}
        <motion.p 
          className="mt-4 text-xl font-medium text-gray-700"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Connecting volunteers...
        </motion.p>
        
        {/* Loading dots */}
        <div className="flex space-x-2 mt-2">
          {[0, 1, 2].map((dot) => (
            <motion.div
              key={dot}
              className="w-2 h-2 bg-blue-500 rounded-full"
              initial={{ opacity: 0.2 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 0.5,
                repeat: Infinity,
                repeatType: "reverse",
                delay: dot * 0.2
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Loader;