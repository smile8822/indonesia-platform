import { useEffect, useState } from "react";
import "./App.css";

const LANGS = ["KR", "ID", "EN", "CN"];

const T = {
  KR: {
    start: "시작하기",
    login: "로그인",
    signup: "회원가입",
    hero1: "여권 하나만 올리세요.",
    hero2: "AI가 인도네시아 입국부터 정착까지",
    hero3: "전부 처리합니다.",
    desc: "비자 · 세관신고 · 환전 · 공항픽업 · 차량 · 숙소 · 장기체류까지 자동으로 연결됩니다.",
    cta: "여권으로 시작하기",
    support: "상담하기",
    live: "AI 자동 처리 현황",
    today: "오늘 처리",
    active: "진행중",
    approved: "승인완료",
    alert: "알림발송",
    services: "AI 자동 실행 서비스",
    why: "왜 이 플랫폼을 사용하는가",
    dashboard: "회원 대시보드",
    passport: "여권 업로드",
    name: "이름",
    email: "이메일",
    phone: "전화번호",
    password: "비밀번호",
    signupGo: "가입하고 대시보드로 이동",
    loginGo: "로그인하고 대시보드로 이동",
    upload: "여권 파일 업로드",
    analyze: "AI 분석 시작",
    back: "돌아가기",
  },
  ID: {
    start: "Mulai",
    login: "Masuk",
    signup: "Daftar",
    hero1: "Upload paspor saja.",
    hero2: "AI mengurus masuk hingga menetap",
    hero3: "semuanya otomatis.",
    desc: "Visa · bea cukai · penukaran uang · pickup bandara · mobil · akomodasi · tinggal lama terhubung otomatis.",
    cta: "Mulai dengan Paspor",
    support: "Konsultasi",
    live: "Status Otomatis AI",
    today: "Diproses",
    active: "Berjalan",
    approved: "Disetujui",
    alert: "Notifikasi",
    services: "Layanan Otomatis AI",
    why: "Mengapa menggunakan platform ini",
    dashboard: "Dashboard Member",
    passport: "Upload Paspor",
    name: "Nama",
    email: "Email",
    phone: "Nomor Telepon",
    password: "Kata Sandi",
    signupGo: "Daftar dan Masuk Dashboard",
    loginGo: "Masuk Dashboard",
    upload: "Upload File Paspor",
    analyze: "Mulai Analisis AI",
    back: "Kembali",
  },
  EN: {
    start: "Start",
    login: "Login",
    signup: "Sign Up",
    hero1: "Upload only your passport.",
    hero2: "AI handles entry to settlement",
    hero3: "automatically.",
    desc: "Visa · customs · exchange · airport pickup · vehicle · accommodation · long stay are connected automatically.",
    cta: "Start with Passport",
    support: "Support",
    live: "AI Automation Status",
    today: "Processed",
    active: "Active",
    approved: "Approved",
    alert: "Alerts",
    services: "AI Automated Services",
    why: "Why use this platform",
    dashboard: "Member Dashboard",
    passport: "Passport Upload",
    name: "Name",
    email: "Email",
    phone: "Phone Number",
    password: "Password",
    signupGo: "Sign Up and Open Dashboard",
    loginGo: "Login and Open Dashboard",
    upload: "Upload Passport File",
    analyze: "Start AI Analysis",
    back: "Back",
  },
  CN: {
    start: "开始",
    login: "登录",
    signup: "注册",
    hero1: "只需上传护照。",
    hero2: "AI 自动处理入境到定居",
    hero3: "全部流程。",
    desc: "签证 · 海关申报 · 换汇 · 接机 · 车辆 · 住宿 · 长期居留全部自动连接。",
    cta: "用护照开始",
    support: "咨询",
    live: "AI 自动处理状态",
    today: "今日处理",
    active: "进行中",
    approved: "已批准",
    alert: "通知发送",
    services: "AI 自动服务",
    why: "为什么使用此平台",
    dashboard: "会员仪表板",
    passport: "护照上传",
    name: "姓名",
    email: "邮箱",
    phone: "电话号码",
    password: "密码",
    signupGo: "注册并进入仪表板",
    loginGo: "登录并进入仪表板",
    upload: "上传护照文件",
    analyze: "开始 AI 分析",
    back: "返回",
  },
};

const services = {
  KR: ["비자", "세관", "환전", "픽업", "차량", "숙소", "장기체류", "진행조회"],
  ID: ["Visa", "Bea Cukai", "Penukaran", "Pickup", "Mobil", "Akomodasi", "Tinggal Lama", "Status"],
  EN: ["Visa", "Customs", "Exchange", "Pickup", "Vehicle", "Stay", "Long Stay", "Status"],
  CN: ["签证", "海关", "换汇", "接机", "车辆", "住宿", "长期居留", "进度"],
};

const icons = ["V", "C", "E", "P", "R", "S", "L", "✓"];

export default function App() {
  const [lang, setLang] = useState("KR");
  const [page, setPage] = useState("home");
  const [pulse, setPulse] = useState(0);
  const [stats, setStats] = useState({ today: 128, active: 23, approved: 91, alert: 47 });

  const t = T[lang];

  useEffect(() => {
    const timer = setInterval(() => {
      setPulse((v) => (v + 1) % 8);
      setStats((s) => ({
        today: s.today + Math.floor(Math.random() * 3),
        active: 18 + Math.floor(Math.random() * 12),
        approved: 88 + Math.floor(Math.random() * 9),
        alert: s.alert + Math.floor(Math.random() * 2),
      }));
    }, 1300);
    return () => clearInterval(timer);
  }, []);

  if (page === "signup") return <Auth type="signup" t={t} lang={lang} setLang={setLang} setPage={setPage} />;
  if (page === "login") return <Auth type="login" t={t} lang={lang} setLang={setLang} setPage={setPage} />;
  if (page === "dashboard") return <Dashboard t={t} lang={lang} setLang={setLang} setPage={setPage} pulse={pulse} />;
  if (page === "passport") return <Passport t={t} lang={lang} setLang={setLang} setPage={setPage} />;

  return (
    <main className="app">
      <Background />
      <Header t={t} lang={lang} setLang={setLang} setPage={setPage} />

      <section className="hero">
        <div className="heroText">
          <div className="badge"><span /> AI AUTONOMOUS PLATFORM</div>
          <h1>{t.hero1}<br />{t.hero2}<br /><em>{t.hero3}</em></h1>
          <p>{t.desc}</p>

          <div className="heroBtns">
            <button className="primary" onClick={() => setPage("signup")}>{t.cta}</button>
            <button className="ghost" onClick={() => setPage("login")}>{t.login}</button>
          </div>
        </div>

        <div className="visual">
          <div className="orbitRing r1" />
          <div className="orbitRing r2" />
          <div className="beam b1" />
          <div className="beam b2" />

          <div className="core">
            <strong>AI</strong>
            <small>AUTO ROUTING</small>
          </div>

          {services[lang].slice(0, 6).map((s, i) => (
            <div className={`node n${i} ${pulse === i ? "on" : ""}`} key={s}>
              <b>{icons[i]}</b>
              <span>{s}</span>
            </div>
          ))}

          <div className="passport">PASSPORT INPUT</div>
        </div>
      </section>

      <section className="stats">
        <div className="statTitle">
          <h2>{t.live}</h2>
          <p>LIVE SYSTEM OPERATING</p>
        </div>
        <Stat label={t.today} value={stats.today} />
        <Stat label={t.active} value={stats.active} />
        <Stat label={t.approved} value={`${stats.approved}%`} />
        <Stat label={t.alert} value={stats.alert} />
      </section>

      <section className="services">
        <h2>{t.services}</h2>
        <div className="serviceGrid">
          {services[lang].map((s, i) => (
            <button className="service" key={s} onClick={() => setPage("signup")}>
              <b>{icons[i]}</b>
              <strong>{s}</strong>
              <span>AUTO PROCESS</span>
            </button>
          ))}
        </div>
      </section>

      <section className="why">
        <div>
          <h2>{t.why}</h2>
          <p>{t.desc}</p>
        </div>
        <div className="whyCards">
          <div>AI AUTO</div>
          <div>REAL TIME</div>
          <div>ON-CHAIN RECORD</div>
          <div>DATA DELETE 1Y</div>
        </div>
      </section>

      <section className="ctaBox">
        <h2>{t.hero3}</h2>
        <button className="primary" onClick={() => setPage("signup")}>{t.cta}</button>
      </section>

      <Floating t={t} />
    </main>
  );
}

function Header({ t, lang, setLang, setPage }) {
  return (
    <header className="header">
      <button className="brand" onClick={() => setPage("home")}>
        <span>AI</span>
        <div><strong>SMILE AI</strong><small>INDONESIA PLATFORM</small></div>
      </button>

      <nav>
        <button onClick={() => setPage("signup")}>{t.start}</button>
        <button onClick={() => setPage("login")}>{t.login}</button>
      </nav>

      <div className="langs">
        {LANGS.map((l) => (
          <button key={l} className={lang === l ? "active" : ""} onClick={() => setLang(l)}>{l}</button>
        ))}
      </div>
    </header>
  );
}

function Background() {
  return (
    <>
      <div className="bgGrid" />
      <div className="glow g1" />
      <div className="glow g2" />
      <div className="glow g3" />
    </>
  );
}

function Stat({ label, value }) {
  return (
    <div className="stat">
      <strong>{value}</strong>
      <span>{label}</span>
    </div>
  );
}

function Auth({ type, t, lang, setLang, setPage }) {
  const isLogin = type === "login";
  return (
    <main className="app">
      <Background />
      <Header t={t} lang={lang} setLang={setLang} setPage={setPage} />

      <section className="auth">
        <button className="back" onClick={() => setPage("home")}>← {t.back}</button>
        <h1>{isLogin ? t.login : t.signup}</h1>

        {!isLogin && <input placeholder={t.name} />}
        <input placeholder={t.email} />
        {!isLogin && <input placeholder={t.phone} />}
        <input placeholder={t.password} type="password" />

        <button className="primary full" onClick={() => setPage("dashboard")}>
          {isLogin ? t.loginGo : t.signupGo}
        </button>

        <button className="switch" onClick={() => setPage(isLogin ? "signup" : "login")}>
          {isLogin ? t.signup : t.login}
        </button>
      </section>
    </main>
  );
}

function Dashboard({ t, lang, setLang, setPage, pulse }) {
  return (
    <main className="app">
      <Background />
      <Header t={t} lang={lang} setLang={setLang} setPage={setPage} />

      <section className="dashHero">
        <div>
          <h1>{t.dashboard}</h1>
          <p>{t.desc}</p>
        </div>
        <button className="primary" onClick={() => setPage("passport")}>{t.passport}</button>
      </section>

      <div className="serviceGrid">
        {services[lang].map((s, i) => (
          <div className={`service dash ${pulse === i ? "active" : ""}`} key={s}>
            <b>{icons[i]}</b>
            <strong>{s}</strong>
            <span>{i === 0 ? t.upload : "READY"}</span>
          </div>
        ))}
      </div>

      <Floating t={t} />
    </main>
  );
}

function Passport({ t, lang, setLang, setPage }) {
  const [file, setFile] = useState("");
  return (
    <main className="app">
      <Background />
      <Header t={t} lang={lang} setLang={setLang} setPage={setPage} />

      <section className="auth">
        <button className="back" onClick={() => setPage("dashboard")}>← {t.back}</button>
        <h1>{t.passport}</h1>
        <p>{t.desc}</p>

        <label className="upload">
          <input type="file" accept="image/*,.pdf" onChange={(e) => setFile(e.target.files?.[0]?.name || "")} />
          <strong>{file || t.upload}</strong>
          <span>IMAGE / PDF</span>
        </label>

        <button className="primary full">{t.analyze}</button>
      </section>

      <Floating t={t} />
    </main>
  );
}

function Floating({ t }) {
  return (
    <div className="floating">
      <button className="wa" onClick={() => window.open("https://wa.me/821027378821", "_blank")}>W</button>
      <button className="ka" onClick={() => window.open("https://pf.kakao.com", "_blank")}>K</button>
    </div>
  );
}
