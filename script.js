function isMobile() {
  // Usa uma expressão regular para verificar o agente do usuário (user agent)
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

function insertBanner() {
  const bannerContainer = document.getElementById("top-banner");

  if (isMobile()) {
  // Código para dispositivos móveis
  bannerContainer.innerHTML = `
    <a id="top-ad" href="" target="_blank" rel="sponsored">
    <img src="" width="" height="" alt=""/>
    </a>
  `;
  } else {
  // Código para desktop e tablets
  bannerContainer.innerHTML = `
    <a id="top-ad" href="" target="_blank" rel="sponsored">
    <img src="" width="" height="" alt=""/>
    </a>
  `;
  }
}

// Chama a função para inserir o banner com base no dispositivo
insertBanner();
