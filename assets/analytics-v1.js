/* Site-scoped, browser-local exclusion for manual QA. */
(function () {
  'use strict';
  var id = 'G-YCKEM8KMWQ';
  var key = 'futari-kaji-notes.analytics-excluded-until';
  var url = new URL(window.location.href);
  var choice = url.searchParams.get('analytics');
  var excluded = false;
  var persisted = true;
  try {
    if (choice === 'off') localStorage.setItem(key, String(Date.now() + 30 * 86400000));
    if (choice === 'on') localStorage.removeItem(key);
    excluded = Number(localStorage.getItem(key)) > Date.now();
  } catch (error) { persisted = false; }
  if (choice === 'off') excluded = true;
  if (choice === 'on') excluded = false;
  if (choice === 'off' || choice === 'on') {
    url.searchParams.delete('analytics');
    // Keep the explicit flag when storage is unavailable, so reload stays excluded.
    if (persisted) window.history.replaceState(null, '', url.href);
  }
  window['ga-disable-' + id] = excluded;
  if (excluded) {
    document.addEventListener('DOMContentLoaded', function () {
      var notice = document.createElement('aside');
      notice.setAttribute('aria-label', 'アクセス計測の設定');
      notice.style.cssText = 'padding:12px 20px;background:#e9efc4;color:#24241e;font:14px/1.6 sans-serif;';
      notice.appendChild(document.createTextNode(persisted
        ? 'このブラウザはアクセス計測から除外中です（設定から30日間）。 '
        : 'このページは計測対象外です。保存できないため、次のページも確認用URLで開いてください。 '));
      var resume = document.createElement('a');
      var resumeUrl = new URL(window.location.href);
      resumeUrl.searchParams.set('analytics', 'on');
      resume.href = resumeUrl.href;
      resume.textContent = '通常の計測に戻す';
      notice.appendChild(resume);
      document.body.prepend(notice);
    });
    return;
  }
  window.dataLayer = window.dataLayer || [];
  window.gtag = function () { window.dataLayer.push(arguments); };
  window.gtag('js', new Date());
  window.gtag('config', id, {allow_google_signals: false, allow_ad_personalization_signals: false});
  var script = document.createElement('script');
  script.async = true;
  script.src = 'https://www.googletagmanager.com/gtag/js?id=' + id;
  document.head.appendChild(script);
})();
