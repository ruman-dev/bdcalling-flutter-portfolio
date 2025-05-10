
import { School, Book, Briefcase } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';

const Education = () => {
  const educationData = [
    {
      degree: "Bachelor of Science in Computer Science",
      institution: "University of Engineering and Technology",
      duration: "2016 - 2020",
      description: "Graduated with honors. Specialized in Software Engineering with a focus on mobile application development."
    },
    {
      degree: "Higher Secondary Certificate",
      institution: "National College",
      duration: "2014 - 2016",
      description: "Completed with distinction in Science group with major subjects including Mathematics, Physics, and Computer Science."
    }
  ];

  const certifications = [
    {
      title: "Flutter Development Bootcamp",
      issuer: "Udemy",
      date: "2021",
      description: "Comprehensive course covering advanced Flutter concepts, state management, and app architecture."
    },
    {
      title: "Mobile App Development Specialization",
      issuer: "Coursera",
      date: "2020",
      description: "Series of courses covering mobile app design, development, and deployment strategies."
    },
    {
      title: "Firebase for Flutter",
      issuer: "Google",
      date: "2022",
      description: "Specialized training on integrating Firebase services with Flutter applications."
    }
  ];

  const experience = [
    {
      position: "Senior Flutter Developer",
      company: "bdcalling IT Ltd",
      duration: "2022 - Present",
      description: "Leading a team of developers to build enterprise-level mobile applications. Responsible for architecture decisions, code reviews, and mentoring junior developers."
    },
    {
      position: "Flutter Developer",
      company: "bdcalling IT Ltd",
      duration: "2020 - 2022",
      description: "Developed and maintained multiple Flutter applications. Collaborated with design and backend teams to deliver high-quality mobile solutions."
    },
    {
      position: "Mobile App Development Intern",
      company: "Tech Solutions Inc.",
      duration: "2019 - 2020",
      description: "Assisted in developing mobile applications. Gained practical experience in app development workflows, coding standards, and collaboration."
    }
  ];

  return (
    <section id="education" className="py-20 bg-white">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-2">Education & Experience</h2>
          <div className="w-20 h-1.5 bg-primary mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-gray-700">
            My academic background and professional journey that shaped my expertise in Flutter development.
          </p>
        </div>

        <Tabs defaultValue="education" className="w-full">
          <TabsList className="mx-auto flex justify-center mb-8">
            <TabsTrigger value="education" className="px-6 py-2 flex items-center gap-2">
              <School size={18} />
              Education
            </TabsTrigger>
            <TabsTrigger value="certifications" className="px-6 py-2 flex items-center gap-2">
              <Book size={18} />
              Certifications
            </TabsTrigger>
            <TabsTrigger value="experience" className="px-6 py-2 flex items-center gap-2">
              <Briefcase size={18} />
              Experience
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="education" className="mt-4 animate-fade-up">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {educationData.map((item, index) => (
                <Card key={index} className="border border-gray-200 hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="mb-2 flex items-center gap-2">
                      <School size={20} className="text-primary" />
                      <span className="text-sm text-gray-500">{item.duration}</span>
                    </div>
                    <h3 className="text-xl font-semibold mb-1">{item.degree}</h3>
                    <p className="text-gray-600 mb-4">{item.institution}</p>
                    <p className="text-gray-700">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="certifications" className="mt-4 animate-fade-up">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {certifications.map((item, index) => (
                <Card key={index} className="border border-gray-200 hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="mb-2 flex items-center gap-2">
                      <Book size={20} className="text-primary" />
                      <span className="text-sm text-gray-500">{item.date}</span>
                    </div>
                    <h3 className="text-xl font-semibold mb-1">{item.title}</h3>
                    <p className="text-gray-600 mb-4">{item.issuer}</p>
                    <p className="text-gray-700">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="experience" className="mt-4 animate-fade-up">
            <div className="space-y-6">
              {experience.map((item, index) => (
                <Card key={index} className="border border-gray-200 hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="mb-2 flex items-center gap-2">
                      <Briefcase size={20} className="text-primary" />
                      <span className="text-sm text-gray-500">{item.duration}</span>
                    </div>
                    <h3 className="text-xl font-semibold mb-1">{item.position}</h3>
                    <p className="text-gray-600 mb-4">{item.company}</p>
                    <p className="text-gray-700">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default Education;
