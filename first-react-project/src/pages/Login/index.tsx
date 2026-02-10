import { useNavigate } from "react-router";
import { loginUser } from "../../services/localStorageHelper";

export default function Login() {
  const navigate = useNavigate();

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const email = formData.get("email") as string;
    const password = formData.get("password") as string; 

    if( email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/) === null ){
        console.log("Invalid email format");
        return;
    }

    if( password.match(/^[0-9a-zA-Z]{8,16}$/) === null ){
        console.log("Invalid password format");
        return;
    }

    
    const isLoginSuccessful = loginUser(email, password);
    
    if (!isLoginSuccessful) {
        console.log("Invalid email or password");
        return;
    }
    navigate("/");
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="container-reg-login">
            <div className="center">
                <h1>Login</h1>
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
                      required
                      />
                </div>
                <div>
                  <input type="submit" value="Submit"></input>
                </div>
                <div className="link">
                    <p>If you don't have an account yet, <a href="/registration">register</a></p>
                </div>
            </div>
        </div>
      </form>
    </div>
  );
}