/* eslint-disable @next/next/no-img-element -- Official assets from the supplied AIRC report are preserved unchanged. */
import Link from "next/link";

const publicBasePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const asset = (path: string) => `${publicBasePath}${path}`;

const priorities = [
  {
    index: "01",
    type: "OPPORTUNITÀ",
    title: "Un risultato validato può generare nuovo valore per la missione.",
    detail: "Pubblicazione, grant e contenuti sono pronti per essere collegati.",
    action: "Prepara l’evidence brief",
    tone: "opportunity",
  },
  {
    index: "02",
    type: "NEXT BEST ACTION",
    title: "Tre proposte mostrano una complementarità da valutare.",
    detail: "Competenze, tecnologie e obiettivi condividono una traiettoria.",
    action: "Apri la vista comparativa",
    tone: "action",
  },
  {
    index: "03",
    type: "RISCHIO",
    title: "Il carico di peer review può esporre il prossimo gate.",
    detail: "Disponibilità, conflitti e scadenze richiedono un riequilibrio.",
    action: "Prepara la mitigazione",
    tone: "risk",
  },
  {
    index: "04",
    type: "ALERT",
    title: "Due milestone richiedono evidenze e validazione.",
    detail: "Owner e documenti mancanti sono già identificati.",
    action: "Assegna le attività",
    tone: "alert",
  },
];

const missionLoop = [
  ["01", "Fiducia & risorse", "Donatori, 5×1000, lasciti, partner"],
  ["02", "Selezione scientifica", "Call, peer review, grant"],
  ["03", "Portfolio di ricerca", "Progetti, talenti, IFOM, tecnologie"],
  ["04", "Evidenze & risultati", "Milestone, pubblicazioni, integrità"],
  ["05", "Comunicazione & prevenzione", "Contenuti, scuole, territorio"],
  ["06", "Nuova fiducia", "Relazioni, accountability, sostenibilità"],
];

const perspectives = [
  ["Direzione", "Mission Control", "Quali segnali richiedono oggi una decisione trasversale?"],
  ["Direzione scientifica", "Research Portfolio Intelligence", "Dove emergono qualità, sinergie, dipendenze e rischi?"],
  ["Peer review", "Call & Review Intelligence", "Come proteggere rigore, tempi e conflitti di interesse?"],
  ["Grant management", "Evidence & Milestone Intelligence", "Quali progetti richiedono attenzione prima del prossimo gate?"],
  ["Fundraising", "Supporter & Funding Intelligence", "Quale relazione può sostenere quale traiettoria di ricerca?"],
  ["Comunicazione", "Science & Prevention Intelligence", "Quale risultato può diventare contenuto autorevole e utile?"],
  ["Governance", "Risk & Accountability Intelligence", "Quali scelte richiedono controllo, owner e tracciabilità?"],
  ["Board", "Strategic Brief", "Quali decisioni contano, perché e con quali evidenze?"],
];

const modules = [
  {
    number: "01",
    title: "Research Portfolio",
    body: "Una vista unitaria di progetti, grant, talenti, IFOM, tecnologie, milestone e risultati.",
    signal: "676 progetti · 98 fellowship · 5 programmi speciali",
  },
  {
    number: "02",
    title: "Calls & Peer Review",
    body: "Matching, carichi, conflitti e scadenze resi leggibili senza interferire con il giudizio scientifico.",
    signal: "~600 reviewer internazionali · 27 aree scientifiche",
  },
  {
    number: "03",
    title: "Evidence & Translation",
    body: "Risultati, pubblicazioni e potenziale traslazionale collegati alle prossime azioni della missione.",
    signal: "Quasi 1.900 pubblicazioni nel 2025",
  },
  {
    number: "04",
    title: "Funding & Supporters",
    body: "Fundraising e ricerca finalmente leggibili nella stessa catena di valore, con ruoli e permessi separati.",
    signal: "€200,8M raccolti · 4,5M sostenitori",
  },
  {
    number: "05",
    title: "Science Communication",
    body: "Ogni evidenza validata può alimentare contenuti, prevenzione, scuole, media e relazione con i sostenitori.",
    signal: "4,37M utenti unici · 553K iscritti newsletter",
  },
  {
    number: "06",
    title: "Risk & Governance",
    body: "Fonti, responsabilità, scadenze e approvazioni tracciate. Controllo umano sempre esplicito.",
    signal: "Integrity · GDPR · audit trail · accessi per ruolo",
  },
];

const publicNumbers = [
  ["€210,2M", "proventi 2025"],
  ["€142,1M", "deliberati per la ricerca"],
  ["~5.000", "ricercatrici e ricercatori"],
  ["4,5M", "sostenitrici e sostenitori"],
  ["20.000", "volontarie e volontari"],
];

const sources = [
  "CRM & donor care",
  "Grant platform",
  "Peer review",
  "Finance & planning",
  "Research outputs",
  "IFOM",
  "Digital analytics",
  "Content & media",
  "Risk & compliance",
];

export default function Home() {
  return (
    <main className="marketing-site">
      <nav className="site-nav" aria-label="Navigazione principale">
        <Link className="co-brand" href="/" aria-label="Streetbeat per AIRC">
          <img className="streetbeat-logo" src={asset("/streetbeat-logo-compact-dark-bg.svg")} alt="Streetbeat" />
          <span className="brand-cross" aria-hidden="true">×</span>
          <span className="airc-lockup">
            <img src={asset("/airc-logo-a.svg")} alt="Fondazione AIRC" />
          </span>
        </Link>
        <div className="nav-links">
          <a href="#visione">Visione</a>
          <a href="#valore">Valore AI</a>
          <a href="#prodotto">Prodotto</a>
          <a href="#governance">Governance</a>
        </div>
        <Link className="button button-nav" href="/demo">
          Entra nella demo <span aria-hidden="true">↗</span>
        </Link>
      </nav>

      <section className="hero">
        <div className="hero-grid" aria-hidden="true" />
        <div className="hero-copy">
          <div className="eyebrow"><span /> STREETBEAT × AIRC · CONCEPT DEMO</div>
          <h1>
            Dalla ricerca alla
            <em> prossima decisione.</em>
          </h1>
          <p>
            Research Intelligence connette selezione scientifica, portfolio, evidenze,
            fundraising e comunicazione per far emergere prima opportunità, azioni,
            rischi e alert lungo tutta la missione AIRC.
          </p>
          <div className="hero-actions">
            <Link className="button button-primary" href="/demo">
              Vedi il prodotto in azione <span aria-hidden="true">→</span>
            </Link>
            <a className="button button-ghost" href="#visione">Scopri la visione</a>
          </div>
          <div className="hero-proof" aria-label="Valore reso visibile">
            <span><i className="dot green" /> OPPORTUNITÀ</span>
            <span><i className="dot blue" /> NEXT BEST ACTIONS</span>
            <span><i className="dot red" /> RISCHI</span>
            <span><i className="dot amber" /> ALERT</span>
          </div>
        </div>

        <div className="hero-stage" aria-label="Anteprima AIRC Research Intelligence">
          <div className="research-photo">
            <img src={asset("/airc-researcher.jpg")} alt="Ricercatore AIRC al lavoro in laboratorio" />
            <span>RICERCA LIVE</span>
          </div>

          <div className="product-preview">
            <div className="preview-head">
              <div>
                <span className="mini-airc">60</span>
                <b>AIRC Research Intelligence</b>
              </div>
              <small><i /> Aggiornato 3 min fa</small>
            </div>
            <div className="preview-body">
              <span className="preview-kicker">PRIORITÀ DI OGGI · SCENARIO DEMO</span>
              <h3>Quattro segnali chiedono una decisione o un’azione.</h3>
              <p>Ogni priorità ha fonti, spiegazione, owner, scadenza e controllo umano.</p>
              <div className="preview-signals">
                <article>
                  <small>OPPORTUNITÀ</small>
                  <b>Evidence pronta</b>
                  <span>Prepara il brief →</span>
                </article>
                <article>
                  <small>RISCHIO</small>
                  <b>Review gate esposto</b>
                  <span>Apri mitigazione →</span>
                </article>
              </div>
            </div>
          </div>

          <aside className="jarvis-preview">
            <div className="jarvis-orb" aria-hidden="true">
              <span /><span /><span /><span /><b>✦</b>
            </div>
            <div>
              <b>Jarvis</b>
              <small>Research Copilot · operativo</small>
            </div>
            <p>Vuoi che prepari il brief delle decisioni prioritarie?</p>
            <span>Apri il Morning Brief →</span>
          </aside>

          <div className="floating-signal signal-one">
            <i className="dot green" />
            <span><small>OPPORTUNITÀ</small>Risultato pronto da attivare</span>
          </div>
          <div className="floating-signal signal-two">
            <i className="dot amber" />
            <span><small>ALERT</small>2 milestone · 9 giorni</span>
          </div>
        </div>
      </section>

      <section className="number-band" aria-label="Numeri pubblici AIRC 2025">
        <div className="number-intro">
          <span>BILANCIO SOCIALE 2025</span>
          <p>Una missione ampia, un patrimonio straordinario di ricerca, relazioni, dati e conoscenza.</p>
        </div>
        {publicNumbers.map(([value, label]) => (
          <div className="public-number" key={label}>
            <strong>{value}</strong>
            <span>{label}</span>
          </div>
        ))}
      </section>

      <section className="section vision-section" id="visione">
        <div className="section-kicker">LA VISIONE</div>
        <div className="split-heading">
          <h2>
            Una missione sempre più complessa.
            <br /><em>Tanti sistemi che devono parlarsi al meglio.</em>
          </h2>
          <p>
            AIRC non è soltanto raccolta fondi e non è soltanto ricerca. È un sistema
            che seleziona, finanzia, accompagna, verifica, comunica e rigenera fiducia.
            Il valore nasce quando un segnale può attraversare questa catena senza
            perdere contesto, responsabilità o rigore.
          </p>
        </div>

        <div className="mission-loop">
          <div className="loop-core">
            <span>STREETBEAT</span>
            <div className="core-pulse"><i /><i /><i /><b>✦</b></div>
            <h3>Research<br />Intelligence</h3>
            <p>Il livello AI che collega ciò che l’organizzazione già sa.</p>
          </div>
          <div className="loop-steps">
            {missionLoop.map(([number, title, detail]) => (
              <article key={number}>
                <span>{number}</span>
                <div><h3>{title}</h3><p>{detail}</p></div>
              </article>
            ))}
          </div>
        </div>

        <div className="why-now">
          <div className="why-label">PERCHÉ ADESSO</div>
          <h3>Il piano 2026–2028 chiede crescita, tecnologie e maggiore capacità trasversale.</h3>
          <p>
            Nel 2025 AIRC ha rafforzato i team cross-funzionali e ha messo
            trasformazione digitale, AI e project management al centro della formazione.
            Research Intelligence rende questo investimento una capacità operativa condivisa.
          </p>
          <small>Fonti: Bilancio Sociale 2025, pp. 19–21.</small>
        </div>
      </section>

      <section className="dark-section" id="valore">
        <div className="section">
          <div className="section-kicker light">IL VANTAGGIO DELL’AI</div>
          <div className="split-heading value-heading">
            <h2>
              Non una dashboard in più.
              <br /><em>Una regia che rende visibile ciò che richiede azione.</em>
            </h2>
            <p>
              Il prodotto parte dalle decisioni: opportunità da cogliere, next best
              action da preparare, rischi da mitigare e alert da assegnare. I KPI
              arrivano dopo, per spiegare il perché.
            </p>
          </div>

          <div className="priority-grid">
            {priorities.map((priority) => (
              <article className={`priority-card ${priority.tone}`} key={priority.index}>
                <div className="priority-top">
                  <span>{priority.index}</span>
                  <small><i /> {priority.type}</small>
                </div>
                <h3>{priority.title}</h3>
                <p>{priority.detail}</p>
                <b>{priority.action} <span>→</span></b>
              </article>
            ))}
          </div>

          <div className="scenario-note">
            <span>i</span>
            <p><b>Scenari dimostrativi.</b> Le situazioni mostrate illustrano il funzionamento del prodotto; non rappresentano criticità o valutazioni reali di AIRC.</p>
          </div>
        </div>
      </section>

      <section className="section altitude-section">
        <div className="section-kicker">UNA SOLA ORGANIZZAZIONE, PIÙ PROSPETTIVE</div>
        <div className="split-heading">
          <h2>
            Lo stesso patrimonio di conoscenza.
            <br /><em>La vista utile a ogni responsabilità.</em>
          </h2>
          <p>
            Jarvis non distribuisce la stessa risposta a tutti. Rispetta ruolo,
            autorizzazioni e contesto, e prepara il livello di dettaglio necessario
            alla decisione: operativo, scientifico, manageriale o strategico.
          </p>
        </div>
        <div className="perspectives">
          {perspectives.map(([role, product, question]) => (
            <article key={role}>
              <span>{role}</span>
              <h3>{product}</h3>
              <p>{question}</p>
              <b>Apri la vista <span>↗</span></b>
            </article>
          ))}
        </div>
      </section>

      <section className="product-section" id="prodotto">
        <div className="product-visual">
          <img src={asset("/airc-microscope.jpg")} alt="Tecnologia per la ricerca oncologica" />
          <div className="visual-caption">
            <span>DALL’EVIDENZA ALL’AZIONE</span>
            <h3>La conoscenza diventa capacità di decisione.</h3>
          </div>
        </div>
        <div className="product-content">
          <div className="section-kicker">IL PRODOTTO</div>
          <h2>Sei intelligence space.<br /><em>Un’unica regia.</em></h2>
          <div className="module-list">
            {modules.map((module) => (
              <article key={module.number}>
                <span>{module.number}</span>
                <div>
                  <h3>{module.title}</h3>
                  <p>{module.body}</p>
                  <small>{module.signal}</small>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section layer-section">
        <div className="section-kicker">COME FUNZIONA</div>
        <div className="split-heading">
          <h2>
            Un livello di intelligence e azione
            <br /><em>che valorizza i sistemi già esistenti.</em>
          </h2>
          <p>
            Streetbeat non sostituisce CRM, piattaforma grant o strumenti
            scientifici. Li collega attraverso un modello della missione, applica
            guardrail e restituisce priorità spiegabili e azioni tracciabili.
          </p>
        </div>

        <div className="layer-diagram">
          <div className="layer layer-people">
            <span>01 · PERSONE & DECISIONI</span>
            <div><b>Direzione</b><b>Ricerca</b><b>Fundraising</b><b>Comunicazione</b><b>Board</b></div>
          </div>
          <div className="layer layer-ai">
            <div className="mini-orb"><i /><i /><b>✦</b></div>
            <div>
              <span>02 · STREETBEAT RESEARCH INTELLIGENCE</span>
              <h3>Segnali → contesto → priorità → azione → apprendimento</h3>
            </div>
            <small>Human in the loop</small>
          </div>
          <div className="layer layer-systems">
            <span>03 · SISTEMI & FONTI</span>
            <div>{sources.map((source) => <b key={source}>{source}</b>)}</div>
          </div>
        </div>
      </section>

      <section className="governance-section" id="governance">
        <div className="governance-image">
          <img src={asset("/airc-volunteers.jpg")} alt="Volontarie AIRC" />
        </div>
        <div className="governance-copy">
          <div className="section-kicker light">TRUST BY DESIGN</div>
          <h2>Più intelligence.<br /><em>Senza cedere il controllo.</em></h2>
          <p>
            La fiducia è infrastruttura della missione. Per questo ogni segnale è
            spiegabile, ogni fonte è visibile e ogni azione significativa resta
            sottoposta alla responsabilità umana.
          </p>
          <div className="guardrails">
            <article><span>01</span><div><b>Controllo umano</b><p>Jarvis prepara e suggerisce. Le persone decidono, approvano e agiscono.</p></div></article>
            <article><span>02</span><div><b>Accessi per ruolo</b><p>Ogni persona vede soltanto informazioni e funzioni coerenti con il proprio mandato.</p></div></article>
            <article><span>03</span><div><b>Fonti e audit trail</b><p>Ogni insight conserva provenienza, trasformazioni, owner e storico delle decisioni.</p></div></article>
            <article><span>04</span><div><b>Perimetro responsabile</b><p>Nessuna diagnosi, nessuna decisione clinica automatica, nessun dato paziente come prerequisito.</p></div></article>
          </div>
        </div>
      </section>

      <section className="final-cta">
        <div className="cta-orbit" aria-hidden="true"><i /><i /><i /><b>✦</b></div>
        <span>STREETBEAT × AIRC</span>
        <h2>Ogni segnale può<br /><em>accelerare la missione.</em></h2>
        <p>Entra nel concept e guarda come Research Intelligence trasforma conoscenza distribuita in decisioni e azioni.</p>
        <Link className="button button-primary" href="/demo">
          Esplora la demo <span>→</span>
        </Link>
        <small>Concept dimostrativo basato su fonti pubbliche AIRC · luglio 2026</small>
      </section>

      <footer>
        <img src={asset("/streetbeat-logo-compact-dark-bg.svg")} alt="Streetbeat" />
        <p>AI workspaces for mission-driven organizations.</p>
        <span>Concept demo · 2026</span>
      </footer>
    </main>
  );
}
