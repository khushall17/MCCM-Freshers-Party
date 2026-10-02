const PRICE = 500;
const DEADLINE = new Date("2026-10-04T23:59:00"); // change to your last payment date

const groups = [
  {
    year: "1st year",
    qrs: [{ src: "/qr/qr3.jpeg", name: "Mayur Khandate" }],
  },
  {
    year: "2nd year",
    qrs: [
      { src: "/qr/qr1.jpeg", name: "Khushal Dhuware" },
      { src: "/qr/qr2.jpeg", name: "Aryan Deshbhratar" },
    ],
  },
];

function daysLeft() {
  const d = Math.ceil((DEADLINE - Date.now()) / 86400000);
  return Math.max(0, d);
}

export default function Pay() {
  const left = daysLeft();
  return (
    <section id="pay" className="sec">
      <div className="hurry" role="alert">
        <strong>Hurry up!</strong>{" "}
        {left > 0
          ? `Only ${left} day${left === 1 ? "" : "s"} left to pay. Seats are limited, so pay today and lock your entry.`
          : "Payments are closed. Ask the council if any seats are left."}
      </div>

      <h2>Pay here</h2>
      <p className="wide">
        Entry fee: <strong className="price">₹{PRICE}</strong> per student. Pay
        with any UPI app using the QR code for your year.
      </p>

      <div className="pay-grid">
        {groups.map((g) => (
          <article key={g.year} className="pay-card">
            <h3>{g.year}</h3>
            <div className={g.qrs.length > 1 ? "qrs two" : "qrs"}>
              {g.qrs.map((q) => (
                <figure key={q.src} className="qr">
                  <img
                    src={q.src}
                    alt={`Payment QR code, ${q.name}`}
                    width="220"
                    height="220"
                  />
                  <figcaption>{q.name}</figcaption>
                  <a className="save" href={q.src} download>
                    Save QR
                  </a>
                </figure>
              ))}
            </div>
          </article>
        ))}
      </div>

      <ol className="pay-steps">
        <li>Pay ₹{PRICE} using the QR for your year.</li>
        <li>
          Send the screenshot to the number of the person you send the UPI
          payment.
        </li>
        <li>
          Fill the{" "}
          <a className="registerMe" href="#register">
            registration form
          </a>{" "}
          to confirm your spot.
        </li>
      </ol>

      <p className="note">
        On a phone you can't scan your own screen. Tap <b>Save QR</b>, then open
        your UPI app and choose "Scan from gallery".
      </p>
    </section>
  );
}
