/* Line icons (outline, 24x24, stroke-based). Original renderings. */
(function () {
  const S = (p, extra = "") =>
    `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" ${extra}>${p}</svg>`;

  window.ICON = {
    home: () => S('<path d="M3 10.5 12 3l9 7.5"/><path d="M5 9.5V20a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V9.5"/><path d="M9.5 21v-6h5v6"/>'),
    cap: () => S('<path d="M12 4 2 9l10 5 10-5-10-5Z"/><path d="M6 11v5c0 1.2 2.7 3 6 3s6-1.8 6-3v-5"/><path d="M22 9v5"/>'),
    car: () => S('<path d="M3 13.5 4.6 8A3 3 0 0 1 7.5 6h9A3 3 0 0 1 19.4 8L21 13.5"/><path d="M3 13.5h18V18a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-1H7v1a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-4.5Z"/><circle cx="7" cy="16" r="0.4"/><circle cx="17" cy="16" r="0.4"/>'),
    book: () => S('<path d="M5 4h11a2 2 0 0 1 2 2v14H7a2 2 0 0 1-2-2V4Z"/><path d="M5 4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2"/>'),
    bookOpen: () => S('<path d="M12 6c-1.5-1.2-3.8-2-6-2-1 0-2 .2-2 .2v13s1-.2 2-.2c2.2 0 4.5.8 6 2 1.5-1.2 3.8-2 6-2 1 0 2 .2 2 .2v-13s-1-.2-2-.2c-2.2 0-4.5.8-6 2Z"/><path d="M12 6v13"/>'),
    bookmark: () => S('<path d="M6 3h12v18l-6-4-6 4V3Z"/>'),
    menu: () => S('<path d="M4 7h16"/><path d="M4 12h16"/><path d="M4 17h16"/>'),
    bell: () => S('<path d="M6 9a6 6 0 0 1 12 0c0 5 2 6 2 6H4s2-1 2-6Z"/><path d="M10 20a2 2 0 0 0 4 0"/>'),
    calendar: () => S('<rect x="3" y="5" width="18" height="16" rx="2.5"/><path d="M3 9.5h18"/><path d="M8 3v4"/><path d="M16 3v4"/>'),
    clock: () => S('<circle cx="12" cy="12" r="9"/><path d="M12 7.5V12l3 2"/>'),
    qr: () => S('<rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><path d="M14 14h3v3"/><path d="M21 14v7h-7"/><path d="M17 21v-1"/>'),
    dollar: () => S('<path d="M12 3v18"/><path d="M16 7.5C16 5.6 14.2 4.5 12 4.5S8 5.6 8 7.5 9.8 10 12 10.5 16 11.6 16 13.5 14.2 16.5 12 16.5 8 15.4 8 13.5"/>'),
    arrowRight: () => S('<path d="M5 12h14"/><path d="m13 6 6 6-6 6"/>'),
    arrowLeft: () => S('<path d="M19 12H5"/><path d="m11 6-6 6 6 6"/>'),
    chevLeft: () => S('<path d="m14 6-6 6 6 6"/>'),
    chevRight: () => S('<path d="m10 6 6 6-6 6"/>'),
    checkCircle: () => S('<circle cx="12" cy="12" r="9"/><path d="m8.5 12 2.5 2.5 4.5-5"/>'),
    fileText: () => S('<path d="M7 3h7l5 5v13a0 0 0 0 1 0 0H7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Z"/><path d="M14 3v5h5"/><path d="M9 13h6"/><path d="M9 16.5h4"/>'),
    star: () => S('<path d="m12 3.5 2.6 5.3 5.9.9-4.2 4.1 1 5.8-5.3-2.8-5.3 2.8 1-5.8-4.2-4.1 5.9-.9L12 3.5Z"/>'),
    x: () => S('<path d="M6 6l12 12"/><path d="M18 6 6 18"/>'),
    sparkles: () => S('<path d="M12 3l1.8 4.2L18 9l-4.2 1.8L12 15l-1.8-4.2L6 9l4.2-1.8L12 3Z"/><path d="M18 14l.9 2.1L21 17l-2.1.9L18 20l-.9-2.1L15 17l2.1-.9L18 14Z"/>'),
    barChart: () => S('<path d="M5 20V11"/><path d="M12 20V4"/><path d="M19 20v-6"/>'),
    idCard: () => S('<rect x="3" y="5" width="18" height="14" rx="2.5"/><circle cx="8.5" cy="11" r="2"/><path d="M5.5 16c.6-1.6 2-2 3-2s2.4.4 3 2"/><path d="M14.5 10h4"/><path d="M14.5 13.5h4"/>'),
    userX: () => S('<circle cx="9" cy="8" r="3.2"/><path d="M3.5 20c.6-3.2 3-5 5.5-5 1 0 2 .3 2.9.8"/><path d="m16 14 4 4"/><path d="m20 14-4 4"/>'),
    refresh: () => S('<path d="M20 11A8 8 0 0 0 6.3 6.3L4 8.5"/><path d="M4 4v4.5h4.5"/><path d="M4 13a8 8 0 0 0 13.7 4.7L20 15.5"/><path d="M20 20v-4.5h-4.5"/>'),
    phone: () => S('<path d="M12 3a9 9 0 0 0-9 9 9 9 0 0 0 1.2 4.5L3 21l4.6-1.2A9 9 0 1 0 12 3Z"/><path d="M9 9.5c0 3 2.5 5.5 5.5 5.5.6 0 1-.5 1-1l-.3-1.5a.8.8 0 0 0-1-.6l-1 .3a4 4 0 0 1-1.7-1.7l.3-1a.8.8 0 0 0-.6-1L9.9 8.5c-.5 0-1 .4-1 1Z"/>'),
    users: () => S('<circle cx="12" cy="7" r="2.6"/><path d="M7.5 12.2A3.2 3.2 0 1 0 6 6.3"/><path d="M18 12.2a3.2 3.2 0 1 0-1.5-5.9"/><path d="M8 19c.5-2.6 2-4 4-4s3.5 1.4 4 4"/><path d="M3.5 18c.3-1.7 1-2.8 2.3-3.3"/><path d="M20.5 18c-.3-1.7-1-2.8-2.3-3.3"/>'),
    tools: () => S('<path d="M14.5 6.5a3 3 0 0 0 4 4L21 13l-2 2-2.5-2.5a3 3 0 0 0-4-4L8 5 10 3l4.5 3.5Z" transform="translate(-1 1)"/><path d="m4 20 5-5"/><path d="M14.5 14.5 20 20"/>'),
    shield: () => S('<path d="M12 3 5 6v5c0 4.2 2.9 7.5 7 9 4.1-1.5 7-4.8 7-9V6l-7-3Z"/><path d="M12 9v4"/><path d="M12 15.5v.2"/>'),
    logout: () => S('<path d="M14 4h3a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-3"/><path d="M10 12h10"/><path d="m16 8 4 4-4 4"/>'),
  };
})();
