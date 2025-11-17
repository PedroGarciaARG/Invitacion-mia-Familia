"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Volume2 } from 'lucide-react';
import ConfirmarAsistencia from "@/components/confirmar-asistencia";

export default function InvitationMia() {
  const targetDate = new Date("2025-12-27T21:30:00-03:00");
  const [now, setNow] = useState(new Date());
  const [showIntroVideo, setShowIntroVideo] = useState(true);
  const [showContent, setShowContent] = useState(false);
  const [audioEnabled, setAudioEnabled] = useState(false);
  const [showAudioPrompt, setShowAudioPrompt] = useState(true);
  const audioRef = useRef<HTMLAudioElement>(null);
  const introVideoRef = useRef<HTMLVideoElement>(null);
  const [showRSVP, setShowRSVP] = useState(false);

  const handleEnableAudio = () => {
    setShowAudioPrompt(false);
    setAudioEnabled(true);
    if (audioRef.current) {
      audioRef.current.play().catch(e => console.log("Audio play error:", e));
    }
  };

  useEffect(() => {
    const t = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(t);
  }, []);

  const handleIntroVideoEnd = () => {
    setShowIntroVideo(false);
    setShowContent(true);
  };

  function getCountdownParts() {
    const diff = Math.max(0, targetDate.getTime() - now.getTime());
    const sec = Math.floor(diff / 1000) % 60;
    const min = Math.floor(diff / 1000 / 60) % 60;
    const hrs = Math.floor(diff / (1000 * 60 * 60)) % 24;
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    return { days, hrs, min, sec };
  }

  const { days, hrs, min, sec } = getCountdownParts();

  const mapsUrl = "https://www.google.com/maps/place/Beirut+Recepciones/@-34.7023036,-58.3850869,20z/data=!4m15!1m8!3m7!1s0x95bccd266d06670b:0xc07fdd7f7de9d918!2sPres.+Domingo+Faustino+Sarmiento+1351,+B1824NVK+Lan%C3%BAs,+Provincia+de+Buenos+Aires!3b1!8m2!3d-34.7021801!4d-58.3846712!16s%2Fg%2F11k64xcv8v!3m5!1s0x95bccd260cfa7e75:0x92efe9b7a6e06fd2!8m2!3d-34.7023075!4d-58.3845827!16s%2Fg%2F11cmp5hfx_?entry=ttu&g_ep=EgoyMDI1MTExMi4wIKXMDSoASAFQAw%3D%3D";
  const whatsappText = encodeURIComponent(
    `Hola! Quiero confirmar mi asistencia al cumpleaños de Mía el Sábado 27 de Diciembre de 2025 a las 21:30.`
  );
  const whatsappUrl = `https://wa.me/5491133018648?text=${whatsappText}`;

  return (
    <div className="fixed inset-0 w-screen h-screen overflow-hidden">
      <audio ref={audioRef} loop>
        <source src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Christina%20Aguilera%20-%20Genie%20In%20A%20Bottle%20%28Official%20Video%29-mTI56cowYmOAebKOVlq429gVunVhgA.mp3" type="audio/mpeg" />
      </audio>

      {showAudioPrompt && (
        <div className="fixed inset-0 z-[100] bg-black/80 flex items-center justify-center p-4">
          <motion.button
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            onClick={handleEnableAudio}
            className="bg-pink-600 text-white px-8 py-4 rounded-full font-semibold text-lg flex items-center gap-3 hover:bg-pink-700 transition-colors shadow-2xl"
          >
            <Volume2 className="w-6 h-6" />
            Comenzar con Música
          </motion.button>
        </div>
      )}

      <AnimatePresence>
        {showIntroVideo && !showAudioPrompt && (
          <motion.div
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black"
          >
            <video
              ref={introVideoRef}
              autoPlay
              muted
              playsInline
              onEnded={handleIntroVideoEnd}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full object-contain"
            >
              <source src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Parte%201%20mia-gMsFPtPZrJ0Vj0Y6MNPphUv3jKL6vT.mp4" type="video/mp4" />
            </video>
          </motion.div>
        )}
      </AnimatePresence>

      {showContent && (
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full object-contain"
        >
          <source src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Parte%202%20mia-6LPk06lDojdCXIlP9c5NJkOPEFP0qN.mp4" type="video/mp4" />
        </video>
      )}

      <AnimatePresence>
        {showContent && !showRSVP && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="relative z-10 h-full w-full overflow-y-auto overflow-x-hidden flex items-center justify-center p-3 sm:p-6 lg:p-8"
          >
            <div className="w-full max-w-5xl bg-white/95 backdrop-blur-xl rounded-2xl sm:rounded-3xl shadow-2xl p-5 sm:p-8 md:p-10 lg:p-12 my-4">
              {/* Header */}
              <div className="text-center mb-5 sm:mb-8">
                <motion.h1
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-5xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-2 sm:mb-4"
                >
                  Mis XV
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="text-base sm:text-xl md:text-2xl text-gray-600"
                >
                  Sábado 27 de Diciembre, 2025
                </motion.p>
              </div>

              {/* Countdown */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="mb-6 sm:mb-10 lg:mb-12"
              >
                <div className="grid grid-cols-4 gap-2 sm:gap-3 md:gap-4 max-w-2xl mx-auto">
                  {[
                    { value: days, label: "DÍAS" },
                    { value: hrs, label: "HORAS" },
                    { value: min, label: "MIN" },
                    { value: sec, label: "SEG" },
                  ].map((item, i) => (
                    <div key={i} className="bg-gray-100 rounded-xl sm:rounded-2xl p-3 sm:p-3 md:p-4 text-center">
                      <div className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-1 sm:mb-1">
                        {String(item.value).padStart(2, "0")}
                      </div>
                      <div className="text-[11px] sm:text-xs md:text-sm text-gray-600 uppercase tracking-wide">
                        {item.label}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Event details */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 }}
                className="grid sm:grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 mb-6 sm:mb-8"
              >
                <div className="bg-gray-50 rounded-xl sm:rounded-2xl p-5 sm:p-5 md:p-6">
                  <h3 className="text-xl sm:text-xl font-semibold text-gray-900 mb-3 sm:mb-4 flex items-center gap-2">
                    <MapPin className="w-5 h-5 sm:w-5 sm:h-5 text-pink-600" />
                    Detalles del Evento
                  </h3>
                  <div className="space-y-2 sm:space-y-3 text-base sm:text-base text-gray-700">
                    <p>
                      <strong className="text-gray-900">Lugar:</strong> Beirut Recepciones
                    </p>
                    <p className="text-sm sm:text-sm">Pres. D. F. Sarmiento 1351, Lanús</p>
                    <p>
                      <strong className="text-gray-900">Hora:</strong> 21:30 - 05:30
                    </p>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-xl sm:rounded-2xl p-5 sm:p-5 md:p-6">
                  <h3 className="text-xl sm:text-xl font-semibold text-gray-900 mb-3 sm:mb-4">Información Adicional</h3>
                  <div className="space-y-2 sm:space-y-3 text-base sm:text-base text-gray-700">
                    <p>
                      <strong className="text-gray-900">Dress Code:</strong> Elegante
                    </p>
                    <p>
                      <strong className="text-gray-900">Alias:</strong> miasenorelli.mp
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Action buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.1 }}
                className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center"
              >
                <button
                  onClick={() => setShowRSVP(true)}
                  className="px-8 sm:px-8 py-4 sm:py-4 bg-pink-600 text-white rounded-full font-semibold text-base sm:text-base text-center hover:bg-pink-700 transition-colors shadow-lg"
                >
                  Confirmar Asistencia
                </button>
                <a
                  href={mapsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="px-8 sm:px-8 py-4 sm:py-4 bg-gray-200 text-gray-900 rounded-full font-semibold text-base sm:text-base text-center hover:bg-gray-300 transition-colors"
                >
                  Ver Ubicación
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {showRSVP && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="relative z-10 h-full w-full overflow-y-auto overflow-x-hidden flex items-center justify-center p-3 sm:p-6 lg:p-8 bg-gradient-to-br from-pink-100/95 to-purple-200/95"
        >
          <ConfirmarAsistencia />
        </motion.div>
      )}
    </div>
  );
}
