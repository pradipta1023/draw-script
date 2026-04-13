const main = () => {
  const runBtn = document.querySelector("#run");
  runBtn.addEventListener("click", () => {
    const textArea = document.querySelector("#editor");
    const codeContent = textArea.value;
    const parsedCode = parse(codeContent);
    console.log(parsedCode);
  });
};

const parse = (code) => {
  const [command, ...args] = code.split(/\s+/);
  return { command, args };
};

globalThis.onload = main;
