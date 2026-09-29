// Script khusus per halaman
const PAGES = {
  performance() {
    const c = document.getElementById('chart'); if (!c) return;
    const data = JSON.parse(c.dataset.points);
    const draw = () => {
      const dpr = window.devicePixelRatio || 1, w = c.clientWidth, h = c.clientHeight;
      c.width = w * dpr; c.height = h * dpr;
      const g = c.getContext('2d'); g.scale(dpr, dpr); g.clearRect(0, 0, w, h);
      const p = 34, min = Math.min(0, ...data), max = Math.max(0, ...data), rng = (max - min) || 1;
      const X = i => p + i * (w - p * 2) / (data.length - 1), Y = v => h - p - (v - min) / rng * (h - p * 2);
      g.font = '10px Space Mono'; g.strokeStyle = '#182133'; g.fillStyle = '#64748b';
      for (let i = 0; i <= 4; i++) { const v = min + rng * i / 4, y = Y(v); g.beginPath(); g.moveTo(p, y); g.lineTo(w - p, y); g.stroke(); g.fillText('$' + v.toFixed(0), 2, y + 3); }
      g.strokeStyle = '#334155'; g.beginPath(); g.moveTo(p, Y(0)); g.lineTo(w - p, Y(0)); g.stroke();
      const last = data[data.length - 1], col = last >= 0 ? '#22c55e' : '#f87171';
      g.beginPath(); data.forEach((v, i) => i ? g.lineTo(X(i), Y(v)) : g.moveTo(X(i), Y(v)));
      g.lineTo(X(data.length - 1), Y(0)); g.lineTo(X(0), Y(0)); g.closePath(); g.fillStyle = col + '22'; g.fill();
      g.beginPath(); data.forEach((v, i) => i ? g.lineTo(X(i), Y(v)) : g.moveTo(X(i), Y(v)));
      g.strokeStyle = col; g.lineWidth = 2; g.stroke();
      data.forEach((v, i) => { g.beginPath(); g.arc(X(i), Y(v), 3, 0, 7); g.fillStyle = col; g.fill(); });
    };
    draw(); window.addEventListener('resize', draw);
  }
};
document.addEventListener('DOMContentLoaded', () => (PAGES[document.body.dataset.page] || (() => {}))());
