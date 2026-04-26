import React, { useEffect, useMemo, useState } from "react";
import "./App.css";

const LANGS = ["KR", "ID", "EN", "CN"];

const COPY = {
  KR: {
    navStart: "시작하기",
    navLogin: "로그인",
    heroLine1: "여권 하나만 올리세요.",
    heroLine2: "AI가 입국부터 정착까지",
    heroLine3: "전부 처리합니다.",
    heroDesc:
      "비자 · 세관신고 · 환전 · 공항픽업 · 차량 · 숙소 · 장기체류까지 신청부터 진행확인까지 자동으로 연결됩니다.",
    start: "여권으로 시작하기",
    join: "회원가입",
    login: "로그인",
    whatsapp: "WhatsApp 상담",
    kakao: "KakaoTalk 상담",
    liveTitle: "AI 자동 처리 현황",
    liveSub: "사용자는 확인만 하면 됩니다",
    today: "오늘 자동 처리",
    active: "현재 진행중",
    automation: "자동 연결률",
    avg: "평균 처리 시간",
    flowTitle: "AI가 자동으로 연결하는 전체 흐름",
    flowDesc: "여권 업로드 후 AI가 필요한 절차를 판단하고 순서대로 실행합니다.",
    services: "자동 처리 서비스",
    why: "왜 이 플랫폼을 사용하는가",
    trust: "기록은 남고, 조작은 불가능하게",
    trustDesc:
      "신청 기록 · 결제 기록 · 승인 기록은 신뢰 가능한 방식으로 보관되며 사용자 요청 또는 1년 경과 시 자동 삭제됩니다.",
    cta: "당신은 아무것도 할 필요 없습니다.",
    ctaDesc: "여권만 업로드하면 AI가 필요한 절차를 자동으로 시작합니다.",
    signupTitle: "회원가입",
    loginTitle: "로그인",
    name: "이름",
    email: "이메일",
    phone: "전화번호",
    password: "비밀번호",
    signupButton: "가입하고 대시보드로 이동",
    loginButton: "로그인하고 대시보드로 이동",
    toLogin: "이미 계정이 있나요? 로그인",
    toSignup: "계정이 없나요? 회원가입",
    dashboard: "회원 대시보드",
    dashboardDesc: "모든 신청, 결제, 진행상황은 여기서 실행됩니다.",
    uploadPassport: "여권 업로드 시작",
    passportTitle: "여권 업로드",
    passportDesc:
      "여권 이미지 또는 PDF를 업로드하면 AI가 정보를 분석하고 필요한 절차를 자동으로 연결합니다.",
    uploadFile: "여권 파일 선택",
    fileType: "이미지 또는 PDF 가능",
    analyze: "AI 분석 시작하기",
    back: "돌아가기",
    home: "홈으로",
  },
  ID: {
    navStart: "Mulai",
    navLogin: "Masuk",
    heroLine1: "Upload paspor saja.",
    heroLine2: "AI mengurus masuk sampai menetap",
    heroLine3: "semuanya otomatis.",
    heroDesc:
      "Visa · bea cukai · penukaran uang · pickup bandara · mobil · akomodasi · tinggal lama terhubung otomatis dari pengajuan hingga pengecekan status.",
    start: "Mulai dengan Paspor",
    join: "Daftar",
    login: "Masuk",
    whatsapp: "Konsultasi WhatsApp",
    kakao: "Konsultasi KakaoTalk",
    liveTitle: "Status Otomatis AI",
    liveSub: "Pengguna hanya perlu memantau",
    today: "Diproses Hari Ini",
    active: "Sedang Berjalan",
    automation: "Koneksi Otomatis",
    avg: "Rata-rata Waktu",
    flowTitle: "Alur otomatis yang dihubungkan AI",
    flowDesc: "Setelah paspor diupload, AI menentukan prosedur yang diperlukan dan menjalankannya berurutan.",
    services: "Layanan Otomatis",
    why: "Mengapa menggunakan platform ini",
    trust: "Catatan tersimpan, manipulasi dicegah",
    trustDesc:
      "Catatan pengajuan, pembayaran, dan persetujuan disimpan secara tepercaya dan dihapus atas permintaan pengguna atau setelah 1 tahun.",
    cta: "Anda tidak perlu melakukan apa pun.",
    ctaDesc: "Upload paspor, AI akan memulai proses yang diperlukan secara otomatis.",
    signupTitle: "Daftar",
    loginTitle: "Masuk",
    name: "Nama",
    email: "Email",
    phone: "Nomor Telepon",
    password: "Kata Sandi",
    signupButton: "Daftar dan Masuk Dashboard",
    loginButton: "Masuk Dashboard",
    toLogin: "Sudah punya akun? Masuk",
    toSignup: "Belum punya akun? Daftar",
    dashboard: "Dashboard Member",
    dashboardDesc: "Semua pengajuan, pembayaran, dan status dijalankan di sini.",
    uploadPassport: "Mulai Upload Paspor",
    passportTitle: "Upload Paspor",
    passportDesc:
      "Upload gambar paspor atau PDF, AI akan menganalisis data dan menghubungkan proses yang dibutuhkan.",
    uploadFile: "Pilih File Paspor",
    fileType: "Gambar atau PDF",
    analyze: "Mulai Analisis AI",
    back: "Kembali",
    home: "Home",
  },
  EN: {
    navStart: "Start",
    navLogin: "Login",
    heroLine1: "Upload only your passport.",
    heroLine2: "AI handles entry to settlement",
    heroLine3: "automatically.",
    heroDesc:
      "Visa · customs · exchange · airport pickup · vehicle · accommodation · long stay are connected automatically from application to status tracking.",
    start: "Start with Passport",
    join: "Sign Up",
    login: "Login",
    whatsapp: "WhatsApp Support",
    kakao: "KakaoTalk Support",
    liveTitle: "AI Automation Status",
    liveSub: "Users only need to check progress",
    today: "Processed Today",
    active: "Currently Active",
    automation: "Auto Connection",
    avg: "Average Time",
    flowTitle: "Full automation flow connected by AI",
    flowDesc: "After passport upload, AI determines required procedures and runs them in order.",
    services: "Automated Services",
    why: "Why use this platform",
    trust: "Records remain, manipulation is blocked",
    trustDesc:
      "Application, payment, and approval records are stored reliably and deleted upon request or after one year.",
    cta: "You do not need to do anything.",
    ctaDesc: "Upload your passport and AI starts the required procedures automatically.",
    signupTitle: "Sign Up",
    loginTitle: "Login",
    name: "Name",
    email: "Email",
    phone: "Phone Number",
    password: "Password",
    signupButton: "Sign Up and Open Dashboard",
    loginButton: "Login and Open Dashboard",
    toLogin: "Already have an account? Login",
    toSignup: "No account? Sign up",
    dashboard: "Member Dashboard",
    dashboardDesc: "All applications, payments, and progress tracking run here.",
    uploadPassport: "Start Passport Upload",
    passportTitle: "Passport Upload",
    passportDesc:
      "Upload a passport image or PDF. AI analyzes the information and connects the required procedures.",
    uploadFile: "Choose Passport File",
    fileType: "Image or PDF",
    analyze: "Start AI Analysis",
    back: "Back",
    home: "Home",
  },
  CN: {
    navStart: "开始",
    navLogin: "登录",
    heroLine1: "只需上传护照。",
    heroLine2: "AI 自动处理入境到定居",
    heroLine3: "全部流程。",
    heroDesc:
      "签证 · 海关申报 · 换汇 · 接机 · 车辆 · 住宿 · 长期居留，从申请到进度确认全部自动连接。",
    start: "用护照开始",
    join: "注册",
    login: "登录",
    whatsapp: "WhatsApp 咨询",
    kakao: "KakaoTalk 咨询",
    liveTitle: "AI 自动处理状态",
    liveSub: "用户只需确认进度",
    today: "今日自动处理",
    active: "当前进行中",
    automation: "自动连接率",
    avg: "平均处理时间",
    flowTitle: "AI 自动连接的完整流程",
    flowDesc: "上传护照后，AI 判断所需流程并按顺序执行。",
    services: "自动处理服务",
    why: "为什么使用此平台",
    trust: "记录保留，防止篡改",
    trustDesc:
      "申请记录、付款记录、批准记录将以可信方式保存，并在用户请求或一年后自动删除。",
    cta: "您什么都不需要做。",
    ctaDesc: "只需上传护照，AI 将自动开始所需流程。",
    signupTitle: "注册",
    loginTitle: "登录",
    name: "姓名",
    email: "邮箱",
    phone: "电话号码",
    password: "密码",
    signupButton: "注册并进入仪表板",
    loginButton: "登录并进入仪表板",
    toLogin: "已有账号？登录",
    toSignup: "没有账号？注册",
    dashboard: "会员仪表板",
    dashboardDesc: "所有申请、付款、进度确认都在这里执行。",
    uploadPassport: "开始上传护照",
    passportTitle: "护照上传",
    passportDesc:
      "上传护照图片或 PDF 后，AI 将分析信息并自动连接所需流程。",
    uploadFile: "选择护照文件",
    fileType: "图片或 PDF",
    analyze: "开始 AI 分析",
    back: "返回",
    home: "首页",
  },
};

const SERVICE_KEYS = [
  "Visa",
  "Customs",
  "Exchange",
  "Pickup",
  "Vehicle",
  "Stay",
  "Long Stay",
  "Status",
];

const SERVICE_TEXT = {
  KR: ["비자", "세관신고", "환전", "공항픽업", "차량", "숙소", "장기체류", "진행조회"],
  ID: ["Visa", "Bea Cukai", "Penukaran", "Pickup", "Mobil", "Akomodasi", "Tinggal Lama", "Status"],
  EN: SERVICE_KEYS,
  CN: ["签证", "海关", "换汇", "接机", "车辆", "住宿", "长期居留", "进度"],
};

const WHY = {
  KR: [
    ["AI 자동 처리", "여권 정보만 입력하면 필요한 절차가 자동 연결됩니다."],
    ["마이페이지 실행", "신청, 결제, 진행 확인은 회원 대시보드에서 처리됩니다."],
    ["실시간 알림", "승인, 만료, 수령, 배정 상태를 자동 안내합니다."],
    ["기록 보호", "신청·결제·승인 기록을 신뢰 가능한 방식으로 보관합니다."],
  ],
  ID: [
    ["Proses AI", "Data paspor menghubungkan prosedur yang dibutuhkan secara otomatis."],
    ["Dashboard Member", "Pengajuan, pembayaran, dan status diproses di dashboard."],
    ["Notifikasi Real-time", "Persetujuan, kedaluwarsa, dan penugasan diberitahukan otomatis."],
    ["Proteksi Catatan", "Catatan pengajuan, pembayaran, dan persetujuan disimpan tepercaya."],
  ],
  EN: [
    ["AI Automation", "Passport information connects required procedures automatically."],
    ["Member Dashboard", "Applications, payments, and tracking run from the dashboard."],
    ["Real-time Alerts", "Approvals, expiry, pickup, and assignments are notified automatically."],
    ["Record Protection", "Application, payment, and approval records are stored reliably."],
  ],
  CN: [
    ["AI 自动处理", "护照信息自动连接所需流程。"],
    ["会员仪表板", "申请、付款、进度确认都在仪表板执行。"],
    ["实时通知", "批准、到期、领取、分配状态自动通知。"],
    ["记录保护", "申请、付款、批准记录以可信方式保存。"],
  ],
};

function Icon({ name }) {
  const map = {
    Visa: "M7 3h10v18H7z M9 7h6 M9 11h6 M9 15h4",
    Customs: "M5 4h14v5c0 6-3 10-7 11-4-1-7-5-7-11z M9 10h6",
    Exchange: "M7 7h10M7 7l3-3M7 7l3 3M17 17H7m10 0l-3-3m3 3l-3 3",
    Pickup: "M3 16l18-9-8 14-2-6z",
    Vehicle: "M5 14l2-5h10l2 5v5H5z M8 19v2M16 19v2",
    Stay: "M4 20V8h7v12M11 12h9v8M7 12h1M7 16h1M15 16h1",
    "Long Stay": "M4 7l8-4 8 4v10l-8 4-8-4z M4 7l8 4 8-4 M12 11v10",
    Status: "M4 19V9M10 19V5M16 19v-7M22 19H2",
    AI: "M12 3v3M12 18v3M3 12h3M18 12h3M6 6l2 2M18 18l-2-2M18 6l-2 2M6 18l2-2M8 8h8v8H8z",
    Lock: "M6 10h12v10H6z M8 10V7a4 4 0 018 0v3",
    Upload: "M12 16V4M7 9l5-5 5 5M5 20h14",
  };
  return (
    <svg viewBox="0 0 24 24" className="icon">
      <path d={map[name]} />
    </svg>
  );
}

export default function App() {
  const [lang, setLang] = useState("KR");
  const [page, setPage] = useState("home");
  const [pulse, setPulse] = useState(0);
  const [stats, setStats] = useState({
    today: 128,
    active: 23,
    automation: 91,
    avg: "4:18",
  });

  const t = COPY[lang];

  useEffect(() => {
    const timer = setInterval(() => {
      setPulse((v) => (v + 1) % 8);
      setStats((s) => ({
        today: s.today + Math.floor(Math.random() * 3),
        active: 18 + Math.floor(Math.random() * 12),
        automation: 89 + Math.floor(Math.random() * 8),
        avg: `4:${10 + Math.floor(Math.random() * 40)}`,
      }));
    }, 1400);
    return () => clearInterval(timer);
  }, []);

  const common = { lang, setLang, setPage, t };

  if (page === "signup") return <Auth type="signup" {...common} />;
  if (page === "login") return <Auth type="login" {...common} />;
  if (page === "dashboard") return <Dashboard {...common} pulse={pulse} />;
  if (page === "passport") return <Passport {...common} />;

  return (
    <main className="app">
      <Background />
      <Header {...common} />

      <section className="hero">
        <div className="heroCopy">
          <div className="badge">
            <span className="dot" /> AI OPERATING SYSTEM
          </div>

          <h1>
            {t.heroLine1}
            <br />
            {t.heroLine2}
            <br />
            <span>{t.heroLine3}</span>
          </h1>

          <p>{t.heroDesc}</p>

          <div className="actions">
            <button className="primary" onClick={() => setPage("signup")}>
              <Icon name="Upload" /> {t.start}
            </button>
            <button className="glassBtn" onClick={() => setPage("login")}>
              {t.login}
            </button>
          </div>

          <div className="supportRow">
            <button onClick={() => window.open("https://wa.me/821027378821", "_blank")}>
              {t.whatsapp}
            </button>
            <button onClick={() => window.open("https://pf.kakao.com", "_blank")}>
              {t.kakao}
            </button>
          </div>
        </div>

        <AutomationVisual lang={lang} pulse={pulse} />
      </section>

      <section className="statsPanel">
        <div className="panelTitle">
          <h2>{t.liveTitle}</h2>
          <p>{t.liveSub}</p>
        </div>

        <Stat label={t.today} value={`${stats.today}`} />
        <Stat label={t.active} value={`${stats.active}`} />
        <Stat label={t.automation} value={`${stats.automation}%`} />
        <Stat label={t.avg} value={stats.avg} />
      </section>

      <section className="flowSection">
        <div>
          <h2>{t.flowTitle}</h2>
          <p>{t.flowDesc}</p>
        </div>
        <div className="processLine">
          {SERVICE_KEYS.slice(0, 6).map((key, i) => (
            <div className={`processStep ${pulse >= i ? "on" : ""}`} key={key}>
              <Icon name={key} />
              <span>{SERVICE_TEXT[lang][i]}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="serviceSection">
        <h2>{t.services}</h2>
        <div className="serviceGrid">
          {SERVICE_KEYS.map((key, i) => (
            <button className="serviceCard" key={key} onClick={() => setPage("signup")}>
              <Icon name={key} />
              <strong>{SERVICE_TEXT[lang][i]}</strong>
              <span>{key}</span>
            </button>
          ))}
        </div>
      </section>

      <section className="whyTrust">
        <div className="whyBox">
          <h2>{t.why}</h2>
          <div className="whyList">
            {WHY[lang].map(([a, b], i) => (
              <div key={a}>
                <b>0{i + 1}</b>
                <strong>{a}</strong>
                <p>{b}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="trustBox">
          <Icon name="Lock" />
          <h2>{t.trust}</h2>
          <p>{t.trustDesc}</p>
          <div className="trustTags">
            <span>Application Record</span>
            <span>Payment Record</span>
            <span>Approval Record</span>
          </div>
        </div>
      </section>

      <section className="finalCta">
        <h2>{t.cta}</h2>
        <p>{t.ctaDesc}</p>
        <button className="primary" onClick={() => setPage("signup")}>
          <Icon name="Upload" /> {t.start}
        </button>
      </section>

      <footer>© 2025 SMILE AI Indonesia Platform</footer>
    </main>
  );
}

function Header({ lang, setLang, setPage, t }) {
  return (
    <header className="header">
      <button className="brand" onClick={() => setPage("home")}>
        <span>AI</span>
        <div>
          <strong>SMILE AI</strong>
          <small>INDONESIA PLATFORM</small>
        </div>
      </button>

      <nav>
        <button onClick={() => setPage("signup")}>{t.navStart}</button>
        <button onClick={() => setPage("login")}>{t.navLogin}</button>
      </nav>

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

function Background() {
  return (
    <>
      <div className="gridBg" />
      <div className="glow glowA" />
      <div className="glow glowB" />
    </>
  );
}

function AutomationVisual({ lang, pulse }) {
  const labels = SERVICE_TEXT[lang];
  const nodes = SERVICE_KEYS.slice(0, 6);

  return (
    <div className="visualCard">
      <div className="orbitRing ring1" />
      <div className="orbitRing ring2" />
      <div className="dataBeam beam1" />
      <div className="dataBeam beam2" />
      <div className="aiCore">
        <Icon name="AI" />
        <strong>AI CORE</strong>
        <small>AUTO ROUTING</small>
      </div>

      {nodes.map((key, i) => (
        <div className={`visualNode node${i} ${pulse === i ? "active" : ""}`} key={key}>
          <Icon name={key} />
          <span>{labels[i]}</span>
        </div>
      ))}

      <div className="passportChip">
        <Icon name="Upload" />
        <span>PASSPORT INPUT</span>
      </div>
    </div>
  );
}

function Stat({ label, value }) {
  return (
    <div className="statCard">
      <strong>{value}</strong>
      <span>{label}</span>
    </div>
  );
}

function Auth({ type, t, setPage, ...rest }) {
  const isLogin = type === "login";

  return (
    <main className="app">
      <Background />
      <Header t={t} setPage={setPage} {...rest} />

      <section className="authShell">
        <div className="authPanel">
          <button className="backBtn" onClick={() => setPage("home")}>
            ← {t.home}
          </button>

          <div className="authIcon">
            <Icon name={isLogin ? "Lock" : "AI"} />
          </div>

          <h1>{isLogin ? t.loginTitle : t.signupTitle}</h1>

          {!isLogin && <input placeholder={t.name} />}
          <input placeholder={t.email} />
          {!isLogin && <input placeholder={t.phone} />}
          <input placeholder={t.password} type="password" />

          <button className="primary full" onClick={() => setPage("dashboard")}>
            {isLogin ? t.loginButton : t.signupButton}
          </button>

          <button className="linkBtn" onClick={() => setPage(isLogin ? "signup" : "login")}>
            {isLogin ? t.toSignup : t.toLogin}
          </button>
        </div>
      </section>
    </main>
  );
}

function Dashboard({ t, lang, pulse, setPage, ...rest }) {
  return (
    <main className="app">
      <Background />
      <Header t={t} lang={lang} setPage={setPage} {...rest} />

      <section className="dashboardHero">
        <div>
          <h1>{t.dashboard}</h1>
          <p>{t.dashboardDesc}</p>
        </div>
        <button className="primary" onClick={() => setPage("passport")}>
          <Icon name="Upload" /> {t.uploadPassport}
        </button>
      </section>

      <section className="dashboardGrid">
        {SERVICE_KEYS.map((key, i) => (
          <div className={`dashCard ${pulse === i ? "active" : ""}`} key={key}>
            <Icon name={key} />
            <strong>{SERVICE_TEXT[lang][i]}</strong>
            <span>{i === 0 ? t.uploadPassport : t.active}</span>
          </div>
        ))}
      </section>
    </main>
  );
}

function Passport({ t, setPage, ...rest }) {
  const [file, setFile] = useState("");

  return (
    <main className="app">
      <Background />
      <Header t={t} setPage={setPage} {...rest} />

      <section className="authShell">
        <div className="authPanel passportPanel">
          <button className="backBtn" onClick={() => setPage("dashboard")}>
            ← {t.back}
          </button>

          <div className="authIcon">
            <Icon name="Upload" />
          </div>

          <h1>{t.passportTitle}</h1>
          <p>{t.passportDesc}</p>

          <label className="uploadBox">
            <input
              type="file"
              accept="image/*,.pdf"
              onChange={(e) => setFile(e.target.files?.[0]?.name || "")}
            />
            <Icon name="Upload" />
            <strong>{file || t.uploadFile}</strong>
            <span>{t.fileType}</span>
          </label>

          <button className="primary full">{t.analyze}</button>
        </div>
      </section>
    </main>
  );
}
