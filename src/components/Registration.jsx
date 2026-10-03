// import { useState } from "react";

// const empty = { name: "", email: "", branch: "", guest: "no" };

// export default function Registration() {
//   const [f, setF] = useState(empty);
//   const [done, setDone] = useState(false);
//   const set = (k) => (e) => setF({ ...f, [k]: e.target.value });

//   const submit = (e) => {
//     e.preventDefault();
//     // TODO: send `f` to your backend or a Google Form endpoint.
//     console.log("Registration:", f);
//     setDone(true);
//   };

//   return (
//     <section id="register" className="sec alt">
//       <h2>Register</h2>
//       {done ? (
//         <p className="card big">
//           You're in, {f.name}. We sent details to {f.email}.
//         </p>
//       ) : (
//         <form className="form" onSubmit={submit}>
//           <label>
//             Full name
//             <input required value={f.name} onChange={set("name")} />
//           </label>
//           <label>
//             College email
//             <input
//               required
//               type="email"
//               value={f.email}
//               onChange={set("email")}
//             />
//           </label>
//           <label>
//             Branch and year
//             <input required value={f.branch} onChange={set("branch")} />
//           </label>
//           <label>
//             Bringing a guest?
//             <select value={f.guest} onChange={set("guest")}>
//               <option value="no">No</option>
//               <option value="yes">Yes, one guest</option>
//             </select>
//           </label>
//           <button className="btn" type="submit">
//             Register
//           </button>
//         </form>
//       )}
//     </section>
//   );
// }

import { useState } from "react";
import emailjs from "@emailjs/browser";

const empty = {
  name: "",
  email: "",
  branch: "",
  mobile: "",
};

export default function Registration() {
  const [f, setF] = useState(empty);
  const [done, setDone] = useState(false);
  const [loading, setLoading] = useState(false);

  const set = (k) => (e) => setF({ ...f, [k]: e.target.value });

  const submit = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      // Send registration details to your email
      await emailjs.send(
        "service_wyypwyp",
        "template_zu5y5kp",
        {
          name: f.name,
          email: f.email,
          branch: f.branch,
          mobile: f.mobile,
        },
        "DXvJY-B4QuTSyviPN",
      );

      console.log("Registration:", f);

      setDone(true);
      setF(empty);
    } catch (error) {
      console.error("Email error:", error);
      alert("Registration failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="register" className="sec alt">
      <h2>Register</h2>

      {done ? (
        <p className="card big">
          You're in! 🎉
          <br />
          Registration details have been sent successfully.
        </p>
      ) : (
        <form className="form" onSubmit={submit}>
          <label>
            Full name
            <input
              required
              type="text"
              value={f.name}
              onChange={set("name")}
              placeholder="Enter your full name"
            />
          </label>

          <label>
            Email
            <input
              required
              type="email"
              value={f.email}
              onChange={set("email")}
              placeholder="Enter your email"
            />
          </label>

          <label>
            Branch and year
            <input
              required
              type="text"
              value={f.branch}
              onChange={set("branch")}
              placeholder="Example: MCCM 2nd Year"
            />
          </label>

          <label>
            Mobile Number
            <input
              required
              type="tel"
              value={f.mobile}
              onChange={set("mobile")}
              placeholder="Example: 7498585373"
              pattern="[0-9]{10}"
              maxLength="10"
            />
          </label>

          <button className="btn" type="submit" disabled={loading}>
            {loading ? "Registering..." : "Register"}
          </button>
        </form>
      )}
    </section>
  );
}
