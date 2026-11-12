import { CONFIG } from './config.js?v=source20261112';

document.querySelectorAll('[data-app-name]').forEach(el => el.textContent = CONFIG.appName);
document.querySelectorAll('[data-release]').forEach(el => el.textContent = CONFIG.overtureRelease);
document.querySelectorAll('[data-version]').forEach(el => el.textContent = CONFIG.appVersion);
document.querySelectorAll('[data-operator]').forEach(el => el.textContent = CONFIG.operator.name || 'Operator not specified');
document.querySelectorAll('[data-contact-email]').forEach(el => {
  el.textContent = CONFIG.operator.contactEmail || 'Contact not provided';
  if (CONFIG.operator.contactEmail && el.tagName === 'A') el.href = `mailto:${CONFIG.operator.contactEmail}`;
});
