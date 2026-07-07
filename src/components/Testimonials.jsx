import React from 'react';
import { Star, Quote } from 'lucide-react';
import './Testimonials.css';

const testimonials = [
  {
    name: "አቶ አበበ ተሰማ",
    company: "የኮንስትራክሽን ስራ ተቋራጭ (Construction Contractor)",
    text: "ለፕሮጀክታችን የሚያስፈልጉንን ከባድ ማሽነሪዎች በቀላሉ እና በፍጥነት ከአውሮፓ አምጥተውልናል። አሰራራቸው በጣም ግልፅ እና አስተማማኝ ነው።",
    rating: 5
  },
  {
    name: "ወ/ሮ ቤቲ ዳዊት",
    company: "አስመጪ (Importer)",
    text: "ከ EthioEuroTrade ጋር መስራት ከጀመርኩ ወዲህ ምርቶችን የማስመጣት ሂደቱ በጣም ቀላል ሆኖልኛል። የጥራት ቁጥጥራቸው ከፍተኛ ነው።",
    rating: 5
  },
  {
    name: "ኢንጂነር ዳንኤል",
    company: "የማምረቻ ፋብሪካ (Manufacturing Factory)",
    text: "የፋብሪካችንን መለዋወጫዎች ፈልገው በወቅቱ ስላቀረቡልን ስራችን ሳይቋረጥ ቀጥሏል። እጅግ በጣም እናመሰግናለን።",
    rating: 5
  }
];

const Testimonials = () => {
  return (
    <section className="testimonials-section">
      <div className="container">
        <div className="text-center">
          <h2 className="section-title">የደንበኞች አስተያየት (Testimonials)</h2>
          <p className="section-subtitle">ደንበኞቻችን ስለ እኛ ምን ይላሉ?</p>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((test, index) => (
            <div key={index} className="testimonial-card">
              <Quote className="quote-icon" size={40} />
              <div className="stars">
                {[...Array(test.rating)].map((_, i) => (
                  <Star key={i} size={18} className="star-icon" fill="currentColor" />
                ))}
              </div>
              <p className="testimonial-text">"{test.text}"</p>
              <div className="testimonial-author">
                <h4>{test.name}</h4>
                <p>{test.company}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
