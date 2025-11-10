// micro-lib.js (mini version)
// Create DOM elements quickly: el("tag", { props }, ...children)
function el(tag, props = {}, ...children) {
  const node = document.createElement(tag);
  Object.entries(props).forEach(([k, v]) => {
    if (k.startsWith("on")) node.addEventListener(k.slice(2).toLowerCase(), v);
    else if (k === "style") Object.assign(node.style, v);
    else node.setAttribute(k, v);
  });
  children.flat().forEach(c => node.append(c.nodeType ? c : document.createTextNode(c)));
  return node;
}

// Optional helper to mount elements to DOM
function mount(parent, child) { parent.appendChild(child); return child; }
