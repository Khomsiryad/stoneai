import { useState } from 'react';
import { motion } from 'framer-motion';
import { Images, Upload } from 'lucide-react';
import { ContentLocker } from '../components/ui/content-locker';
import { GenerateButton } from '../components/ui/generate-button';

export function ImageTransitionPage() {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<string | null>(null);
  const [showLocker, setShowLocker] = useState(false);
  const [file1, setFile1] = useState<File | null>(null);
  const [file2, setFile2] = useState<File | null>(null);
  const [duration, setDuration] = useState(3);

  const handleGenerate = async () => {
    setLoading(true);
    setTimeout(() => {
      setResult('https://example.com/transition.mp4');
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
            <Images className="h-8 w-8 text-blue-600 dark:text-blue-400" />
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Image Transition</h1>
          </div>

          <div className="mb-6">
            <label className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">
              Upload first image
            </label>
            <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-300 px-6 py-10 dark:border-gray-600">
              <div className="text-center">
                <Upload className="mx-auto h-12 w-12 text-gray-400" />
                <div className="mt-4 flex text-sm leading-6 text-gray-600 dark:text-gray-400">
                  <label
                    htmlFor="file-upload-1"
                    className="relative cursor-pointer rounded-md font-semibold text-blue-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-blue-600 focus-within:ring-offset-2 hover:text-blue-500 dark:text-blue-400"
                  >
                    <span>Upload a file</span>
                    <input
                      id="file-upload-1"
                      name="file-upload-1"
                      type="file"
                      className="sr-only"
                      accept="image/*"
                      onChange={(e) => setFile1(e.target.files?.[0] || null)}
                    />
                  </label>
                  <p className="pl-1">or drag and drop</p>
                </div>
                <p className="text-xs leading-5 text-gray-600 dark:text-gray-400">PNG, JPG, GIF up to 10MB</p>
              </div>
            </div>
          </div>

          <div className="mb-6">
            <label className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">
              Upload second image
            </label>
            <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-300 px-6 py-10 dark:border-gray-600">
              <div className="text-center">
                <Upload className="mx-auto h-12 w-12 text-gray-400" />
                <div className="mt-4 flex text-sm leading-6 text-gray-600 dark:text-gray-400">
                  <label
                    htmlFor="file-upload-2"
                    className="relative cursor-pointer rounded-md font-semibold text-blue-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-blue-600 focus-within:ring-offset-2 hover:text-blue-500 dark:text-blue-400"
                  >
                    <span>Upload a file</span>
                    <input
                      id="file-upload-2"
                      name="file-upload-2"
                      type="file"
                      className="sr-only"
                      accept="image/*"
                      onChange={(e) => setFile2(e.target.files?.[0] || null)}
                    />
                  </label>
                  <p className="pl-1">or drag and drop</p>
                </div>
                <p className="text-xs leading-5 text-gray-600 dark:text-gray-400">PNG, JPG, GIF up to 10MB</p>
              </div>
            </div>
          </div>

          <div className="mb-6">
            <label htmlFor="duration" className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">
              Transition Duration (seconds)
            </label>
            <input
              type="number"
              id="duration"
              min="1"
              max="10"
              value={duration}
              onChange={(e) => setDuration(parseInt(e.target.value, 10))}
              className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2 text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:focus:border-blue-400"
            />
          </div>

          <GenerateButton
            onClick={handleGenerate}
            loading={loading}
            disabled={!file1 || !file2}
          >
            Generate Transition
          </GenerateButton>

          {result && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mt-8"
            >
              <h2 className="mb-4 text-xl font-semibold text-gray-900 dark:text-white">Generated Transition</h2>
              <div className="relative">
                <video
                  controls
                  className="w-full rounded-lg"
                  src={result}
                  style={{ filter: showLocker ? 'blur(10px)' : 'none' }}
                >
                  Your browser does not support the video tag.
                </video>
                {showLocker && <ContentLocker onComplete={handleLockerComplete} />}
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </div>
  );
}