
import { useState } from 'react';
import { ArrowLeft, ArrowRight, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const testimonials = [
  {
    id: 1,
    name: "John Smith",
    position: "Product Manager at TechCorp",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&q=80",
    quote: "Working with this Flutter developer was a game-changer for our project. The app they delivered exceeded our expectations in terms of performance and design. Highly recommended!",
    rating: 5
  },
  {
    id: 2,
    name: "Emily Johnson",
    position: "CEO at StartupX",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&q=80",
    quote: "I was impressed by the quality and speed of development. Our app was completed ahead of schedule and with all the features we requested. The communication throughout the project was excellent.",
    rating: 5
  },
  {
    id: 3,
    name: "Michael Chen",
    position: "CTO at InnovateApp",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&q=80",
    quote: "The attention to detail in our Flutter application was remarkable. The developer understood our technical requirements perfectly and implemented solutions that were both elegant and efficient.",
    rating: 5
  },
  {
    id: 4,
    name: "Sarah Williams",
    position: "Marketing Director at GlobalBrand",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&q=80",
    quote: "Our Flutter app has helped us increase user engagement by 40%. The clean code and thoughtful architecture make updates and maintenance a breeze.",
    rating: 4
  },
  {
    id: 5,
    name: "Robert Martinez",
    position: "Founder at TechStartup",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&q=80",
    quote: "Working with a skilled Flutter developer made all the difference for our mobile strategy. The app's performance across both iOS and Android is seamless.",
    rating: 5
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const displayCount = 3;

  const nextSlide = () => {
    if (currentIndex + displayCount < testimonials.length) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else {
      setCurrentIndex(testimonials.length - displayCount);
    }
  };

  const visibleTestimonials = testimonials.slice(
    currentIndex,
    currentIndex + displayCount
  );

  return (
    <section id="testimonials" className="py-20 bg-blue-50">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-2">Client Testimonials</h2>
          <div className="w-20 h-1.5 bg-primary mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-gray-700">
            Hear what clients have to say about working with me on their Flutter projects.
          </p>
        </div>

        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {visibleTestimonials.map((testimonial) => (
              <Card key={testimonial.id} className="border border-gray-200 hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        className={i < testimonial.rating ? 'text-yellow-500 fill-yellow-500' : 'text-gray-300'}
                      />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-6 italic">"{testimonial.quote}"</p>
                  <div className="flex items-center">
                    <div className="mr-4">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full object-cover" 
                      />
                    </div>
                    <div>
                      <h4 className="font-semibold">{testimonial.name}</h4>
                      <p className="text-sm text-gray-600">{testimonial.position}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="flex justify-center gap-4 mt-8">
            <Button 
              variant="outline" 
              size="icon" 
              onClick={prevSlide}
              aria-label="Previous testimonial"
              className="border-primary text-primary hover:bg-primary hover:text-white"
            >
              <ArrowLeft size={18} />
            </Button>
            <Button 
              variant="outline" 
              size="icon" 
              onClick={nextSlide}
              aria-label="Next testimonial"
              className="border-primary text-primary hover:bg-primary hover:text-white"
            >
              <ArrowRight size={18} />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
