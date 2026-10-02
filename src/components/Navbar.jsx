import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../assets/logo.png";
const links = [
  "About",
  "Pay",
  "Schedule",
  //   "Competition",
  "Gallery",
  "Register",
  "Venue",
  "FAQ",
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="nav">
      <a href="#top" className="logo">
        <img src={logo} alt="Freshers '26" />
      </a>
      <button
        className="burger"
        aria-expanded={open}
        onClick={() => setOpen(!open)}
      >
        {open ? <X /> : <Menu />}
      </button>
      <nav className={open ? "links open" : "links"}>
        {links.map((l) => (
          <a
            key={l}
            href={`#${l.toLowerCase()}`}
            onClick={() => setOpen(false)}
          >
            {l}
          </a>
        ))}
      </nav>
    </header>
  );
}
