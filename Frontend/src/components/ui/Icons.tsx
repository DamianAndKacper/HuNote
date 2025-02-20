import "../styles.scss"
import calendar from "../../assets/icons/calendar.svg";
import themeIcon from "../../assets/icons/themeIcon.svg";
import polishFlag from "../../assets/icons/poland.webp";

export function Calendar() {
    return (
        <img src={calendar} className="calendar" alt="Poland" />
    )
}

export function ThemeIcon() {
    return (
        <img src={themeIcon} className="theme-icon" alt="Poland" />
    )
}

export function Flag() {
    return (
        <img src={polishFlag} className="flag" alt="Poland" />
    )
}

