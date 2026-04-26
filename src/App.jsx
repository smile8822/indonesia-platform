import React, { useState } from "react";

const WHATSAPP = "https://wa.me/821027378821";
const KAKAO = "http://pf.kakao.com/_cBDxgn/chat";

const TEXT = {
  KR: {
    brand: "SMILE AI",
    platform: "INDONESIA PLATFORM",
    badge: "AI OPERATED PLATFORM",
    title1: "SMILE AI",
    title2: "Indonesia Platform",
    subtitle: "비자, 세관신고, 환전, 픽업, 차량, 숙소까지 한 번에 처리하는 AI 자동 신청 시스템",
    start: "여권으로 시작하기",
    loginJoin: "회원가입 / 로그인",
    features: ["AI 자동 처리", "안전한 결제", "실시간 알림", "전문 지원"],
    servicesTitle: "서비스 바로가기",
    services: [
      ["🛂", "비자 / 입국 준비", "Visa & Entry"],
      ["🧾", "세관 신고", "e-Customs"],
      ["💱", "화폐 교환", "Currency Exchange"],
      ["✈️", "공항 픽업", "Airport Pickup"],
      ["🚗", "차량 렌탈", "Car Rental"],
      ["🏨", "숙소 신청", "Accommodation"],
      ["🌏", "장기체류 패키지", "Long Stay Package"],
      ["📊", "진행상황 조회", "Check Status"]
    ],
    payment: "IDR 결제 수수료 없음 / KRW·USDT는 현지 통화 교환 지원 +1%",
    paymentSub: "안전하고 투명한 결제 시스템을 제공합니다.",
    kakao: "KakaoTalk 상담",
    kakaoSub: "실시간 상담 연결",
    whatsapp: "WhatsApp 상담",
    signup: "회원가입",
    login: "로그인",
    signupSub: "SMILE AI 플랫폼의 모든 서비스를 이용해보세요.",
    name: "이름",
    email: "이메일",
    phone: "전화번호",
    password: "비밀번호",
    agree: "개인정보 수집 및 1년 보관 후 자동삭제에 동의합니다.",
    submit: "가입하고 시작하기",
    kakaoAsk: "카카오톡으로 문의",
    google: "Google로 로그인",
    hasAccount: "이미 계정이 있으신가요?",
    noAccount: "계정이 없으신가요?"
  },
  ID: {
    brand: "SMILE AI",
    platform: "INDONESIA PLATFORM",
    badge: "PLATFORM DIKELOLA AI",
    title1: "SMILE AI",
    title2: "Indonesia Platform",
    subtitle: "Visa, e-Customs, penukaran uang, pickup, rental mobil, dan akomodasi dalam satu sistem AI",
    start: "Mulai dengan Paspor",
    loginJoin: "Daftar / Login",
    features: ["Proses AI", "Pembayaran Aman", "Notifikasi Real-time", "Dukungan Ahli"],
    servicesTitle: "Layanan",
    services: [
      ["🛂", "Visa / Masuk", "Visa & Entry"],
      ["🧾", "Bea Cukai", "e-Customs"],
      ["💱", "Penukaran Uang", "Currency Exchange"],
      ["✈️", "Pickup Bandara", "Airport Pickup"],
      ["🚗", "Rental Mobil", "Car Rental"],
      ["🏨", "Akomodasi", "Accommodation"],
      ["🌏", "Paket Long Stay", "Long Stay Package"],
      ["📊", "Cek Status", "Check Status"]
    ],
    payment: "Pembayaran IDR tanpa biaya / KRW·USDT dukungan konversi +1%",
    paymentSub: "Sistem pembayaran aman dan transparan.",
    kakao: "KakaoTalk",
    kakaoSub: "Konsultasi langsung",
    whatsapp: "WhatsApp",
    signup: "Daftar",
    login: "Login",
    signupSub: "Gunakan semua layanan SMILE AI Platform.",
    name: "Nama",
    email: "Email",
    phone: "Nomor Telepon",
    password: "Password",
    agree: "Saya setuju data disimpan hingga 1 tahun lalu dihapus otomatis.",
    submit: "Daftar dan Mulai",
    kakaoAsk: "Tanya via KakaoTalk",
    google: "Login dengan Google",
    hasAccount: "Sudah punya akun?",
    noAccount: "Belum punya akun?"
  },
  EN: {
    brand: "SMILE AI",
    platform: "INDONESIA PLATFORM",
    badge: "AI OPERATED PLATFORM",
    title1: "SMILE AI",
    title2: "Indonesia Platform",
    subtitle: "AI-powered system for visa, customs, exchange, pickup, car rental, and accommodation",
    start: "Start with Passport",
    loginJoin: "Sign Up / Login",
    features: ["AI Processing", "Secure Payment", "Real-time Alerts", "Expert Support"],
    servicesTitle: "Services",
    services: [
      ["🛂", "Visa / Entry", "Visa & Entry"],
      ["🧾", "Customs Declaration", "e-Customs"],
      ["💱", "Currency Exchange", "Currency Exchange"],
      ["✈️", "Airport Pickup", "Airport Pickup"],
      ["🚗", "Car Rental", "Car Rental"],
      ["🏨", "Accommodation", "Accommodation"],
      ["🌏", "Long Stay Package", "Long Stay Package"],
      ["📊", "Check Status", "Check Status"]
    ],
    payment: "No fee for IDR / KRW·USDT includes local currency support +1%",
    paymentSub: "Secure and transparent payment system.",
    kakao: "KakaoTalk",
    kakaoSub: "Live consultation",
    whatsapp: "WhatsApp",
    signup: "Sign Up",
    login: "Login",
    signupSub: "Use all SMILE AI platform services.",
    name: "Name",
    email: "Email",
    phone: "Phone",
    password: "Password",
    agree: "I agree to data storage for up to 1 year and automatic deletion.",
    submit: "Sign Up and Start",
    kakaoAsk: "Ask via KakaoTalk",
    google: "Login with Google",
    hasAccount: "Already have an account?",
    noAccount: "No account?"
  },
  CN: {
    brand: "SMILE AI",
    platform: "印尼平台",
    badge: "AI 运营平台",
    title1: "SMILE AI",
    title2: "印尼平台",
    subtitle: "签证、海关申报、换汇、接送、租车、住宿，一站式 AI 自动申请系统",
    start: "用护照开始",
    loginJoin: "注册 / 登录",
    features: ["AI 自动处理", "安全支付", "实时通知", "专业支持"],
    servicesTitle: "服务入口",
    services: [
      ["🛂", "签证 / 入境准备", "Visa & Entry"],
      ["🧾", "海关申报", "e-Customs"],
      ["💱", "货币兑换", "Currency Exchange"],
      ["✈️", "机场接送", "Airport Pickup"],
      ["🚗", "车辆租赁", "Car Rental"],
      ["🏨", "住宿申请", "Accommodation"],
      ["🌏", "长期居留套餐", "Long Stay Package"],
      ["📊", "查询进度", "Check Status"]
    ],
    payment: "IDR 无手续费 / KRW·USDT 本地货币兑换支持 +1%",
    paymentSub: "安全透明的支付系统。",
    kakao: "KakaoTalk 咨询",
    kakaoSub: "实时咨询连接",
    whatsapp: "WhatsApp 咨询",
    signup: "注册",
    login: "登录",
    signupSub: "使用 SMILE AI 平台所有服务。",
    name: "姓名",
    email: "电子邮件",
    phone: "电话号码",
    password: "密码",
    agree: "我同意资料最多保存1年后自动删除。",
    submit: "注册并开始",
    kakaoAsk: "通过 KakaoTalk 咨询",
    google: "使用 Google 登录",
    hasAccount: "已有账号？",
    noAccount: "没有账号？"
  }
};

export default function App() {
  const [lang, setLang] = useState("KR");
  const [page, setPage] = useState("home");
  const t = TEXT[lang];

  return (
    <>
      <style>{css}</style>
      <div className="app">
        <div className="bgGlow one" />
        <div className="bgGlow two" />

        <main className="wrap">
          <Header lang={lang} setLang={setLang} setPage={setPage} t={t} />

          {page === "home" && <Home t={t} setPage={setPage} />}
          {page === "signup" && <Auth mode="signup" t={t} lang={lang} setLang={setLang} setPage={setPage} />}
          {page === "login" && <Auth mode="login" t={t} lang={lang} setLang={setLang} setPage={setPage} />}
        </main>
      </div>
    </>
  );
}

function Header({ lang, setLang, setPage, t }) {
  return (
    <header className="header">
      <button className="brand" onClick={() => setPage("home")}>
        <div className="brandIcon">Ai</div>
        <div>
          <strong>{t.brand}</strong>
          <span>{t.platform}</span>
        </div>
      </button>

      <div className="langs">
        {["KR", "ID", "EN", "CN"].map((x) => (
          <button key={x} className={lang === x ? "active" : ""} onClick={() => setLang(x)}>
            {x}
          </button>
        ))}
      </div>
    </header>
  );
}

function Home({ t, setPage }) {
  return (
    <>
      <section className="hero">
        <div className="heroText">
          <div className="badge">⚙ {t.badge}</div>
          <h1>
            {t.title1}
            <br />
            <span>{t.title2}</span>
          </h1>
          <p>{t.subtitle}</p>

          <button className="primary" onClick={() => setPage("signup")}>
            <span>🛂 {t.start}</span>
            <b>→</b>
          </button>

          <button className="secondary" onClick={() => setPage("login")}>
            <span>👤 {t.loginJoin}</span>
            <b>→</b>
          </button>

          <div className="features">
            {t.features.map((f, i) => (
              <span key={i}>✦ {f}</span>
            ))}
          </div>
        </div>

        <div className="visual">
          <div className="earth">
            <div className="earthCore">🌐</div>
            <div className="orbit o1" />
            <div className="orbit o2" />
            <span className="bubble b1">🚗</span>
            <span className="bubble b2">🔁</span>
            <span className="bubble b3">🏨</span>
            <span className="bubble b4">🛂</span>
          </div>
        </div>
      </section>

      <section className="serviceTitle">
        <h2>✦ {t.servicesTitle}</h2>
      </section>

      <section className="grid">
        {t.services.map((item, i) => (
          <button className={`card c${i}`} key={i}>
            <div className="cardIcon">{item[0]}</div>
            <strong>{item[1]}</strong>
            <small>{item[2]}</small>
            <em>→</em>
          </button>
        ))}
      </section>

      <section className="bottom">
        <div className="payment">
          <div className="shield">🛡</div>
          <p>
            <b>{t.payment}</b>
            <br />
            {t.paymentSub}
          </p>
        </div>

        <button className="kakao" onClick={() => window.open(KAKAO, "_blank")}>
          💬 {t.kakao}
          <small>{t.kakaoSub}</small>
        </button>

        <button className="whatsapp" onClick={() => window.open(WHATSAPP, "_blank")}>
          🟢 {t.whatsapp}
          <small>+82 10-2737-8821</small>
        </button>
      </section>

      <footer>© 2026 SMILE AI Indonesia Platform</footer>
    </>
  );
}

function Auth({ mode, t, lang, setLang, setPage }) {
  const signup = mode === "signup";

  return (
    <section className="authPage">
      <div className="authTop">
        <button className="back" onClick={() => setPage("home")}>←</button>
        <div className="langs smallLang">
          {["KR", "ID", "EN", "CN"].map((x) => (
            <button key={x} className={lang === x ? "active" : ""} onClick={() => setLang(x)}>
              {x}
            </button>
          ))}
        </div>
      </div>

      <div className="authCard">
        <div className="authIcon">{signup ? "👤" : "🔐"}</div>
        <h1>{signup ? t.signup : t.login}</h1>
        <p>{t.signupSub}</p>

        {signup && <input placeholder={t.name} />}
        <input placeholder={t.email} />
        {signup && <input placeholder={t.phone} />}
        {!signup && <input placeholder={t.password} type="password" />}

        {signup && (
          <label className="check">
            <input type="checkbox" />
            <span>{t.agree}</span>
          </label>
        )}

        <button className="primary full" onClick={() => window.open(WHATSAPP, "_blank")}>
          <span>{signup ? t.submit : t.login}</span>
          <b>→</b>
        </button>

        <button className="kakaoLine" onClick={() => window.open(KAKAO, "_blank")}>
          💬 {t.kakaoAsk}
        </button>

        {!signup && <button className="googleBtn">G {t.google}</button>}

        <div className="switch">
          {signup ? t.hasAccount : t.noAccount}{" "}
          <button onClick={() => setPage(signup ? "login" : "signup")}>
            {signup ? t.login : t.signup}
          </button>
        </div>
      </div>
    </section>
  );
}

const css = `
*{box-sizing:border-box}
body{margin:0;background:#020617}
.app{
  min-height:100vh;
  color:white;
  font-family:Arial, sans-serif;
  background:
    radial-gradient(circle at 75% 8%, rgba(0,229,255,.24), transparent 34%),
    radial-gradient(circle at 15% 80%, rgba(168,85,247,.24), transparent 34%),
    linear-gradient(135deg,#020617,#06152e 45%,#020617);
  overflow-x:hidden;
}
.bgGlow{position:fixed;border-radius:999px;filter:blur(90px);pointer-events:none}
.one{width:430px;height:430px;right:-130px;top:-130px;background:rgba(0,229,255,.28)}
.two{width:380px;height:380px;left:-130px;bottom:-120px;background:rgba(168,85,247,.28)}
.wrap{width:min(1180px,100%);margin:0 auto;padding:28px 24px;position:relative;z-index:2}
.header{display:flex;justify-content:space-between;align-items:center;border-bottom:1px solid rgba(255,255,255,.09);padding-bottom:22px;margin-bottom:28px}
.brand{display:flex;align-items:center;gap:13px;background:none;border:0;color:white;text-align:left;cursor:pointer}
.brandIcon{width:54px;height:54px;border-radius:50%;display:grid;place-items:center;font-size:22px;font-weight:900;background:linear-gradient(135deg,#2563eb,#00e5ff,#a855f7);box-shadow:0 0 40px rgba(0,229,255,.55)}
.brand strong{display:block;font-size:24px}
.brand span{font-size:12px;color:#cbd5e1;font-weight:800}
.langs{display:flex;gap:8px;padding:5px;border-radius:18px;background:rgba(2,6,23,.65);border:1px solid rgba(255,255,255,.13)}
.langs button{border:0;border-radius:13px;padding:10px 18px;background:rgba(15,23,42,.9);color:#cbd5e1;font-weight:900;cursor:pointer}
.langs .active{background:linear-gradient(90deg,#2563eb,#00e5ff);color:white;box-shadow:0 0 24px rgba(0,229,255,.38)}
.hero{display:grid;grid-template-columns:1fr 1.1fr;gap:32px;align-items:center;padding:34px;border-radius:38px;background:linear-gradient(145deg,rgba(15,23,42,.9),rgba(30,64,175,.18));border:1px solid rgba(0,229,255,.36);box-shadow:0 0 55px rgba(0,229,255,.13),0 35px 100px rgba(0,0,0,.45)}
.badge{display:inline-block;padding:10px 17px;border-radius:999px;background:rgba(0,229,255,.14);border:1px solid rgba(0,229,255,.33);color:#00e5ff;font-size:13px;font-weight:900;box-shadow:0 0 25px rgba(0,229,255,.22)}
.hero h1{font-size:clamp(42px,5.2vw,72px);line-height:1.02;margin:22px 0 18px;letter-spacing:-1.5px}
.hero h1 span{background:linear-gradient(90deg,#00e5ff,#60a5fa,#f472b6);-webkit-background-clip:text;color:transparent}
.hero p{font-size:19px;line-height:1.6;color:#dbeafe;max-width:560px}
.primary,.secondary{width:100%;max-width:440px;margin-top:14px;border-radius:18px;padding:18px 22px;font-size:17px;font-weight:900;display:flex;justify-content:space-between;align-items:center;cursor:pointer}
.primary{border:0;background:linear-gradient(90deg,#2563eb,#00e5ff,#00ff99);color:white;box-shadow:0 0 38px rgba(0,229,255,.4)}
.secondary{border:1px solid rgba(0,229,255,.38);background:rgba(2,6,23,.68);color:white}
.features{display:flex;flex-wrap:wrap;gap:18px;margin-top:24px;color:#cbd5e1;font-size:15px}
.visual{min-height:410px;display:grid;place-items:center;position:relative;border-radius:34px;background:radial-gradient(circle,rgba(0,229,255,.34),transparent 38%),radial-gradient(circle,rgba(168,85,247,.18),transparent 58%)}
.earth{position:relative;width:320px;height:320px;display:grid;place-items:center}
.earthCore{font-size:175px;filter:drop-shadow(0 0 42px #00e5ff);animation:float 4s ease-in-out infinite}
.orbit{position:absolute;border:1px solid rgba(125,211,252,.58);border-radius:50%;box-shadow:0 0 28px rgba(0,229,255,.24)}
.o1{width:390px;height:140px;transform:rotate(-18deg)}
.o2{width:340px;height:105px;transform:rotate(24deg)}
.bubble{position:absolute;width:70px;height:70px;border-radius:50%;display:grid;place-items:center;background:rgba(15,23,42,.75);border:1px solid rgba(255,255,255,.2);box-shadow:0 0 34px rgba(0,229,255,.35);font-size:30px}
.b1{left:5px;top:120px}.b2{right:0;top:145px}.b3{right:40px;bottom:40px}.b4{right:70px;top:25px}
.serviceTitle h2{font-size:30px;margin:36px 0 18px}
.grid{display:grid;grid-template-columns:repeat(4,1fr);gap:16px}
.card{min-height:136px;border:1px solid rgba(255,255,255,.14);border-radius:24px;background:linear-gradient(145deg,rgba(15,23,42,.94),rgba(30,41,59,.66));color:white;padding:22px;text-align:left;position:relative;overflow:hidden;box-shadow:0 22px 50px rgba(0,0,0,.28);cursor:pointer}
.card:before{content:"";position:absolute;inset:-1px;opacity:.38;background:radial-gradient(circle at 20% 15%,#00e5ff,transparent 38%)}
.c1:before{background:radial-gradient(circle at 20% 15%,#22c55e,transparent 38%)}.c2:before{background:radial-gradient(circle at 20% 15%,#a855f7,transparent 38%)}.c3:before{background:radial-gradient(circle at 20% 15%,#38bdf8,transparent 38%)}.c4:before{background:radial-gradient(circle at 20% 15%,#06b6d4,transparent 38%)}.c5:before{background:radial-gradient(circle at 20% 15%,#f472b6,transparent 38%)}.c6:before{background:radial-gradient(circle at 20% 15%,#f59e0b,transparent 38%)}.c7:before{background:radial-gradient(circle at 20% 15%,#3b82f6,transparent 38%)}
.cardIcon{font-size:38px;margin-bottom:14px;position:relative}.card strong{display:block;font-size:18px;position:relative}.card small{display:block;color:#cbd5e1;margin-top:7px;position:relative}.card em{position:absolute;right:20px;bottom:18px;font-style:normal;color:#cbd5e1;font-size:24px}
.bottom{display:grid;grid-template-columns:1.5fr .7fr .7fr;gap:16px;margin-top:24px}
.payment{display:flex;gap:16px;align-items:center;padding:20px;border-radius:24px;background:rgba(37,99,235,.18);border:1px solid rgba(59,130,246,.48);box-shadow:inset 0 0 30px rgba(0,229,255,.08)}
.shield{font-size:42px}.payment p{margin:0;color:#dbeafe;line-height:1.55}
.kakao,.whatsapp{border:0;border-radius:22px;padding:18px;font-size:17px;font-weight:900;cursor:pointer}.kakao{background:#fde047;color:#111827}.whatsapp{background:#22c55e;color:white;display:grid;place-items:center}.kakao small,.whatsapp small{display:block;margin-top:5px;font-size:13px}
footer{text-align:center;color:#64748b;margin:30px 0}
.authPage{max-width:620px;margin:0 auto}.authTop{display:flex;justify-content:space-between;align-items:center;margin-bottom:18px}.back{background:transparent;color:white;border:0;font-size:28px;cursor:pointer}
.authCard{padding:38px;border-radius:34px;text-align:center;background:linear-gradient(145deg,rgba(15,23,42,.94),rgba(30,64,175,.22));border:1px solid rgba(0,229,255,.4);box-shadow:0 0 48px rgba(0,229,255,.14),0 35px 100px rgba(0,0,0,.45)}
.authIcon{width:100px;height:100px;border-radius:50%;margin:0 auto 18px;display:grid;place-items:center;font-size:44px;background:radial-gradient(circle,#8b5cf6,#1e1b4b);box-shadow:0 0 46px rgba(168,85,247,.58)}
.authCard p{color:#cbd5e1}.authCard input{width:100%;padding:17px;margin-top:14px;border-radius:16px;border:1px solid rgba(0,229,255,.35);background:rgba(2,6,23,.75);color:white;font-size:16px}
.check{display:flex;gap:10px;text-align:left;margin-top:16px;color:#cbd5e1;font-size:14px}.full{max-width:100%}.kakaoLine,.googleBtn{width:100%;padding:17px;margin-top:14px;border-radius:16px;background:transparent;font-weight:900;font-size:16px;cursor:pointer}.kakaoLine{color:#fde047;border:1px solid #fde047}.googleBtn{color:white;border:1px solid rgba(255,255,255,.2)}.switch{margin-top:18px;color:#cbd5e1}.switch button{background:none;border:0;color:#00e5ff;font-weight:900;cursor:pointer}
@keyframes float{0%,100%{transform:translateY(0)}50%{transform:translateY(-12px)}}
@media(max-width:900px){
  .wrap{padding:16px 14px}
  .header{gap:12px;align-items:flex-start}
  .brand strong{font-size:18px}.brandIcon{width:44px;height:44px}
  .langs{transform:scale(.86);transform-origin:right top}
  .hero{grid-template-columns:1fr;padding:22px}
  .visual{min-height:250px}.earth{width:230px;height:230px}.earthCore{font-size:125px}.o1{width:260px;height:95px}.o2{width:230px;height:75px}.bubble{width:52px;height:52px;font-size:23px}
  .grid{grid-template-columns:repeat(2,1fr)}
  .bottom{grid-template-columns:1fr}
}
`;
