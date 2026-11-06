(function () {
  "use strict";

  function measureBanner() {
    var banner = document.getElementById("rea-study-banner");
    if (!banner) return;
    document.documentElement.style.setProperty(
      "--rea-banner-h",
      banner.offsetHeight + "px"
    );
  }
  measureBanner();
  window.addEventListener("resize", measureBanner);

  var moreBtn = document.querySelector(".lz-more > button");
  var morePanel = document.getElementById("lz-more-panel");
  if (moreBtn && morePanel) {
    moreBtn.addEventListener("click", function (event) {
      event.preventDefault();
      event.stopPropagation();
      var open = moreBtn.getAttribute("aria-expanded") === "true";
      moreBtn.setAttribute("aria-expanded", open ? "false" : "true");
      if (open) morePanel.setAttribute("hidden", "");
      else morePanel.removeAttribute("hidden");
    });
    document.addEventListener("click", function (event) {
      if (!moreBtn.contains(event.target) && !morePanel.contains(event.target)) {
        moreBtn.setAttribute("aria-expanded", "false");
        morePanel.setAttribute("hidden", "");
      }
    });
  }

  var calls = document.getElementById("calls-list");
  var callsMore = document.querySelector(".calls-more");
  if (calls && callsMore) {
    callsMore.addEventListener("click", function () {
      var open = calls.classList.toggle("open");
      callsMore.setAttribute("aria-expanded", open ? "true" : "false");
      if (open) callsMore.textContent = "收起判断";
      else callsMore.textContent = "再看另外3条判断";
    });
  }

  var askForm = document.querySelector(".lz-ask-form");
  if (askForm) {
    var submit = askForm.querySelector('button[type="submit"]');
    if (submit) submit.disabled = false;
    askForm.addEventListener("submit", function (event) {
      event.preventDefault();
      window.location.href = "https://ask.lizheng.ai/";
    });
  }

  function go(url) {
    window.location.href = url;
  }

  document.querySelectorAll("button").forEach(function (btn) {
    if (btn.classList.contains("calls-more")) return;
    if (moreBtn && btn === moreBtn) return;
    var text = (btn.textContent || "").replace(/\s+/g, " ").trim();
    var label = btn.getAttribute("aria-label") || "";
    var controls = btn.getAttribute("aria-controls") || "";
    btn.addEventListener("click", function (event) {
      if (controls === "lz-menu" || label === "打开菜单") {
        event.preventDefault();
        go("https://www.lizheng.ai/");
      } else if (
        btn.classList.contains("lz-ask-discovery-more") ||
        btn.classList.contains("lz-ask-discovery-expand") ||
        text.indexOf("再看") === 0
      ) {
        event.preventDefault();
        go("https://ask.lizheng.ai/");
      } else if (
        btn.classList.contains("lz-ask-discovery-refresh") ||
        text.indexOf("刷新") >= 0
      ) {
        event.preventDefault();
        go("https://ask.lizheng.ai/");
      } else if (btn.classList.contains("lz-ask-upvote")) {
        event.preventDefault();
        go("https://ask.lizheng.ai/");
      } else if (btn.classList.contains("city-random") || label.indexOf("随机遇见") >= 0) {
        event.preventDefault();
        go("https://city.lizheng.ai/");
      }
    });
  });
})();
