
export function Certificate() {
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

        <div className="flex justify-center">
          <div className="max-w-2xl">
            <div className="bg-white rounded-lg shadow-2xl overflow-hidden transform hover:scale-105 transition-transform duration-300">
              <img
                src="Images/zee-learn-certificate.png"
                alt="Zee Learn Certificate"
                className="w-full h-auto object-contain"
              />
              <div className="p-6 text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Zee Learn Certification
                </h3>
                <p className="text-gray-600">
                  Official certification recognizing our commitment to quality education and adherence to educational standards.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
