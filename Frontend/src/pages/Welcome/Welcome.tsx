import "./Welcome.scss"
import { WelcomeText } from "../../data/constants.ts"
import notebook from "../../assets/icons/notebook.webp";
import poland from "../../assets/icons/poland.webp";
import GoogleIcon from '@mui/icons-material/Google';
import UndoIcon from '@mui/icons-material/Undo';
import { PolishFlag } from "../../components/ui/Icons.tsx"
import { useState } from "react";
import "../../utils/preventDefault.ts"

interface LoginOrRegisterProps {
    loginView?: LoginView;
    setLoginView: React.Dispatch<React.SetStateAction<LoginView>>;
}
enum LoginView {
    Default,
    Login,
    Register
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
                <PolishFlag />
            </button>
        </div>
        <div className="login-div">
            <h2>{WelcomeText.Welcome}</h2>
            <p>{loginView == LoginView.Register ? WelcomeText.RegisterMessage : WelcomeText.LoginMessage}</p>
            <img src={notebook} alt="Notebook" />
            <form>
                <LoginOrRegister loginView={loginView} setLoginView={setLoginView} />
                <button className="google"><GoogleIcon className="googleIcon" />{WelcomeText.Google}</button>
            </form>
        </div>
    </section>
}
function LoginOrRegister({ loginView, setLoginView }: LoginOrRegisterProps) {
    let content = <></>
    switch (loginView) {
        case LoginView.Default:
            content = <div className="button-container default-style">
                <LoginButton setLoginView={setLoginView} />
                <RegisterButton setLoginView={setLoginView} />
            </div>
            break;
        case LoginView.Login:
            content = <><Login />
                <div className="button-container">
                    <GoBackButton setLoginView={setLoginView} />
                    <LoginButton setLoginView={setLoginView} />
                </div>
            </>
            break;
        case LoginView.Register:
            content = <><Register />
                <div className="button-container">
                    <GoBackButton setLoginView={setLoginView} />
                    <RegisterButton setLoginView={setLoginView} />
                </div></>
            break;
        default:
            break;
    }
    return content
}

function Login() {
    return (
        <>
            <input type="email" placeholder={WelcomeText.Email} />
            <input type="password" placeholder={WelcomeText.Password} />
        </>
    )
}

function Register() {
    return (
        <>
            <input type="text" placeholder={WelcomeText.Name} />
            <input type="text" placeholder={WelcomeText.Username} />
            <Login />
        </>
    )
}

function LoginButton({ setLoginView }: LoginOrRegisterProps) {
    return <button className="login-register" onClick={() => setLoginView(LoginView.Login)}>{WelcomeText.Login}</button>
}

function RegisterButton({ setLoginView }: LoginOrRegisterProps) {
    return <button className="login-register" onClick={() => setLoginView(LoginView.Register)}>{WelcomeText.Register}</button>
}

function GoBackButton({ setLoginView }: LoginOrRegisterProps) {
    return <button className="goBack" onClick={() => setLoginView(LoginView.Default)}><UndoIcon className="goBackIcon" /></button>
}