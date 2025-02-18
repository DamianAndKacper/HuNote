import "./TopNavBar.scss"

export default function TopNavBar() {
    return <nav className="top-navbar">
        <HomeSection />
        <CategoriesSection />
        <SettingsSection />
    </nav>
}

function HomeSection() {
    return <div className="top-navbar-section">HomeSection</div>
}

function CategoriesSection() {
    return (
        <ul className="top-navbar-menu">
            <li>Category 1</li>
            <li>Category 2</li>
            <li>Category 3</li>
        </ul>
    )
}

function SettingsSection() {
    return <div className="top-navbar-section">SettingsSection</div>
}