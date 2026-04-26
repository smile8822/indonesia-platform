import React, { useState } from "react";

const WHATSAPP = "https://wa.me/821027378821";
const KAKAO = "http://pf.kakao.com/_cBDxgn/chat";

export default function App() {
  const [lang, setLang] = useState("KR");
  const [page, setPage] = useState("home");

  const T = {
    KR: {
      title: "SMILE AI Indonesia Platform",
      subtitle: "비자, 세관신고, 환전, 픽업, 차량, 숙소까지 한 번에 처리하는 AI 자동 신청 시스템",
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
      payment: "IDR 결제 수수료 없음 / KRW·USDT는 현지 통화 교환 지원 +1%",
      consult: "법인 설립 및 기타 문의는 메신저로 문의하세요.",
      signup: "회원가입",
      login: "로그인",
      name: "이름",
      email: "이메일",
      phone: "전화번호",
      password: "비밀번호",
      agree: "개인정보 수집 및 1년 보관 후 자동삭제에 동의합니다.",
      submit: "가입하고 시작하기",
      loginBtn: "로그인",
      kakao: "카카오톡 상담",
      whatsapp: "WhatsApp 상담"
    },
    ID: {
      title: "SMILE AI Indonesia Platform",
      subtitle: "Visa, e-Customs, exchange, pickup, rental mobil, dan akomodasi dalam satu sistem AI",
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
      payment: "Pembayaran IDR tanpa biaya / KRW·USDT +1%",
      consult: "Untuk pendirian perusahaan dan pertanyaan lain, hubungi messenger.",
      signup: "Daftar",
      login: "Login",
      name: "Nama",
      email: "Email",
      phone: "Nomor Telepon",
      password: "Password",
      agree: "Saya setuju data disimpan hingga 1 tahun lalu dihapus otomatis.",
      submit: "Daftar dan Mulai",
      loginBtn: "Login",
      kakao: "KakaoTalk",
      whatsapp: "WhatsApp"
    },
    EN: {
      title: "SMILE AI Indonesia Platform",
      subtitle: "AI-powered system for visa, customs, exchange, pickup, car rental, and accommodation",
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
      payment: "No fee for IDR / KRW·USDT includes +1% local currency support",
      consult: "For company setup and other inquiries, contact us via messenger.",
      signup: "Sign Up",
      login: "Login",
      name: "Name",
      email: "Email",
      phone: "Phone",
      password: "Password",
      agree: "I agree to data storage for up to 1 year and automatic deletion.",
      submit: "Sign Up and Start",
      loginBtn: "Login",
      kakao: "KakaoTalk",
      whatsapp: "WhatsApp"
    },
    CN: {
      title: "SMILE AI 印尼平台",
      subtitle: "签证、海关申报、换汇、接送、租车、住宿，一站式 AI 自动申请系统",
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
      payment: "IDR 无手续费 / KRW·USDT 含本地货币兑换支持 +1%",
      consult: "公司设立及其他问题请通过聊天工具咨询。",
      signup: "注册",
      login: "登录",
      name: "姓名",
      email: "电子邮件",
      phone: "电话号码",
      password: "密码",
      agree: "我同意资料最多保存1年后自动删除。",
      submit: "注册并开始",
      loginBtn: "登录",
      kakao: "KakaoTalk 咨询",
      whatsapp: "WhatsApp 咨询"
    }
  };

  const t = T[lang];

  const services = [
    ["🛂", t.visa, "Visa & Entry"],
    ["🧾", t.customs, "e-Customs"],
    ["💱", t.exchange, "Currency"],
    ["✈️", t.pickup, "Airport Pickup"],
    ["🚗", t.car, "Car Rental"],
    ["🏨", t.stay, "Accommodation"],
    ["🌏", t.long, "Long Stay"],
    ["📊", t.status, "Status"]
  ];

  return (
    <div style={s.app}>
      <div style={s.orb1}></div>
      <div style={s.orb2}></div>

      <main style={s.wrap}>
        <header style={s.header}>
          <div style={s.logoBox}>
            <div style={s.logo}>AI</div>
            <div>
              <div style={s.logoText}>SMILE AI</div>
              <div style={s.logoSub}>INDONESIA PLATFORM</div>
            </div>
          </div>

          <div style={s.langs}>
            {["KR", "ID", "EN", "CN"].map((x) => (
              <button
                key={x}
                onClick={() => setLang(x)}
                style={lang === x ? s.langOn : s.lang}
              >
                {x}
              </button>
            ))}
          </div>
        </header>

        {page === "home" && (
          <>
            <section style={s.hero}>
              <div style={s.heroLeft}>
                <div style={s.badge}>⚙ AI OPERATED PLATFORM</div>
                <h1 style={s.title}>{t.title}</h1>
                <p style={s.sub}>{t.subtitle}</p>

                <button style={s.primary} onClick={() => setPage("signup")}>
                  🛂 {t.start} →
                </button>

                <button style={s.secondary} onClick={() => setPage("login")}>
                  👤 {t.auth} →
                </button>

                <div style={s.features}>
                  <span>⚙ AI 자동 처리</span>
                  <span>🛡 안전한 결제</span>
                  <span>🔔 실시간 알림</span>
                  <span>🎧 전문 지원</span>
                </div>
              </div>

              <div style={s.heroRight}>
                <div style={s.globe}>🌐</div>
                <div style={s.floatA}>🛂</div>
                <div style={s.floatB}>🚗</div>
                <div style={s.floatC}>💱</div>
                <div style={s.ring}></div>
              </div>
            </section>

            <h2 style={s.sectionTitle}>✦ {t.services}</h2>

            <section style={s.grid}>
              {services.map((item, i) => (
                <button key={i} style={s.card}>
                  <div style={s.cardIcon}>{item[0]}</div>
                  <div style={s.cardTitle}>{item[1]}</div>
                  <div style={s.cardSub}>{item[2]}</div>
                  <div style={s.arrow}>→</div>
                </button>
              ))}
            </section>

            <section style={s.bottom}>
              <div style={s.pay}>
                <div style={s.shield}>🛡</div>
                <div>
                  <b>{t.payment}</b>
                  <p>안전하고 투명한 결제 시스템을 제공합니다.</p>
                </div>
              </div>

              <button style={s.kakao} onClick={() => window.open(KAKAO, "_blank")}>
                💬 {t.kakao}
              </button>

              <button style={s.whatsapp} onClick={() => window.open(WHATSAPP, "_blank")}>
                🟢 {t.whatsapp}
                <small>+82 10-2737-8821</small>
              </button>
            </section>

            <p style={s.consult}>{t.consult}</p>
            <footer style={s.footer}>© 2026 SMILE AI Indonesia Platform</footer>
          </>
        )}

        {page === "signup" && (
          <AuthBox
            type="signup"
            t={t}
            lang={lang}
            setLang={setLang}
            setPage={setPage}
          />
        )}

        {page === "login" && (
          <AuthBox
            type="login"
            t={t}
            lang={lang}
            setLang={setLang}
            setPage={setPage}
          />
        )}
      </main>
    </div>
  );
}

function AuthBox({ type, t, lang, setLang, setPage }) {
  return (
    <section style={s.authWrap}>
      <div style={s.authTop}>
        <button style={s.back} onClick={() => setPage("home")}>←</button>
        <div style={s.langs}>
          {["KR", "ID", "EN", "CN"].map((x) => (
            <button
              key={x}
              onClick={() => setLang(x)}
              style={lang === x ? s.langOn : s.lang}
            >
              {x}
            </button>
          ))}
        </div>
      </div>

      <div style={s.authCard}>
        <div style={s.authIcon}>{type === "signup" ? "👤" : "🔐"}</div>
        <h1>{type === "signup" ? t.signup : t.login}</h1>
        <p style={s.authSub}>SMILE AI 플랫폼의 모든 서비스를 이용해보세요.</p>

        {type === "signup" && <input style={s.input} placeholder={t.name} />}
        <input style={s.input} placeholder={t.email} />
        {type === "signup" && <input style={s.input} placeholder={t.phone} />}
        {type === "login" && <input style={s.input} placeholder={t.password} type="password" />}

        {type === "signup" && (
          <label style={s.check}>
            <input type="checkbox" />
            <span>{t.agree}</span>
          </label>
        )}

        <button
          style={s.primary}
          onClick={() =>
            window.open(
              WHATSAPP + "?text=" + encodeURIComponent("SMILE AI 서비스 신청 문의합니다."),
              "_blank"
            )
          }
        >
          {type === "signup" ? t.submit : t.loginBtn} →
        </button>

        <button style={s.kakaoOutline} onClick={() => window.open(KAKAO, "_blank")}>
          💬 카카오톡으로 문의
        </button>

        <p style={s.switchText}>
          {type === "signup" ? "이미 계정이 있으신가요?" : "계정이 없으신가요?"}{" "}
          <button
            style={s.linkBtn}
            onClick={() => setPage(type === "signup" ? "login" : "signup")}
          >
            {type === "signup" ? t.login : t.signup}
          </button>
        </p>
      </div>
    </section>
  );
}

const s = {
  app: {
    minHeight: "100vh",
    background: "radial-gradient(circle at 70% 10%, #123b7a 0%, #020617 38%, #000 100%)",
    color: "white",
    fontFamily: "Arial, sans-serif",
    position: "relative",
    overflowX: "hidden"
  },
  orb1: {
    position: "fixed",
    width: 360,
    height: 360,
    right: -120,
    top: -120,
    borderRadius: "50%",
    background: "rgba(34,211,238,.23)",
    filter: "blur(80px)"
  },
  orb2: {
    position: "fixed",
    width: 360,
    height: 360,
    left: -120,
    bottom: -120,
    borderRadius: "50%",
    background: "rgba(147,51,234,.25)",
    filter: "blur(90px)"
  },
  wrap: {
    width: "min(1180px, 100%)",
    margin: "0 auto",
    padding: "26px 18px",
    position: "relative",
    zIndex: 2
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottom: "1px solid rgba(255,255,255,.08)",
    paddingBottom: 18,
    marginBottom: 28
  },
  logoBox: { display: "flex", alignItems: "center", gap: 12 },
  logo: {
    width: 50,
    height: 50,
    borderRadius: "50%",
    display: "grid",
    placeItems: "center",
    fontWeight: 900,
    background: "linear-gradient(135deg,#2563eb,#22d3ee,#7c3aed)",
    boxShadow: "0 0 30px rgba(34,211,238,.55)"
  },
  logoText: { fontSize: 22, fontWeight: 900 },
  logoSub: { color: "#cbd5e1", fontSize: 12 },
  langs: { display: "flex", gap: 8 },
  lang: {
    padding: "9px 15px",
    borderRadius: 14,
    background: "rgba(15,23,42,.8)",
    color: "#cbd5e1",
    border: "1px solid rgba(255,255,255,.12)",
    fontWeight: 800
  },
  langOn: {
    padding: "9px 18px",
    borderRadius: 14,
    background: "linear-gradient(90deg,#2563eb,#22d3ee)",
    color: "white",
    border: "1px solid rgba(255,255,255,.3)",
    fontWeight: 900
  },
  hero: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: 30,
    alignItems: "center"
  },
  heroLeft: { minWidth: 0 },
  badge: {
    display: "inline-block",
    padding: "9px 16px",
    borderRadius: 999,
    background: "rgba(34,211,238,.13)",
    color: "#22d3ee",
    fontSize: 13,
    fontWeight: 900,
    marginBottom: 18
  },
  title: {
    fontSize: "clamp(38px, 6vw, 64px)",
    lineHeight: 1.05,
    margin: "0 0 16px",
    background: "linear-gradient(90deg,#fff,#38bdf8,#c084fc)",
    WebkitBackgroundClip: "text",
    color: "transparent"
  },
  sub: { color: "#dbeafe", fontSize: 19, lineHeight: 1.6, maxWidth: 560 },
  primary: {
    width: "100%",
    maxWidth: 440,
    marginTop: 20,
    padding: "19px 24px",
    borderRadius: 18,
    border: "none",
    background: "linear-gradient(90deg,#2563eb,#06b6d4,#22c55e)",
    color: "white",
    fontSize: 18,
    fontWeight: 900,
    boxShadow: "0 18px 45px rgba(34,211,238,.28)"
  },
  secondary: {
    width: "100%",
    maxWidth: 440,
    marginTop: 14,
    padding: "18px 24px",
    borderRadius: 18,
    border: "1px solid rgba(255,255,255,.18)",
    background: "rgba(2,6,23,.72)",
    color: "white",
    fontSize: 18,
    fontWeight: 900
  },
  features: {
    display: "flex",
    flexWrap: "wrap",
    gap: 20,
    marginTop: 25,
    color: "#cbd5e1"
  },
  heroRight: {
    minHeight: 360,
    borderRadius: 36,
    position: "relative",
    display: "grid",
    placeItems: "center",
    background: "radial-gradient(circle,#0ea5e9 0%,#1e1b4b 36%,rgba(2,6,23,.1) 70%)"
  },
  globe: { fontSize: 160, filter: "drop-shadow(0 0 35px #38bdf8)" },
  ring: {
    position: "absolute",
    width: 360,
    height: 120,
    border: "1px solid rgba(34,211,238,.35)",
    borderRadius: "50%",
    transform: "rotate(-15deg)"
  },
  floatA: { position: "absolute", top: 45, right: 65, fontSize: 42 },
  floatB: { position: "absolute", left: 55, top: 120, fontSize: 42 },
  floatC: { position: "absolute", right: 55, bottom: 70, fontSize: 42 },
  sectionTitle: { fontSize: 28, margin: "36px 0 18px" },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: 16
  },
  card: {
    minHeight: 128,
    padding: 22,
    borderRadius: 24,
    textAlign: "left",
    color: "white",
    background: "linear-gradient(145deg,rgba(15,23,42,.92),rgba(30,41,59,.65))",
    border: "1px solid rgba(255,255,255,.12)",
    boxShadow: "0 18px 40px rgba(0,0,0,.25)",
    position: "relative"
  },
  cardIcon: { fontSize: 38, marginBottom: 14 },
  cardTitle: { fontSize: 18, fontWeight: 900 },
  cardSub: { color: "#cbd5e1", fontSize: 14, marginTop: 6 },
  arrow: { position: "absolute", right: 18, bottom: 18, color: "#94a3b8", fontSize: 22 },
  bottom: {
    display: "grid",
    gridTemplateColumns: "1.6fr .65fr .65fr",
    gap: 16,
    marginTop: 24
  },
  pay: {
    display: "flex",
    gap: 14,
    alignItems: "center",
    padding: 20,
    borderRadius: 24,
    background: "rgba(37,99,235,.16)",
    border: "1px solid rgba(59,130,246,.45)"
  },
  shield: { fontSize: 42 },
  kakao: {
    border: "none",
    borderRadius: 20,
    background: "#fde047",
    color: "#111827",
    fontWeight: 900,
    fontSize: 17
  },
  whatsapp: {
    border: "none",
    borderRadius: 20,
    background: "#22c55e",
    color: "white",
    fontWeight: 900,
    fontSize: 17,
    display: "grid",
    placeItems: "center"
  },
  consult: { color: "#cbd5e1", marginTop: 18 },
  footer: { textAlign: "center", color: "#64748b", margin: "28px 0" },
  authWrap: { maxWidth: 620, margin: "0 auto" },
  authTop: { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 18 },
  back: { background: "transparent", border: "none", color: "white", fontSize: 26 },
  authCard: {
    padding: 34,
    borderRadius: 34,
    background: "rgba(15,23,42,.88)",
    border: "1px solid rgba(255,255,255,.14)",
    boxShadow: "0 30px 90px rgba(0,0,0,.45)",
    textAlign: "center"
  },
  authIcon: {
    width: 96,
    height: 96,
    borderRadius: "50%",
    margin: "0 auto 18px",
    display: "grid",
    placeItems: "center",
    fontSize: 42,
    background: "radial-gradient(circle,#7c3aed,#1e1b4b)",
    boxShadow: "0 0 40px rgba(124,58,237,.55)"
  },
  authSub: { color: "#cbd5e1" },
  input: {
    width: "100%",
    boxSizing: "border-box",
    marginTop: 14,
    padding: 17,
    borderRadius: 16,
    border: "1px solid rgba(255,255,255,.12)",
    background: "rgba(2,6,23,.75)",
    color: "white",
    fontSize: 16
  },
  check: {
    marginTop: 16,
    display: "flex",
    gap: 10,
    textAlign: "left",
    color: "#cbd5e1",
    fontSize: 14
  },
  kakaoOutline: {
    width: "100%",
    padding: 16,
    marginTop: 14,
    borderRadius: 16,
    background: "transparent",
    color: "#fde047",
    border: "1px solid #fde047",
    fontWeight: 900,
    fontSize: 16
  },
  switchText: { color: "#cbd5e1", marginTop: 18 },
  linkBtn: { background: "none", border: "none", color: "#38bdf8", fontWeight: 900 }
};
