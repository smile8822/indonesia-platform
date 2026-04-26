import React, { useEffect, useState } from "react";
import "./index.css";

const WHATSAPP = "https://wa.me/821027378821";
const KAKAO = "https://pf.kakao.com/_SmileAI/chat";

const liveData = [
  ["KIM M***", "비자 승인 완료", "success"],
  ["LEE J***", "차량 배정 완료", "blue"],
  ["PARK S***", "환전 수령 준비 완료", "purple"],
  ["CHEN L***", "숙소 예약 완료", "success"],
  ["AHMAD R***", "공항 픽업 기사 배정", "blue"],
  ["SATO Y***", "세관 신고 QR 생성 완료", "purple"],
];

const services = [
  ["🛂", "비자 / 입국 준비", "Visa & Entry", "AI 자동 신청 / 진행상태 확인"],
  ["📄", "세관 신고", "e-Customs", "입국 전 자동 신고 및 QR 생성"],
  ["💱", "화폐 교환", "Currency Exchange", "KRW · USD · USDT 현지 환전"],
  ["✈️", "공항 픽업", "Airport Pickup", "도착 시간에 맞춘 기사 자동 배정"],
  ["🚘", "차량 렌탈", "Car Rental", "기사 포함 / 미포함 선택 가능"],
  ["🏨", "숙소 신청", "Accommodation", "단기 · 장기 숙소 자동 연결"],
  ["📦", "장기체류 패키지", "Long Stay Package", "비자 · 차량 · 숙소 통합 관리"],
  ["📊", "진행상황 조회", "Check Status", "마이페이지에서 실시간 확인"],
];

export default function App() {
  const [items, setItems] = useState(liveData.slice(0, 4));
  const [step, setStep] = useState(0);

  useEffect(() => {
    const liveTimer = setInterval(() => {
      setItems((prev) => {
        const next = liveData[Math.floor(Math.random() * liveData.length)];
        return [next, ...prev].slice(0, 4);
      });
    }, 1800);

    const stepTimer = setInterval(() => {
      setStep((prev) => (prev + 1) % 5);
    }, 1100);

    return () => {
      clearInterval(liveTimer);
      clearInterval(stepTimer);
    };
  }, []);

  return (
    <main className="min-h-screen bg-[#050914] text-white overflow-hidden">
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(0,217,255,.22),transparent_35%),radial-gradient(circle_at_20%_40%,rgba(112,0,255,.2),transparent_32%)] pointer-events-none" />

      <section className="relative max-w-7xl mx-auto px-5 py-6">
        <Header />

        <div className="grid lg:grid-cols-2 gap-8 items-center mt-10 border border-cyan-400/25 rounded-[32px] p-6 md:p-10 bg-white/[0.03] shadow-2xl">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-300/40 bg-cyan-400/10 text-cyan-300 text-sm font-bold mb-6">
              ⚙ AI OPERATED PLATFORM
            </div>

            <h1 className="text-4xl md:text-6xl font-black leading-tight">
              AI가 인도네시아
              <br />
              입국부터 정착까지
              <br />
              <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-400 text-transparent bg-clip-text">
                자동으로 처리합니다
              </span>
            </h1>

            <p className="mt-6 text-lg md:text-xl text-slate-200 leading-relaxed">
              여권 하나로 비자 · 세관 · 환전 · 픽업 · 차량 · 숙소까지
              <br />
              모든 절차가 자동 진행됩니다.
            </p>

            <div className="mt-8 grid sm:grid-cols-2 gap-4">
              <button className="h-16 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-400 font-bold text-lg shadow-lg shadow-cyan-500/25">
                🛂 여권으로 시작하기 →
              </button>
              <button className="h-16 rounded-2xl border border-white/25 bg-white/5 font-bold text-lg">
                👤 회원가입 / 로그인 →
              </button>
            </div>

            <div className="mt-6 flex flex-wrap gap-4 text-sm text-slate-300">
              <span>🤖 AI 자동 처리</span>
              <span>🛡 안전한 결제</span>
              <span>🔔 실시간 알림</span>
              <span>🎧 전문 지원</span>
            </div>
          </div>

          <VisualGlobe step={step} />
        </div>

        <LiveStatus items={items} />

        <AutoFlow step={step} />

        <ServiceSection />

        <WhySection />

        <TrustSection />

        <FinalCTA />

        <footer className="text-center text-slate-500 text-sm py-8">
          © 2025 SMILE AI Indonesia Platform. All rights reserved.
        </footer>
      </section>
    </main>
  );
}

function Header() {
  return (
    <header className="relative z-10 flex items-center justify-between border-b border-white/10 pb-5">
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 grid place-items-center font-black shadow-lg shadow-blue-500/40">
          AI
        </div>
        <div>
          <div className="font-black text-xl">SMILE AI</div>
          <div className="text-xs text-slate-300">Indonesia Platform</div>
        </div>
      </div>

      <div className="hidden md:flex rounded-xl border border-white/15 overflow-hidden">
        {["KR", "ID", "EN", "CN"].map((v, i) => (
          <button
            key={v}
            className={`px-5 py-2 text-sm ${
              i === 0 ? "bg-blue-600 text-white" : "bg-white/5 text-slate-300"
            }`}
          >
            {v}
          </button>
        ))}
      </div>
    </header>
  );
}

function VisualGlobe({ step }) {
  const icons = ["✈️", "🛂", "💱", "🚘", "🏨"];

  return (
    <div className="relative min-h-[420px] grid place-items-center">
      <div className="absolute w-80 h-80 rounded-full bg-cyan-400/20 blur-3xl animate-pulse" />
      <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full border border-cyan-300/40 bg-[radial-gradient(circle,rgba(0,213,255,.35),rgba(8,15,35,.85)_60%)] shadow-2xl shadow-cyan-500/30 grid place-items-center">
        <div className="text-8xl md:text-9xl">🌐</div>

        {icons.map((icon, i) => (
          <div
            key={i}
            className={`absolute w-16 h-16 rounded-2xl grid place-items-center text-3xl border transition-all duration-500 ${
              step === i
                ? "scale-125 bg-cyan-400/30 border-cyan-300 shadow-lg shadow-cyan-400/50"
                : "bg-white/5 border-white/20"
            }`}
            style={{
              transform: `rotate(${i * 72}deg) translate(185px) rotate(-${
                i * 72
              }deg)`,
            }}
          >
            {icon}
          </div>
        ))}
      </div>
    </div>
  );
}

function LiveStatus({ items }) {
  return (
    <section className="mt-8 grid lg:grid-cols-3 gap-5">
      <div className="lg:col-span-2 rounded-3xl border border-cyan-400/25 bg-white/[0.04] p-6">
        <div className="flex items-center justify-between mb-5">
          <h2 className="text-2xl font-black">실시간 진행 상황</h2>
          <span className="text-cyan-300 text-sm animate-pulse">
            ● LIVE OPERATING
          </span>
        </div>

        <div className="space-y-3">
          {items.map(([name, status, color], i) => (
            <div
              key={i + name + status}
              className="flex items-center justify-between rounded-2xl border border-white/10 bg-black/20 px-5 py-4"
            >
              <span className="font-bold text-slate-200">{name}</span>
              <span
                className={`font-bold ${
                  color === "success"
                    ? "text-emerald-300"
                    : color === "blue"
                    ? "text-cyan-300"
                    : "text-purple-300"
                }`}
              >
                {status}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-3xl border border-purple-400/25 bg-gradient-to-br from-purple-500/10 to-cyan-500/10 p-6">
        <h3 className="text-xl font-black mb-4">지금도 시스템이 처리 중입니다</h3>
        <p className="text-slate-300 leading-relaxed">
          신청, 결제, 승인, 배정 기록은 마이페이지에서 실시간으로 확인됩니다.
        </p>
      </div>
    </section>
  );
}

function AutoFlow({ step }) {
  const steps = ["여권 입력", "AI 분석", "자동 신청", "실시간 처리", "완료"];

  return (
    <section className="mt-8 rounded-3xl border border-blue-400/20 bg-white/[0.04] p-6">
      <h2 className="text-2xl font-black mb-2">AI 자동 처리 흐름</h2>
      <p className="text-slate-300 mb-6">
        여권 정보만 입력하면 AI가 필요한 절차를 자동으로 연결하고 진행합니다.
      </p>

      <div className="grid md:grid-cols-5 gap-4">
        {steps.map((s, i) => (
          <div
            key={s}
            className={`rounded-2xl p-5 border transition-all duration-500 ${
              step >= i
                ? "border-cyan-300 bg-cyan-400/10 shadow-lg shadow-cyan-400/20"
                : "border-white/10 bg-black/20"
            }`}
          >
            <div className="text-3xl mb-3">{["🛂", "🤖", "📨", "📊", "✅"][i]}</div>
            <div className="font-black">{s}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function ServiceSection() {
  return (
    <section className="mt-8">
      <h2 className="text-2xl font-black mb-5">서비스 바로가기</h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {services.map(([icon, title, en, desc]) => (
          <div
            key={title}
            className="rounded-3xl border border-white/10 bg-white/[0.04] p-5 hover:border-cyan-300/60 hover:bg-cyan-400/10 transition"
          >
            <div className="text-4xl mb-4">{icon}</div>
            <div className="font-black text-lg">{title}</div>
            <div className="text-sm text-slate-400 mb-3">{en}</div>
            <div className="text-sm text-slate-300 leading-relaxed">{desc}</div>
            <div className="text-right text-cyan-300 mt-4">→</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function WhySection() {
  const why = [
    ["AI 자동 처리", "여권 정보만 입력하면 모든 절차를 자동으로 연결합니다"],
    ["실시간 진행 확인", "모든 진행상황은 마이페이지에서 실시간 확인 가능합니다"],
    ["온체인 기록 저장", "모든 신청, 결제, 승인 기록은 위변조 불가능한 방식으로 저장됩니다"],
    ["자동 알림 시스템", "비자 만료, 승인 완료, 수령 안내를 자동으로 제공합니다"],
    ["개인정보 보호", "모든 데이터는 1년 후 자동 삭제됩니다"],
  ];

  return (
    <section className="mt-8 rounded-3xl border border-cyan-400/25 bg-gradient-to-br from-white/[0.06] to-cyan-400/[0.04] p-6 md:p-8">
      <h2 className="text-3xl font-black mb-6">왜 이 플랫폼을 사용하는가</h2>

      <div className="grid md:grid-cols-2 gap-4">
        {why.map(([title, text], i) => (
          <div key={title} className="rounded-2xl bg-black/25 border border-white/10 p-5">
            <div className="text-cyan-300 font-black mb-2">
              {i + 1}. {title}
            </div>
            <p className="text-slate-300">{text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function TrustSection() {
  return (
    <section className="mt-8 grid lg:grid-cols-2 gap-5">
      <div className="rounded-3xl border border-purple-400/30 bg-purple-500/10 p-7">
        <h2 className="text-3xl font-black mb-4">
          모든 기록은 위변조가 불가능한 방식으로 저장됩니다
        </h2>
        <p className="text-slate-300 leading-relaxed">
          신청 기록, 결제 기록, 비자 승인 기록은 신뢰 가능한 방식으로 보관되며
          사용자 요청 또는 1년 경과 시 자동 삭제됩니다.
        </p>
      </div>

      <div className="rounded-3xl border border-cyan-400/30 bg-black/25 p-7">
        <div className="grid grid-cols-3 gap-4 text-center">
          {["신청 기록", "결제 기록", "승인 기록"].map((v) => (
            <div
              key={v}
              className="rounded-2xl border border-cyan-300/25 bg-cyan-400/10 p-5"
            >
              <div className="text-3xl mb-2">🔐</div>
              <div className="font-black">{v}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="mt-8 rounded-3xl border border-cyan-300/30 bg-gradient-to-r from-blue-600/20 to-cyan-400/20 p-8 text-center">
      <h2 className="text-3xl md:text-4xl font-black mb-4">
        지금 시작하면 모든 절차가 자동으로 진행됩니다
      </h2>

      <div className="flex flex-col sm:flex-row justify-center gap-4 mt-6">
        <button className="px-8 py-4 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-400 font-black">
          여권으로 시작하기 →
        </button>
        <a
          href={WHATSAPP}
          className="px-8 py-4 rounded-2xl bg-green-500 font-black"
        >
          WhatsApp 상담
        </a>
        <a
          href={KAKAO}
          className="px-8 py-4 rounded-2xl bg-yellow-400 text-black font-black"
        >
          KakaoTalk 상담
        </a>
      </div>
    </section>
  );
}
