import React, { useEffect, useState } from "react";

const TEXT = {
  KR: {
    home: "홈",
    login: "로그인",
    dash: "마이페이지",
    badge: "INDONESIA AI ENTRY AUTOMATION",
    title: "AI가 인도네시아 입국부터 정착까지 자동 처리합니다",
    sub: "비자 · 세관신고 · 환전 · 공항픽업 · 차량렌트 · 숙소 · 알림 · 기록보관까지 하나의 플랫폼에서 실행됩니다.",
    start: "여권으로 시작하기",
    live: "실시간 자동 처리 현황",
    why: "왜 이 플랫폼을 이용해야 하는가",
    flow: "AI 업무 처리 흐름",
    service: "통합 서비스",
    loginTitle: "회원 로그인",
    dashboardTitle: "AI 마이페이지",
    dashboardSub: "회원가입 후 모든 신청, 결제, 진행상태 확인은 마이페이지에서 실행됩니다.",
    email: "이메일",
    password: "비밀번호",
    enter: "입장하기",
    reasons: ["AI 서류 자동 분석", "실시간 진행 추적", "고객명 보호 표시", "온체인 기록 저장", "만료 후 자동 삭제", "다국어 자동 알림"],
    flowSteps: ["여권 업로드", "AI 분석", "서류 분류", "결제", "담당자 배정", "완료"],
    services: ["비자 신청", "세관 신고", "환전 신청", "공항 픽업", "차량 렌트", "숙소 예약"],
  },
  EN: {
    home: "Home",
    login: "Login",
    dash: "Dashboard",
    badge: "INDONESIA AI ENTRY AUTOMATION",
    title: "AI automates your arrival and settlement in Indonesia",
    sub: "Visa, customs, exchange, airport pickup, car rental, accommodation, alerts and records in one platform.",
    start: "Start with Passport",
    live: "Live AI Processing",
    why: "Why this platform",
    flow: "AI Workflow",
    service: "Integrated Services",
    loginTitle: "Member Login",
    dashboardTitle: "AI Dashboard",
    dashboardSub: "Applications, payments and tracking are handled inside the member dashboard.",
    email: "Email",
    password: "Password",
    enter: "Enter",
    reasons: ["AI document analysis", "Real-time tracking", "Masked customer data", "On-chain records", "Auto deletion", "Multilingual alerts"],
    flowSteps: ["Passport Upload", "AI Scan", "Document Sorting", "Payment", "Agent Assigned", "Completed"],
    services: ["Visa", "Customs", "Exchange", "Airport Pickup", "Car Rental", "Accommodation"],
  },
  ID: {
    home: "Beranda",
    login: "Masuk",
    dash: "Dashboard",
    badge: "OTOMASI AI MASUK INDONESIA",
    title: "AI mengurus perjalanan dari masuk hingga menetap di Indonesia",
    sub: "Visa, bea cukai, penukaran uang, jemput bandara, sewa mobil, akomodasi, notifikasi dan arsip dalam satu platform.",
    start: "Mulai dengan Paspor",
    live: "Proses AI Real-time",
    why: "Mengapa memakai platform ini",
    flow: "Alur Kerja AI",
    service: "Layanan Terpadu",
    loginTitle: "Login Member",
    dashboardTitle: "Dashboard AI",
    dashboardSub: "Semua pengajuan, pembayaran dan status diproses di dashboard member.",
    email: "Email",
    password: "Kata sandi",
    enter: "Masuk",
    reasons: ["Analisis dokumen AI", "Pelacakan real-time", "Nama pelanggan disamarkan", "Catatan on-chain", "Hapus otomatis", "Notifikasi multibahasa"],
    flowSteps: ["Upload Paspor", "Analisis AI", "Sortir Dokumen", "Pembayaran", "Petugas Ditugaskan", "Selesai"],
    services: ["Visa", "Bea Cukai", "Penukaran Uang", "Jemput Bandara", "Sewa Mobil", "Akomodasi"],
  },
  CN: {
    home: "首页",
    login: "登录",
    dash: "我的页面",
    badge: "印尼 AI 入境自动化系统",
    title: "AI 自动处理从入境到定居的全部流程",
    sub: "签证、海关、换汇、机场接送、租车、住宿、通知和记录保存都在一个平台完成。",
    start: "用护照开始",
    live: "实时 AI 处理状态",
    why: "为什么选择本平台",
    flow: "AI 工作流程",
    service: "综合服务",
    loginTitle: "会员登录",
    dashboardTitle: "AI 我的页面",
    dashboardSub: "所有申请、付款和进度确认都在会员页面执行。",
    email: "邮箱",
    password: "密码",
    enter: "进入",
    reasons: ["AI 文件分析", "实时追踪", "客户姓名隐藏", "链上记录", "自动删除", "多语言通知"],
    flowSteps: ["上传护照", "AI 分析", "文件分类", "付款", "分配负责人", "完成"],
    services: ["签证", "海关申报", "换汇", "机场接送", "车辆租赁", "住宿预约"],
  },
};

export default function App() {
  const [lang, setLang] = useState("KR");
  const [page, setPage] = useState("home");
  const [login, setLogin] = useState(false);
  const t = TEXT[lang];

  return (
    <div className="app">
      <style>{css}</style>
      <ParticleLayer />

      <header className="header">
        <button className="brand" onClick={() => setPage("home")}>
          <span className="logoOrb">S</span>
          <span>
            SMILE AI
            <small>GLOBAL ENTRY PLATFORM</small>
          </span>
        </button>

        <nav>
          <button onClick={() => setPage("home")}>{t.home}</button>
          {["KR", "EN", "ID", "CN"].map((x) => (
            <button key={x} className={lang === x ? "on" : ""} onClick={() => setLang(x)}>
              {x}
            </button>
          ))}
          <button className="mainNav" onClick={() => setPage(login ? "dash" : "login")}>
            {login ? t.dash : t.login}
          </button>
        </nav>
      </header>

      {page === "home" && <Home t={t} setPage={setPage} />}
      {page === "login" && <Login t={t} setLogin={setLogin} setPage={setPage} />}
      {page === "dash" && <Dashboard t={t} />}
    </div>
  );
}

function ParticleLayer() {
  return (
    <div className="particles">
      {Array.from({ length: 36 }).map((_, i) => (
        <span key={i} style={{ "--i": i }} />
      ))}
    </div>
  );
}

function Home({ t, setPage }) {
  return (
    <>
      <section className="hero">
        <div className="heroText">
          <div className="superBadge">{t.badge}</div>
          <h1>{t.title}</h1>
          <p>{t.sub}</p>

          <div className="heroBtns">
            <button className="primary" onClick={() => setPage("login")}>
              {t.start} →
            </button>
            <div className="secure">● AI ONLINE · SECURE · TRACKED</div>
          </div>
        </div>

        <AIWorld />
      </section>

      <Live t={t} />

      <section className="section">
        <h2>{t.why}</h2>
        <div className="cards">
          {t.reasons.map((x, i) => (
            <div className="card" key={x}>
              <span>0{i + 1}</span>
              <h3>{x}</h3>
              <p>Automated · Verified · Protected</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <h2>{t.flow}</h2>
        <div className="timeline">
          {t.flowSteps.map((x, i) => (
            <div className="step" key={x}>
              <b>{i + 1}</b>
              <p>{x}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section bottom">
        <h2>{t.service}</h2>
        <div className="serviceGrid">
          {t.services.map((x, i) => (
            <div className="service" key={x}>
              <div>{["🛂", "🧾", "💱", "🚘", "🚗", "🏨"][i]}</div>
              <h3>{x}</h3>
              <p>Available in member dashboard</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

function AIWorld() {
  return (
    <div className="worldStage">
      <div className="orbit orbit1" />
      <div className="orbit orbit2" />
      <div className="orbit orbit3" />

      <div className="earth">
        <div className="earthGlow" />
        <div className="earthGrid" />
        <div className="earthCore">AI</div>
      </div>

      <div className="scanLine" />

      <div className="tag tag1">
        <b>Visa</b>
        <span>Approved</span>
      </div>
      <div className="tag tag2">
        <b>Pickup</b>
        <span>Driver assigned</span>
      </div>
      <div className="tag tag3">
        <b>Exchange</b>
        <span>Ready</span>
      </div>
      <div className="tag tag4">
        <b>Records</b>
        <span>On-chain</span>
      </div>
    </div>
  );
}

function Live({ t }) {
  const [feed, setFeed] = useState([]);

  useEffect(() => {
    const names = ["KIM", "LEE", "PARK", "CHOI", "JUNG", "HAN"];
    const acts = ["Visa approved", "Customs completed", "Pickup assigned", "Vehicle reserved", "Exchange verified", "Room matched"];

    const timer = setInterval(() => {
      setFeed((p) =>
        [
          {
            name: names[Math.floor(Math.random() * names.length)],
            act: acts[Math.floor(Math.random() * acts.length)],
            time: new Date().toLocaleTimeString(),
          },
          ...p,
        ].slice(0, 6)
      );
    }, 1400);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="liveBox">
      <div>
        <h2>{t.live}</h2>
        <p>Customer names are masked automatically.</p>
      </div>

      <div className="feedList">
        {feed.map((f, i) => (
          <div className="feed" key={i}>
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

function Login({ t, setLogin, setPage }) {
  return (
    <main className="loginPage">
      <div className="loginCard">
        <div className="superBadge">SECURE ACCESS</div>
        <h1>{t.loginTitle}</h1>
        <input placeholder={t.email} />
        <input placeholder={t.password} type="password" />
        <button
          className="primary full"
          onClick={() => {
            setLogin(true);
            setPage("dash");
          }}
        >
          {t.enter} →
        </button>
      </div>
    </main>
  );
}

function Dashboard({ t }) {
  return (
    <main className="dashboard">
      <section className="dashTop">
        <div>
          <h1>{t.dashboardTitle}</h1>
          <p>{t.dashboardSub}</p>
        </div>
        <div className="online">AI ONLINE</div>
      </section>

      <div className="dashGrid">
        {t.services.map((x, i) => (
          <div className="dashCard" key={x}>
            <div>{["🛂", "🧾", "💱", "🚘", "🚗", "🏨"][i]}</div>
            <h3>{x}</h3>
            <p>Apply · Pay · Track · Complete</p>
            <button>Start</button>
          </div>
        ))}
      </div>
    </main>
  );
}

const css = `
*{box-sizing:border-box}
body{
  margin:0;
  background:#020617;
  color:white;
  font-family:Inter,Arial,sans-serif;
}
button,input{font-family:inherit}
.app{
  min-height:100vh;
  position:relative;
  overflow-x:hidden;
  background:
    radial-gradient(circle at 12% 20%,rgba(0,245,255,.24),transparent 28%),
    radial-gradient(circle at 85% 15%,rgba(139,92,246,.28),transparent 30%),
    radial-gradient(circle at 55% 90%,rgba(34,197,94,.14),transparent 34%),
    linear-gradient(180deg,#020617,#030712 48%,#000);
}
.app:before{
  content:"";
  position:fixed;
  inset:0;
  pointer-events:none;
  opacity:.11;
  background-image:
    linear-gradient(rgba(255,255,255,.055) 1px,transparent 1px),
    linear-gradient(90deg,rgba(255,255,255,.055) 1px,transparent 1px);
  background-size:64px 64px;
  mask-image:linear-gradient(to bottom,black,transparent 88%);
}
.particles{
  position:fixed;
  inset:0;
  overflow:hidden;
  pointer-events:none;
  z-index:0;
}
.particles span{
  position:absolute;
  width:4px;
  height:4px;
  border-radius:50%;
  background:#67e8f9;
  left:calc((var(--i) * 37px) % 100vw);
  top:calc((var(--i) * 83px) % 100vh);
  opacity:.35;
  box-shadow:0 0 18px #67e8f9;
  animation:particleMove calc(7s + (var(--i) * .2s)) linear infinite;
}
@keyframes particleMove{
  from{transform:translateY(100vh) translateX(0)}
  to{transform:translateY(-20vh) translateX(80px)}
}
.header{
  position:sticky;
  top:0;
  z-index:30;
  height:78px;
  display:flex;
  align-items:center;
  justify-content:space-between;
  padding:0 56px;
  background:rgba(2,6,23,.58);
  border-bottom:1px solid rgba(255,255,255,.12);
  backdrop-filter:blur(22px);
}
.brand{
  border:0;
  background:transparent;
  color:white;
  display:flex;
  align-items:center;
  gap:13px;
  cursor:pointer;
  font-weight:1000;
  letter-spacing:.7px;
}
.brand small{
  display:block;
  font-size:10px;
  color:#67e8f9;
  letter-spacing:1.8px;
  margin-top:3px;
}
.logoOrb{
  width:42px;
  height:42px;
  display:grid;
  place-items:center;
  border-radius:15px;
  background:linear-gradient(135deg,#00f5ff,#8b5cf6);
  box-shadow:0 0 36px rgba(0,245,255,.7);
}
nav{
  display:flex;
  align-items:center;
  gap:8px;
}
nav button{
  color:white;
  background:rgba(255,255,255,.06);
  border:1px solid rgba(255,255,255,.14);
  border-radius:14px;
  padding:10px 13px;
  cursor:pointer;
}
nav .on{
  color:#020617;
  background:#67e8f9;
  font-weight:900;
}
.mainNav{
  background:linear-gradient(90deg,#00f5ff,#a78bfa)!important;
  color:#020617!important;
  font-weight:1000;
}
.hero{
  position:relative;
  z-index:2;
  min-height:700px;
  display:grid;
  grid-template-columns:1.04fr .96fr;
  align-items:center;
  gap:20px;
  padding:86px 70px 30px;
}
.superBadge{
  display:inline-flex;
  padding:10px 15px;
  border-radius:999px;
  border:1px solid rgba(103,232,249,.38);
  background:rgba(0,245,255,.1);
  color:#a5f3fc;
  font-size:12px;
  font-weight:1000;
  letter-spacing:1.6px;
  box-shadow:0 0 28px rgba(0,245,255,.18);
}
.hero h1{
  margin:22px 0 18px;
  max-width:900px;
  font-size:66px;
  line-height:1.02;
  letter-spacing:-3.5px;
  text-shadow:0 0 40px rgba(103,232,249,.18);
}
.hero p{
  max-width:780px;
  color:rgba(255,255,255,.74);
  font-size:20px;
  line-height:1.7;
}
.heroBtns{
  margin-top:32px;
  display:flex;
  gap:18px;
  align-items:center;
  flex-wrap:wrap;
}
.primary{
  border:0;
  padding:17px 30px;
  border-radius:18px;
  background:linear-gradient(90deg,#00f5ff,#38bdf8,#8b5cf6);
  color:#020617;
  font-size:16px;
  font-weight:1000;
  cursor:pointer;
  box-shadow:0 0 42px rgba(0,245,255,.45),0 18px 60px rgba(0,0,0,.35);
}
.secure{
  color:#86efac;
  font-weight:900;
}
.worldStage{
  position:relative;
  height:590px;
  display:grid;
  place-items:center;
  perspective:1000px;
}
.earth{
  position:relative;
  width:370px;
  height:370px;
  border-radius:50%;
  transform-style:preserve-3d;
  background:
    radial-gradient(circle at 30% 25%,rgba(255,255,255,.55),transparent 9%),
    radial-gradient(circle at 38% 35%,rgba(103,232,249,.48),transparent 20%),
    radial-gradient(circle at 62% 68%,rgba(139,92,246,.4),transparent 26%),
    radial-gradient(circle,#082f49 0%,#020617 67%);
  box-shadow:
    inset -35px -35px 90px rgba(0,0,0,.75),
    inset 24px 18px 70px rgba(103,232,249,.22),
    0 0 90px rgba(0,245,255,.46),
    0 0 160px rgba(139,92,246,.22);
  animation:earthFloat 4s ease-in-out infinite, earthTilt 9s ease-in-out infinite;
}
.earthGlow{
  position:absolute;
  inset:-18px;
  border-radius:50%;
  background:radial-gradient(circle,rgba(0,245,255,.28),transparent 68%);
  filter:blur(12px);
}
.earthGrid{
  position:absolute;
  inset:28px;
  border-radius:50%;
  border:1px solid rgba(255,255,255,.22);
  box-shadow:
    0 0 0 42px rgba(255,255,255,.08),
    0 0 0 84px rgba(255,255,255,.05),
    0 0 0 126px rgba(255,255,255,.025);
  animation:spin 12s linear infinite;
}
.earthCore{
  position:absolute;
  inset:0;
  margin:auto;
  width:126px;
  height:126px;
  display:grid;
  place-items:center;
  border-radius:50%;
  background:rgba(2,6,23,.82);
  border:1px solid rgba(255,255,255,.22);
  font-size:40px;
  font-weight:1000;
  box-shadow:inset 0 0 30px rgba(0,245,255,.18),0 0 56px rgba(0,245,255,.55);
}
.orbit{
  position:absolute;
  border-radius:50%;
  border:1px solid rgba(103,232,249,.26);
  transform-style:preserve-3d;
}
.orbit1{width:520px;height:520px;animation:orbitA 14s linear infinite}
.orbit2{width:600px;height:290px;transform:rotateX(68deg) rotateZ(-18deg);animation:orbitB 10s linear infinite}
.orbit3{width:290px;height:600px;transform:rotateY(66deg) rotateZ(18deg);animation:orbitA 18s linear infinite reverse}
.scanLine{
  position:absolute;
  width:520px;
  height:2px;
  background:linear-gradient(90deg,transparent,#67e8f9,transparent);
  filter:drop-shadow(0 0 14px #67e8f9);
  animation:scan 3s ease-in-out infinite;
}
.tag{
  position:absolute;
  min-width:170px;
  padding:17px;
  border-radius:22px;
  background:rgba(2,6,23,.74);
  border:1px solid rgba(255,255,255,.22);
  backdrop-filter:blur(20px);
  box-shadow:0 24px 80px rgba(0,0,0,.45),0 0 28px rgba(0,245,255,.14);
  animation:tagFloat 4s ease-in-out infinite;
}
.tag b{display:block;font-size:18px}
.tag span{color:#67e8f9;font-size:13px;font-weight:900}
.tag1{top:70px;left:50px}
.tag2{right:20px;top:230px;animation-delay:.5s}
.tag3{left:115px;bottom:70px;animation-delay:.9s}
.tag4{right:100px;bottom:50px;animation-delay:1.2s}
.liveBox{
  position:relative;
  z-index:2;
  margin:20px 70px 0;
  padding:34px;
  border-radius:38px;
  display:grid;
  grid-template-columns:.72fr 1.28fr;
  gap:24px;
  background:linear-gradient(135deg,rgba(255,255,255,.09),rgba(255,255,255,.035));
  border:1px solid rgba(255,255,255,.15);
  box-shadow:0 30px 100px rgba(0,0,0,.3);
  backdrop-filter:blur(24px);
}
.liveBox h2,.section h2{
  margin:0 0 12px;
  font-size:36px;
  letter-spacing:-1.3px;
}
.liveBox p{color:rgba(255,255,255,.62)}
.feedList{display:grid;gap:10px}
.feed{
  display:grid;
  grid-template-columns:auto 110px 1fr auto;
  gap:12px;
  align-items:center;
  padding:14px 16px;
  border-radius:18px;
  border:1px solid rgba(255,255,255,.13);
  background:rgba(2,6,23,.62);
}
.feed i{
  width:10px;
  height:10px;
  border-radius:50%;
  background:#22c55e;
  box-shadow:0 0 20px #22c55e;
}
.feed small{color:rgba(255,255,255,.48)}
.section{
  position:relative;
  z-index:2;
  padding:82px 70px 0;
}
.cards{
  display:grid;
  grid-template-columns:repeat(3,1fr);
  gap:18px;
}
.card,.service,.dashCard,.loginCard{
  position:relative;
  overflow:hidden;
  background:linear-gradient(180deg,rgba(255,255,255,.09),rgba(255,255,255,.035));
  border:1px solid rgba(255,255,255,.14);
  border-radius:30px;
  backdrop-filter:blur(22px);
  box-shadow:0 28px 90px rgba(0,0,0,.3);
}
.card:before,.service:before,.dashCard:before{
  content:"";
  position:absolute;
  inset:-1px;
  background:linear-gradient(120deg,transparent,rgba(103,232,249,.18),transparent);
  transform:translateX(-120%);
  animation:shine 5s ease-in-out infinite;
}
.card{
  padding:28px;
  min-height:170px;
}
.card span{
  color:#67e8f9;
  font-weight:1000;
}
.card h3,.service h3,.dashCard h3{
  font-size:23px;
  margin:18px 0 10px;
}
.card p,.service p,.dashCard p{
  color:rgba(255,255,255,.6);
}
.timeline{
  display:grid;
  grid-template-columns:repeat(6,1fr);
  gap:12px;
}
.step{
  min-height:125px;
  border-radius:26px;
  padding:20px;
  background:linear-gradient(180deg,rgba(0,245,255,.14),rgba(255,255,255,.035));
  border:1px solid rgba(103,232,249,.23);
}
.step b{
  width:36px;
  height:36px;
  display:grid;
  place-items:center;
  border-radius:50%;
  background:#67e8f9;
  color:#020617;
}
.step p{font-weight:900}
.serviceGrid{
  display:grid;
  grid-template-columns:repeat(6,1fr);
  gap:16px;
}
.service{
  padding:25px;
  min-height:215px;
}
.service div,.dashCard div{
  font-size:36px;
}
.bottom{padding-bottom:80px}
.loginPage{
  position:relative;
  z-index:2;
  min-height:calc(100vh - 78px);
  display:grid;
  place-items:center;
  padding:40px;
}
.loginCard{
  width:min(500px,100%);
  padding:42px;
}
.loginCard h1{
  font-size:44px;
  margin:24px 0;
}
.loginCard input{
  width:100%;
  margin-bottom:14px;
  padding:17px;
  border-radius:17px;
  border:1px solid rgba(255,255,255,.15);
  background:rgba(2,6,23,.72);
  color:white;
  outline:0;
}
.full{width:100%;margin-top:8px}
.dashboard{
  position:relative;
  z-index:2;
  padding:70px;
}
.dashTop{
  display:flex;
  justify-content:space-between;
  align-items:center;
  gap:20px;
  padding:38px;
  border-radius:38px;
  background:linear-gradient(135deg,rgba(0,245,255,.15),rgba(124,58,237,.14));
  border:1px solid rgba(255,255,255,.15);
}
.dashTop h1{
  margin:0 0 12px;
  font-size:50px;
}
.dashTop p{color:rgba(255,255,255,.68)}
.online{
  padding:15px 20px;
  border-radius:999px;
  color:#020617;
  background:#22c55e;
  font-weight:1000;
  box-shadow:0 0 36px rgba(34,197,94,.5);
}
.dashGrid{
  margin-top:24px;
  display:grid;
  grid-template-columns:repeat(3,1fr);
  gap:18px;
}
.dashCard{padding:28px}
.dashCard button{
  margin-top:18px;
  width:100%;
  padding:14px;
  border:0;
  border-radius:16px;
  background:rgba(255,255,255,.12);
  color:white;
  cursor:pointer;
}
@keyframes spin{to{transform:rotate(360deg)}}
@keyframes earthFloat{50%{transform:translateY(-20px)}}
@keyframes earthTilt{
  0%,100%{rotate:0deg}
  50%{rotate:2deg}
}
@keyframes orbitA{to{transform:rotate(360deg)}}
@keyframes orbitB{to{transform:rotateX(68deg) rotateZ(342deg)}}
@keyframes scan{
  0%,100%{transform:translateY(-160px);opacity:.15}
  50%{transform:translateY(160px);opacity:.9}
}
@keyframes tagFloat{50%{transform:translateY(-12px)}}
@keyframes shine{
  0%,70%{transform:translateX(-120%)}
  100%{transform:translateX(120%)}
}
@media(max-width:1100px){
  .header{padding:0 20px}
  .hero{grid-template-columns:1fr;padding:54px 24px}
  .hero h1{font-size:42px}
  .liveBox{margin:20px 24px 0;grid-template-columns:1fr}
  .section,.dashboard{padding:50px 24px 0}
  .cards,.dashGrid{grid-template-columns:1fr 1fr}
  .timeline,.serviceGrid{grid-template-columns:1fr 1fr}
}
@media(max-width:700px){
  .header{height:auto;padding:14px;flex-direction:column}
  nav{flex-wrap:wrap;justify-content:center}
  .hero h1{font-size:34px;letter-spacing:-1.6px}
  .worldStage{height:420px}
  .earth{width:260px;height:260px}
  .orbit,.tag,.scanLine{display:none}
  .cards,.timeline,.serviceGrid,.dashGrid{grid-template-columns:1fr}
  .feed{grid-template-columns:auto 1fr}
  .feed small{display:none}
}
`;
