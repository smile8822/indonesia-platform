import React, { useState } from "react";

const WHATSAPP = "https://wa.me/821027378821";
const KAKAO = "http://pf.kakao.com/_cBDxgn/chat";

export default function App() {
  const [lang, setLang] = useState("KR");
  const [page, setPage] = useState("home");

  const T = {
    KR: {
      title1: "SMILE AI",
      title2: "Indonesia Platform",
      sub: "비자, 세관신고, 환전, 픽업, 차량, 숙소까지 한 번에 처리하는 AI 자동 신청 시스템",
      start: "여권으로 시작하기",
      auth: "회원가입 / 로그인",
      services: "서비스 바로가기",
      visa: "비자 / 입국 준비",
      customs: "세관 신고",
      exchange: "화폐 교환",
      pickup: "공항 픽업",
      car: "차량 렌탈",
      stay: "숙소 신청",
      long: "장기체류 패키지",
      status: "진행상황 조회",
      signup: "회원가입",
      login: "로그인",
      name: "이름",
      email: "이메일",
      phone: "전화번호",
      password: "비밀번호",
      submit: "가입하고 시작하기"
    },
    ID: {
      title1: "SMILE AI",
      title2: "Indonesia Platform",
      sub: "Visa, e-Customs, exchange, pickup, rental mobil, dan akomodasi dalam satu sistem AI",
      start: "Mulai dengan Paspor",
      auth: "Daftar / Login",
      services: "Layanan",
      visa: "Visa / Masuk",
      customs: "e-Customs",
      exchange: "Penukaran Uang",
      pickup: "Pickup Bandara",
      car: "Rental Mobil",
      stay: "Akomodasi",
      long: "Paket Long Stay",
      status: "Cek Status",
      signup: "Daftar",
      login: "Login",
      name: "Nama",
      email: "Email",
      phone: "Nomor Telepon",
      password: "Password",
      submit: "Daftar dan Mulai"
    },
    EN: {
      title1: "SMILE AI",
      title2: "Indonesia Platform",
      sub: "AI-powered system for visa, customs, exchange, pickup, car rental, and accommodation",
      start: "Start with Passport",
      auth: "Sign Up / Login",
      services: "Services",
      visa: "Visa / Entry",
      customs: "e-Customs",
      exchange: "Currency Exchange",
      pickup: "Airport Pickup",
      car: "Car Rental",
      stay: "Accommodation",
      long: "Long Stay Package",
      status: "Check Status",
      signup: "Sign Up",
      login: "Login",
      name: "Name",
      email: "Email",
      phone: "Phone",
      password: "Password",
      submit: "Sign Up and Start"
    },
    CN: {
      title1: "SMILE AI",
      title2: "印尼平台",
      sub: "签证、海关申报、换汇、接送、租车、住宿，一站式 AI 自动申请系统",
      start: "用护照开始",
      auth: "注册 / 登录",
      services: "服务入口",
      visa: "签证 / 入境准备",
      customs: "海关申报",
      exchange: "货币兑换",
      pickup: "机场接送",
      car: "车辆租赁",
      stay: "住宿申请",
      long: "长期居留套餐",
      status: "查询进度",
      signup: "注册",
      login: "登录",
      name: "姓名",
      email: "电子邮件",
      phone: "电话号码",
      password: "密码",
      submit: "注册并开始"
    }
  };

  const t = T[lang];

  const services = [
    ["🛂", t.visa, "Visa & Entry"],
    ["🧾", t.customs, "e-Customs"],
    ["💱", t.exchange, "Currency Exchange"],
    ["✈️", t.pickup, "Airport Pickup"],
    ["🚗", t.car, "Car Rental"],
    ["🏨", t.stay, "Accommodation"],
    ["🌏", t.long, "Long Stay"],
    ["📊", t.status, "Check Status"]
  ];

  return (
    <>
      <style>{css}</style>

      <div className="app">
        <div className="glow glow1"></div>
        <div className="glow glow2"></div>

        <main className="container">
          <header className="header">
            <div className="brand">
              <div className="logo">Ai</div>
              <div>
                <b>SMILE AI</b>
                <span>INDONESIA PLATFORM</span>
              </div>
            </div>

            <div className="langs">
              {["KR", "ID", "EN", "CN"].map((x) => (
                <button
                  key={x}
                  onClick={() => setLang(x)}
                  className={lang === x ? "lang active" : "lang"}
                >
                  {x}
                </button>
              ))}
            </div>
          </header>

          {page === "home" && (
            <>
              <section className="hero">
                <div className="heroText">
                  <div className="badge">⚙ AI OPERATED PLATFORM</div>

                  <h1>
                    {t.title1}
                    <br />
                    <span>{t.title2}</span>
                  </h1>

                  <p>{t.sub}</p>

                  <button className="primary" onClick={() => setPage("signup")}>
                    🛂 {t.start} <b>→</b>
                  </button>

                  <button className="outline" onClick={() => setPage("login")}>
                    👤 {t.auth} <b>→</b>
                  </button>

                  <div className="features">
                    <span>⚙ AI 자동 처리</span>
                    <span>🛡 안전한 결제</span>
                    <span>🔔 실시간 알림</span>
                    <span>🎧 전문 지원</span>
                  </div>
                </div>

                <div className="visual">
                  <div className="planet">🌐</div>
                  <div className="orbit"></div>
                  <div className="bubble b1">🚗</div>
                  <div className="bubble b2">🔁</div>
                  <div className="bubble b3">🏨</div>
                  <div className="bubble b4">🛂</div>
                </div>
              </section>

              <h2 className="sectionTitle">✦ {t.services}</h2>

              <section className="serviceGrid">
                {services.map((s, i) => (
                  <button key={i} className={`serviceCard c${i}`}>
                    <div className="serviceIcon">{s[0]}</div>
                    <strong>{s[1]}</strong>
                    <small>{s[2]}</small>
                    <em>→</em>
                  </button>
                ))}
              </section>

              <section className="bottom">
                <div className="payment">
                  <div>🛡</div>
                  <p>
                    <b>IDR 결제 수수료 없음 / KRW·USDT는 현지 통화 교환 지원 +1%</b>
                    <br />
                    안전하고 투명한 결제 시스템을 제공합니다.
                  </p>
                </div>

                <button className="kakao" onClick={() => window.open(KAKAO, "_blank")}>
                  💬 KakaoTalk 상담
                </button>

                <button className="whatsapp" onClick={() => window.open(WHATSAPP, "_blank")}>
                  🟢 WhatsApp 상담
                  <small>+82 10-2737-8821</small>
                </button>
              </section>

              <footer>© 2026 SMILE AI Indonesia Platform</footer>
            </>
          )}

          {page === "signup" && (
            <Auth page="signup" t={t} lang={lang} setLang={setLang} setPage={setPage} />
          )}

          {page === "login" && (
            <Auth page="login" t={t} lang={lang} setLang={setLang} setPage={setPage} />
          )}
        </main>
      </div>
    </>
  );
}

function Auth({ page, t, lang, setLang, setPage }) {
  return (
    <section className="authPage">
      <div className="authTop">
        <button className="back" onClick={() => setPage("home")}>←</button>

        <div className="langs">
          {["KR", "ID", "EN", "CN"].map((x) => (
            <button
              key={x}
              onClick={() => setLang(x)}
              className={lang === x ? "lang active" : "lang"}
            >
              {x}
            </button>
          ))}
        </div>
      </div>

      <div className="authCard">
        <div className="authIcon">{page === "signup" ? "👤" : "🔐"}</div>
        <h1>{page === "signup" ? t.signup : t.login}</h1>
        <p>SMILE AI 플랫폼의 모든 서비스를 이용해보세요.</p>

        {page === "signup" && <input placeholder={t.name} />}
        <input placeholder={t.email} />
        {page === "signup" && <input placeholder={t.phone} />}
        {page === "login" && <input placeholder={t.password} type="password" />}

        {page === "signup" && (
          <label className="check">
            <input type="checkbox" />
            개인정보 수집 및 1년 보관 후 자동삭제에 동의합니다.
          </label>
        )}

        <button
          className="primary full"
          onClick={() =>
            window.open(
              WHATSAPP + "?text=" + encodeURIComponent("SMILE AI 서비스 신청 문의합니다."),
              "_blank"
            )
          }
        >
          {page === "signup" ? t.submit : t.login} →
        </button>

        <button className="kakaoLine" onClick={() => window.open(KAKAO, "_blank")}>
          💬 카카오톡으로 문의
        </button>
      </div>
    </section>
  );
}

const css = `
* { box-sizing: border-box; }

body {
  margin: 0;
  background: #020617;
}

.app {
  min-height: 100vh;
  background:
    radial-gradient(circle at 75% 10%, rgba(37,99,235,.45), transparent 30%),
    radial-gradient(circle at 25% 75%, rgba(147,51,234,.35), transparent 35%),
    linear-gradient(135deg, #020617 0%, #06152e 45%, #020617 100%);
  color: white;
  font-family: Arial, sans-serif;
  position: relative;
  overflow-x: hidden;
}

.glow {
  position: fixed;
  border-radius: 999px;
  filter: blur(90px);
  pointer-events: none;
}

.glow1 {
  width: 360px;
  height: 360px;
  right: -100px;
  top: -80px;
  background: rgba(34,211,238,.34);
}

.glow2 {
  width: 380px;
  height: 380px;
  left: -120px;
  bottom: -120px;
  background: rgba(168,85,247,.35);
}

.container {
  width: min(1180px, 100%);
  margin: 0 auto;
  padding: 28px 24px;
  position: relative;
  z-index: 2;
}

.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 22px;
  margin-bottom: 30px;
  border-bottom: 1px solid rgba(255,255,255,.1);
}

.brand {
  display: flex;
  align-items: center;
  gap: 13px;
}

.logo {
  width: 54px;
  height: 54px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  font-weight: 900;
  font-size: 22px;
  color: white;
  background: linear-gradient(135deg, #2563eb, #22d3ee, #8b5cf6);
  box-shadow: 0 0 35px rgba(34,211,238,.6), inset 0 0 18px rgba(255,255,255,.25);
}

.brand b {
  display: block;
  font-size: 24px;
  letter-spacing: -.5px;
}

.brand span {
  color: #cbd5e1;
  font-size: 12px;
  font-weight: 700;
}

.langs {
  display: flex;
  gap: 8px;
  padding: 5px;
  border-radius: 18px;
  background: rgba(2,6,23,.65);
  border: 1px solid rgba(255,255,255,.12);
}

.lang {
  border: 0;
  color: #cbd5e1;
  background: rgba(15,23,42,.8);
  padding: 10px 18px;
  border-radius: 14px;
  font-weight: 900;
}

.lang.active {
  color: white;
  background: linear-gradient(90deg, #2563eb, #06b6d4);
  box-shadow: 0 0 20px rgba(34,211,238,.35);
}

.hero {
  display: grid;
  grid-template-columns: 1fr 1.1fr;
  gap: 35px;
  align-items: center;
}

.badge {
  display: inline-block;
  padding: 10px 18px;
  border-radius: 999px;
  color: #22d3ee;
  font-size: 13px;
  font-weight: 900;
  background: rgba(34,211,238,.13);
  border: 1px solid rgba(34,211,238,.25);
  box-shadow: 0 0 22px rgba(34,211,238,.18);
}

.hero h1 {
  margin: 22px 0 18px;
  font-size: clamp(42px, 5vw, 70px);
  line-height: 1.02;
  letter-spacing: -1.5px;
}

.hero h1 span {
  background: linear-gradient(90deg, #22d3ee, #60a5fa, #e879f9);
  -webkit-background-clip: text;
  color: transparent;
}

.hero p {
  color: #dbeafe;
  font-size: 19px;
  line-height: 1.6;
  max-width: 560px;
}

.primary,
.outline {
  width: 100%;
  max-width: 440px;
  padding: 19px 24px;
  border-radius: 18px;
  margin-top: 14px;
  font-size: 18px;
  font-weight: 900;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.primary {
  border: 0;
  color: white;
  background: linear-gradient(90deg, #2563eb, #06b6d4, #14b8a6);
  box-shadow: 0 20px 45px rgba(34,211,238,.35);
}

.outline {
  color: white;
  background: rgba(2,6,23,.65);
  border: 1px solid rgba(255,255,255,.2);
}

.features {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin-top: 24px;
  color: #cbd5e1;
  font-size: 15px;
}

.visual {
  height: 430px;
  position: relative;
  border-radius: 40px;
  display: grid;
  place-items: center;
  overflow: hidden;
  background:
    radial-gradient(circle at center, rgba(14,165,233,.45), transparent 38%),
    radial-gradient(circle at center, rgba(124,58,237,.22), transparent 55%);
}

.planet {
  font-size: 210px;
  filter: drop-shadow(0 0 38px #38bdf8);
  animation: float 4s ease-in-out infinite;
}

.orbit {
  position: absolute;
  width: 420px;
  height: 150px;
  border: 1px solid rgba(147,197,253,.55);
  border-radius: 50%;
  transform: rotate(-16deg);
  box-shadow: 0 0 35px rgba(34,211,238,.22);
}

.bubble {
  position: absolute;
  width: 74px;
  height: 74px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  font-size: 34px;
  background: rgba(15,23,42,.65);
  border: 1px solid rgba(255,255,255,.2);
  box-shadow: 0 0 35px rgba(34,211,238,.35);
}

.b1 { left: 80px; top: 135px; color: cyan; }
.b2 { right: 55px; top: 160px; }
.b3 { right: 75px; bottom: 65px; }
.b4 { right: 130px; top: 38px; }

.sectionTitle {
  margin: 38px 0 18px;
  font-size: 28px;
}

.serviceGrid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
}

.serviceCard {
  min-height: 132px;
  border-radius: 24px;
  padding: 22px;
  text-align: left;
  color: white;
  background: linear-gradient(145deg, rgba(15,23,42,.9), rgba(30,41,59,.65));
  border: 1px solid rgba(255,255,255,.14);
  position: relative;
  overflow: hidden;
  box-shadow: 0 20px 45px rgba(0,0,0,.25);
}

.serviceCard::before {
  content: "";
  position: absolute;
  inset: -1px;
  opacity: .23;
  background: radial-gradient(circle at 20% 20%, #22d3ee, transparent 35%);
}

.c1::before { background: radial-gradient(circle at 20% 20%, #22c55e, transparent 35%); }
.c2::before { background: radial-gradient(circle at 20% 20%, #a855f7, transparent 35%); }
.c3::before { background: radial-gradient(circle at 20% 20%, #38bdf8, transparent 35%); }
.c4::before { background: radial-gradient(circle at 20% 20%, #06b6d4, transparent 35%); }
.c5::before { background: radial-gradient(circle at 20% 20%, #e879f9, transparent 35%); }
.c6::before { background: radial-gradient(circle at 20% 20%, #f59e0b, transparent 35%); }
.c7::before { background: radial-gradient(circle at 20% 20%, #3b82f6, transparent 35%); }

.serviceIcon {
  font-size: 38px;
  margin-bottom: 14px;
}

.serviceCard strong {
  display: block;
  font-size: 18px;
}

.serviceCard small {
  display: block;
  color: #cbd5e1;
  margin-top: 7px;
}

.serviceCard em {
  position: absolute;
  right: 20px;
  bottom: 18px;
  color: #cbd5e1;
  font-style: normal;
  font-size: 24px;
}

.bottom {
  display: grid;
  grid-template-columns: 1.5fr .7fr .7fr;
  gap: 16px;
  margin-top: 24px;
}

.payment {
  display: flex;
  gap: 16px;
  padding: 20px;
  border-radius: 24px;
  background: rgba(37,99,235,.18);
  border: 1px solid rgba(59,130,246,.45);
  box-shadow: inset 0 0 28px rgba(37,99,235,.1);
}

.payment div {
  font-size: 42px;
}

.payment p {
  margin: 0;
  color: #dbeafe;
  line-height: 1.6;
}

.kakao,
.whatsapp {
  border: 0;
  border-radius: 22px;
  padding: 18px;
  font-size: 18px;
  font-weight: 900;
}

.kakao {
  background: linear-gradient(135deg, #fde047, #facc15);
  color: #111827;
}

.whatsapp {
  background: linear-gradient(135deg, #22c55e, #16a34a);
  color: white;
  display: grid;
  place-items: center;
}

.whatsapp small {
  display: block;
  margin-top: 5px;
}

footer {
  text-align: center;
  color: #64748b;
  margin: 30px 0;
}

.authPage {
  max-width: 620px;
  margin: 0 auto;
}

.authTop {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 18px;
}

.back {
  background: transparent;
  color: white;
  border: 0;
  font-size: 28px;
}

.authCard {
  padding: 38px;
  border-radius: 34px;
  text-align: center;
  background: rgba(15,23,42,.88);
  border: 1px solid rgba(255,255,255,.16);
  box-shadow: 0 35px 90px rgba(0,0,0,.45), inset 0 0 40px rgba(37,99,235,.08);
}

.authIcon {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin: 0 auto 18px;
  display: grid;
  place-items: center;
  font-size: 44px;
  background: radial-gradient(circle, #8b5cf6, #1e1b4b);
  box-shadow: 0 0 45px rgba(124,58,237,.6);
}

.authCard p {
  color: #cbd5e1;
}

.authCard input {
  width: 100%;
  padding: 17px;
  margin-top: 14px;
  border-radius: 16px;
  border: 1px solid rgba(255,255,255,.14);
  background: rgba(2,6,23,.75);
  color: white;
  font-size: 16px;
}

.check {
  display: flex;
  gap: 10px;
  margin-top: 16px;
  color: #cbd5e1;
  text-align: left;
  font-size: 14px;
}

.full {
  max-width: 100%;
}

.kakaoLine {
  width: 100%;
  padding: 17px;
  border-radius: 16px;
  margin-top: 14px;
  background: transparent;
  color: #fde047;
  border: 1px solid #fde047;
  font-size: 16px;
  font-weight: 900;
}

@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-12px); }
}

@media (max-width: 760px) {
  .container {
    padding: 16px 14px;
  }

  .header {
    gap: 12px;
    align-items: flex-start;
  }

  .brand b {
    font-size: 18px;
  }

  .hero {
    grid-template-columns: 1fr;
  }

  .visual {
    height: 240px;
  }

  .planet {
    font-size: 120px;
  }

  .orbit {
    width: 250px;
  }

  .bubble {
    width: 52px;
    height: 52px;
    font-size: 24px;
  }

  .serviceGrid {
    grid-template-columns: repeat(2, 1fr);
  }

  .bottom {
    grid-template-columns: 1fr;
  }

  .langs {
    transform: scale(.86);
    transform-origin: right top;
  }
}
`;
