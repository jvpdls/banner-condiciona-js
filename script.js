function isMobile() {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

function insertBanner() {
  const bannerContainer = document.getElementById("top-banner");

  if (isMobile()) {
  bannerContainer.innerHTML = `
    <a id="top-ad" href="" target="_blank" rel="sponsored">
      <img src="" width="" height="" alt=""/>
    </a>
  `;
  } else {
  bannerContainer.innerHTML = `
    <a id="top-ad" href="" target="_blank" rel="sponsored">
      <img src="" width="" height="" alt=""/>
    </a>
  `;
  }
}

insertBanner();
