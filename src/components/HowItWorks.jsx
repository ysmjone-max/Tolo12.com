import React from 'react';
import { FileText, Search, FileSignature, CheckCircle, Truck, PackageCheck, MapPin } from 'lucide-react';
import './HowItWorks.css';

const steps = [
  { icon: <FileText size={32} />, title: "ጥያቄ ማቅረብ", desc: "Customer sends product request", detail: "የሚፈልጉትን ምርት ዝርዝር ይላኩልን።" },
  { icon: <Search size={32} />, title: "አቅራቢ መፈለግ", desc: "Company searches trusted European suppliers", detail: "አስተማማኝ የአውሮፓ አምራቾችን እናፈላልጋለን።" },
  { icon: <FileSignature size={32} />, title: "ዋጋ ማቅረብ", desc: "Customer receives quotation and price", detail: "የዋጋ ዝርዝር (Proforma Invoice) እንልክልዎታለን።" },
  { icon: <CheckCircle size={32} />, title: "ማረጋገጥና ክፍያ", desc: "Order confirmation and payment", detail: "ትዕዛዝዎን አረጋግጠው የክፍያ ሂደት ያጠናቅቃሉ።" },
  { icon: <PackageCheck size={32} />, title: "ግዢና ጥራት ቁጥጥር", desc: "Procurement and quality verification", detail: "ዕቃውን ገዝተን የጥራት ቁጥጥር እናደርጋለን።" },
  { icon: <Truck size={32} />, title: "ማጓጓዝና ጉምሩክ", desc: "International shipping & customs", detail: "አለም አቀፍ ትራንስፖርትና የጉምሩክ ስራዎችን እናቀናጃለን።" },
  { icon: <MapPin size={32} />, title: "ርክክብ", desc: "Delivery to Ethiopia", detail: "ምርቱን ኢትዮጵያ ውስጥ በሰላም ያስረክባሉ።" },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="how-it-works-section">
      <div className="container">
        <div className="text-center">
          <h2 className="section-title">እንዴት እንደሚሰራ (How It Works)</h2>
          <p className="section-subtitle">
            ከምርት ፍለጋ እስከ ርክክብ ያለውን አጠቃላይ ሂደት በአስተማማኝ ሁኔታ እንመራለን።
          </p>
        </div>

        <div className="steps-container">
          {steps.map((step, index) => (
            <div key={index} className="step-card glass-card">
              <div className="step-number">{index + 1}</div>
              <div className="step-icon">{step.icon}</div>
              <h3 className="step-title">{step.title}</h3>
              <p className="step-desc-en">{step.desc}</p>
              <p className="step-detail">{step.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
