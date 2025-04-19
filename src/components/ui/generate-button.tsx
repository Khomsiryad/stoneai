import { Loader2 } from 'lucide-react';
import { motion } from 'framer-motion';

interface GenerateButtonProps {
  onClick: () => void;
  loading: boolean;
  disabled?: boolean;
  children: React.ReactNode;
}

export function GenerateButton({ onClick, loading, disabled, children }: GenerateButtonProps) {
  return (
    <motion.button
      onClick={onClick}
      disabled={disabled || loading}
      className="inline-flex items-center rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 dark:bg-blue-500 dark:hover:bg-blue-600"
      whileTap={{ scale: 0.95 }}
      style={{ filter: loading ? 'blur(1px)' : 'none' }}
    >
      {loading ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Generating...
        </>
      ) : (
        children
      )}
    </motion.button>
  );
}