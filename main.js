const main = () => {
  const runBtn = document.querySelector("#run");
  runBtn.addEventListener("click", () => {
    const textArea = document.querySelector("#editor");
    const codeContent = textArea.value;
    const parsedCode = parse(codeContent);
    const canvas = new Canvas();
    canvas.run(parsedCode);
  });
};

const parse = (code) => {
  const linesOfCode = code.split("\n");
  return linesOfCode.map((lineOfCode) => {
    const [command, ...args] = lineOfCode.split(/\s+/);
    const x = args[0] || 0;
    const y = args[1] || 0;
    return { command, x, y };
  });
};

class Canvas {
  #_x;
  #_y;
  #_cmd;
  constructor() {
    this.#_x = 0;
    this.#_y = 0;
    this.#_cmd = null;
  }

  run(code) {
    code.forEach((line) => {
      this.cmd = line.command;
      this.x = line.x;
      this.y = line.y;
    });
  }

  set cmd(command) {
    this.#_cmd = command;
  }

  set x(xCoor) {
    this.#_x = xCoor;
    console.log(this.#_x);
  }

  set y(yCoor) {
    this.#_y = yCoor;
    console.log(this.#_y, this.#_cmd);
  }
}

globalThis.onload = main;
