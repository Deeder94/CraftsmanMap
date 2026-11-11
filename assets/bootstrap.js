(() => {
  let mapReady = false;
  let failed = false;

  function statusElement() { return document.getElementById('map-status'); }
  function showFailure(message) {
    if (mapReady) return;
    failed = true;
    const el = statusElement();
    if (el) {
      el.textContent = message || 'The map could not start. Check your connection and refresh the page.';
      el.dataset.kind = 'error';
    }
  }

  window.HK_BOOT = {
    moduleStarted() { document.documentElement.dataset.hkModule = 'started'; },
    mapReady() { mapReady = true; document.documentElement.dataset.hkReady = 'true'; },
    fail(message) { showFailure(message); }
  };

  window.addEventListener('error', (event) => {
    if (mapReady) return;
    const target = event.target;
    if (target && target.tagName === 'SCRIPT') {
      showFailure('A required map component could not load. Check your connection and refresh.');
    }
  }, true);

  window.addEventListener('unhandledrejection', (event) => {
    if (!mapReady) {
      console.error('Unhandled startup/module error:', event.reason);
      showFailure('The map did not start correctly. Refresh and check your connection.');
    }
  });

  setTimeout(() => {
    if (mapReady || failed) return;
    if (document.documentElement.dataset.hkModule !== 'started') {
      showFailure('The map could not start because a JavaScript component failed to load. Check your connection and refresh.');
    }
  }, 6000);
})();
