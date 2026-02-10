import { useNavigate } from "react-router";
import { saveCurrentUserToken, saveUser } from "../../services/localStorageHelper";
import './style.css'


export default function Registration() {
  const navigate = useNavigate();

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const email = formData.get("email") as string;
    const password = formData.get("password") as string; 
    const rememberMe = formData.get("rememberMe") === "on";
    const options = formData.get("options") as string;
    const token = Math.random().toString(36).substring(2);

    if( email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/) === null ){
        console.log("Invalid email format");
        return;
    }

    if( password.match(/^[0-9a-zA-Z]{8,16}$/) === null ){
        console.log("Invalid password format");
        return;
    }

    const user = {
      id: Date.now(),
      name: "",
      email: email,
      password: password,
      rememberMe: rememberMe,
      options: options,
      token: token,
      createdAt: new Date(),
      comments: []
    };

    saveUser(user);
    saveCurrentUserToken(token);
    navigate("/");
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="container-reg-login">
          <div className="center">
            <h1>Register</h1>
            <div className="txt_field">
              <label htmlFor="email">First name:</label>
              <input type="email" id="emailId" name="email" placeholder="Your email" required/>
            </div>
            <div className="txt_field">
              <label htmlFor="password">Last name:</label>
              <input 
                  type="password" 
                  id="passId" 
                  name="password" 
                  placeholder="password" 
                  pattern="[0-9a-zA-Z]{8,16}"
                  title="Enter an ID consisting of 8-16 alphanumeric characters"
                  required
                  />
            </div>
            <div className="check">
              <label htmlFor="rememberMe">Remember me:</label>
              <input type="checkbox" id="rememberMeId" name="rememberMe"/>
            </div>
            <div className="op">
              <input type="radio" id="male" name="options" value="male" defaultChecked/>
              <label htmlFor="male">Male</label>
              <input type="radio" id="female" name="options" value="female"/>
              <label htmlFor="female">Female</label>
            </div>
            <div>
              <input type="submit" value="Sign Up"></input>
            </div>
            <div className="link">
                <p>Have an Account? <a href="/login">Login Here</a></p>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}