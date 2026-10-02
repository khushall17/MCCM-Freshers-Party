// Replace these colour blocks with <img src="..." alt="..." /> from last year's event.
const shots = [
  ["Memories, 2025", "/videos/a1.mp4"],
  ["Memories", "/videos/a2.mp4"],
  ["Memories", "/videos/a3.mp4"],
  ["Memories", "/videos/a4.mp4"],
];

export default function Gallery() {
  return (
    <section id="gallery" className="sec">
      <h2>Some Freshers Memories</h2>

      <div className="gallery">
        {shots.map(([title, video]) => (
          <figure key={title} className="gallery-item">
            <video src={video} controls muted loop playsInline />

            <figcaption>{title}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
