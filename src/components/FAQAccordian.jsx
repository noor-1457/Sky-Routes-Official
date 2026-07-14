import { useState } from 'react';

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-sky-400 rounded-2xl overflow-hidden ">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className=" cursor-pointer w-full flex items-center justify-between text-left px-5 py-4 bg-slate-300 dark:bg-slate-900 font-bold text-xs text-deepBase dark:text-white"
      >
        {question}
        <i className={`fa-solid fa-chevron-down text-[10px] transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}></i>
      </button>
      <div
        className={`px-5 py-4 text-xs text-slateText dark:text-slate-400 bg-white dark:bg-[#070a13] transition-all duration-300 ${
          isOpen ? 'block' : 'hidden'
        }`}
      >
        {answer}
      </div>
    </div>
  );
};

export const FAQAccordian = () => {
  const faqData = [
    {
      question: "How far in advance should I book my flight?",
      answer: "For the best fares, we recommend booking 3-6 weeks ahead for Gulf routes, and earlier during peak Umrah/Hajj and holiday seasons when seats fill up fast."
    },
    {
      question: "Do you help with visa documentation too?",
      answer: "Yes - use our Visa Case Profiler above to check your file strength, and our desk will guide you on the documents needed for your destination."
    },
    {
      question: "Are the prices shown on the website final?",
      answer: "Prices shown are estimates based on recent checks - actual fares depend on live seat availability and season. We always confirm the final quote with you before booking."
    },
    {
      question: "How do I get in touch quickly?",
      answer: "Tap the green WhatsApp button on the bottom-right corner of the site, or fill out the Fast Quote Form below and we'll reach out to you directly."
    }
  ];

  return (
    <>
      {/* FREQUENTLY ASKED QUESTIONS */}
      <section id="faq" className="py-20 bg-white dark:bg-[#05070f] border-t border-slate-100 dark:border-slate-800/60 transition-colors duration-300">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#0284c7] dark:text-skyBrand block mb-2">
              GOT QUESTIONS?
            </span>
            <h2 className="text-3xl font-extrabold text-[#0f172a] dark:text-white uppercase">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-3" id="faqAccordion">
            {faqData.map((item, index) => (
              <FAQItem key={index} question={item.question} answer={item.answer} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};