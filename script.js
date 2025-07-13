const ramos = {
  // Primer año
  "Fundamentos Matemáticos": { habilita: ["Métodos Matemáticos 1"] },
  "Liderazgo basado en Valores": {},
  "Contexto Organizacional": { habilita: ["Gestión de Negocios Sostenibles", "Aspectos Legales"] },
  "Contabilidad": { habilita: ["Contabilidad Financiera"] },
  "Taller B.A 1": { habilita: ["Taller B.A 2"] },
  "Introducción P. Filosófico": { habilita: ["Identidad Personal"] },
  "Inglés 1": { habilita: ["Inglés 2"] },

  "Métodos Matemáticos 1": { requisitos: ["Fundamentos Matemáticos"], habilita: ["Métodos Matemáticos 2", "Microeconomía"] },
  "Introducción a la Economía": { habilita: ["Macroeconomía"] },
  "Gestión de Negocios Sostenibles": { requisitos: ["Contexto Organizacional"], habilita: ["Fundamentos del Marketing"] },
  "Contabilidad Financiera": { requisitos: ["Contabilidad"], habilita: ["Costos y Decisiones"] },
  "Identidad Personal": { requisitos: ["Introducción P. Filosófico"], habilita: ["Antropología Filosófica"] },
  "Comunicación Efectiva": {},
  "Inglés 2": { requisitos: ["Inglés 1"], habilita: ["Inglés 3"] },

  // Segundo año
  "Métodos Matemáticos 2": { requisitos: ["Métodos Matemáticos 1"], habilita: ["Métodos Matemáticos 3", "Estadística 1"] },
  "Macroeconomía": { requisitos: ["Introducción a la Economía"], habilita: ["Microeconomía", "Electivo 1", "Electivo 2", "Electivo 3", "Electivo 4"] },
  "Aspectos Legales": { requisitos: ["Contexto Organizacional"], habilita: ["Electivo 1", "Electivo 2", "Electivo 3", "Electivo 4"] },
  "Fundamentos del Marketing": { requisitos: ["Gestión de Negocios Sostenibles"], habilita: ["Conducta del Consumidor"] },
  "Taller B.A 2": { requisitos: ["Taller B.A 1"], habilita: ["Taller B.A 3", "Electivo 1", "Electivo 2", "Electivo 3", "Electivo 4"] },
  "Antropología Filosófica": { requisitos: ["Identidad Personal"], habilita: ["Apreciación L.A"] },
  "Inglés 3": { requisitos: ["Inglés 2"], habilita: ["Inglés 4"] },

  "Métodos Matemáticos 3": { requisitos: ["Métodos Matemáticos 2"], habilita: ["Métodos Matemáticos 4", "Electivo 1", "Electivo 2", "Electivo 3", "Electivo 4"] },
  "Estadística 1": { requisitos: ["Métodos Matemáticos 2"], habilita: ["Estadística 2", "Investigación de Mercado", "Electivo 1", "Electivo 2", "Electivo 3", "Electivo 4"] },
  "Gestión de Talento": { habilita: ["Desempeño Organizacional", "Electivo 1", "Electivo 2", "Electivo 3", "Electivo 4"] },
  "Costos y Decisiones": { requisitos: ["Contabilidad Financiera"], habilita: ["Adm. Financiera", "Electivo 1", "Electivo 2", "Electivo 3", "Electivo 4"] },
  "Conducta del Consumidor": { requisitos: ["Fundamentos del Marketing"], habilita: ["Investigación de Mercado", "Electivo 1", "Electivo 2", "Electivo 3", "Electivo 4"] },
  "Apreciación L.A": { requisitos: ["Antropología Filosófica"], habilita: ["Ética General"] },
  "Inglés 4": { requisitos: ["Inglés 3"], habilita: ["Inglés 5"] },

  // Tercer año
  "Métodos Matemáticos 4": { requisitos: ["Métodos Matemáticos 3"], habilita: ["Econometría", "Gestión de Operaciones"] },
  "Estadística 2": { requisitos: ["Estadística 1"], habilita: ["Econometría"] },
  "Microeconomía": { requisitos: ["Macroeconomía", "Métodos Matemáticos 1"], habilita: ["Mercado y Estructura"] },
  "Adm. Financiera": { requisitos: ["Costos y Decisiones"], habilita: ["Finanzas Corporativas"] },
  "Investigación de Mercado": { requisitos: ["Estadística 1", "Conducta del Consumidor"], habilita: ["Marketing Estratégico"] },
  "Ética General": { requisitos: ["Apreciación L.A"] },
  "Inglés 5": { requisitos: ["Inglés 4"] },

  "Econometría": { requisitos: ["Métodos Matemáticos 4", "Estadística 2"] },
  "Mercado y Estructura": { requisitos: ["Microeconomía"], habilita: ["Análisis Económico"] },
  "Desempeño Organizacional": { requisitos: ["Gestión de Talento"] },
  "Marketing Estratégico": { requisitos: ["Investigación de Mercado"], habilita: ["Dirección Estratégica"] },
  "Taller B.A 3": { requisitos: ["Taller B.A 2"] },

  // Cuarto año
  "Dirección Estratégica": { requisitos: ["Marketing Estratégico"], habilita: ["Juego de Negocios", "Impl. Control.E"] },
  "Gestión de Operaciones": { requisitos: ["Métodos Matemáticos 4"] },
  "Finanzas Corporativas": { requisitos: ["Adm. Financiera"], habilita: ["Valoración", "Juego de Negocios", "Impl. Control.E"] },
  "Persona y Trascendencia": {},
  "Electivo 1": {},
  "Electivo 2": {},
  "Electivo 3": {},
  "Electivo 4": {},

  "Análisis Económico": { requisitos: ["Mercado y Estructura"] },
  "Impl. Control.E": { requisitos: ["Dirección Estratégica", "Finanzas Corporativas"] },
  "Juego de Negocios": { requisitos: ["Dirección Estratégica", "Finanzas Corporativas"], habilita: ["Magíster"] },
  "Valoración": { requisitos: ["Finanzas Corporativas"], habilita: ["Magíster"] },
  "Magíster": { requisitos: ["Valoración", "Juego de Negocios"] }
};

const container = document.getElementById("malla");

function renderRamos() {
  for (const nombre in ramos) {
    const div = document.createElement("div");
    div.className = "ramo locked";
    div.innerText = nombre;
    div.dataset.nombre = nombre;
    container.appendChild(div);
  }
  actualizar();
}

function puedeDesbloquear(nombre) {
  const reqs = ramos[nombre].requisitos || [];
  return reqs.every(req => ramos[req]?.aprobado);
}

function actualizar() {
  document.querySelectorAll(".ramo").forEach(div => {
    const nombre = div.dataset.nombre;
    const datos = ramos[nombre];
    div.className = "ramo";

    if (datos.aprobado) {
      div.classList.add("approved");
    } else if (!puedeDesbloquear(nombre)) {
      div.classList.add("locked");
    }
  });
}

container.addEventListener("click", e => {
  const div = e.target;
  const nombre = div.dataset.nombre;
  if (!nombre || !puedeDesbloquear(nombre)) return;

  ramos[nombre].aprobado = !ramos[nombre].aprobado;
  actualizar();
});

renderRamos();

