// Shell bersama: sidebar + topbar untuk semua halaman selain overview

// Kumpulan ikon SVG (gaya Lucide), warna mengikuti currentColor
const ICONS = {
  overview: '<rect x="3" y="3" width="7" height="9" rx="1"/><rect x="14" y="3" width="7" height="5" rx="1"/><rect x="14" y="12" width="7" height="9" rx="1"/><rect x="3" y="16" width="7" height="5" rx="1"/>',
  meridian: '<polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>',
  wallets: '<path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"/><path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4"/>',
  positions: '<circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/>',
  performance: '<polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/>',
  candidates: '<circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>',
  hivemind: '<rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><path d="M15 2v2M15 20v2M9 2v2M9 20v2M2 15h2M2 9h2M20 15h2M20 9h2"/>',
  activity: '<path d="M22 12h-4l-3 9L9 3l-3 9H2"/>',
  'risk-control': '<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/>',
  configuration: '<line x1="21" x2="14" y1="4" y2="4"/><line x1="10" x2="3" y1="4" y2="4"/><line x1="21" x2="12" y1="12" y2="12"/><line x1="8" x2="3" y1="12" y2="12"/><line x1="21" x2="16" y1="20" y2="20"/><line x1="12" x2="3" y1="20" y2="20"/><line x1="14" x2="14" y1="2" y2="6"/><line x1="8" x2="8" y1="10" y2="14"/><line x1="16" x2="16" y1="18" y2="22"/>',
  settings: '<path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/>',
  card: '<rect width="20" height="14" x="2" y="5" rx="2"/><line x1="2" x2="22" y1="10" y2="10"/>',
  copy: '<rect width="14" height="14" x="8" y="8" rx="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/>',
  check: '<path d="M20 6 9 17l-5-5"/>'
};

function icon(name, size = 16) {
  return `<svg class="nav-icon" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${ICONS[name]}</svg>`;
}

const NAV = [
  ['overview', 'Overview', 'overview.html', '<span class="ml-auto text-[9px] px-1.5 py-0.5 rounded bg-cyan-950 text-cyan-400 border border-cyan-800">LIVE</span>'],
  ['meridian', 'Meridian', 'meridian.html', ''],
  ['wallets', 'Wallets', 'wallets.html', ''],
  ['positions', 'Positions', 'positions.html', '<span class="ml-auto text-[9px] px-1.5 py-0.5 rounded bg-emerald-950 text-emerald-400">1/5</span>'],
  ['performance', 'Performance', 'performance.html', ''],
  ['candidates', 'Candidates', 'candidates.html', ''],
  ['hivemind', 'HiveMind', 'hivemind.html', '<span class="ml-auto text-[8px] text-emerald-400">ON</span>'],
  ['activity', 'Activity', 'activity.html', ''],
  ['risk-control', 'Risk Control', 'risk-control.html', ''],
  ['configuration', 'Configuration', 'configuration.html', ''],
  ['settings', 'Settings', 'settings.html', '']
];

const WALLET = '6dqoj6LmKzWq7yN8vP9mRtL1x2c4e6g8h0j2k4l6m';


function renderShell() {
  const page = document.body.dataset.page;

  document.getElementById('sidebar-drawer').innerHTML = `
    <div class="p-5 border-b border-[#182133] flex items-center justify-between">
      <div class="flex items-center gap-3">
        <div class="w-9 h-9 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center shadow-[0_0_15px_rgba(6,182,212,0.4)]">
          <span class="font-pixel text-black text-xs font-bold">A</span>
        </div>
        <div>
          <h1 class="font-pixel text-sm text-white tracking-wider flex items-center gap-1.5">
            ARIA BOT
            <span class="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
          </h1>
          <p class="text-[9px] text-slate-400 font-mono tracking-tight">Autonomous Trading Intelligence</p>
        </div>
      </div>
      <button id="sidebar-close-btn" class="md:hidden text-slate-400 hover:text-white p-1" aria-label="Tutup menu">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
        </svg>
      </button>
    </div>

    <nav id="sidebar-nav" class="flex-1 px-3 py-4 space-y-1 overflow-y-auto text-xs font-mono">
      ${NAV.map(([key, name, href, badge]) => `
        <a href="${href}" class="nav-item ${key === page ? 'active text-cyan-300 font-medium' : 'text-slate-400 hover:text-white'} flex items-center gap-3 px-3 py-2.5 rounded-md">
          ${icon(key)}
          <span>${name}</span>
          ${badge}
        </a>
      `).join('')}
    </nav>

    <div class="p-3.5 border-t border-[#182133] bg-[#080b13] space-y-2">
      <div class="flex items-center justify-between text-[11px] font-mono text-slate-400">
        <span class="flex items-center gap-1.5">
          <span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
          Meridian Runtime
        </span>
        <span class="text-emerald-400 font-bold">RUNNING</span>
      </div>
      <div class="flex items-center justify-between text-[11px] font-mono text-slate-400">
        <span class="flex items-center gap-1.5">
          <span class="w-2 h-2 rounded-full bg-cyan-400"></span>
          HiveMind AI
        </span>
        <span class="text-cyan-400 font-bold">CONNECTED</span>
      </div>
    </div>
  `;

  document.getElementById('topbar').innerHTML = `
    <div class="flex items-center gap-3 min-w-0">
      <button id="sidebar-open-btn" class="md:hidden shrink-0 text-slate-300 hover:text-white p-1.5 -ml-1 rounded border border-slate-700/80" aria-label="Buka menu" aria-expanded="false" aria-controls="sidebar-drawer">
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
        </svg>
      </button>

      <div class="min-w-0">
        <div class="flex items-center gap-2">
          <h2 class="text-base md:text-lg font-bold text-white tracking-tight">ARIA BOT Dashboard</h2>
          <span class="text-[9px] font-pixel px-2 py-0.5 rounded bg-emerald-950 text-emerald-400 border border-emerald-500/60 flex items-center gap-1">
            <span class="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
            B2 LIVE
          </span>
        </div>
        <p class="topbar-sub text-xs text-slate-400 font-mono">Live monitoring ARIA BOT • Solana Autonomous Micro-Caps</p>
      </div>
    </div>

    <div class="flex flex-wrap items-center gap-2">
      <div class="px-2.5 py-1 bg-slate-900 border border-slate-700/80 rounded text-xs flex items-center gap-1.5 font-mono text-slate-300">
        <span class="text-slate-500">Strategy</span>
        <span class="text-emerald-400 font-semibold cursor-pointer">B2 Live ▾</span>
      </div>

      <button class="px-2.5 py-1 bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded text-xs text-slate-300 font-mono">
        Sign In
      </button>

      <div id="btn-copy-wallet" class="px-2.5 py-1 bg-gradient-to-r from-purple-950 to-indigo-950 border border-purple-600/70 rounded text-xs text-purple-200 font-mono flex items-center gap-1.5 cursor-pointer hover:border-purple-400 shadow-sm" title="Klik untuk salin alamat dompet">
        ${icon('card', 14)}
        <span>6dqo..j6Lm</span>
        <span class="text-purple-400">${icon('copy', 12)}</span>
      </div>

      <button class="px-2.5 py-1 bg-slate-900 hover:bg-slate-800 border border-slate-800 rounded text-xs text-slate-400 font-mono">
        Logout
      </button>
    </div>
  `;

  setupMobileNav();

  document.getElementById('btn-copy-wallet').addEventListener('click', () => {
    const copy = navigator.clipboard
      ? navigator.clipboard.writeText(WALLET)
      : Promise.reject();

    copy
      .catch(() => {})
      .finally(() => toast('Alamat dompet berhasil disalin!', 'check'));
  });
}


function setupMobileNav() {
  const openBtn = document.getElementById('sidebar-open-btn');
  const closeBtn = document.getElementById('sidebar-close-btn');
  const nav = document.getElementById('sidebar-nav');

  let overlay = document.getElementById('nav-overlay');
  if (!overlay) {
    overlay = document.createElement('div');
    overlay.id = 'nav-overlay';
    document.body.appendChild(overlay);
  }

  const setOpen = (open) => {
    document.body.classList.toggle('nav-open', open);
    openBtn.setAttribute('aria-expanded', String(open));
  };

  openBtn.addEventListener('click', () => setOpen(true));
  closeBtn.addEventListener('click', () => setOpen(false));
  overlay.addEventListener('click', () => setOpen(false));

  // Tutup drawer saat salah satu menu diklik
  nav.addEventListener('click', (e) => {
    if (e.target.closest('a')) setOpen(false);
  });

  // Tutup dengan tombol Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') setOpen(false);
  });

  // Reset state kalau layar diperbesar ke ukuran desktop
  window.matchMedia('(min-width: 768px)').addEventListener('change', (e) => {
    if (e.matches) setOpen(false);
  });
}


function toast(msg, iconName) {
  const t = document.createElement('div');
  t.className = 'toast font-mono flex items-center gap-2';
  t.innerHTML = (iconName ? icon(iconName, 14) : '') + `<span>${msg}</span>`;

  document.body.appendChild(t);
  setTimeout(() => t.remove(), 2200);
}


document.addEventListener('DOMContentLoaded', renderShell);