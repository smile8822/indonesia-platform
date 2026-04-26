import React, { useState } from "react";

export default function App() {
  const [lang, setLang] = useState("KR");

  const text = {
    KR: {
      title: "인도네시아 통합 서비스",
      visa: "비자 신청",
      customs: "세관 신고",
      exchange: "환전 신청",
      rental: "차량 렌탈",
      stay: "숙소 예약",
      contact: "상담원 연결"
    },
    ID: {
      title: "Layanan Terpadu Indonesia",
      visa: "Pengajuan Visa",
      customs: "Deklarasi Bea Cukai",
      exchange: "Penukaran Uang",
      rental: "Sewa Mobil",
      stay: "Reservasi Akomodasi",
      contact: "Hubungi CS"
    },
    EN: {
      title: "Indonesia All-in-One Service",
      visa: "Visa Service",
      customs: "Customs Declaration",
      exchange: "Currency Exchange",
      rental: "Car Rental",
      stay: "Accommodation",
      contact: "Contact"
    },
    CN: {
      title: "印尼一站式服务",
      visa: "签证申请",
      customs: "海关申报",
      exchange: "货币兑换",
      rental: "车辆租赁",
      stay: "住宿预订",
      contact: "联系客服"
    }
  };

  const t = text[lang];

  return (
    <div
      style={{
        background: "#020617",
        color: "white",
        minHeight: "100vh",
        padding: "20px",
        fontFamily: "Arial"
      }}
    >
      {/* 언어 선택 */}
      <div style={{ marginBottom: "20px" }}>
        <button onClick={() => setLang("KR")}>KR</button>
        <button onClick={() => setLang("ID")} style={{ marginLeft: "10px" }}>ID</button>
        <button onClick={() => setLang("EN")} style={{ marginLeft: "10px" }}>EN</button>
        <button onClick={() => setLang("CN")} style={{ marginLeft: "10px" }}>CN</button>
      </div>

      {/* 제목 */}
      <h1>{t.title}</h1>

      {/* 서비스 버튼 */}
      <div style={{ marginTop: "20px", display: "grid", gap: "10px" }}>
        <button>{t.visa}</button>
        <button>{t.customs}</button>
        <button>{t.exchange}</button>
        <button>{t.rental}</button>
        <button>{t.stay}</button>
      </div>

      {/* 상담 연결 */}
      <div style={{ marginTop: "30px" }}>
        <button
          onClick={() =>
            window.open("https://wa.me/821027378821", "_blank")
          }
        >
          {t.contact}
        </button>
      </div>
    </div>
  );
}
