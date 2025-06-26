
import { TrendingUp, Users, Award, BookOpen } from 'lucide-react';

export function Stats() {
  const stats = [
    {
      icon: Users,
      number: "500+",
      label: "Happy Students",
      description: "Students currently enrolled"
    },
    {
      icon: BookOpen,
      number: "50+",
      label: "Expert Teachers",
      description: "Qualified and experienced faculty"
    },
    {
      icon: Award,
      number: "95%",
      label: "Success Rate",
      description: "Students passing with distinction"
    },
    {
      icon: TrendingUp,
      number: "15+",
      label: "Years of Excellence",
      description: "Serving the community"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-primary to-primary/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Our Achievements in Numbers
          </h2>
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
            These numbers represent our commitment to excellence and the trust placed in us by our community.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2">
                <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="h-8 w-8 text-white" />
                </div>
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-xl font-semibold text-white mb-2">
                  {stat.label}
                </div>
                <div className="text-primary-foreground/80 text-sm">
                  {stat.description}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
