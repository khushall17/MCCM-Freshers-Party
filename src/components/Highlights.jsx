const items = [
  [
    "Dance",
    "Get ready to witness an electrifying welcome dance by BBA, exciting performances, and fun-filled games that will keep the energy high, the excitement unstoppable, and the entire celebration buzzing with unforgettable moments!",
  ],
  [
    "DJ floor",
    "Get ready to own the DJ floor with your favorite beats and requested tracks, as the music, energy, and excitement come together to create an unforgettable dance experience all!",
  ],
  [
    "Food",
    "Get ready to refresh, recharge, and enjoy delicious snacks along with chilled cold drinks, thoughtfully arranged by the management to keep you energized and refreshed throughout the celebration!",
  ],
];

export default function Highlights() {
  return (
    <section className="sec alt">
      <h2>What's happening</h2>
      <div className="grid">
        {items.map(([t, d]) => (
          <article key={t} className="card">
            <h3>{t}</h3>
            <p>{d}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
