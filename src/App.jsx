import React, { useEffect, useState } from "react";
import "./App.css";

const LANGS = ["KR", "ID", "EN", "CN"];

const TEXT = {
  KR: {
    badge: "AI OPERATED PLATFORM",
    heroTitle: ["AI가 인도네시아", "입국부터 정착까지", "자동으로 처리합니다"],
    heroDesc: "여권 하나로 비자 · 세관 · 환전 · 픽업 · 차량 · 숙소까지 모든 절차가 자동 진행됩니다.",
    start: "여권으로 시작하기",
    signupLogin: "회원가입 / 로그인",
    signup: "회원가입",
    login: "로그인",
    dashboard: "회원 대시보드",
    passportUpload: "여권 업로드",
    live: "실시간 진행 상황",
    flow: "AI 자동 처리 흐름",
    services: "서비스 바로가기",
    why: "왜 이 플랫폼을 사용하는가",
    chain: "모든 기록은 위변조가 불가능한 방식으로 저장됩니다",
    cta: "지금 시작하면 모든 절차가 자동으로 진행됩니다",
    backHome: "홈으로 돌아가기",
    backDashboard: "대시보드로 돌아가기",
    name: "이름",
    email: "이메일",
    phone: "전화번호",
    password: "비밀번호",
    signupDone: "가입하고 시작하기",
    loginDone: "로그인하기",
    analyze: "AI 분석 시작하기",
  },
  ID: {
    badge: "PLATFORM DIJALANKAN AI",
    heroTitle: ["AI mengurus proses", "masuk hingga menetap", "di Indonesia"],
    heroDesc: "Dengan satu paspor, visa · bea cukai · penukaran uang · pickup · mobil · akomodasi berjalan otomatis.",
    start: "Mulai dengan Paspor",
    signupLogin: "Daftar / Masuk",
    signup: "Daftar",
    login: "Masuk",
    dashboard: "Dashboard Member",
    passportUpload: "Upload Paspor",
    live: "Status Real-time",
    flow: "Alur Otomatis AI",
    services: "Layanan Cepat",
    why: "Mengapa menggunakan platform ini",
    chain: "Semua catatan disimpan dengan cara yang sulit dimanipulasi",
    cta: "Mulai sekarang, semua proses berjalan otomatis",
    backHome: "Kembali ke Home",
    backDashboard: "Kembali ke Dashboard",
    name: "Nama",
    email: "Email",
    phone: "Nomor Telepon",
    password: "Kata Sandi",
    signupDone: "Daftar dan Mulai",
    loginDone: "Masuk",
    analyze: "Mulai Analisis AI",
  },
  EN: {
    badge: "AI OPERATED PLATFORM",
    heroTitle: ["AI handles your", "Indonesia entry and settlement", "automatically"],
    heroDesc: "With one passport, visa · customs · exchange · pickup · vehicle · accommodation are processed automatically.",
    start: "Start with Passport",
    signupLogin: "Sign up / Login",
    signup: "Sign Up",
    login: "Login",
    dashboard: "Member Dashboard",
    passportUpload: "Passport Upload",
    live: "Real-time Status",
    flow: "AI Automated Flow",
    services: "Quick Services",
    why: "Why use this platform",
    chain: "All records are stored in a tamper-resistant way",
    cta: "Start now and every procedure runs automatically",
    backHome: "Back to Home",
    backDashboard: "Back to Dashboard",
    name: "Name",
    email: "Email",
    phone: "Phone Number",
    password: "Password",
    signupDone: "Sign Up and Start",
    loginDone: "Login",
    analyze: "Start AI Analysis",
  },
  CN: {
    badge: "AI 自动平台",
    heroTitle: ["AI 自动处理", "印尼入境到定居", "全部流程"],
    heroDesc: "只需护照，签证 · 海关 · 换汇 · 接机 · 车辆 · 住宿全部自动进行。",
    start: "用护照开始",
    signupLogin: "注册 / 登录",
    signup: "注册",
    login: "登录",
    dashboard: "会员仪表板",
    passportUpload: "护照上传",
    live: "实时进度",
    flow: "AI 自动流程",
    services: "服务入口",
    why: "为什么使用此平台",
    chain: "所有记录以不可篡改方式保存",
    cta: "现在开始，所有流程将自动进行",
    backHome: "返回首页",
    backDashboard: "返回仪表板",
    name: "姓名",
    email: "邮箱",
    phone: "电话号码",
    password: "密码",
    signupDone: "注册并开始",
    loginDone: "登录",
    analyze: "开始 AI 分析",
  },
};

const liveList = [
  ["KIM M***", "비자 승인 완료", "green"],
  ["LEE J***", "차량 배정 완료", "blue"],
  ["PARK S***", "환전 수령 준비 완료", "purple"],
  ["CHEN L***", "숙소 예약 완료", "orange"],
  ["AHMAD R***", "공항 픽업 기사 배정", "blue"],
];

const services = [
  ["🛂", "비자 / 입국 준비", "Visa & Entry"],
  ["📄", "세관 신고", "e-Customs"],
  ["💱", "화폐 교환", "Currency Exchange"],
  ["✈️", "공항 픽업", "Airport Pickup"],
  ["🚘", "차량 렌탈", "Car Rental"],
  ["🏨", "숙소 신청", "Accommodation"],
  ["📦", "장기체류 패키지", "Long Stay Package"],
  ["📊", "진행상황 조회", "Check Status"],
];

export default function App() {
  const [lang, setLang] = useState("KR");
  const [page, setPage] = useState("home");
  const [live, setLive] = useState(liveList.slice(0, 4));
  const [step, setStep] = useState(0);
  const t = TEXT[lang];

  useEffect(() => {
    const liveTimer = setInterval(() => {
      const next = liveList[Math.floor(Math.random() * liveList.length)];
      setLive((prev) => [next, ...prev].slice(0, 4));
    }, 1600);

    const stepTimer = setInterval(() => {
      setStep((prev) => (prev + 1) % 5);
    }, 1000);

    return () => {
      clearInterval(liveTimer);
      clearInterval(stepTimer);
    };
  }, []);

  if (page === "signup") return <AuthPage type="signup" t={t} lang={lang} setLang={setLang} setPage={setPage} />;
  if (page === "login") return <AuthPage type="login" t={t} lang={lang} setLang={setLang} setPage={setPage} />;
  if (page === "dashboard") return <Dashboard t={t} lang={lang} setLang={setLang} setPage={setPage} />;
  if (page === "passport") return <PassportUpload t={t} lang={lang} setLang={setLang} setPage={setPage} />;

  return (
    <div className="app">
      <div className="bgGlow" />
      <Header lang={lang} setLang={setLang} setPage={setPage} />

      <section className="hero">
        <div className="heroText">
          <div className="badge">⚙ {t.badge}</div>

          <h2>
            {t.heroTitle[0]} <br />
            {t.heroTitle[1]} <br />
            <span>{t.heroTitle[2]}</span>
          </h2>

          <p className="heroDesc">{t.heroDesc}</p>

          <div className="heroButtons">
            <button className="primary" onClick={() => setPage("signup")}>
              🛂 {t.start} →
            </button>
            <button className="secondary" onClick={() => setPage("signup")}>
              👤 {t.signupLogin} →
            </button>
          </div>

          <div className="features">
            <span>🤖 AI 자동 처리</span>
            <span>🛡 안전한 결제</span>
            <span>🔔 실시간 알림</span>
            <span>🎧 전문 지원</span>
          </div>
        </div>

        <div className="heroVisual">
          <div className="orbit">
            <div className="earth">🌐</div>
            {["✈️", "🛂", "💱", "🚘", "🏨"].map((icon, i) => (
              <div key={i} className={`orbitIcon icon${i} ${step === i ? "on" : ""}`}>
                {icon}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="liveSection">
        <div className="liveBox">
          <div className="sectionHead">
            <h3>{t.live}</h3>
            <span>● LIVE OPERATING</span>
          </div>

          {live.map(([name, status, color], i) => (
            <div className="liveItem" key={name + status + i}>
              <strong>{name}</strong>
              <em className={color}>{status}</em>
              <small>{i === 0 ? "방금 전" : `${i * 3}초 전`}</small>
            </div>
          ))}
        </div>

        <div className="trustMini">
          <h3>지금도 시스템이 처리 중입니다</h3>
          <p>신청, 결제, 승인, 배정 기록은 마이페이지에서 실시간으로 확인됩니다.</p>
        </div>
      </section>

      <section className="flow">
        <h3>{t.flow}</h3>
        <p>여권 정보만 입력하면 AI가 필요한 절차를 자동으로 연결합니다.</p>

        <div className="flowGrid">
          {["여권 입력", "AI 분석", "자동 신청", "실시간 처리", "완료"].map((v, i) => (
            <div className={`flowCard ${step >= i ? "active" : ""}`} key={v}>
              <div>{["🛂", "🤖", "📨", "📊", "✅"][i]}</div>
              <strong>{v}</strong>
            </div>
          ))}
        </div>
      </section>

      <section className="services">
        <h3>{t.services}</h3>
        <div className="serviceGrid">
          {services.map(([icon, title, en]) => (
            <div className="serviceCard" key={title} onClick={() => setPage("signup")}>
              <div className="serviceIcon">{icon}</div>
              <strong>{title}</strong>
              <p>{en}</p>
              <span>→</span>
            </div>
          ))}
        </div>
      </section>

      <section className="why">
        <h3>{t.why}</h3>
        <div className="whyGrid">
          {[
            ["AI 자동 처리", "여권 정보만 입력하면 모든 절차를 자동으로 연결합니다"],
            ["실시간 진행 확인", "모든 진행상황은 마이페이지에서 실시간 확인 가능합니다"],
            ["온체인 기록 저장", "모든 신청, 결제, 승인 기록은 위변조 불가능한 방식으로 저장됩니다"],
            ["자동 알림 시스템", "비자 만료, 승인 완료, 수령 안내를 자동으로 제공합니다"],
            ["개인정보 보호", "모든 데이터는 1년 후 자동 삭제됩니다"],
          ].map(([title, text], i) => (
            <div className="whyCard" key={title}>
              <b>{i + 1}. {title}</b>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="chain">
        <div>
          <h3>{t.chain}</h3>
          <p>신청 기록 · 결제 기록 · 비자 승인 기록은 신뢰 가능한 방식으로 보관되며 사용자 요청 또는 1년 경과 시 자동 삭제됩니다.</p>
        </div>

        <div className="chainCards">
          <div>🔐<br />신청 기록</div>
          <div>💳<br />결제 기록</div>
          <div>✅<br />승인 기록</div>
        </div>
      </section>

      <section className="cta">
        <h3>{t.cta}</h3>
        <button onClick={() => setPage("signup")}>🛂 {t.start} →</button>
      </section>

      <footer>© 2025 SMILE AI Indonesia Platform. All rights reserved.</footer>
    </div>
  );
}

function Header({ lang, setLang, setPage }) {
  return (
    <header className="header">
      <div className="brand" onClick={() => setPage("home")}>
        <div className="logo">AI</div>
        <div>
          <h1>SMILE AI</h1>
          <p>INDONESIA PLATFORM</p>
        </div>
      </div>

      <div className="langs">
        {LANGS.map((l) => (
          <button key={l} className={lang === l ? "active" : ""} onClick={() => setLang(l)}>
            {l}
          </button>
        ))}
      </div>
    </header>
  );
}

function AuthPage({ type, t, lang, setLang, setPage }) {
  const isLogin = type === "login";

  return (
    <div className="app authApp">
      <div className="bgGlow" />
      <Header lang={lang} setLang={setLang} setPage={setPage} />

      <section className="authBox">
        <button className="backBtn" onClick={() => setPage("home")}>← {t.backHome}</button>
        <div className="authIcon">{isLogin ? "🔐" : "👤"}</div>
        <h2>{isLogin ? t.login : t.signup}</h2>
        <p>SMILE AI Indonesia Platform</p>

        {!isLogin && <input placeholder={t.name} />}
        <input placeholder={t.email} />
        {!isLogin && <input placeholder={t.phone} />}
        <input placeholder={t.password} type="password" />

        <button className="authMain" onClick={() => setPage("dashboard")}>
          {isLogin ? t.loginDone : t.signupDone}
        </button>

        <div className="authSwitch">
          {isLogin ? (
            <span onClick={() => setPage("signup")}>계정이 없으신가요? 회원가입</span>
          ) : (
            <span onClick={() => setPage("login")}>이미 계정이 있으신가요? 로그인</span>
          )}
        </div>
      </section>
    </div>
  );
}

function Dashboard({ t, lang, setLang, setPage }) {
  return (
    <div className="app authApp">
      <div className="bgGlow" />
      <Header lang={lang} setLang={setLang} setPage={setPage} />

      <section className="dashboard">
        <h2>{t.dashboard}</h2>
        <p>회원가입 후 모든 신청, 결제, 진행상황 확인이 이곳에서 실행됩니다.</p>

        <button className="primary wide" onClick={() => setPage("passport")}>
          🛂 {t.start} →
        </button>

        <div className="dashboardGrid">
          <div>🛂<strong>비자 신청</strong><span>여권 업로드 필요</span></div>
          <div>📄<strong>세관 신고</strong><span>대기 중</span></div>
          <div>💱<strong>환전 신청</strong><span>가능</span></div>
          <div>🚘<strong>차량 렌탈</strong><span>가능</span></div>
          <div>🏨<strong>숙소 신청</strong><span>가능</span></div>
          <div>📊<strong>진행상황</strong><span>실시간 확인</span></div>
        </div>

        <button className="secondary wide" onClick={() => setPage("home")}>
          {t.backHome}
        </button>
      </section>
    </div>
  );
}

function PassportUpload({ t, lang, setLang, setPage }) {
  const [fileName, setFileName] = useState("");

  return (
    <div className="app authApp">
      <div className="bgGlow" />
      <Header lang={lang} setLang={setLang} setPage={setPage} />

      <section className="authBox passportBox">
        <button className="backBtn" onClick={() => setPage("dashboard")}>← {t.backDashboard}</button>
        <div className="authIcon">🛂</div>
        <h2>{t.passportUpload}</h2>
        <p>여권 사진을 업로드하면 AI가 정보를 분석하고 필요한 절차를 자동으로 연결합니다.</p>

        <label className="uploadBox">
          <input
            type="file"
            accept="image/*,.pdf"
            onChange={(e) => setFileName(e.target.files?.[0]?.name || "")}
          />
          <strong>{fileName || "여권 파일 업로드"}</strong>
          <span>이미지 또는 PDF 가능</span>
        </label>

        <button className="authMain" onClick={() => alert("AI 분석 기능 연결 준비")}>
          {t.analyze}
        </button>
      </section>
    </div>
  );
}
