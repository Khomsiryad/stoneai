import { useState } from 'react';
import { motion } from 'framer-motion';
import { FileText, Upload } from 'lucide-react';
import { ContentLocker } from '../components/ui/content-locker';
import { GenerateButton } from '../components/ui/generate-button';

export function ImageToTextPage() {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<string | null>(null);
  const [showLocker, setShowLocker] = useState(false);
  const [file, setFile] = useState<File | null>(null);

  const handleGenerate = async () => {
    setLoading(true);
    setTimeout(() => {
      setResult('A beautiful sunset over mountains with orange and purple hues in the sky. The landscape features tall pine trees in the foreground and a serene lake reflecting the colorful sky.');
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
            <FileText className="h-8 w-8 text-blue-600 dark:text-blue-400" />
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Image to Text</h1>
          </div>

          <div className="mb-6">
            <label className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">
              Upload an image
            </label>
            <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-300 px-6 py-10 dark:border-gray-600">
              <div className="text-center">
                <Upload className="mx-auto h-12 w-12 text-gray-400" />
                <div className="mt-4 flex text-sm leading-6 text-gray-600 dark:text-gray-400">
                  <label
                    htmlFor="file-upload"
                    className="relative cursor-pointer rounded-md font-semibold text-blue-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-blue-600 focus-within:ring-offset-2 hover:text-blue-500 dark:text-blue-400"
                  >
                    <span>Upload a file</span>
                    <input
                      id="file-upload"
                      name="file-upload"
                      type="file"
                      className="sr-only"
                      accept="image/*"
                      onChange={(e) => setFile(e.target.files?.[0] || null)}
                    />
                  </label>
                  <p className="pl-1">or drag and drop</p>
                </div>
                <p className="text-xs leading-5 text-gray-600 dark:text-gray-400">PNG, JPG, GIF up to 10MB</p>
              </div>
            </div>
          </div>

          <GenerateButton
            onClick={handleGenerate}
            loading={loading}
            disabled={!file}
          >
            Generate Description
          </GenerateButton>

          {result && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mt-8"
            >
              <h2 className="mb-4 text-xl font-semibold text-gray-900 dark:text-white">Generated Description</h2>
              <div className="relative">
                <p className="rounded-lg bg-gray-50 p-4 text-gray-700 dark:bg-gray-700 dark:text-gray-300" style={{ filter: showLocker ? 'blur(10px)' : 'none' }}>
                  {result}
                </p>
                {showLocker && <ContentLocker onComplete={handleLockerComplete} />}
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </div>
  );
}