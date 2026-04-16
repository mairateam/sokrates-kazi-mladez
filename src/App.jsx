import './App.css'

function App() {
    return (
        <div className="page">
            <div className="meander" />

            <header className="hero">
                <h1>Obžaloba Sókratova</h1>
                <span className="subtitle">Athény, 399 př. n. l.</span>
                <img
                    className="portrait"
                    src="https://upload.wikimedia.org/wikipedia/commons/a/a4/Socrates_Louvre.jpg"
                    alt="Busta Sókrata, římská mramorová kopie z 1. století"
                />
            </header>
            <p className="attribution">
                Foto:{' '}
                <a
                    href="https://commons.wikimedia.org/wiki/File:Socrates_Louvre.jpg"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Eric Gaba (Sting)
                </a>
                , CC BY-SA 2.5
            </p>

            <section>
                <h2>Tři body obžaloby</h2>
                <ul className="charges">
                    <li>Haní staré bohy</li>
                    <li>Zavádí nová božstva</li>
                    <li>Kazí mládež</li>
                </ul>
            </section>

            <section>
                <h2>Okolnosti procesu</h2>
                <div className="context-grid">
                    <div className="context-card">
                        <span className="label">Kdy</span>
                        399 př. n. l.
                    </div>
                    <div className="context-card">
                        <span className="label">Kde</span>
                        Athény
                    </div>
                    <div className="context-card">
                        <span className="label">Žalobci</span>
                        Mélétos, Anytos, Lykón
                    </div>
                    <div className="context-card">
                        <span className="label">Soud</span>
                        Héliaia (501 soudců)
                    </div>
                </div>
            </section>

            <section>
                <h2>Sókratova obhajoba</h2>
                <p>
                    Sókratés se hájil sám, bez řečníka. Odmítl prosit o milost
                    a&nbsp;trval na tom, že jeho filosofické tázání je služba obci,
                    kterou mu uložil bůh. Svou obhajobu zachytil Platón v&nbsp;dialogu
                    známém jako <em>Apologie</em>.
                </p>
                <blockquote>
                    „Nezkoumaný život nestojí za to, aby byl žit."
                    <footer>— Sókratés (podle Platónovy Apologie)</footer>
                </blockquote>
            </section>

            <section>
                <h2>Rozsudek</h2>
                <p>
                    Porota shledala Sókrata vinným poměrem 280 ku 221 hlasů.
                    Když dostal možnost navrhnout alternativní trest, navrhl, aby
                    byl na státní náklady živen v&nbsp;Prytaneiu — jako olympijský
                    vítěz. To porotu rozhořčilo a&nbsp;trest smrti byl potvrzen
                    výrazně větší většinou.
                </p>
                <div className="verdict">Trest smrti — vypití bolehlavu</div>
            </section>

            <div className="meander" />
        </div>
    )
}

export default App
