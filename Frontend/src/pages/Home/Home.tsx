import "./Home.scss"
import LeftNavBar from "../../components/LeftNavBar/LeftNavBar";
import TopNavBar from "../../components/TopNavBar/TopNavBar";

export default function Home() {
    return (
        <>
            <TopNavBar />
            <main className="home-main-div">
                <LeftNavBar />
                <MainContent />
            </main>
        </>
    )
}

function MainContent() {
    return (
        <div className="main-content">
            <NotesSection />
            <NotesSection />
            <NotesSection />
        </div>
    )
}

function NotesSection() {
    return (
        <section className="notes-section">
            <h1 className="section-name">Recently Opened</h1>
            <ul className="notes-list">
                <li className="note-square"></li>
                <li className="note-square"></li>
                <li className="note-square"></li>
                <li className="note-square"></li>
            </ul>
        </section>
    )
}