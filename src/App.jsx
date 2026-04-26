import React, { useState } from "react";

const WHATSAPP = "https://wa.me/821027378821";
const KAKAO = "http://pf.kakao.com/_cBDxgn/chat";

const SERVICE_LIST = [
  ["visa", "🛂", "비자 / 입국 준비", "Visa & Entry"],
  ["customs", "🧾", "세관 신고", "e-Customs"],
  ["exchange", "💱", "화폐 교환", "Currency Exchange"],
  ["pickup", "✈️", "공항 픽업", "Airport Pickup"],
  ["rental", "🚗", "차량 렌탈", "Car Rental"],
  ["stay", "🏨", "숙소 신청", "Accommodation"],
  ["longstay", "🌏", "장기체류 패키지", "Long Stay"],
  ["status", "📊", "진행상황 조회", "Check Status"],
];

export default function App() {
  const [lang, setLang] = useState("KR");
  const [page, setPage] = useState("home");
  const [service, setService] = useState(null);

  const openService = (key) => {
    setService(key);
    setPage("service");
    window.scrollTo(0, 0);
  };

  return (
    <>
      <style>{css}</style>

      <div className="app">
        <div className="orb orbA" />
        <div className="orb orbB" />
        <div className="orb orbC" />

        <main className="shell">
          <Top lang={lang} setLang={setLang} setPage={setPage} />

          {page === "home" && <Home setPage={setPage} openService={openService} />}
          {page === "signup" && <Auth type="signup" setPage={setPage} />}
          {page === "login" && <Auth type="login" setPage={setPage} />}
          {page === "service" && <ServicePage service={service} setPage={setPage} />}
          {page === "mypage" && <MyPage setPage={setPage} />}
          {page === "payment" && <Payment setPage={setPage} />}
          {page === "admin" && <Admin setPage={setPage} />}
        </main>
      </div>
    </>
  );
}

function Top({ lang, setLang, setPage }) {
  return (
    <header className="top">
      <button className="brand" onClick={() => setPage("home")}>
        <div className="brandLogo">Ai</div>
        <div>
          <strong>SMILE AI</strong>
          <span>INDONESIA PLATFORM</span>
        </div>
      </button>

      <div className="langs">
        {["KR", "ID", "EN", "CN"].map((x) => (
          <button
            key={x}
            onClick={() => setLang(x)}
            className={lang === x ? "on" : ""}
          >
            {x}
          </button>
        ))}
      </div>
    </header>
  );
}

function Home({ setPage, openService }) {
  return (
    <>
      <section className="heroPanel">
        <div className="heroText">
          <div className="badge">⚙ AI OPERATED PLATFORM</div>

          <h1>
            SMILE AI
            <br />
            <span>Indonesia Platform</span>
          </h1>

          <p>
            비자, 세관신고, 환전, 픽업, 차량, 숙소까지
            <br />
            한 번에 처리하는 AI 자동 신청 시스템
          </p>

          <div className="heroBtns">
            <button className="primary" onClick={() => setPage("signup")}>
              🛂 여권으로 시작하기 <b>→</b>
            </button>
            <button className="ghost" onClick={() => setPage("login")}>
              👤 회원가입 / 로그인 <b>→</b>
            </button>
          </div>

          <div className="miniFeatures">
            <span>⚙ AI 자동 처리</span>
            <span>🛡 안전한 결제</span>
            <span>🔔 실시간 알림</span>
            <span>🎧 전문 지원</span>
          </div>
        </div>

        <div className="visual">
          <div className="planet">
            <div className="planetCore">🌐</div>
            <div className="orbit o1" />
            <div className="orbit o2" />
            <span className="sat s1">🛂</span>
            <span className="sat s2">🚗</span>
            <span className="sat s3">💱</span>
            <span className="sat s4">🏨</span>
          </div>
        </div>
      </section>

      <section className="sectionHead">
        <h2>✦ 서비스 바로가기</h2>
        <button onClick={() => setPage("mypage")}>마이페이지</button>
      </section>

      <section className="serviceGrid">
        {SERVICE_LIST.map(([key, icon, title, sub], i) => (
          <button key={key} className={`serviceCard color${i}`} onClick={() => openService(key)}>
            <div className="bigIcon">{icon}</div>
            <strong>{title}</strong>
            <span>{sub}</span>
            <em>→</em>
          </button>
        ))}
      </section>

      <section className="actionRow">
        <div className="payBox">
          <div>🛡</div>
          <p>
            <b>IDR 결제 수수료 없음 / KRW·USDT는 현지 통화 교환 지원 +1%</b>
            <br />
            케이뱅크, BCA, GoPay, OVO, ShopeePay, USDT 정산 구조까지 확장 가능
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
  );
}

function Auth({ type, setPage }) {
  const isSignup = type === "signup";

  return (
    <section className="authPage">
      <button className="back" onClick={() => setPage("home")}>← 돌아가기</button>

      <div className="authCard">
        <div className="authIcon">{isSignup ? "👤" : "🔐"}</div>
        <h1>{isSignup ? "회원가입" : "로그인"}</h1>
        <p>SMILE AI 플랫폼의 모든 서비스를 이용해보세요.</p>

        {isSignup && <input placeholder="이름" />}
        <input placeholder="이메일" />
        {isSignup && <input placeholder="전화번호" />}
        {!isSignup && <input placeholder="비밀번호" type="password" />}

        {isSignup && (
          <label className="check">
            <input type="checkbox" />
            개인정보 수집 및 1년 보관 후 자동삭제에 동의합니다.
          </label>
        )}

        <button className="primary full" onClick={() => setPage("mypage")}>
          {isSignup ? "가입하고 시작하기" : "로그인"} →
        </button>

        <button className="yellowLine" onClick={() => window.open(KAKAO, "_blank")}>
          💬 카카오톡으로 문의
        </button>
      </div>
    </section>
  );
}

function ServicePage({ service, setPage }) {
  const found = SERVICE_LIST.find((x) => x[0] === service) || SERVICE_LIST[0];
  const [key, icon, title, sub] = found;

  return (
    <section className="formPage">
      <button className="back" onClick={() => setPage("home")}>← 돌아가기</button>

      <div className="formHero">
        <div>
          <div className="badge">AI APPLICATION FLOW</div>
          <h1>{icon} {title}</h1>
          <p>{sub} 신청 정보를 입력하면 AI가 필요한 서류와 다음 단계를 안내합니다.</p>
        </div>
        <button className="primary small" onClick={() => setPage("payment")}>결제 단계로 이동 →</button>
      </div>

      <div className="formGrid">
        <input placeholder="이름 / 여권 영문명" />
        <input placeholder="이메일" />
        <input placeholder="전화번호" />
        <input placeholder="국적" />
        <input placeholder="여권번호" />
        <input placeholder="여권 만료일" />
        <input placeholder="인도네시아 체류 주소" />
        <input placeholder="도착 예정일" />

        {key === "exchange" && (
          <>
            <input placeholder="교환할 금액 KRW / USDT / IDR" />
            <input placeholder="수령 장소: 공항 / 숙소 / 기타" />
          </>
        )}

        {key === "rental" && (
          <>
            <input placeholder="기사 포함 / 기사 불포함" />
            <input placeholder="운전면허 여부 / ITAS 여부" />
          </>
        )}

        {key === "stay" && (
          <>
            <input placeholder="숙소 유형: 단기 / 장기 / 한달살기" />
            <input placeholder="희망 지역" />
          </>
        )}

        <textarea placeholder="추가 요청사항" />
      </div>

      <div className="note">
        여권 만료일이 6개월 미만이면 업로드 불가 안내가 표시되어야 합니다.  
        신청 실행 전 저장된 정보만 보관하고, 미진행 정보는 삭제 처리합니다.
      </div>
    </section>
  );
}

function Payment({ setPage }) {
  return (
    <section className="formPage">
      <button className="back" onClick={() => setPage("home")}>← 돌아가기</button>

      <div className="formHero">
        <div>
          <div className="badge">PAYMENT SYSTEM</div>
          <h1>💳 결제 선택</h1>
          <p>IDR은 수수료 없음, KRW·USDT는 현지 통화 교환 지원 +1%</p>
        </div>
      </div>

      <div className="serviceGrid">
        <button className="serviceCard color0">🇮🇩 IDR 입금<br /><span>BCA / GoPay / OVO / ShopeePay</span></button>
        <button className="serviceCard color1">🇰🇷 KRW 입금<br /><span>케이뱅크</span></button>
        <button className="serviceCard color2">🌐 USDT 결제<br /><span>자동 환율 계산 예정</span></button>
        <button className="serviceCard color3">📄 영수증 발급<br /><span>마이페이지 저장</span></button>
      </div>
    </section>
  );
}

function MyPage({ setPage }) {
  return (
    <section className="formPage">
      <button className="back" onClick={() => setPage("home")}>← 돌아가기</button>

      <div className="formHero">
        <div>
          <div className="badge">MY PAGE</div>
          <h1>📊 진행상황 조회</h1>
          <p>신청 상태, 비자 승인, 다운로드, 만료 알림을 확인합니다.</p>
        </div>
        <button className="ghost small" onClick={() => setPage("admin")}>관리자 화면 →</button>
      </div>

      <div className="timeline">
        <div className="done">● 신청 접수</div>
        <div className="done">● 결제 확인</div>
        <div className="activeStep">◐ 서류 검토</div>
        <div>○ 이민국 제출</div>
        <div>○ 승인 완료 / 다운로드</div>
      </div>

      <div className="note">
        비자 만료 전 알림, 여권 만료 6개월 전 알림, 승인 완료 후 비자 다운로드 기능을 여기에 연결합니다.
      </div>
    </section>
  );
}

function Admin({ setPage }) {
  return (
    <section className="formPage">
      <button className="back" onClick={() => setPage("mypage")}>← 돌아가기</button>

      <div className="formHero">
        <div>
          <div className="badge">ADMIN CONTROL</div>
          <h1>🧠 관리자 화면</h1>
          <p>고객 신청, 결제, 서류, 알림, 삭제 정책을 관리합니다.</p>
        </div>
      </div>

      <div className="serviceGrid">
        <button className="serviceCard color0">신청 고객 관리</button>
        <button className="serviceCard color1">결제 확인</button>
        <button className="serviceCard color2">비자 만료 알림</button>
        <button className="serviceCard color3">1년 후 자동삭제</button>
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
    radial-gradient(circle at 70% 5%,rgba(0,229,255,.26),transparent 35%),
    radial-gradient(circle at 15% 80%,rgba(168,85,247,.28),transparent 35%),
    linear-gradient(135deg,#020617,#06152e 45%,#020617);
  overflow-x:hidden;
}
.orb{position:fixed;border-radius:999px;filter:blur(95px);pointer-events:none}
.orbA{width:420px;height:420px;right:-120px;top:-120px;background:rgba(0,229,255,.28)}
.orbB{width:380px;height:380px;left:-100px;bottom:-130px;background:rgba(168,85,247,.3)}
.orbC{width:280px;height:280px;right:35%;bottom:20%;background:rgba(34,197,94,.16)}
.shell{width:min(1180px,100%);margin:0 auto;padding:28px 24px;position:relative;z-index:2}
.top{display:flex;justify-content:space-between;align-items:center;margin-bottom:26px;padding-bottom:20px;border-bottom:1px solid rgba(255,255,255,.1)}
.brand{display:flex;gap:12px;align-items:center;background:none;border:0;color:white;text-align:left}
.brandLogo{width:54px;height:54px;border-radius:50%;display:grid;place-items:center;font-weight:900;font-size:22px;background:linear-gradient(135deg,#2563eb,#00e5ff,#a855f7);box-shadow:0 0 38px rgba(0,229,255,.5)}
.brand strong{display:block;font-size:24px}
.brand span{font-size:12px;color:#cbd5e1;font-weight:700}
.langs{display:flex;gap:8px;padding:5px;border-radius:18px;background:rgba(2,6,23,.65);border:1px solid rgba(255,255,255,.14)}
.langs button{border:0;border-radius:13px;padding:9px 17px;background:rgba(15,23,42,.9);color:#cbd5e1;font-weight:900}
.langs .on{background:linear-gradient(90deg,#2563eb,#00e5ff);color:white;box-shadow:0 0 22px rgba(0,229,255,.35)}
.heroPanel{display:grid;grid-template-columns:1fr 1.05fr;gap:34px;align-items:center;padding:34px;border-radius:36px;background:linear-gradient(145deg,rgba(15,23,42,.9),rgba(30,64,175,.16));border:1px solid rgba(0,229,255,.35);box-shadow:0 0 45px rgba(0,229,255,.14),0 35px 100px rgba(0,0,0,.45)}
.badge{display:inline-block;padding:10px 17px;border-radius:999px;background:rgba(0,229,255,.14);border:1px solid rgba(0,229,255,.32);color:#00e5ff;font-size:13px;font-weight:900;box-shadow:0 0 25px rgba(0,229,255,.18)}
.heroText h1{margin:22px 0 18px;font-size:clamp(42px,5vw,68px);line-height:1.03;letter-spacing:-1.4px}
.heroText h1 span{background:linear-gradient(90deg,#00e5ff,#60a5fa,#f472b6);-webkit-background-clip:text;color:transparent}
.heroText p{font-size:18px;line-height:1.6;color:#dbeafe}
.heroBtns{max-width:440px}
.primary,.ghost{width:100%;margin-top:14px;border-radius:18px;padding:18px 22px;font-size:17px;font-weight:900;display:flex;justify-content:space-between;align-items:center}
.primary{border:0;color:white;background:linear-gradient(90deg,#2563eb,#00e5ff,#00ff99);box-shadow:0 0 36px rgba(0,229,255,.38)}
.ghost{border:1px solid rgba(0,229,255,.38);background:rgba(2,6,23,.68);color:white}
.miniFeatures{display:flex;flex-wrap:wrap;gap:18px;margin-top:22px;color:#cbd5e1;font-size:14px}
.visual{min-height:380px;display:grid;place-items:center;position:relative;overflow:hidden;border-radius:32px;background:radial-gradient(circle,rgba(0,229,255,.35),transparent 38%)}
.planet{position:relative;width:280px;height:280px;border-radius:50%;display:grid;place-items:center}
.planetCore{font-size:155px;filter:drop-shadow(0 0 40px #00e5ff);animation:float 4s ease-in-out infinite}
.orbit{position:absolute;border:1px solid rgba(125,211,252,.55);border-radius:50%;box-shadow:0 0 25px rgba(0,229,255,.22)}
.o1{width:360px;height:130px;transform:rotate(-18deg)}
.o2{width:310px;height:95px;transform:rotate(22deg)}
.sat{position:absolute;width:66px;height:66px;border-radius:50%;display:grid;place-items:center;font-size:28px;background:rgba(15,23,42,.72);border:1px solid rgba(255,255,255,.2);box-shadow:0 0 30px rgba(0,229,255,.35)}
.s1{right:40px;top:30px}.s2{left:18px;top:120px}.s3{right:20px;bottom:55px}.s4{left:65px;bottom:30px}
.sectionHead{display:flex;justify-content:space-between;align-items:center;margin:34px 0 16px}
.sectionHead h2{font-size:28px;margin:0}
.sectionHead button{border:1px solid rgba(255,255,255,.16);background:rgba(15,23,42,.8);color:white;border-radius:14px;padding:12px 16px;font-weight:900}
.serviceGrid{display:grid;grid-template-columns:repeat(4,1fr);gap:16px}
.serviceCard{min-height:136px;border:1px solid rgba(255,255,255,.14);border-radius:24px;background:linear-gradient(145deg,rgba(15,23,42,.92),rgba(30,41,59,.65));color:white;padding:20px;text-align:left;position:relative;overflow:hidden;box-shadow:0 22px 50px rgba(0,0,0,.28)}
.serviceCard:before{content:"";position:absolute;inset:-1px;opacity:.35;background:radial-gradient(circle at 20% 15%,#00e5ff,transparent 38%)}
.color1:before{background:radial-gradient(circle at 20% 15%,#22c55e,transparent 38%)}.color2:before{background:radial-gradient(circle at 20% 15%,#a855f7,transparent 38%)}.color3:before{background:radial-gradient(circle at 20% 15%,#38bdf8,transparent 38%)}.color4:before{background:radial-gradient(circle at 20% 15%,#06b6d4,transparent 38%)}.color5:before{background:radial-gradient(circle at 20% 15%,#f472b6,transparent 38%)}.color6:before{background:radial-gradient(circle at 20% 15%,#f59e0b,transparent 38%)}.color7:before{background:radial-gradient(circle at 20% 15%,#3b82f6,transparent 38%)}
.bigIcon{font-size:38px;margin-bottom:12px}.serviceCard strong{display:block;font-size:17px;position:relative}.serviceCard span{display:block;color:#cbd5e1;margin-top:6px;position:relative}.serviceCard em{position:absolute;right:18px;bottom:16px;font-style:normal;font-size:24px;color:#cbd5e1}
.actionRow{display:grid;grid-template-columns:1.6fr .7fr .7fr;gap:16px;margin-top:24px}
.payBox{display:flex;gap:15px;align-items:center;padding:20px;border-radius:24px;background:rgba(37,99,235,.18);border:1px solid rgba(59,130,246,.48)}
.payBox div{font-size:40px}.payBox p{margin:0;color:#dbeafe;line-height:1.55}
.kakao,.whatsapp{border:0;border-radius:22px;padding:18px;font-size:17px;font-weight:900}.kakao{background:#fde047;color:#111827}.whatsapp{background:#22c55e;color:white;display:grid;place-items:center}.whatsapp small{display:block;margin-top:5px}
footer{text-align:center;color:#64748b;margin:30px 0}
.authPage,.formPage{max-width:760px;margin:0 auto}.back{background:transparent;border:0;color:white;font-size:15px;margin-bottom:16px}
.authCard{padding:38px;border-radius:34px;text-align:center;background:linear-gradient(145deg,rgba(15,23,42,.92),rgba(30,64,175,.18));border:1px solid rgba(0,229,255,.38);box-shadow:0 0 45px rgba(0,229,255,.12),0 35px 100px rgba(0,0,0,.45)}
.authIcon{width:96px;height:96px;border-radius:50%;margin:0 auto 18px;display:grid;place-items:center;font-size:42px;background:radial-gradient(circle,#8b5cf6,#1e1b4b);box-shadow:0 0 45px rgba(168,85,247,.55)}
.authCard p{color:#cbd5e1}.authCard input,.formGrid input,.formGrid textarea{width:100%;padding:16px;margin-top:13px;border-radius:16px;border:1px solid rgba(0,229,255,.35);background:rgba(2,6,23,.72);color:white;font-size:15px}.check{display:flex;gap:10px;margin-top:14px;text-align:left;color:#cbd5e1;font-size:14px}.yellowLine{width:100%;padding:16px;border-radius:16px;margin-top:14px;background:transparent;color:#fde047;border:1px solid #fde047;font-weight:900}
.formHero{display:flex;justify-content:space-between;gap:20px;align-items:center;padding:28px;border-radius:28px;background:linear-gradient(145deg,rgba(15,23,42,.92),rgba(30,64,175,.18));border:1px solid rgba(0,229,255,.35);margin-bottom:18px}.formHero h1{font-size:36px;margin:16px 0 8px}.formHero p{color:#cbd5e1}.small{max-width:240px}
.formGrid{display:grid;grid-template-columns:1fr 1fr;gap:10px}.formGrid textarea{grid-column:1/-1;min-height:110px}.note{margin-top:18px;padding:18px;border-radius:20px;background:rgba(34,197,94,.12);border:1px solid rgba(34,197,94,.35);color:#bbf7d0;line-height:1.6}
.timeline{display:grid;gap:12px;padding:24px;border-radius:24px;background:rgba(15,23,42,.8);border:1px solid rgba(0,229,255,.28)}.timeline div{padding:14px;border-radius:14px;background:rgba(255,255,255,.05)}.done{color:#22c55e}.activeStep{color:#00e5ff}
@keyframes float{0%,100%{transform:translateY(0)}50%{transform:translateY(-12px)}}
@media(max-width:900px){.shell{padding:16px 14px}.top{gap:10px}.brand strong{font-size:18px}.brandLogo{width:44px;height:44px}.langs{transform:scale(.86);transform-origin:right top}.heroPanel{grid-template-columns:1fr;padding:22px}.visual{min-height:240px}.planetCore{font-size:120px}.orbit{width:240px!important}.serviceGrid{grid-template-columns:repeat(2,1fr)}.actionRow{grid-template-columns:1fr}.formHero{display:block}.formGrid{grid-template-columns:1fr}.heroText h1{font-size:42px}}
`;
