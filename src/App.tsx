import React, { useState, useEffect } from "react";
import {
  Menu,
  X,
  Github as GitHub,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  Download,
} from "lucide-react";
import "./index.css";
import profilePic from "./img/profilepic.jpeg";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "home",
        "about",
        "skills",
        "projects",
        "experience",
        "education",
        "contact",
      ];

      const currentSection = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: "smooth",
      });
      setActiveSection(sectionId);
      setIsMenuOpen(false);
    }
  };

  return (
    <>
      <div className="font-sans bg-gradient-to-br from-gray-900 to-gray-950 text-white min-h-screen">
        {/* Header */}
        <header className="fixed w-full bg-gray-900/80 backdrop-blur-md z-50 shadow-lg">
          <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            <a href="#home" className="text-2xl font-bold text-blue-400">
              Dilip Singh Bhati
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-6">
              {[
                "Home",
                "About",
                "Skills",
                "Projects",
                "Experience",
                "Education",
                "Contact",
              ].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`${
                    activeSection === item.toLowerCase()
                      ? "text-blue-400 border-b-2 border-blue-400"
                      : "text-gray-300 hover:text-blue-300"
                  } transition-colors duration-300`}
                >
                  {item}
                </button>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <button className="md:hidden text-gray-300" onClick={toggleMenu}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden bg-gray-800 py-4">
              <div className="container mx-auto px-4 flex flex-col space-y-3">
                {[
                  "Home",
                  "About",
                  "Skills",
                  "Projects",
                  "Experience",
                  "Education",
                  "Contact",
                ].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className={`${
                      activeSection === item.toLowerCase()
                        ? "text-blue-400"
                        : "text-gray-300"
                    } text-left py-2 px-4 hover:bg-gray-700 rounded transition-colors duration-300`}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
          )}
        </header>

        {/* Hero Section */}
        <section id="home" className="pt-32 pb-20 md:pt-40 md:pb-32 px-4">
          <div className="container mx-auto flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-4xl md:text-6xl font-bold mb-4">
                <span className="text-blue-400">Hello, I&apos;m</span>
                <br />
                Dilip Singh Bhati
              </h1>
              <h2 className="text-xl md:text-2xl text-gray-300 mb-6">
                Web Development Aspirant
              </h2>
              <p className="text-gray-400 mb-8 text-lg">
                Motivated IT student with experience in web development using
                HTML, CSS, JavaScript, React, and Tailwind CSS.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("contact");
                  }}
                  className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-full font-medium transition-colors duration-300"
                >
                  Contact Me
                </a>
                <a
                  href="#projects"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("projects");
                  }}
                  className="bg-transparent border border-blue-400 text-blue-400 hover:bg-blue-400/10 px-6 py-3 rounded-full font-medium transition-colors duration-300"
                >
                  View Projects
                </a>
              </div>
              <div className="flex mt-8 space-x-4">
                <a
                  href="https://github.com/dilip777333"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  <GitHub size={24} />
                </a>
                <a
                  href="https://www.linkedin.com/in/dilip-singh-bhati-b38b34287/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  <Linkedin size={24} />
                </a>
                <a
                  href="mailto:bhatidilip10@gmail.com"
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  <Mail size={24} />
                </a>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="relative">
                <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-blue-400 shadow-xl shadow-blue-500/20">
                  <img
                    src={profilePic}
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 bg-gray-900 px-6 py-2 rounded-full border border-blue-400 shadow-lg">
                  <span className="text-blue-400 font-bold">Web Developer</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 px-4 bg-gray-800/50">
          <div className="container mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              <span className="border-b-4 border-blue-400 pb-2">About Me</span>
            </h2>
            <div className="flex flex-col md:flex-row items-center gap-10">
              <div className="md:w-1/2">
                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                  I&apos;m a motivated IT student experienced in web development
                  using HTML, CSS, JavaScript, React, and Tailwind CSS.
                  I&apos;ve built projects like an Amazon clone, to-do app, and
                  e-commerce site with clean UI and functionality.
                </p>
                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                  I&apos;m a strong collaborator with problem-solving skills,
                  aiming to grow as a full-stack developer and deliver effective
                  solutions. I&apos;m passionate about creating intuitive and
                  responsive web applications that provide excellent user
                  experiences.
                </p>
                <div className="flex flex-col md:flex-row gap-4 text-gray-300">
                  <div className="flex items-center gap-2">
                    <MapPin className="text-blue-400" size={20} />
                    <span>Bhilwara, Rajasthan</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="text-blue-400" size={20} />
                    <span>+91-9664234496</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="text-blue-400" size={20} />
                    <span>bhatidilip10@gmail.com</span>
                  </div>
                </div>
                <div className="mt-8">
                  <a
                    href="https://drive.google.com/file/d/18gD4L_GNBUKlbNeCc1fNdY3zoxVPxmnK/view?usp=drivesdk"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-full font-medium transition-colors duration-300"
                  >
                    <Download size={20} />
                    Download Resume
                  </a>
                </div>
              </div>
              <div className="md:w-1/2 grid grid-cols-2 gap-4">
                <div className="bg-gray-700/50 p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
                  <h3 className="text-xl font-bold mb-2 text-blue-400">
                    Education
                  </h3>
                  <p className="text-gray-300">
                    B.Tech in IT Engineering at M.L.V.T. and Engineering
                    College, Bhilwara
                  </p>
                </div>
                <div className="bg-gray-700/50 p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
                  <h3 className="text-xl font-bold mb-2 text-blue-400">
                    Experience
                  </h3>
                  <p className="text-gray-300">
                    3 Months Internship at AMPARO SECURE TECH (BHILWARA)
                  </p>
                </div>
                <div className="bg-gray-700/50 p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
                  <h3 className="text-xl font-bold mb-2 text-blue-400">
                    Interests
                  </h3>
                  <p className="text-gray-300">
                    Web Development, UI/UX Design, Problem Solving
                  </p>
                </div>
                <div className="bg-gray-700/50 p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
                  <h3 className="text-xl font-bold mb-2 text-blue-400">
                    Languages
                  </h3>
                  <p className="text-gray-300">English, Hindi</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20 px-4">
          <div className="container mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              <span className="border-b-4 border-blue-400 pb-2">
                Technical Skills
              </span>
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {[
                { name: "HTML", level: 90, color: "bg-orange-500" },
                { name: "CSS", level: 85, color: "bg-blue-500" },
                { name: "Tailwind CSS", level: 80, color: "bg-teal-500" },
                { name: "JavaScript", level: 75, color: "bg-yellow-500" },
                { name: "Core Java", level: 70, color: "bg-red-500" },
                { name: "React", level: 65, color: "bg-cyan-500" },
              ].map((skill, index) => (
                <div
                  key={index}
                  className="bg-gray-800/80 rounded-lg p-6 shadow-lg transform hover:scale-105 transition-transform duration-300"
                >
                  <div className="text-center mb-4">
                    <h3 className="text-xl font-bold text-white">
                      {skill.name}
                    </h3>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2.5 mb-2">
                    <div
                      className={`h-2.5 rounded-full ${skill.color}`}
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                  <div className="text-right text-gray-400 text-sm">
                    {skill.level}%
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-16">
              <h3 className="text-2xl font-bold mb-8 text-center text-gray-200">
                Soft Skills
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {[
                  "Adaptability",
                  "Teamwork and Collaboration",
                  "Communication",
                  "Leadership",
                  "Problem Solving",
                  "Time Management",
                  "Critical Thinking",
                  "Creativity",
                ].map((skill, index) => (
                  <div
                    key={index}
                    className="bg-gray-800/50 rounded-lg p-4 text-center shadow-md border border-gray-700 hover:border-blue-400 transition-colors duration-300"
                  >
                    <span className="text-gray-300">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 px-4 bg-gray-800/50">
          <div className="container mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              <span className="border-b-4 border-blue-400 pb-2">Projects</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "E-commerce Website",
                  description:
                    "Developed a full e-commerce site frontend with features like wishlist, add to cart, filter panel, and product detail page. Focused on clean UI and efficient state management.",
                  tech: ["React", "Tailwind CSS"],
                  image:
                    "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                },
                {
                  title: "Amazon Website Clone",
                  description:
                    "Created a clone of Amazon&apos;s website using HTML and CSS, demonstrating proficiency in Front-End Development.",
                  tech: ["HTML", "CSS"],
                  image:
                    "https://images.pexels.com/photos/38519/macbook-laptop-ipad-apple-38519.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                },
                {
                  title: "To-Do List App",
                  description:
                    "Created a simple to-do list app using HTML for structure, CSS for styling, and JavaScript for interactive task management.",
                  tech: ["HTML", "CSS", "JavaScript"],
                  image:
                    "https://images.pexels.com/photos/3243/pen-calendar-to-do-checklist.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                },
                {
                  title: "Music Player",
                  description:
                    "Built a music player app with HTML for layout, CSS for styling, and JavaScript to play, pause, and manage tracks.",
                  tech: ["HTML", "CSS", "JavaScript"],
                  image:
                    "https://images.pexels.com/photos/1626481/pexels-photo-1626481.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                },
              ].map((project, index) => (
                <div
                  key={index}
                  className="bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-blue-500/20 transition-shadow duration-300"
                >
                  <div className="h-48 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-3 text-blue-400">
                      {project.title}
                    </h3>
                    <p className="text-gray-300 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="bg-gray-700 text-blue-300 text-xs px-3 py-1 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex justify-between">
                      <a
                        href="#"
                        className="text-blue-400 hover:text-blue-300 flex items-center gap-1 transition-colors duration-300"
                      ></a>
                      <a
                        href="#"
                        className="text-blue-400 hover:text-blue-300 flex items-center gap-1 transition-colors duration-300"
                      ></a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-20 px-4">
          <div className="container mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              <span className="border-b-4 border-blue-400 pb-2">
                Work Experience
              </span>
            </h2>
            <div className="max-w-3xl mx-auto">
              <div className="relative border-l-4 border-blue-400 pl-8 pb-10">
                <div className="absolute w-4 h-4 bg-blue-400 rounded-full -left-2 top-0"></div>
                <div className="bg-gray-800/50 p-6 rounded-lg shadow-lg">
                  <h3 className="text-xl font-bold text-blue-400 mb-1">
                    Web Development Intern
                  </h3>
                  <h4 className="text-lg text-gray-300 mb-2">
                    AMPARO SECURE TECH, Bhilwara
                  </h4>
                  <p className="text-gray-400 mb-4">3 Months Internship</p>
                  <p className="text-gray-300">
                    During my internship, I gained practical experience in web
                    development, working on real-world projects and enhancing my
                    skills in HTML, CSS, JavaScript, and React. I collaborated
                    with a team to develop responsive and user-friendly web
                    applications.
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <span className="bg-gray-700 text-blue-300 text-xs px-3 py-1 rounded-full">
                      HTML
                    </span>
                    <span className="bg-gray-700 text-blue-300 text-xs px-3 py-1 rounded-full">
                      CSS
                    </span>
                    <span className="bg-gray-700 text-blue-300 text-xs px-3 py-1 rounded-full">
                      JavaScript
                    </span>
                    <span className="bg-gray-700 text-blue-300 text-xs px-3 py-1 rounded-full">
                      React
                    </span>
                    <span className="bg-gray-700 text-blue-300 text-xs px-3 py-1 rounded-full">
                      Responsive Design
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="py-20 px-4 bg-gray-800/50">
          <div className="container mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              <span className="border-b-4 border-blue-400 pb-2">Education</span>
            </h2>
            <div className="max-w-3xl mx-auto">
              <div className="space-y-12">
                <div className="relative border-l-4 border-blue-400 pl-8 pb-10">
                  <div className="absolute w-4 h-4 bg-blue-400 rounded-full -left-2 top-0"></div>
                  <div className="bg-gray-900 p-6 rounded-lg shadow-lg">
                    <h3 className="text-xl font-bold text-blue-400 mb-1">
                      Bachelor in Technology (B. Tech) in IT Engineering
                    </h3>
                    <h4 className="text-lg text-gray-300 mb-2">
                      M.L.V.T. and Engineering College, Bhilwara
                    </h4>
                    <p className="text-gray-400 mb-4">
                      Expected Graduation: May, 2026
                    </p>
                    <p className="text-gray-300">
                      Currently pursuing my B.Tech degree with a focus on
                      Information Technology. Studying various aspects of
                      computer science, software development, and IT
                      infrastructure.
                    </p>
                  </div>
                </div>

                <div className="relative border-l-4 border-blue-400 pl-8 pb-10">
                  <div className="absolute w-4 h-4 bg-blue-400 rounded-full -left-2 top-0"></div>
                  <div className="bg-gray-900 p-6 rounded-lg shadow-lg">
                    <h3 className="text-xl font-bold text-blue-400 mb-1">
                      Higher Secondary (Science Stream)
                    </h3>
                    <h4 className="text-lg text-gray-300 mb-2">
                      Govt. Senior Secondary Rajendra Marg School, Bhilwara
                    </h4>
                    <p className="text-gray-400 mb-4">2021-2022</p>
                    <p className="text-gray-300">
                      Completed higher secondary education with a focus on
                      science subjects, building a strong foundation in
                      mathematics and physics.
                    </p>
                  </div>
                </div>

                <div className="relative border-l-4 border-blue-400 pl-8">
                  <div className="absolute w-4 h-4 bg-blue-400 rounded-full -left-2 top-0"></div>
                  <div className="bg-gray-900 p-6 rounded-lg shadow-lg">
                    <h3 className="text-xl font-bold text-blue-400 mb-1">
                      Secondary Education
                    </h3>
                    <h4 className="text-lg text-gray-300 mb-2">
                      Happy Days Sec School, Azad Nagar, Bhilwara
                    </h4>
                    <p className="text-gray-400 mb-4">2019-2020</p>
                    <p className="text-gray-300">
                      Completed secondary education with excellent academic
                      performance, developing a strong interest in technology
                      and computer science.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Certifications Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              <span className="border-b-4 border-blue-400 pb-2">
                Certifications
              </span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="bg-gray-800/80 p-6 rounded-lg shadow-lg border border-gray-700 hover:border-blue-400 transition-colors duration-300">
                <h3 className="text-xl font-bold text-blue-400 mb-3">
                  Advanced Java Course
                </h3>
                <p className="text-gray-300 mb-4">MSME Technology Centre</p>
                <p className="text-gray-400">
                  Completed an advanced course on Java programming, covering
                  core concepts, object-oriented programming, and application
                  development.
                </p>
              </div>

              <div className="bg-gray-800/80 p-6 rounded-lg shadow-lg border border-gray-700 hover:border-blue-400 transition-colors duration-300">
                <h3 className="text-xl font-bold text-blue-400 mb-3">
                  Summer Internship Program
                </h3>
                <p className="text-gray-300 mb-4">IBM</p>
                <p className="text-gray-400">
                  Participated in IBM&apos;s summer internship program, gaining
                  hands-on experience with industry-standard technologies and
                  development practices.
                </p>
              </div>

              <div className="bg-gray-800/80 p-6 rounded-lg shadow-lg border border-gray-700 hover:border-blue-400 transition-colors duration-300">
                <h3 className="text-xl font-bold text-blue-400 mb-3">
                  Web Development Internship
                </h3>
                <p className="text-gray-300 mb-4">AMPARO SECURE TECH</p>
                <p className="text-gray-400">
                  Completed a 3-month internship focusing on web development
                  technologies and best practices in a professional environment.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 px-4 bg-gray-800/50">
          <div className="container mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              <span className="border-b-4 border-blue-400 pb-2">
                Contact Me
              </span>
            </h2>
            <div className="flex flex-col md:flex-row gap-10 max-w-5xl mx-auto">
              <div className="md:w-1/2">
                <h3 className="text-2xl font-bold text-blue-400 mb-6">
                  Get In Touch
                </h3>
                <p className="text-gray-300 mb-8">
                  Feel free to contact me for any work or suggestions. I&apos;m
                  always open to discussing new projects, creative ideas, or
                  opportunities to be part of your vision.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-500/20 p-3 rounded-full">
                      <MapPin className="text-blue-400" size={24} />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white">
                        Location
                      </h4>
                      <p className="text-gray-300">
                        Bhilwara, Rajasthan, India
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-500/20 p-3 rounded-full">
                      <Mail className="text-blue-400" size={24} />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white">
                        Email
                      </h4>
                      <p className="text-gray-300">bhatidilip10@gmail.com</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-500/20 p-3 rounded-full">
                      <Phone className="text-blue-400" size={24} />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white">
                        Phone
                      </h4>
                      <p className="text-gray-300">+91-9664234496</p>
                    </div>
                  </div>
                </div>
                <div className="mt-8 flex gap-4">
                  <a
                    href="https://github.com/dilip777333"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-700 hover:bg-gray-600 p-3 rounded-full transition-colors duration-300"
                  >
                    <GitHub className="text-blue-400" size={24} />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/dilip-singh-bhati-b38b34287/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-700 hover:bg-gray-600 p-3 rounded-full transition-colors duration-300"
                  >
                    <Linkedin className="text-blue-400" size={24} />
                  </a>
                </div>
              </div>
              <div className="md:w-1/2">
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-gray-300 mb-2"
                      >
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-400 transition-colors duration-300"
                        placeholder="Your Name"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-gray-300 mb-2"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-400 transition-colors duration-300"
                        placeholder="Your Email"
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-gray-300 mb-2"
                    >
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-400 transition-colors duration-300"
                      placeholder="Subject"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-gray-300 mb-2"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-400 transition-colors duration-300"
                      placeholder="Your Message"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-300 w-full"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 py-8 px-4">
          <div className="container mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="mb-4 md:mb-0">
                <h3 className="text-xl font-bold text-blue-400">
                  Dilip Singh Bhati
                </h3>
                <p className="text-gray-400">Web Development Aspirant</p>
              </div>
              <div className="flex gap-4">
                <a
                  href="https://github.com/dilip777333"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  <GitHub size={20} />
                </a>
                <a
                  href="https://www.linkedin.com/in/dilip-singh-bhati-b38b34287/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href="mailto:bhatidilip10@gmail.com"
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  <Mail size={20} />
                </a>
              </div>
            </div>
            <div className="border-t border-gray-800 mt-6 pt-6 text-center">
              <p className="text-gray-400">
                &copy; {new Date().getFullYear()} Dilip Singh Bhati. All rights
                reserved.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

export default App;
