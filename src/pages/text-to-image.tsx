import { useState } from 'react';
import { motion } from 'framer-motion';
import { Wand2 } from 'lucide-react';
import { ContentLocker } from '../components/ui/content-locker';
import { GenerateButton } from '../components/ui/generate-button';

export function TextToImagePage() {
  const [prompt, setPrompt] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<string | null>(null);
  const [showLocker, setShowLocker] = useState(false);

  const handleGenerate = async () => {
    setLoading(true);
    setTimeout(() => {
      setResult('https://images.unsplash.com/photo-1699116550661-bea051952f96');
      setLoading(false);
      setShowLocker(true);
    }, 7000);
  };

  const handleLockerComplete = () => {
    setShowLocker(false);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="rounded-2xl bg-white p-8 shadow-lg dark:bg-gray-800"
        >
          <div className="mb-8 flex items-center space-x-3">
            <Wand2 className="h-8 w-8 text-blue-600 dark:text-blue-400" />
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Text to Image</h1>
          </div>

          <div className="mb-6">
            <label htmlFor="prompt" className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">
              Enter your prompt
            </label>
            <textarea
              id="prompt"
              rows={4}
              className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2 text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:focus:border-blue-400"
              placeholder="Describe the image you want to generate..."
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
            />
          </div>

          <GenerateButton
            onClick={handleGenerate}
            loading={loading}
            disabled={!prompt.trim()}
          >
            Generate Image
          </GenerateButton>

          {result && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mt-8"
            >
              <h2 className="mb-4 text-xl font-semibold text-gray-900 dark:text-white">Generated Image</h2>
              <div className="relative">
                <img
                  src={result}
                  alt="Generated"
                  className="w-full rounded-lg"
                  style={{ filter: showLocker ? 'blur(10px)' : 'none' }}
                />
                {showLocker && <ContentLocker onComplete={handleLockerComplete} />}
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </div>
  );
}