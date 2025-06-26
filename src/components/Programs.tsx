
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { GraduationCap, BookOpen, Calculator, Globe, Palette, Music } from 'lucide-react';

export function Programs() {
  const programs = [
    {
      icon: BookOpen,
      title: "Primary Education",
      grade: "Classes I-V",
      description: "Foundation building with focus on basic literacy, numeracy, and social skills development.",
      features: ["Interactive Learning", "Play-based Education", "Individual Attention"],
      color: "bg-blue-50 border-blue-200"
    },
    {
      icon: Calculator,
      title: "Middle School",
      grade: "Classes VI-VIII",
      description: "Comprehensive curriculum with emphasis on critical thinking and problem-solving skills.",
      features: ["Science Labs", "Computer Education", "Life Skills"],
      color: "bg-green-50 border-green-200"
    },
    {
      icon: GraduationCap,
      title: "Secondary Education",
      grade: "Classes IX-X",
      description: "CBSE curriculum preparation for board examinations with career guidance.",
      features: ["Board Preparation", "Career Counseling", "Project Work"],
      color: "bg-purple-50 border-purple-200"
    }
  ];

  const activities = [
    { icon: Palette, name: "Arts & Crafts", description: "Creative expression through various art forms" },
    { icon: Music, name: "Music & Dance", description: "Cultural programs and musical training" },
    { icon: Globe, name: "Language Learning", description: "English, Hindi, and regional languages" },
  ];

  return (
    <section id="programs" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Academic Programs
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive education programs designed to nurture students at every stage of their academic journey.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {programs.map((program, index) => (
            <Card key={index} className={`${program.color} hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1`}>
              <CardHeader>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="bg-white p-3 rounded-lg shadow-sm">
                    <program.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-xl">{program.title}</CardTitle>
                    <p className="text-sm text-gray-600 font-medium">{program.grade}</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700">{program.description}</p>
                <div className="space-y-2">
                  {program.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-sm text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>
                <Button variant="outline" className="w-full mt-4 border-primary text-primary hover:bg-primary hover:text-white">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Co-Curricular Activities</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {activities.map((activity, index) => (
              <div key={index} className="text-center space-y-4 p-6 rounded-xl hover:bg-gray-50 transition-colors">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                  <activity.icon className="h-8 w-8 text-primary" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900">{activity.name}</h4>
                <p className="text-gray-600 text-sm">{activity.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
