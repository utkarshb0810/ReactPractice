import { useState } from "react"

const FormInput = () => {
  const [input,setInput] = useState('');
  return (
    <div>
      Name : <input type="text" onChange={(e)=>{
        setInput(e.target.value);
        // console.log(e.target.value);
      }}/>
      <p>User Input:{input}</p>
    </div>
  )
}

export default FormInput
