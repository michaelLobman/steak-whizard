import { useState } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import LoginForm from "../components/LoginForm";
import NavBar from "../components/NavBar";
import SignUpForm from "../components/SignUpForm";

function Login({ onLogin, steaks }){

    const [showLogin, setShowLogin] = useState(true);

    return(
        <div>
            <NavBar />
            {showLogin ? (
                <>
                    <LoginForm onLogin={onLogin} />
                    <Container className="show-container">
                        <p>Don't have an account?</p>
                        <Button 
                            type="button" 
                            variant="info"
                            onClick={(() => setShowLogin(!showLogin))}
                        >
                            Sign Up
                        </Button>
                    </Container>
                </>
               ) : (
                <>
                    <SignUpForm onSignUp={onLogin} steaks={steaks} />
                    <Container className="show-container">
                        <p>Have an account?</p>
                        <Button
                            type="button"
                            variant="info"
                            onClick={(() => setShowLogin(!showLogin))}
                        >
                            Login
                        </Button>
                    </Container>
                </>

            )}

        </div>
    )


}

export default Login;