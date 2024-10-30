import React from 'react';
import { Github, Linkedin, Mail, MapPin, ExternalLink } from 'lucide-react';

const Portfolio = () => {
  const [activeSection, setActiveSection] = React.useState('about');

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      {/* Header/Navigation */}
      <nav className="bg-white shadow-md p-4 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold text-indigo-600">Muhammed Ajmal P</h1>
          <div className="space-x-6">
            {['About', 'Experience', 'Education', 'Skills'].map((item) => (
              <button
                key={item}
                onClick={() => setActiveSection(item.toLowerCase())}
                className={`${
                  activeSection === item.toLowerCase()
                    ? 'text-indigo-600 font-semibold'
                    : 'text-gray-600 hover:text-indigo-500'
                } transition-colors`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="bg-white">
        <div className="max-w-6xl mx-auto py-16 px-4 flex flex-wrap items-center">
          <div className="w-full md:w-2/3 pr-8">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              Python Developer & Agency Head
            </h1>
            <p className="text-xl text-gray-600 mb-6">
              Building scalable applications and leading innovative solutions at CODO AI Innovations
            </p>
            <div className="flex space-x-4 mb-8">
              <a href="https://github.com/moajmalp" className="text-gray-600 hover:text-indigo-600">
                <Github size={24} />
              </a>
              <a href="https://www.linkedin.com/in/moajmalp" className="text-gray-600 hover:text-indigo-600">
                <Linkedin size={24} />
              </a>
              <a href="mailto:hi@moajmalp.in" className="text-gray-600 hover:text-indigo-600">
                <Mail size={24} />
              </a>
            </div>
            <div className="flex items-center text-gray-600">
              <MapPin size={20} className="mr-2" />
              <span>Malappuram, Kerala, India</span>
            </div>
          </div>
          <div className="w-full md:w-1/3 mt-8 md:mt-0">
            <div className="relative">
              <img
                src="/api/placeholder/300/300"
                alt="Profile"
                className="rounded-full w-64 h-64 object-cover mx-auto shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Experience Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Work Experience</h2>
          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-xl font-semibold text-gray-800">Python Developer & Agency Head</h3>
                <p className="text-indigo-600">CODO AI Innovations</p>
              </div>
              <span className="text-gray-600">05/06/2024 - Present</span>
            </div>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Head of CODO Agency, managing Development, Creative, and Marketing departments</li>
              <li>Provide strategic leadership and oversee project execution</li>
              <li>Mentor CODO Academy students in career planning and development</li>
              <li>Collaborate with cross-functional teams to deliver comprehensive solutions</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 bg-gradient-to-br from-indigo-50 to-blue-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                category: "Programming Languages",
                skills: ["Python", "PHP"]
              },
              {
                category: "Front-End Technologies",
                skills: ["HTML", "CSS", "JavaScript"]
              },
              {
                category: "Back-End Technologies",
                skills: ["Django", "Flask", "Laravel"]
              },
              {
                category: "Database Management",
                skills: ["MySQL", "PostgreSQL"]
              },
              {
                category: "Version Control",
                skills: ["Git", "GitHub"]
              },
              {
                category: "CMS",
                skills: ["WordPress", "Shopify"]
              }
            ].map((skillGroup) => (
              <div key={skillGroup.category} className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">{skillGroup.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-indigo-100 text-indigo-600 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Education</h2>
          <div className="space-y-6">
            {[
              {
                degree: "Master of Arts in Arabic",
                institution: "Maulana Azad National University",
                period: "2023-2025",
                status: "Ongoing"
              },
              {
                degree: "Bachelor's in Sociology",
                institution: "Calicut University",
                period: "2020-2023"
              },
              {
                degree: "Master of Arts - Islamic Studies",
                institution: "Co-ordination of Islamic Colleges - Wafy",
                period: "2017-2025",
                status: "Ongoing"
              }
            ].map((edu) => (
              <div key={edu.degree} className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold text-gray-800">{edu.degree}</h3>
                <p className="text-indigo-600">{edu.institution}</p>
                <p className="text-gray-600">
                  {edu.period} {edu.status && `(${edu.status})`}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Languages Section */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Languages</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { language: "English", level: "Conversational" },
              { language: "Arabic", level: "Proficient" },
              { language: "Urdu", level: "Fluent" },
              { language: "Hindi", level: "Fluent" },
              { language: "Malayalam", level: "Native" }
            ].map((lang) => (
              <div key={lang.language} className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-semibold text-gray-800">{lang.language}</h3>
                <p className="text-indigo-600">{lang.level}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white py-8">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <div className="flex justify-center space-x-6 mb-4">
            <a href="https://github.com/moajmalp" className="text-gray-600 hover:text-indigo-600">
              <Github size={24} />
            </a>
            <a href="https://www.linkedin.com/in/moajmalp" className="text-gray-600 hover:text-indigo-600">
              <Linkedin size={24} />
            </a>
            <a href="mailto:hi@moajmalp.in" className="text-gray-600 hover:text-indigo-600">
              <Mail size={24} />
            </a>
          </div>
          <p className="text-gray-600">© 2024 Muhammed Ajmal P. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;