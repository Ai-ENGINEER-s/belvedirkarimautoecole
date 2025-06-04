import testimonials from "../data/utils";
import { useState } from "react";
const Testimonials = () => {    
    const [activeTestimonial, setActiveTestimonial] = useState(0);
  return (
    
          <section className="testimonials-section">
            <div className="container">
              <h2>CE QUE DISENT NOS ÉLÈVES</h2>
              <div className="testimonials-grid">
                {testimonials.map((_, index) => (
                  <div
                    key={index}
                    className={`testimonial-avatar ${activeTestimonial === index ? 'active' : ''}`}
                    onClick={() => setActiveTestimonial(index)}
                  >
                    {String.fromCharCode(65 + index)}
                  </div>
                ))}
              </div>
              <div className="testimonial-content">
                <div className="testimonial-quote">
                  "{testimonials[activeTestimonial].quote}"
                </div>
                <div className="testimonial-author">
                  {testimonials[activeTestimonial].author}
                </div>
                <div className="testimonial-stars">
                  ⭐⭐⭐⭐⭐
                </div>
              </div>
            </div>
          </section>
  
  );
}

export default Testimonials;