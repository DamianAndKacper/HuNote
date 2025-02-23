import "./Welcome.scss"
import {WelcomeText} from "../../data/constants.ts"
import notebook from "../../assets/icons/notebook.webp";
import poland from "../../assets/icons/poland.webp";
import GoogleIcon from '@mui/icons-material/Google';
import UndoIcon from '@mui/icons-material/Undo';
import {useState} from "react";
import "../../utils/preventDefault.ts"

interface LoginOrRegisterProps {
    loginView: LoginView;
    setLoginView: React.Dispatch<React.SetStateAction<LoginView>>;
}

export default function Welcome() {
    return <main className="welcome-main-div">
        <WelcomeTextSection />
        <LoginSection />
    </main>
}

function WelcomeTextSection() {
    return <section className="welcome-text-div">
        <label className="appName">{WelcomeText.AppName}</label>
        <label className="invitationMessage">{WelcomeText.Invitation}</label>
    </section>
}

function LoginSection() {
    const [loginView, setLoginView] = useState(LoginView.Default);
    return <section className="login-div-space">
        <div className="language-space">
            <button className="language">
                <img src={poland} className="poland" alt="Poland"/>
            </button>
        </div>
        <div className="login-div">
            <h2>{WelcomeText.Welcome}</h2>
            <p>{loginView == LoginView.Register ? WelcomeText.RegisterMessage: WelcomeText.LoginMessage}</p>
            <img src={notebook} alt="Notebook"/>
            <form>
                <LoginOrRegister loginView={loginView} setLoginView={setLoginView}/>
                <button className="google"><GoogleIcon className="googleIcon"/>{WelcomeText.Google}</button>
            </form>
        </div>
    </section>
}
function LoginOrRegister({ loginView, setLoginView }: LoginOrRegisterProps){
    let test
    let przyciski
    switch (loginView) {
        case LoginView.Default:
            przyciski = <div className="button-container default-style">
            <button className="login-register" onClick={() => setLoginView(LoginView.Login)}>{WelcomeText.Login}</button>
            <button className="login-register" onClick={() => setLoginView(LoginView.Register)}>{WelcomeText.Register}</button>
            </div>
            break;
        case LoginView.Login:
            przyciski = <div className="button-container">
            <button className="goBack" onClick={() => setLoginView(LoginView.Default)}><UndoIcon className="goBackIcon"/></button>
            <button className="login-register" onClick={() => setLoginView(LoginView.Login)}>{WelcomeText.Login}</button>
            </div>
            test = <Login/>
            break;
        case LoginView.Register:
            przyciski = <div className="button-container">
            <button className="goBack" onClick={() => setLoginView(LoginView.Default)}><UndoIcon className="goBackIcon"/></button>
            <button className="login-register" onClick={() => setLoginView(LoginView.Register)}>{WelcomeText.Register}</button>
            </div>
            test = <Register/>
            break;
        default:
            break;
    }
    return(
        <>
            {test}
            {przyciski}
        </>
    )
}

function EmailPassword(){
    return(
        <>
            <input type="email" placeholder={WelcomeText.Email}/>
            <input type="password" placeholder={WelcomeText.Password}/>
        </>
    )
}

function Login(){
    return(
        <>
            <EmailPassword/>
        </>
    )
}

function Register(){
    return(
        <>
            <input type="text" placeholder={WelcomeText.Name}/>
            <input type="text" placeholder={WelcomeText.Username}/>
            <EmailPassword/>
        </>
    )
}

enum LoginView{
    Default,
    Login,
    Register
}