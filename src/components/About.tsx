
import { Check } from 'lucide-react';

const About = () => {
  const skills = [
    "Flutter Framework",
    "Dart Programming",
    "Android Development",
    "Kotlin/Java",
    "State Management (Provider, Bloc, GetX)",
    "Firebase Integration",
    "RESTful API Integration",
    "UI/UX Design Implementation",
    "App Performance Optimization",
    "App Publishing"
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-slate-800">
      <div className="section-container">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="w-full md:w-2/5 animate-fade-up">
            <div className="relative">
              <div className="rounded-xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1581287053822-fd7bf4f4bfec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
                  alt="Md. Ruman - Flutter & Android Developer at work" 
                  className="w-full object-cover aspect-square md:aspect-auto md:h-[500px]"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-primary/10 dark:bg-primary/5 w-full h-full rounded-xl -z-10"></div>
            </div>
          </div>
          
          <div className="w-full md:w-3/5">
            <h2 className="text-3xl font-bold mb-2">About Me</h2>
            <div className="w-20 h-1.5 bg-primary mb-6"></div>
            
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              I am Md. Ruman, a passionate Flutter & Android developer currently working at <strong>bdcalling IT Ltd</strong>. With several years of experience in mobile app development, I specialize in creating beautiful, responsive, and functional applications that deliver exceptional user experiences.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              My journey in app development started with native Android platforms, but I quickly expanded my skills to include Flutter's capabilities and have been focused on mastering both frameworks ever since. I enjoy solving complex problems and turning ideas into reality through clean, efficient code.
            </p>
            
            <h3 className="text-xl font-semibold mb-4">My Skills</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 mb-6">
              {skills.map((skill, index) => (
                <div key={index} className="flex items-center">
                  <Check size={18} className="text-primary mr-2" />
                  <span className="dark:text-gray-300">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
