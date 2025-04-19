import { useEffect, useState } from 'react';
import { isMobile } from 'react-device-detect';
import { AlertTriangle, Lock, Shield } from 'lucide-react';
import { motion } from 'framer-motion';

interface Offer {
  url: string;
  anchor: string;
  conversion: string;
}

interface ContentLockerProps {
  onComplete: () => void;
}

export function ContentLocker({ onComplete }: ContentLockerProps) {
  const [offers, setOffers] = useState<Offer[]>([]);
  const [loading, setLoading] = useState(true);
  const [completed, setCompleted] = useState(false);
  const numOffers = isMobile ? 3 : 5;

  useEffect(() => {
    const checkLeads = () => {
 HEAD
      // Create a unique callback name
      const callbackName = `jsonp_callback_${Date.now()}`;

      // Create script element for JSONP
      const script = document.createElement('script');
      script.src = `https://drqp033qnd79l.cloudfront.net/public/external/check2.php?testing=0&callback=${callbackName}`;

      // Define the callback function
      (window as any)[callbackName] = (leads: any[]) => {
        if (leads.length > 0) {
          setCompleted(true);
          onComplete();
        }
        // Clean up
        delete (window as any)[callbackName];
        document.body.removeChild(script);
      };

      // Add error handling
      script.onerror = () => {
        console.error('Error checking leads');
        delete (window as any)[callbackName];
        document.body.removeChild(script);
      };

      // Append script to document
      document.body.appendChild(script);

      fetch(`https://drqp033qnd79l.cloudfront.net/public/external/check2.php?testing=0&callback=?`)
        .then(res => res.json())
        .then(leads => {
          if (leads.length > 0) {
            setCompleted(true);
            onComplete();
          }
        })
        .catch(error => {
          console.error('Error checking leads:', error);
        });
 af2a2d5c32c103c9d673c68b4adff8123077c645
    };

    const interval = setInterval(checkLeads, 15000);
    return () => clearInterval(interval);
  }, [onComplete]);

  useEffect(() => {
 HEAD
    // Create a unique callback name
    const callbackName = `jsonp_callback_${Date.now()}`;

    // Create script element for JSONP
    const script = document.createElement('script');
    script.src = `https://drqp033qnd79l.cloudfront.net/public/offers/feed.php?user_id=534684&api_key=bfa0217506b2b6f8fe32281179cafdf5&s1=&s2=&callback=${callbackName}`;

    // Define the callback function
    (window as any)[callbackName] = (data: Offer[]) => {
      setOffers(data.slice(0, numOffers));
      setLoading(false);
      // Clean up
      delete (window as any)[callbackName];
      document.body.removeChild(script);
    };

    // Add error handling
    script.onerror = () => {
      console.error('Error fetching offers');
      setLoading(false);
      delete (window as any)[callbackName];
      document.body.removeChild(script);
    };

    // Append script to document
    document.body.appendChild(script);

    return () => {
      // Cleanup if component unmounts before callback
      if ((window as any)[callbackName]) {
        delete (window as any)[callbackName];
      }
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };

    fetch(`https://drqp033qnd79l.cloudfront.net/public/offers/feed.php?user_id=534684&api_key=bfa0217506b2b6f8fe32281179cafdf5&s1=&s2=&callback=?`)
      .then(res => res.json())
      .then(data => {
        setOffers(data.slice(0, numOffers));
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching offers:', error);
        setLoading(false);
      });
 af2a2d5c32c103c9d673c68b4adff8123077c645
  }, [numOffers]);

  if (completed) return null;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm"
    >
      <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-xl dark:bg-gray-800">
        <div className="mb-6 flex items-center justify-center space-x-2 text-yellow-600 dark:text-yellow-500">
          <AlertTriangle className="h-6 w-6" />
          <h2 className="text-lg font-semibold">Security Verification Required</h2>
        </div>

        <div className="mb-6 rounded-lg bg-blue-50 p-4 dark:bg-blue-900/50">
          <div className="flex items-center space-x-2">
            <Shield className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            <p className="text-sm font-medium text-blue-600 dark:text-blue-400">
              Complete one offer to verify you're human
            </p>
          </div>
          <p className="mt-2 text-xs text-blue-600/80 dark:text-blue-400/80">
            This helps us prevent abuse and maintain service quality.
          </p>
        </div>

        {loading ? (
          <div className="flex justify-center">
            <div className="h-8 w-8 animate-spin rounded-full border-2 border-blue-600 border-t-transparent"></div>
          </div>
        ) : (
          <div className="space-y-3">
            {offers.map((offer, index) => (
              <a
                key={index}
                href={offer.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 rounded-lg border border-gray-200 bg-white p-4 transition-colors hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
 HEAD

                onClick={() => {
                  // Track offer click if needed
                  console.log(`Offer clicked: ${offer.conversion}`);
                }}
 af2a2d5c32c103c9d673c68b4adff8123077c645
              >
                <Lock className="h-5 w-5 flex-shrink-0 text-blue-600 dark:text-blue-400" />
                <span className="text-sm text-gray-700 dark:text-gray-300">{offer.anchor}</span>
              </a>
            ))}
          </div>
        )}

        <p className="mt-4 text-center text-xs text-gray-500 dark:text-gray-400">
          Your security and privacy are important to us. All verifications are processed securely.
        </p>
      </div>
    </motion.div>
  );
}