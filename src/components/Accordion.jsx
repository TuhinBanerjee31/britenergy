import React, { useState } from "react";

const Accordion = () => {
  const [openItem, setOpenItem] = useState(null);

  const toggleAccordion = (id) => {
    setOpenItem((prev) => (prev === id ? null : id));
  };

  const faqs = [
    {
      id: 1,
      question: "What does KPNG specialize in?",
      answer:
        "KPNG specializes in power, infrastructure, and network development solutions. We deliver sustainable energy projects, smart city solutions, and large-scale infrastructure development globally.",
    },
    {
      id: 2,
      question: "Where is KPNG headquartered?",
      answer:
        "Our headquarters is located in Riyadh, Saudi Arabia, at the iconic Kingdom Centre Tower.",
    },
    {
      id: 3,
      question: "What regions do you operate in?",
      answer:
        "KPNG operates globally, with offices in Asia, Africa, Europe, North America, and South America. We also work with local partners to deliver tailored solutions in various countries.",
    },
    {
      id: 4,
      question: "Is KPNG a real company?",
      answer:
        "Yes, KPNG (Knagz Power and Network-Infrastructure Group) is a privately held organization founded in 2011. With a global presence and a proven track record of excellence, we have successfully completed numerous projects worldwide.",
    },
    {
      id: 5,
      question: "Do you have offices in India?",
      answer:
        "Yes, our India office is located in Visakhapatnam, Andhra Pradesh: KPNG India Office, 1st Floor, HMDA Complex, Dwaraka Nagar, Main Road, Visakhapatnam, Andhra Pradesh, 530016, India. Phone: +91 40 1234 5678. Email: india.info@kpng.in.",
    },
    {
      id: 6,
      question: "What regions in India do you serve?",
      answer:
        "We serve various regions in India, focusing on infrastructure and energy projects in urban and rural areas. From metro rail development to renewable energy initiatives, we’ve contributed to transformative projects across the country.",
    },
    {
      id: 7,
      question: "What projects have you completed in India?",
      answer:
        "We have completed several notable projects in India, including Visakhapatnam Metro Rail Feasibility Study, Gujarat Solar Park Development, and Chennai Smart City Upgrades.",
    },
    {
      id: 8,
      question: "Are you working with the Indian government?",
      answer:
        "Yes, KPNG has collaborated with various state and central government bodies for infrastructure and renewable energy projects in India. We’ve been a trusted partner in initiatives like smart city development and clean energy programs.",
    },
    {
      id: 9,
      question: "How do you address challenges unique to India?",
      answer:
        "We adapt to the specific needs of India by incorporating local expertise, sourcing materials from Indian vendors, and navigating regulatory frameworks to deliver timely and cost-effective solutions.",
    },
    {
      id: 10,
      question: "Do you offer renewable energy solutions in India?",
      answer:
        "Yes, we specialize in renewable energy projects in India, including solar farms, wind energy systems, and hybrid energy storage solutions.",
    },
    {
      id: 11,
      question: "What types of infrastructure projects do you handle in India?",
      answer:
        "In India, we focus on smart cities, transportation infrastructure (metro rail, roads), industrial zones, and affordable housing.",
    },
    {
      id: 12,
      question: "Do we require certifications to work with KPNG?",
      answer:
        "While certifications are not mandatory for initial discussions, certain project requirements may call for specific certifications or qualifications, depending on the scope and standards involved.",
    },
    {
      id: 13,
      question: "How can I partner with KPNG for a project?",
      answer:
        "You can reach out to us via our Contact Us page. Provide details about your project, and our team will get in touch with you to discuss further.",
    },
    {
      id: 14,
      question: "Does KPNG collaborate with local contractors?",
      answer:
        "Yes, we believe in the value of local expertise and often collaborate with trusted local contractors and partners to ensure the success of our projects.",
    },
    {
      id: 15,
      question: "Are there career opportunities at KPNG?",
      answer:
        "Yes, we are always looking for talented individuals to join our team. Visit our Careers page for current job openings and application details.",
    },
    {
      id: 16,
      question: "What technologies do you use in smart city projects?",
      answer:
        "We use IoT, AI, and advanced automation systems for smart city projects. These technologies enhance urban efficiency, safety, and sustainability.",
    },
    {
      id: 17,
      question: "How do you incorporate innovation in your projects?",
      answer:
        "Innovation is integral to our operations. From using cutting-edge construction techniques to integrating advanced energy solutions, we continuously evolve to meet the demands of the modern world.",
    },
    {
      id: 18,
      question: "Who do I contact for more information?",
      answer:
        "You can email us at info@kpng.org or call our headquarters at +966 11 123 4567. For regional inquiries, visit our Contact Us page for specific office details.",
    },
    {
      id: 19,
      question: "Still Have Questions?",
      answer:
        "If you didn’t find the answer you were looking for, our team is here to help. Contact us directly or fill out the inquiry form on our website, and we’ll get back to you promptly.",
    },
  ];

  return (
    <div id="accordion-flush" className="max-w-screen-xl mx-auto px-5">
      {/* Accordion Item 1 */}
      {faqs.map((item) => (
        <div key={item.id}>
          <h2 id={`accordion-flush-heading-${item.id}`}>
            <button
              type="button"
              className="flex items-center justify-between w-full py-5 font-medium text-[#102a41] border-b border-[#174e75] gap-3"
              aria-expanded={openItem === item.id}
              aria-controls={`accordion-flush-body-${item.id}`}
              onClick={() => toggleAccordion(item.id)}
            >
              <span>{item.question}</span>
              <svg
                className={`w-3 h-3 transition-transform ${
                  openItem === item.id ? "rotate-180" : ""
                }`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5 5 1 1 5"
                />
              </svg>
            </button>
          </h2>
          <div
            id={`accordion-flush-body-${item.id}`}
            className={`overflow-hidden transition-all duration-300 ${
              openItem === item.id ? "max-h-[500px]" : "max-h-0"
            }`}
            aria-labelledby={`accordion-flush-heading-${item.id}`}
          >
            <div className="py-5 border-b border-gray-200 dark:border-[#174e75]">
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                {item.answer}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
