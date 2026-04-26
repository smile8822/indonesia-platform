import React, { useState } from "react";

const WHATSAPP = "https://wa.me/821027378821";
const KAKAO = "http://pf.kakao.com/_cBDxgn/chat";

export default function App() {
  const [lang, setLang] = useState("KR");
  const [page, setPage] = useState("home");

  const T = {
    KR: {
      title: "SMILE AI Indonesia Platform",
      sub: "AI가 도와주는 인도네시아 입국·비자·환전·차량·숙소 통합 플랫폼",
      start: "여권으로 시작하기",
      login: "회원가입 / 로그인",
      visa: "비자 / 입국 준비",
      customs: "세관 신고",
      exchange: "화폐 교환",
      pickup: "공항 픽업",
      rental: "차량 렌탈",
      stay: "숙소 신청",
      long: "장기체류 패키지",
      status: "진행상황 조회",
      kakao: "카카오톡 상담",
      whatsapp: "WhatsApp 상담",
      company: "법인 설립 및 기타 문의는 메신저로 문의하세요.",
      ai: "AI 자동 신청 시스템",
      desc: "여권 업로드, 증명사진 생성, 비자 선택, 결제, 진행상황 알림까지 한 번에 처리합니다.",
      payment: "IDR 결제는 수수료 없음 / KRW·USDT는 현지 통화 교환 지원 +1%",
      signupTitle: "회원가입",
      name: "이름",
      email: "이메일",
      phone: "전화번호",
      agree: "개인정보 수집 및 1년 보관 후 자동삭제에 동의합니다.",
      submit: "가입하고 시작하기"
    },
    ID: {
      title: "SMILE AI Indonesia Platform",
      sub: "Platform AI untuk visa, e-Customs, exchange, mobil, pickup, dan akomodasi",
      start: "Mulai dengan Paspor",
      login: "Daftar / Login",
      visa: "Visa / Persiapan Masuk",
      customs: "e-Customs",
      exchange: "Penukaran Uang",
      pickup: "Pickup Bandara",
      rental: "Rental Mobil",
      stay: "Akomodasi",
      long: "Paket Long Stay",
      status: "Cek Status",
      kakao: "KakaoTalk",
      whatsapp: "WhatsApp",
      company: "Untuk pendirian perusahaan dan pertanyaan khusus, hubungi kami via messenger.",
      ai: "Sistem Aplikasi Otomatis AI",
      desc: "Unggah paspor, buat foto, pilih visa, bayar, dan pantau status dalam satu platform.",
      payment: "Pembayaran IDR tanpa biaya / KRW·USDT termasuk dukungan konversi IDR +1%",
      signupTitle: "Daftar",
      name: "Nama",
      email: "Email",
      phone: "Nomor Telepon",
      agree: "Saya setuju data disimpan hingga 1 tahun lalu dihapus otomatis.",
      submit: "Daftar dan Mulai"
    },
    EN: {
      title: "SMILE AI Indonesia Platform",
      sub: "AI-powered platform for visa, customs, exchange, rental, pickup, and accommodation",
      start: "Start with Passport",
      login: "Sign up / Login",
      visa: "Visa / Entry",
      customs: "Customs Declaration",
      exchange: "Currency Exchange",
      pickup: "Airport Pickup",
      rental: "Car Rental",
      stay: "Accommodation",
      long: "Long Stay Package",
      status: "Check Status",
      kakao: "KakaoTalk",
      whatsapp: "WhatsApp",
      company: "For company setup and other inquiries, please contact us via messenger.",
      ai: "AI Automated Application System",
      desc: "Upload passport, generate photo, choose visa, pay, and track progress in one platform.",
      payment: "IDR payment has no fee / KRW·USDT include local currency support +1%",
      signupTitle: "Sign Up",
      name: "Name",
      email: "Email",
      phone: "Phone",
      agree: "I agree to data storage for up to 1 year and automatic deletion.",
      submit: "Sign Up and Start"
    },
    CN: {
      title: "SMILE AI 印尼平台",
      sub: "AI 驱动的签证、海关、换汇、租车、接送和住宿平台",
      start: "用护照开始",
      login: "注册 / 登录",
      visa: "签证 / 入境准备",
      customs: "海关申报",
      exchange: "货币兑换",
      pickup: "机场接送",
      rental: "车辆租赁",
      stay: "住宿申请",
      long: "长期居留套餐",
      status: "查询进度",
      kakao: "KakaoTalk 咨询",
      whatsapp: "WhatsApp 咨询",
      company: "公司设立及其他咨询请通过聊天工具联系我们。",
      ai: "AI 自动申请系统",
      desc: "上传护照、生成照片、选择签证、付款、查看进度，一站完成。",
      payment: "IDR 付款无手续费 / KRW·USDT 包含本地货币兑换支持 +1%",
      signupTitle: "注册",
      name: "姓名",
      email: "电子邮件",
      phone: "电话号码",
      agree: "我同意资料最多保存1年后自动删除。",
      submit: "注册并开始"
    }
  };

  const t = T[lang];

  const services = [
    ["🛂", t.visa],
    ["🧾", t.customs],
    ["💱", t.exchange],
    ["✈️", t.pickup],
    ["🚗", t.rental],
    ["🏨", t.stay],
    ["🌏", t.long],
    ["📊", t.status]
  ];

  return (
    <div style={styles.app}>
      <div style={styles.phone}>
        <div style={styles.langs}>
          {["KR", "ID", "EN", "CN"].map((l) => (
            <button
              key={l}
              onClick={() => setLang(l)}
              style={lang === l ? styles.langActive : styles.lang}
            >
              {l}
            </button>
          ))}
        </div>

        {page === "home" && (
          <>
            <section style={styles.hero}>
              <div style={styles.badge}>AI OPERATED PLATFORM</div>
              <h1 style={styles.title}>{t.title}</h1>
              <p style={styles.sub}>{t.sub}</p>

              <button style={styles.mainBtn} onClick={() => setPage("signup")}>
                {t.start}
              </button>

              <button style={styles.darkBtn} onClick={() => setPage("signup")}>
                {t.login}
              </button>
            </section>

            <section style={styles.aiBox}>
              <h2>{t.ai}</h2>
              <p>{t.desc}</p>
            </section>

            <div style={styles.grid}>
              {services.map((s, i) => (
                <button key={i} style={styles.card}>
                  <div style={styles.icon}>{s[0]}</div>
                  <div>{s[1]}</div>
                </button>
              ))}
            </div>

            <section style={styles.notice}>
              <p>{t.payment}</p>
            </section>

            <section style={styles.consult}>
              <p>{t.company}</p>
              <div style={styles.two}>
                <button onClick={() => window.open(KAKAO, "_blank")}>
                  {t.kakao}
                </button>
                <button onClick={() => window.open(WHATSAPP, "_blank")}>
                  {t.whatsapp}
                </button>
              </div>
            </section>
          </>
        )}

        {page === "signup" && (
          <section style={styles.signup}>
            <button style={styles.back} onClick={() => setPage("home")}>
              ←
            </button>
            <h1>{t.signupTitle}</h1>

            <input style={styles.input} placeholder={t.name} />
            <input style={styles.input} placeholder={t.email} />
            <input style={styles.input} placeholder={t.phone} />

            <label style={styles.check}>
              <input type="checkbox" />
              <span>{t.agree}</span>
            </label>

            <button
              style={styles.mainBtn}
              onClick={() =>
                window.open(
                  WHATSAPP +
                    "?text=" +
                    encodeURIComponent("회원가입 후 서비스 신청 문의합니다."),
                  "_blank"
                )
              }
            >
              {t.submit}
            </button>
          </section>
        )}
      </div>
    </div>
  );
}

const styles = {
  app: {
    minHeight: "100vh",
    background:
      "radial-gradient(circle at top, #1e3a8a 0%, #020617 45%, #000 100%)",
    color: "#fff",
    fontFamily: "Arial, sans-serif",
    display: "flex",
    justifyContent: "center"
  },
  phone: {
    width: "100%",
    maxWidth: "430px",
    padding: "18px"
  },
  langs: {
    display: "flex",
    gap: "8px",
    marginBottom: "18px"
  },
  lang: {
    background: "#0f172a",
    color: "#94a3b8",
    border: "1px solid #334155",
    borderRadius: "999px",
    padding: "7px 12px"
  },
  langActive: {
    background: "#fff",
    color: "#020617",
    border: "1px solid #fff",
    borderRadius: "999px",
    padding: "7px 12px",
    fontWeight: "bold"
  },
  hero: {
    padding: "24px",
    borderRadius: "30px",
    background:
      "linear-gradient(145deg, rgba(255,255,255,0.12), rgba(255,255,255,0.04))",
    border: "1px solid rgba(255,255,255,0.18)",
    boxShadow: "0 20px 60px rgba(0,0,0,0.45)"
  },
  badge: {
    fontSize: "11px",
    color: "#93c5fd",
    letterSpacing: "1px",
    marginBottom: "14px"
  },
  title: {
    fontSize: "30px",
    lineHeight: "1.15",
    margin: "0 0 12px"
  },
  sub: {
    color: "#cbd5e1",
    lineHeight: "1.6",
    fontSize: "14px"
  },
  mainBtn: {
    width: "100%",
    padding: "16px",
    borderRadius: "18px",
    border: "none",
    background: "linear-gradient(90deg, #38bdf8, #22c55e)",
    color: "#020617",
    fontWeight: "bold",
    marginTop: "14px",
    fontSize: "15px"
  },
  darkBtn: {
    width: "100%",
    padding: "15px",
    borderRadius: "18px",
    border: "1px solid #334155",
    background: "#020617",
    color: "#fff",
    marginTop: "10px"
  },
  aiBox: {
    marginTop: "16px",
    padding: "18px",
    borderRadius: "24px",
    background: "rgba(15,23,42,0.85)",
    border: "1px solid #334155"
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "12px",
    marginTop: "16px"
  },
  card: {
    minHeight: "105px",
    borderRadius: "22px",
    background: "rgba(15,23,42,0.9)",
    color: "white",
    border: "1px solid #334155",
    padding: "14px",
    textAlign: "left",
    fontWeight: "bold"
  },
  icon: {
    fontSize: "26px",
    marginBottom: "12px"
  },
  notice: {
    marginTop: "16px",
    padding: "16px",
    borderRadius: "22px",
    background: "rgba(34,197,94,0.12)",
    border: "1px solid rgba(34,197,94,0.35)",
    color: "#bbf7d0",
    fontSize: "13px",
    lineHeight: "1.5"
  },
  consult: {
    marginTop: "16px",
    padding: "16px",
    borderRadius: "22px",
    background: "rgba(255,255,255,0.06)",
    border: "1px solid #334155",
    fontSize: "13px",
    lineHeight: "1.5"
  },
  two: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "10px",
    marginTop: "12px"
  },
  signup: {
    padding: "22px",
    borderRadius: "28px",
    background: "rgba(15,23,42,0.95)",
    border: "1px solid #334155"
  },
  back: {
    background: "transparent",
    color: "white",
    border: "none",
    fontSize: "24px"
  },
  input: {
    width: "100%",
    padding: "15px",
    marginTop: "12px",
    borderRadius: "16px",
    border: "1px solid #334155",
    background: "#020617",
    color: "white",
    boxSizing: "border-box"
  },
  check: {
    display: "flex",
    gap: "10px",
    marginTop: "14px",
    color: "#cbd5e1",
    fontSize: "13px",
    lineHeight: "1.5"
  }
};
