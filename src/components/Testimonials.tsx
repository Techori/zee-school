
import { Card, CardContent } from '@/components/ui/card';
import { Star, Quote } from 'lucide-react';

export function Testimonials() {
  const testimonials = [
    {
      name: "Mrs. Geeta Sharma",
      relation: "Parent of Class VIII Student",
      content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ",
      rating: 5,
      image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=100&h=100&fit=crop&crop=faces"
    },
    {
      name: "Mr. Rakesh Patel",
      relation: "Parent of Class X Student",
      content: "t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,",
      rating: 5,
      image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=100&h=100&fit=crop&crop=faces"
    },
    {
      name: "Mrs. Kavita Singh",
      relation: "Parent of Class V Student",
      content: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=100&h=100&fit=crop&crop=faces"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Parents Say About Us
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our parent community has to say about their experience with us.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="relative hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <CardContent className="p-8">
                <div className="absolute -top-4 left-8">
                  <div className="bg-primary w-8 h-8 rounded-full flex items-center justify-center">
                    <Quote className="h-4 w-4 text-white" />
                  </div>
                </div>
                
                <div className="pt-4 space-y-6">
                  <div className="flex space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  
                  <p className="text-gray-700 leading-relaxed italic">
                    "{testimonial.content}"
                  </p>
                  
                  <div className="flex items-center space-x-4 pt-4 border-t border-gray-100">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <div className="font-semibold text-gray-900">{testimonial.name}</div>
                      <div className="text-sm text-gray-600">{testimonial.relation}</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
