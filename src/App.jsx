import React, { useEffect, useState } from "react";

const TEXT = {
  KR: {
    home: "홈",
    login: "로그인",
    signup: "회원가입",
    dash: "마이페이지",
    badge: "AI IMMIGRATION · MOBILITY · SETTLEMENT",
    title: "인도네시아 입국부터 정착까지 AI가 자동 실행합니다",
    sub: "비자, 세관신고, 환전, 공항픽업, 차량렌트, 숙소, 카카오톡/WhatsApp 알림까지 하나의 AI 플랫폼에서 처리됩니다.",
    start: "여권으로 시작하기",
    create: "회원가입",
    live: "실시간 AI 처리",
    why: "AI 플랫폼 핵심 기능",
    service: "실행 가능한 서비스",
    flow: "자동화 흐름",
    email: "이메일",
    password: "비밀번호",
    name: "이름",
    phone: "전화번호",
    enter: "마이페이지 입장",
    make: "계정 만들기",
    dashboardTitle: "AI 마이페이지",
    dashboardSub: "회원가입 후 신청, 결제, 상담, 진행상태 확인은 여기서 실행됩니다.",
  },
  EN: {
    home: "Home",
    login: "Login",
    signup: "Sign Up",
    dash: "Dashboard",
    badge: "AI IMMIGRATION · MOBILITY · SETTLEMENT",
    title: "AI automates your arrival and settlement in Indonesia",
    sub: "Visa, customs, exchange, airport pickup, car rental, accommodation, KakaoTalk and WhatsApp alerts in one platform.",
    start: "Start with Passport",
    create: "Create Account",
    live: "Live AI Processing",
    why: "Core AI Platform",
    service: "Executable Services",
    flow: "Automation Flow",
    email: "Email",
    password: "Password",
    name: "Name",
    phone: "Phone",
    enter: "Enter Dashboard",
    make: "Create Account",
    dashboardTitle: "AI Dashboard",
    dashboardSub: "Applications, payments, consulting and tracking run inside the member dashboard.",
  },
  ID: {
    home: "Beranda",
    login: "Masuk",
    signup: "Daftar",
    dash: "Dashboard",
    badge: "AI IMIGRASI · MOBILITAS · SETTLEMENT",
    title: "AI mengurus masuk hingga menetap di Indonesia",
    sub: "Visa, bea cukai, penukaran uang, jemput bandara, sewa mobil, akomodasi, KakaoTalk dan WhatsApp dalam satu platform.",
    start: "Mulai dengan Paspor",
    create: "Daftar Member",
    live: "Proses AI Real-time",
    why: "Fitur Inti AI",
    service: "Layanan Aktif",
    flow: "Alur Otomasi",
    email: "Email",
    password: "Kata sandi",
    name: "Nama",
    phone: "Nomor HP",
    enter: "Masuk Dashboard",
    make: "Buat Akun",
    dashboardTitle: "Dashboard AI",
    dashboardSub: "Pengajuan, pembayaran, konsultasi dan pelacakan dilakukan di dashboard member.",
  },
  CN: {
    home: "首页",
    login: "登录",
    signup: "注册",
    dash: "我的页面",
    badge: "AI 入境 · 移动 · 定居系统",
    title: "AI 自动处理从入境到定居的全部流程",
    sub: "签证、海关、换汇、机场接送、租车、住宿、KakaoTalk 和 WhatsApp 通知都在一个平台完成。",
    start: "用护照开始",
    create: "注册会员",
    live: "实时 AI 处理",
    why: "AI 平台核心功能",
    service: "可执行服务",
    flow: "自动化流程",
    email: "邮箱",
    password: "密码",
    name: "姓名",
    phone: "电话",
    enter: "进入我的页面",
    make: "创建账户",
    dashboardTitle: "AI 我的页面",
    dashboardSub: "申请、付款、咨询和进度追踪都在会员页面执行。",
  },
};

const services = [
  ["visa", "비자 신청"],
  ["customs", "세관 신고"],
  ["exchange", "환전 신청"],
  ["pickup", "공항 픽업"],
  ["car", "차량 렌트"],
  ["hotel", "숙소 예약"],
  ["chat", "카카오톡 상담"],
  ["whatsapp", "WhatsApp 상담"],
];

const reasons = [
  "AI 서류 자동 분석",
  "여권 기반 자동 시작",
  "실시간 진행 추적",
  "카카오톡 / WhatsApp 알림",
  "온체인 기록 보관",
  "만료 후 자동 삭제",
];

const steps = ["여권 업로드", "AI 검증", "서류 분류", "결제", "담당자 연결", "완료"];

export default function App() {
  const [lang, setLang] = useState("KR");
  const [page, setPage] = useState("home");
  const [login, setLogin] = useState(false);
  const t = TEXT[lang];

  return (
    <div className="app">
      <style>{css}</style>
      <Background />

      <header className="header">
        <button className="brand" onClick={() => setPage("home")}>
          <span className="brandMark">S</span>
          <span>
            SMILE AI
            <small>INDONESIA PLATFORM</small>
          </span>
        </button>

        <nav>
          <button onClick={() => setPage("home")}>{t.home}</button>
          {["KR", "EN", "ID", "CN"].map((x) => (
            <button key={x} className={lang === x ? "active" : ""} onClick={() => setLang(x)}>
              {x}
            </button>
          ))}
          <button onClick={() => setPage("signup")}>{t.signup}</button>
          <button className="navPrimary" onClick={() => setPage(login ? "dash" : "login")}>
            {login ? t.dash : t.login}
          </button>
        </nav>
      </header>

      {page === "home" && <Home t={t} setPage={setPage} />}
      {page === "login" && <Auth type="login" t={t} setLogin={setLogin} setPage={setPage} />}
      {page === "signup" && <Auth type="signup" t={t} setLogin={setLogin} setPage={setPage} />}
      {page === "dash" && <Dashboard t={t} />}
    </div>
  );
}

function Background() {
  return (
    <>
      <div className="aurora a1" />
      <div className="aurora a2" />
      <div className="gridBg" />
      <div className="particles">
        {Array.from({ length: 44 }).map((_, i) => (
          <span key={i} style={{ "--i": i }} />
        ))}
      </div>
    </>
  );
}

function Home({ t, setPage }) {
  return (
    <>
      <section className="hero">
        <div className="heroText">
          <div className="badge">{t.badge}</div>
          <h1>{t.title}</h1>
          <p>{t.sub}</p>

          <div className="heroBtns">
            <button className="primary" onClick={() => setPage("signup")}>
              {t.create} →
            </button>
            <button className="ghost" onClick={() => setPage("login")}>
              {t.start}
            </button>
          </div>

          <div className="miniStats">
            <div><b>24/7</b><span>AI Operation</span></div>
            <div><b>4 Lang</b><span>KR · EN · ID · CN</span></div>
            <div><b>Live</b><span>Kakao · WhatsApp</span></div>
          </div>
        </div>

        <AICenter />
      </section>

      <LivePanel t={t} />

      <section className="section">
        <h2>{t.why}</h2>
        <div className="featureGrid">
          {reasons.map((x, i) => (
            <div className="feature" key={x}>
              <Icon name={["scan", "passport", "track", "chat", "chain", "shield"][i]} />
              <span>0{i + 1}</span>
              <h3>{x}</h3>
              <p>Automated · Connected · Protected</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <h2>{t.flow}</h2>
        <div className="flow">
          {steps.map((x, i) => (
            <div className="flowCard" key={x}>
              <b>{i + 1}</b>
              <p>{x}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section bottom">
        <h2>{t.service}</h2>
        <ServiceGrid />
      </section>
    </>
  );
}

function AICenter() {
  return (
    <div className="aiCenter">
      <div className="orbital o1" />
      <div className="orbital o2" />
      <div className="orbital o3" />

      <div className="aiSphere">
        <div className="sphereGrid" />
        <div className="sphereGlow" />
        <strong>AI</strong>
      </div>

      <div className="dataCard d1"><b>Visa</b><span>Approved</span></div>
      <div className="dataCard d2"><b>Pickup</b><span>Driver assigned</span></div>
      <div className="dataCard d3"><b>KakaoTalk</b><span>Alert sent</span></div>
      <div className="dataCard d4"><b>WhatsApp</b><span>Connected</span></div>
    </div>
  );
}

function LivePanel({ t }) {
  const [feed, setFeed] = useState([]);

  useEffect(() => {
    const names = ["KIM", "LEE", "PARK", "CHOI", "JUNG", "HAN"];
    const acts = [
      "Visa approved",
      "KakaoTalk alert sent",
      "WhatsApp connected",
      "Pickup assigned",
      "Exchange verified",
      "Room matched",
    ];

    const timer = setInterval(() => {
      setFeed((p) =>
        [{
          name: names[Math.floor(Math.random() * names.length)],
          act: acts[Math.floor(Math.random() * acts.length)],
          time: new Date().toLocaleTimeString(),
        }, ...p].slice(0, 6)
      );
    }, 1300);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="livePanel">
      <div>
        <div className="badge small">LIVE AUTOMATION</div>
        <h2>{t.live}</h2>
        <p>고객명은 자동 마스킹되고, 진행상태는 실시간으로 업데이트됩니다.</p>
      </div>

      <div className="liveList">
        {feed.map((f, i) => (
          <div className="liveItem" key={i}>
            <i />
            <b>{f.name} M***</b>
            <span>{f.act}</span>
            <small>{f.time}</small>
          </div>
        ))}
      </div>
    </section>
  );
}

function ServiceGrid() {
  return (
    <div className="serviceGrid">
      {services.map(([icon, title]) => (
        <div className="serviceCard" key={title}>
          <Icon name={icon} />
          <h3>{title}</h3>
          <p>Member dashboard execution</p>
          <button>Open</button>
        </div>
      ))}
    </div>
  );
}

function Auth({ type, t, setLogin, setPage }) {
  const isSignup = type === "signup";

  return (
    <main className="authPage">
      <div className="authCard">
        <div className="badge small">{isSignup ? "CREATE SECURE ACCOUNT" : "SECURE ACCESS"}</div>
        <h1>{isSignup ? t.signup : t.loginTitle || t.login}</h1>

        {isSignup && <input placeholder={t.name} />}
        <input placeholder={t.email} />
        {isSignup && <input placeholder={t.phone} />}
        <input placeholder={t.password} type="password" />

        <button
          className="primary full"
          onClick={() => {
            setLogin(true);
            setPage("dash");
          }}
        >
          {isSignup ? t.make : t.enter} →
        </button>

        <div className="chatBtns">
          <button className="kakao"><Icon name="kakao" /> KakaoTalk</button>
          <button className="whats"><Icon name="whatsapp" /> WhatsApp</button>
        </div>
      </div>
    </main>
  );
}

function Dashboard({ t }) {
  return (
    <main className="dashboard">
      <section className="dashHero">
        <div>
          <div className="badge small">MEMBER CONTROL CENTER</div>
          <h1>{t.dashboardTitle}</h1>
          <p>{t.dashboardSub}</p>
        </div>
        <div className="online">AI ONLINE</div>
      </section>

      <ServiceGrid />
    </main>
  );
}

function Icon({ name }) {
  const common = { width: 34, height: 34, viewBox: "0 0 24 24", fill: "none" };
  const stroke = { stroke: "currentColor", strokeWidth: 1.8, strokeLinecap: "round", strokeLinejoin: "round" };

  const icons = {
    visa: <path {...stroke} d="M4 7h16v10H4zM7 11h3M14 11h3M7 14h6" />,
    customs: <path {...stroke} d="M7 3h8l3 3v15H7zM15 3v4h4M10 11h6M10 15h6" />,
    exchange: <path {...stroke} d="M7 7h10M7 7l3-3M7 7l3 3M17 17H7M17 17l-3-3M17 17l-3 3" />,
    pickup: <path {...stroke} d="M3 13h18l-2-5H5zM5 13v5M19 13v5M7 18h.1M17 18h.1" />,
    car: <path {...stroke} d="M5 16h14l-1.5-5h-11zM7 16v3M17 16v3M8 19h.1M16 19h.1" />,
    hotel: <path {...stroke} d="M4 20V5M4 12h16v8M8 12V8h5v4" />,
    chat: <path {...stroke} d="M4 5h16v11H8l-4 4z" />,
    whatsapp: <path {...stroke} d="M12 3a9 9 0 0 0-7.5 14L3 21l4.2-1.3A9 9 0 1 0 12 3zM9 8c1 3 2.5 4.8 5.8 6" />,
    kakao: <path {...stroke} d="M12 5C7.6 5 4 7.7 4 11c0 2 1.3 3.7 3.4 4.8L7 19l3.3-2.1H12c4.4 0 8-2.7 8-6s-3.6-5.9-8-5.9z" />,
    scan: <path {...stroke} d="M4 7V4h3M17 4h3v3M20 17v3h-3M7 20H4v-3M7 12h10" />,
    passport: <path {...stroke} d="M7 3h10a2 2 0 0 1 2 2v16H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zM9 8h6M9 12h6M9 16h4" />,
    track: <path {...stroke} d="M4 18c4-8 8 4 16-8M6 18h.1M12 13h.1M18 10h.1" />,
    chain: <path {...stroke} d="M10 7h4a4 4 0 0 1 0 8h-2M14 17h-4a4 4 0 0 1 0-8h2" />,
    shield: <path {...stroke} d="M12 3l7 3v5c0 5-3 8-7 10-4-2-7-5-7-10V6z" />,
  };

  return <svg {...common}>{icons[name] || icons.chat}</svg>;
}

const css = `
*{box-sizing:border-box}
body{
  margin:0;
  background:#050816;
  color:white;
  font-family:Inter,Arial,sans-serif;
}
button,input{font-family:inherit}
.app{
  min-height:100vh;
  position:relative;
  overflow-x:hidden;
  background:
    radial-gradient(circle at 10% 12%,rgba(0,255,255,.30),transparent 26%),
    radial-gradient(circle at 88% 15%,rgba(168,85,247,.38),transparent 28%),
    radial-gradient(circle at 50% 100%,rgba(34,197,94,.16),transparent 30%),
    linear-gradient(135deg,#050816,#07111f 48%,#030712);
}
.aurora{
  position:fixed;
  width:520px;
  height:520px;
  border-radius:50%;
  filter:blur(70px);
  opacity:.42;
  pointer-events:none;
  animation:auroraMove 12s ease-in-out infinite;
}
.a1{background:#06b6d4;left:-160px;top:120px}
.a2{background:#8b5cf6;right:-150px;top:80px;animation-delay:2s}
.gridBg{
  position:fixed;
  inset:0;
  pointer-events:none;
  opacity:.13;
  background-image:
    linear-gradient(rgba(255,255,255,.08) 1px,transparent 1px),
    linear-gradient(90deg,rgba(255,255,255,.08) 1px,transparent 1px);
  background-size:72px 72px;
  mask-image:linear-gradient(to bottom,black,transparent 88%);
}
.particles{
  position:fixed;
  inset:0;
  overflow:hidden;
  pointer-events:none;
}
.particles span{
  position:absolute;
  left:calc((var(--i) * 43px) % 100vw);
  top:calc((var(--i) * 71px) % 100vh);
  width:4px;
  height:4px;
  border-radius:50%;
  background:#67e8f9;
  box-shadow:0 0 18px #67e8f9;
  opacity:.4;
  animation:particle 8s linear infinite;
}
.header{
  position:sticky;
  top:0;
  z-index:20;
  height:78px;
  padding:0 54px;
  display:flex;
  align-items:center;
  justify-content:space-between;
  background:rgba(5,8,22,.58);
  border-bottom:1px solid rgba(255,255,255,.13);
  backdrop-filter:blur(24px);
}
.brand{
  border:0;
  background:transparent;
  color:white;
  display:flex;
  align-items:center;
  gap:13px;
  font-weight:1000;
  cursor:pointer;
}
.brand small{
  display:block;
  color:#67e8f9;
  font-size:10px;
  letter-spacing:1.8px;
  margin-top:3px;
}
.brandMark{
  width:43px;
  height:43px;
  display:grid;
  place-items:center;
  border-radius:15px;
  background:linear-gradient(135deg,#22d3ee,#8b5cf6,#22c55e);
  box-shadow:0 0 40px rgba(34,211,238,.7);
}
nav{
  display:flex;
  gap:8px;
  align-items:center;
}
nav button{
  padding:10px 13px;
  border-radius:14px;
  border:1px solid rgba(255,255,255,.18);
  background:rgba(255,255,255,.07);
  color:white;
  cursor:pointer;
}
nav .active{
  background:#67e8f9;
  color:#020617;
  font-weight:900;
}
.navPrimary{
  background:linear-gradient(90deg,#22d3ee,#a78bfa)!important;
  color:#020617!important;
  font-weight:1000;
}
.hero{
  position:relative;
  z-index:2;
  min-height:720px;
  padding:86px 70px 40px;
  display:grid;
  grid-template-columns:1.04fr .96fr;
  align-items:center;
  gap:30px;
}
.badge{
  display:inline-flex;
  padding:10px 15px;
  border-radius:999px;
  background:rgba(34,211,238,.12);
  border:1px solid rgba(103,232,249,.42);
  color:#a5f3fc;
  font-size:12px;
  font-weight:1000;
  letter-spacing:1.6px;
}
.badge.small{
  font-size:11px;
  padding:8px 12px;
}
.hero h1{
  margin:23px 0 18px;
  max-width:950px;
  font-size:68px;
  line-height:1.02;
  letter-spacing:-3.7px;
  text-shadow:0 0 55px rgba(103,232,249,.22);
}
.hero p{
  max-width:820px;
  color:rgba(255,255,255,.76);
  font-size:20px;
  line-height:1.75;
}
.heroBtns{
  display:flex;
  gap:14px;
  align-items:center;
  margin-top:32px;
  flex-wrap:wrap;
}
.primary,.ghost{
  border:0;
  padding:17px 28px;
  border-radius:18px;
  font-size:16px;
  font-weight:1000;
  cursor:pointer;
}
.primary{
  background:linear-gradient(90deg,#22d3ee,#60a5fa,#a78bfa);
  color:#020617;
  box-shadow:0 0 45px rgba(34,211,238,.42),0 20px 80px rgba(0,0,0,.35);
}
.ghost{
  color:white;
  background:rgba(255,255,255,.08);
  border:1px solid rgba(255,255,255,.18);
}
.miniStats{
  display:grid;
  grid-template-columns:repeat(3,1fr);
  gap:12px;
  max-width:700px;
  margin-top:34px;
}
.miniStats div{
  padding:18px;
  border-radius:22px;
  background:rgba(255,255,255,.075);
  border:1px solid rgba(255,255,255,.14);
  backdrop-filter:blur(18px);
}
.miniStats b{display:block;font-size:22px;color:#67e8f9}
.miniStats span{color:rgba(255,255,255,.62);font-size:13px}
.aiCenter{
  position:relative;
  height:590px;
  display:grid;
  place-items:center;
  perspective:1000px;
}
.aiSphere{
  position:relative;
  width:380px;
  height:380px;
  border-radius:50%;
  display:grid;
  place-items:center;
  background:
    radial-gradient(circle at 32% 25%,rgba(255,255,255,.7),transparent 8%),
    radial-gradient(circle at 40% 38%,rgba(34,211,238,.58),transparent 24%),
    radial-gradient(circle at 68% 70%,rgba(168,85,247,.55),transparent 28%),
    radial-gradient(circle,#082f49,#020617 70%);
  box-shadow:
    inset -40px -40px 95px rgba(0,0,0,.72),
    inset 25px 20px 80px rgba(103,232,249,.22),
    0 0 95px rgba(34,211,238,.48),
    0 0 170px rgba(168,85,247,.26);
  animation:sphere 6s ease-in-out infinite;
}
.aiSphere strong{
  z-index:2;
  width:128px;
  height:128px;
  border-radius:50%;
  display:grid;
  place-items:center;
  background:rgba(2,6,23,.82);
  border:1px solid rgba(255,255,255,.24);
  font-size:42px;
  box-shadow:0 0 65px rgba(34,211,238,.5);
}
.sphereGrid{
  position:absolute;
  inset:24px;
  border-radius:50%;
  border:1px solid rgba(255,255,255,.25);
  box-shadow:
    0 0 0 42px rgba(255,255,255,.085),
    0 0 0 84px rgba(255,255,255,.055),
    0 0 0 126px rgba(255,255,255,.03);
  animation:spin 13s linear infinite;
}
.sphereGlow{
  position:absolute;
  inset:-24px;
  border-radius:50%;
  background:radial-gradient(circle,rgba(34,211,238,.28),transparent 68%);
  filter:blur(14px);
}
.orbital{
  position:absolute;
  border-radius:50%;
  border:1px solid rgba(103,232,249,.32);
}
.o1{width:540px;height:540px;animation:spin 16s linear infinite}
.o2{width:620px;height:300px;transform:rotateX(68deg) rotateZ(-18deg);animation:orbitB 11s linear infinite}
.o3{width:300px;height:620px;transform:rotateY(66deg) rotateZ(18deg);animation:spin 20s linear infinite reverse}
.dataCard{
  position:absolute;
  min-width:176px;
  padding:17px;
  border-radius:24px;
  background:rgba(8,13,30,.76);
  border:1px solid rgba(255,255,255,.22);
  box-shadow:0 24px 80px rgba(0,0,0,.45),0 0 35px rgba(34,211,238,.15);
  backdrop-filter:blur(20px);
}
.dataCard b{display:block;font-size:18px}
.dataCard span{color:#67e8f9;font-size:13px;font-weight:900}
.d1{top:58px;left:28px}
.d2{right:18px;top:210px}
.d3{left:92px;bottom:70px}
.d4{right:80px;bottom:42px}
.livePanel,.dashHero{
  position:relative;
  z-index:2;
  margin:20px 70px 0;
  padding:34px;
  border-radius:38px;
  display:grid;
  grid-template-columns:.75fr 1.25fr;
  gap:24px;
  background:linear-gradient(135deg,rgba(255,255,255,.10),rgba(255,255,255,.04));
  border:1px solid rgba(255,255,255,.16);
  backdrop-filter:blur(24px);
  box-shadow:0 30px 100px rgba(0,0,0,.32);
}
.livePanel h2,.section h2{
  margin:14px 0 10px;
  font-size:38px;
  letter-spacing:-1.4px;
}
.livePanel p,.dashHero p{color:rgba(255,255,255,.66)}
.liveList{display:grid;gap:10px}
.liveItem{
  display:grid;
  grid-template-columns:auto 110px 1fr auto;
  gap:12px;
  align-items:center;
  padding:14px 16px;
  border-radius:18px;
  background:rgba(2,6,23,.62);
  border:1px solid rgba(255,255,255,.14);
}
.liveItem i{
  width:10px;
  height:10px;
  border-radius:50%;
  background:#22c55e;
  box-shadow:0 0 20px #22c55e;
}
.liveItem small{color:rgba(255,255,255,.5)}
.section{
  position:relative;
  z-index:2;
  padding:82px 70px 0;
}
.featureGrid{
  display:grid;
  grid-template-columns:repeat(3,1fr);
  gap:18px;
}
.feature,.serviceCard,.flowCard,.authCard{
  position:relative;
  overflow:hidden;
  border-radius:30px;
  background:linear-gradient(180deg,rgba(255,255,255,.10),rgba(255,255,255,.04));
  border:1px solid rgba(255,255,255,.16);
  backdrop-filter:blur(22px);
  box-shadow:0 26px 90px rgba(0,0,0,.32);
}
.feature:before,.serviceCard:before,.flowCard:before{
  content:"";
  position:absolute;
  inset:-1px;
  background:linear-gradient(120deg,transparent,rgba(103,232,249,.23),transparent);
  transform:translateX(-120%);
  animation:shine 5s ease-in-out infinite;
}
.feature{
  padding:28px;
  min-height:210px;
}
.feature svg,.serviceCard svg{
  color:#67e8f9;
  filter:drop-shadow(0 0 14px rgba(103,232,249,.5));
}
.feature span{
  display:block;
  margin-top:18px;
  color:#67e8f9;
  font-weight:1000;
}
.feature h3,.serviceCard h3{
  margin:13px 0 10px;
  font-size:24px;
}
.feature p,.serviceCard p{color:rgba(255,255,255,.62)}
.flow{
  display:grid;
  grid-template-columns:repeat(6,1fr);
  gap:12px;
}
.flowCard{
  min-height:130px;
  padding:20px;
}
.flowCard b{
  width:38px;
  height:38px;
  display:grid;
  place-items:center;
  border-radius:50%;
  color:#020617;
  background:#67e8f9;
}
.flowCard p{font-weight:900}
.serviceGrid{
  display:grid;
  grid-template-columns:repeat(4,1fr);
  gap:18px;
}
.serviceCard{
  padding:28px;
  min-height:245px;
}
.serviceCard button{
  margin-top:16px;
  padding:12px 16px;
  border-radius:14px;
  border:1px solid rgba(255,255,255,.14);
  background:rgba(255,255,255,.08);
  color:white;
  cursor:pointer;
}
.bottom{padding-bottom:80px}
.authPage{
  position:relative;
  z-index:2;
  min-height:calc(100vh - 78px);
  display:grid;
  place-items:center;
  padding:40px;
}
.authCard{
  width:min(520px,100%);
  padding:42px;
}
.authCard h1{
  font-size:46px;
  margin:22px 0;
}
.authCard input{
  width:100%;
  margin-bottom:14px;
  padding:17px;
  border-radius:17px;
  border:1px solid rgba(255,255,255,.18);
  background:rgba(2,6,23,.74);
  color:white;
  outline:0;
}
.full{width:100%;margin-top:8px}
.chatBtns{
  display:grid;
  grid-template-columns:1fr 1fr;
  gap:10px;
  margin-top:14px;
}
.chatBtns button{
  display:flex;
  align-items:center;
  justify-content:center;
  gap:8px;
  border:0;
  border-radius:16px;
  padding:13px;
  font-weight:900;
  cursor:pointer;
}
.chatBtns svg{width:22px;height:22px}
.kakao{background:#fee500;color:#111}
.whats{background:#22c55e;color:#03130a}
.dashboard{
  position:relative;
  z-index:2;
  padding:70px;
}
.dashboard .dashHero{
  margin:0 0 24px;
  display:flex;
  justify-content:space-between;
  align-items:center;
}
.dashHero h1{
  font-size:52px;
  margin:16px 0 12px;
}
.online{
  padding:15px 20px;
  border-radius:999px;
  color:#020617;
  background:#22c55e;
  font-weight:1000;
  box-shadow:0 0 36px rgba(34,197,94,.55);
}
@keyframes auroraMove{50%{transform:translate(80px,60px) scale(1.1)}}
@keyframes particle{from{transform:translateY(100vh)}to{transform:translateY(-20vh)}}
@keyframes spin{to{transform:rotate(360deg)}}
@keyframes orbitB{to{transform:rotateX(68deg) rotateZ(342deg)}}
@keyframes sphere{50%{transform:translateY(-22px) rotate(2deg)}}
@keyframes shine{0%,70%{transform:translateX(-120%)}100%{transform:translateX(120%)}}
@media(max-width:1100px){
  .header{padding:0 20px}
  .hero{grid-template-columns:1fr;padding:54px 24px}
  .hero h1{font-size:43px}
  .livePanel{margin:20px 24px 0;grid-template-columns:1fr}
  .section,.dashboard{padding:50px 24px 0}
  .featureGrid,.serviceGrid{grid-template-columns:1fr 1fr}
  .flow{grid-template-columns:1fr 1fr}
}
@media(max-width:700px){
  .header{height:auto;padding:14px;flex-direction:column}
  nav{flex-wrap:wrap;justify-content:center}
  .hero h1{font-size:34px;letter-spacing:-1.6px}
  .aiCenter{height:420px}
  .aiSphere{width:260px;height:260px}
  .orbital,.dataCard{display:none}
  .miniStats,.featureGrid,.serviceGrid,.flow{grid-template-columns:1fr}
  .liveItem{grid-template-columns:auto 1fr}
  .liveItem small{display:none}
  .dashboard .dashHero{display:block}
}
`;
