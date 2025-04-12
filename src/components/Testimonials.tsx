
import React from 'react';
import { Star } from 'lucide-react';

interface TestimonialProps {
  quote: string;
  author: string;
  role: string;
  stars: number;
}

const TestimonialCard = ({ quote, author, role, stars }: TestimonialProps) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border">
      <div className="flex mb-4">
        {Array.from({ length: stars }).map((_, i) => (
          <Star key={i} size={16} className="text-yellow-400 fill-yellow-400" />
        ))}
      </div>
      <p className="text-gray-700 mb-4 italic">"{quote}"</p>
      <div>
        <p className="font-bold">{author}</p>
        <p className="text-sm text-gray-600">{role}</p>
      </div>
    </div>
  );
};

const Testimonials = () => {
  const testimonials = [
    {
      quote: "I used to spend 3 hours a day manually responding to DMs. With InstaCloserAI, my assistant handles it all, and my course sales have increased by 32%.",
      author: "Sarah Johnson",
      role: "Digital Marketing Instructor",
      stars: 5
    },
    {
      quote: "The AI responses are incredibly natural. My followers can't tell they're talking to a bot, and I wake up to new sales calls on my calendar every morning.",
      author: "Mark Williams",
      role: "Fitness Course Creator",
      stars: 5
    },
    {
      quote: "Setting up took less than 15 minutes, and the profile audit gave me insights that immediately improved my conversion rate. Absolutely worth it.",
      author: "Jessica Chen",
      role: "Business Coach",
      stars: 5
    }
  ];

  return (
    <section id="testimonials" className="py-16 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-6 md:px-8 lg:px-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Customers Say</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Course creators just like you are growing their businesses with InstaCloserAI.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard 
              key={index}
              quote={testimonial.quote}
              author={testimonial.author}
              role={testimonial.role}
              stars={testimonial.stars}
            />
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-xl font-medium gradient-text">Join over 1,000 course creators growing their business with AI</p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
