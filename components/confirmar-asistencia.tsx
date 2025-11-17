"use client";

import { useState } from "react";

// --- DATA DE FAMILIAS E INTEGRANTES ---
const families = {
  "Matilde – Miguel": ["Matilde", "Miguel"],
  "Oscar – Natasha": ["Oscar", "Natasha"],
  "Alberto – Lorena – Thiago – Ámbar": ["Alberto", "Lorena", "Thiago", "Ámbar"],
  "Carlos – Lujan – Román": ["Carlos", "Lujan", "Román"],
  "Michel": ["Michel"],
  "Matias – Dana": ["Matias", "Dana"],
  "Carmen – Maira": ["Carmen", "Maira"],
  "Catalina – Justo": ["Catalina", "Justo"],
  "Malena – Josue": ["Malena", "Josue"],
  "Alice – Alberto – Maia – Santino": ["Alice", "Alberto", "Maia", "Santino"],
  "Osvaldo – Thomas – Thadeo": ["Osvaldo", "Thomas", "Thadeo"],
  "Araceli – Ramon – Emilia": ["Araceli", "Ramon", "Emilia"],
};

export default function ConfirmarAsistencia() {
  const [family, setFamily] = useState("");
  const [responses, setResponses] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleSelect = (fam) => {
    setFamily(fam);
    const initialMembers = {};
    families[fam].forEach((m) => (initialMembers[m] = ""));
    setResponses(initialMembers);
  };

  const handleSubmit = () => {
    const phone = "5491133018648"; // número destino sin espacios ni guiones

    let message = `Confirmación%0A${family}%0A%0A`;

    Object.entries(responses).forEach(([member, status]) => {
      message += `- ${member}: ${status}%0A`;
    });

    const url = `https://wa.me/${phone}?text=${message}`;
    window.location.href = url;

    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-pink-100 to-purple-200 flex items-center justify-center p-6">
        <div className="max-w-xl w-full bg-white/80 backdrop-blur-md p-8 rounded-3xl shadow-xl space-y-8 border border-white/50">
          <div className="p-6 text-center text-xl">
            ✔ Gracias, se abrió WhatsApp para enviar tu confirmación.
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-xl mx-auto p-6 space-y-6">
      <h1 className="text-4xl font-extrabold text-center text-purple-700 drop-shadow-sm">Confirmación de Asistencia</h1>

      {/* Selección de familia */}
      <div className="space-y-2 bg-white/70 p-4 rounded-2xl shadow-inner border border-purple-100">
        <label className="font-semibold">Seleccioná tu familia:</label>
        <select
          className="w-full p-3 rounded-xl border"
          value={family}
          onChange={(e) => handleSelect(e.target.value)}
        >
          <option value="">Elegir...</option>
          {Object.keys(families).map((f) => (
            <option key={f} value={f}>
              {f}
            </option>
          ))}
        </select>
      </div>

      {/* Integrantes */}
      {family && (
        <div className="p-4 space-y-4 bg-white rounded-xl shadow">
          {families[family].map((member) => (
            <div key={member}>
              <label>{member}</label>
              <select
                className="w-full p-2 border rounded-xl"
                value={responses[member]}
                onChange={(e) =>
                  setResponses({ ...responses, [member]: e.target.value })
                }
              >
                <option value="">Elegir...</option>
                <option value="Sí">Sí</option>
                <option value="No">No</option>
              </select>
            </div>
          ))}
        </div>
      )}

      {/* Botón enviar */}
      {family && (
        <button
          className="w-full p-4 rounded-2xl bg-purple-600 hover:bg-purple-700 transition text-white text-lg font-semibold shadow-md hover:shadow-xl"
          onClick={handleSubmit}
        >
          Enviar confirmación por WhatsApp
        </button>
      )}
    </div>
  );
}
