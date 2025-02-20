import { Calendar, ThemeIcon, Flag } from "../ui/Icons"
import "./LeftNavBar.scss"

export default function LeftNavBar() {
    return <nav className="left-navbar">
        <ListSection />
        <SettingsSection />
    </nav>
}

function ListSection() {
    return (
        <ul className="left-navbar-menu">
            <li>To-Do Notes</li>
            <li>Upcoming Notes</li>
            <li>Overdue Notes</li>
        </ul>
    )
}

function SettingsSection() {
    return <section className="left-navbar-section">
        <Calendar />
        <ThemeIcon />
        <Flag />
    </section>
}