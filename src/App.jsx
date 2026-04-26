import React, { useState } from "react";

const WHATSAPP = "https://wa.me/821027378821";
const KAKAO = "http://pf.kakao.com/_cBDxgn/chat";

const DATA = {
  KR: {
    badge: "AI OPERATED PLATFORM",
    title1: "SMILE AI",
    title2: "Indonesia Platform",
    subtitle: "비자, 세관신고, 환전, 픽업, 차량, 숙소까지 한 번에 처리하는 AI 자동 신청 시스템",
    start: "여권으로 시작하기",
    loginJoin: "회원가입 / 로그인",
    servicesTitle: "서비스 바로가기",
    payment: "IDR 결제 수수료 없음 / KRW·USDT는 현지 통화 교환 지원 +1%",
    paymentSub: "안전하고 투명한 결제 시스템을 제공합니다.",
    kakao: "KakaoTalk 상담",
    whatsapp: "WhatsApp 상담",
    signup: "회원가입",
    login: "로그인",
    name: "이름",
    email: "이메일",
    phone: "전화번호",
    password: "비밀번호",
    agree: "개인정보 수집 및 1년 보관 후 자동삭제에 동의합니다.",
    submit: "가입하고 시작하기",
    back: "돌아가기",
    mypage: "마이페이지",
    status: "진행상황",
    pay: "결제하기",
    services: [
      ["visa", "🛂", "비자 / 입국 준비", "Visa & Entry"],
      ["customs", "🧾", "세관 신고", "e-Customs"],
      ["exchange", "💱", "화폐 교환", "Currency Exchange"],
      ["pickup", "✈️", "공항 픽업", "Airport Pickup"],
      ["rental", "🚗", "차량 렌탈", "Car Rental"],
      ["stay", "🏨", "숙소 신청", "Accommodation"],
      ["longstay", "🌏", "장기체류 패키지", "Long Stay"],
      ["status", "📊", "진행상황 조회", "Check Status"]
    ]
  },
  ID: {
    badge: "PLATFORM DIKELOLA AI",
    title1: "SMILE AI",
    title2: "Indonesia Platform",
    subtitle: "Visa, e-Customs, penukaran uang, pickup, rental mobil, dan akomodasi dalam satu sistem AI",
    start: "Mulai dengan Paspor",
    loginJoin: "Daftar / Login",
    servicesTitle: "Layanan",
    payment: "Pembayaran IDR tanpa biaya / KRW·USDT dukungan konversi +1%",
    paymentSub: "Sistem pembayaran aman dan transparan.",
    kakao: "KakaoTalk",
    whatsapp: "WhatsApp",
    signup: "Daftar",
    login: "Login",
    name: "Nama",
    email: "Email",
    phone: "Nomor Telepon",
    password: "Password",
    agree: "Saya setuju data disimpan hingga 1 tahun lalu dihapus otomatis.",
    submit: "Daftar dan Mulai",
    back: "Kembali",
    mypage: "Halaman Saya",
    status: "Status",
    pay: "Bayar",
    services: [
      ["visa", "🛂", "Visa / Masuk", "Visa & Entry"],
      ["customs", "🧾", "Bea Cukai", "e-Customs"],
      ["exchange", "💱", "Penukaran Uang", "Currency Exchange"],
      ["pickup", "✈️", "Pickup Bandara", "Airport Pickup"],
      ["rental", "🚗", "Rental Mobil", "Car Rental"],
      ["stay", "🏨", "Akomodasi", "Accommodation"],
      ["longstay", "🌏", "Paket Long Stay", "Long Stay"],
      ["status", "📊", "Cek Status", "Check Status"]
    ]
  },
  EN: {
    badge: "AI OPERATED PLATFORM",
    title1: "SMILE AI",
    title2: "Indonesia Platform",
    subtitle: "AI-powered system for visa, customs, exchange, pickup, car rental, and accommodation",
    start: "Start with Passport",
    loginJoin: "Sign Up / Login",
    servicesTitle: "Services",
    payment: "No fee for IDR / KRW·USDT includes local currency support +1%",
    paymentSub: "Secure and transparent payment system.",
    kakao: "KakaoTalk",
    whatsapp: "WhatsApp",
    signup: "Sign Up",
    login: "Login",
    name: "Name",
    email: "Email",
    phone: "Phone",
    password: "Password",
    agree: "I agree to data storage for up to 1 year and automatic deletion.",
    submit: "Sign Up and Start",
    back: "Back",
    mypage: "My Page",
    status: "Status",
    pay: "Pay",
    services: [
      ["visa", "🛂", "Visa / Entry", "Visa & Entry"],
      ["customs", "🧾", "Customs Declaration", "e-Customs"],
      ["exchange", "💱", "Currency Exchange", "Currency Exchange"],
      ["pickup", "✈️", "Airport Pickup", "Airport Pickup"],
      ["rental", "🚗", "Car Rental", "Car Rental"],
      ["stay", "🏨", "Accommodation", "Accommodation"],
      ["longstay", "🌏", "Long Stay Package", "Long Stay"],
      ["status", "📊", "Check Status", "Check Status"]
    ]
  },
  CN: {
    badge: "AI 运营平台",
    title1: "SMILE AI",
    title2: "印尼平台",
    subtitle: "签证、海关申报、换汇、接送、租车、住宿，一站式 AI 自动申请系统",
    start: "用护照开始",
    loginJoin: "注册 / 登录",
    servicesTitle: "服务入口",
    payment: "IDR 无手续费 / KRW·USDT 本地货币兑换支持 +1%",
    paymentSub: "安全透明的支付系统。",
    kakao: "KakaoTalk 咨询",
    whatsapp: "WhatsApp 咨询",
    signup: "注册",
    login: "登录",
    name: "姓名",
    email: "电子邮件",
    phone: "电话号码",
    password: "密码",
    agree: "我同意资料最多保存1年后自动删除。",
    submit: "注册并开始",
    back: "返回",
    mypage: "我的页面",
    status: "进度",
    pay: "付款",
    services: [
      ["visa", "🛂", "签证 / 入境准备", "Visa & Entry"],
      ["customs", "🧾", "海关申报", "e-Customs"],
      ["exchange", "💱", "货币兑换", "Currency Exchange"],
      ["pickup", "✈️", "机场接送", "Airport Pickup"],
      ["rental", "🚗", "车辆租赁", "Car Rental"],
      ["stay", "🏨", "住宿申请", "Accommodation"],
      ["longstay", "🌏", "长期居留套餐", "Long Stay"],
      ["status", "📊", "查询进度", "Check Status"]
    ]
  }
};

export default function App() {
  const [lang, setLang] = useState("KR");
  const [page, setPage] = useState("home");
  const [selected, setSelected] = useState(null);
  const t = DATA[lang];

  const goService = (service) => {
    setSelected(service);
    setPage("service");
    window.scrollTo(0, 0);
  };

  return (
    <>
      <style>{css}</style>

      <div className="app">
        <div className="glow glowA" />
        <div className="glow glowB" />
        <div className="gridBg" />

        <main className="wrap">
          <Header t={t} lang={lang} setLang={setLang} setPage={setPage} />

          {page === "home" && (
            <Home t={t} setPage={setPage} goService={goService} />
          )}

          {page === "signup" && (
            <Auth mode="signup" t={t} setPage={setPage} />
          )}

          {page === "login" && (
            <Auth mode="login" t={t} setPage={setPage} />
          )}

          {page === "service" && (
            <Service t={t} item={selected} setPage={setPage} />
          )}

          {page === "payment" && (
            <Payment t={t} setPage={setPage} />
          )}

          {page === "mypage" && (
            <MyPage t={t} setPage={setPage} />
          )}
        </main>
      </div>
    </>
  );
}

function Header({ t, lang, setLang, setPage }) {
  return (
    <header className="header">
      <button className="brand" onClick={() => setPage("home")}>
        <div className="brandIcon">Ai</div>
        <div>
          <strong>SMILE AI</strong>
          <span>{t.title2}</span>
        </div>
      </button>

      <div className="langs">
        {["KR", "ID", "EN", "CN"].map((x) => (
          <button
            key={x}
            className={lang === x ? "active" : ""}
            onClick={() => setLang(x)}
          >
            {x}
          </button>
        ))}
      </div>
    </header>
  );
}

function Home({ t, setPage, goService }) {
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
            <span>⚙ AI 자동 처리</span>
            <span>🛡 안전한 결제</span>
            <span>🔔 실시간 알림</span>
            <span>🎧 전문 지원</span>
          </div>
        </div>

        <div className="visual">
          <div className="earth">
            <div className="earthGlow" />
            <div className="earthIcon">🌐</div>
            <div className="orbit orbit1" />
            <div className="orbit orbit2" />
            <span className="sat sat1">🛂</span>
            <span className="sat sat2">🚗</span>
            <span className="sat sat3">💱</span>
            <span className="sat sat4">🏨</span>
          </div>
        </div>
      </section>

      <section className="serviceHead">
        <h2>✦ {t.servicesTitle}</h2>
        <button onClick={() => setPage("mypage")}>{t.mypage}</button>
      </section>

      <section className="cards">
        {t.services.map((item, i) => (
          <button className={`card c${i}`} key={item[0]} onClick={() => goService(item)}>
            <div className="icon">{item[1]}</div>
            <strong>{item[2]}</strong>
            <small>{item[3]}</small>
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
          <small>실시간 상담 연결</small>
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

function Auth({ mode, t, setPage }) {
  const signup = mode === "signup";

  return (
    <section className="authPage">
      <button className="back" onClick={() => setPage("home")}>← {t.back}</button>

      <div className="authCard">
        <div className="authIcon">{signup ? "👤" : "🔐"}</div>
        <h1>{signup ? t.signup : t.login}</h1>
        <p>SMILE AI 플랫폼의 모든 서비스를 이용해보세요.</p>

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

        <button className="primary full" onClick={() => setPage("mypage")}>
          <span>{signup ? t.submit : t.login}</span>
          <b>→</b>
        </button>

        <button className="yellowLine" onClick={() => window.open(KAKAO, "_blank")}>
          💬 {t.kakao}
        </button>
      </div>
    </section>
  );
}

function Service({ t, item, setPage }) {
  const service = item || t.services[0];

  return (
    <section className="page">
      <button className="back" onClick={() => setPage("home")}>← {t.back}</button>

      <div className="pageHero">
        <div>
          <div className="badge">AI APPLICATION FLOW</div>
          <h1>{service[1]} {service[2]}</h1>
          <p>{service[3]} 신청 정보를 입력하면 AI가 필요한 서류와 다음 단계를 안내합니다.</p>
        </div>

        <button className="primary smallBtn" onClick={() => setPage("payment")}>
          {t.pay} →
        </button>
      </div>

      <div className="formGrid">
        <input placeholder={t.name} />
        <input placeholder={t.email} />
        <input placeholder={t.phone} />
        <input placeholder="국적 / Nationality" />
        <input placeholder="여권번호 / Passport No." />
        <input placeholder="도착 예정일 / Arrival Date" />
        <input placeholder="체류 주소 / Address in Indonesia" />
        <input placeholder="요청 서비스 옵션" />
        <textarea placeholder="추가 요청사항" />
      </div>
    </section>
  );
}

function Payment({ t, setPage }) {
  return (
    <section className="page">
      <button className="back" onClick={() => setPage("home")}>← {t.back}</button>

      <div className="pageHero">
        <div>
          <div className="badge">PAYMENT SYSTEM</div>
          <h1>💳 {t.pay}</h1>
          <p>{t.payment}</p>
        </div>
      </div>

      <div className="cards">
        <button className="card c0">🇮🇩 IDR<br /><small>BCA / GoPay / OVO / ShopeePay</small></button>
        <button className="card c1">🇰🇷 KRW<br /><small>케이뱅크</small></button>
        <button className="card c2">🌐 USDT<br /><small>자동 환율 계산 예정</small></button>
        <button className="card c3">📄 Receipt<br /><small>마이페이지 저장</small></button>
      </div>
    </section>
  );
}

function MyPage({ t, setPage }) {
  return (
    <section className="page">
      <button className="back" onClick={() => setPage("home")}>← {t.back}</button>

      <div className="pageHero">
        <div>
          <div className="badge">MY PAGE</div>
          <h1>📊 {t.status}</h1>
          <p>신청 상태, 결제 확인, 승인 완료, 비자 다운로드를 확인합니다.</p>
        </div>
      </div>

      <div className="timeline">
        <div className="done">● 신청 접수</div>
        <div className="done">● 결제 확인</div>
        <div className="now">◐ 서류 검토</div>
        <div>○ 이민국 제출</div>
        <div>○ 승인 완료 / 다운로드</div>
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
  font-family:Arial,sans-serif;
  background:
    radial-gradient(circle at 75% 8%, rgba(0,229,255,.28), transparent 34%),
    radial-gradient(circle at 12% 85%, rgba(168,85,247,.28), transparent 36%),
    linear-gradient(135deg,#020617,#06152e 44%,#020617);
  overflow-x:hidden;
  position:relative;
}
.gridBg{
  position:fixed;inset:0;
  background-image:linear-gradient(rgba(255,255,255,.035) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.035) 1px,transparent 1px);
  background-size:60px 60px;
  mask-image:linear-gradient(to bottom,transparent,black 20%,black 80%,transparent);
  pointer-events:none;
}
.glow{position:fixed;border-radius:999px;filter:blur(90px);pointer-events:none}
.glowA{width:430px;height:430px;right:-130px;top:-130px;background:rgba(0,229,255,.3)}
.glowB{width:390px;height:390px;left:-120px;bottom:-120px;background:rgba(168,85,247,.3)}
.wrap{width:min(1180px,100%);margin:0 auto;padding:28px 24px;position:relative;z-index:2}
.header{display:flex;justify-content:space-between;align-items:center;padding-bottom:22px;margin-bottom:28px;border-bottom:1px solid rgba(255,255,255,.1)}
.brand{display:flex;align-items:center;gap:13px;background:none;border:0;color:white;text-align:left;cursor:pointer}
.brandIcon{width:54px;height:54px;border-radius:50%;display:grid;place-items:center;font-weight:900;font-size:22px;background:linear-gradient(135deg,#2563eb,#00e5ff,#a855f7);box-shadow:0 0 45px rgba(0,229,255,.55)}
.brand strong{display:block;font-size:24px}
.brand span{font-size:12px;color:#cbd5e1;font-weight:800}
.langs{display:flex;gap:8px;padding:5px;border-radius:18px;background:rgba(2,6,23,.65);border:1px solid rgba(255,255,255,.13)}
.langs button{border:0;border-radius:13px;padding:10px 18px;background:rgba(15,23,42,.9);color:#cbd5e1;font-weight:900;cursor:pointer}
.langs .active{background:linear-gradient(90deg,#2563eb,#00e5ff);color:white;box-shadow:0 0 24px rgba(0,229,255,.4)}
.hero{display:grid;grid-template-columns:1fr 1.08fr;gap:34px;align-items:center;padding:36px;border-radius:38px;background:linear-gradient(145deg,rgba(15,23,42,.92),rgba(30,64,175,.18));border:1px solid rgba(0,229,255,.38);box-shadow:0 0 55px rgba(0,229,255,.14),0 35px 100px rgba(0,0,0,.48)}
.badge{display:inline-block;padding:10px 17px;border-radius:999px;background:rgba(0,229,255,.14);border:1px solid rgba(0,229,255,.35);color:#00e5ff;font-size:13px;font-weight:900;box-shadow:0 0 25px rgba(0,229,255,.22)}
.hero h1{font-size:clamp(42px,5.2vw,72px);line-height:1.02;margin:22px 0 18px;letter-spacing:-1.5px}
.hero h1 span{background:linear-gradient(90deg,#00e5ff,#60a5fa,#f472b6);-webkit-background-clip:text;color:transparent}
.hero p{font-size:19px;line-height:1.6;color:#dbeafe;max-width:560px}
.primary,.secondary{width:100%;max-width:440px;margin-top:14px;border-radius:18px;padding:18px 22px;font-size:17px;font-weight:900;display:flex;justify-content:space-between;align-items:center;cursor:pointer}
.primary{border:0;background:linear-gradient(90deg,#2563eb,#00e5ff,#00ff99);color:white;box-shadow:0 0 38px rgba(0,229,255,.4)}
.secondary{border:1px solid rgba(0,229,255,.4);background:rgba(2,6,23,.68);color:white}
.features{display:flex;flex-wrap:wrap;gap:18px;margin-top:24px;color:#cbd5e1;font-size:15px}
.visual{min-height:410px;display:grid;place-items:center;position:relative;border-radius:34px;background:radial-gradient(circle,rgba(0,229,255,.34),transparent 38%),radial-gradient(circle,rgba(168,85,247,.18),transparent 58%)}
.earth{position:relative;width:330px;height:330px;display:grid;place-items:center}
.earthGlow{position:absolute;width:240px;height:240px;background:#00e5ff;border-radius:50%;filter:blur(55px);opacity:.38}
.earthIcon{position:relative;font-size:175px;filter:drop-shadow(0 0 42px #00e5ff);animation:float 4s ease-in-out infinite}
.orbit{position:absolute;border:1px solid rgba(125,211,252,.58);border-radius:50%;box-shadow:0 0 28px rgba(0,229,255,.24)}
.orbit1{width:390px;height:140px;transform:rotate(-18deg)}
.orbit2{width:340px;height:105px;transform:rotate(24deg)}
.sat{position:absolute;width:70px;height:70px;border-radius:50%;display:grid;place-items:center;background:rgba(15,23,42,.75);border:1px solid rgba(255,255,255,.2);box-shadow:0 0 34px rgba(0,229,255,.35);font-size:30px}
.sat1{left:5px;top:120px}.sat2{right:0;top:145px}.sat3{right:40px;bottom:40px}.sat4{right:70px;top:25px}
.serviceHead{display:flex;justify-content:space-between;align-items:center;margin:36px 0 18px}
.serviceHead h2{font-size:30px;margin:0}
.serviceHead button{border:1px solid rgba(0,229,255,.32);background:rgba(15,23,42,.8);color:white;border-radius:16px;padding:12px 18px;font-weight:900;cursor:pointer}
.cards{display:grid;grid-template-columns:repeat(4,1fr);gap:16px}
.card{min-height:136px;border:1px solid rgba(255,255,255,.14);border-radius:24px;background:linear-gradient(145deg,rgba(15,23,42,.94),rgba(30,41,59,.66));color:white;padding:22px;text-align:left;position:relative;overflow:hidden;box-shadow:0 22px 50px rgba(0,0,0,.28);cursor:pointer}
.card:before{content:"";position:absolute;inset:-1px;opacity:.38;background:radial-gradient(circle at 20% 15%,#00e5ff,transparent 38%)}
.c1:before{background:radial-gradient(circle at 20% 15%,#22c55e,transparent 38%)}.c2:before{background:radial-gradient(circle at 20% 15%,#a855f7,transparent 38%)}.c3:before{background:radial-gradient(circle at 20% 15%,#38bdf8,transparent 38%)}.c4:before{background:radial-gradient(circle at 20% 15%,#06b6d4,transparent 38%)}.c5:before{background:radial-gradient(circle at 20% 15%,#f472b6,transparent 38%)}.c6:before{background:radial-gradient(circle at 20% 15%,#f59e0b,transparent 38%)}.c7:before{background:radial-gradient(circle at 20% 15%,#3b82f6,transparent 38%)}
.icon{font-size:38px;margin-bottom:14px;position:relative}.card strong{display:block;font-size:18px;position:relative}.card small{display:block;color:#cbd5e1;margin-top:7px;position:relative}.card em{position:absolute;right:20px;bottom:18px;font-style:normal;color:#cbd5e1;font-size:24px}
.bottom{display:grid;grid-template-columns:1.5fr .7fr .7fr;gap:16px;margin-top:24px}
.payment{display:flex;gap:16px;align-items:center;padding:20px;border-radius:24px;background:rgba(37,99,235,.18);border:1px solid rgba(59,130,246,.48);box-shadow:inset 0 0 30px rgba(0,229,255,.08)}
.shield{font-size:42px}.payment p{margin:0;color:#dbeafe;line-height:1.55}
.kakao,.whatsapp{border:0;border-radius:22px;padding:18px;font-size:17px;font-weight:900;cursor:pointer}.kakao{background:#fde047;color:#111827}.whatsapp{background:#22c55e;color:white;display:grid;place-items:center}.kakao small,.whatsapp small{display:block;margin-top:5px;font-size:13px}
footer{text-align:center;color:#64748b;margin:30px 0}
.authPage,.page{max-width:760px;margin:0 auto}.back{background:transparent;color:white;border:0;font-size:16px;margin-bottom:16px;cursor:pointer}
.authCard,.pageHero{padding:38px;border-radius:34px;background:linear-gradient(145deg,rgba(15,23,42,.94),rgba(30,64,175,.22));border:1px solid rgba(0,229,255,.4);box-shadow:0 0 48px rgba(0,229,255,.14),0 35px 100px rgba(0,0,0,.45)}
.authCard{text-align:center}.authIcon{width:100px;height:100px;border-radius:50%;margin:0 auto 18px;display:grid;place-items:center;font-size:44px;background:radial-gradient(circle,#8b5cf6,#1e1b4b);box-shadow:0 0 46px rgba(168,85,247,.58)}
.authCard p,.pageHero p{color:#cbd5e1}.authCard input,.formGrid input,.formGrid textarea{width:100%;padding:17px;margin-top:14px;border-radius:16px;border:1px solid rgba(0,229,255,.35);background:rgba(2,6,23,.75);color:white;font-size:16px}
.check{display:flex;gap:10px;text-align:left;margin-top:16px;color:#cbd5e1;font-size:14px}.full{max-width:100%}.yellowLine{width:100%;padding:17px;margin-top:14px;border-radius:16px;background:transparent;color:#fde047;border:1px solid #fde047;font-weight:900;font-size:16px;cursor:pointer}
.formGrid{display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-top:18px}.formGrid textarea{grid-column:1/-1;min-height:110px}
.smallBtn{max-width:260px}.timeline{display:grid;gap:12px;margin-top:18px}.timeline div{padding:16px;border-radius:16px;background:rgba(15,23,42,.84);border:1px solid rgba(0,229,255,.22)}.done{color:#22c55e}.now{color:#00e5ff}
@keyframes float{0%,100%{transform:translateY(0)}50%{transform:translateY(-12px)}}
@media(max-width:900px){.wrap{padding:16px 14px}.header{gap:12px;align-items:flex-start}.brand strong{font-size:18px}.brandIcon{width:44px;height:44px}.langs{transform:scale(.86);transform-origin:right top}.hero{grid-template-columns:1fr;padding:22px}.visual{min-height:250px}.earth{width:230px;height:230px}.earthIcon{font-size:125px}.orbit1{width:260px;height:95px}.orbit2{width:230px;height:75px}.sat{width:52px;height:52px;font-size:23px}.cards{grid-template-columns:repeat(2,1fr)}.bottom{grid-template-columns:1fr}.formGrid{grid-template-columns:1fr}.hero h1{font-size:42px}}
`;
