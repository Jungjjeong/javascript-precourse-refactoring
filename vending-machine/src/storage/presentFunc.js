export function creaateTable() {}

export function createBtn(text, id) {
  const button = document.createElement('button');
  button.innerText = text;
  button.id = id;

  return button;
}

export function createInput(type, text, id) {
  const input = document.createElement('input');
  input.type = type;
  input.innerText = text;

  return input;
}

export function createTitle(hTag, text) {
  const title = document.createElement(hTag);
  title.innerText = text;

  return title;
}

export function createDiv(id) {
  const div = document.createElement('div');
  div.id = id;

  return div;
}
