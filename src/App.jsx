import React, { useEffect, useState } from "react";
import "./App.css";

const liveList = [
  ["KIM M***", "비자 승인 완료", "green"],
  ["LEE J***", "차량 배정 완료", "blue"],
  ["PARK S***", "환전 수령 준비 완료", "purple"],
  ["CHEN L***", "숙소 예약 완료", "orange"],
  ["AHMAD R***", "공항 픽업 기사 배정", "blue"],
];

const services = [
  ["🛂", "비자 / 입국 준비", "Visa & Entry"],
  ["📄", "세관 신고", "e-Customs"],
  ["💱", "화폐 교환", "Currency Exchange"],
  ["✈️", "공항 픽업", "Airport Pickup"],
  ["🚘", "차량 렌탈", "Car Rental"],
  ["🏨", "숙소 신청", "Accommodation"],
  ["📦", "장기체류 패키지", "Long Stay Package"],
  ["📊", "진행상황 조회", "Check Status"],
];

export default function App() {
  const [live, setLive] = useState(liveList.slice(0, 4));
  const [step, setStep] = useState(0);

  useEffect(() => {
    const a = setInterval(() => {
      setLive((prev) => {
        const next = liveList[Math.floor(Math.random() * liveList.length)];
        return [next, ...prev].slice(0, 4);
      });
    }, 1800);

    const b = setInterval(() => {
      setStep((prev) => (prev + 1) % 5);
    }, 1000);

    return () => {
      clearInterval(a);
      clearInterval(b);
    };
  }, []);

  return (
    <div className="app">
      <div className="bgGlow" />

      <header className="header">
        <div className="brand">
          <div className="logo">AI</div>
          <div>
            <h1>SMILE AI</h1>
            <p>INDONESIA PLATFORM</p>
          </div>
        </div>

        <div className="langs">
          <button className="active">KR</button>
          <button>ID</button>
          <button>EN</button>
          <button>CN</button>
        </div>
      </header>

      <section className="hero">
        <div className="heroText">
          <div className="badge">⚙ AI OPERATED PLATFORM</div>

          <h2>
            AI가 인도네시아
            <br />
            입국부터 정착까지
            <br />
            <span>자동으로 처리합니다</span>
          </h2>

          <p className="heroDesc">
            여권 하나로 비자 · 세관 · 환전 · 픽업 · 차량 · 숙소까지
            <br />
            모든 절차가 자동 진행됩니다.
          </p>

          <div className="heroButtons">
            <button className="primary">🛂 여권으로 시작하기 →</button>
            <button className="secondary">👤 회원가입 / 로그인 →</button>
          </div>

          <div className="features">
            <span>🤖 AI 자동 처리</span>
            <span>🛡 안전한 결제</span>
            <span>🔔 실시간 알림</span>
            <span>🎧 전문 지원</span>
          </div>
        </div>

        <div className="heroVisual">
          <div className="orbit">
            <div className="earth">🌐</div>
            {["✈️", "🛂", "💱", "🚘", "🏨"].map((icon, i) => (
              <div
                key={i}
                className={`orbitIcon icon${i} ${step === i ? "on" : ""}`}
              >
                {icon}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="liveSection">
        <div className="liveBox">
          <div className="sectionHead">
            <h3>실시간 진행 상황</h3>
            <span>● LIVE OPERATING</span>
          </div>

          {live.map(([name, status, color], i) => (
            <div className="liveItem" key={i + name}>
              <strong>{name}</strong>
              <em className={color}>{status}</em>
            </div>
          ))}
        </div>

        <div className="trustMini">
          <h3>지금도 시스템이 처리 중입니다</h3>
          <p>
            신청, 결제, 승인, 배정 기록은 마이페이지에서 실시간으로
            확인됩니다.
          </p>
        </div>
      </section>

      <section className="flow">
        <h3>AI 자동 처리 흐름</h3>
        <p>여권 정보만 입력하면 AI가 필요한 절차를 자동으로 연결합니다.</p>

        <div className="flowGrid">
          {["여권 입력", "AI 분석", "자동 신청", "실시간 처리", "완료"].map(
            (v, i) => (
              <div className={`flowCard ${step >= i ? "active" : ""}`} key={v}>
                <div>{["🛂", "🤖", "📨", "📊", "✅"][i]}</div>
                <strong>{v}</strong>
              </div>
            )
          )}
        </div>
      </section>

      <section className="services">
        <h3>서비스 바로가기</h3>

        <div className="serviceGrid">
          {services.map(([icon, title, en]) => (
            <div className="serviceCard" key={title}>
              <div className="serviceIcon">{icon}</div>
              <strong>{title}</strong>
              <p>{en}</p>
              <span>→</span>
            </div>
          ))}
        </div>
      </section>

      <section className="why">
        <h3>왜 이 플랫폼을 사용하는가</h3>

        <div className="whyGrid">
          {[
            ["AI 자동 처리", "여권 정보만 입력하면 모든 절차를 자동으로 연결합니다"],
            ["실시간 진행 확인", "모든 진행상황은 마이페이지에서 실시간 확인 가능합니다"],
            ["온체인 기록 저장", "모든 신청, 결제, 승인 기록은 위변조 불가능한 방식으로 저장됩니다"],
            ["자동 알림 시스템", "비자 만료, 승인 완료, 수령 안내를 자동으로 제공합니다"],
            ["개인정보 보호", "모든 데이터는 1년 후 자동 삭제됩니다"],
          ].map(([title, text], i) => (
            <div className="whyCard" key={title}>
              <b>{i + 1}. {title}</b>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="chain">
        <div>
          <h3>모든 기록은 위변조가 불가능한 방식으로 저장됩니다</h3>
          <p>
            신청 기록 · 결제 기록 · 비자 승인 기록은 신뢰 가능한 방식으로
            보관되며 사용자 요청 또는 1년 경과 시 자동 삭제됩니다.
          </p>
        </div>

        <div className="chainCards">
          <div>🔐<br />신청 기록</div>
          <div>💳<br />결제 기록</div>
          <div>✅<br />승인 기록</div>
        </div>
      </section>

      <section className="cta">
        <h3>지금 시작하면 모든 절차가 자동으로 진행됩니다</h3>
        <button>여권으로 시작하기 →</button>
      </section>

      <footer>© 2025 SMILE AI Indonesia Platform. All rights reserved.</footer>
    </div>
  );
}
