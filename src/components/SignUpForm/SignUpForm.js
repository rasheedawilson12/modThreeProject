import React from "react";
import { useState } from "react";
import { signUp } from "../../utilities/users-service";

function SignUpForm({ setUser }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirm: "",
    error: "",
  });

  const disable = formData.password !== formData.confirm;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    // if(formData.password !== formData.confirm) setFormData({...formData, disable: !formData.disable})
  };

  const handleSubmit = async (e) => {
    // Prevent form from being submitted to the server
    e.preventDefault();
    try {
      // We don't want to send the 'error' or 'confirm' property,
      //  so let's make a copy of the state object, then delete them
      const newFormData = { ...formData };
      delete newFormData.error;
      delete newFormData.confirm;
      // or
      // const {name, email, password} = formData
      const user = await signUp(newFormData);
      setUser(user);
    } catch {
      // An error occurred
      setFormData({ error: "Sign Up Failed - Try Again" });
    }
  };

  return (
    <div className="formContainer">
      <div className="signUpForm">
        <form autoComplete="off" onSubmit={handleSubmit}>
          <label>Name: </label>
          <input
            type="text"
            name="name"
            defaultValue={formData.name}
            onChange={handleChange}
            required
          />
          <br/>
          <label>Email: </label>
          <input
            type="email"
            name="email"
            defaultValue={formData.email}
            onChange={handleChange}
            required
          />
          <br/>
          <label>Password: </label>
          <input
            type="password"
            name="password"
            defaultValue={formData.password}
            onChange={handleChange}
            required
          />
          <br/>
          <label>Confirm: </label>
          <input
            type="password"
            name="confirm"
            defaultValue={formData.confirm}
            onChange={handleChange}
            required
          />
          <br/>
          <button type="submit" disabled={disable}>
            SIGN UP
          </button>
        </form>
      </div>
      <p className="error-message">&nbsp;{formData.error}</p>
    </div>
  );
}

export default SignUpForm;

// import { Component } from "react";

// export default class SignUpForm extends Component {
//   state = {
//     name: "",
//     email: "",
//     password: "",
//     confirm: "",
//     error: "",
//   };

//   handleChange = (evt) => {
//     this.setState({
//       [evt.target.name]: evt.target.value,
//       error: "",
//     });
//   };

//   handleSubmit = (evt) => {
//     evt.preventDefault();
//     alert(JSON.stringify(this.state));
//   }

//   render() {
//     const disable = this.state.password !== this.state.confirm;
//     return (
//       <div>
//         <div className="form-container">
//           <form autoComplete="off" onSubmit={this.handleSubmit}>
//             <label>Name</label>
//             <input
//               type="text"
//               name="name"
//               value={this.state.name}
//               onChange={this.handleChange}
//               required
//             />
//             <label>Email</label>
//             <input
//               type="email"
//               name="email"
//               value={this.state.email}
//               onChange={this.handleChange}
//               required
//             />
//             <label>Password</label>
//             <input
//               type="password"
//               name="password"
//               value={this.state.password}
//               onChange={this.handleChange}
//               required
//             />
//             <label>Confirm</label>
//             <input
//               type="password"
//               name="confirm"
//               value={this.state.confirm}
//               onChange={this.handleChange}
//               required
//             />
//             <button type="submit" disabled={disable}>
//               SIGN UP
//             </button>
//           </form>
//         </div>
//         <p className="error-message">&nbsp;{this.state.error}</p>
//       </div>
//     );
//   }
// }
