
// // // import axios from "axios";
// // // import React, { useRef } from "react";
// // // import {useNavigate } from "react-router-dom";


// // // const Login = () => {
// // //     const txtemail = useRef();
// // //     const txtpassword = useRef();
// // //     const navigate = useNavigate();

// // //     const handleSubmit = (e) => {
// // //         e.preventDefault();
// // //         var email = txtemail.current.value;
// // //         var password = txtpassword.current.value;

// // //         var params = new FormData();
// // //         params.set('email', email);
// // //         params.set('password', password);
// // //         console.log(params);
// // //         axios.post('http://localhost/projects/api/login-api.php', params).then(function (response) {
// // //             // handle success
// // //             console.log(response);
// // //             if (response.data['status'] == 'yes') {
// // //                 alert("Login Success.");
// // //                 localStorage.setItem('isLogin','yes');
// // //                 localStorage.setItem('email',email);
// // //                 navigate('/Home');
// // //             }
// // //             else {
// // //                 alert("Login Fail.");
// // //             }
// // //         })

// // //     }
// // //     return(
// // //         <>
    
// // // <div className="login" id="login-f">
// // //   <div class="login-container">
// // //     <img src="assets/images/l2.png" alt="Login Image" class="login-image"/> 
// // //     <div class="login-form">
// // //       <h2>Login </h2>
// // //       <p>Please register in using your personal information to stay connected with us.</p>
// // //       <form  onSubmit={handleSubmit}>
// // //         <div class="form-group">
// // //           <label for="email">Email</label>
// // //           <input type="email" id="email" name="email" placeholder="Enter your email" required ref={txtemail}/>
// // //         </div>
// // //         <div class="form-group">
// // //           <label for="password">Password</label>
// // //           <input type="password" id="password" name="password" placeholder="Enter your password" required  ref={txtpassword}/>
// // //         </div>
// // //         <button type="submit" name="submit" class="btn btn-primary">Login</button>
// // //       </form>
// // //     </div>
// // //   </div>
// // //   </div>
// // //         </>
// // //     );
// // // }

// // // export default Login;


// // import axios from "axios";
// // import React, { useRef, useState } from "react";
// // import { useNavigate } from "react-router-dom";

// // const Login = () => {
// //     const [isLogin, setIsLogin] = useState(true);
// //     const txtemail = useRef();
// //     const txtpassword = useRef();
// //     const txtname = useRef();
// //     const navigate = useNavigate();

// //     const handleSubmit = (e) => {
// //         e.preventDefault();
// //         var email = txtemail.current.value;
// //         var password = txtpassword.current.value;
// //         var params = new FormData();
// //         params.set('email', email);
// //         params.set('password', password);

// //         if (isLogin) {
// //             axios.post('http://localhost/projects/api/login-api.php', params).then(function (response) {
// //                 console.log(response);
// //                 if (response.data['status'] === 'yes') {
// //                     alert("Login Success.");
// //                     localStorage.setItem('isLogin', 'yes');
// //                     localStorage.setItem('email', email);
// //                     navigate('/Home');
// //                 } else {
// //                     alert("Login Failed.");
// //                 }
// //             });
// //         } else {
// //             var name = txtname.current.value;
// //             params.set('name', name);
// //             axios.post('http://localhost/projects/api/signup-api.php', params).then(function (response) {
// //                 console.log(response);
// //                 if (response.data['status'] === 'yes') {
// //                     alert("Signup Successful. Please Login.");
// //                     setIsLogin(true);
// //                 } else if (response.data['status'] === 'exists') {
// //                     alert("Email already exists. Please use another email.");
// //                 } else {
// //                     alert("Signup Failed.");
// //                 }
// //             });
// //         }
// //     };

// //     return (
// //         <>
// //             <div className="login" id="login-f">
// //                 <div className="login-container">
// //                     <img src="assets/images/l2.png" alt="Login Image" className="login-image" />
// //                     <div className="login-form">
// //                         <h2>{isLogin ? "Login" : "Sign Up"}</h2>
// //                         <p>{isLogin ? "Please login using your personal information." : "Create an account to get started."}</p>
// //                         <form onSubmit={handleSubmit}>
// //                             {!isLogin && (
// //                                 <div className="form-group">
// //                                     <label htmlFor="name">Name</label>
// //                                     <input type="text" id="name" name="name" placeholder="Enter your name" required ref={txtname} />
// //                                 </div>
// //                             )}
// //                             <div className="form-group">
// //                                 <label htmlFor="email">Email</label>
// //                                 <input type="email" id="email" name="email" placeholder="Enter your email" required ref={txtemail} />
// //                             </div>
// //                             <div className="form-group">
// //                                 <label htmlFor="password">Password</label>
// //                                 <input type="password" id="password" name="password" placeholder="Enter your password" required ref={txtpassword} />
// //                             </div>
// //                             <button type="submit" name="submit" className="btn btn-primary">{isLogin ? "Login" : "Sign Up"}</button>
// //                         </form>
// //                         <p>
// //                             {isLogin ? "Don't have an account? " : "Already have an account? "}
// //                             <button className="switch-btn" onClick={() => setIsLogin(!isLogin)}>
// //                                 {isLogin ? "Sign Up" : "Login"}
// //                             </button>
// //                         </p>
// //                     </div>
// //                 </div>
// //             </div>
// //         </>
// //     );
// // }

// // export default Login;

// import axios from "axios";
// import React, { useRef, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import "./login.css";

// export default function Login() {
//   const [isSignUp, setIsSignUp] = useState(false);
//   const txtemail = useRef();
//   const txtpassword = useRef();
//   const txtname = useRef();
//   const navigate = useNavigate();

//   const toggleForm = () => {
//     setIsSignUp(!isSignUp);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     var email = txtemail.current.value;
//     var password = txtpassword.current.value;
//     var params = new FormData();
//     params.set("email", email);
//     params.set("password", password);

//     if (!isSignUp) {
//       axios.post("http://localhost/projects/api/login-api.php", params).then((response) => {
//         console.log(response);
//         if (response.data["status"] === "yes") {
//           alert("Login Success.");
//           localStorage.setItem("isLogin", "yes");
//           localStorage.setItem("email", email);
//           navigate("/Home");
//         } else {
//           alert("Login Failed.");
//         }
//       });
//     } else {
//       var name = txtname.current.value;
//       params.set("name", name);
//       axios.post("http://localhost/projects/api/signup-api.php", params).then((response) => {
//         console.log(response);
//         if (response.data["status"] === "yes") {
//           alert("Signup Successful. Please Login.");
//           setIsSignUp(false);
//         } else if (response.data["status"] === "exists") {
//           alert("Email already exists. Please use another email.");
//         } else {
//           alert("Signup Failed.");
//         }
//       });
//     }
//   };

//   return (
//     <div className={`cont ${isSignUp ? "s--signup" : ""}`}>
//       <div className="form sign-in">
//         <h2>Welcome</h2>
//         <form onSubmit={handleSubmit}>
//           <label>
//             <span>Email</span>
//             <input type="email" ref={txtemail} required />
//           </label>
//           <label>
//             <span>Password</span>
//             <input type="password" ref={txtpassword} required />
//           </label>
//           <p className="forgot-pass">Forgot password?</p>
//           <button type="submit" className="submit">Sign In</button>
//         </form>
//       </div>

//       <div className="sub-cont">
//         <div className="img">
//           <div className="img__text m--up">
//             <h3>Don't have an account? Please Sign up!</h3>
//           </div>
//           <div className="img__text m--in">
//             <h3>If you already have an account, just sign in.</h3>
//           </div>
//           <div className="img__btn" onClick={toggleForm}>
//             <span className="m--up">Sign Up</span>
//             <span className="m--in">Sign In</span>
//           </div>
//         </div>
//         <div className="form sign-up">
//           <h2>Create your Account</h2>
//           <form onSubmit={handleSubmit}>
//             <label>
//               <span>Name</span>
//               <input type="text" ref={txtname} required={isSignUp} disabled={!isSignUp} />
//             </label>
//             <label>
//               <span>Email</span>
//               <input type="email" ref={txtemail} required />
//             </label>
//             <label>
//               <span>Password</span>
//               <input type="password" ref={txtpassword} required />
//             </label>
//             <button type="submit" className="submit">{isSignUp ? "Sign Up" : "Sign In"}</button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }

import axios from "axios";
import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";

export default function Login() {
  const [isSignUp, setIsSignUp] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const txtemail = useRef();
  const txtpassword = useRef();
  const txtname = useRef();
  const navigate = useNavigate();

  const toggleForm = () => {
    setIsSignUp(!isSignUp);
    setErrorMessage(""); // Clear error on form switch
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = txtemail.current.value;
    const password = txtpassword.current.value;
    const params = new FormData();
    params.set("email", email);
    params.set("password", password);

    if (isSignUp) {
      const name = txtname.current.value;
      params.set("name", name);
    }

    const apiURL = isSignUp
      ? "http://localhost/projects/api/signup-api.php"
      : "http://localhost/projects/api/login-api.php";

    setLoading(true); // Start loading spinner

    try {
      const { data } = await axios.post(apiURL, params);
      setLoading(false); // Stop loading spinner

      if (data.status === "yes") {
        alert(isSignUp ? "Signup successful!" : "Login successful!");
        if (!isSignUp) {
          localStorage.setItem("isLogin", "yes");
          localStorage.setItem("email", email);
          navigate("/Home");
        } else {
          setIsSignUp(false); // Switch back to login
        }
      } else {
        setErrorMessage(
          data.status === "exists" ? "Email already exists!" : "Operation failed."
        );
      }
    } catch (error) {
      setLoading(false); // Stop loading spinner
      setErrorMessage("An error occurred. Please try again.");
      console.error(error);
    }
  };

  return (
    <>
    <div className="main-l">
    <div className={`cont ${isSignUp ? "s--signup" : ""}`} >
      <div className="form sign-in">
        <h2>Welcome</h2>
        <form onSubmit={handleSubmit}>
          <label>
            <span>Email</span>
            <input type="email" ref={txtemail} required  className="l-input"/>
          </label>
          <label>
            <span>Password</span>
            <input type="password" ref={txtpassword} required className="l-input"/>
          </label>
          {/* <p className="forgot-pass">Forgot password?</p> */}
          <button type="submit" className="submit l-btn" >
            {loading ? "Loading..." : "Sign In"}
          </button>
        </form>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
      </div>

      <div className="sub-cont">
        <div className="l-img">
          <div className="l-img__text m--up">
            <h3>Don't have an account? Please Sign up!</h3>
          </div>
          <div className="l-img__text m--in">
            <h3>If you already have an account, just sign in.</h3>
          </div>
          <div className="l-img__btn" onClick={toggleForm}>
            <span className="m--up">Sign Up</span>
            <span className="m--in">Sign In</span>
          </div>
        </div>
        <div className="form sign-up">
          <h2>Create your Account</h2>
          <form onSubmit={handleSubmit}>
            {isSignUp && (
              <label>
                <span>Name</span>
                <input type="text" ref={txtname} required className="l-input"/>
              </label>
            )}
            <label>
              <span>Email</span>
              <input type="email" ref={txtemail} required className="l-input"/>
            </label>
            <label>
              <span>Password</span>
              <input type="password" ref={txtpassword} required className="l-input"/>
            </label>
            <button type="submit" className="submit l-btn" >
              {loading ? "Loading..." : isSignUp ? "Sign Up" : "Sign In"}
            </button>
          </form>
          {errorMessage && <p className="error-message">{errorMessage}</p>}
        </div>
      </div>
    </div>
    </div>
    </>
  );
}
