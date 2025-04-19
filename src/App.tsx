import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/layout/navbar';
import { HomePage } from './pages/home';
import { TextToImagePage } from './pages/text-to-image';
import { ImageToTextPage } from './pages/image-to-text';
import { ImageToVideoPage } from './pages/image-to-video';
import { ImageTransitionPage } from './pages/image-transition';
import { AudioToolsPage } from './pages/audio-tools';
import { AboutPage } from './pages/about';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        <Navbar />
        <main className="pt-16">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/text-to-image" element={<TextToImagePage />} />
            <Route path="/image-to-text" element={<ImageToTextPage />} />
            <Route path="/image-to-video" element={<ImageToVideoPage />} />
            <Route path="/image-transition" element={<ImageTransitionPage />} />
            <Route path="/audio-tools" element={<AudioToolsPage />} />
            <Route path="/about" element={<AboutPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;