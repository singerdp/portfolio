const TextareaField = (props) => {
     const { handleChange, label, name, value } = props;
     return (
          <div>
               <label className="name" htmlFor={name}>{label}</label>
               <textarea onChange={handleChange} name={name} rows="4" className=" bor" value={value}></textarea>
          </div>
     )
}

export default TextareaField