export default function Venue() {
  return (
    <section id="venue" className="sec">
      <h2>Venue</h2>
      <p className="wide">
        Maharaja Celebrations. Besides D Mart, Takli Seem-Hingna Rd, Dangarpura,
        Wanadongri, Maharashtra 441110
        <br />
        Thursdayday, 08 October 2026, 10:00 AM
      </p>
      <iframe
        title="Maharaja celebrations map"
        loading="lazy"
        className="map"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3722.68518889598!2d78.9714133!3d21.085232199999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd495a64f0d0765%3A0x7bb1e77eba63ef01!2sMaharaja%20Celebrations!5e0!3m2!1sen!2sin!4v1790948535993!5m2!1sen!2sin"
      />
      <p>
        <a
          className="btn"
          target="_blank"
          rel="noreferrer"
          href="https://www.google.com/maps/place/Maharaja+Celebrations/@21.0852372,78.9688384,17z/data=!3m1!4b1!4m6!3m5!1s0x3bd495a64f0d0765:0x7bb1e77eba63ef01!8m2!3d21.0852322!4d78.9714133!16s%2Fg%2F11gsm4gs4l?authuser=0&entry=ttu&g_ep=EgoyMDI2MDkyOC4wIKXMDSoASAFQAw%3D%3D"
        >
          Open in Google Maps
        </a>
      </p>
    </section>
  );
}
