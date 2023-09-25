# Banner Condicional em Vanilla JS
Trecho para exibir condicionalmente banners promocionais a depender do dispositivo do usuário. Executado no lado do cliente.
É uma alternativa à [implementação via php](https://github.com/jvpdls/banner-condicional-php).

O script depende da existência de uma seção `<div id="top-banner"></div>` na página onde é chamado.

A vantagem de usar a implementação direto no front-end está no fato de não ser necessário separar as versões em cache da página a ser carregada quando o site é totalmente responsivo.

O código considera a inserção do script no rodapé do site, de modo que a seção onde a imagem será inserida já tenha sido criada quando ele for disponibilizado no DOM.
