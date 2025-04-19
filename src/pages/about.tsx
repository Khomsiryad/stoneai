import { motion } from 'framer-motion';
import { Info } from 'lucide-react';

export function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="rounded-2xl bg-white p-8 shadow-lg dark:bg-gray-800"
        >
          <div className="mb-8 flex items-center space-x-3">
            <Info className="h-8 w-8 text-blue-600 dark:text-blue-400" />
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">About StoneAI</h1>
          </div>

          <div className="prose dark:prose-invert">
            <p className="text-gray-600 dark:text-gray-400">
              StoneAI is your all-in-one creative companion, leveraging the power of artificial intelligence to transform your ideas into reality. Our suite of tools enables you to generate images from text descriptions, extract meaningful content from images, create videos from static images, and much more.
            </p>

            <h2 className="mt-8 text-xl font-semibold text-gray-900 dark:text-white">Our Mission</h2>
            <p className="text-gray-600 dark:text-gray-400">
              We believe in making advanced AI technology accessible to everyone, empowering creators, artists, and professionals to push the boundaries of their creativity.
            </p>

            <h2 className="mt-8 text-xl font-semibold text-gray-900 dark:text-white">Contact</h2>
            <p className="text-gray-600 dark:text-gray-400">
              Have questions or suggestions? We'd love to hear from you. Reach out to us at contact@stoneai.com
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}