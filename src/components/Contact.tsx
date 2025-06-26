
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export function Contact() {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Visit Us",
      content: "Mount Litera zee School,kundeshwar Road,near life care hospital, Tikamgarh, Madhya Pradesh, India - 472001"
    },
    {
      icon: Phone,
      title: "Call Us",
      content: "+91 90098 25058 / +91 99933 81700 / +91 97533 57555"
    },
    {
      icon: Mail,
      title: "Email Us",
      content: "srupadhyaymemorial@gmail.com / mountliterazeeschool773@gmail.com"
    },
    {
      icon: Clock,
      title: "Office Hours",
      content: "Monday - Saturday: 8:00 AM - 4:00 PM"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Get in Touch With Us
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Have questions about admissions or want to visit our campus? We'd love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <info.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">{info.title}</h4>
                      <p className="text-gray-600">{info.content}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-primary/5 p-6 rounded-xl">
              <h4 className="text-xl font-bold text-gray-900 mb-4">Admission Inquiries</h4>
              <p className="text-gray-600 mb-4">
                Interested in enrolling your child? Contact our admission office for detailed information about the application process, requirements, and available seats.
              </p>
              <Button className="bg-primary hover:bg-primary/90">
                Admission
              </Button>
            </div>
          </div>

          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-gray-900">Send us a Message</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Parent/Guardian Name
                  </label>
                  <Input placeholder="Enter your name" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <Input placeholder="Enter your phone number" />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <Input type="email" placeholder="Enter your email" />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Student's Age/Class
                </label>
                <Input placeholder="Enter student's current age or class" />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <Textarea 
                  placeholder="Tell us about your inquiry, questions, or how we can help you..."
                  rows={4}
                />
              </div>
              
              <Button className="w-full bg-primary hover:bg-primary/90">
                Send Message
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
