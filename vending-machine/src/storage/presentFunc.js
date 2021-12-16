// append func
export function appendDiv(div, childArr) {
  childArr.forEach(child => div.appendChild(child));
}

// create func
export function createAmountText(text, spanId) {
  const p = document.createElement('p');
  p.innerHTML = text;
  const span = document.createElement('span');
  span.id = spanId;

  p.appendChild(span);
  return p;
}

export function createBtn(text, id) {
  const button = document.createElement('button');
  button.innerText = text;
  button.id = id;

  return button;
}

export function createInput(type, text, id) {
  const input = document.createElement('input');
  input.type = type;
  input.placeholder = text;
  input.id = id;

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

// table func
export function createTable(colums) {
  let table = document.createElement('table');
  let thead = document.createElement('thead');
  let tbody = document.createElement('tbody');

  appendDiv(table, [thead, tbody]);

  colums.forEach(colum => {
    const head = document.createElement('th');
    head.innerText = colum;
    thead.appendChild(head);
  });

  appendTableStyle(table);
  appendTheadStyle(thead);
  appendTbodyStyle(tbody);

  return table;
}

export function createTbody(table, rows) {
  const tbody = table.querySelector('tbody');

  rows.forEach(row => {
    const body = document.createElement('tr');
    const first = document.createElement('td');
    first.innerText = row[0];
    const second = document.createElement('td');
    second.innerText = row[1];
    appendDiv(body, [first, second]);
    tbody.appendChild(body);
  });

  appendTbodyStyle(tbody);
}

// table style
export function appendTableStyle(table) {
  table.style.borderCollapse = 'collapse';
  table.style.borderSpacing = 0;
}

export function appendTheadStyle(thead) {
  const tr = thead.querySelectorAll('tr');
  for (let t of tr) {
    t.style.padding = '10px';
    t.style.border = '1px solid #000';
  }
  const th = thead.querySelectorAll('th');
  for (let t of th) {
    t.style.padding = '15px';
    t.style.border = '1px solid #000';
  }
}

export function appendTbodyStyle(tbody) {
  const tr = tbody.querySelectorAll('tr');
  for (let t of tr) {
    t.style.padding = '10px';
    t.style.border = '1px solid #000';
  }
  const td = tbody.querySelectorAll('td');
  for (let t of td) {
    t.style.padding = '15px';
    t.style.border = '1px solid #000';
  }
}
