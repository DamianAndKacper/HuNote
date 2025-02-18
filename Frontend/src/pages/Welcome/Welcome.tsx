import "./Welcome.scss"
import {WelcomeText} from "../../data/constants.ts"
import notebook from "../../assets/icons/notebook.webp";


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
        <div className="login-div">
            <p className="welcome">{WelcomeText.Welcome}</p>
            <p>{WelcomeText.LoginMessage}</p>
            <img src={notebook} alt="Notebook"/>
            <form>
                <input type="email" placeholder='{WelcomeText.Email}'/>
                <input type="password" placeholder='{WelcomeText.Password}'/>
                <input type="button" placeholder='{WelcomeText.Login}'/>
                <input type="button" placeholder='{WelcomeText.Register}'/>
                <input type="button" placeholder='{WelcomeText.Google}'/>
            </form>
        </div>
    </section>
    
}