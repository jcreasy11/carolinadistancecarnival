/* Site-wide announcement banner. Reads announcement.txt from the site root.
   Line 1: message. Line 2 (optional): link URL. Line 3 (optional): link text.
   Lines starting with # are ignored. An empty file shows no banner. */
(function () {
  function show(text) {
    var lines = String(text || '').split(/\r?\n/).map(function (l) { return l.trim(); })
      .filter(function (l) { return l && l.charAt(0) !== '#'; });
    if (!lines.length) return;
    var bar = document.createElement('div');
    bar.setAttribute('role', 'status');
    bar.style.cssText = 'background:#AC312A;color:#FFFFFF;font-family:Inter,system-ui,sans-serif;font-size:16px;font-weight:600;line-height:1.4;text-align:center;padding:12px clamp(16px,4vw,64px);';
    var msg = document.createElement('span');
    msg.textContent = lines[0];
    bar.appendChild(msg);
    var url = lines[1] || '';
    if (/^(https?:\/\/|\/|#|[A-Za-z0-9_.-]+\.html)/.test(url)) {
      var a = document.createElement('a');
      a.href = url;
      a.textContent = lines[2] || 'See the update';
      a.style.cssText = 'color:#FFFFFF;margin-left:12px;text-decoration:underline;text-underline-offset:3px;font-weight:700;display:inline-block;';
      if (/^https?:\/\//.test(url)) { a.target = '_blank'; a.rel = 'noopener'; }
      bar.appendChild(a);
    }
    document.body.insertBefore(bar, document.body.firstChild);
  }
  function load() {
    fetch('announcement.txt?t=' + Date.now(), { cache: 'no-store' })
      .then(function (r) { return r.ok ? r.text() : ''; })
      .then(show)
      .catch(function () {});
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', load); else load();
})();
