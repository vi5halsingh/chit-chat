import { useState } from "react";
import "./Auth.css";
import socket from "../utils/socket";
import { registerUser } from "../features/user/userthunk";
import {useDispatch, useSelector} from "react-redux"
import {useNavigate} from "react-router-dom"
import { clearuser } from "../features/user/userReducer";

const Auth = () => {

  const User = useSelector(state => state.users.user)
  const [isLogin, setIsLogin] = useState(true);
  const [user, setUser ] = useState({
    name : User?.name,
    email : User?.email,
    userName : User?.userName,
    password : User?.password
  })
  const [photo, setPhoto] = useState(null)

  const dispatch = useDispatch()
  const navigate = useNavigate()


  const onChangeHandler = (e) =>{
  
    const value = e.target.value;
    const name = e.target.name;
      setUser((pre) =>({...pre,[name] : value}))
  }


    const data = new FormData()
    data.append("name",user.name)
    data.append("email",user.email)
    data.append("userName",user.userName)
    data.append("password",user.password)

    if(photo){
      data.append("photo",photo)
    }

  const registerHandler = async(e) =>{
    if(!user){
      throw new Error("all firlds are required");
    }
    console.log(user)
    dispatch(registerUser(data));
    dispatch(clearuser())
    navigate("/")
  }

  const loginHandler = async(e) =>{
    e.preventDefault();
    // dispatch(registerUser(user));
    navigate("/")
  }

 const  onClickHandler = (e) =>{
  e.preventDefault()
   
    if(isLogin){
      loginHandler()
    }else{
      registerHandler()
    }
  }



  return (
    <div className="auth-page">
      <section className="auth-visual">
        <div className="brand">
          <div className="brand-icon">G</div>
          <span>guardian</span>
        </div>

        <div className="visual-content">
          <span className="eyebrow">YOUR SPACE. YOUR PEOPLE.</span>

          <h1>
            Conversations
            <br />
            that bring
            <br />
            <span>people closer.</span>
          </h1>

          <p>
            Connect with your people, share your thoughts,
            and make every conversation count.
          </p>
        </div>

        <div className="visual-bottom">
          <span>© 2026 Guardian</span>
          <span>MADE FOR CONNECTION</span>
        </div>
      </section>

      <section className="auth-form-section">
        <div className="auth-form-container">
          <div className="mobile-brand">
            <div className="brand-icon">G</div>
            <span>guardian</span>
          </div>

          <div className="form-heading">
            <span className="form-label">
              {isLogin ? "WELCOME BACK" : "JOIN GUARDIAN"}
            </span>

            <h2>
              {isLogin ? "Welcome back" : "Create account"}
              <span>.</span>
            </h2>

            <p>
              {isLogin
                ? "Enter your details to access your account."
                : "Create your account and start connecting."}
            </p>
          </div>

          <div className="auth-tabs">
            <button
              type="button"
              className={isLogin ? "active" : ""}
              onClick={() => setIsLogin(true)}
            >
              Sign in
            </button>

            <button
              type="button"
              className={!isLogin ? "active" : ""}
              onClick={() => setIsLogin(false)}
            >
              Create account
            </button>
          </div>

          <form>
            {!isLogin && (
              <>
                <div className="input-group">
                  <label htmlFor="name">Full name</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Enter your full name"
                    autoComplete="name"
                    onChange={onChangeHandler}
                  />
                </div>

                <div className="input-group">
                  <label htmlFor="userName">Username</label>
                  <input
                    id="userName"
                    name="userName"
                    type="text"
                    placeholder="Choose a username"
                    autoComplete="username"
                    onChange={onChangeHandler}
                  />
                </div>
              </>
            )}

            <div className="input-group">
              <label htmlFor="email">
                {isLogin ? "Email or username" : "Email address"}
              </label>

              <input
                id="email"
                name="email"
                type={isLogin ? "text" : "email"}
                placeholder={
                  isLogin
                    ? "Enter your email or username"
                    : "you@example.com"
                }
                autoComplete="email"
                onChange={onChangeHandler}
              />
            </div>

            <div className="input-group">
              <label htmlFor="password">Password</label>

              <input
                id="password"
                name="password"
                type="password"
                placeholder="Enter your password"
                autoComplete={
                  isLogin ? "current-password" : "new-password"
                }
                onChange={onChangeHandler}
              />
            </div>
             <div className="input-group">
              <label htmlFor="password">Password</label>

              <input
                id="photo"
                name="photo"
                type="file"
                accept="image/webp, image/avif"
                placeholder="choose your profile photo"
                onChange={(e) =>{setPhoto(e.target.files[0] || null)}}
              />
            </div>

            {isLogin && (
              <div className="login-options">
                <label className="remember-option">
                  <input type="checkbox" />
                  <span>Remember me</span>
                </label>

                <a href="#forgot-password">Forgot password?</a>
              </div>
            )}

            <button className="submit-button" type="submit" onClick={ onClickHandler}>
              {isLogin ? "Sign in" : "Create account"}
              <span>→</span>
            </button>
          </form>

          <div className="divider">
            <span>OR CONTINUE WITH</span>
          </div>

          <button className="google-button" type="button">
            <span className="google-icon">G</span>
            Continue with Google
          </button>

          <p className="form-footer">
            {isLogin
              ? "Don't have an account?"
              : "Already have an account?"}

            <button
              type="button"
              className="auth-switch-link"

             
            >
              {isLogin ? "Create one" : "Sign in"}
            </button>
          </p>

          <p className="terms">
            By continuing, you agree to our{" "}
            <a href="#terms">Terms</a> and{" "}
            <a href="#privacy">Privacy Policy</a>.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Auth;