import "./Welcome.scss"
import { WelcomeText } from "../../data/constants.ts"
import notebook from "../../assets/icons/notebook.webp";
import { Flag } from "../../components/ui/Icons.tsx"
import GoogleIcon from '@mui/icons-material/Google';


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
    return <section className="login-div-space">
        <button className="language"><Flag /></button>
        <div className="login-div">
            <h2>{WelcomeText.Welcome}</h2>
            <p>{WelcomeText.LoginMessage}</p>
            <img src={notebook} alt="Notebook" />
            <form>
                <input type="email" placeholder={WelcomeText.Email} />
                <input type="password" placeholder={WelcomeText.Password} />
                <div className="button-container">
                    <button className="loginRegister">{WelcomeText.Login}</button>
                    <button className="loginRegister">{WelcomeText.Register}</button>
                </div>
                <button className="google"><GoogleIcon className="googleIcon" />{WelcomeText.Google}</button>
            </form>
        </div>
    </section>
}