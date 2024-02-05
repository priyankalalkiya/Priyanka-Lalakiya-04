import { useRef } from "react";
import "./index.css";
import emailjs from "emailjs-com";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

const Contact = () => {
  const refForm = useRef();
  const customIcon = L.icon({
    iconUrl: require("../../Images/Location1.png"),
    iconSize: [25, 35],
  });

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_fu601ed",
        "template_iwbtix3",
        refForm.current,
        "fQiKDhxSwZhakyxbQ"
      )
      .then(
        (response) => {
          alert("Email sent successfully!");
          window.location.reload(false);
        },
        (error) => {
          console.error("Email not sent. Error:", error);
          alert("Email not sent. Please try again later.");
        }
      );
  };

  return (
    <>
    <section id='contact'>
      <div className="touch">
        <h1>Get In <span className="span">Touch</span></h1>
      </div>
      <div className="container-contact">
        <div className="contact-form">
          <h2 className="form-text">
            Please fill this form
          </h2>
          <form ref={refForm} onSubmit={sendEmail}>
            <ul>
              <li className="half">
                <input type="text" name="name" placeholder="Name" required />
              </li>
              <li className="half">
                <input type="email" name="email" placeholder="Email" required />
              </li>
              <li>
                <textarea
                  name="message"
                  placeholder="Message"
                  required
                ></textarea>
              </li>
            </ul>
            <li>
              <input
                type="submit"
                className="flat-button"
                value="Send Message"
              />
            </li>
          </form>
        </div>

          <div className="map">
            <MapContainer
              center={[22.3331, 70.8134]}
              zoom={13}
              scrollWheelZoom={false}
            >
              <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
              <Marker position={[22.3331, 70.8134]} icon={customIcon}>
                <Popup>R.K. University, Rajkot</Popup>
              </Marker>
            </MapContainer>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
