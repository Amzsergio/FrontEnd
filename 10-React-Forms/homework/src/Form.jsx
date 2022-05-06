import React from 'react';


export function validationForm(input) {
  let errors = {};
  if (!input.username) {
    errors.username = 'Username is required';
  } else if (!/\S+@\S+\.\S+/.test(input.username)) {
    errors.username = 'Username is invalid';
  }

  if (!input.password){
      errors.password = 'Password is required'
  } else if(!/(?=.*[0-9])/.test(input.password)){
      errors.password = 'Password is invalid'
  }

  return errors;
};



export default function  Form() {

  const [stateInputs, setStateInputs] = React.useState({
    username: '',
    password: ''
  })

  const [errors, setErrors] = React.useState({
    username: 'Username is empty',
    password: 'Password is empty'
  }); // Here, it could be contain a default value, to avoid the form started without any control. (3)
  

  const onHandleInputs = (e) => {
    setStateInputs({
      ...stateInputs, // this is because password was being lost. 
      [e.target.name]: e.target.value//[e.target.name]: is "username" (1)
    })
    console.log(errors)


    setErrors(validationForm({
      ...stateInputs,
      [e.target.name]: e.target.value
    }));


  }

  const HandleOnSubmit = (e) => {
    e.preventDefault() // (2) this avoids to reload the website. 
    errors.username ? alert('Username is invalid') : errors.password ? alert('Password is invalid') : alert("Info sent")
    setStateInputs({
      username: '',
      password: ''
    }) // this is only to set again "" the boxes
  }


  return (
    <form onSubmit={(e) => HandleOnSubmit(e)}> {/* Since I need to use the preventdefault function, it is send the event. */}
      <div>
        <label>Username:</label>
        <input 
          className={errors.username ? 'danger' : null}
          type="text"
          name="username" // (1) 
          value={stateInputs.username} 
          onChange={(e) => onHandleInputs(e)}
          />
          {errors.username ? <p className='danger'> {errors.username} </p> : null}
      </div>
      <br />
      <div>
        <label>Password:</label>
        <input 
          className={errors.password ? 'danger' : null}
          type="password" 
          name="password" 
          value={stateInputs.password}
          onChange={(e) => onHandleInputs(e)}
          />
          {errors.password ? <p className='danger'> {errors.password} </p> : null}
      </div>

      <input type="submit"/> {/* disabled={Object.keys(errors).length > 0 ? true : false} ==> This could be replaced by reference (3), but with the problem the first time the form is started */}
    </form>
  )
}
