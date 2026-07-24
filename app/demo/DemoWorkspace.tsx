"use client";

/* eslint-disable @next/next/no-img-element -- Official brand assets are served unchanged. */
import Link from "next/link";
import { FormEvent, useMemo, useState } from "react";

const publicBasePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const asset = (path: string) => `${publicBasePath}${path}`;

type SectionKey =
  | "mission"
  | "research"
  | "calls"
  | "evidence"
  | "ifom"
  | "fundraising"
  | "communication"
  | "territory"
  | "risk"
  | "knowledge";

type SignalKind = "opportunity" | "action" | "risk" | "alert";

type Signal = {
  id: string;
  kind: SignalKind;
  label: string;
  title: string;
  detail: string;
  meta: string;
  action: string;
  owner: string;
  deadline: string;
  confidence?: string;
  section: SectionKey;
  sources: string[];
  why: string[];
};

const sections: Array<{
  id: SectionKey;
  label: string;
  subtitle: string;
  icon: string;
}> = [
  { id: "mission", label: "Research Mission Control", subtitle: "Executive view", icon: "◎" },
  { id: "research", label: "Portfolio ricerca", subtitle: "Grant & talenti", icon: "▦" },
  { id: "calls", label: "Call & peer review", subtitle: "Selection intelligence", icon: "◇" },
  { id: "evidence", label: "Evidenze & milestone", subtitle: "Research outcomes", icon: "✦" },
  { id: "ifom", label: "IFOM & traslazione", subtitle: "Research system", icon: "⬡" },
  { id: "fundraising", label: "Fundraising", subtitle: "Funding & supporters", icon: "◉" },
  { id: "communication", label: "Comunicazione", subtitle: "Scienza & prevenzione", icon: "↗" },
  { id: "territory", label: "Territorio & scuole", subtitle: "Volontari e comunità", icon: "⌂" },
  { id: "risk", label: "Risk & integrity", subtitle: "Governance", icon: "△" },
  { id: "knowledge", label: "Knowledge & AI", subtitle: "Adoption", icon: "⌘" },
];

const sectionCopy: Record<
  SectionKey,
  {
    eyebrow: string;
    title: string;
    description: string;
    insight: string;
    insightBody: string;
    source: string;
  }
> = {
  mission: {
    eyebrow: "MISSIONE LIVE",
    title: "Research Mission Control",
    description: "Opportunità, azioni, rischi e alert lungo tutta la catena della missione AIRC.",
    insight: "Quattro segnali chiedono una decisione o un’azione oggi.",
    insightBody:
      "Un risultato può generare nuovo valore; tre proposte mostrano una sinergia; il carico di review espone un gate e due milestone richiedono evidenze.",
    source: "Grant platform · Peer review · Research outputs · CRM · Finance",
  },
  research: {
    eyebrow: "RESEARCH PORTFOLIO INTELLIGENCE",
    title: "Portfolio ricerca",
    description: "Progetti, talenti, tecnologie, milestone e risorse ordinati per decisione, non per sistema.",
    insight: "Tre traiettorie mostrano complementarità scientifiche da approfondire.",
    insightBody:
      "Jarvis ha collegato obiettivi, modelli sperimentali e infrastrutture. La relazione è un suggerimento esplorativo: la valutazione scientifica resta umana.",
    source: "Grant platform · Milestone reports · Publications · Research taxonomy",
  },
  calls: {
    eyebrow: "CALL & REVIEW INTELLIGENCE",
    title: "Call & peer review",
    description: "Copertura delle competenze, carichi, disponibilità e conflitti resi visibili prima dei gate.",
    insight: "Un cluster di proposte richiede un riequilibrio dei reviewer.",
    insightBody:
      "Il carico previsto supera la soglia operativa e due disponibilità non sono confermate. È pronta una rosa alternativa compatibile.",
    source: "Call management · Reviewer profiles · Conflict checks · Calendar",
  },
  evidence: {
    eyebrow: "EVIDENCE & MILESTONE INTELLIGENCE",
    title: "Evidenze & milestone",
    description: "Risultati, deliverable e pubblicazioni collegati a fonti, owner, scadenze e prossimi usi.",
    insight: "Un risultato validato è pronto per attivare tre funzioni.",
    insightBody:
      "Il dato ha validazione scientifica e pubblicazione open access. Può diventare donor update, contenuto editoriale e materiale per il portfolio review.",
    source: "Milestone reporting · Publications · Evidence repository",
  },
  ifom: {
    eyebrow: "IFOM & TRANSLATION INTELLIGENCE",
    title: "IFOM & traslazione",
    description: "Programmi, piattaforme tecnologiche e collaborazioni osservati come sistema di ricerca integrato.",
    insight: "Una piattaforma può abilitare più traiettorie di ricerca.",
    insightBody:
      "Le richieste previste condividono imaging avanzato e analisi spaziale. Jarvis prepara la vista di capacità, non assegna risorse automaticamente.",
    source: "IFOM portfolio · Technology platforms · Project plans",
  },
  fundraising: {
    eyebrow: "FUNDING & SUPPORTER INTELLIGENCE",
    title: "Fundraising",
    description: "Bisogni della ricerca, evidenze e relazioni collegati alla prossima azione migliore.",
    insight: "Un aggiornamento scientifico può rafforzare una relazione già attiva.",
    insightBody:
      "L’interesse dichiarato è coerente con il programma e il risultato è già validato. Jarvis prepara il brief; tono, timing e contatto restano al team.",
    source: "CRM · Donation history · Research portfolio · Content",
  },
  communication: {
    eyebrow: "SCIENCE & PREVENTION INTELLIGENCE",
    title: "Comunicazione",
    description: "Risultati, autorevolezza, pubblici e canali collegati senza perdere il rigore della fonte.",
    insight: "Una nuova evidenza è pronta per diventare contenuto multicanale.",
    insightBody:
      "Sono già disponibili messaggio scientifico validato, visual e domande frequenti. Manca l’approvazione editoriale finale.",
    source: "Research outputs · Content repository · Digital analytics",
  },
  territory: {
    eyebrow: "TERRITORY & ENGAGEMENT INTELLIGENCE",
    title: "Territorio & scuole",
    description: "Volontari, eventi, scuole e contenuti coordinati a partire da opportunità e capacità locali.",
    insight: "Tre territori possono amplificare una campagna di prevenzione.",
    insightBody:
      "Rete attiva, calendario scolastico e disponibilità dei volontari mostrano una finestra utile nelle prossime tre settimane.",
    source: "Territorial network · Schools · Event calendar · Content",
  },
  risk: {
    eyebrow: "RISK, INTEGRITY & ACCOUNTABILITY",
    title: "Risk & integrity",
    description: "Conflitti, controlli, scadenze e responsabilità con livelli di accesso dedicati.",
    insight: "Due controlli devono chiudersi prima del prossimo gate.",
    insightBody:
      "Gli owner sono assegnati e le fonti restano protette. Jarvis mostra la dipendenza senza esporre dati scientifici o personali non necessari.",
    source: "Integrity policy · Conflict register · Internal controls",
  },
  knowledge: {
    eyebrow: "KNOWLEDGE & RESPONSIBLE AI",
    title: "Knowledge & AI",
    description: "Conoscenza organizzativa, competenze e guardrail per un’adozione misurabile e responsabile.",
    insight: "Tre workflow possono partire senza dati clinici o decisioni automatiche.",
    insightBody:
      "Morning brief, preparazione evidence pack e ricerca interna hanno valore misurabile e un perimetro di rischio controllabile.",
    source: "Knowledge base · Access policy · AI adoption plan",
  },
};

const signals: Signal[] = [
  {
    id: "validated-result",
    kind: "opportunity",
    label: "OPPORTUNITÀ",
    title: "Un risultato validato può generare nuovo valore per la missione",
    detail: "Pubblicazione open access · milestone validata · contenuti disponibili",
    meta: "Tre funzioni attivabili",
    action: "Prepara l’evidence brief",
    owner: "Direzione scientifica",
    deadline: "Finestra utile: 12 giorni",
    confidence: "Confidenza 91%",
    section: "evidence",
    sources: ["Milestone reporting", "Research outputs", "Content repository"],
    why: [
      "Il risultato ha validazione scientifica e una fonte pubblicabile.",
      "Il tema è coerente con un programma e con interessi già presenti nel CRM.",
      "Donor update, contenuto e portfolio brief possono riusare lo stesso evidence pack.",
    ],
  },
  {
    id: "portfolio-synergy",
    kind: "action",
    label: "NEXT BEST ACTION",
    title: "Tre proposte mostrano una complementarità da valutare",
    detail: "Tecnologia condivisa · competenze complementari · obiettivo affine",
    meta: "Analisi comparativa pronta",
    action: "Apri la vista comparativa",
    owner: "Research Programs",
    deadline: "Review tra 18 giorni",
    confidence: "Affinità 86%",
    section: "research",
    sources: ["Call management", "Research taxonomy", "Technology platforms"],
    why: [
      "Le proposte condividono una piattaforma tecnologica critica.",
      "Le competenze dei gruppi sono complementari, non duplicate.",
      "La correlazione è esplorativa e non modifica il processo di peer review.",
    ],
  },
  {
    id: "review-load",
    kind: "risk",
    label: "RISCHIO",
    title: "Il carico di peer review può esporre il prossimo gate",
    detail: "Due disponibilità aperte · cluster ad alta specializzazione · scadenza ravvicinata",
    meta: "Impatto alto",
    action: "Prepara la mitigazione",
    owner: "Peer Review Office",
    deadline: "Prima soglia: 6 giorni",
    section: "calls",
    sources: ["Reviewer profiles", "Availability", "Conflict checks"],
    why: [
      "Il cluster richiede competenze rare e multidisciplinari.",
      "Due reviewer non hanno ancora confermato la disponibilità.",
      "Una rosa alternativa mantiene copertura e indipendenza.",
    ],
  },
  {
    id: "milestone-pack",
    kind: "alert",
    label: "ALERT",
    title: "Due milestone richiedono evidenze e validazione",
    detail: "Tre documenti mancanti · owner identificati · una dipendenza IFOM",
    meta: "Evidence pack 84%",
    action: "Assegna le attività",
    owner: "Grant Management",
    deadline: "Scadenza tra 9 giorni",
    section: "evidence",
    sources: ["Grant platform", "Evidence repository", "IFOM project plan"],
    why: [
      "Il dossier contiene 16 evidenze su 19 richieste.",
      "I tre elementi mancanti hanno già un owner potenziale.",
      "Una dipendenza può essere risolta prima del gate con conferma della piattaforma.",
    ],
  },
  {
    id: "ifom-capacity",
    kind: "opportunity",
    label: "OPPORTUNITÀ",
    title: "Una capacità IFOM può abilitare più traiettorie",
    detail: "Spatial omics · imaging · computational biology",
    meta: "Capacità da verificare",
    action: "Prepara il capacity brief",
    owner: "IFOM Programs",
    deadline: "Pianificazione Q4",
    section: "ifom",
    sources: ["Technology platforms", "IFOM portfolio", "Project plans"],
    why: [
      "Più iniziative prevedono la stessa capacità tecnologica.",
      "La pianificazione congiunta può ridurre una dipendenza futura.",
      "Disponibilità e priorità devono essere validate dai responsabili.",
    ],
  },
  {
    id: "supporter-research",
    kind: "action",
    label: "NEXT BEST ACTION",
    title: "Collega un aggiornamento scientifico a una relazione attiva",
    detail: "Interesse coerente · evidence validata · relazione recente",
    meta: "Brief personalizzato pronto",
    action: "Rivedi il donor brief",
    owner: "Major Donors",
    deadline: "Contatto suggerito: 7 giorni",
    section: "fundraising",
    sources: ["CRM", "Research portfolio", "Content approvals"],
    why: [
      "L’interesse dichiarato coincide con l’area del risultato.",
      "Il contenuto è già validato dalla direzione scientifica.",
      "Il team mantiene scelta, tono e responsabilità del contatto.",
    ],
  },
  {
    id: "prevention-window",
    kind: "opportunity",
    label: "OPPORTUNITÀ",
    title: "Una finestra pubblica può amplificare la prevenzione",
    detail: "50.000 adesioni · contenuti disponibili · attenzione istituzionale",
    meta: "Segnale pubblico 2026",
    action: "Prepara il prevention brief",
    owner: "Comunicazione & Mission",
    deadline: "Finestra: 3 settimane",
    section: "communication",
    sources: ["AIRC public campaign", "Media monitoring", "Content"],
    why: [
      "L’iniziativa pubblica ha già superato cinquantamila adesioni.",
      "Esistono asset e messaggi verificati per più pubblici.",
      "Un brief coordinato può supportare media, territorio e istituzioni.",
    ],
  },
  {
    id: "integrity-check",
    kind: "risk",
    label: "RISCHIO",
    title: "Un controllo di integrità è prerequisito del gate",
    detail: "Owner assegnato · documentazione parziale · accesso ristretto",
    meta: "Escalation definita",
    action: "Verifica la chiusura",
    owner: "Governance & Compliance",
    deadline: "Controllo tra 5 giorni",
    section: "risk",
    sources: ["Integrity policy", "Conflict register", "Control log"],
    why: [
      "Il controllo è esplicitamente richiesto prima del gate.",
      "Jarvis mostra solo stato e dipendenza agli utenti autorizzati.",
      "La valutazione resta alla funzione responsabile.",
    ],
  },
];

const publicMetrics = [
  { value: "€142,1M", label: "Deliberati per la ricerca", change: "2025", source: "Bilancio p. 47" },
  { value: "676", label: "Progetti di ricerca", change: "98 fellowship · 5 programmi", source: "Bilancio pp. 47–48" },
  { value: "~5.000", label: "Ricercatrici e ricercatori", change: "rete sostenuta", source: "Bilancio p. 47" },
  { value: "€200,8M", label: "Raccolta lorda", change: "€170,8M netti", source: "Bilancio p. 70" },
];

const portfolio = [
  { label: "Progetti IG", value: "488", width: "100%", tone: "blue" },
  { label: "MFAG", value: "133", width: "66%", tone: "cyan" },
  { label: "Fellowship", value: "98", width: "52%", tone: "yellow" },
  { label: "Start-Up", value: "25", width: "33%", tone: "orange" },
  { label: "Programmi speciali", value: "5", width: "18%", tone: "green" },
];

const roles = [
  "Direzione Generale",
  "Direzione scientifica",
  "Grant Management",
  "Fundraising",
  "Comunicazione",
  "Governance",
  "Board",
];

const prompts: Record<SectionKey, string[]> = {
  mission: ["Prepara il Morning Brief", "Cosa richiede una decisione?", "Crea il brief per il board"],
  research: ["Mostra le sinergie", "Confronta le tre proposte", "Quali capacità condividono?"],
  calls: ["Mostra i gate esposti", "Prepara la mitigazione", "Verifica carichi e conflitti"],
  evidence: ["Quali evidenze mancano?", "Prepara l’evidence pack", "Attiva il risultato validato"],
  ifom: ["Mostra le capacità critiche", "Prepara il capacity brief", "Quali dipendenze emergono?"],
  fundraising: ["Qual è la next best action?", "Prepara il donor brief", "Collega ricerca e relazione"],
  communication: ["Quale risultato è attivabile?", "Prepara il content brief", "Mostra fonti e approvazioni"],
  territory: ["Dove c’è capacità?", "Prepara il piano territorio", "Quali scuole attivare?"],
  risk: ["Quali controlli sono aperti?", "Mostra le dipendenze", "Prepara l’escalation brief"],
  knowledge: ["Quali workflow partirebbero?", "Prepara il pilot", "Mostra guardrail e metriche"],
};

const kindOrder: Record<SignalKind, number> = {
  opportunity: 0,
  action: 1,
  risk: 2,
  alert: 3,
};

const executiveSignalIds = ["validated-result", "portfolio-synergy", "review-load", "milestone-pack"];

function makeJarvisResponse(signal: Signal) {
  return `${signal.title}. ${signal.why[0]} Posso preparare “${signal.action}” usando ${signal.sources.length} fonti, mantenendo approvazione e responsabilità a ${signal.owner}.`;
}

export default function DemoWorkspace() {
  const [section, setSection] = useState<SectionKey>("mission");
  const [selectedSignalId, setSelectedSignalId] = useState("validated-result");
  const [role, setRole] = useState("Direzione Generale");
  const [query, setQuery] = useState("");
  const [jarvisText, setJarvisText] = useState(
    "Buongiorno. Ho collegato portfolio, peer review, milestone e relazioni. Quattro segnali meritano attenzione oggi: posso preparare il Morning Brief con fonti, owner e prossime azioni.",
  );

  const copy = sectionCopy[section];
  const selectedSignal = signals.find((signal) => signal.id === selectedSignalId) ?? signals[0];

  const visibleSignals = useMemo(() => {
    if (section === "mission") {
      return executiveSignalIds
        .map((id) => signals.find((signal) => signal.id === id))
        .filter((signal): signal is Signal => Boolean(signal));
    }

    const exact = signals.filter((signal) => signal.section === section);
    const context = signals
      .filter((signal) => signal.section !== section)
      .sort((a, b) => kindOrder[a.kind] - kindOrder[b.kind]);
    return [...exact, ...context].slice(0, 4);
  }, [section]);

  function chooseSection(nextSection: SectionKey) {
    setSection(nextSection);
    const first = signals.find((signal) => signal.section === nextSection);
    if (first) setSelectedSignalId(first.id);
    setJarvisText(sectionCopy[nextSection].insightBody);
  }

  function chooseSignal(signal: Signal) {
    setSelectedSignalId(signal.id);
    setJarvisText(makeJarvisResponse(signal));
  }

  function askJarvis(prompt: string) {
    setJarvisText(
      `${prompt}: ho preparato una prima risposta per ${role}. ${copy.insightBody} Le fonti sono visibili nel pannello e nessuna azione viene eseguita senza conferma.`,
    );
  }

  function submitQuestion(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!query.trim()) return;
    askJarvis(query.trim());
    setQuery("");
  }

  return (
    <main className="demo-shell">
      <aside className="demo-sidebar">
        <div className="sidebar-brand">
          <Link href="/" aria-label="Torna alla presentazione">
            <img src={asset("/airc-logo-a.svg")} alt="Fondazione AIRC" />
          </Link>
          <div><b>Fondazione AIRC</b><span>RESEARCH INTELLIGENCE</span></div>
        </div>

        <div className="sidebar-label">WORKSPACE</div>
        <nav aria-label="Aree del workspace">
          {sections.map((item) => (
            <button
              className={section === item.id ? "active" : ""}
              key={item.id}
              type="button"
              onClick={() => chooseSection(item.id)}
            >
              <span className="nav-icon">{item.icon}</span>
              <span><b>{item.label}</b><small>{item.subtitle}</small></span>
              {item.id === "mission" && <i>LIVE</i>}
            </button>
          ))}
        </nav>

        <div className="active-workflows">
          <div><span>WORKFLOW ATTIVI</span><b>+</b></div>
          <article><span>Review readiness</span><i><b style={{ width: "76%" }} /></i><small>2 azioni</small></article>
          <article><span>Evidence pack</span><i><b style={{ width: "84%" }} /></i><small>3 elementi</small></article>
          <article><span>Donor science brief</span><i><b style={{ width: "58%" }} /></i><small>1 pronto</small></article>
        </div>

        <div className="sidebar-bottom">
          <img src={asset("/streetbeat-logomark-compact-dark-bg.svg")} alt="" />
          <div><b>Knowledge Base</b><span>18 fonti sincronizzate</span></div>
          <i />
        </div>
      </aside>

      <section className="demo-main">
        <header className="demo-topbar">
          <div>
            <span>{copy.eyebrow}</span>
            <h1>{copy.title}</h1>
          </div>
          <div className="topbar-controls">
            <span className="updated"><i /> Aggiornato 3 min fa</span>
            <label>
              <span>Vista</span>
              <select value={role} onChange={(event) => setRole(event.target.value)}>
                {roles.map((item) => <option key={item}>{item}</option>)}
              </select>
            </label>
            <Link href="/" title="Torna alla presentazione">↗</Link>
          </div>
        </header>

        <div className="demo-canvas">
          <div className="demo-heading">
            <div>
              <span className="scenario-badge">SCENARIO DEMO</span>
              <h2>{copy.insight}</h2>
              <p>{copy.description}</p>
            </div>
            <button type="button" onClick={() => askJarvis("Prepara il brief esecutivo")}>
              Prepara il brief <span>→</span>
            </button>
          </div>

          <section className="signal-grid" aria-label="Priorità">
            {visibleSignals.map((signal) => (
              <button
                className={`signal-card ${signal.kind} ${selectedSignal.id === signal.id ? "selected" : ""}`}
                key={signal.id}
                type="button"
                onClick={() => chooseSignal(signal)}
              >
                <div className="signal-top">
                  <small><i /> {signal.label}</small>
                  <span>•••</span>
                </div>
                <h3>{signal.title}</h3>
                <p>{signal.detail}</p>
                <div className="signal-bottom">
                  <span>{signal.meta}</span>
                  <b>{signal.action} →</b>
                </div>
              </button>
            ))}
          </section>

          <section className="decision-detail">
            <div className={`detail-mark ${selectedSignal.kind}`}><i />{selectedSignal.label}</div>
            <div className="detail-copy">
              <span>PERCHÉ ORA</span>
              <h3>{selectedSignal.title}</h3>
              <ul>{selectedSignal.why.map((reason) => <li key={reason}>{reason}</li>)}</ul>
            </div>
            <div className="detail-meta">
              <div><span>OWNER</span><b>{selectedSignal.owner}</b></div>
              <div><span>TEMPO</span><b>{selectedSignal.deadline}</b></div>
              {selectedSignal.confidence && <div><span>SEGNALE</span><b>{selectedSignal.confidence}</b></div>}
            </div>
            <div className="detail-sources">
              <span>FONTI COLLEGATE</span>
              <div>{selectedSignal.sources.map((source) => <b key={source}>✓ {source}</b>)}</div>
            </div>
            <button type="button" onClick={() => askJarvis(selectedSignal.action)}>
              {selectedSignal.action} <span>→</span>
            </button>
          </section>

          <div className="metrics-label">
            <span>CONTESTO PUBBLICO 2025</span>
            <p>I dati spiegano il segnale. Non lo sostituiscono.</p>
          </div>
          <section className="metric-grid" aria-label="Indicatori pubblici AIRC 2025">
            {publicMetrics.map((metric) => (
              <article key={metric.label}>
                <span>{metric.label}</span>
                <strong>{metric.value}</strong>
                <small>{metric.change}</small>
                <i>{metric.source}</i>
              </article>
            ))}
          </section>

          <section className="lower-grid">
            <article className="portfolio-card">
              <div className="panel-head">
                <div><h3>Portfolio ricerca 2025</h3><p>Strumenti competitivi e formazione</p></div>
                <span>DATO PUBBLICO</span>
              </div>
              <div className="portfolio-bars">
                {portfolio.map((item) => (
                  <div key={item.label}>
                    <span>{item.label}</span>
                    <i><b className={item.tone} style={{ width: item.width }} /></i>
                    <strong>{item.value}</strong>
                  </div>
                ))}
              </div>
              <small>Fonte: Bilancio Sociale AIRC 2025, pp. 47–48.</small>
            </article>

            <article className="mission-chain-card">
              <div className="panel-head">
                <div><h3>Catena della missione</h3><p>Segnali che attraversano le funzioni</p></div>
                <span>LIVE</span>
              </div>
              <div className="mission-chain">
                <div><i className="ready" /><span><b>Fiducia & risorse</b><small>4,5M sostenitori</small></span></div>
                <div><i className="attention" /><span><b>Selezione</b><small>1 rischio demo</small></span></div>
                <div><i className="ready" /><span><b>Ricerca</b><small>676 progetti</small></span></div>
                <div><i className="attention" /><span><b>Evidenze</b><small>2 alert demo</small></span></div>
                <div><i className="ready" /><span><b>Comunicazione</b><small>1 opportunità demo</small></span></div>
                <div><i className="ready" /><span><b>Nuova fiducia</b><small>NBA pronta</small></span></div>
              </div>
            </article>
          </section>

          <div className="data-disclaimer">
            <span>i</span>
            <p><b>Come leggere questa demo.</b> I numeri riportati sono dati pubblici del Bilancio Sociale AIRC 2025. Opportunità, azioni, rischi e alert sono scenari dimostrativi creati per rendere visibile il funzionamento del prodotto.</p>
          </div>
        </div>
      </section>

      <aside className="jarvis-panel">
        <header>
          <div className="jarvis-logo">
            <div className="jarvis-orb-demo" aria-hidden="true">
              <i /><i /><i /><i /><b>✦</b>
            </div>
            <div><h2>Jarvis</h2><span><i /> Operativo</span></div>
          </div>
          <button type="button" title="Altre opzioni">•••</button>
        </header>

        <div className="active-context">
          <span>CONTESTO ATTIVO</span>
          <b>{copy.title}</b>
          <small>{role}</small>
        </div>

        <div className="jarvis-conversation">
          <div className="conversation-label"><span /> RESEARCH INTELLIGENCE <span /></div>
          <article className="jarvis-message">
            <div className="mini-jarvis">✦</div>
            <div>
              <b>Buongiorno</b>
              <p>{jarvisText}</p>
              <div className="message-points">
                <span><i /> Fonti visibili</span>
                <span><i /> Owner identificato</span>
                <span><i /> Controllo umano</span>
              </div>
            </div>
          </article>

          <article className="selected-context">
            <span>SEGNALE SELEZIONATO</span>
            <b>{selectedSignal.title}</b>
            <small>{selectedSignal.owner} · {selectedSignal.deadline}</small>
          </article>
        </div>

        <div className="jarvis-input-zone">
          <span>SUGGERIMENTI</span>
          <div className="prompt-chips">
            {prompts[section].map((prompt) => (
              <button key={prompt} type="button" onClick={() => askJarvis(prompt)}>{prompt}</button>
            ))}
          </div>
          <form onSubmit={submitQuestion}>
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              aria-label="Chiedi a Jarvis"
              placeholder="Chiedi a Jarvis…"
            />
            <button type="submit" aria-label="Invia">↑</button>
          </form>
          <small>Jarvis può commettere errori. Verifica le informazioni critiche.</small>
        </div>
      </aside>
    </main>
  );
}
