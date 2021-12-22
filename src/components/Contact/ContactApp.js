import Contact from "../Contact/Contact";
import './Contact.css'

function ContactApp() {
  return (
    <div className="h-screen">
      <div className="lg:grid-cols-2 lg:gap-6 bg-blue-300 lg:h-2/3">
        <div className="flex">
          <h1 className="uppercase ">Contact Me</h1>
          <h2 className="feel">Feel free to colloborate</h2>
        </div>
        <Contact />
      </div>
    </div>
  );
}

export default ContactApp;
