import './Contact.css'  
const InputField = (props) => {
     const { handleChange, label, name, type, value } = props;
     return (
       <div className="mar">
         <label className="name" htmlFor={name}>{label}</label>
         <input className="bors" type={type} onChange={handleChange} value={value} name={name} required />
       </div>
     )
   }
   
   export default InputField