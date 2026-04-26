import React, { useState } from "react";

const WHATSAPP = "https://wa.me/821027378821";
const KAKAO = "http://pf.kakao.com/_cBDxgn/chat";

export default function App() {
  const [page, setPage] = useState("home");

  return (
    <>
      <style>{css}</style>

      <div className="app">
        <div className="glow g1"></div>
        <div className="glow g2"></div>

        <div className="container">
          {page === "home" && <Home setPage={setPage} />}
          {page === "login" && <Login setPage={setPage} />}
          {page === "signup" && <Signup setPage={setPage} />}
        </div>
      </div>
    </>
  );
}

/* ===================== HOME ===================== */

function Home({ setPage }) {
  return (
    <>
      <header className="header">
        <div className="logoBox">
          <div className="logo">Ai</div>
          <div>
            <b>SMILE AI</b>
            <span>INDONESIA PLATFORM</span>
          </div>
        </div>

        <div className="lang">
          <button>KR</button>
          <button>ID</button>
          <button>EN</button>
          <button>CN</button>
        </div>
      </header>

      <section className="hero">
        <div className="heroLeft">
          <div className="badge">AI OPERATED PLATFORM</div>

          <h1>
            SMILE AI <br />
            <span>Indonesia Platform</span>
          </h1>

          <p>
            비자, 세관신고, 환전, 픽업, 차량, 숙소까지
            <br />
            한 번에 처리하는 AI 자동 신청 시스템
          </p>

          <button className="primary" onClick={() => setPage("signup")}>
            여권으로 시작하기 →
          </button>

          <button className="outline" onClick={() => setPage("login")}>
            회원가입 / 로그인 →
          </button>
        </div>

        <div className="heroRight">
          <div className="planet"></div>
        </div>
      </section>

      <h2 className="title">서비스 바로가기</h2>

      <div className="grid">
        {[
          "비자 / 입국 준비",
          "세관 신고",
          "화폐 교환",
          "공항 픽업",
          "차량 렌탈",
          "숙소 신청",
          "장기체류",
          "상태 조회",
        ].map((x, i) => (
          <div key={i} className="card">
            {x}
          </div>
        ))}
      </div>

      <div className="bottom">
        <button onClick={() => window.open(KAKAO)}>카카오 상담</button>
        <button onClick={() => window.open(WHATSAPP)}>
          WhatsApp 상담
        </button>
      </div>
    </>
  );
}

/* ===================== LOGIN ===================== */

function Login({ setPage }) {
  return (
    <div className="auth">
      <button className="back" onClick={() => setPage("home")}>
        ←
      </button>

      <div className="box">
        <h1>로그인</h1>

        <input placeholder="이메일" />
        <input placeholder="비밀번호" type="password" />

        <button className="primary full">로그인 →</button>

        <button onClick={() => window.open(KAKAO)}>카카오 문의</button>
      </div>
    </div>
  );
}

/* ===================== SIGNUP ===================== */

function Signup({ setPage }) {
  return (
    <div className="auth">
      <button className="back" onClick={() => setPage("home")}>
        ←
      </button>

      <div className="box">
        <h1>회원가입</h1>

        <input placeholder="이름" />
        <input placeholder="이메일" />
        <input placeholder="전화번호" />

        <button className="primary full">가입하고 시작하기 →</button>

        <button onClick={() => window.open(KAKAO)}>카카오 문의</button>
      </div>
    </div>
  );
}

/* ===================== CSS ===================== */

const css = `
body{
  margin:0;
  background:#020617;
  font-family:sans-serif;
}

.app{
  min-height:100vh;
  color:white;
  background:
    radial-gradient(circle at 80% 10%, #2563eb33, transparent),
    radial-gradient(circle at 20% 90%, #9333ea33, transparent),
    #020617;
}

.container{
  max-width:1200px;
  margin:auto;
  padding:20px;
}

/* header */
.header{
  display:flex;
  justify-content:space-between;
  align-items:center;
  margin-bottom:40px;
}

.logoBox{
  display:flex;
  gap:10px;
}

.logo{
  width:50px;
  height:50px;
  border-radius:50%;
  display:flex;
  align-items:center;
  justify-content:center;
  background:linear-gradient(45deg,#2563eb,#00e5ff);
}

.lang button{
  margin-left:5px;
}

/* hero */
.hero{
  display:grid;
  grid-template-columns:1fr 1fr;
  gap:40px;
}

.heroLeft h1{
  font-size:50px;
}

.heroLeft span{
  color:#00e5ff;
}

.primary{
  background:linear-gradient(90deg,#2563eb,#00e5ff);
  border:none;
  padding:15px;
  margin-top:10px;
  border-radius:10px;
  width:100%;
}

.outline{
  border:1px solid #00e5ff;
  background:transparent;
  padding:15px;
  margin-top:10px;
  width:100%;
}

.heroRight{
  display:flex;
  justify-content:center;
  align-items:center;
}

/* glowing planet */
.planet{
  width:250px;
  height:250px;
  border-radius:50%;
  background:radial-gradient(circle,#00e5ff,#2563eb);
  box-shadow:0 0 60px #00e5ff;
}

/* grid */
.grid{
  display:grid;
  grid-template-columns:repeat(4,1fr);
  gap:15px;
  margin-top:30px;
}

.card{
  padding:20px;
  border-radius:20px;
  border:1px solid #00e5ff55;
  background:#111;
  box-shadow:0 0 15px #00e5ff22;
}

/* bottom */
.bottom{
  margin-top:30px;
  display:flex;
  gap:10px;
}

.bottom button{
  flex:1;
  padding:15px;
}

/* auth */
.auth{
  max-width:400px;
  margin:auto;
}

.box{
  padding:30px;
  border-radius:20px;
  background:#111;
}

.box input{
  width:100%;
  margin-top:10px;
  padding:10px;
}

.full{
  width:100%;
}

.back{
  margin-bottom:10px;
}

/* 반응형 (핵심) */
@media (max-width:900px){
  .hero{
    grid-template-columns:1fr;
  }
  .grid{
    grid-template-columns:repeat(2,1fr);
  }
}
`;
