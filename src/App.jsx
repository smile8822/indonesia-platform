import React, { useEffect, useState } from "react";
import "./App.css";

const LANGS = ["KR", "ID", "EN", "CN"];

const TEXT = {
  KR: {
    badge: "AI 자동 처리 플랫폼",
    hero1: "AI가 인도네시아",
    hero2: "입국부터 정착까지",
    hero3: "자동으로 처리합니다",
    desc: "여권 하나로 비자 · 세관 · 환전 · 픽업 · 차량 · 숙소까지 모든 절차가 자동 진행됩니다.",
    start: "여권으로 시작하기",
    join: "회원가입 / 로그인",
    live: "실시간 진행 상황",
    operating: "실시간 처리 중",
    processingTitle: "지금도 시스템이 처리 중입니다",
    processingDesc: "신청, 결제, 승인, 배정 기록은 마이페이지에서 실시간으로 확인됩니다.",
    flow: "AI 자동 처리 흐름",
    flowDesc: "여권 정보만 입력하면 AI가 필요한 절차를 자동으로 연결합니다.",
    services: "서비스 바로가기",
    why: "왜 이 플랫폼을 사용하는가",
    chain: "모든 기록은 위변조가 불가능한 방식으로 저장됩니다",
    chainDesc: "신청 기록 · 결제 기록 · 비자 승인 기록은 신뢰 가능한 방식으로 보관되며 사용자 요청 또는 1년 경과 시 자동 삭제됩니다.",
    cta: "지금 시작하면 모든 절차가 자동으로 진행됩니다",
    kakao: "KakaoTalk 상담",
    whatsapp: "WhatsApp 상담",
    footer: "© 2025 SMILE AI Indonesia Platform. All rights reserved.",
    signup: "회원가입",
    login: "로그인",
    dashboard: "회원 대시보드",
    passport: "여권 업로드",
    backHome: "홈으로 돌아가기",
    backDashboard: "대시보드로 돌아가기",
    name: "이름",
    email: "이메일",
    phone: "전화번호",
    password: "비밀번호",
    signupBtn: "가입하고 시작하기",
    loginBtn: "로그인하기",
    uploadDesc: "여권 사진을 업로드하면 AI가 정보를 분석하고 필요한 절차를 자동으로 연결합니다.",
    uploadFile: "여권 파일 업로드",
    fileType: "이미지 또는 PDF 가능",
    analyze: "AI 분석 시작하기",
  },
  ID: {
    badge: "Platform Diproses AI",
    hero1: "AI mengurus",
    hero2: "masuk hingga menetap",
    hero3: "di Indonesia",
    desc: "Dengan satu paspor, visa · bea cukai · penukaran uang · pickup · mobil · akomodasi berjalan otomatis.",
    start: "Mulai dengan Paspor",
    join: "Daftar / Masuk",
    live: "Status Real-time",
    operating: "Sedang Diproses",
    processingTitle: "Sistem sedang memproses",
    processingDesc: "Pengajuan, pembayaran, persetujuan, dan penugasan dapat dicek real-time di halaman saya.",
    flow: "Alur Otomatis AI",
    flowDesc: "Masukkan data paspor, AI akan menghubungkan semua proses yang dibutuhkan.",
    services: "Layanan Cepat",
    why: "Mengapa menggunakan platform ini",
    chain: "Semua catatan disimpan dengan cara yang sulit dimanipulasi",
    chainDesc: "Catatan pengajuan, pembayaran, dan persetujuan visa disimpan secara tepercaya dan dihapus otomatis setelah permintaan pengguna atau 1 tahun.",
    cta: "Mulai sekarang, semua proses berjalan otomatis",
    kakao: "Konsultasi KakaoTalk",
    whatsapp: "Konsultasi WhatsApp",
    footer: "© 2025 SMILE AI Indonesia Platform. Semua hak dilindungi.",
    signup: "Daftar",
    login: "Masuk",
    dashboard: "Dashboard Member",
    passport: "Upload Paspor",
    backHome: "Kembali ke Home",
    backDashboard: "Kembali ke Dashboard",
    name: "Nama",
    email: "Email",
    phone: "Nomor Telepon",
    password: "Kata Sandi",
    signupBtn: "Daftar dan Mulai",
    loginBtn: "Masuk",
    uploadDesc: "Upload paspor, lalu AI menganalisis data dan menghubungkan proses yang dibutuhkan.",
    uploadFile: "Upload File Paspor",
    fileType: "Gambar atau PDF",
    analyze: "Mulai Analisis AI",
  },
  EN: {
    badge: "AI Operated Platform",
    hero1: "AI handles your",
    hero2: "Indonesia entry",
    hero3: "and settlement",
    desc: "With one passport, visa · customs · exchange · pickup · vehicle · accommodation are processed automatically.",
    start: "Start with Passport",
    join: "Sign up / Login",
    live: "Real-time Status",
    operating: "Live Operating",
    processingTitle: "The system is processing now",
    processingDesc: "Applications, payments, approvals, and assignments are checked in real time from My Page.",
    flow: "AI Automated Flow",
    flowDesc: "Enter passport information and AI connects all required procedures automatically.",
    services: "Quick Services",
    why: "Why use this platform",
    chain: "All records are stored in a tamper-resistant way",
    chainDesc: "Application, payment, and visa approval records are stored reliably and deleted upon request or after one year.",
    cta: "Start now and every procedure runs automatically",
    kakao: "KakaoTalk Support",
    whatsapp: "WhatsApp Support",
    footer: "© 2025 SMILE AI Indonesia Platform. All rights reserved.",
    signup: "Sign Up",
    login: "Login",
    dashboard: "Member Dashboard",
    passport: "Passport Upload",
    backHome: "Back to Home",
    backDashboard: "Back to Dashboard",
    name: "Name",
    email: "Email",
    phone: "Phone Number",
    password: "Password",
    signupBtn: "Sign Up and Start",
    loginBtn: "Login",
    uploadDesc: "Upload your passport and AI will analyze it and connect the required process.",
    uploadFile: "Upload Passport File",
    fileType: "Image or PDF",
    analyze: "Start AI Analysis",
  },
  CN: {
    badge: "AI 自动处理平台",
    hero1: "AI 自动处理",
    hero2: "印尼入境到定居",
    hero3: "全部流程",
    desc: "只需护照，签证 · 海关 · 换汇 · 接机 · 车辆 · 住宿全部自动进行。",
    start: "用护照开始",
    join: "注册 / 登录",
    live: "实时进度",
    operating: "实时处理中",
    processingTitle: "系统正在处理中",
    processingDesc: "申请、付款、批准、分配记录可在我的页面实时确认。",
    flow: "AI 自动流程",
    flowDesc: "输入护照信息后，AI 自动连接所需流程。",
    services: "服务入口",
    why: "为什么使用此平台",
    chain: "所有记录以不可篡改方式保存",
    chainDesc: "申请记录、付款记录、签证批准记录将以可信方式保存，并在用户请求或一年后自动删除。",
    cta: "现在开始，所有流程将自动进行",
    kakao: "KakaoTalk 咨询",
    whatsapp: "WhatsApp 咨询",
    footer: "© 2025 SMILE AI Indonesia Platform. All rights reserved.",
    signup: "注册",
    login: "登录",
    dashboard: "会员仪表板",
    passport: "护照上传",
    backHome: "返回首页",
    backDashboard: "返回仪表板",
    name: "姓名",
    email: "邮箱",
    phone: "电话号码",
    password: "密码",
    signupBtn: "注册并开始",
    loginBtn: "登录",
    uploadDesc: "上传护照后，AI 将分析信息并自动连接所需流程。",
    uploadFile: "上传护照文件",
    fileType: "图片或 PDF",
    analyze: "开始 AI 分析",
  },
};

const SERVICES = {
  KR: [
    ["visa", "비자 / 입국 준비", "Visa & Entry"],
    ["customs", "세관 신고", "e-Customs"],
    ["exchange", "화폐 교환", "Currency Exchange"],
    ["pickup", "공항 픽업", "Airport Pickup"],
    ["car", "차량 렌탈", "Car Rental"],
    ["hotel", "숙소 신청", "Accommodation"],
    ["package", "장기체류 패키지", "Long Stay Package"],
    ["status", "진행상황 조회", "Check Status"],
  ],
  ID: [
    ["visa", "Visa / Masuk", "Visa & Entry"],
    ["customs", "Bea Cukai", "e-Customs"],
    ["exchange", "Penukaran Uang", "Currency Exchange"],
    ["pickup", "Pickup Bandara", "Airport Pickup"],
    ["car", "Rental Mobil", "Car Rental"],
    ["hotel", "Akomodasi", "Accommodation"],
    ["package", "Paket Tinggal Lama", "Long Stay Package"],
    ["status", "Cek Status", "Check Status"],
  ],
  EN: [
    ["visa", "Visa / Entry", "Visa & Entry"],
    ["customs", "Customs Declaration", "e-Customs"],
    ["exchange", "Currency Exchange", "Currency Exchange"],
    ["pickup", "Airport Pickup", "Airport Pickup"],
    ["car", "Car Rental", "Car Rental"],
    ["hotel", "Accommodation", "Accommodation"],
    ["package", "Long Stay Package", "Long Stay Package"],
    ["status", "Check Status", "Check Status"],
  ],
  CN: [
    ["visa", "签证 / 入境", "Visa & Entry"],
    ["customs", "海关申报", "e-Customs"],
    ["exchange", "货币兑换", "Currency Exchange"],
    ["pickup", "机场接送", "Airport Pickup"],
    ["car", "车辆租赁", "Car Rental"],
    ["hotel", "住宿申请", "Accommodation"],
    ["package", "长期居留套餐", "Long Stay Package"],
    ["status", "进度查询", "Check Status"],
  ],
};

const WHY = {
  KR: [
    ["AI 자동 처리", "여권 정보만 입력하면 모든 절차를 자동으로 연결합니다"],
    ["실시간 진행 확인", "모든 진행상황은 마이페이지에서 실시간 확인 가능합니다"],
    ["온체인 기록 저장", "모든 신청, 결제, 승인 기록은 위변조 불가능한 방식으로 저장됩니다"],
    ["자동 알림 시스템", "비자 만료, 승인 완료, 수령 안내를 자동으로 제공합니다"],
    ["개인정보 보호", "모든 데이터는 1년 후 자동 삭제됩니다"],
  ],
  ID: [
    ["Proses Otomatis AI", "Cukup masukkan data paspor, semua proses akan terhubung otomatis"],
    ["Cek Real-time", "Semua status dapat dicek real-time di halaman saya"],
    ["Catatan On-chain", "Pengajuan, pembayaran, dan persetujuan disimpan dengan cara yang sulit dimanipulasi"],
    ["Notifikasi Otomatis", "Masa berlaku visa, persetujuan, dan pengambilan akan diberitahukan otomatis"],
    ["Perlindungan Data", "Semua data akan dihapus otomatis setelah 1 tahun"],
  ],
  EN: [
    ["AI Automation", "Enter passport information and every procedure is connected automatically"],
    ["Real-time Tracking", "All progress can be checked from My Page in real time"],
    ["On-chain Records", "Applications, payments, and approvals are stored in a tamper-resistant way"],
    ["Automatic Alerts", "Visa expiry, approval, and pickup notices are provided automatically"],
    ["Privacy Protection", "All data is automatically deleted after one year"],
  ],
  CN: [
    ["AI 自动处理", "输入护照信息后，所有流程自动连接"],
    ["实时进度确认", "所有进度可在我的页面实时确认"],
    ["链上记录保存", "申请、付款、批准记录以不可篡改方式保存"],
    ["自动通知系统", "签证到期、批准完成、领取通知将自动提供"],
    ["个人信息保护", "所有数据将在一年后自动删除"],
  ],
};

const FLOW = {
  KR: ["여권 입력", "AI 분석", "자동 신청", "실시간 처리", "완료"],
  ID: ["Input Paspor", "Analisis AI", "Pengajuan Otomatis", "Proses Real-time", "Selesai"],
  EN: ["Passport Input", "AI Analysis", "Auto Application", "Real-time Process", "Done"],
  CN: ["护照输入", "AI 分析", "自动申请", "实时处理", "完成"],
};

const LIVE = {
  KR: [
    ["KIM M***", "비자 승인 완료"],
    ["LEE J***", "차량 배정 완료"],
    ["PARK S***", "환전 수령 준비 완료"],
    ["CHEN L***", "숙소 예약 완료"],
  ],
  ID: [
    ["KIM M***", "Visa disetujui"],
    ["LEE J***", "Mobil telah ditugaskan"],
    ["PARK S***", "Penukaran siap diambil"],
    ["CHEN L***", "Akomodasi dipesan"],
  ],
  EN: [
    ["KIM M***", "Visa approved"],
    ["LEE J***", "Vehicle assigned"],
    ["PARK S***", "Exchange ready"],
    ["CHEN L***", "Accommodation booked"],
  ],
  CN: [
    ["KIM M***", "签证已批准"],
    ["LEE J***", "车辆已分配"],
    ["PARK S***", "换汇准备完成"],
    ["CHEN L***", "住宿已预订"],
  ],
};

function Icon({ type }) {
  const icons = {
    visa: "M12 2v20M5 5h14v14H5z",
    customs: "M6 3h9l5 5v13H6z M15 3v6h6",
    exchange: "M7 7h11M7 7l3-3M7 7l3 3M17 17H6m11 0l-3-3m3 3l-3 3",
    pickup: "M3 16l18-9-8 18-2-8z",
    car: "M5 14l2-5h10l2 5M6 14h12v5H6zM8 19v2M16 19v2",
    hotel: "M4 20V8h7v12M11 12h9v8M7 11h1M7 15h1M15 15h1",
    package: "M4 7l8-4 8 4v10l-8 4-8-4zM4 7l8 4 8-4M12 11v10",
    status: "M4 19V9M10 19V5M16 19v-8M22 19H2",
    ai: "M12 2v4M12 18v4M4 12H2M22 12h-2M6 6l-2-2M18 18l2 2M18 6l2-2M6 18l-2 2M8 8h8v8H8z",
    lock: "M6 10h12v10H6zM8 10V7a4 4 0 018 0v3",
    bell: "M18 8a6 6 0 00-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9M10 21h4",
    headset: "M4 13a8 8 0 0116 0v5h-4v-6h4M4 18h4v-6H4z",
  };

  return (
    <svg className="svgIcon" viewBox="0 0 24 24" fill="none">
      <path d={icons[type]} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function App() {
  const [lang, setLang] = useState("KR");
  const [page, setPage] = useState("home");
  const [step, setStep] = useState(0);
  const [live, setLive] = useState(LIVE.KR);

  const t = TEXT[lang];

  useEffect(() => {
    setLive(LIVE[lang]);
  }, [lang]);

  useEffect(() => {
    const timer = setInterval(() => {
      setStep((v) => (v + 1) % 5);
      setLive((prev) => [prev[Math.floor(Math.random() * prev.length)], ...prev].slice(0, 4));
    }, 1500);
    return () => clearInterval(timer);
  }, []);

  if (page === "signup") return <Auth type="signup" t={t} lang={lang} setLang={setLang} setPage={setPage} />;
  if (page === "login") return <Auth type="login" t={t} lang={lang} setLang={setLang} setPage={setPage} />;
  if (page === "dashboard") return <Dashboard t={t} lang={lang} setLang={setLang} setPage={setPage} />;
  if (page === "passport") return <Passport t={t} lang={lang} setLang={setLang} setPage={setPage} />;

  return (
    <div className="app">
      <div className="bgGlow" />
      <Header lang={lang} setLang={setLang} setPage={setPage} />

      <section className="hero">
        <div className="heroText">
          <div className="badge">{t.badge}</div>
          <h2>
            {t.hero1}<br />
            {t.hero2}<br />
            <span>{t.hero3}</span>
          </h2>
          <p className="heroDesc">{t.desc}</p>

          <div className="heroButtons">
            <button className="primary" onClick={() => setPage("signup")}>{t.start} →</button>
            <button className="secondary" onClick={() => setPage("signup")}>{t.join} →</button>
          </div>

          <div className="features">
            <span><Icon type="ai" /> AI</span>
            <span><Icon type="lock" /> Secure</span>
            <span><Icon type="bell" /> Alert</span>
            <span><Icon type="headset" /> Support</span>
          </div>
        </div>

        <div className="aiVisual">
          <div className="core">AI</div>
          {SERVICES.KR.slice(0, 6).map(([type], i) => (
            <div key={type} className={`node node${i} ${step === i % 5 ? "active" : ""}`}>
              <Icon type={type} />
            </div>
          ))}
          <div className="scanLine" />
        </div>
      </section>

      <section className="liveSection">
        <div className="liveBox">
          <div className="sectionHead">
            <h3>{t.live}</h3>
            <span>● {t.operating}</span>
          </div>
          {live.map(([name, status], i) => (
            <div className="liveItem" key={name + status + i}>
              <strong>{name}</strong>
              <em>{status}</em>
              <small>{i === 0 ? "now" : `${i * 3}s`}</small>
            </div>
          ))}
        </div>

        <div className="trustMini">
          <h3>{t.processingTitle}</h3>
          <p>{t.processingDesc}</p>
          <button className="whatsapp" onClick={() => window.open("https://wa.me/821027378821")}>{t.whatsapp}</button>
          <button className="kakao" onClick={() => window.open("https://pf.kakao.com")}>{t.kakao}</button>
        </div>
      </section>

      <section className="flow">
        <h3>{t.flow}</h3>
        <p>{t.flowDesc}</p>
        <div className="flowGrid">
          {FLOW[lang].map((v, i) => (
            <div className={`flowCard ${step >= i ? "active" : ""}`} key={v}>
              <Icon type={["visa", "ai", "customs", "status", "lock"][i]} />
              <strong>{v}</strong>
            </div>
          ))}
        </div>
      </section>

      <section className="services">
        <h3>{t.services}</h3>
        <div className="serviceGrid">
          {SERVICES[lang].map(([type, title, en]) => (
            <div className="serviceCard" key={title} onClick={() => setPage("signup")}>
              <Icon type={type} />
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
          {WHY[lang].map(([title, text], i) => (
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
          <p>{t.chainDesc}</p>
        </div>
        <div className="chainCards">
          <div><Icon type="customs" /> Record</div>
          <div><Icon type="exchange" /> Payment</div>
          <div><Icon type="lock" /> Approval</div>
        </div>
      </section>

      <section className="cta">
        <h3>{t.cta}</h3>
        <button onClick={() => setPage("signup")}>{t.start} →</button>
      </section>

      <footer>{t.footer}</footer>
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
          <button key={l} className={lang === l ? "active" : ""} onClick={() => setLang(l)}>{l}</button>
        ))}
      </div>
    </header>
  );
}

function Auth({ type, t, lang, setLang, setPage }) {
  const login = type === "login";
  return (
    <div className="app">
      <Header lang={lang} setLang={setLang} setPage={setPage} />
      <section className="authBox">
        <button className="backBtn" onClick={() => setPage("home")}>← {t.backHome}</button>
        <div className="authIcon"><Icon type={login ? "lock" : "visa"} /></div>
        <h2>{login ? t.login : t.signup}</h2>
        {!login && <input placeholder={t.name} />}
        <input placeholder={t.email} />
        {!login && <input placeholder={t.phone} />}
        <input placeholder={t.password} type="password" />
        <button className="authMain" onClick={() => setPage("dashboard")}>{login ? t.loginBtn : t.signupBtn}</button>
      </section>
    </div>
  );
}

function Dashboard({ t, lang, setLang, setPage }) {
  return (
    <div className="app">
      <Header lang={lang} setLang={setLang} setPage={setPage} />
      <section className="dashboard">
        <h2>{t.dashboard}</h2>
        <button className="primary wide" onClick={() => setPage("passport")}>{t.start} →</button>
        <div className="serviceGrid">
          {SERVICES[lang].map(([type, title]) => (
            <div className="serviceCard" key={title}>
              <Icon type={type} />
              <strong>{title}</strong>
              <p>{type === "visa" ? t.passport : t.operating}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

function Passport({ t, lang, setLang, setPage }) {
  const [file, setFile] = useState("");
  return (
    <div className="app">
      <Header lang={lang} setLang={setLang} setPage={setPage} />
      <section className="authBox">
        <button className="backBtn" onClick={() => setPage("dashboard")}>← {t.backDashboard}</button>
        <div className="authIcon"><Icon type="visa" /></div>
        <h2>{t.passport}</h2>
        <p>{t.uploadDesc}</p>
        <label className="uploadBox">
          <input type="file" accept="image/*,.pdf" onChange={(e) => setFile(e.target.files?.[0]?.name || "")} />
          <strong>{file || t.uploadFile}</strong>
          <span>{t.fileType}</span>
        </label>
        <button className="authMain">{t.analyze}</button>
      </section>
    </div>
  );
}
