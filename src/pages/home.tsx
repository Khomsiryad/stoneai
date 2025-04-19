import { motion } from 'framer-motion';
import { ScrollIndicator } from '../components/layout/scroll-indicator';
import { Wand2 } from 'lucide-react';

export function HomePage() {
  return (
    <div className="relative min-h-screen">
      <section className="relative flex min-h-screen items-center justify-center">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="mx-auto mb-8 flex h-24 w-24 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900"
            >
              <Wand2 className="h-12 w-12 text-blue-600 dark:text-blue-400" />
            </motion.div>
            <h1 className="mb-4 text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl">
              Unleash the Power of Creativity with AI
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-300">
              From text to visuals and beyond, StoneAI is your all-in-one creative companion.
            </p>
          </motion.div>
        </div>
        <ScrollIndicator />
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="rounded-2xl bg-white p-6 shadow-lg dark:bg-gray-800"
              >
                <feature.icon className="mb-4 h-8 w-8 text-blue-600 dark:text-blue-400" />
                <h3 className="mb-2 text-xl font-semibold text-gray-900 dark:text-white">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

const features = [
  {
    title: 'Text to Image',
    description: 'Describe your imagination and watch it come to life as an AI-generated image.',
    icon: Wand2,
  },
  {
    title: 'Image to Text',
    description: 'Upload an image and let AI describe or extract meaningful content from it.',
    icon: Wand2,
  },
  {
    title: 'Image to Video',
    description: 'Transform static visuals into dynamic motion.',
    icon: Wand2,
  },
];