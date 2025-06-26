import { Card, CardContent } from '@/components/ui/card';
import { Mail, Phone } from 'lucide-react';

export function Faculty() {
  const teachers = [
    {
      name: "DR. SR SUMIT UPADHYAY",
      position: "Chairman",
      experience: "20+ Years",
      image: "/Images/faculty/img1.jpg",
      email: "srupadhyaymamorial@gmail.com ",
      phone: "+91 90098 25703",
      alt:"/user.avif"
    },
    {
      name: "ADV PREETI UPADHYAY ",
      position: "Chairman",
      experience: "15+ Years",
      image: "/Images/faculty/img2.jpg",
      email: " preetiupadhyay2008@gmail.com ",
      phone: "+91 97533 57555",
      alt:"/user.avif"
    },
    {
      name: "SHILPI OJHA VISHWAKARMA ",
      position: "Director ",
      experience: "12+ Years",
      image: "/Images/faculty/img3.jpg",
      email: "ShilpiVishwakarma12345@gmail.com",
      phone: "+91 83196 03391",
      alt:"/user.avif"
    },
   
  ];

  return (
    <section id="faculty" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Meet Our Dedicated Faculty
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our experienced and qualified teachers are committed to providing the best education and guidance to every student.
          </p>
        </div>

        <div className="flex justify-center flex-wrap gap-8">
          {teachers.map((teacher, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden w-80 h-96 relative"
            >
              {/* Full card image */}
              <img
                src={teacher.image}
                alt={teacher.alt}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-110 z-0"
              />
              {/* Overlay for data */}
              <div className="absolute bottom-0 left-0 w-full bg-black/70 text-white p-5 z-10">
                <h3 className="text-lg font-bold">{teacher.name}</h3>
                <p className="text-gray-200 font-semibold inline-block pr-2">{teacher.position}  </p>|
                <p className="text-gray-200 text-sm inline-block pl-2">Experience :- {teacher.experience}</p>
                <div className="pt-2 space-y-1 opacity-90">
                  <div className="flex items-center space-x-2 text-gray-200 text-sm">
                    <Mail className="h-4 w-4 flex-shrink-0" />
                    <span className="truncate">{teacher.email}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-200 text-sm">
                    <Phone className="h-4 w-4 flex-shrink-0" />
                    <span>{teacher.phone}</span>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* <div className="mt-16 bg-primary/5 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Join Our Teaching Team</h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            We are always looking for passionate educators who want to make a difference in students' lives. 
            Join our team and be part of shaping the future.
          </p>
          <button className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors">
            View Career Opportunities
          </button>
        </div> */}
      </div>
    </section>
  );
}
