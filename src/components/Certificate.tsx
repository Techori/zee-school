import { useState } from "react";

const certificates = [
  {
    img: "Images/zee-learn-certificate.png",
    alt: "Zee Learn Certificate",
    title: "Zee Learn Certification",
    desc: "Official certification recognizing our commitment to quality education and adherence to educational standards.",
  },
  {
    img: "Images/image1.jpg",
    alt: "ISO Certificate",
    title: "",
    desc: "",
  },
];

export function Certificate() {
  const [selected, setSelected] = useState(0);

  return (
    <section id="certificate" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Certification
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We are proud to be certified by Zee Learn Limited, ensuring quality education and standards.
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-8 items-start justify-center">
          {/* Thumbnails */}
          <div className="flex md:flex-col gap-4">
            {certificates.map((cert, idx) => (
              <button
                key={cert.img}
                onClick={() => setSelected(idx)}
                className={`border-2 rounded-lg overflow-hidden focus:outline-none transition-all ${
                  selected === idx
                    ? "border-primary ring-2 ring-primary"
                    : "border-gray-200"
                }`}
                style={{ width: 80, height: 80 }}
                aria-label={cert.title}
              >
                <img
                  src={cert.img}
                  alt={cert.alt}
                  className="w-16 h-16 mx-auto my-auto object-contain border border-gray-300 hover:border-primary transition-colors"
                />
              </button>
            ))}
          </div>
          {/* Selected Certificate */}
          <div className="flex-1">
            <div className="bg-white rounded-lg shadow-2xl overflow-hidden transform hover:scale-105 transition-transform duration-300">
              <img
                src={certificates[selected].img}
                alt={certificates[selected].alt}
                className="w-full h-80 md:h-[28rem] object-contain"
              />
              <div className="p-6 text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {certificates[selected].title}
                </h3>
                <p className="text-gray-600">
                  {certificates[selected].desc}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
