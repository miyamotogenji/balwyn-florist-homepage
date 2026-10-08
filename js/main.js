(() => {
  const header = document.querySelector(".site-header");
  const menuToggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".nav");
  const searchOpen = document.querySelector("[data-search-open]");
  const searchOverlay = document.querySelector(".search-overlay");
  const searchClose = document.querySelector("[data-search-close]");
  const searchInput = document.querySelector(".search-box input");
  const chatBtn = document.querySelector(".chat-btn");
  const chatPanel = document.querySelector(".chat-panel");
  const chatClose = document.querySelector("[data-chat-close]");
  const cartCount = document.querySelector(".cart-count");
  const subscribeForm = document.querySelector(".subscribe-form");

  window.addEventListener("scroll", () => {
    header?.classList.toggle("is-scrolled", window.scrollY > 8);
  });

  menuToggle?.addEventListener("click", () => {
    const open = nav?.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", open ? "true" : "false");
  });

  nav?.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => nav.classList.remove("open"));
  });

  const openSearch = () => {
    searchOverlay?.classList.add("open");
    setTimeout(() => searchInput?.focus(), 50);
  };
  const closeSearch = () => searchOverlay?.classList.remove("open");

  searchOpen?.addEventListener("click", openSearch);
  searchClose?.addEventListener("click", closeSearch);
  searchOverlay?.addEventListener("click", (e) => {
    if (e.target === searchOverlay) closeSearch();
  });

  chatBtn?.addEventListener("click", () => {
    chatPanel?.classList.toggle("open");
    const badge = chatBtn.querySelector(".badge");
    if (badge) badge.remove();
  });
  chatClose?.addEventListener("click", () => chatPanel?.classList.remove("open"));

  document.querySelectorAll("[data-account]").forEach((el) => {
    el.addEventListener("click", (e) => {
      e.preventDefault();
      alert("Account placeholder — connect to Shopify/Woo customer login.");
    });
  });

  document.querySelectorAll("[data-cart]").forEach((el) => {
    el.addEventListener("click", (e) => {
      e.preventDefault();
      alert("Cart placeholder — ready to wire to your store cart drawer.");
    });
  });

  // Demo: increment cart count when Shop Now / product links clicked with data-add
  document.querySelectorAll("[data-add]").forEach((el) => {
    el.addEventListener("click", (e) => {
      e.preventDefault();
      if (!cartCount) return;
      const n = Number(cartCount.textContent || "0") + 1;
      cartCount.textContent = String(n);
      cartCount.classList.add("is-visible");
    });
  });

  subscribeForm?.addEventListener("submit", (e) => {
    e.preventDefault();
    const input = subscribeForm.querySelector("input");
    if (!input?.value.trim()) return;
    alert("Thanks! Subscription placeholder is ready for Shopify/Klaviyo.");
    input.value = "";
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeSearch();
      chatPanel?.classList.remove("open");
      nav?.classList.remove("open");
    }
  });
})();
