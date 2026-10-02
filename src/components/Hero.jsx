import { useEffect, useState } from "react";

const EVENT = new Date("2026-10-08T10:00:00");

function useCountdown() {
  const [now, setNow] = useState(Date.now());
  useEffect(() => {
    const t = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(t);
  }, []);
  const s = Math.max(0, Math.floor((EVENT - now) / 1000));
  return [
    ["days", Math.floor(s / 86400)],
    ["hrs", Math.floor(s / 3600) % 24],
    ["min", Math.floor(s / 60) % 60],
    ["sec", s % 60],
  ];
}

export default function Hero() {
  const time = useCountdown();
  return (
    <section id="top" className="hero">
      <p className="tag">Welcome party for the MCCM students</p>
      <h1>
        Freshers
        <br />
        Party
      </h1>
      <p className="lead">
        One day. Music, Fun and your whole new friends. Thursday, 8 October, 10
        AM.
      </p>
      <div className="count">
        {time.map(([label, v]) => (
          <div key={label}>
            <b>{String(v).padStart(2, "0")}</b>
            <span>{label}</span>
          </div>
        ))}
      </div>
      <a className="btn" href="#register">
        Save your spot
      </a>
    </section>
  );
}
