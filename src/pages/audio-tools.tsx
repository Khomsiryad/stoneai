import { motion } from 'framer-motion';
import { Music } from 'lucide-react';

export function AudioToolsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="rounded-2xl bg-white p-8 shadow-lg dark:bg-gray-800"
        >
          <div className="mb-8 flex items-center space-x-3">
            <Music className="h-8 w-8 text-blue-600 dark:text-blue-400" />
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Audio Tools</h1>
          </div>

          <div className="text-center">
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Coming soon — turn sound into story, or voice into vision.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}