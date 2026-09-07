import { useState } from "react";
import {
  Activity,
  ArrowRight,
  Car,
  ChevronRight,
  Gauge,
  GaugeCircle,
  Map,
  MapPin,
  Navigation,
  Play,
  Route,
  Settings,
  ShieldCheck,
  Timer,
  Trophy,
  User,
  Zap,
} from "lucide-react";
import "./App.css";

function App() {
  const [activeTab, setActiveTab] = useState("home");
  const [driving, setDriving] = useState(false);

  return (
    <div className="app">
      {/* Background glow */}
      <div className="glow glow-green" />
      <div className="glow glow-blue" />

      {/* TOP BAR */}
      <header className="topbar">
        <div className="brand">
          <div className="brand-icon">
            <Zap size={22} strokeWidth={2.8} />
          </div>

          <div>
            <div className="brand-name">
              PLNÝ<span>PLYN</span>
            </div>
            <div className="brand-sub">DRIVE • TRACK • IMPROVE</div>
          </div>
        </div>

        <div className="top-actions">
          <div className="gps-status">
            <span className="status-dot" />
            GPS ONLINE
          </div>

          <button className="icon-button">
            <Settings size={20} />
          </button>

          <button className="avatar">
            <User size={19} />
          </button>
        </div>
      </header>

      {/* MAIN */}
      <main className="content">
        {/* HERO */}
        <section className="hero">
          <div className="hero-left">
            <div className="eyebrow">
              <span className="live-dot" />
              LIVE DRIVE SYSTEM
            </div>

            <h1>
              Jazdi.
              <br />
              <span>Meraj.</span>
              <br />
              Zlepšuj sa.
            </h1>

            <p>
              Tvoje jazdy, tvoje trate a tvoje výsledky
              <br />
              na jednom mieste.
            </p>

            <button
              className={`start-button ${driving ? "active" : ""}`}
              onClick={() => setDriving(!driving)}
            >
              <div className="start-icon">
                {driving ? <Activity size={23} /> : <Play size={23} fill="currentColor" />}
              </div>

              <div className="start-text">
                <strong>{driving ? "JAZDA AKTÍVNA" : "ZAČAŤ JAZDU"}</strong>
                <span>
                  {driving ? "GPS telemetria je aktívna" : "Spusti GPS meranie"}
                </span>
              </div>

              <ArrowRight size={22} />
            </button>
          </div>

          {/* MINI DRIVER CARD */}
          <div className="driver-card">
            <div className="driver-card-top">
              <span>TVÔJ PROFIL</span>
              <ChevronRight size={18} />
            </div>

            <div className="driver-avatar">
              <Car size={34} />
            </div>

            <h3>Driver</h3>
            <p>Street Performance</p>

            <div className="driver-stats">
              <div>
                <strong>28</strong>
                <span>JÁZD</span>
              </div>
              <div>
                <strong>412</strong>
                <span>KM</span>
              </div>
              <div>
                <strong>7</strong>
                <span>TRATÍ</span>
              </div>
            </div>
          </div>
        </section>

        {/* DASHBOARD */}
        <section className="dashboard-grid">
          {/* MAP */}
          <div className="card map-card">
            <div className="card-header">
              <div>
                <span className="card-label">LIVE MAP</span>
                <h2>Donovaly → Motyčky</h2>
              </div>

              <button className="round-button">
                <Navigation size={18} />
              </button>
            </div>

            <div className="map">
              {/* Decorative map */}
              <div className="map-grid" />

              <div className="road road-1" />
              <div className="road road-2" />
              <div className="road road-3" />

              <div className="route-line" />

              <div className="map-marker start-marker">
                <MapPin size={19} />
              </div>

              <div className="map-marker end-marker">
                <MapPin size={19} />
              </div>

              <div className="map-car">
                <Car size={20} />
              </div>

              <div className="map-overlay">
                <span>
                  <Route size={16} />
                  12.4 km
                </span>

                <span>
                  <Timer size={16} />
                  04:18
                </span>
              </div>

              <div className="map-controls">
                <button>
                  <PlusIcon />
                </button>
                <button>
                  <MinusIcon />
                </button>
              </div>
            </div>
          </div>

          {/* TELEMETRY */}
          <div className="telemetry-column">
            <div className="card telemetry-card">
              <div className="card-header">
                <div>
                  <span className="card-label">TELEMETRIA</span>
                  <h2>Aktuálna jazda</h2>
                </div>

                <Activity size={20} className="green-icon" />
              </div>

              <div className="speed">
                <span>128</span>
                <small>km/h</small>
              </div>

              <div className="speed-line">
                <div className="speed-progress" />
              </div>

              <div className="telemetry-grid">
                <Telemetry
                  icon={<Gauge size={18} />}
                  label="PRIEMERNÁ"
                  value="86"
                  unit="km/h"
                />

                <Telemetry
                  icon={<Zap size={18} />}
                  label="MAX"
                  value="147"
                  unit="km/h"
                />

                <Telemetry
                  icon={<Activity size={18} />}
                  label="G-FORCE"
                  value="0.82"
                  unit="G"
                />

                <Telemetry
                  icon={<Timer size={18} />}
                  label="ČAS"
                  value="04:18"
                  unit=""
                />
              </div>
            </div>

            {/* RECORD */}
            <div className="card record-card">
              <div className="record-icon">
                <Trophy size={22} />
              </div>

              <div className="record-info">
                <span>TVÔJ REKORD</span>
                <strong>04:12.85</strong>
                <small>Donovaly → Motyčky</small>
              </div>

              <ChevronRight size={20} />
            </div>
          </div>
        </section>

        {/* BOTTOM CARDS */}
        <section className="bottom-grid">
          <div className="card route-card">
            <div className="route-icon">
              <Route size={22} />
            </div>

            <div className="route-info">
              <span>NAJLEPŠIA TRAŤ</span>
              <h3>Donovaly → Motyčky</h3>
              <p>
                <span className="green-text">12.4 km</span>
                <span>•</span>
                04:12.85
              </p>
            </div>

            <button className="small-arrow">
              <ArrowRight size={18} />
            </button>
          </div>

          <div className="card stats-card">
            <div className="stats-title">
              <GaugeCircle size={21} />
              <span>TÝŽDENNÉ ŠTATISTIKY</span>
            </div>

            <div className="weekly-stats">
              <div>
                <strong>86.7</strong>
                <span>KM</span>
              </div>

              <div>
                <strong>03:42</strong>
                <span>HODÍN</span>
              </div>

              <div>
                <strong>8</strong>
                <span>JÁZD</span>
              </div>
            </div>
          </div>

          <div className="card safety-card">
            <div className="safety-icon">
              <ShieldCheck size={23} />
            </div>

            <div>
              <span>BEZPEČNOST</span>
              <h3>Jazdi zodpovedne</h3>
            </div>

            <div className="safe-badge">ACTIVE</div>
          </div>
        </section>
      </main>

      {/* NAVIGATION */}
      <nav className="bottom-nav">
        <NavItem
          active={activeTab === "home"}
          icon={<GaugeCircle size={21} />}
          label="Prehľad"
          onClick={() => setActiveTab("home")}
        />

        <NavItem
          active={activeTab === "map"}
          icon={<Map size={21} />}
          label="Mapy"
          onClick={() => setActiveTab("map")}
        />

        <div className="nav-center">
          <button onClick={() => setDriving(!driving)}>
            <Zap size={24} fill="currentColor" />
          </button>
        </div>

        <NavItem
          active={activeTab === "routes"}
          icon={<Route size={21} />}
          label="Trate"
          onClick={() => setActiveTab("routes")}
        />

        <NavItem
          active={activeTab === "profile"}
          icon={<User size={21} />}
          label="Profil"
          onClick={() => setActiveTab("profile")}
        />
      </nav>
    </div>
  );
}

function Telemetry({
  icon,
  label,
  value,
  unit,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  unit: string;
}) {
  return (
    <div className="telemetry-item">
      <div className="telemetry-icon">{icon}</div>
      <div>
        <span>{label}</span>
        <strong>
          {value} <small>{unit}</small>
        </strong>
      </div>
    </div>
  );
}

function NavItem({
  active,
  icon,
  label,
  onClick,
}: {
  active: boolean;
  icon: React.ReactNode;
  label: string;
  onClick: () => void;
}) {
  return (
    <button className={`nav-item ${active ? "active" : ""}`} onClick={onClick}>
      {icon}
      <span>{label}</span>
    </button>
  );
}

function PlusIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none">
      <path d="M12 5V19M5 12H19" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}

function MinusIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none">
      <path d="M5 12H19" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}

export default App;
