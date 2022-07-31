import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {useHistory} from 'react-router';
import axios from 'axios';
import Navigation from './Navigation';


function Registration() {

  let history = useHistory();
  const [userRegistration,setUserRegistration] = useState({
    name : "",
    birthdate : "",
    contact_no : "",
    email : "",
    password : "",
    gender : "Male",
    role : "Resident",
  });

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUserRegistration({...userRegistration, [name]:value});
  };

  //const [records, setRecords] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();        

    //axios.post("http://localhost/siremar_data/Add_resident.php", {userData: userRegistration}).then(
    axios.post("http://localhost:8000/residents", userRegistration).then(
      res => {
        console.log("Response Data: "+Object.values(res.data));
        if (res.data.message === 'Success'){
          history.push("/login");
          alert(res.data.response_msg);
        }
        else{
          history.push("/login");
          alert(res.data.response_msg);
        }
        
      }
    )
    //handleReset(e)
  };

  const handleReset = (e) => {
    e.preventDefault();    
    setUserRegistration({name:"", birthdate:"", contact_no:"", email:"", password:"", gender:"Male"})
  };

  return (
    <>
    <Navigation/>
    <div  className='center'>
      <h1>Registration Page</h1><br/><br /> 
      <form action='' onSubmit={handleSubmit} onReset={handleReset}>
            <p>Name: <input type='text' name='name' value={userRegistration.name} onChange={handleInput} required/></p>
            <p>Birthdate: <input type='date' name='birthdate' value={userRegistration.birthdate} onChange={handleInput} required/></p>
            <p>Contact No: <input type='tel' pattern='[0-9]{10}' placeholder='10 Digits Only' name='contact_no' maxLength={10} value={userRegistration.contact_no} onChange={handleInput} required/></p>
            <p>Gender: <select name='gender' value={userRegistration.gender} onChange={handleInput}>
                <option name="male" value="Male">Male</option>
                <option name="female" value="Female">Female</option>
            </select></p>
            <p>Email: <input type='email' name='email'  value={userRegistration.email} onChange={handleInput} required/></p>
            <p>Password: <input type='password' name='password'  value={userRegistration.password} onChange={handleInput} required/></p>
            
            <input type='submit' value='Register'/> &nbsp;
            <input type='reset' value='Reset'/><br/><br/>
            <Link to='/login'>Already Register?</Link><br/><br/>
      </form>
    </div>
    </>
  )
}

export default Registration