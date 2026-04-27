import React, { useEffect, useMemo, useState } from "react";

/* ================= LANGUAGE ================= */

const TEXT = {
  KR: {
    navHome: "홈",
    login: "로그인",
    dashboard: "마이페이지",
    heroBadge: "INDONESIA AI ENTRY PLATFORM",
    heroTitle: "AI가 인도네시아 입국부터 정착까지 자동 처리합니다",
    heroSub:
      "비자 · 세관신고 · 환전 · 공항픽업 · 차량렌트 · 숙소 · 알림까지 하나의 플랫폼에서 진행됩니다.",
    start: "여권으로 시작하기",
    trust: "신뢰 기반 자동 처리",
    liveTitle: "실시간 자동 처리 현황",
    whyTitle: "왜 이 플랫폼을 이용해야 하는가",
    flowTitle: "AI 업무 처리 흐름",
    servicesTitle: "서비스",
    loginTitle: "회원 로그인",
    email: "이메일",
    password: "비밀번호",
    loginBtn: "마이페이지 입장",
    dashTitle: "AI 마이페이지",
    dashSub: "회원가입 후 모든 신청, 결제, 진행상태 확인은 이곳에서 실행됩니다.",
    services: ["비자 신청", "세관 신고", "환전 신청", "공항 픽업", "차량 렌트", "숙소 예약"],
    why: [
      "AI 자동 서류 체크",
      "실시간 진행 상태",
      "고객명 보호 표시",
      "온체인 기록 보관",
      "만료 후 자동 삭제",
      "다국어 알림 발송",
    ],
    flow: ["여권 업로드", "AI 분석", "서류 자동 분류", "결제", "담당자 배정", "진행 완료"],
  },
  EN: {
    navHome: "Home",
    login: "Login",
    dashboard: "Dashboard",
    heroBadge: "INDONESIA AI ENTRY PLATFORM",
    heroTitle: "AI automates your journey from arrival to settlement",
    heroSub:
      "Visa, customs, exchange, airport pickup, car rental, accommodation and alerts in one platform.",
    start: "Start with Passport",
    trust: "Trusted automated processing",
    liveTitle: "Live AI Processing",
    whyTitle: "Why use this platform",
    flowTitle: "AI Workflow",
    servicesTitle: "Services",
    loginTitle: "Member Login",
    email: "Email",
    password: "Password",
    loginBtn: "Enter Dashboard",
    dashTitle: "AI Dashboard",
    dashSub: "After signup, all applications, payments and tracking are handled here.",
    services: ["Visa", "Customs", "Exchange", "Airport Pickup", "Car Rental", "Accommodation"],
    why: [
      "AI document check",
      "Real-time tracking",
      "Masked customer data",
      "On-chain records",
      "Auto deletion",
      "Multilingual alerts",
    ],
    flow: ["Passport Upload", "AI Analysis", "Auto Sorting", "Payment", "Agent Assigned", "Completed"],
  },
  ID: {
    navHome: "Beranda",
    login: "Masuk",
    dashboard: "Dashboard",
    heroBadge: "PLATFORM AI MASUK INDONESIA",
    heroTitle: "AI mengurus perjalanan Anda dari masuk hingga menetap di Indonesia",
    heroSub:
      "Visa, bea cukai, penukaran uang, jemput bandara, sewa mobil, akomodasi dan notifikasi dalam satu platform.",
    start: "Mulai dengan Paspor",
    trust: "Proses otomatis terpercaya",
    liveTitle: "Proses AI Real-time",
    whyTitle: "Mengapa memakai platform ini",
    flowTitle: "Alur Kerja AI",
    servicesTitle: "Layanan",
    loginTitle: "Login Member",
    email: "Email",
    password: "Kata sandi",
    loginBtn: "Masuk Dashboard",
    dashTitle: "Dashboard AI",
    dashSub: "Setelah daftar, semua pengajuan, pembayaran dan status diproses di sini.",
    services: ["Visa", "Deklarasi Bea Cukai", "Penukaran Uang", "Jemput Bandara", "Sewa Mobil", "Akomodasi"],
    why: [
      "Cek dokumen AI",
      "Status real-time",
      "Nama pelanggan disamarkan",
      "Catatan on-chain",
      "Hapus otomatis",
      "Notifikasi multibahasa",
    ],
    flow: ["Upload Paspor", "Analisis AI", "Klasifikasi Dokumen", "Pembayaran", "Petugas Ditugaskan", "Selesai"],
  },
  CN: {
    navHome: "首页",
    login: "登录",
    dashboard: "我的页面",
    heroBadge: "印尼 AI 入境平台",
    heroTitle: "AI 自动处理从入境到定居的全部流程",
    heroSub:
      "签证、海关申报、换汇、机场接送、租车、住宿和通知都在一个平台完成。",
    start: "用护照开始",
    trust: "可信赖的自动处理",
    liveTitle: "实时 AI 处理状态",
    whyTitle: "为什么选择本平台",
    flowTitle: "AI 工作流程",
    servicesTitle: "服务",
    loginTitle: "会员登录",
    email: "邮箱",
    password: "密码",
    loginBtn: "进入我的页面",
    dashTitle: "AI 我的页面",
    dashSub: "注册后，所有申请、付款和进度确认都在这里执行。",
    services: ["签证申请", "海关申报", "换汇申请", "机场接送", "车辆租赁", "住宿预约"],
    why: [
      "AI 文件检查",
      "实时状态追踪",
      "客户姓名隐藏",
      "链上记录保存",
      "到期自动删除",
      "多语言通知",
    ],
    flow: ["上传护照", "AI 分析", "文件自动分类", "付款", "负责人分配", "处理完成"],
  },
};

/* ================= APP ================= */

export default function App() {
  const [lang, setLang] = useState("KR");
  const [page, setPage] = useState("home");
  const [loggedIn, setLoggedIn] = useState(false);

  const t = TEXT[lang];

  return (
    <div className="app">
      <style>{css}</style>

      <Header
        t={t}
        lang={lang}
        setLang={setLang}
        page={page}
        setPage={setPage}
        loggedIn={loggedIn}
      />

      {page === "home" && <Home t={t} setPage={setPage} />}
      {page === "login" && (
        <Login
          t={t}
          onLogin={() => {
            setLoggedIn(true);
            setPage("dashboard");
          }}
        />
      )}
      {page === "dashboard" && <Dashboard t={t} />}
    </div>
  );
}

/* ================= HEADER ================= */

function Header({ t, lang, setLang, setPage, loggedIn }) {
  return (
    <header className="header">
      <button className="brand" onClick={() => setPage("home")}>
        <span className="brandIcon">✦</span>
        <span>SMILE AI GROUP</span>
      </button>

      <nav className="nav">
        <button onClick={() => setPage("home")}>{t.navHome}</button>

        <div className="langs">
          {["KR", "EN", "ID", "CN"].map((l) => (
            <button
              key={l}
              className={lang === l ? "active" : ""}
              onClick={() => setLang(l)}
            >
              {l}
            </button>
          ))}
        </div>

        <button
          className="loginBtn"
          onClick={() => setPage(loggedIn ? "dashboard" : "login")}
        >
          {loggedIn ? t.dashboard : t.login}
        </button>
      </nav>
    </header>
  );
}

/* ================= HOME ================= */

function Home({ t, setPage }) {
  return (
    <>
      <section className="hero">
        <div className="heroText">
          <div className="badge">{t.heroBadge}</div>
          <h1>{t.heroTitle}</h1>
          <p>{t.heroSub}</p>

          <div className="heroActions">
            <button className="primary" onClick={() => setPage("login")}>
              {t.start} →
            </button>
            <div className="trust">● {t.trust}</div>
          </div>
        </div>

        <HeroVisual />
      </section>

      <LivePanel t={t} />

      <section className="section">
        <h2>{t.whyTitle}</h2>
        <div className="whyGrid">
          {t.why.map((item, i) => (
            <div className="glassCard" key={i}>
              <div className="cardNum">0{i + 1}</div>
              <h3>{item}</h3>
              <p>Automated · Secured · Tracked</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section flowSection">
        <h2>{t.flowTitle}</h2>
        <div className="flow">
          {t.flow.map((step, i) => (
            <div className="flowItem" key={i}>
              <div className="dot">{i + 1}</div>
              <span>{step}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <h2>{t.servicesTitle}</h2>
        <div className="serviceGrid">
          {t.services.map((s, i) => (
            <div className="service" key={i}>
              <div className="serviceIcon">
                {["🛂", "🧾", "💱", "🚘", "🚗", "🏨"][i]}
              </div>
              <h3>{s}</h3>
              <p>Member dashboard required</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

/* ================= HERO VISUAL ================= */

function HeroVisual() {
  const rings = useMemo(() => Array.from({ length: 5 }), []);

  return (
    <div className="visualBox">
      <div className="globe">
        {rings.map((_, i) => (
          <span key={i} className={`ring r${i + 1}`} />
        ))}
        <div className="core">AI</div>
      </div>

      <div className="floatingCard cardA">
        <b>Visa</b>
        <span>Approved</span>
      </div>
      <div className="floatingCard cardB">
        <b>Pickup</b>
        <span>Driver assigned</span>
      </div>
      <div className="floatingCard cardC">
        <b>Exchange</b>
        <span>Ready</span>
      </div>
    </div>
  );
}

/* ================= LIVE ================= */

function LivePanel({ t }) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const names = ["KIM", "LEE", "PARK", "CHOI", "JUNG", "HAN"];
    const actions = [
      "Visa approved",
      "Airport pickup assigned",
      "Vehicle reserved",
      "Exchange request verified",
      "Accommodation matched",
      "Customs form completed",
    ];

    const timer = setInterval(() => {
      const item = {
        name: names[Math.floor(Math.random() * names.length)],
        action: actions[Math.floor(Math.random() * actions.length)],
        time: new Date().toLocaleTimeString(),
      };

      setItems((prev) => [item, ...prev].slice(0, 6));
    }, 1600);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="livePanel">
      <div>
        <h2>{t.liveTitle}</h2>
        <p>Customer names are automatically masked for privacy.</p>
      </div>

      <div className="feedBox">
        {items.length === 0 && <div className="feed">AI system initializing...</div>}

        {items.map((item, i) => (
          <div className="feed" key={i}>
            <span className="pulse" />
            <b>{item.name} M***</b>
            <span>{item.action}</span>
            <small>{item.time}</small>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ================= LOGIN ================= */

function Login({ t, onLogin }) {
  return (
    <main className="loginPage">
      <div className="loginCard">
        <div className="badge">SECURE MEMBER ACCESS</div>
        <h1>{t.loginTitle}</h1>

        <input placeholder={t.email} />
        <input placeholder={t.password} type="password" />

        <button className="primary full" onClick={onLogin}>
          {t.loginBtn} →
        </button>
      </div>
    </main>
  );
}

/* ================= DASHBOARD ================= */

function Dashboard({ t }) {
  return (
    <main className="dashboard">
      <div className="dashHero">
        <div>
          <h1>{t.dashTitle}</h1>
          <p>{t.dashSub}</p>
        </div>
        <div className="statusPill">AI ONLINE</div>
      </div>

      <div className="dashGrid">
        {t.services.map((s, i) => (
          <div className="dashCard" key={i}>
            <div className="serviceIcon">
              {["🛂", "🧾", "💱", "🚘", "🚗", "🏨"][i]}
            </div>
            <h3>{s}</h3>
            <p>Application · Payment · Tracking</p>
            <button>Start</button>
          </div>
        ))}
      </div>
    </main>
  );
}

/* ================= CSS ================= */

const css = `
*{box-sizing:border-box}

body{
  margin:0;
  background:
    radial-gradient(circle at 20% 10%, rgba(0,229,255,.18), transparent 30%),
    radial-gradient(circle at 80% 20%, rgba(99,102,241,.22), transparent 32%),
    radial-gradient(circle at 50% 100%, rgba(16,185,129,.12), transparent 30%),
    #020617;
  color:white;
  font-family:Inter,Arial,sans-serif;
}

button,input{font-family:inherit}

.app{
  min-height:100vh;
  overflow-x:hidden;
}

.header{
  position:sticky;
  top:0;
  z-index:20;
  display:flex;
  align-items:center;
  justify-content:space-between;
  padding:18px 44px;
  backdrop-filter:blur(18px);
  background:rgba(2,6,23,.72);
  border-bottom:1px solid rgba(255,255,255,.08);
}

.brand{
  display:flex;
  align-items:center;
  gap:10px;
  border:0;
  background:transparent;
  color:white;
  font-weight:900;
  letter-spacing:.8px;
  cursor:pointer;
}

.brandIcon{
  width:34px;
  height:34px;
  display:grid;
  place-items:center;
  border-radius:12px;
  background:linear-gradient(135deg,#00e5ff,#6366f1);
  box-shadow:0 0 28px rgba(0,229,255,.55);
}

.nav{
  display:flex;
  align-items:center;
  gap:12px;
}

.nav button{
  border:1px solid rgba(255,255,255,.12);
  background:rgba(255,255,255,.05);
  color:white;
  padding:10px 14px;
  border-radius:14px;
  cursor:pointer;
}

.langs{
  display:flex;
  gap:6px;
  padding:5px;
  border-radius:16px;
  background:rgba(255,255,255,.05);
}

.langs button{
  padding:8px 11px;
  border-radius:11px;
}

.langs .active{
  background:#00e5ff;
  color:#020617;
  font-weight:900;
}

.loginBtn{
  background:linear-gradient(90deg,#00e5ff,#6366f1)!important;
  color:#020617!important;
  font-weight:900;
}

.hero{
  width:100%;
  min-height:680px;
  display:grid;
  grid-template-columns:1.05fr .95fr;
  gap:30px;
  align-items:center;
  padding:80px 70px 40px;
}

.badge{
  display:inline-flex;
  padding:9px 14px;
  border-radius:999px;
  color:#67e8f9;
  background:rgba(0,229,255,.08);
  border:1px solid rgba(103,232,249,.25);
  font-size:12px;
  font-weight:900;
  letter-spacing:1.4px;
}

.hero h1{
  margin:24px 0 18px;
  font-size:64px;
  line-height:1.03;
  letter-spacing:-3px;
  max-width:900px;
}

.hero p{
  max-width:760px;
  font-size:20px;
  line-height:1.65;
  color:rgba(255,255,255,.72);
}

.heroActions{
  display:flex;
  align-items:center;
  gap:18px;
  margin-top:30px;
  flex-wrap:wrap;
}

.primary{
  border:0;
  padding:17px 28px;
  border-radius:18px;
  background:linear-gradient(90deg,#00e5ff,#38bdf8,#6366f1);
  color:#020617;
  font-weight:950;
  font-size:16px;
  cursor:pointer;
  box-shadow:0 0 36px rgba(0,229,255,.35);
}

.trust{
  color:#86efac;
  font-weight:700;
}

.visualBox{
  position:relative;
  height:560px;
  display:grid;
  place-items:center;
}

.globe{
  position:relative;
  width:360px;
  height:360px;
  border-radius:50%;
  display:grid;
  place-items:center;
  background:
    radial-gradient(circle, rgba(0,229,255,.35), rgba(99,102,241,.1) 45%, transparent 70%);
  box-shadow:
    0 0 80px rgba(0,229,255,.28),
    inset 0 0 80px rgba(255,255,255,.05);
  animation:float 4s ease-in-out infinite;
}

.core{
  width:120px;
  height:120px;
  border-radius:50%;
  display:grid;
  place-items:center;
  font-size:36px;
  font-weight:1000;
  background:rgba(2,6,23,.8);
  border:1px solid rgba(255,255,255,.18);
  box-shadow:0 0 60px rgba(0,229,255,.55);
}

.ring{
  position:absolute;
  inset:18px;
  border:1px solid rgba(103,232,249,.28);
  border-radius:50%;
  animation:spin 8s linear infinite;
}

.r2{inset:50px; transform:rotateX(70deg)}
.r3{inset:80px; transform:rotateY(65deg)}
.r4{inset:115px; transform:rotateX(55deg)}
.r5{inset:-18px; border-color:rgba(99,102,241,.25)}

.floatingCard{
  position:absolute;
  min-width:165px;
  padding:16px;
  border-radius:22px;
  background:rgba(15,23,42,.74);
  border:1px solid rgba(255,255,255,.12);
  box-shadow:0 20px 60px rgba(0,0,0,.35);
  backdrop-filter:blur(18px);
}

.floatingCard b{display:block;font-size:18px}
.floatingCard span{color:#67e8f9;font-size:13px}

.cardA{top:80px;left:40px}
.cardB{right:30px;top:220px}
.cardC{bottom:80px;left:100px}

.livePanel{
  margin:20px 70px 0;
  padding:28px;
  display:grid;
  grid-template-columns:.8fr 1.2fr;
  gap:20px;
  border-radius:34px;
  background:rgba(255,255,255,.055);
  border:1px solid rgba(255,255,255,.1);
  backdrop-filter:blur(20px);
}

.livePanel h2,.section h2{
  margin:0 0 12px;
  font-size:34px;
}

.livePanel p{
  color:rgba(255,255,255,.65);
}

.feedBox{
  display:grid;
  gap:10px;
}

.feed{
  display:grid;
  grid-template-columns:auto 110px 1fr auto;
  align-items:center;
  gap:12px;
  padding:13px 16px;
  border-radius:18px;
  background:rgba(2,6,23,.62);
  border:1px solid rgba(255,255,255,.08);
}

.feed small{color:rgba(255,255,255,.45)}

.pulse{
  width:10px;
  height:10px;
  border-radius:50%;
  background:#22c55e;
  box-shadow:0 0 18px #22c55e;
}

.section{
  padding:80px 70px 20px;
}

.whyGrid{
  display:grid;
  grid-template-columns:repeat(3,1fr);
  gap:18px;
}

.glassCard,.service,.dashCard,.loginCard{
  border-radius:28px;
  background:rgba(255,255,255,.055);
  border:1px solid rgba(255,255,255,.1);
  backdrop-filter:blur(18px);
  box-shadow:0 20px 80px rgba(0,0,0,.25);
}

.glassCard{
  padding:26px;
}

.cardNum{
  color:#67e8f9;
  font-weight:1000;
  margin-bottom:16px;
}

.glassCard h3,.service h3,.dashCard h3{
  margin:0 0 10px;
  font-size:22px;
}

.glassCard p,.service p,.dashCard p{
  color:rgba(255,255,255,.58);
}

.flowSection{
  padding-top:60px;
}

.flow{
  display:grid;
  grid-template-columns:repeat(6,1fr);
  gap:12px;
}

.flowItem{
  min-height:120px;
  display:flex;
  flex-direction:column;
  justify-content:center;
  gap:14px;
  padding:18px;
  border-radius:24px;
  background:linear-gradient(180deg,rgba(0,229,255,.1),rgba(255,255,255,.04));
  border:1px solid rgba(103,232,249,.18);
}

.dot{
  width:36px;
  height:36px;
  border-radius:50%;
  display:grid;
  place-items:center;
  background:#00e5ff;
  color:#020617;
  font-weight:1000;
}

.serviceGrid{
  display:grid;
  grid-template-columns:repeat(6,1fr);
  gap:16px;
}

.service{
  padding:24px;
  min-height:210px;
}

.serviceIcon{
  font-size:34px;
  margin-bottom:18px;
}

.loginPage{
  min-height:calc(100vh - 75px);
  display:grid;
  place-items:center;
  padding:40px;
}

.loginCard{
  width:min(480px,100%);
  padding:38px;
}

.loginCard h1{
  font-size:42px;
  margin:22px 0;
}

.loginCard input{
  width:100%;
  margin-bottom:14px;
  padding:17px;
  border-radius:16px;
  border:1px solid rgba(255,255,255,.12);
  background:rgba(2,6,23,.65);
  color:white;
  outline:0;
}

.full{
  width:100%;
  margin-top:10px;
}

.dashboard{
  padding:70px;
}

.dashHero{
  display:flex;
  justify-content:space-between;
  gap:20px;
  align-items:center;
  padding:34px;
  border-radius:34px;
  background:linear-gradient(135deg,rgba(0,229,255,.13),rgba(99,102,241,.12));
  border:1px solid rgba(255,255,255,.1);
}

.dashHero h1{
  margin:0 0 10px;
  font-size:48px;
}

.dashHero p{
  color:rgba(255,255,255,.65);
}

.statusPill{
  padding:14px 18px;
  border-radius:999px;
  color:#020617;
  background:#22c55e;
  font-weight:1000;
  box-shadow:0 0 30px rgba(34,197,94,.45);
}

.dashGrid{
  margin-top:24px;
  display:grid;
  grid-template-columns:repeat(3,1fr);
  gap:18px;
}

.dashCard{
  padding:26px;
}

.dashCard button{
  margin-top:20px;
  width:100%;
  padding:13px;
  border-radius:15px;
  border:0;
  background:rgba(255,255,255,.1);
  color:white;
  cursor:pointer;
}

@keyframes spin{
  from{transform:rotate(0deg)}
  to{transform:rotate(360deg)}
}

@keyframes float{
  0%,100%{transform:translateY(0)}
  50%{transform:translateY(-18px)}
}

@media(max-width:1100px){
  .hero{
    grid-template-columns:1fr;
    padding:50px 24px;
  }

  .hero h1{
    font-size:42px;
  }

  .visualBox{
    height:420px;
  }

  .livePanel,.section,.dashboard{
    margin:0;
    padding:40px 24px;
  }

  .livePanel{
    grid-template-columns:1fr;
  }

  .whyGrid,.dashGrid{
    grid-template-columns:1fr 1fr;
  }

  .serviceGrid,.flow{
    grid-template-columns:1fr 1fr;
  }
}

@media(max-width:700px){
  .header{
    padding:14px;
    flex-direction:column;
    gap:12px;
  }

  .nav{
    flex-wrap:wrap;
    justify-content:center;
  }

  .hero h1{
    font-size:34px;
    letter-spacing:-1.5px;
  }

  .whyGrid,.dashGrid,.serviceGrid,.flow{
    grid-template-columns:1fr;
  }

  .globe{
    width:270px;
    height:270px;
  }

  .floatingCard{
    display:none;
  }

  .feed{
    grid-template-columns:auto 1fr;
  }

  .feed small{
    display:none;
  }
}
`;
