import React, {useState} from 'react';
import axios from 'axios';
import Navigation from './Navigation';


function Contact() {

  const [userDetails, setUserDetails] = useState({
    name: "",
    email: "",
    message: "",
    topic: "",
  });

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUserDetails({...userDetails, [name]:value});
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = ({...userDetails});
    console.log(userData);

    axios.post("http://localhost/siremar_data/Contact_Us.php", {userData: userData}).then(
      res => {
        console.log(res.data);
        if (res.data.message === 'Success'){
          alert ('Email sent successfully.');
        }
        else{
          alert('Failed');
        }
      }
    )
    handleReset(e)
  } 

  const handleReset = (e) => {
    setUserDetails({name:"", email:"", message:"", topic:""})
  }

  return (
    <>
    <Navigation/>
    <div className='center'>
      <h1>Got A Question?</h1>
      <h3>Send your message to the Admin of Margarita.</h3><br/>  
      <form action='' onSubmit={handleSubmit} onReset={handleReset}>
            <p>Name: <input type='text' name='name' value={userDetails.name} onChange={handleInput} required/></p>
            <p>Email: <input type='email' name='email' value={userDetails.email} onChange={handleInput} required/></p>
            <p>Topic: <input type='text' name='topic' value={userDetails.topic} onChange={handleInput} required/></p>
            <p>Message: <textarea name='message' value={userDetails.message} onChange={handleInput} required/></p><br/>
            <input type='submit' value='Submit'/> &nbsp;
            <input type='reset' value='Reset'/><br/><br/>
      </form>
    </div>
    </>
  )
}

export default Contact