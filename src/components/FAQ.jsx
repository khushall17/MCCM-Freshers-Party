import { useState } from "react";

const qa = [
  [
    "What happens if I arrive late?",
    "Entry may be restricted after the specified entry time, so arrive on time and avoid last-minute entry.⏰",
  ],
  [
    "What should I wear?",
    "Dress to impress! ✨ Go for a stylish, comfortable, and party-ready outfit. There’s no strict dress code—just bring your best look and confidence!😎🎉",
  ],
  ["Do I need my ID card?", "Yes. Bring your college ID to check in."],
  [
    "Can I perform?",
    "Absolutely! 🎤💃 If you’d like to perform, please contact your seniors or your respective branch department for performance and further details.",
  ],
];

export default function FAQ() {
  const [open, setOpen] = useState(null);
  return (
    <section id="faq" className="sec alt">
      <h2>Questions</h2>
      {qa.map(([q, a], i) => (
        <div key={q} className="faq">
          <button
            aria-expanded={open === i}
            onClick={() => setOpen(open === i ? null : i)}
          >
            {q}
          </button>
          {open === i && <p>{a}</p>}
        </div>
      ))}
    </section>
  );
}
