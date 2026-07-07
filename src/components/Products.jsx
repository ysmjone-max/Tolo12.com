import React from 'react';
import './Products.css';

const productCategories = [
  {
    title: "የኮንስትራክሽን ዕቃዎች",
    titleEn: "Construction Materials",
    image: "https://images.unsplash.com/photo-1541888081622-19e075e03233?auto=format&fit=crop&q=80&w=600"
  },
  {
    title: "የኢንዱስትሪ ማሽነሪዎች",
    titleEn: "Industrial Machinery",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=600"
  },
  {
    title: "የማሽነሪ መለዋወጫዎች",
    titleEn: "Machine Spare Parts",
    image: "https://images.unsplash.com/photo-1580983546571-085fb03c62ba?auto=format&fit=crop&q=80&w=600"
  },
  {
    title: "ጀነሬተሮች",
    titleEn: "Generators",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=600"
  },
  {
    title: "ፓምፖች",
    titleEn: "Pumps",
    image: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&q=80&w=600"
  },
  {
    title: "የኤሌክትሪክ ዕቃዎች",
    titleEn: "Electrical Equipment",
    image: "https://images.unsplash.com/photo-1620612457801-7299a930773e?auto=format&fit=crop&q=80&w=600"
  },
  {
    title: "የቧንቧ ዕቃዎች",
    titleEn: "Plumbing Materials",
    image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=600"
  },
  {
    title: "የግብርና ማሽነሪዎች",
    titleEn: "Agricultural Equipment",
    image: "https://images.unsplash.com/photo-1592982537447-6f2c6a3b2b8c?auto=format&fit=crop&q=80&w=600"
  }
];

const Products = () => {
  return (
    <section id="products" className="products-section">
      <div className="container">
        <div className="text-center">
          <h2 className="section-title">የምናቀርባቸው ምርቶች (Products We Source)</h2>
          <p className="section-subtitle">
            ለኮንስትራክሽን፣ ለኢንዱስትሪ፣ እና ለተለያዩ ዘርፎች የሚያስፈልጉ ከፍተኛ ጥራት ያላቸውን ምርቶች እናቀርባለን። እዚህ ካልተዘረዘሩ ሌሎች ልዩ ምርቶችንም እናስመጣለን።
          </p>
        </div>

        <div className="products-grid">
          {productCategories.map((product, index) => (
            <div key={index} className="product-card">
              <div className="product-image-container">
                <img src={product.image} alt={product.titleEn} className="product-image" />
                <div className="product-overlay">
                  <a href="https://wa.me/1234567890" target="_blank" rel="noreferrer" className="btn btn-primary btn-sm">
                    ዋጋ ይጠይቁ (Quote)
                  </a>
                </div>
              </div>
              <div className="product-info">
                <h3 className="product-title">{product.title}</h3>
                <p className="product-title-en">{product.titleEn}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center" style={{ marginTop: '3rem' }}>
          <p className="additional-products-text">
            በተጨማሪም: HVAC Systems, Workshop Tools, Safety Equipment, Factory Equipment, Steel Products, Industrial Chemicals, Warehouse Equipment, እና Road Construction Machinery እናቀርባለን።
          </p>
          <a href="https://wa.me/1234567890" target="_blank" rel="noreferrer" className="btn btn-secondary" style={{ marginTop: '1rem' }}>
            ልዩ ትዕዛዝ ለማዘዝ (Special Request)
          </a>
        </div>
      </div>
    </section>
  );
};

export default Products;
