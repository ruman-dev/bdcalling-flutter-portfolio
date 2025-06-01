
import { useState } from 'react';
import { ArrowLeft, ArrowRight, Star, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useTestimonials } from '@/hooks/useTestimonials';

const Testimonials = () => {
  const { data: testimonials, isLoading } = useTestimonials();
  const [currentIndex, setCurrentIndex] = useState(0);
  const displayCount = 3;

  if (isLoading) {
    return (
      <section id="testimonials" className="py-20 bg-blue-50 dark:bg-slate-900">
        <div className="section-container flex items-center justify-center">
          <Loader2 className="h-8 w-8 animate-spin text-primary" />
        </div>
      </section>
    );
  }

  const nextSlide = () => {
    if (testimonials && currentIndex + displayCount < testimonials.length) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else if (testimonials) {
      setCurrentIndex(testimonials.length - displayCount);
    }
  };

  const visibleTestimonials = testimonials?.slice(
    currentIndex,
    currentIndex + displayCount
  ) || [];

  return (
    <section id="testimonials" className="py-20 bg-blue-50 dark:bg-slate-900">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-2 dark:text-white">Client Testimonials</h2>
          <div className="w-20 h-1.5 bg-primary mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-gray-700 dark:text-gray-300">
            Hear what clients have to say about working with me on their Flutter projects.
          </p>
        </div>

        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {visibleTestimonials.map((testimonial) => (
              <Card key={testimonial.id} className="border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow dark:bg-slate-800">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        className={i < (testimonial.rating || 5) ? 'text-yellow-500 fill-yellow-500' : 'text-gray-300'}
                      />
                    ))}
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 mb-6 italic">"{testimonial.content}"</p>
                  <div className="flex items-center">
                    <div className="mr-4">
                      <img 
                        src={testimonial.avatar_url || `https://ui-avatars.com/api/?name=${encodeURIComponent(testimonial.name)}&background=random`} 
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full object-cover" 
                      />
                    </div>
                    <div>
                      <h4 className="font-semibold dark:text-white">{testimonial.name}</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{testimonial.position} at {testimonial.company}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {testimonials && testimonials.length > displayCount && (
            <div className="flex justify-center gap-4 mt-8">
              <Button 
                variant="outline" 
                size="icon" 
                onClick={prevSlide}
                aria-label="Previous testimonial"
                className="border-primary text-primary hover:bg-primary hover:text-white dark:border-primary dark:text-primary"
              >
                <ArrowLeft size={18} />
              </Button>
              <Button 
                variant="outline" 
                size="icon" 
                onClick={nextSlide}
                aria-label="Next testimonial"
                className="border-primary text-primary hover:bg-primary hover:text-white dark:border-primary dark:text-primary"
              >
                <ArrowRight size={18} />
              </Button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
