const menuButton = document.querySelector('.main-header [data-menu-toggle]');
const nav = document.querySelector('.main-header [data-primary-nav]');
const searchButton = document.querySelector('[data-search-toggle]');
const searchPanel = document.querySelector('[data-search-panel]');

if (menuButton && nav) {
  menuButton.addEventListener('click', () => {
    const open = nav.classList.toggle('is-open');
    menuButton.setAttribute('aria-expanded', String(open));
  });
}

if (searchButton && searchPanel) {
  searchButton.addEventListener('click', () => {
    const open = searchPanel.classList.toggle('is-open');
    searchButton.setAttribute('aria-expanded', String(open));
    if (open) searchPanel.querySelector('input')?.focus();
  });
}

// Recherche locale : redirige vers la page la plus pertinente.
document.querySelectorAll('[data-search-form]').forEach((searchForm) => {
  searchForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const q = (searchForm.querySelector('input')?.value || '').toLowerCase();

    if (q.includes('chèque') || q.includes('cheque')) {
      window.location.href = 'fraude-cheque.html';
    } else if (
      q.includes('président') ||
      q.includes('president') ||
      q.includes('bec') ||
      q.includes('courriel')
    ) {
      window.location.href = 'fraude-president.html';
    } else {
      window.location.href = 'index.html#fraudes';
    }
  });
});

// Menu mobile de la page d'accueil.
const homeMenuButton = document.querySelector('.spvm-home-menu-btn');
const homeHeaderRight = document.querySelector('.spvm-home-header-right');

if (homeMenuButton && homeHeaderRight) {
  homeMenuButton.addEventListener('click', () => {
    const open = homeHeaderRight.classList.toggle('is-open');
    homeMenuButton.setAttribute('aria-expanded', String(open));
  });
}

// Onglets des pages de contenu : Impacts / Prévention / Recours.
const contentTabs = document.querySelectorAll('[data-content-tab]');
const contentPanels = document.querySelectorAll('[data-content-panel]');

contentTabs.forEach((tab) => {
  tab.addEventListener('click', () => {
    const target = tab.entryset.contentTab;

    contentTabs.forEach((item) => {
      const active = item === tab;
      item.classList.toggle('is-active', active);
      item.setAttribute('aria-selected', String(active));
    });

    contentPanels.forEach((panel) => {
      const active = panel.dataset.contentPanel === target;
      panel.classList.toggle('is-active', active);
      panel.hidden = !active;
    });
  });
});
(() => {
  "use strict";

  /* =========================
     MOBILE HEADER MENU
  ========================= */

  const menuButton = document.querySelector(".spvm-home-menu-btn");
  const headerRight = document.querySelector(".spvm-home-header-right");

  if (menuButton && headerRight && !menuButton.dataset.bound) {
    menuButton.dataset.bound = "true";

    menuButton.addEventListener("click", () => {
      const open = headerRight.classList.toggle("is-open");
      menuButton.setAttribute("aria-expanded", String(open));
    });
  }


  /* =========================
     SEARCH
  ========================= */

  document.querySelectorAll("[data-search-form]").forEach((searchForm) => {
    if (searchForm.dataset.bound) return;
    searchForm.dataset.bound = "true";

    searchForm.addEventListener("submit", (event) => {
      event.preventDefault();

      const query = (
        searchForm.querySelector('input[type="search"]')?.value || ""
      )
        .trim()
        .toLowerCase();

      if (query.includes("chÃ¨que") || query.includes("cheque")) {
        window.location.href = "fraude-cheque.html";
        return;
      }

      if (
        query.includes("prÃ©sident") ||
        query.includes("president") ||
        query.includes("bec") ||
        query.includes("courriel")
      ) {
        window.location.href = "fraude-president.html";
        return;
      }

      window.location.href = "index.html#fraudes";
    });
  });


  /* =========================
     IMPACTS / PRÃ‰VENTION / RECOURS
  ========================= */

  document.querySelectorAll(".content-info-section").forEach((section) => {
    if (section.dataset.tabsBound) return;
    section.dataset.tabsBound = "true";

    const tabs = section.querySelectorAll("[data-content-tab]");
    const panels = section.querySelectorAll("[data-content-panel]");

    tabs.forEach((tab) => {
      tab.addEventListener("click", () => {
        const target = tab.dataset.contentTab;

        tabs.forEach((button) => {
          const active = button === tab;

          button.classList.toggle("is-active", active);
          button.setAttribute("aria-selected", String(active));
          button.setAttribute("tabindex", active ? "0" : "-1");
        });

        panels.forEach((panel) => {
          const active = panel.dataset.contentPanel === target;

          panel.classList.toggle("is-active", active);
          panel.hidden = !active;
        });
      });
    });
  });
})();