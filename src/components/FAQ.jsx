import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import './FAQ.css';

const faqs = [
  {
    question: "ትዕዛዝ ማዘዝ የምችለው እንዴት ነው? (How do I order?)",
    answer: "በስልክ፣ በWhatsApp ወይም በድረገጻችን ላይ ያለውን ቅጽ በመሙላት የሚፈልጉትን ምርት ዝርዝር ይላኩልን። እኛም ዋጋ እና የማስመጣት ሂደቱን እናሳውቆታለን።"
  },
  {
    question: "ዕቃው እስኪደርስ ምን ያህል ጊዜ ይወስዳል? (Delivery time?)",
    answer: "እንደ ምርቱ አይነት እና የማጓጓዣ አማራጭ ይወሰናል። በአማካይ ከ3 እስከ 8 ሳምንታት ሊወስድ ይችላል። ለያንዳንዱ ትዕዛዝ ትክክለኛውን ጊዜ እናሳውቃለን።"
  },
  {
    question: "የክፍያ አማራጮች ምንድን ናቸው? (Payment methods?)",
    answer: "በባንክ ትራንስፈር (LC/TT) ወይም በተስማማነው ሌሎች ህጋዊ የክፍያ መንገዶች መጠቀም ይችላሉ።"
  },
  {
    question: "በድረገጹ ላይ የሌሉ ምርቶችን ታመጣላችሁ? (Custom sourcing?)",
    answer: "አዎ! እርስዎ የሚፈልጉትን ማንኛውንም የኮንስትራክሽን፣ የማሽነሪ ወይም የኢንዱስትሪ ምርት ዝርዝር ከላኩልን ከአውሮፓ አምራቾች አፈላልገን እናቀርባለን።"
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="faq-section">
      <div className="container">
        <div className="text-center">
          <h2 className="section-title">ተደጋጋሚ ጥያቄዎች (FAQ)</h2>
          <p className="section-subtitle">ስለ አሰራራችን የተለመዱ ጥያቄዎች እና መልሶቻቸው።</p>
        </div>

        <div className="faq-container">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`faq-item ${openIndex === index ? 'active' : ''}`}
              onClick={() => toggleFAQ(index)}
            >
              <div className="faq-question">
                <h3>{faq.question}</h3>
                {openIndex === index ? <ChevronUp className="faq-icon" /> : <ChevronDown className="faq-icon" />}
              </div>
              {openIndex === index && (
                <div className="faq-answer">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
