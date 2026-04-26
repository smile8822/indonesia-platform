import React, { useState } from "react";

const WHATSAPP = "https://wa.me/821027378821";
const KAKAO = "http://pf.kakao.com/_cBDxgn/chat";

export default function App() {
  const [lang, setLang] = useState("KR");
  const [page, setPage] = useState("home");

  const T = {
    KR: {
      hero: "AI가 운영하는 인도네시아 통합 플랫폼",
      title: "SMILE AI Indonesia Platform",
      sub: "비자, 세관신고, 환전, 픽업, 차량, 숙소까지 한 번에 처리하는 AI 자동 신청 시스템",
      start: "여권으로 시작하기",
      login: "회원가입 / 로그인",
      services: "서비스 바로가기",
      payment: "IDR 결제 수수료 없음 / KRW·USDT는 현지 통화 교환 지원 +1%",
      consult: "법인 설립 및 기타 문의는 메신저로 문의하세요.",
      signup: "회원가입",
      name: "이름",
      email: "이메일",
      phone: "전화번호",
      agree: "개인정보 수집 및 1년 보관 후 자동삭제에 동의합니다.",
      submit: "가입하고 시작하기",
      back: "돌아가기"
    },
    ID: {
      hero: "Platform Indonesia yang Dioperasikan AI",
      title: "SMILE AI Indonesia Platform",
      sub: "Visa, e-Customs, exchange, pickup, rental mobil, dan akomodasi dalam satu sistem AI",
      start: "Mulai dengan Paspor",
      login: "Daftar / Login",
      services: "Layanan",
      payment: "Pembayaran IDR tanpa biaya / KRW·USDT +1% dukungan konversi",
      consult: "Untuk pendirian perusahaan dan pertanyaan lain, hubungi messenger.",
      signup: "Daftar",
      name: "Nama",
      email: "Email",
      phone: "Nomor Telepon",
      agree: "Saya setuju data disimpan hingga 1 tahun lalu dihapus otomatis.",
      submit: "Daftar dan Mulai",
      back: "Kembali"
    },
    EN: {
      hero: "AI-operated Indonesia service platform",
      title: "SMILE AI Indonesia Platform",
      sub: "Visa, customs, exchange, pickup, car rental, and accommodation in one AI-powered system",
      start: "Start with Passport",
      login: "Sign up / Login",
      services: "Services",
      payment: "No fee for IDR / KRW·USDT includes +1% local currency support",
      consult: "For company setup and other inquiries, contact us via messenger.",
      signup: "Sign Up",
      name: "Name",
      email: "Email",
      phone: "Phone",
      agree: "I agree to data storage for up to 1 year and automatic deletion.",
      submit: "Sign Up and Start",
      back: "Back"
    },
    CN: {
      hero: "AI 运营的印尼综合服务平台",
      title: "SMILE AI 印尼平台",
      sub: "签证、海关申报、换汇、接送、租车、住宿，一站式 AI 自动申请系统",
      start: "用护照开始",
      login: "注册 / 登录",
      services: "服务入口",
      payment: "IDR 无手续费 / KRW·USDT 含本地货币兑换支持 +1%",
      consult: "公司设立及其他问题请通过聊天工具咨询。",
      signup: "注册",
      name: "姓名",
      email: "电子邮件",
      phone: "电话号码",
      agree: "我同意资料最多保存1年后自动删除。",
      submit: "注册并开始",
      back: "返回"
    }
  };

  const t = T[lang];

  const services = [
    ["🛂", "비자 / 입국 준비", "Visa & Entry"],
    ["🧾", "세관 신고", "e-Customs"],
    ["💱", "화폐 교환", "Currency"],
    ["✈️", "공항 픽업", "Airport Pickup"],
    ["🚗", "차량 렌탈", "Car Rental"],
    ["🏨", "숙소 신청", "Accommodation"],
    ["🌏", "장기체류 패키지", "Long Stay"],
    ["📊", "진행상황 조회", "Status"]
  ];

  return (
    <div style={s.app}>
      <div style={s.bgOrb1}></div>
      <div style={s.bgOrb2}></div>

      <main style={s.phone}>
        <header style={s.header}>
          <div style={s.logoWrap}>
            <div style={s.logo}>AI</div>
            <div>
              <b>SMILE AI</b>
              <p style={s.logoSub}>INDONESIA PLATFORM</p>
            </div>
          </div>

          <div style={s.langs}>
            {["KR", "ID", "EN", "CN"].map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                style={lang === l ? s.langOn : s.lang}
              >
                {l}
              </button>
            ))}
          </div>
        </header>

        {page === "home" ? (
          <>
            <section style={s.hero}>
              <div style={s.badge}>AI OPERATED PLATFORM</div>
              <h1 style={s.title}>{t.title}</h1>
              <p style={s.heroText}>{t.sub}</p>

              <div style={s.globe}>
                <div style={s.globeInner}>🌐</div>
                <span style={s.float1}>🛂</span>
                <span style={s.float2}>🚗</span>
                <span style={s.float3}>💱</span>
              </div>

              <button style={s.primary} onClick={() => setPage("signup")}>
                {t.start} →
              </button>
              <button style={s.secondary} onClick={() => setPage("signup")}>
                {t.login} →
              </button>
            </section>

            <section style={s.aiCard}>
              <div style={s.aiIcon}>✦</div>
              <div>
                <h3 style={s.aiTitle}>{t.hero}</h3>
                <p style={s.aiText}>
                  여권 업로드, 증명사진 생성, 비자 선택, 결제, 진행상황 알림까지 자동화합니다.
                </p>
              </div>
            </section>

            <h2 style={s.sectionTitle}>{t.services}</h2>

            <div style={s.grid}>
              {services.map((x, i) => (
                <button key={i} style={s.service}>
                  <div style={s.icon}>{x[0]}</div>
                  <b>{x[1]}</b>
                  <p>{x[2]}</p>
                </button>
              ))}
            </div>

            <section style={s.payment}>
              <div style={s.shield}>🛡️</div>
              <div>
                <b>{t.payment}</b>
                <p>안전한 결제와 현지 정산을 지원합니다.</p>
              </div>
            </section>

            <section style={s.consult}>
              <h3>상담 및 문의</h3>
              <p>{t.consult}</p>

              <div style={s.two}>
                <button style={s.kakao} onClick={() => window.open(KAKAO, "_blank")}>
                  💬 카카오톡 상담
                </button>
                <button style={s.whatsapp} onClick={() => window.open(WHATSAPP, "_blank")}>
                  🟢 WhatsApp 상담
                </button>
              </div>
            </section>

            <footer style={s.footer}>© 2026 SMILE AI Indonesia Platform</footer>
          </>
        ) : (
          <section style={s.signup}>
            <button style={s.back} onClick={() => setPage("home")}>← {t.back}</button>

            <div style={s.signupIcon}>👤</div>
            <h1>{t.signup}</h1>
            <p style={s.heroText}>SMILE AI 플랫폼의 모든 서비스를 이용해보세요.</p>

            <input style={s.input} placeholder={t.name} />
            <input style={s.input} placeholder={t.email} />
            <input style={s.input} placeholder={t.phone} />

            <label style={s.check}>
              <input type="checkbox" />
              <span>{t.agree}</span>
            </label>

            <button
              style={s.primary}
              onClick={() =>
                window.open(
                  WHATSAPP + "?text=" + encodeURIComponent("회원가입 후 서비스 신청 문의합니다."),
                  "_blank"
                )
              }
            >
              {t.submit} →
            </button>

            <button style={s.secondary} onClick={() => window.open(KAKAO, "_blank")}>
              카카오톡으로 문의
            </button>
          </section>
        )}
      </main>
    </div>
  );
}

const s = {
  app: {
    minHeight: "100vh",
    background: "#020617",
    color: "white",
    fontFamily: "Arial, sans-serif",
    display: "flex",
    justifyContent: "center",
    position: "relative",
    overflow: "hidden"
  },
  bgOrb1: {
    position: "fixed",
    top: "-120px",
    right: "-120px",
    width: "300px",
    height: "300px",
    borderRadius: "50%",
    background: "rgba(34,211,238,0.25)",
    filter: "blur(70px)"
  },
  bgOrb2: {
    position: "fixed",
    bottom: "-140px",
    left: "-100px",
    width: "320px",
    height: "320px",
    borderRadius: "50%",
    background: "rgba(124,58,237,0.28)",
    filter: "blur(80px)"
  },
  phone: {
    width: "100%",
    maxWidth: "430px",
    padding: "16px",
    position: "relative",
    zIndex: 2
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "18px"
  },
  logoWrap: { display: "flex", alignItems: "center", gap: "10px" },
  logo: {
    width: "42px",
    height: "42px",
    borderRadius: "14px",
    display: "grid",
    placeItems: "center",
    fontWeight: "bold",
    background: "linear-gradient(135deg,#38bdf8,#8b5cf6)",
    boxShadow: "0 0 30px rgba(56,189,248,.5)"
  },
  logoSub: { margin: 0, fontSize: "10px", color: "#94a3b8" },
  langs: { display: "flex", gap: "6px" },
  lang: {
    background: "rgba(15,23,42,.8)",
    color: "#94a3b8",
    border: "1px solid #334155",
    borderRadius: "999px",
    padding: "7px 10px",
    fontWeight: "bold"
  },
  langOn: {
    background: "linear-gradient(90deg,#2563eb,#22d3ee)",
    color: "white",
    border: "none",
    borderRadius: "999px",
    padding: "7px 12px",
    fontWeight: "bold"
  },
  hero: {
    border: "1px solid rgba(255,255,255,.14)",
    borderRadius: "30px",
    padding: "24px",
    background: "linear-gradient(145deg,rgba(15,23,42,.95),rgba(2,6,23,.8))",
    boxShadow: "0 30px 80px rgba(0,0,0,.5)"
  },
  badge: {
    display: "inline-block",
    padding: "8px 14px",
    borderRadius: "999px",
    background: "rgba(34,211,238,.13)",
    color: "#22d3ee",
    fontSize: "12px",
    fontWeight: "bold",
    marginBottom: "16px"
  },
  title: { fontSize: "34px", lineHeight: "1.1", margin: "0 0 12px" },
  heroText: { color: "#cbd5e1", lineHeight: "1.6", fontSize: "14px" },
  globe: {
    height: "150px",
    margin: "20px 0",
    borderRadius: "28px",
    background: "radial-gradient(circle,#0ea5e9 0%,#1e1b4b 35%,#020617 70%)",
    display: "grid",
    placeItems: "center",
    position: "relative",
    border: "1px solid rgba(255,255,255,.1)"
  },
  globeInner: { fontSize: "70px", filter: "drop-shadow(0 0 20px #38bdf8)" },
  float1: { position: "absolute", right: "36px", top: "28px", fontSize: "24px" },
  float2: { position: "absolute", right: "26px", bottom: "30px", fontSize: "24px" },
  float3: { position: "absolute", left: "36px", bottom: "28px", fontSize: "24px" },
  primary: {
    width: "100%",
    padding: "16px",
    borderRadius: "18px",
    border: "none",
    background: "linear-gradient(90deg,#2563eb,#22d3ee,#22c55e)",
    color: "white",
    fontSize: "16px",
    fontWeight: "bold",
    boxShadow: "0 12px 30px rgba(34,211,238,.25)",
    marginTop: "12px"
  },
  secondary: {
    width: "100%",
    padding: "15px",
    borderRadius: "18px",
    border: "1px solid #334155",
    background: "rgba(15,23,42,.8)",
    color: "white",
    fontSize: "15px",
    fontWeight: "bold",
    marginTop: "10px"
  },
  aiCard: {
    marginTop: "16px",
    padding: "18px",
    borderRadius: "24px",
    display: "flex",
    gap: "14px",
    background: "rgba(15,23,42,.85)",
    border: "1px solid #334155"
  },
  aiIcon: {
    width: "50px",
    height: "50px",
    borderRadius: "16px",
    display: "grid",
    placeItems: "center",
    background: "linear-gradient(135deg,#312e81,#06b6d4)",
    fontSize: "24px"
  },
  aiTitle: { margin: "0 0 6px" },
  aiText: { margin: 0, color: "#cbd5e1", fontSize: "13px", lineHeight: "1.5" },
  sectionTitle: { margin: "24px 0 12px", fontSize: "19px" },
  grid: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" },
  service: {
    minHeight: "118px",
    textAlign: "left",
    padding: "16px",
    borderRadius: "22px",
    color: "white",
    border: "1px solid rgba(255,255,255,.12)",
    background: "linear-gradient(145deg,rgba(15,23,42,.9),rgba(30,41,59,.75))"
  },
  icon: { fontSize: "28px", marginBottom: "12px" },
  payment: {
    marginTop: "18px",
    display: "flex",
    gap: "12px",
    padding: "17px",
    borderRadius: "24px",
    background: "rgba(34,197,94,.12)",
    border: "1px solid rgba(34,197,94,.35)",
    color: "#dcfce7",
    fontSize: "13px",
    lineHeight: "1.5"
  },
  shield: { fontSize: "28px" },
  consult: {
    marginTop: "16px",
    padding: "18px",
    borderRadius: "24px",
    background: "rgba(255,255,255,.06)",
    border: "1px solid #334155",
    color: "#cbd5e1",
    fontSize: "13px",
    lineHeight: "1.5"
  },
  two: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px", marginTop: "12px" },
  kakao: {
    padding: "15px",
    borderRadius: "16px",
    border: "none",
    background: "#fde047",
    color: "#111827",
    fontWeight: "bold"
  },
  whatsapp: {
    padding: "15px",
    borderRadius: "16px",
    border: "none",
    background: "#22c55e",
    color: "white",
    fontWeight: "bold"
  },
  footer: { textAlign: "center", color: "#64748b", fontSize: "12px", margin: "24px 0" },
  signup: {
    marginTop: "10px",
    padding: "24px",
    borderRadius: "30px",
    background: "rgba(15,23,42,.92)",
    border: "1px solid #334155"
  },
  back: { background: "none", border: "none", color: "white", fontSize: "15px", marginBottom: "16px" },
  signupIcon: {
    width: "84px",
    height: "84px",
    borderRadius: "50%",
    display: "grid",
    placeItems: "center",
    margin: "0 auto 18px",
    background: "radial-gradient(circle,#8b5cf6,#1e1b4b)",
    fontSize: "38px"
  },
  input: {
    width: "100%",
    boxSizing: "border-box",
    marginTop: "12px",
    padding: "15px",
    borderRadius: "16px",
    border: "1px solid #334155",
    background: "#020617",
    color: "white"
  },
  check: { display: "flex", gap: "10px", marginTop: "14px", color: "#cbd5e1", fontSize: "13px", lineHeight: "1.5" }
};
