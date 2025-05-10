
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section id="home" className="relative bg-gradient-to-b from-blue-50 to-white pt-28 pb-20 md:pt-36 md:pb-32">
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="animate-fade-up">
            <p className="text-primary font-medium mb-2">Hi, my name is</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Flutter Developer
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-4">
              I build exceptional mobile applications with Flutter
            </p>
            <p className="text-gray-600 mb-8 max-w-lg">
              I'm a Flutter developer specializing in building high-quality mobile applications. Currently working at bdcalling IT Ltd, crafting innovative solutions for clients worldwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-primary hover:bg-primary/90 text-white">
                View My Work
              </Button>
              <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
                Contact Me <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
          <div className="relative lg:pl-8 animate-fade-in">
            <div className="aspect-square rounded-full bg-blue-500/10 border-2 border-primary/20 flex items-center justify-center">
              <div className="aspect-square w-[92%] rounded-full bg-blue-500/15 border border-primary/30 flex items-center justify-center">
                <div className="aspect-square w-[85%] rounded-full bg-gradient-to-br from-blue-100 to-white shadow-lg flex items-center justify-center">
                  <img 
                    src="https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80" 
                    alt="Flutter Development" 
                    className="rounded-full object-cover w-full h-full"
                  />
                </div>
              </div>
            </div>
            <div className="absolute top-5 -right-4 md:top-10 md:right-0 bg-white rounded-lg shadow-lg p-3 animate-bounce">
              <div className="bg-blue-50 rounded p-1">
                <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14.5 0.5L0.5 13.5L7.5 14.5L9.5 23.5L23.5 10.5L16.5 9.5L14.5 0.5Z" fill="#3B82F6"/>
                </svg>
              </div>
            </div>
            <div className="absolute bottom-5 -left-4 md:bottom-10 md:left-0 bg-white rounded-lg shadow-lg p-3">
              <div className="bg-blue-50 rounded p-1">
                <svg width="30" height="30" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12" cy="12" r="11" fill="#3B82F6" fillOpacity="0.2"/>
                  <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM15.91 8.41L11.5 12.82L8.09 9.41L6.68 10.82L11.5 15.64L17.32 9.82L15.91 8.41Z" fill="#3B82F6"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
