function run() {
  const htmlCode = document.getElementById("html-code").value;
  const cssCode = document.getElementById("css-code").value;
  const jsCode = document.getElementById("js-code").value;
  const output = document.getElementById("output");

  const fullCode = `
    <html>
      <head>
        <style>${cssCode}</style>
      </head>
      <body>
        ${htmlCode}
        <script>${jsCode}<\/script>
      </body>
    </html>
  `;

  output.srcdoc = fullCode;
}


