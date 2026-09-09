function getSeasonalTheme() {
  const now = new Date();
  const month = now.getMonth();
  const day = now.getDate();

  if (month === 1) {
    return day >= 20 ? 'original' : 'Valentines';
  }

  if ((month > 1 && month < 5) || (month === 5 && day <= 20)) {
    return 'original';
  }

  if (
    (month > 5 && month < 8) ||
    (month === 5 && day >= 21) ||
    (month === 8 && day <= 22)
  ) {
    return 'light';
  }

  return 'original';
}

function checkSeasonalAuto() {
  const auto = localStorage.getItem('autoTheme');
  return auto !== 'false';
}

function setTheme(name) {
  const themeData = {
    original: {
      bg: '#152142',
      sidebar: '#0b173b',
      nav: '#1e3a8a',
      text: '#ffffff',
      accent: '#60a5fa',
      border: '#3b82f6',
    },
    dark: {
      bg: '#000000',
      sidebar: '#4f4f4f',
      nav: '#ababab',
      text: '#ffffff',
      accent: '#5c5c5c',
      border: '#8f8f8f',
    },
    light: {
      bg: '#b0b0b0',
      sidebar: '#444444ff',
      nav: '#ffffff',
      text: '#0f172a',
      accent: '#000000ff',
      border: '#cbd5e1',
    },
    midnight: {
      bg: '#0c0a1f',
      sidebar: '#1a1535',
      nav: '#1a1535',
      text: '#e0d8ff',
      accent: '#a78bfa',
      border: '#4c1d95',
    },
    ocean: {
      bg: '#0c4a6e',
      sidebar: '#075985',
      nav: '#0e7490',
      text: '#e0f2fe',
      accent: '#22d3ee',
      border: '#0891b2',
    },
    sunset: {
      bg: '#7c2d12',
      sidebar: '#9a3412',
      nav: '#c2410c',
      text: '#fed7aa',
      accent: '#fb923c',
      border: '#ea580c',
    },
    forest: {
      bg: '#14532d',
      sidebar: '#166534',
      nav: '#15803d',
      text: '#dcfce7',
      accent: '#4ade80',
      border: '#22c55e',
    },
    purple: {
      bg: '#581c87',
      sidebar: '#6b21a8',
      nav: '#7e22ce',
      text: '#f3e8ff',
      accent: '#c084fc',
      border: '#a855f7',
    },
    cyberpunk: {
      bg: '#1a0b2e',
      sidebar: '#2d1b4e',
      nav: '#16213e',
      text: '#00ff9f',
      accent: '#ff006e',
      border: '#7b2cbf',
    },
    matrix: {
      bg: '#0d0d0d',
      sidebar: '#1a1a1a',
      nav: '#1a1a1a',
      text: '#00ff41',
      accent: '#00ff41',
      border: '#003b00',
    },
    neon: {
      bg: '#120458',
      sidebar: '#2d1b69',
      nav: '#1a0b3a',
      text: '#ffffff',
      accent: '#ff10f0',
      border: '#39ff14',
    },
    fire: {
      bg: '#7f1d1d',
      sidebar: '#991b1b',
      nav: '#b91c1c',
      text: '#fef2f2',
      accent: '#fbbf24',
      border: '#f59e0b',
    },
    ice: {
      bg: '#0c4a6e',
      sidebar: '#075985',
      nav: '#0369a1',
      text: '#e0f2fe',
      accent: '#7dd3fc',
      border: '#0ea5e9',
    },
    Milo: {
      bg: 'assets/images/image0.jpeg',
      bgImage: true,
      sidebar: '#713f12',
      nav: '#854d0e',
      text: '#fef3c7',
      accent: '#fbbf24',
      border: '#f59e0b',
    },
    Fabian: {
      bg: 'assets/images/fabiancald.jpeg',
      bgImage: true,
      sidebar: '#4f4f4f',
      nav: '#ababab',
      text: '#ffffff',
      accent: '#5c5c5c',
      border: '#8f8f8f',
    },
    Owners: {
      bg: 'assets/images/bestowners.jpeg',
      bgImage: true,
      sidebar: '#ffffffff',
      nav: '#ababab',
      text: '#ffffff',
      accent: '#000000',
      border: '#ffffffff',
    },
    Anzo: {
      bg: '#1c0029fa',
      sidebar: '#ffffffff',
      nav: '#ababab',
      text: '#ffffff',
      accent: '#600186',
      border: '#ffffffff',
    },
    Alyvia: {
      bg: 'assets/images/al.jpeg',
      bgImage: true,
      sidebar: '#ffffffff',
      nav: '#ababab',
      text: '#000000',
      accent: '#000000',
      border: '#ffffffff',
    },
    Prince: {
      bg: '#303030fa',
      sidebar: '#ffffffff',
      nav: '#ababab',
      text: '#ffffff',
      accent: '#000000',
      border: '#ffffffff',
    },
    halloween: {
      bg: '#1a0b2e',
      sidebar: '#2d1b4e',
      nav: '#3d2652',
      text: '#f9a8d4',
      accent: '#ff6b35',
      border: '#ff006e',
    },
    Valentines: {
      bg: '#f6b5ff',
      sidebar: '#ec4a4a',
      nav: '#f1c2ff',
      text: '#000000',
      accent: '#f0b3ff',
      border: '#ff3e3e',
    },
  };

  const colors = themeData[name] || themeData['original'];

  document.documentElement.setAttribute('data-theme', name);

  if (colors.bgImage) {
    document.body.style.backgroundImage = `url('${colors.bg}')`;
    document.body.style.backgroundSize = 'cover';
    document.body.style.backgroundPosition = 'center';
    document.body.style.backgroundRepeat = 'no-repeat';
    document.body.style.backgroundAttachment = 'fixed';
    document.body.style.backgroundColor = 'transparent';
  } else {
    document.body.style.backgroundImage = 'none';
    document.body.style.backgroundColor = colors.bg;
  }

  document.body.style.color = colors.text;

  const sb = document.querySelector('.sidebar');
  if (sb) {
    sb.style.backgroundColor = colors.sidebar;
  }

  const sections = document.querySelectorAll('.content');
  sections.forEach((sec) => {
    if (colors.bgImage) {
      sec.style.backgroundColor = 'rgba(66, 32, 6, 0.0)';
      sec.style.backgroundImage = 'none';
    } else {
      sec.style.backgroundColor = colors.bg;
      sec.style.backgroundImage = 'none';
    }
    sec.style.color = colors.text;
  });

  const navLinks = document.querySelectorAll('.sidebar-link');
  navLinks.forEach((lnk) => {
    lnk.style.color = colors.text;
  });

  const rt = document.documentElement;
  rt.style.setProperty(
    '--bg-color',
    colors.bgImage ? 'transparent' : colors.bg
  );
  rt.style.setProperty('--sidebar-color', colors.sidebar);
  rt.style.setProperty('--nav-color', colors.nav);
  rt.style.setProperty('--text-color', colors.text);
  rt.style.setProperty('--accent-color', colors.accent);
  rt.style.setProperty('--border-color', colors.border);

  setTimeout(() => {
    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) {
      meta.setAttribute('content', colors.bgImage ? '#0000' : colors.bg);
    }
  }, 50);

  localStorage.setItem('selectedTheme', name);
}

function initSettingsTabs() {
  const tabs = document.querySelectorAll('.settingstab');
  const panels = document.querySelectorAll('.settings-tab-content');

  tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      const target = tab.dataset.tab;

      tabs.forEach((t) => t.classList.remove('active'));
      panels.forEach((p) => p.classList.remove('active'));

      tab.classList.add('active');
      const panel = document.getElementById(`tab-${target}`);
      if (panel) {
        panel.classList.add('active');
      }
    });
  });
}

function initAntiClose() {
  const toggle = document.getElementById('antiTabCloseToggle');

  if (toggle) {
    const saved = localStorage.getItem('antiTabClose');
    toggle.checked = saved === 'enabled';

    if (saved === 'enabled') {
      enableAntiClose();
    }

    toggle.addEventListener('change', (e) => {
      if (e.target.checked) {
        localStorage.setItem('antiTabClose', 'enabled');
        enableAntiClose();
      } else {
        localStorage.removeItem('antiTabClose');
        disableAntiClose();
      }
    });
  }
}

function enableAntiClose() {
  window.addEventListener('beforeunload', confirmExit);
}

function disableAntiClose() {
  window.removeEventListener('beforeunload', confirmExit);
}

function confirmExit(e) {
  e.preventDefault();
  e.returnValue = '';
  return '';
}

function initDebug() {
  const toggle = document.getElementById('debugModeToggle');

  if (toggle) {
    const saved = localStorage.getItem('debugMode');
    toggle.checked = saved === 'enabled';

    toggle.addEventListener('change', (e) => {
      if (e.target.checked) {
        localStorage.setItem('debugMode', 'enabled');
      } else {
        localStorage.removeItem('debugMode');
      }
    });
  }
}

function initClearCache() {
  const btuon = document.getElementById('clearCachebtuon');

  if (btuon) {
    btuon.addEventListener('click', () => {
      if (
        confirm(
          'This will clear all your settings and reload the page. Continue?'
        )
      ) {
        const keep = ['activities', 'apps', 'emulatedActivities', 'websites'];
        Object.keys(localStorage).forEach((key) => {
          if (!keep.includes(key)) {
            localStorage.removeItem(key);
          }
        });

        location.reload();
      }
    });
  }
}

function showSystemInfo() {
  const browserEl = document.getElementById('browserInfo');
  const platformEl = document.getElementById('platformInfo');
  const screenEl = document.getElementById('screenInfo');
  const storageEl = document.getElementById('storageInfo');

  if (browserEl) {
    const ua = navigator.userAgent;
    let browser = 'Unknown';

    if (ua.includes('Firefox')) browser = 'Firefox';
    else if (ua.includes('Chrome') && !ua.includes('Edg')) browser = 'Chrome';
    else if (ua.includes('Safari') && !ua.includes('Chrome'))
      browser = 'Safari';
    else if (ua.includes('Edg')) browser = 'Edge';
    else if (ua.includes('Opera') || ua.includes('OPR')) browser = 'Opera';

    browserEl.textContent = browser;
  }

  if (platformEl) {
    platformEl.textContent = navigator.platform || 'Unknown';
  }

  if (screenEl) {
    screenEl.textContent = `${window.screen.width}x${window.screen.height}`;
  }

  if (storageEl) {
    try {
      let size = 0;
      for (let key in localStorage) {
        if (Object.prototype.hasOwnProperty.call(localStorage, key)) {
          size += localStorage[key].length + key.length;
        }
      }
      const kb = (size / 1024).toFixed(2);
      storageEl.textContent = `${kb} KB`;
    } catch (e) {
      storageEl.textContent = 'Unable to calculate';
    }
  }
}

function loadSettings() {
  let theme = 'original';
  const saved = localStorage.getItem('selectedTheme');

  if (!saved && checkSeasonalAuto()) {
    theme = getSeasonalTheme();
  } else if (saved) {
    theme = saved;
  }

  const antiClose = localStorage.getItem('antiTabClose');
  if (antiClose === 'enabled') {
    enableAntiClose();
  }

  setTheme(theme);
}

function debounce(func, delay) {
  delay = delay || 300;
  let timer;
  return function () {
    const ctx = this;
    const args = arguments;
    clearTimeout(timer);
    timer = setTimeout(() => func.apply(ctx, args), delay);
  };
}

function setMediaParticlesPaused(paused) {
  document.body.classList.toggle('media-active', paused);
  if (window.ParticleEffects) {
    if (paused && typeof window.ParticleEffects.clear === 'function') {
      window.ParticleEffects.clear();
    } else if (!paused && typeof window.ParticleEffects.refresh === 'function') {
      window.ParticleEffects.refresh();
    }
  }
}

function installMediaPlayerParticleBridge() {
  if (window.__mediaPlayerParticleBridgeInstalled) return;
  window.__mediaPlayerParticleBridgeInstalled = true;

  window.addEventListener('message', (event) => {
    if (event.origin !== window.location.origin) return;
    if (!event.data || event.data.type !== 'RELIC_MEDIA_PLAYER_STATE') return;

    setMediaParticlesPaused(Boolean(event.data.active));
  });
}

function hideAll() {
  document
    .querySelectorAll('.content')
    .forEach((c) => (c.style.display = 'none'));
  setMediaParticlesPaused(false);
  document
    .querySelectorAll('.sidebar-link')
    .forEach((link) => link.classList.remove('active'));
  const btuons = document.querySelector('.homepage-infobtuon');
  if (btuons) btuons.style.display = 'none';
}

function showHome() {
  hideAll();
  const home = document.getElementById('content-home');
  if (home) home.style.display = 'block';
  const lnk = document.getElementById('homeLink');
  if (lnk) lnk.classList.add('active');
  const btuons = document.querySelector('.homepage-infobtuon');
  if (btuons) btuons.style.display = 'flex';
}

function showActivities() {
  hideAll();
  const gms = document.getElementById('content-gms');
  if (gms) gms.style.display = 'block';
  const lnk = document.getElementById('activityLink');
  if (lnk) lnk.classList.add('active');

  if (!document.querySelector('.activity-filters') && window.ActivityStats) {
    const searchBox = document.querySelector('.search-container');
    if (searchBox) {
      const html = window.ActivityStats.createFilterButtons();
      searchBox.insertAdjacentHTML('afterend', html);
    }
  }

  if (typeof activities !== 'undefined' && Array.isArray(activities)) {
    const activebtuon = document.querySelector('.filter-btuon.active');
    if (activebtuon) {
      const flt = activebtuon.dataset.filter;
      window.filterActivities(flt);
    } else {
      renderActivities(activities);
    }
  }
}

function showSearch() {
  hideAll();
  const srch = document.getElementById('content-srch');
  if (srch) {
    srch.style.display = 'block';
    ensureEmbeddedFrameLoaded(srch);
  }
  const lnk = document.getElementById('searchLink');
  if (lnk) lnk.classList.add('active');

  setTimeout(() => {
    const inp = document.getElementById('proxyUrlInput');
    if (inp) inp.focus();
  }, 100);
}

function showApps() {
  hideAll();
  const aps = document.getElementById('content-aps');
  if (aps) aps.style.display = 'block';
  const lnk = document.getElementById('appsLink');
  if (lnk) lnk.classList.add('active');

  if (typeof apps !== 'undefined' && Array.isArray(apps)) {
    renderApps(apps);
  }
}

function showMedia() {
  hideAll();
  const media = document.getElementById('content-media');
  if (media) {
    media.style.display = 'block';
    ensureEmbeddedFrameLoaded(media);
  }
  setMediaParticlesPaused(true);
  const lnk = document.getElementById('mediaLink');
  if (lnk) lnk.classList.add('active');
}

function ensureEmbeddedFrameLoaded(container) {
  const frame = container.querySelector('.search-iframe[data-src]');
  if (!frame || frame.dataset.loaded === 'true') return frame;

  frame.src = frame.dataset.src;
  frame.dataset.loaded = 'true';
  return frame;
}

function showSettings() {
  hideAll();
  const settings = document.getElementById('content-settings');
  if (settings) settings.style.display = 'block';
  const lnk = document.getElementById('settingsLink');
  if (lnk) lnk.classList.add('active');
}

function showEmulated() {
  hideAll();
  const emu = document.getElementById('content-emulated');
  if (emu) emu.style.display = 'block';
  const lnk = document.getElementById('Emulink');
  if (lnk) lnk.classList.add('active');

  if (typeof emulatedActivities !== 'undefined' && Array.isArray(emulatedActivities)) {
    renderEmulatedActivities(emulatedActivities);
  }
}

function loadActivity(arg) {
  let url;
  let data = null;

  if (typeof arg === 'string') {
    url = arg;
    if (typeof activities !== 'undefined') {
      data = activities.find((a) => a.file === url || a.url === url);
    }
  } else if (arg && typeof arg === 'object') {
    url = arg.url || arg.file;
    data = arg;
  } else {
    alert('Error: Invalid activity data.');
    return;
  }

  if (!url) {
    alert('Error: Activity URL is missing.');
    return;
  }

  try {
    const yt =
      url.includes('/others/assets/apps/YouTube.html') ||
      url.includes('youtu.be');

    if (yt) {
      window.open(url, '_blank');
      return;
    }

    if (data && typeof RecentlyPlayed !== 'undefined') {
      RecentlyPlayed.add({
        id: data.id || url,
        title: data.title || data.name || 'Unknown Activity',
        img: data.img || data.image || 'others/assets/relic.webp',
        file: url,
      });
    }

    hideAll();
    const disp = document.getElementById('activitypres');
    const frame = document.getElementById('activity-iframe');

    if (!disp || !frame) {
      alert('Error: Unable to load activity.');
      return;
    }

    if (window.ActivityStats) {
      window.ActivityStats.stopTracking();
    }

    frame.src = '';
    frame.src = url;
    disp.style.display = 'block';

    frame.onload = function () {
      if (window.ActivityStats) {
        window.ActivityStats.startTracking(url);
      }
    };

    frame.onerror = function () {
      alert('Error loading activity.');
    };
  } catch (err) {
    alert('An error occurred while loading the activity.');
  }
}

function renderActivities(list) {
  const container = document.getElementById('activity-list');
  if (!container) return;

  container.innerHTML = '';

  if (!list || list.length === 0) {
    container.innerHTML =
      '<p style="padding: 20px; text-align: center;">Sorry, you may be right or we are just slow developers.</p>';
    return;
  }

  list.forEach((a) => {
    if (!a || !a.name || !a.url) return;

    const fav = window.ActivityStats ? window.ActivityStats.isFavorite(a.url) : false;

    const card = document.createElement('div');
    card.className = 'activity-card';
    card.tabIndex = 0;
    card.innerHTML =
      (window.ActivityStats
        ? window.ActivityStats.createFavoriteButton(a.url, fav)
        : '') +
      '<img src="' +
      (a.image || 'https://via.placeholder.com/250x250?text=Activity') +
      '" alt="' +
      a.name +
      '" loading="lazy" /><h3>' +
      a.name +
      '</h3>';

    card.onclick = () => loadActivity(a.url);
    card.onkeypress = (e) => {
      if (e.key === 'Enter') loadActivity(a.url);
    };

    container.appendChild(card);
  });
}

function renderEmulatedActivities(list) {
  const container = document.getElementById('emulated-list');
  if (!container) return;

  container.innerHTML = '';

  if (!list || list.length === 0) {
    container.innerHTML =
      '<p style="padding: 20px; text-align: center;">No emulated activities found.</p>';
    return;
  }

  list.forEach((a) => {
    if (!a || !a.name || !a.url) return;

    const card = document.createElement('div');
    card.className = 'activity-card';
    card.tabIndex = 0;
    card.innerHTML =
      '<img src="' +
      (a.image || 'https://via.placeholder.com/250x250?text=Activity') +
      '" alt="' +
      a.name +
      '" loading="lazy" /><h3>' +
      a.name +
      '</h3>';

    card.onclick = () => loadActivity(a.url);
    card.onkeypress = (e) => {
      if (e.key === 'Enter') loadActivity(a.url);
    };

    container.appendChild(card);
  });
}

function renderApps(list) {
  const container = document.getElementById('app-list');
  if (!container) return;

  container.innerHTML = '';

  if (!list || list.length === 0) {
    container.innerHTML = '<p>No apps found.</p>';
    return;
  }

  list.forEach((a) => {
    if (!a || !a.name || !a.url) return;

    const card = document.createElement('div');
    card.className = 'app-card';
    card.innerHTML =
      '<img src="' +
      (a.image || 'https://via.placeholder.com/250x250?text=App') +
      '" alt="' +
      a.name +
      '" loading="lazy" /><h3>' +
      a.name +
      '</h3>';
    card.onclick = () => loadActivity(a.url);
    container.appendChild(card);
  });
}

function renderWebsites(list) {
  const container = document.getElementById('websites-list');
  if (!container) return;

  container.innerHTML = '';

  if (!list || list.length === 0) {
    container.innerHTML = '<p>No websites found.</p>';
    return;
  }

  const ul = document.createElement('ul');
  ul.style.cssText =
    'list-style: none; padding: 20px; max-width: 800px; margin: 0 auto;';

  list.forEach((site) => {
    if (!site || !site.name || !site.url) return;

    const li = document.createElement('li');
    li.style.cssText =
      'padding: 15px; margin-bottom: 10px; background: var(--nav-color); border: 1px solid var(--border-color); border-radius: 8px; transition: all 0.3s ease;';

    li.innerHTML =
      '<a href="' +
      site.url +
      '" target="_blank" style="color: var(--accent-color); text-decoration: none; font-size: 18px; display: flex; align-items: center; gap: 10px;"><span>🔗</span><div><div style="font-weight: 600;">' +
      site.name +
      '</div><div style="font-size: 14px; color: var(--text-color); opacity: 0.7; margin-top: 4px;">' +
      site.url +
      '</div></div></a>';

    li.addEventListener('mouseenter', function () {
      this.style.background = 'var(--hover-bg)';
      this.style.borderColor = 'var(--accent-color)';
      this.style.transform = 'translateX(5px)';
    });

    li.addEventListener('mouseleave', function () {
      this.style.background = 'var(--nav-color)';
      this.style.borderColor = 'var(--border-color)';
      this.style.transform = 'translateX(0)';
    });

    ul.appendChild(li);
  });

  container.appendChild(ul);
}

function searchActivities() {
  const inp = document.getElementById('searchInput');
  if (!inp) return;

  const q = inp.value.toLowerCase().trim();

  if (typeof activities === 'undefined' || !Array.isArray(activities)) {
    return;
  }

  if (!q) {
    renderActivities(activities);
    return;
  }

  const results = activities.filter(
    (a) => a && a.name && a.name.toLowerCase().includes(q)
  );
  renderActivities(results);
}

function searchEmulatedActivities() {
  const inp = document.getElementById('searchEmulatedInput');
  if (!inp) return;

  const q = inp.value.toLowerCase().trim();

  if (typeof emulatedActivities === 'undefined' || !Array.isArray(emulatedActivities)) {
    return;
  }

  if (!q) {
    renderEmulatedActivities(emulatedActivities);
    return;
  }

  const results = emulatedActivities.filter(
    (a) => a && a.name && a.name.toLowerCase().includes(q)
  );
  renderEmulatedActivities(results);
}

function searchWebsites() {
  const inp = document.getElementById('websitesSearchInput');
  if (!inp) return;

  const q = inp.value.toLowerCase().trim();

  if (typeof websites === 'undefined' || !Array.isArray(websites)) {
    return;
  }

  if (!q) {
    renderWebsites(websites);
    return;
  }

  const results = websites.filter(
    (s) => s && s.name && s.name.toLowerCase().includes(q)
  );
  renderWebsites(results);
}

function toggleFullscreen() {
  const frame = document.getElementById('activity-iframe');
  if (!frame) return;

  try {
    if (!document.fullscreenElement) {
      frame.requestFullscreen().catch((err) => {
        alert('Fullscreen not available. Click on the activity first.');
      });
    } else {
      document.exitFullscreen();
    }
  } catch (err) {
    //do nothing
  }
}

function refreshActivity() {
  const frame = document.getElementById('activity-iframe');
  if (!frame) return;

  try {
    const curr = frame.src;
    frame.src = '';
    setTimeout(() => {
      frame.src = curr;
    }, 100);
  } catch (err) {
    //do nothing
  }
}

function openInBlank(activityUrl) {
  const blank = window.open('about:blank', '_blank');

  if (blank) {
    blank.document.write(`
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>about:blank</title>
        <style>
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }
          body {
            width: 100vw;
            height: 100vh;
            overflow: hidden;
            background: #000;
          }
          #activity-frame {
            width: 100%;
            height: 100%;
            border: none;
          }
          .control-bar {
            position: fixed;
            top: 0;
            right: 0;
            background: rgba(0, 0, 0, 0.8);
            padding: 8px;
            display: flex;
            gap: 8px;
            z-index: 9999;
            border-bottom-left-radius: 8px;
          }
          .control-btuon {
            background: rgba(255, 255, 255, 0.1);
            color: white;
            border: 1px solid rgba(255, 255, 255, 0.2);
            padding: 6px 12px;
            border-radius: 4px;
            cursor: pointer;
            font-family: Arial, sans-serif;
            font-size: 12px;
            transition: all 0.3s;
          }
          .control-btuon:hover {
            background: rgba(255, 255, 255, 0.2);
          }
          .control-btuon.close {
            background: rgba(255, 0, 0, 0.6);
          }
          .control-btuon.close:hover {
            background: rgba(255, 0, 0, 0.8);
          }
        </style>
      </head>
      <body>
        <div class="control-bar">
          <button class="control-btuon" onclick="location.reload()">⟳ Reload</button>
          <button class="control-btuon close" onclick="window.close()">✕ Close</button>
        </div>
        <iframe id="activity-frame" src="${activityUrl}" allowfullscreen allow="autoplay; fullscreen; microphone; camera"></iframe>

        <script>
          window.addEventListener('beforeunload', function(e) {
            e.preventDefault();
            e.returnValue = '';
          });
        </script>
      </body>
      </html>
    `);
    blank.document.close();
  } else {
    alert(
      'Pop-up blocked! Please allow pop-ups for this site to use this feature.'
    );
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}

function init() {
  try {
    installMediaPlayerParticleBridge();
    loadSettings();
    showHome();
    initSettingsTabs();
    initAntiClose();
    initDebug();
    initClearCache();
    showSystemInfo();

    const themeSel = document.getElementById('themeSelect');
    if (themeSel) {
      const saved = localStorage.getItem('selectedTheme');
      if (saved) {
        themeSel.value = saved;
      } else if (checkSeasonalAuto()) {
        themeSel.value = getSeasonalTheme();
      } else {
        themeSel.value = 'original';
      }

      themeSel.addEventListener('change', (e) => {
        const t = e.target.value;
        setTheme(t);
      });
    }

    const credbtuon = document.getElementById('creditsbtuon');
    const logbtuon = document.getElementById('updateLogbtuon');
    const credMod = document.getElementById('creditsModal');
    const logMod = document.getElementById('updlogmodule');

    if (credbtuon && credMod) {
      credbtuon.addEventListener('click', () => {
        credMod.style.display = 'block';
      });
    }

    if (logbtuon && logMod) {
      logbtuon.addEventListener('click', () => {
        logMod.style.display = 'block';
      });
    }

    document.querySelectorAll('.info-close').forEach((cls) => {
      cls.addEventListener('click', function () {
        const id = this.getAttribute('data-modal');
        const mod = document.getElementById(id);
        if (mod) {
          mod.style.display = 'none';
        }
      });
    });

    window.onclick = (e) => {
      if (e.target.classList.contains('info-modal')) {
        e.target.style.display = 'none';
      }
    };

    const homeLnk = document.getElementById('homeLink');
    const activityLnk = document.getElementById('activityLink');
    const emuLnk = document.getElementById('Emulink');
    const appsLnk = document.getElementById('appsLink');
    const mediaLnk = document.getElementById('mediaLink');
    const srchLnk = document.getElementById('searchLink');
    const setLnk = document.getElementById('settingsLink');

    if (homeLnk)
      homeLnk.addEventListener('click', (e) => {
        e.preventDefault();
        showHome();
      });
    if (activityLnk)
      activityLnk.addEventListener('click', (e) => {
        e.preventDefault();
        showActivities();
      });
    if (emuLnk)
      emuLnk.addEventListener('click', (e) => {
        e.preventDefault();
        showEmulated();
      });
    if (appsLnk)
      appsLnk.addEventListener('click', (e) => {
        e.preventDefault();
        showApps();
      });
    if (mediaLnk)
      mediaLnk.addEventListener('click', (e) => {
        e.preventDefault();
        showMedia();
      });
    if (srchLnk)
      srchLnk.addEventListener('click', (e) => {
        e.preventDefault();
        showSearch();
      });
    if (setLnk)
      setLnk.addEventListener('click', (e) => {
        e.preventDefault();
        showSettings();
      });

    const backActivity = document.getElementById('backToHomeActivity');
    const backApps = document.getElementById('backToHomeApps');

    if (backActivity) {
      backActivity.addEventListener('click', () => {
        if (window.ActivityStats) {
          window.ActivityStats.stopTracking();
        }
        showHome();
      });
    }

    if (backApps) {
      backApps.addEventListener('click', () => showHome());
    }

    const srchbtuon = document.getElementById('searchbtuon');
    const srchInp = document.getElementById('searchInput');

    if (srchbtuon) {
      srchbtuon.addEventListener('click', searchActivities);
    }

    if (srchInp) {
      srchInp.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') searchActivities();
      });
      srchInp.addEventListener('input', debounce(searchActivities, 300));
    }

    const emubtuon = document.getElementById('searchEmulatedbtuon');
    const emuInp = document.getElementById('searchEmulatedInput');

    if (emubtuon) {
      emubtuon.addEventListener('click', searchEmulatedActivities);
    }

    if (emuInp) {
      emuInp.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') searchEmulatedActivities();
      });
      emuInp.addEventListener('input', debounce(searchEmulatedActivities, 300));
    }

    const fsbtuon = document.getElementById('fullscreenbtuon');
    if (fsbtuon) {
      fsbtuon.addEventListener('click', toggleFullscreen);
    }

    const refbtuon = document.getElementById('refreshbtuon');
    if (refbtuon) {
      refbtuon.addEventListener('click', refreshActivity);
    }

  } catch (err) {
    alert(
      'An error occurred during initialization. Check console for errors pls.'
    );
  }
}
