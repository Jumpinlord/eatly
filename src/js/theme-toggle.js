export function themeToggle() {
  // Dark/light theme switcher
  const button = document.querySelector('[data-theme-toggle]');
  const localStorageTheme = localStorage.getItem('theme');
  const systemSettingDark = window.matchMedia('(prefers-color-scheme: dark)');

  function calculateSettingAsThemeString({
    localStorageTheme,
    systemSettingDark,
  }) {
    if (localStorageTheme !== null) {
      return localStorageTheme;
    }

    if (systemSettingDark.matches) {
      return 'dark';
    }

    return 'light';
  }

  function updateButton({ buttonEl, isDark }) {
    const newCta = isDark ? 'Change to light theme' : 'Change to dark theme';
    const newAriaPressedState = isDark ? 'true' : 'false'
    buttonEl.setAttribute('aria-label', newCta);
    buttonEl.setAttribute('aria-pressed', newAriaPressedState)
  }

  function updateThemeOnHtmlEl({ theme }) {
    if (theme === 'dark') {
      document.querySelector('html').classList.add('dark');
    } else {
      document.querySelector('html').classList.remove('dark');
    }
  }

  let currentThemeSetting = calculateSettingAsThemeString({
    localStorageTheme,
    systemSettingDark,
  });

  updateButton({ buttonEl: button, isDark: currentThemeSetting === 'dark' });
  updateThemeOnHtmlEl({ theme: currentThemeSetting });

  button.addEventListener('click', event => {
    const newTheme = currentThemeSetting === 'dark' ? 'light' : 'dark';

    localStorage.setItem('theme', newTheme);
    updateButton({ buttonEl: button, isDark: newTheme === 'dark' });
    updateThemeOnHtmlEl({ theme: newTheme });

    currentThemeSetting = newTheme;
  });
}