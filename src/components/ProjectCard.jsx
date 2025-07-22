import { useState } from 'react';
import { Dialog } from '@headlessui/react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import defaultImg from '../assets/defaultProjectImage.png';

export default function ProjectCard({
  title,
  shortDescription,
  fullDescription,
  techStack,
  keyLearnings = [],
  images = [],
  links = {},
  isMajor,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const borderClass = isMajor
    ? 'border border-[#FF5722]/40'
    : 'border border-gray-200';

  return (
    <div
      className={`bg-white p-5 rounded-xl transition-all duration-300 hover:shadow-xl ${borderClass}`}
    >
      <div className="relative">
        <img
          src={images?.[0] || defaultImg}
          alt={title}
          className="w-full h-56 object-cover rounded-lg mb-4 border border-gray-100"
        />
        {isMajor && (
          <span className="absolute top-2 right-2 bg-[#FF5722] text-white text-[10px] px-3 py-[3px] rounded-full uppercase font-semibold shadow">
            Major
          </span>
        )}
      </div>

      <h3 className="text-lg font-semibold text-[#212121] mb-1">{title}</h3>
      <p className="text-sm text-[#555] mb-2">{shortDescription}</p>
      <p className="text-xs text-[#888]">{techStack}</p>

      <button
        onClick={() => setIsOpen(true)}
        className="mt-3 text-sm font-medium text-[#FF5722] hover:underline"
      >
        View Details
      </button>

      <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-50">
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm" aria-hidden="true" />
        <div className="fixed inset-0 overflow-y-auto">
          <div className="min-h-full flex items-center justify-center p-4">
            <Dialog.Panel className="relative w-full max-w-6xl bg-white rounded-2xl shadow-2xl p-8 border border-gray-100 transition-all duration-300">
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-5 right-5 text-gray-400 hover:text-black transition"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="text-3xl font-bold text-[#212121] mb-8 border-b pb-4 tracking-tight">
                {title}
              </div>

              {/* Image carousel */}
              {images.length > 0 && (
                <div className="relative w-full mb-8">
                  <img
                    src={images[currentImageIndex]}
                    alt={`Screenshot ${currentImageIndex + 1}`}
                    className="w-full max-h-[500px] object-contain rounded-xl shadow-md transition duration-300"
                  />
                  {images.length > 1 && (
                    <>
                      <button
                        onClick={prevImage}
                        className="absolute top-1/2 left-3 -translate-y-1/2 bg-white hover:bg-gray-100 transition p-2 rounded-full shadow-md"
                      >
                        <ChevronLeft className="w-5 h-5" />
                      </button>
                      <button
                        onClick={nextImage}
                        className="absolute top-1/2 right-3 -translate-y-1/2 bg-white hover:bg-gray-100 transition p-2 rounded-full shadow-md"
                      >
                        <ChevronRight className="w-5 h-5" />
                      </button>
                    </>
                  )}
                </div>
              )}

              <div className="space-y-6 text-[#424242] text-[15px] leading-relaxed">
                <div>
                  <h4 className="text-lg font-semibold text-[#212121] mb-1">Overview</h4>
                  <p>{fullDescription}</p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-[#212121] mb-1">Tech Stack</h4>
                  <p className="text-sm text-[#616161]">{techStack}</p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-[#212121] mb-1">Key Learnings</h4>
                  <ul className="list-disc ml-5 space-y-1 text-sm">
                    {keyLearnings.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                {links.github && (
                  <a
                    href={links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-[#1E88E5] text-white rounded-md text-sm font-semibold hover:bg-[#1565C0] transition"
                  >
                    GitHub
                  </a>
                )}
                {links.live && (
                  <a
                    href={links.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-[#43A047] text-white rounded-md text-sm font-semibold hover:bg-[#2E7D32] transition"
                  >
                    Live Demo
                  </a>
                )}
              </div>
            </Dialog.Panel>
          </div>
        </div>
      </Dialog>
    </div>
  );
}


