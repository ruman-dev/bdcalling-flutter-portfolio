
import { School, Book, Briefcase, Loader2 } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { useEducation } from '@/hooks/useEducation';

const Education = () => {
  const { data: allEducation, isLoading } = useEducation();

  if (isLoading) {
    return (
      <section id="education" className="py-20 bg-white dark:bg-slate-800">
        <div className="section-container flex items-center justify-center">
          <Loader2 className="h-8 w-8 animate-spin text-primary" />
        </div>
      </section>
    );
  }

  const educationData = allEducation?.filter(item => item.type === 'education') || [];
  const certifications = allEducation?.filter(item => item.type === 'certification') || [];
  const experience = allEducation?.filter(item => item.type === 'experience') || [];

  return (
    <section id="education" className="py-20 bg-white dark:bg-slate-800">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-2 dark:text-white">Education & Experience</h2>
          <div className="w-20 h-1.5 bg-primary mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-gray-700 dark:text-gray-300">
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
              {educationData.map((item) => (
                <Card key={item.id} className="border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow dark:bg-slate-700">
                  <CardContent className="p-6">
                    <div className="mb-2 flex items-center gap-2">
                      <School size={20} className="text-primary" />
                      <span className="text-sm text-gray-500 dark:text-gray-400">{item.duration}</span>
                    </div>
                    <h3 className="text-xl font-semibold mb-1 dark:text-white">{item.degree}</h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">{item.institution}</p>
                    <p className="text-gray-700 dark:text-gray-300">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="certifications" className="mt-4 animate-fade-up">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {certifications.map((item) => (
                <Card key={item.id} className="border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow dark:bg-slate-700">
                  <CardContent className="p-6">
                    <div className="mb-2 flex items-center gap-2">
                      <Book size={20} className="text-primary" />
                      <span className="text-sm text-gray-500 dark:text-gray-400">{item.duration}</span>
                    </div>
                    <h3 className="text-xl font-semibold mb-1 dark:text-white">{item.degree}</h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">{item.institution}</p>
                    <p className="text-gray-700 dark:text-gray-300">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="experience" className="mt-4 animate-fade-up">
            <div className="space-y-6">
              {experience.map((item) => (
                <Card key={item.id} className="border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow dark:bg-slate-700">
                  <CardContent className="p-6">
                    <div className="mb-2 flex items-center gap-2">
                      <Briefcase size={20} className="text-primary" />
                      <span className="text-sm text-gray-500 dark:text-gray-400">{item.duration}</span>
                    </div>
                    <h3 className="text-xl font-semibold mb-1 dark:text-white">{item.degree}</h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">{item.institution}</p>
                    <p className="text-gray-700 dark:text-gray-300">{item.description}</p>
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
