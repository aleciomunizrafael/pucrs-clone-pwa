/* ==========================================================================
   PUCRS clone — app shell & screens (vanilla JS)
   ========================================================================== */
(function () {
  const I = window.ICON;
  const D = window.DATA;
  const screen = document.getElementById("screen");
  const tabbar = document.getElementById("tabbar");
  const modalRoot = document.getElementById("modal-root");

  // ---- Router state --------------------------------------------------------
  const state = {
    tab: "home",
    acadRoute: null, // null (menu) | notas | freq | grade | cartao | solicitacoes
    year: 2026,
    sem: "S2",
  };

  const TABS = [
    { id: "home", label: "Home", icon: "home" },
    { id: "academico", label: "Acadêmico", icon: "cap" },
    { id: "estacionamento", label: "Estacionam...", icon: "car" },
    { id: "biblioteca", label: "Biblioteca", icon: "book" },
    { id: "menu", label: "Menu", icon: "menu" },
  ];

  const ACAD_MENU = [
    { id: "grade", icon: "calendar", label: "Grade de horários e salas" },
    { id: "freq", icon: "userX", label: "Frequências e faltas" },
    { id: "notas", icon: "barChart", label: "Notas e avaliações" },
    { id: "cartao", icon: "idCard", label: "Cartão Acadêmico" },
    { id: "solicitacoes", icon: "checkCircle", label: "Solicitações acadêmicas" },
  ];

  // ---- Helpers -------------------------------------------------------------
  const el = (html) => {
    const t = document.createElement("template");
    t.innerHTML = html.trim();
    return t.content.firstElementChild;
  };
  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

  function header({ back = false, logo = true, bell = true, title = "" } = {}) {
    return `
      <header class="app-header">
        ${back ? `<button class="icon-btn ghost" data-back aria-label="Voltar">${I.arrowLeft()}</button>` : `<span></span>`}
        ${logo ? `<div class="logo">PUC<span class="rs">RS</span></div>` : ""}
        ${bell ? `<button class="bell-wrap icon-btn" aria-label="Notificações">${I.bell()}<span class="dot"></span></button>` : `<span></span>`}
        ${title ? `<div class="screen-title">${esc(title)}</div>` : ""}
      </header>`;
  }

  // ---- Screens -------------------------------------------------------------
  function homeScreen() {
    const s = D.student;
    const n = D.nextClass;
    const qa = D.quickAccess
      .map(
        (q) => `
      <button class="qa" data-qa="${q.action}">
        <div class="top">
          <span class="${q.color}">${I[q.icon]()}</span>
          ${q.tag ? `<span class="tag">${esc(q.tag.split("\n")[0])}<b>${esc(q.tag.split("\n")[1] || "")}</b></span>` : ""}
        </div>
        <div>
          <div class="label">${esc(q.label)}</div>
          <div class="sub">${esc(q.sub)}</div>
        </div>
      </button>`
      )
      .join("");

    return `
      ${header()}
      <section class="greeting">
        <div class="hi">Olá,</div>
        <div class="name">${esc(s.name)}</div>
        <div class="course">${esc(s.course)}</div>
        <div class="reg">${esc(s.reg)}</div>
      </section>

      <div class="section-head">
        <h2>Próxima aula</h2>
        <button class="round-next" aria-label="Ver agenda">${I.arrowRight()}</button>
      </div>

      <div class="card next-class">
        <div class="nc-row">
          <span class="item">${I.calendar()}${esc(n.day)}</span>
          <span class="item">${I.clock()}${esc(n.time)}</span>
        </div>
        <div class="nc-title">${esc(n.title)}</div>
        <div class="nc-turma">${esc(n.turma)}</div>
        <div class="nc-loc">${esc(n.location)}</div>
      </div>

      <div class="quick">${qa}</div>`;
  }

  function academicoScreen() {
    switch (state.acadRoute) {
      case "notas":
        return acadGradesScreen("notas");
      case "freq":
        return acadGradesScreen("freq");
      case "grade":
        return placeholderSub("calendar", "Grade de horários e salas", "Em breve — seu horário de aulas e salas por dia. Me mande o vídeo desta tela e eu replico fielmente.");
      case "cartao":
        return placeholderSub("idCard", "Cartão Acadêmico", "Em breve — seu cartão acadêmico digital. Me mande o vídeo desta tela e eu replico fielmente.");
      case "solicitacoes":
        return placeholderSub("checkCircle", "Solicitações acadêmicas", "Em breve — abrir e acompanhar solicitações. Me mande o vídeo desta tela e eu replico fielmente.");
      default:
        return acadMenuScreen();
    }
  }

  function acadMenuScreen() {
    const rows = ACAD_MENU.map(
      (m) => `
      <button class="row" data-acadnav="${m.id}">
        ${I[m.icon]()}<span class="rlabel">${esc(m.label)}</span><span class="chev">${I.arrowRight()}</span>
      </button>`
    ).join("");
    return `
      ${header({ title: "Acadêmico" })}
      <div class="rows acad-rows">${rows}</div>`;
  }

  function acadGradesScreen(kind) {
    const isNotas = kind === "notas";
    const title = isNotas ? "Notas e avaliações" : "Frequências e faltas";
    const body = isNotas ? notasList() : freqList();
    return `
      ${header({ back: true, title })}
      <div class="controls">
        <div class="year">
          <button class="arrow" data-year="-1">${I.chevLeft()}</button>
          <span class="y">${state.year}</span>
          <button class="arrow" data-year="1">${I.chevRight()}</button>
        </div>
        <div class="semtabs">
          <button data-sem="S1" class="${state.sem === "S1" ? "active" : ""}">S1</button>
          <button data-sem="S2" class="${state.sem === "S2" ? "active" : ""}">S2</button>
        </div>
      </div>
      <div class="list">${body}</div>`;
  }

  function placeholderSub(icon, title, text) {
    return `
      ${header({ back: true, title })}
      <div class="placeholder">${I[icon]()}<h3>${esc(title)}</h3><p>${esc(text)}</p></div>`;
  }

  function notasList() {
    const items = (D.grades[state.year] && D.grades[state.year][state.sem]) || [];
    if (!items.length) return emptyNote();
    return items
      .map((c, i) => {
        const hasFinal = c.final != null;
        return `
      <button class="gcard" data-grade="${i}">
        <div class="status">${I.checkCircle()}${esc(c.status)}</div>
        <div class="head">
          <div>
            <div class="cname">${esc(c.name)}</div>
            <div class="turma">${esc(c.turma)}</div>
          </div>
          ${
            hasFinal
              ? `<div class="grade-final">
                   <div class="lbl">Grau Final</div>
                   <div class="val">${esc(c.final)}</div>
                   <span class="badge ${c.result === "Reprovado" ? "reprov" : ""}">${esc(c.result)}</span>
                 </div>`
              : ""
          }
        </div>
        <div class="prof">${esc(c.prof)}</div>
        <div class="foot">${I.fileText()}Notas lançadas <b>${c.count}</b></div>
        <div class="updated">Atualizado ${esc(c.updated)}</div>
      </button>`;
      })
      .join("");
  }

  function freqList() {
    const items = (D.frequency[state.year] && D.frequency[state.year][state.sem]) || [];
    if (!items.length) return emptyNote();
    return items
      .map(
        (f) => `
      <div class="gcard fcard ${f.dim ? "dim" : ""}">
        ${f.fav ? `<span class="star">${I.star()}</span>` : ""}
        <div class="cname">${esc(f.name)}</div>
        <div class="turma">${esc(f.turma)}</div>
        <div class="freq-stats">
          <span>Aulas <span class="n">${f.aulas}</span></span>
          <span>Presenças <span class="n g">${f.pres}</span></span>
          <span>Faltas <span class="n r">${f.falt}</span></span>
        </div>
        <div class="updated">Atualizado ${esc(f.updated)}</div>
      </div>`
      )
      .join("");
  }

  function emptyNote() {
    return `<div class="placeholder">${I.sparkles()}<h3>Sem registros</h3><p>Não há dados para ${state.year} · ${state.sem}.</p></div>`;
  }

  function bibliotecaScreen() {
    return `
      ${header({ title: "Biblioteca" })}
      <div class="rows">
        <button class="row" data-bib="emprestimos">${I.bookOpen()}<span class="rlabel">Empréstimos</span><span class="chev">${I.arrowRight()}</span></button>
        <button class="row" data-bib="reservas">${I.bookmark()}<span class="rlabel">Reservas</span><span class="chev">${I.arrowRight()}</span></button>
      </div>`;
  }

  function estacionamentoScreen() {
    const rows = D.estacionamento
      .map(
        (r) => `
      <button class="row" data-estac="${esc(r.label)}">${I[r.icon]()}<span class="rlabel">${esc(r.label)}</span><span class="chev">${I.arrowRight()}</span></button>`
      )
      .join("");
    return `
      ${header({ title: "Estacionamento" })}
      <div class="rows">${rows}</div>`;
  }

  function menuScreen() {
    const s = D.student;
    const initials = s.name
      .split(/\s+/)
      .map((w) => w[0])
      .slice(0, 2)
      .join("")
      .toLowerCase();
    const rows = D.menuItems
      .map(
        (m) => `
      <button class="row" data-menu="${esc(m.label)}">${I[m.icon]()}<span class="rlabel">${esc(m.label)}</span><span class="chev">${I.arrowRight()}</span></button>`
      )
      .join("");
    return `
      ${header({ title: "Menu" })}
      <div class="profile-card">
        <div class="avatar">${esc(initials)}</div>
        <div>
          <div class="pname">${esc(s.name)}</div>
          <div class="pcourse">${esc(s.course)}<br>Matrícula ${esc(s.reg)}</div>
        </div>
      </div>
      <div class="rows">${rows}</div>
      <div class="menu-version">${esc(D.version)}</div>`;
  }

  function placeholderScreen(icon, title, text) {
    return `
      ${header({ title })}
      <div class="placeholder">
        ${I[icon]()}
        <h3>${esc(title)}</h3>
        <p>${esc(text)}</p>
      </div>`;
  }

  // ---- Modal (grade breakdown) --------------------------------------------
  function openGradeModal(course) {
    const rows = course.evals
      .map(
        (e) => `
      <div class="eval">
        <span class="left">${I.fileText()}${esc(e.k)}</span>
        <span class="score ${e.v === "NC" ? "nc" : ""}">${esc(e.v)}</span>
      </div>`
      )
      .join("");

    const backdrop = el(`<div class="modal-backdrop"></div>`);
    const sheet = el(`
      <div class="sheet" role="dialog" aria-modal="true">
        <button class="close-x" aria-label="Fechar">${I.x()}</button>
        <div class="m-title">${esc(course.name)}</div>
        <div class="m-meta"><span>${esc(course.turma)}</span><span>${esc(course.prof)}</span></div>
        <div class="eval-list">${rows}</div>
        <button class="btn-close">Fechar</button>
      </div>`);

    modalRoot.append(backdrop, sheet);
    requestAnimationFrame(() => {
      backdrop.classList.add("show");
      sheet.classList.add("show");
    });

    const close = () => {
      backdrop.classList.remove("show");
      sheet.classList.remove("show");
      setTimeout(() => {
        backdrop.remove();
        sheet.remove();
      }, 300);
    };
    backdrop.addEventListener("click", close);
    sheet.querySelector(".close-x").addEventListener("click", close);
    sheet.querySelector(".btn-close").addEventListener("click", close);
  }

  // ---- Render --------------------------------------------------------------
  function render() {
    let html;
    switch (state.tab) {
      case "home":
        html = homeScreen();
        break;
      case "academico":
        html = academicoScreen();
        break;
      case "biblioteca":
        html = bibliotecaScreen();
        break;
      case "estacionamento":
        html = estacionamentoScreen();
        break;
      case "menu":
        html = menuScreen();
        break;
      default:
        html = homeScreen();
    }
    screen.innerHTML = html;
    screen.firstElementChild && screen.classList.remove("fade-in");
    void screen.offsetWidth;
    screen.classList.add("fade-in");
    screen.scrollTop = 0;
    renderTabs();
    bindScreen();
  }

  function renderTabs() {
    tabbar.innerHTML = TABS.map(
      (t) => `
      <button class="tab ${state.tab === t.id ? "active" : ""}" data-tab="${t.id}">
        ${I[t.icon]()}<span class="lbl">${esc(t.label)}</span>
      </button>`
    ).join("");
  }

  // ---- Events --------------------------------------------------------------
  function go(tab) {
    if (tab === "academico") state.acadRoute = null; // always land on the menu
    state.tab = tab;
    render();
  }

  function bindScreen() {
    const back = screen.querySelector("[data-back]");
    if (back)
      back.addEventListener("click", () => {
        if (state.tab === "academico" && state.acadRoute) {
          state.acadRoute = null; // sub-screen -> back to Acadêmico menu
          render();
        } else {
          go("home");
        }
      });

    // Academic menu rows
    screen.querySelectorAll("[data-acadnav]").forEach((b) =>
      b.addEventListener("click", () => {
        state.acadRoute = b.dataset.acadnav;
        render();
      })
    );

    // quick access
    screen.querySelectorAll("[data-qa]").forEach((b) =>
      b.addEventListener("click", () => {
        const a = b.dataset.qa;
        if (a === "biblioteca") go("biblioteca");
        else toast(labelFor(a));
      })
    );

    screen.querySelectorAll("[data-sem]").forEach((b) =>
      b.addEventListener("click", () => {
        state.sem = b.dataset.sem;
        render();
      })
    );
    screen.querySelectorAll("[data-year]").forEach((b) =>
      b.addEventListener("click", () => {
        state.year += Number(b.dataset.year);
        render();
      })
    );

    // grade cards -> modal
    screen.querySelectorAll("[data-grade]").forEach((b) =>
      b.addEventListener("click", () => {
        const list = D.grades[state.year][state.sem];
        openGradeModal(list[Number(b.dataset.grade)]);
      })
    );

    // biblioteca rows
    screen.querySelectorAll("[data-bib]").forEach((b) =>
      b.addEventListener("click", () => toast(b.dataset.bib === "emprestimos" ? "Empréstimos" : "Reservas"))
    );

    // estacionamento + menu rows
    screen.querySelectorAll("[data-estac]").forEach((b) =>
      b.addEventListener("click", () => toast(b.dataset.estac))
    );
    screen.querySelectorAll("[data-menu]").forEach((b) =>
      b.addEventListener("click", () => toast(b.dataset.menu))
    );
  }

  function labelFor(a) {
    return { chamada: "Chamada (QR)", mensalidade: "Mensalidade", token: "Gerar Token" }[a] || a;
  }

  // simple toast for not-yet-built actions
  let toastEl;
  function toast(msg) {
    if (toastEl) toastEl.remove();
    toastEl = el(
      `<div style="position:fixed;left:50%;bottom:calc(var(--tabbar-h) + 24px);transform:translateX(-50%);background:var(--surface-3);color:var(--text);padding:12px 20px;border-radius:12px;font-size:14px;z-index:70;box-shadow:0 8px 30px rgba(0,0,0,.5)">${esc(msg)} — em breve</div>`
    );
    document.body.append(toastEl);
    setTimeout(() => toastEl && toastEl.remove(), 1800);
  }

  tabbar.addEventListener("click", (e) => {
    const t = e.target.closest("[data-tab]");
    if (t) go(t.dataset.tab);
  });

  // ---- Boot ----------------------------------------------------------------
  render();

  if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => navigator.serviceWorker.register("sw.js").catch(() => {}));
  }
})();
