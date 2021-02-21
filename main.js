const [button, html, css, javascript, iframe] = document.querySelectorAll('button, textarea, iframe');
button.addEventListener('click', () => {
  const fullHTML = `
    <!doctype html><html>
      <head><style>${css.value}</style></head>
      <body>${html.value}<script>${javascript.value}<\/script></body>
    </html>`;
  iframe.src = 'data:text/html,' + encodeURIComponent(fullHTML);
});
