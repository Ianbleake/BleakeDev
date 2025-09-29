import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { MdEmail, MdPhone, MdLocationOn, MdAccessTime } from "react-icons/md";

export default function Social(): React.ReactElement {

  const contactInfo = [
    { icon: <MdEmail size={20} />, title: "Email", value: "bleakedev@gmail.com", description: "Send me an email anytime" },
    { icon: <MdPhone size={20} />, title: "Phone", value: "+52 (56) 4119-3628", description: "Mon-Fri after the 6pm (Mx.city-timezone)" },
    { icon: <MdLocationOn size={20} />, title: "Office", value: "CDMX, MX", description: "Available for remote work" },
    { icon: <MdAccessTime size={20} />, title: "Response Time", value: "24 hours", description: "Average response time" },
  ];

  const socialLinks = [
    { icon: <FaGithub size={20} />, label: "GitHub", href: "https://github.com/Ianbleake" },
    { icon: <FaLinkedin size={20} />, label: "LinkedIn", href: "#" },
    { icon: <FaTwitter size={20} />, label: "Twitter", href: "#" },
  ];


  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold text-white mb-6">Get in Touch</h2>
        <div className="grid gap-6">
          {contactInfo.map((item, i) => (
            <div key={i} className="border border-emerald-600/30 shadow-xl bg-gradient-to-br from-emerald-600 to-emerald-700 rounded-xl p-6 flex items-center justify-start">
              <div className="w-12 h-12 bg-emerald-100/20 rounded-lg flex items-center justify-center mr-4">
                {item.icon}
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-1">{item.title}</h3>
                <p className="text-emerald-100 font-medium mb-1">{item.value}</p>
                <p className="text-emerald-200 text-sm">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-xl font-bold text-white mb-4">Follow Me</h3>
        <div className="flex space-x-4">
          {socialLinks.map((social, i) => (
            <a
              key={i}
              href={social.href}
              className="w-12 h-12 bg-gradient-to-br from-emerald-600 to-emerald-700 rounded-lg flex items-center justify-center text-emerald-100 hover:from-emerald-500 hover:to-emerald-600"
              aria-label={social.label}
            >
              {social.icon}
            </a>
          ))}
        </div>
      </div>

      <div className="border border-emerald-600/30 shadow-xl bg-gradient-to-br from-emerald-600 to-emerald-700 rounded-xl p-6">
        <h3 className="text-lg font-semibold text-white mb-3">Current Availability</h3>
        <div className="flex items-center mb-3">
          <div className="w-3 h-3 bg-emerald-300 rounded-full mr-3 animate-pulse"></div>
          <span className="text-emerald-100 font-medium">Available for new projects</span>
        </div>
        <p className="text-emerald-200 text-sm">
          I`m currently taking on new freelance projects and collaborations. 
          Let`s discuss your next big idea!
        </p>
      </div>
    </div>
  );
}