// app/contact/page.tsx
"use client";

import React, { useEffect, useRef, useState } from "react";
import { ReactElement } from "react";
import LightRays from "../LightRays/LightRays";
import Particles from "../Particles/Particles";
import { FaBriefcase, FaArrowLeft, FaAngleUp } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";

export default function ContactWhatsAppPage(): ReactElement {
  const [toTopVisible, setToTopVisible] = useState(false);
  const noAdminRef = useRef<HTMLInputElement | null>(null);
  const namaRef = useRef<HTMLInputElement | null>(null);
  const alamatRef = useRef<HTMLInputElement | null>(null);
  const pesanRef = useRef<HTMLTextAreaElement | null>(null);
  const formRef = useRef<HTMLFormElement | null>(null);

  // default admin number from your original script
  useEffect(() => {
    if (noAdminRef.current) {
      // keep original raw string "085157739045"
      noAdminRef.current.value = "085157739045";
    }
  }, []);

  // scroll listener for to-top button
  useEffect(() => {
    if (typeof window === "undefined") return;
  
    const onScroll = () => {
      setToTopVisible(window.scrollY > 200);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  
  
  // helper: normalize phone number to international with country code 62
  const normalizePhoneTo62 = (raw: string) => {
    if (!raw) return "";
    let s = raw.replace(/[^\d+]/g, ""); // keep digits and plus
    // remove leading + if using explicit plus, but we will convert to 62
    // if starts with '0' -> replace with '62'
    if (s.startsWith("+")) s = s.slice(1);
    if (s.startsWith("62")) return s;
    if (s.startsWith("0")) return "62" + s.slice(1);
    // if it is other (e.g. "8515..."), assume local without leading zero
    if (s.length >= 8) return "62" + s;
    return s;
  };

  // detect mobile (to choose whatsapp scheme or web)
  const isMobileDevice = () => {
    if (typeof navigator === "undefined") return false;
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    );
  };
  
  // send WhatsApp message — replicates original logic (popup window)
  // const sendWhatsApp = (e?: React.MouseEvent | React.FormEvent) => {
  //   e?.preventDefault?.();

  //   const nama = namaRef.current?.value?.trim() ?? "";
  //   const alamat = alamatRef.current?.value?.trim() ?? "";
  //   const pesan = pesanRef.current?.value?.trim() ?? "";
  //   const tujuanRaw = noAdminRef.current?.value?.trim() ?? "";

  //   // validation like original: check Nama, Alamat, Pesan
  //   if (!nama) {
  //     alert((namaRef.current?.placeholder ?? "Nama") as string);
  //     namaRef.current?.focus();
  //     return;
  //   }
  //   if (!alamat) {
  //     alert((alamatRef.current?.placeholder ?? "Alamat") as string);
  //     alamatRef.current?.focus();
  //     return;
  //   }
  //   if (!pesan) {
  //     alert((pesanRef.current?.placeholder ?? "Pesan") as string);
  //     pesanRef.current?.focus();
  //     return;
  //   }

  //   // normalize target number
  //   const phone = normalizePhoneTo62(tujuanRaw);
  //   if (!phone) {
  //     alert("Nomor tujuan tidak valid.");
  //     return;
  //   }

  //   // base URL
  //   const baseUrl = isMobileDevice() ? "whatsapp://send" : "https://web.whatsapp.com/send";

  //   // Build message similar to original template (with location URL included)
  //   const via_url = location.href || "";
  //   const templateText = "Web Form WhatsAppFast";
  //   const message = [`Nama    : ${nama}`, `Alamat  : ${alamat}`, "", `Pesan   :`, `${pesan}`, "", `${templateText}`, `${via_url}`].join("%0A"); // using %0A line breaks (encoded)

  //   // construct final URL
  //   const finalUrl = `${baseUrl}?phone=${encodeURIComponent(phone)}&text=${message}`;

  //   // open popup window for web (mobile will try to open scheme)
  //   const w = 960;
  //   const h = 540;
  //   const left = Number(screen.width / 2 - w / 2);
  //   const top = Number(screen.height / 2 - h / 2);
  //   const features = `toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=1,copyhistory=no,width=${w},height=${h},top=${top},left=${left}`;
  //   const popup = window.open(finalUrl, "_blank", features);

  //   if (popup) {
  //     popup.focus();
  //   } else {
  //     // if popup blocked, fallback to direct navigation
  //     window.location.href = finalUrl;
  //   }
  // };

  const sendWhatsApp = (e?: React.MouseEvent | React.FormEvent) => {
    e?.preventDefault?.();
  
    const nama = namaRef.current?.value?.trim() ?? "";
    const alamat = alamatRef.current?.value?.trim() ?? "";
    const pesan = pesanRef.current?.value?.trim() ?? "";
    const tujuanRaw = noAdminRef.current?.value?.trim() ?? "";
  
    if (!nama) { alert((namaRef.current?.placeholder ?? "Nama") as string); namaRef.current?.focus(); return; }
    if (!alamat) { alert((alamatRef.current?.placeholder ?? "Alamat") as string); alamatRef.current?.focus(); return; }
    if (!pesan) { alert((pesanRef.current?.placeholder ?? "Pesan") as string); pesanRef.current?.focus(); return; }
  
    const phone = normalizePhoneTo62(tujuanRaw);
    if (!phone) { alert("Nomor tujuan tidak valid."); return; }
  
    const mobile = isMobileDevice();
  
    const baseUrl = mobile ? "whatsapp://send" : "https://web.whatsapp.com/send";
  
    const via_url = typeof window !== "undefined" && window.location ? window.location.href : "";
    const templateText = "Web Form WhatsAppFast";
    const message = [
      `Nama    : ${nama}`,
      `Alamat  : ${alamat}`,
      "",
      `Pesan   :`,
      `${pesan}`,
      "",
      `${templateText}`,
      `${via_url}`
    ].join("%0A");
  
    const finalUrl = `${baseUrl}?phone=${encodeURIComponent(phone)}&text=${message}`;
  
    // screen may be undefined on some environments, protect it
    const w = 960;
    const h = 540;
    const left = (typeof screen !== "undefined" && typeof screen.width === "number")
      ? Math.round(screen.width / 2 - w / 2)
      : 0;
    const top = (typeof screen !== "undefined" && typeof screen.height === "number")
      ? Math.round(screen.height / 2 - h / 2)
      : 0;
    const features = `toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=1,copyhistory=no,width=${w},height=${h},top=${top},left=${left}`;
  
    if (typeof window !== "undefined") {
      const popup = window.open(finalUrl, "_blank", features);
      if (popup) {
        popup.focus();
      } else {
        window.location.href = finalUrl;
      }
    } else {
      // fallback: nothing to do at server prerender time
      console.warn("Attempted to open WhatsApp link on server - ignored");
    }
  };
  

  // allow Enter to submit from inputs & textarea
  const onKeyPressSubmit = (ev: React.KeyboardEvent) => {
    if (ev.key === "Enter") {
      // prevent accidental form submit when inside textarea (user probably wants newline)
      const target = ev.target as HTMLElement;
      if (target && target.tagName.toLowerCase() === "textarea") return;
      sendWhatsApp(ev as any);
    }
  };

  return (
    <section id="contact" className="relative pt-36 pb-32 overflow-hidden">
      {/* LightRays sebagai background penuh (tidak menangkap event pointer) */}
      <div className="absolute inset-0 w-full h-full z-0 pointer-events-none" aria-hidden="true">
        <Particles />
      </div>

      <div
        className="absolute inset-0 z-10 pointer-events-none"
        style={{
          background: "linear-gradient(to top, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.0) 20%, rgba(0,0,0,0.0) 100%, rgba(0,0,0,0.6) 100%)",
        }}
      />
      <div
        className="absolute inset-0 z-10 pointer-events-none"
        style={{
          background: "linear-gradient(to bottom, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.0) 20%, rgba(0,0,0,0.0) 80%, rgba(0,0,0,0.6) 100%)",
        }}
      />

      {/* Optional: overlay tipis agar teks kontras (pointer-events-none supaya tidak blokir klik) */}
      <div className="absolute inset-0 z-5 pointer-events-none bg-black/40" />

      {/* Konten asli — pastikan relative dan z-10 supaya tampil di atas background */}
      <div className="relative z-10 max-w-6xl mx-auto px-4">
        <div className="w-full pb-30">
          {/* Heading */}
          <h2 className="text-4xl font-extrabold text-center text-white flex items-center justify-center gap-3">
            <BsFillTelephoneFill className="text-[#7c3aed]" />
            Contact
          </h2>

          {/* Quote */}
          <p className="text-center text-2xl font-semibold mt-4 text-white">“Every experience in your life is being orchestrated to teach you something you need to know to move forward.”</p>
        </div>

        {/* --- mulai formmu tetap sama, tinggal paste form lama di sini --- */}
        <form id="whatsapp" className="w-full lg:w-2/3 lg:mx-auto mb-30">
          <input type="hidden" id="noAdmin" className="tujuan" />
          <div className="w-full px-4 mb-8">
            <label className="text-xl font-bold text-[#fff] block mb-2">Nama Lengkap</label>
            <input placeholder="Nama Lengkap" className="w-full bg-[#170d27] text-white p-3 rounded-lg" />
          </div>
          <div className="w-full px-4 mb-8">
            <label className="text-xl font-bold text-[#fff] block mb-2">Alamat</label>
            <input placeholder="No.Rumah..." className="w-full bg-[#170d27] text-white p-3 rounded-lg" />
          </div>
          <div className="w-full px-4 mb-8">
            <label className="text-xl font-bold text-[#fff] block mb-2">Pesan</label>
            <textarea placeholder="Silahkan Tulis..." className="w-full bg-[#170d27] text-white p-3 rounded-lg h-32" />
          </div>
          <div className="w-full px-4">
            <button type="button" className="text-xl font-bold text-white bg-[#7c3aed] py-3 px-8 w-full rounded-full">
              Kirim
            </button>
          </div>
        </form>
        {/* --- end form --- */}
      </div>
    </section>
  );
}
