import { useRef } from "react";
import "./index.css";
import emailjs from "emailjs-com";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

const Contact = () => {
  const refForm = useRef();

  const customIcon = L.icon({
    iconUrl: require("./popup.png"),
    iconSize: [38, 38],
  });

  const sendEmail = (e) => {
    e.preventDefault();
    console.log("Sending email...");
    emailjs
      .sendForm(
        "service_fu601ed",
        "template_iwbtix3",
        refForm.current,
        "fQiKDhxSwZhakyxbQ"
      )
      .then(
        (response) => {
          console.log("Email sent successfully:", response);
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
      <div className="touch">
        <h1>Get In Touch</h1>
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
          <MapContainer center={[22.3331, 70.8134]} zoom={13}>
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[22.3331, 70.8134]} icon={customIcon}>
              <Popup>R.K. University, Rajkot</Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
    </>
  );
};

export default Contact;
