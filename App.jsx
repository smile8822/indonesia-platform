import React, { useMemo, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Upload, ScanLine, MessageCircle, ShieldCheck, FileText, Car, RefreshCw, WalletCards, Home, Plane, Building2 } from "lucide-react";

const WHATSAPP_NUMBER = "821027378821";
const KAKAO_LINK = "http://pf.kakao.com/_cBDxgn/chat";
const COMMUNITY_LINK = "https://chat.whatsapp.com/EcQ7yhHgSDm62GsGYwzaMZ";

const TEXT = {
  ko: {
    langName: "한국어",
    title: "인도네시아 입국·체류 자동 플랫폼",
    subtitle: "비자, 세관신고, 환전, 픽업, 차량 렌탈, 숙소까지 모바일에서 한 번에 신청하세요.",
    passportAuto: "여권을 올리면 신청서가 자동으로 작성됩니다",
    passportDesc: "고객은 여권 정보를 확인하고 필요한 서비스만 선택하면 됩니다.",
    uploadPassport: "여권 사진면 업로드",
    uploadHelp: "JPG, PNG, PDF 가능",
    scanPassport: "여권 자동 인식 테스트",
    scanning: "여권 정보 인식 중",
    customerInfo: "고객 정보 확인",
    serviceSelect: "비자 종류 / 서비스 선택",
    selectPlaceholder: "필요한 서비스를 선택하세요",
    notes: "추가 문의 내용을 적어주세요",
    consent: "비자 상담 및 신청서 작성을 위해 여권 정보와 신청 정보를 임시 수집하는 데 동의합니다. 제출된 정보는 업무 처리 목적 외에는 사용하지 않으며, 업무 완료 후 최대 1년 보관 후 삭제될 수 있습니다.",
    submitWhatsapp: "WhatsApp으로 신청 내용 보내기",
    kakao: "카카오톡 상담",
    community: "커뮤니티 참여",
    autoService: "자동 서비스",
    expertConsult: "법인 설립 및 기타 전문 상담은 메신저로 문의해주세요.",
    passportRule: "여권 만료일까지 6개월 이상 남아야 신청 가능합니다.",
    idrNoFee: "IDR 결제는 추가 수수료가 없습니다.",
    otherFee: "KRW / USDT 결제 시 현지 통화 교환 및 정산 지원 서비스가 포함됩니다 (+1%).",
    name: "영문 이름",
    passportNo: "여권번호",
    nationality: "국적",
    birthDate: "생년월일",
    gender: "성별",
    location: "현재 위치",
    phone: "전화번호",
    email: "이메일",
    address: "인도네시아 체류 주소",
    visaTourist: "도착비자 / 관광비자",
    visaExtension: "비자 연장",
    customs: "세관신고",
    exchange: "화폐 교환",
    pickup: "공항 픽업",
    carRental: "차량 렌탈",
    accommodation: "숙소 신청",
    longStay: "장기체류 패키지",
    unknown: "잘 모르겠음 / 상담 필요",
    paymentTitle: "결제 정책",
    statusTitle: "진행상황 시각화",
    downloadVisa: "승인 완료 후 마이페이지에서 비자 다운로드 가능",
  },
  id: {
    langName: "Bahasa Indonesia",
    title: "Platform Otomatis Masuk & Tinggal di Indonesia",
    subtitle: "Ajukan visa, e-Customs, penukaran uang, pickup bandara, rental mobil, dan akomodasi langsung dari ponsel Anda.",
    passportAuto: "Unggah paspor, formulir akan terisi otomatis",
    passportDesc: "Pelanggan cukup memeriksa data paspor dan memilih layanan yang dibutuhkan.",
    uploadPassport: "Unggah halaman foto paspor",
    uploadHelp: "JPG, PNG, PDF tersedia",
    scanPassport: "Tes pengenalan paspor otomatis",
    scanning: "Mengenali data paspor",
    customerInfo: "Konfirmasi Data Pelanggan",
    serviceSelect: "Pilih Visa / Layanan",
    selectPlaceholder: "Pilih layanan yang dibutuhkan",
    notes: "Tuliskan pertanyaan tambahan",
    consent: "Saya setuju data paspor dan informasi aplikasi dikumpulkan sementara untuk konsultasi dan pengajuan layanan. Data tidak digunakan di luar tujuan layanan dan dapat disimpan maksimal 1 tahun setelah layanan selesai sebelum dihapus.",
    submitWhatsapp: "Kirim aplikasi via WhatsApp",
    kakao: "Konsultasi KakaoTalk",
    community: "Gabung Komunitas",
    autoService: "Layanan Otomatis",
    expertConsult: "Untuk pendirian perusahaan dan konsultasi khusus lainnya, silakan hubungi kami melalui messenger.",
    passportRule: "Paspor harus berlaku minimal 6 bulan untuk melanjutkan aplikasi.",
    idrNoFee: "Pembayaran IDR tidak dikenakan biaya tambahan.",
    otherFee: "Pembayaran KRW / USDT termasuk layanan dukungan penukaran dan penyelesaian ke IDR (+1%).",
    name: "Nama sesuai paspor",
    passportNo: "Nomor Paspor",
    nationality: "Kewarganegaraan",
    birthDate: "Tanggal Lahir",
    gender: "Jenis Kelamin",
    location: "Lokasi Saat Ini",
    phone: "Nomor Telepon",
    email: "Email",
    address: "Alamat tinggal di Indonesia",
    visaTourist: "Visa on Arrival / Visa Turis",
    visaExtension: "Perpanjangan Visa",
    customs: "e-Customs",
    exchange: "Penukaran Uang",
    pickup: "Pickup Bandara",
    carRental: "Rental Mobil",
    accommodation: "Akomodasi",
    longStay: "Paket Long Stay",
    unknown: "Tidak tahu / Butuh konsultasi",
    paymentTitle: "Kebijakan Pembayaran",
    statusTitle: "Visualisasi Status",
    downloadVisa: "Visa dapat diunduh dari My Page setelah disetujui",
  },
  en: {
    langName: "English",
    title: "Indonesia Entry & Long-Stay Automation Platform",
    subtitle: "Apply for visa, e-Customs, currency exchange, airport pickup, car rental, and accommodation from your phone.",
    passportAuto: "Upload your passport and the form fills automatically",
    passportDesc: "Customers only need to confirm passport data and choose the required service.",
    uploadPassport: "Upload passport photo page",
    uploadHelp: "JPG, PNG, PDF supported",
    scanPassport: "Test automatic passport scan",
    scanning: "Reading passport information",
    customerInfo: "Confirm Customer Information",
    serviceSelect: "Select Visa / Service",
    selectPlaceholder: "Choose the service you need",
    notes: "Write any additional questions",
    consent: "I agree that my passport and application information may be temporarily collected for consultation and service processing. The data will not be used outside the service purpose and may be stored for up to 1 year after completion before deletion.",
    submitWhatsapp: "Send application via WhatsApp",
    kakao: "KakaoTalk Consultation",
    community: "Join Community",
    autoService: "Automated Services",
    expertConsult: "For company establishment and other professional consultations, please contact us via messenger.",
    passportRule: "Your passport must be valid for at least 6 months to continue the application.",
    idrNoFee: "IDR payment has no additional fee.",
    otherFee: "KRW / USDT payments include local currency exchange and settlement support service (+1%).",
    name: "Full Name",
    passportNo: "Passport Number",
    nationality: "Nationality",
    birthDate: "Date of Birth",
    gender: "Gender",
    location: "Current Location",
    phone: "Phone Number",
    email: "Email",
    address: "Address in Indonesia",
    visaTourist: "Visa on Arrival / Tourist Visa",
    visaExtension: "Visa Extension",
    customs: "e-Customs",
    exchange: "Currency Exchange",
    pickup: "Airport Pickup",
    carRental: "Car Rental",
    accommodation: "Accommodation",
    longStay: "Long-Stay Package",
    unknown: "Not sure / Need consultation",
    paymentTitle: "Payment Policy",
    statusTitle: "Progress Visualization",
    downloadVisa: "Download approved visa from My Page",
  },
  zh: {
    langName: "中文",
    title: "印尼入境与长期居留自动化平台",
    subtitle: "通过手机一次性办理签证、海关申报、货币兑换、机场接送、租车和住宿申请。",
    passportAuto: "上传护照后，申请表将自动填写",
    passportDesc: "客户只需确认护照信息并选择所需服务。",
    uploadPassport: "上传护照照片页",
    uploadHelp: "支持 JPG、PNG、PDF",
    scanPassport: "测试护照自动识别",
    scanning: "正在识别护照信息",
    customerInfo: "确认客户信息",
    serviceSelect: "选择签证 / 服务",
    selectPlaceholder: "请选择所需服务",
    notes: "请输入其他咨询内容",
    consent: "我同意为咨询和服务申请临时收集护照及申请信息。资料不会用于服务目的以外，服务完成后最多保存1年并可删除。",
    submitWhatsapp: "通过 WhatsApp 发送申请",
    kakao: "KakaoTalk 咨询",
    community: "加入社群",
    autoService: "自动服务",
    expertConsult: "公司设立及其他专业咨询请通过聊天工具联系我们。",
    passportRule: "护照有效期必须至少剩余6个月才能继续申请。",
    idrNoFee: "IDR 付款无额外费用。",
    otherFee: "KRW / USDT 付款包含兑换为印尼盾及结算支持服务（+1%）。",
    name: "英文姓名",
    passportNo: "护照号码",
    nationality: "国籍",
    birthDate: "出生日期",
    gender: "性别",
    location: "当前位置",
    phone: "电话号码",
    email: "电子邮件",
    address: "印尼居住地址",
    visaTourist: "落地签 / 旅游签证",
    visaExtension: "签证延期",
    customs: "海关申报",
    exchange: "货币兑换",
    pickup: "机场接送",
    carRental: "租车",
    accommodation: "住宿申请",
    longStay: "长期居留套餐",
    unknown: "不确定 / 需要咨询",
    paymentTitle: "付款政策",
    statusTitle: "进度可视化",
    downloadVisa: "批准后可在个人页面下载签证",
  },
};

const visaQuestions = {
  tourist: ["passportRule"],
  visa_extension: ["passportRule"],
  customs: [],
  exchange: [],
  pickup: [],
  car_rental: [],
  accommodation: [],
  long_stay: [],
  unknown: [],
};

export default function IndonesiaMobilePlatformMultilang() {
  const [lang, setLang] = useState("ko");
  const t = TEXT[lang];
  const [passportFile, setPassportFile] = useState(null);
  const [service, setService] = useState("");
  const [isScanning, setIsScanning] = useState(false);
  const [consent, setConsent] = useState(false);
  const [form, setForm] = useState({
    fullName: "",
    passportNo: "",
    nationality: "",
    birthDate: "",
    gender: "",
    location: "",
    phone: "",
    email: "",
    address: "",
    notes: "",
  });

  const services = useMemo(() => [
    { key: "tourist", label: t.visaTourist, icon: Plane },
    { key: "visa_extension", label: t.visaExtension, icon: FileText },
    { key: "customs", label: t.customs, icon: FileText },
    { key: "exchange", label: t.exchange, icon: WalletCards },
    { key: "pickup", label: t.pickup, icon: Plane },
    { key: "car_rental", label: t.carRental, icon: Car },
    { key: "accommodation", label: t.accommodation, icon: Home },
    { key: "long_stay", label: t.longStay, icon: Building2 },
  ], [t]);

  const updateForm = (key, value) => setForm((prev) => ({ ...prev, [key]: value }));

  const fakeScanPassport = () => {
    setIsScanning(true);
    setTimeout(() => {
      setForm((prev) => ({
        ...prev,
        fullName: prev.fullName || "CHOI MYUNGSUNG",
        passportNo: prev.passportNo || "M12345678",
        nationality: prev.nationality || "KOREA, REPUBLIC OF",
        birthDate: prev.birthDate || "1985-01-01",
        gender: prev.gender || "M",
      }));
      setIsScanning(false);
    }, 900);
  };

  const buildWhatsAppMessage = () => {
    const lines = [
      `[${t.title}]`,
      `${t.serviceSelect}: ${services.find((s) => s.key === service)?.label || ""}`,
      `${t.name}: ${form.fullName}`,
      `${t.passportNo}: ${form.passportNo}`,
      `${t.nationality}: ${form.nationality}`,
      `${t.birthDate}: ${form.birthDate}`,
      `${t.phone}: ${form.phone}`,
      `${t.email}: ${form.email}`,
      `${t.address}: ${form.address}`,
      `${t.notes}: ${form.notes}`,
    ];
    return encodeURIComponent(lines.join("\n"));
  };

  const canSubmit = consent && service && form.fullName && form.passportNo && form.phone && form.email;

  return (
    <div className="min-h-screen bg-slate-950 p-3 text-slate-100">
      <div className="mx-auto max-w-md space-y-4 pb-10">
        <div className="sticky top-0 z-10 -mx-3 bg-slate-950/95 px-3 py-3 backdrop-blur">
          <Select value={lang} onValueChange={setLang}>
            <SelectTrigger className="rounded-2xl border-slate-700 bg-slate-900 text-slate-100">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="ko">🇰🇷 한국어</SelectItem>
              <SelectItem value="id">🇮🇩 Bahasa Indonesia</SelectItem>
              <SelectItem value="en">🇺🇸 English</SelectItem>
              <SelectItem value="zh">🇨🇳 中文</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <section className="rounded-3xl bg-gradient-to-br from-slate-800 to-slate-900 p-5 shadow-xl ring-1 ring-slate-700">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs text-slate-200">
            <ScanLine className="h-4 w-4" /> Web3 Mobile PWA
          </div>
          <h1 className="text-2xl font-bold tracking-tight">{t.title}</h1>
          <p className="mt-3 text-sm leading-6 text-slate-300">{t.subtitle}</p>
        </section>

        <Card className="rounded-3xl border-slate-700 bg-slate-900 text-slate-100 shadow-xl">
          <CardContent className="space-y-4 p-5">
            <div>
              <h2 className="text-xl font-bold">{t.passportAuto}</h2>
              <p className="mt-2 text-sm leading-6 text-slate-400">{t.passportDesc}</p>
            </div>

            <label className="flex cursor-pointer flex-col items-center justify-center rounded-3xl border-2 border-dashed border-slate-600 bg-slate-800 p-6 text-center hover:bg-slate-700">
              <Upload className="mb-3 h-9 w-9 text-slate-300" />
              <p className="font-semibold">{t.uploadPassport}</p>
              <p className="mt-1 text-xs text-slate-400">{t.uploadHelp}</p>
              <Input type="file" accept="image/*,.pdf" className="hidden" onChange={(e) => setPassportFile(e.target.files?.[0] || null)} />
            </label>

            {passportFile && <p className="rounded-2xl bg-slate-800 p-3 text-xs text-slate-300">{passportFile.name}</p>}

            <Button onClick={fakeScanPassport} disabled={!passportFile || isScanning} className="w-full rounded-2xl py-6">
              {isScanning ? <RefreshCw className="mr-2 h-4 w-4 animate-spin" /> : <ScanLine className="mr-2 h-4 w-4" />}
              {isScanning ? t.scanning : t.scanPassport}
            </Button>
          </CardContent>
        </Card>

        <Card className="rounded-3xl border-slate-700 bg-slate-900 text-slate-100 shadow-xl">
          <CardContent className="space-y-3 p-5">
            <h2 className="text-lg font-bold">{t.customerInfo}</h2>
            <Input placeholder={t.name} value={form.fullName} onChange={(e) => updateForm("fullName", e.target.value)} />
            <Input placeholder={t.passportNo} value={form.passportNo} onChange={(e) => updateForm("passportNo", e.target.value)} />
            <div className="grid grid-cols-2 gap-3">
              <Input placeholder={t.nationality} value={form.nationality} onChange={(e) => updateForm("nationality", e.target.value)} />
              <Input placeholder={t.birthDate} value={form.birthDate} onChange={(e) => updateForm("birthDate", e.target.value)} />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <Input placeholder={t.gender} value={form.gender} onChange={(e) => updateForm("gender", e.target.value)} />
              <Input placeholder={t.location} value={form.location} onChange={(e) => updateForm("location", e.target.value)} />
            </div>
            <Input placeholder={t.phone} value={form.phone} onChange={(e) => updateForm("phone", e.target.value)} />
            <Input placeholder={t.email} value={form.email} onChange={(e) => updateForm("email", e.target.value)} />
            <Input placeholder={t.address} value={form.address} onChange={(e) => updateForm("address", e.target.value)} />
          </CardContent>
        </Card>

        <Card className="rounded-3xl border-slate-700 bg-slate-900 text-slate-100 shadow-xl">
          <CardContent className="space-y-4 p-5">
            <h2 className="text-lg font-bold">{t.serviceSelect}</h2>
            <div className="grid grid-cols-2 gap-3">
              {services.map(({ key, label, icon: Icon }) => (
                <button
                  key={key}
                  onClick={() => setService(key)}
                  className={`rounded-2xl p-4 text-left ring-1 transition ${service === key ? "bg-white text-slate-950 ring-white" : "bg-slate-800 text-slate-100 ring-slate-700"}`}
                >
                  <Icon className="mb-2 h-5 w-5" />
                  <span className="text-sm font-semibold">{label}</span>
                </button>
              ))}
            </div>
            {service && visaQuestions[service]?.includes("passportRule") && (
              <div className="rounded-2xl bg-amber-500/10 p-3 text-xs leading-5 text-amber-200 ring-1 ring-amber-500/30">
                {t.passportRule}
              </div>
            )}
            <Textarea placeholder={t.notes} value={form.notes} onChange={(e) => updateForm("notes", e.target.value)} className="min-h-24" />
          </CardContent>
        </Card>

        <Card className="rounded-3xl border-slate-700 bg-slate-900 text-slate-100 shadow-xl">
          <CardContent className="space-y-3 p-5">
            <h2 className="text-lg font-bold">{t.paymentTitle}</h2>
            <div className="rounded-2xl bg-slate-800 p-3 text-sm">🇮🇩 {t.idrNoFee}</div>
            <div className="rounded-2xl bg-slate-800 p-3 text-sm">🇰🇷 🌐 {t.otherFee}</div>
          </CardContent>
        </Card>

        <Card className="rounded-3xl border-slate-700 bg-slate-900 text-slate-100 shadow-xl">
          <CardContent className="space-y-3 p-5">
            <h2 className="text-lg font-bold">{t.statusTitle}</h2>
            <div className="space-y-2 text-sm">
              <div>● Application Received</div>
              <div>● Payment Confirmed</div>
              <div>◐ Document Review</div>
              <div>○ Immigration Submission</div>
              <div>○ Approval / Download</div>
            </div>
            <p className="text-xs text-slate-400">{t.downloadVisa}</p>
          </CardContent>
        </Card>

        <label className="flex items-start gap-3 rounded-3xl bg-slate-900 p-4 text-xs leading-5 text-slate-300 ring-1 ring-slate-700">
          <input type="checkbox" className="mt-1" checked={consent} onChange={(e) => setConsent(e.target.checked)} />
          <span>{t.consent}</span>
        </label>

        <div className="grid gap-3">
          <Button
            disabled={!canSubmit}
            onClick={() => window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${buildWhatsAppMessage()}`, "_blank")}
            className="rounded-2xl py-6 text-base"
          >
            <MessageCircle className="mr-2 h-5 w-5" /> {t.submitWhatsapp}
          </Button>
          <div className="grid grid-cols-2 gap-3">
            <Button variant="secondary" onClick={() => window.open(KAKAO_LINK, "_blank")} className="rounded-2xl py-5">{t.kakao}</Button>
            <Button variant="secondary" onClick={() => window.open(COMMUNITY_LINK, "_blank")} className="rounded-2xl py-5">{t.community}</Button>
          </div>
        </div>

        <div className="rounded-3xl bg-slate-900 p-4 text-sm text-slate-300 ring-1 ring-slate-700">
          <p className="font-semibold text-slate-100">{t.autoService}</p>
          <p className="mt-2 text-xs leading-5">{t.expertConsult}</p>
        </div>
      </div>
    </div>
  );
}
