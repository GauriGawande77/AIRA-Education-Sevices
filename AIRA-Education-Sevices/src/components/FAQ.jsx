import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

export default function FAQ({ onSoundPlay }) {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: 'What age groups are AIRA programs designed for?',
      a: 'Our programs are carefully designed for students across different age groups, primarily focusing on ages 8 to 18 (Grades 3 to 12). We offer graded learning paths from basic STEM concepts for juniors to advanced AI and Robotics for senior students.'
    },
    {
      q: 'Are AIRA programs aligned with NEP 2020?',
      a: 'Yes, absolutely! All our curriculums and hardware kits are 100% aligned with the National Education Policy (NEP) 2020 guidelines, emphasizing experiential learning, 21st-century skills, and multidisciplinary technology education.'
    },
    {
      q: 'What is the teaching methodology at AIRA?',
      a: "We follow a 'Learn by Building' methodology. Instead of traditional theoretical lectures, students engage directly with hardware kits and software tools to build real-world prototypes, fostering critical thinking and problem-solving skills."
    },
    {
      q: 'Does AIRA provide industry-recognized certificates?',
      a: 'Yes, students who successfully complete our advanced courses and capstone projects receive industry-recognized certificates that add significant value to their academic portfolios and future career prospects.'
    },
    {
      q: 'How can my school partner with AIRA?',
      a: 'Schools can partner with us to set up turnkey ATL & STEM labs. We provide comprehensive hardware packages, continuous mentor support, teacher training workshops, and a structured curriculum. Contact our team to get a custom institutional proposal.'
    },
    {
      q: 'Where is AIRA located and do you conduct workshops?',
      a: 'We are headquartered in India and we conduct hands-on workshops, training sessions, and school partnerships nationwide. Our delivery and support network spans across all major cities and educational hubs.'
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
    if (onSoundPlay) onSoundPlay('click');
  };

  return (
    <section className="section-padding" id="faq" style={{ position: 'relative', overflow: 'hidden' }}>
      
      {/* Background network particles like the image */}
      <div style={{
        position: 'absolute',
        top: 0, left: 0, right: 0, bottom: 0,
        opacity: 0.2,
        pointerEvents: 'none',
        backgroundImage: 'radial-gradient(circle at 10% 20%, rgba(37, 99, 235, 0.15) 0%, transparent 40%), radial-gradient(circle at 90% 80%, rgba(37, 99, 235, 0.15) 0%, transparent 40%)',
        zIndex: 0
      }}></div>

      <div className="container" style={{ position: 'relative', zIndex: 10 }}>
        <div className="section-header" style={{ marginBottom: '3rem' }}>
          <h2 className="section-title" style={{ fontSize: '3rem', fontWeight: 800 }}>
            Frequently Asked <span style={{ color: '#2563eb' }}>Questions</span>
          </h2>
          <p className="section-subtitle" style={{ fontSize: '1.1rem' }}>
            Everything you need to know about AIRA programs.
          </p>
        </div>

        <div style={{ maxWidth: '850px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="luxury-card"
                style={{ 
                  padding: '0', 
                  overflow: 'hidden', 
                  cursor: 'pointer',
                  borderRadius: '16px',
                  background: 'var(--bg-card, #1C202B)',
                  border: '1px solid var(--border-subtle, #30363D)',
                  boxShadow: '0 5px 15px rgba(0,0,0,0.1)'
                }}
              >
                <button
                  onClick={() => toggleFAQ(idx)}
                  style={{
                    width: '100%',
                    background: 'transparent',
                    border: 'none',
                    padding: '24px 28px',
                    textAlign: 'left',
                    fontFamily: 'inherit',
                    fontSize: '1.15rem',
                    fontWeight: 700,
                    color: 'var(--text-main)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    cursor: 'pointer'
                  }}
                >
                  <span>{faq.q}</span>
                  <div style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '8px',
                    background: isOpen ? 'rgba(37, 99, 235, 0.15)' : 'rgba(37, 99, 235, 0.05)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'all 0.3s ease'
                  }}>
                    {isOpen ? (
                      <Minus size={18} style={{ color: '#2563eb' }} />
                    ) : (
                      <Plus size={18} style={{ color: '#2563eb' }} />
                    )}
                  </div>
                </button>
                {isOpen && (
                  <div style={{ padding: '0 28px 24px', color: 'var(--text-muted)', fontSize: '1rem', lineHeight: '1.7' }}>
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
