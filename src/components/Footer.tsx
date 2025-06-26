import { Facebook, Twitter, Instagram, Linkedin, Youtube, Globe, Phone, Mail, MapPin, Clock } from 'lucide-react';

const Footer = () => {
  // Campus Address
  const campusAddress = [
    {
      icon: MapPin,
      label: `Mount Litera zee School, kundeshwar Road, near life care hospital, Tikamgarh, Madhya Pradesh, India - 472001`,
    },
    {
      icon: Clock,
      label: `08:00am to 04:00pm`,
    },
  ];

  // Contact Us
  const contactUs = [
    {
      icon: Phone,
      label: `+91 90098 25058\n+91 99933 81700\n+91 97533 57555`,
    },
    {
      icon: Mail,
      label: `srupadhyaymemorial@gmail.com\nmountliterazeeschool773@gmail.com`,
    },
  ];

  // Quick Links
  const quickLinks = [
    { label: "Home", href: "#home" },
    { label: "Announcement", href: "#announcement" },
    { label: "Gallery", href: "#gallery" },
    { label: "Why Choose us", href: "#why-choose-us" },
    { label: "Courses", href: "#courses" },
    { label: "Activities", href: "#activities" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "News", href: "#news" },
    { label: "Contact", href: "#Contact" },
  ];

  // Important Links (example, you can update as needed)
  const importantLinks = [
    { label: "Downloads", href: "#" },
    { label: "News & Event", href: "#" },
    { label: "Photo Gallery", href: "#" },
    { label: "Video Gallery", href: "#" },
    { label: "Activities", href: "#" },
    { label: "Litera Experience", href: "#" },
    { label: "Careers", href: "#" },
    { label: "Contact Us", href: "#Contact" },
  ];

  const socialIcons = [
    { icon: Facebook, href: "#" },
    { icon: Instagram, href: "#" },
    { icon: Linkedin, href: "#" },
    { icon: Youtube, href: "#" },
  ];

  return (
    <footer className="bg-[#39365B] text-white pt-12 pb-8 ">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-8">
          {/* Campus Address */}
          <div>
            <h3 className="font-bold mb-3 text-base md:text-lg">Campus Address</h3>
            {campusAddress.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="flex items-start gap-3 mb-2">
                  <Icon className="w-5 h-5 text-[#00e6ef] mt-1" />
                  <span className="whitespace-pre-line text-[14px] sm:text-[15px]">{item.label}</span>
                </div>
              );
            })}
          </div>
          {/* Contact Us */}
          <div>
            <h3 id='Contact' className="font-bold mb-3 text-base md:text-lg">Contact Us</h3>
            {contactUs.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="flex items-start gap-3 mb-2">
                  <Icon className="w-5 h-5 text-[#00e6ef] mt-1" />
                  <span className="whitespace-pre-line text-[14px] sm:text-[15px]">{item.label}</span>
                </div>
              );
            })}
          </div>
          {/* Quick Links */}
          <div>
            <h3 className="font-bold mb-3 text-base md:text-lg">Quick Links</h3>
            <ul>
              {quickLinks.map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.href}
                    className="text-white text-[14px] sm:text-[15px] hover:text-[#00e6ef] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          {/* Important Links */}
          <div>
            <h3 className="font-bold mb-3 text-base md:text-lg">Important Links</h3>
            <ul>
              {importantLinks.map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.href}
                    className="text-white text-[14px] sm:text-[15px] hover:text-[#00e6ef] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <hr className="border-gray-400 opacity-30 mb-4" />
        <div className="flex flex-col md:flex-row md:justify-between items-center gap-4">
          <div className="text-xs opacity-70 text-center md:text-left">
            © {new Date().getFullYear()} mount litera zee school. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            {socialIcons.map((social, idx) => {
              const Icon = social.icon;
              return (
                <a
                  key={idx}
                  href={social.href}
                  className="w-8 h-8 flex items-center justify-center text-[#d1d5db] hover:text-[#00e6ef] transition-colors"
                  aria-label="Social Link"
                >
                  <Icon className="w-5 h-5" />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
