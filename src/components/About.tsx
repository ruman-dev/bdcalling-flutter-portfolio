
import { Check, Loader2 } from 'lucide-react';
import { useProfile } from '@/hooks/useProfile';
import { useSkills } from '@/hooks/useSkills';

const About = () => {
  const { data: profile, isLoading: profileLoading } = useProfile();
  const { data: skills, isLoading: skillsLoading } = useSkills();

  if (profileLoading || skillsLoading) {
    return (
      <section id="about" className="py-20 bg-white dark:bg-slate-800">
        <div className="section-container flex items-center justify-center">
          <Loader2 className="h-8 w-8 animate-spin text-primary" />
        </div>
      </section>
    );
  }

  return (
    <section id="about" className="py-20 bg-white dark:bg-slate-800">
      <div className="section-container">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="w-full md:w-2/5 animate-fade-up">
            <div className="relative">
              <div className="rounded-xl overflow-hidden">
                <img 
                  src={profile?.profile_image || "https://images.unsplash.com/photo-1581287053822-fd7bf4f4bfec?ixlib=rb-4.0.3"}
                  alt={`${profile?.name} - ${profile?.designation} at ${profile?.company}`} 
                  className="w-full object-cover aspect-square md:aspect-auto md:h-[500px]"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-primary/10 dark:bg-primary/5 w-full h-full rounded-xl -z-10"></div>
            </div>
          </div>
          
          <div className="w-full md:w-3/5">
            <h2 className="text-3xl font-bold mb-2 dark:text-white">About Me</h2>
            <div className="w-20 h-1.5 bg-primary mb-6"></div>
            
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              {profile?.bio || `I am ${profile?.name}, a passionate ${profile?.designation} currently working at ${profile?.company}.`}
            </p>
            
            <h3 className="text-xl font-semibold mb-4 dark:text-white">My Skills</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 mb-6">
              {skills?.map((skill) => (
                <div key={skill.id} className="flex items-center">
                  <Check size={18} className="text-primary mr-2 flex-shrink-0" />
                  <span className="dark:text-gray-300">{skill.name}</span>
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
