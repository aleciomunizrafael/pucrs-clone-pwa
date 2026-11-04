/* App data — mirrors the reference recording. Easy to extend later. */
window.DATA = {
  student: {
    name: "Rafael Alecio",
    course: "Ciência De Dados E Inteligência Artificial",
    reg: "26180287",
  },

  nextClass: {
    day: "Quarta-Feira",
    time: "09:45 - 10:30",
    title: "LÓGICA PARA COMPUTAÇÃO",
    turma: "Turma 110",
    location: "Prédio 32 • Bloco A • Sala 413",
  },

  quickAccess: [
    { icon: "qr", color: "c-cyan", tag: "Acesso\nRápido", label: "Chamada", sub: "QR Code", action: "chamada" },
    { icon: "dollar", color: "c-gold", label: "Mensalidade", sub: "Ver detalhes", action: "mensalidade" },
    { icon: "qr", color: "c-pink", label: "Gerar Token", sub: "QR Code", action: "token" },
    { icon: "book", color: "c-green", label: "Biblioteca", sub: "Empréstimos", action: "biblioteca" },
  ],

  // Grades (Notas e avaliações) keyed by year -> semester
  grades: {
    2026: {
      S1: [
        { status: "Cursada", name: "Cálculo I", turma: "Turma 13", prof: "Iuri Medeiros Jauris", final: "6.2", result: "Aprovado", count: 10, updated: "20/07", evals: [
          { k: "T1", v: "5.0" }, { k: "T2", v: "6.5" }, { k: "T3", v: "6.0" }, { k: "P1", v: "7.0" } ] },
        { status: "Cursada", name: "Fundamentos De Programação", turma: "Turma 14", prof: "Adriana Paula Zamin Scherer", final: "7.3", result: "Aprovado", count: 9, updated: "18/07", evals: [
          { k: "T1", v: "7.0" }, { k: "T2", v: "7.5" }, { k: "P1", v: "7.4" } ] },
        { status: "Cursada", name: "Matemática Discreta", turma: "Turma 13", prof: "Edson Ifarraguirre Moreno", final: "8.1", result: "Aprovado", count: 8, updated: "08/07", evals: [
          { k: "T1", v: "8.0" }, { k: "T2", v: "8.5" }, { k: "P1", v: "7.8" } ] },
      ],
      S2: [
        { status: "Matriculada", name: "Algoritmos E Estruturas De Dados I", turma: "Turma 110", prof: "Isabel Harb Manssour", count: 2, updated: "15/10", evals: [
          { k: "T1", v: "8.0" }, { k: "T2", v: "7.0" } ] },
        { status: "Matriculada", name: "Cálculo Ii", turma: "Turma 110", prof: "Iuri Medeiros Jauris", count: 4, updated: "02/11", evals: [
          { k: "T1", v: "NC" }, { k: "T2", v: "6.0" }, { k: "T3", v: "7.0" }, { k: "P1", v: "6.5" } ] },
        { status: "Matriculada", name: "Fundamentos De Sistemas Computacionais", turma: "Turma 110", prof: "Fabiano Passuelo Hessel", count: 3, updated: "19/10", evals: [
          { k: "T1", v: "7.0" }, { k: "T2", v: "8.0" }, { k: "P1", v: "NC" } ] },
        { status: "Matriculada", name: "Lógica Para Computação", turma: "Turma 110", prof: "Edson Ifarraguirre Moreno", count: 2, updated: "17/10", evals: [
          { k: "T1", v: "9.0" }, { k: "T2", v: "8.5" } ] },
        { status: "Matriculada", name: "Probabilidade E Estatística", turma: "Turma 110", prof: "Rossana Fraga Benites", count: 4, updated: "21/10", evals: [
          { k: "T1", v: "NC" }, { k: "T2", v: "4.5" }, { k: "T3", v: "7.5" }, { k: "P1", v: "8.5" } ] },
        { status: "Matriculada", name: "Programação Orientada A Dados", turma: "Turma 120", prof: "Katherine Bianchini Esper", count: 1, updated: "21/09", evals: [
          { k: "P1", v: "NC" } ] },
      ],
    },
  },

  // Attendance (Frequências e faltas)
  frequency: {
    2026: {
      S1: [
        { name: "Cálculo I", turma: "Turma 13", aulas: 68, pres: 58, falt: 10, updated: "09/07", fav: false },
        { name: "Matemática Discreta", turma: "Turma 13", aulas: 72, pres: 64, falt: 8, updated: "08/07", fav: false, dim: true },
        { name: "Fundamentos De Programação", turma: "Turma 14", aulas: 70, pres: 60, falt: 10, updated: "07/07", fav: false },
      ],
      S2: [
        { name: "Algoritmos E Estruturas De Dados I", turma: "Turma 110", aulas: 48, pres: 34, falt: 14, updated: "03/11", fav: true },
        { name: "Cálculo Ii", turma: "Turma 110", aulas: 48, pres: 34, falt: 14, updated: "03/11", fav: true },
        { name: "Fundamentos De Sistemas Computacionais", turma: "Turma 110", aulas: 44, pres: 36, falt: 8, updated: "19/10", fav: false },
        { name: "Probabilidade E Estatística", turma: "Turma 110", aulas: 40, pres: 32, falt: 8, updated: "28/10", fav: true },
        { name: "Programação Orientada A Dados", turma: "Turma 120", aulas: 72, pres: 44, falt: 28, updated: "30/10", fav: true },
      ],
    },
  },
};
