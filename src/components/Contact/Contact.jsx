import { useEffect, useState } from "react"
import InputField from "./InputField"

import TextareaField from "./TextareaField";
import emailjs from 'emailjs-com';

const Contact = () => {
  const [values, setValues] = useState({
    fullName: '',
    email: '',
    role: '',
    message: ''
  });
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.send('service_cma1l5n', 'template_dqhxeh3', values, 'user_EZ0H4vVzE3ww6swsb0My3')
      .then(response => {
        console.log('SUCCESS!', response);
        setValues({
          fullName: '',
          email: '',
          role: '',
          message: ''
        });
        setStatus('SUCCESS');
      }, error => {
        console.log('FAILED...', error);
      });
  }

  useEffect(() => {
    if (status === 'SUCCESS') {
      setTimeout(() => {
        setStatus('');
      }, 3000);
    }
  }, [status]);

  const handleChange = (e) => {
    setValues(values => ({
      ...values,
      [e.target.name]: e.target.value
    }))
  }
  return (
    <div>
    <h3 className="msg">Drop a Mail</h3>
    <div className="forms">
      {status && renderAlert()}
      <form onSubmit={handleSubmit}>
        <InputField style={divstyle}value={values.fullName} handleChange={handleChange}  name="fullName" type="text" placeholder="  Your Name" />
        <InputField value={values.email} handleChange={handleChange} name="email" type="email" placeholder=" Your Email" />
        
        <TextareaField value={values.message} handleChange={handleChange}  type="text" name="message" />
        <button type="submit" className="sub ">Send </button>
      </form>
    </div></div>
  )
}
const divstyle={
  position: 'absolute',
  'border-radius': '20px',
  top:'0px',
  left:'0px',
  color:'white',
  width:'250px',
  height:'40px'
}

const renderAlert = () => (
  <div className="success">
    <p>your message submitted successfully</p>
  </div>
)

export default Contact