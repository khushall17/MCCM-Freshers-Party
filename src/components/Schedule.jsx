import { CornerLeftDown } from "lucide-react";
const slots = [
  ["10:00 AM", "Gates open and check-in"],
  [<CornerLeftDown />, "Welcome Dance by the student council"],
  [<CornerLeftDown />, "Fun Activities by BBA"],
  [<CornerLeftDown />, "Photo session & memories"],
  [<CornerLeftDown />, "DJ and Food"],
];

export default function Schedule() {
  return (
    <section id="schedule" className="sec">
      <h2>Schedule</h2>
      <ol className="timeline">
        {slots.map(([t, e]) => (
          <li key={t}>
            <time>{t}</time>
            <span>{e}</span>
          </li>
        ))}
      </ol>
    </section>
  );
}
