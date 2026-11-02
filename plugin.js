/* gomoku-companion v0.1.0 | built 2026-11-02T14:44:19.471Z */
(() => {
  // src/ui/theme.css
  var theme_default = '/* 所有选择器都挂在 .gmk-root / .gmk-modal / .gmk-card 之下，不污染宿主。 */\n\n.gmk-root,\n.gmk-modal,\n.gmk-card {\n  --gmk-fg: #1d1f23;\n  --gmk-muted: #6b7280;\n  --gmk-line: rgba(0, 0, 0, 0.08);\n  --gmk-surface: #ffffff;\n  --gmk-surface-2: #f5f6f8;\n  --gmk-accent: #2f6feb;\n  --gmk-board: #e7c894;\n  --gmk-board-line: rgba(62, 42, 12, 0.45);\n  --gmk-stone-black: #23262b;\n  --gmk-stone-white: #f7f6f3;\n  --gmk-win: #d94f1e;\n  color: var(--gmk-fg);\n  font-family: -apple-system, "Segoe UI", "PingFang SC", "Microsoft YaHei", sans-serif;\n}\n\n@media (prefers-color-scheme: dark) {\n  .gmk-root,\n  .gmk-modal,\n  .gmk-card {\n    --gmk-fg: #e8e9ec;\n    --gmk-muted: #9aa1ab;\n    --gmk-line: rgba(255, 255, 255, 0.12);\n    --gmk-surface: #1b1c20;\n    --gmk-surface-2: #24262b;\n    --gmk-accent: #6f9bff;\n    --gmk-board: #6f5934;\n    --gmk-board-line: rgba(255, 238, 200, 0.5);\n    --gmk-win: #ff8a5c;\n  }\n}\n\n/* ---------------- 棋盘 ---------------- */\n\n.gmk-board {\n  display: block;\n  width: 100%;\n  height: auto;\n  aspect-ratio: 1 / 1;\n  border-radius: 12px;\n  background: var(--gmk-board);\n  touch-action: manipulation;\n  user-select: none;\n}\n\n.gmk-board.is-interactive {\n  cursor: pointer;\n}\n\n.gmk-board--mini {\n  width: 88px;\n  border-radius: 8px;\n  flex: 0 0 auto;\n}\n\n.gmk-grid-line {\n  stroke: var(--gmk-board-line);\n  stroke-width: 1;\n  vector-effect: non-scaling-stroke;\n}\n\n.gmk-grid-frame {\n  fill: none;\n  stroke: var(--gmk-board-line);\n  stroke-width: 1.6;\n  vector-effect: non-scaling-stroke;\n}\n\n.gmk-star {\n  fill: var(--gmk-board-line);\n}\n\n.gmk-stone {\n  vector-effect: non-scaling-stroke;\n}\n\n.gmk-stone--black {\n  fill: var(--gmk-stone-black);\n}\n\n.gmk-stone--white {\n  fill: var(--gmk-stone-white);\n  stroke: rgba(0, 0, 0, 0.22);\n  stroke-width: 1;\n}\n\n.gmk-last--black {\n  fill: var(--gmk-stone-white);\n}\n\n.gmk-last--white {\n  fill: var(--gmk-stone-black);\n}\n\n.gmk-win-line {\n  stroke: var(--gmk-win);\n  stroke-width: 3.2;\n  stroke-linecap: round;\n  vector-effect: non-scaling-stroke;\n  opacity: 0.92;\n}\n\n.gmk-ghost {\n  pointer-events: none;\n  transition: opacity 0.12s ease;\n}\n\n.gmk-ghost--black {\n  fill: var(--gmk-stone-black);\n}\n\n.gmk-ghost--white {\n  fill: var(--gmk-stone-white);\n  stroke: rgba(0, 0, 0, 0.25);\n  stroke-width: 1;\n  vector-effect: non-scaling-stroke;\n}\n\n/* ---------------- 弹框 ---------------- */\n\n.gmk-modal {\n  position: fixed;\n  inset: 0;\n  z-index: 900;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 20px;\n  background: rgba(10, 12, 16, 0.44);\n  animation: gmk-fade 0.16s ease;\n}\n\n.gmk-modal__panel {\n  width: 100%;\n  max-width: 520px;\n  max-height: 100%;\n  display: flex;\n  flex-direction: column;\n  min-height: 0;\n  background: var(--gmk-surface);\n  border-radius: 20px;\n  box-shadow: 0 24px 60px rgba(0, 0, 0, 0.3);\n  overflow: hidden;\n}\n\n.gmk-modal__head {\n  flex: 0 0 auto;\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 14px 14px 10px 18px;\n}\n\n.gmk-modal__title {\n  flex: 1 1 auto;\n  min-width: 0;\n}\n\n.gmk-modal__name {\n  font-size: 15px;\n  font-weight: 600;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.gmk-modal__sub {\n  font-size: 12px;\n  color: var(--gmk-muted);\n  margin-top: 2px;\n}\n\n.gmk-modal__body {\n  flex: 1 1 auto;\n  min-height: 0;\n  overflow: auto;\n  padding: 4px 18px 16px;\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n\n.gmk-avatar {\n  width: 34px;\n  height: 34px;\n  border-radius: 50%;\n  overflow: hidden;\n  flex: 0 0 auto;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  background: var(--gmk-surface-2);\n  font-size: 14px;\n  font-weight: 600;\n  color: var(--gmk-muted);\n}\n\n.gmk-avatar img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  display: block;\n}\n\n.gmk-icon-btn {\n  width: 32px;\n  height: 32px;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  border: 0;\n  border-radius: 10px;\n  background: transparent;\n  color: var(--gmk-muted);\n  cursor: pointer;\n  padding: 0;\n  flex: 0 0 auto;\n}\n\n.gmk-icon-btn:hover {\n  background: var(--gmk-surface-2);\n  color: var(--gmk-fg);\n}\n\n/* ---------------- 对局主体 ---------------- */\n\n.gmk-game {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n\n.gmk-board-wrap {\n  width: 100%;\n  max-width: min(430px, 54vh);\n  margin: 0 auto;\n}\n\n.gmk-status {\n  text-align: center;\n  font-size: 13px;\n  color: var(--gmk-muted);\n  font-variant-numeric: tabular-nums;\n}\n\n.gmk-result {\n  text-align: center;\n  font-size: 14px;\n  font-weight: 600;\n  padding: 8px 12px;\n  border-radius: 12px;\n  background: var(--gmk-surface-2);\n}\n\n.gmk-actions {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n  justify-content: center;\n}\n\n.gmk-btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  font: 13px/1 inherit;\n  padding: 9px 13px;\n  border-radius: 11px;\n  border: 1px solid var(--gmk-line);\n  background: transparent;\n  color: var(--gmk-fg);\n  cursor: pointer;\n}\n\n.gmk-btn:hover {\n  background: var(--gmk-surface-2);\n}\n\n.gmk-btn:disabled {\n  opacity: 0.45;\n  cursor: default;\n}\n\n.gmk-btn--primary {\n  background: var(--gmk-accent);\n  border-color: transparent;\n  color: #fff;\n  font-weight: 600;\n}\n\n.gmk-btn--primary:hover {\n  filter: brightness(1.05);\n  background: var(--gmk-accent);\n}\n\n.gmk-btn svg {\n  width: 15px;\n  height: 15px;\n}\n\n/* ---------------- 开局设置 ---------------- */\n\n.gmk-setup {\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n  padding: 6px 0 4px;\n}\n\n.gmk-field {\n  display: flex;\n  flex-direction: column;\n  gap: 7px;\n}\n\n.gmk-field__label {\n  font-size: 12px;\n  color: var(--gmk-muted);\n}\n\n.gmk-chips {\n  display: flex;\n  gap: 8px;\n  flex-wrap: wrap;\n}\n\n.gmk-chip {\n  font: 13px/1 inherit;\n  padding: 8px 14px;\n  border-radius: 999px;\n  border: 1px solid var(--gmk-line);\n  background: transparent;\n  color: var(--gmk-fg);\n  cursor: pointer;\n}\n\n.gmk-chip.is-active {\n  border-color: var(--gmk-accent);\n  color: var(--gmk-accent);\n  background: rgba(47, 111, 235, 0.08);\n}\n\n.gmk-select {\n  font: 13px/1.4 inherit;\n  padding: 9px 10px;\n  border-radius: 10px;\n  border: 1px solid var(--gmk-line);\n  background: var(--gmk-surface);\n  color: var(--gmk-fg);\n  max-width: 100%;\n}\n\n/* ---------------- 和他说两句 ---------------- */\n\n.gmk-talk {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  border-top: 1px solid var(--gmk-line);\n  padding-top: 10px;\n}\n\n.gmk-talk__row {\n  display: flex;\n  gap: 8px;\n  align-items: center;\n}\n\n.gmk-input {\n  flex: 1 1 auto;\n  min-width: 0;\n  font: 13px/1.5 inherit;\n  padding: 9px 12px;\n  border-radius: 11px;\n  border: 1px solid var(--gmk-line);\n  background: var(--gmk-surface-2);\n  color: var(--gmk-fg);\n}\n\n.gmk-input:focus {\n  outline: none;\n  border-color: var(--gmk-accent);\n}\n\n.gmk-says {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n\n.gmk-say {\n  font-size: 13px;\n  line-height: 1.55;\n  padding: 8px 11px;\n  border-radius: 12px;\n  background: var(--gmk-surface-2);\n  color: var(--gmk-fg);\n  white-space: pre-wrap;\n  word-break: break-word;\n}\n\n.gmk-say--me {\n  align-self: flex-end;\n  max-width: 86%;\n  background: rgba(47, 111, 235, 0.12);\n}\n\n.gmk-say--char {\n  max-width: 92%;\n}\n\n.gmk-hint {\n  font-size: 12px;\n  color: var(--gmk-muted);\n  line-height: 1.6;\n}\n\n/* ---------------- 聊天卡片 ---------------- */\n\n.gmk-card {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 10px 12px;\n  border-radius: 14px;\n  background: var(--gmk-surface-2);\n  max-width: 100%;\n}\n\n.gmk-card__main {\n  flex: 1 1 auto;\n  min-width: 0;\n  display: flex;\n  flex-direction: column;\n  gap: 3px;\n}\n\n.gmk-card__title {\n  font-size: 14px;\n  font-weight: 600;\n}\n\n.gmk-card__sub {\n  font-size: 12px;\n  color: var(--gmk-muted);\n}\n\n.gmk-card__btn {\n  align-self: flex-start;\n  margin-top: 4px;\n  font: 12px/1 inherit;\n  padding: 7px 12px;\n  border-radius: 999px;\n  border: 1px solid var(--gmk-line);\n  background: var(--gmk-surface);\n  color: var(--gmk-fg);\n  cursor: pointer;\n}\n\n/* ---------------- 独立 App 页面 ---------------- */\n\n.gmk-root {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  height: 100%;\n  min-width: 0;\n  min-height: 0;\n  overflow: hidden;\n  background: transparent;\n}\n\n.gmk-page-header {\n  flex: 0 0 auto;\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 16px 20px 10px;\n}\n\n.gmk-page-title {\n  flex: 1 1 auto;\n  font-size: 17px;\n  font-weight: 600;\n}\n\n.gmk-page-content {\n  flex: 1 1 auto;\n  min-height: 0;\n  overflow: auto;\n  padding: 4px 20px 24px;\n  display: flex;\n  flex-direction: column;\n  gap: 18px;\n}\n\n.gmk-section {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n\n.gmk-section__title {\n  font-size: 12px;\n  font-weight: 600;\n  letter-spacing: 0.06em;\n  color: var(--gmk-muted);\n  text-transform: uppercase;\n}\n\n.gmk-stats {\n  display: flex;\n  gap: 10px;\n}\n\n.gmk-stat {\n  flex: 1 1 0;\n  min-width: 0;\n  padding: 12px 10px;\n  border-radius: 14px;\n  background: var(--gmk-surface-2);\n  text-align: center;\n}\n\n.gmk-stat__num {\n  font-size: 20px;\n  font-weight: 600;\n  font-variant-numeric: tabular-nums;\n}\n\n.gmk-stat__label {\n  font-size: 11px;\n  color: var(--gmk-muted);\n  margin-top: 2px;\n}\n\n.gmk-list {\n  display: flex;\n  flex-direction: column;\n  border-radius: 14px;\n  background: var(--gmk-surface-2);\n  overflow: hidden;\n}\n\n.gmk-row {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 11px 13px;\n  border: 0;\n  background: transparent;\n  color: inherit;\n  text-align: left;\n  cursor: pointer;\n  font: inherit;\n}\n\n.gmk-row + .gmk-row {\n  border-top: 1px solid var(--gmk-line);\n}\n\n.gmk-row:hover {\n  background: rgba(127, 127, 127, 0.08);\n}\n\n.gmk-row__main {\n  flex: 1 1 auto;\n  min-width: 0;\n}\n\n.gmk-row__name {\n  font-size: 14px;\n}\n\n.gmk-row__sub {\n  font-size: 12px;\n  color: var(--gmk-muted);\n  margin-top: 2px;\n}\n\n.gmk-row__chev {\n  color: var(--gmk-muted);\n  flex: 0 0 auto;\n}\n\n.gmk-empty {\n  font-size: 13px;\n  color: var(--gmk-muted);\n  line-height: 1.7;\n  padding: 14px 13px;\n  border-radius: 14px;\n  background: var(--gmk-surface-2);\n}\n\n@keyframes gmk-fade {\n  from { opacity: 0; }\n  to { opacity: 1; }\n}\n\n@media (max-width: 560px) {\n  .gmk-modal {\n    align-items: flex-end;\n    padding: 0;\n  }\n\n  .gmk-modal__panel {\n    max-width: 100%;\n    border-radius: 20px 20px 0 0;\n    max-height: 94%;\n  }\n\n  .gmk-modal__body {\n    padding-bottom: calc(16px + env(safe-area-inset-bottom));\n  }\n}\n';

  // src/ui/style.js
  var STYLE_ID = "gomoku-companion-style";
  function ensureStyle() {
    if (document.getElementById(STYLE_ID)) return;
    const style = document.createElement("style");
    style.id = STYLE_ID;
    style.textContent = theme_default;
    document.head.appendChild(style);
  }
  function removeStyleIfUnused() {
    if (document.querySelector(".gmk-root, .gmk-card, .gmk-modal")) return;
    const style = document.getElementById(STYLE_ID);
    if (style && style.parentNode) style.parentNode.removeChild(style);
  }
  function removeOrphanModals() {
    document.querySelectorAll(".gmk-modal").forEach(function(node) {
      if (node.parentNode) node.parentNode.removeChild(node);
    });
  }

  // src/ui/dom.js
  function appendChildren(el, children) {
    if (children == null) return el;
    if (Array.isArray(children)) {
      children.forEach(function(child) {
        appendChildren(el, child);
      });
      return el;
    }
    if (children instanceof Node) {
      el.appendChild(children);
      return el;
    }
    el.appendChild(document.createTextNode(String(children)));
    return el;
  }
  function h(tag, props, children) {
    const el = document.createElement(tag);
    if (props) {
      Object.keys(props).forEach(function(key) {
        const value = props[key];
        if (value === void 0 || value === null || value === false) return;
        if (key === "class") el.className = value;
        else if (key === "text") el.textContent = value;
        else if (key === "html") el.innerHTML = value;
        else if (key === "dataset") {
          Object.keys(value).forEach(function(name) {
            el.dataset[name] = value[name];
          });
        } else if (key.slice(0, 2) === "on" && typeof value === "function") {
          el.addEventListener(key.slice(2).toLowerCase(), value);
        } else if (value === true) {
          el.setAttribute(key, "");
        } else {
          el.setAttribute(key, String(value));
        }
      });
    }
    return appendChildren(el, children);
  }
  function clear(el) {
    while (el.firstChild) el.removeChild(el.firstChild);
    return el;
  }
  var PATHS = {
    close: '<path d="M6 6l12 12M18 6L6 18"/>',
    undo: '<path d="M9 14L4 9l5-5"/><path d="M4 9h9a6 6 0 010 12H8"/>',
    flag: '<path d="M6 3v18"/><path d="M6 4h11l-2 4 2 4H6"/>',
    handshake: '<path d="M3 12l4-4 5 5 5-5 4 4"/><path d="M7 8v8h10V8"/>',
    refresh: '<path d="M20 12a8 8 0 10-3 6"/><path d="M20 5v7h-7"/>',
    chat: '<path d="M4 5h16v11H9l-5 4z"/>',
    send: '<path d="M4 12l16-8-6 16-3-6z"/>',
    board: '<path d="M4 4h16v16H4z"/><path d="M9.3 4v16M14.6 4v16M4 9.3h16M4 14.6h16"/>',
    gear: '<circle cx="12" cy="12" r="3"/><path d="M12 3v2.5M12 18.5V21M3 12h2.5M18.5 12H21M5.6 5.6l1.8 1.8M16.6 16.6l1.8 1.8M18.4 5.6l-1.8 1.8M7.4 16.6l-1.8 1.8"/>',
    back: '<path d="M15 5l-7 7 7 7"/>'
  };
  function icon(name, size) {
    const path = PATHS[name] || PATHS.board;
    return '<svg viewBox="0 0 24 24" width="' + (size || 18) + '" height="' + (size || 18) + '" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">' + path + "</svg>";
  }
  function iconButton(name, label, onClick, extraClass) {
    return h("button", {
      type: "button",
      class: "gmk-icon-btn" + (extraClass ? " " + extraClass : ""),
      title: label,
      "aria-label": label,
      html: icon(name),
      onclick: onClick
    });
  }
  function avatarNode(avatar, name) {
    const initial = String(name || "?").slice(0, 1);
    if (avatar) {
      return h("span", { class: "gmk-avatar" }, [
        h("img", { src: avatar, alt: name || "", loading: "lazy" })
      ]);
    }
    return h("span", { class: "gmk-avatar gmk-avatar--text", text: initial });
  }

  // src/core/board.js
  var SIZE = 15;
  var EMPTY = 0;
  var BLACK = 1;
  var WHITE = 2;
  var COLUMN_LABELS = "ABCDEFGHIJKLMNO";
  var DIRECTIONS = [
    [1, 0],
    [0, 1],
    [1, 1],
    [1, -1]
  ];
  function indexOf(x, y) {
    return y * SIZE + x;
  }
  function inBounds(x, y) {
    return x >= 0 && x < SIZE && y >= 0 && y < SIZE;
  }
  function createBoard() {
    return new Array(SIZE * SIZE).fill(EMPTY);
  }
  function stoneAt(board, x, y) {
    return inBounds(x, y) ? board[indexOf(x, y)] : EMPTY;
  }
  function opponent(color) {
    return color === BLACK ? WHITE : BLACK;
  }
  function isEmptyBoard(board) {
    for (let i = 0; i < board.length; i++) {
      if (board[i] !== EMPTY) return false;
    }
    return true;
  }
  function isFull(board) {
    for (let i = 0; i < board.length; i++) {
      if (board[i] === EMPTY) return false;
    }
    return true;
  }
  function coordLabel(x, y) {
    if (!inBounds(x, y)) return "?";
    return COLUMN_LABELS[x] + (y + 1);
  }
  function checkWin(board, x, y) {
    const color = stoneAt(board, x, y);
    if (!color) return null;
    for (let d = 0; d < DIRECTIONS.length; d++) {
      const dx = DIRECTIONS[d][0];
      const dy = DIRECTIONS[d][1];
      const line = [indexOf(x, y)];
      for (let sign = 1; sign >= -1; sign -= 2) {
        let cx = x + dx * sign;
        let cy = y + dy * sign;
        while (inBounds(cx, cy) && stoneAt(board, cx, cy) === color) {
          if (sign === 1) line.push(indexOf(cx, cy));
          else line.unshift(indexOf(cx, cy));
          cx += dx * sign;
          cy += dy * sign;
        }
      }
      if (line.length >= 5) return { color, line };
    }
    return null;
  }
  function hasStoneNear(board, x, y, radius) {
    for (let dy = -radius; dy <= radius; dy++) {
      for (let dx = -radius; dx <= radius; dx++) {
        if (!dx && !dy) continue;
        if (stoneAt(board, x + dx, y + dy) !== EMPTY) return true;
      }
    }
    return false;
  }
  function candidates(board, radius) {
    const reach = radius || 2;
    const list = [];
    for (let y = 0; y < SIZE; y++) {
      for (let x = 0; x < SIZE; x++) {
        if (board[indexOf(x, y)] !== EMPTY) continue;
        if (hasStoneNear(board, x, y, reach)) list.push({ x, y });
      }
    }
    return list;
  }
  function boardFromMoves(moves) {
    const board = createBoard();
    (moves || []).forEach(function(move) {
      if (inBounds(move.x, move.y)) board[indexOf(move.x, move.y)] = move.color;
    });
    return board;
  }

  // src/ui/board.js
  var NS = "http://www.w3.org/2000/svg";
  var PAD = 0.8;
  var BOARD = SIZE - 1;
  var STAR_POINTS = [[3, 3], [11, 3], [3, 11], [11, 11], [7, 7]];
  function s(tag, attrs) {
    const el = document.createElementNS(NS, tag);
    if (attrs) {
      Object.keys(attrs).forEach(function(key) {
        el.setAttribute(key, attrs[key]);
      });
    }
    return el;
  }
  function createBoardView(options) {
    const opts = options || {};
    const svg = s("svg", {
      class: "gmk-board" + (opts.mini ? " gmk-board--mini" : ""),
      viewBox: -PAD + " " + -PAD + " " + (BOARD + PAD * 2) + " " + (BOARD + PAD * 2),
      preserveAspectRatio: "xMidYMid meet",
      role: opts.mini ? "img" : "grid"
    });
    const gridGroup = s("g", { class: "gmk-board__grid" });
    const stoneGroup = s("g", { class: "gmk-board__stones" });
    const markGroup = s("g", { class: "gmk-board__marks" });
    const ghost = s("circle", { class: "gmk-ghost", r: 0.42, opacity: 0 });
    svg.appendChild(gridGroup);
    svg.appendChild(markGroup);
    svg.appendChild(stoneGroup);
    svg.appendChild(ghost);
    if (!opts.mini) buildGrid(gridGroup);
    let state = { game: null, interactive: false };
    let cachedRect = null;
    function pointFromEvent(event) {
      const rect = cachedRect || svg.getBoundingClientRect();
      if (!rect.width) return null;
      const unit = rect.width / (BOARD + PAD * 2);
      const vx = (event.clientX - rect.left) / unit - PAD;
      const vy = (event.clientY - rect.top) / unit - PAD;
      const x = Math.round(vx);
      const y = Math.round(vy);
      if (!inBounds(x, y)) return null;
      if (Math.abs(vx - x) > 0.5 || Math.abs(vy - y) > 0.5) return null;
      return { x, y };
    }
    function hasStoneAt(x, y) {
      const game = state.game;
      if (!game) return false;
      return (game.moves || []).some(function(move) {
        return move.x === x && move.y === y;
      });
    }
    function onPointerMove(event) {
      if (!state.interactive || !state.game) return;
      const point = pointFromEvent(event);
      if (!point || hasStoneAt(point.x, point.y)) {
        ghost.setAttribute("opacity", "0");
        return;
      }
      ghost.setAttribute("cx", point.x);
      ghost.setAttribute("cy", point.y);
      ghost.setAttribute("opacity", "0.35");
    }
    function onPointerLeave() {
      ghost.setAttribute("opacity", "0");
    }
    function onPointerDown(event) {
      if (!state.interactive || !state.game || typeof opts.onPlay !== "function") return;
      cachedRect = svg.getBoundingClientRect();
      const point = pointFromEvent(event);
      if (!point || hasStoneAt(point.x, point.y)) return;
      ghost.setAttribute("opacity", "0");
      opts.onPlay(point.x, point.y);
    }
    if (!opts.mini) {
      svg.addEventListener("pointermove", onPointerMove);
      svg.addEventListener("pointerleave", onPointerLeave);
      svg.addEventListener("pointerdown", onPointerDown);
    }
    function render2(game, renderOptions) {
      const renderOpts = renderOptions || {};
      state.game = game;
      state.interactive = !!renderOpts.interactive;
      cachedRect = null;
      while (stoneGroup.firstChild) stoneGroup.removeChild(stoneGroup.firstChild);
      while (markGroup.firstChild) markGroup.removeChild(markGroup.firstChild);
      const moves = game && game.moves || [];
      moves.forEach(function(move) {
        const color = move.color === WHITE ? "white" : "black";
        stoneGroup.appendChild(s("circle", {
          cx: move.x,
          cy: move.y,
          r: 0.44,
          class: "gmk-stone gmk-stone--" + color
        }));
      });
      if (moves.length) {
        const last = moves[moves.length - 1];
        markGroup.appendChild(s("circle", {
          cx: last.x,
          cy: last.y,
          r: 0.11,
          class: "gmk-last gmk-last--" + (last.color === WHITE ? "white" : "black")
        }));
      }
      if (game && game.winLine && game.winLine.length >= 2) {
        const first = game.winLine[0];
        const lastIdx = game.winLine[game.winLine.length - 1];
        markGroup.appendChild(s("line", {
          x1: first % SIZE,
          y1: Math.floor(first / SIZE),
          x2: lastIdx % SIZE,
          y2: Math.floor(lastIdx / SIZE),
          class: "gmk-win-line"
        }));
      }
      if (!state.interactive) ghost.setAttribute("opacity", "0");
      else if (game) ghost.setAttribute("class", "gmk-ghost gmk-ghost--" + (game.userColor === WHITE ? "white" : "black"));
      svg.classList.toggle("is-interactive", state.interactive);
    }
    function destroy() {
      svg.removeEventListener("pointermove", onPointerMove);
      svg.removeEventListener("pointerleave", onPointerLeave);
      svg.removeEventListener("pointerdown", onPointerDown);
      while (svg.firstChild) svg.removeChild(svg.firstChild);
    }
    return { el: svg, render: render2, destroy };
  }
  function buildGrid(group) {
    for (let i = 0; i < SIZE; i++) {
      group.appendChild(s("line", { x1: 0, y1: i, x2: BOARD, y2: i, class: "gmk-grid-line" }));
      group.appendChild(s("line", { x1: i, y1: 0, x2: i, y2: BOARD, class: "gmk-grid-line" }));
    }
    STAR_POINTS.forEach(function(point) {
      group.appendChild(s("circle", { cx: point[0], cy: point[1], r: 0.11, class: "gmk-star" }));
    });
    group.appendChild(s("rect", { x: -0.5, y: -0.5, width: BOARD + 1, height: BOARD + 1, class: "gmk-grid-frame" }));
  }
  function gameFromSnapshot(data) {
    const userColor = data && data.userColor === WHITE ? WHITE : BLACK;
    return {
      moves: data && data.moves || [],
      winLine: data && data.winLine || null,
      userColor
    };
  }

  // src/core/engine.js
  var LEVELS = ["gentle", "normal", "hard"];
  var LEVEL_LABELS = {
    gentle: "温柔",
    normal: "认真",
    hard: "不放水"
  };
  var FIVE = 1e6;
  function shapeValue(count, open) {
    if (count >= 5) return FIVE;
    if (count === 4) return open >= 2 ? 12e4 : open === 1 ? 2e4 : 0;
    if (count === 3) return open >= 2 ? 12e3 : open === 1 ? 1200 : 0;
    if (count === 2) return open >= 2 ? 600 : open === 1 ? 80 : 0;
    return open >= 2 ? 22 : open === 1 ? 6 : 0;
  }
  function pointScore(board, x, y, color) {
    if (!inBounds(x, y)) return 0;
    let total = 0;
    for (let d = 0; d < 4; d++) {
      const dx = d === 0 ? 1 : d === 1 ? 0 : 1;
      const dy = d === 0 ? 0 : d === 1 ? 1 : d === 2 ? 1 : -1;
      let count = 1;
      let open = 0;
      let step = 1;
      while (inBounds(x + dx * step, y + dy * step) && stoneAt(board, x + dx * step, y + dy * step) === color) {
        count += 1;
        step += 1;
      }
      if (inBounds(x + dx * step, y + dy * step) && stoneAt(board, x + dx * step, y + dy * step) === EMPTY) open += 1;
      step = 1;
      while (inBounds(x - dx * step, y - dy * step) && stoneAt(board, x - dx * step, y - dy * step) === color) {
        count += 1;
        step += 1;
      }
      if (inBounds(x - dx * step, y - dy * step) && stoneAt(board, x - dx * step, y - dy * step) === EMPTY) open += 1;
      total += shapeValue(count, open);
    }
    total += Math.max(0, 8 - (Math.abs(x - 7) + Math.abs(y - 7)));
    return total;
  }
  var DEFENSE_WEIGHT = { gentle: 0.55, normal: 0.9, hard: 1 };
  function centerDistance(cell) {
    return Math.abs(cell.x - 7) + Math.abs(cell.y - 7);
  }
  function bestReply(board, color) {
    const list = candidates(board, 2);
    let best = 0;
    for (let i = 0; i < list.length; i++) {
      const score = pointScore(board, list[i].x, list[i].y, color);
      if (score > best) best = score;
    }
    return best;
  }
  function chooseMove(options) {
    const opts = options || {};
    const board = opts.board;
    const color = opts.color === WHITE ? WHITE : BLACK;
    const level = LEVELS.indexOf(opts.level) >= 0 ? opts.level : "normal";
    const random = typeof opts.random === "function" ? opts.random : Math.random;
    if (!board || board.length !== SIZE * SIZE) return null;
    if (isEmptyBoard(board)) return { x: 7, y: 7 };
    const enemy = opponent(color);
    const cells = candidates(board, 2);
    if (!cells.length) return null;
    const defenseWeight = DEFENSE_WEIGHT[level];
    const scored = cells.map(function(cell) {
      const attack = pointScore(board, cell.x, cell.y, color);
      const defense = pointScore(board, cell.x, cell.y, enemy);
      return {
        x: cell.x,
        y: cell.y,
        attack,
        defense,
        value: attack + defense * defenseWeight
      };
    });
    scored.sort(function(a, b) {
      if (b.value !== a.value) return b.value - a.value;
      return centerDistance(a) - centerDistance(b);
    });
    for (let i = 0; i < scored.length; i++) {
      if (scored[i].attack >= FIVE) return { x: scored[i].x, y: scored[i].y };
    }
    for (let i = 0; i < scored.length; i++) {
      if (scored[i].defense >= FIVE) return { x: scored[i].x, y: scored[i].y };
    }
    if (level === "gentle") {
      if (random() < 0.3 && scored.length > 1) {
        const pool = scored.slice(1, Math.min(7, scored.length)).filter(function(cell) {
          return cell.value < FIVE;
        });
        if (pool.length) {
          const pick = pool[Math.floor(random() * pool.length) % pool.length];
          return { x: pick.x, y: pick.y };
        }
      }
      return { x: scored[0].x, y: scored[0].y };
    }
    if (level === "hard") {
      const top = scored.slice(0, 6);
      let best = null;
      for (let i = 0; i < top.length; i++) {
        const cell = top[i];
        const after = board.slice();
        after[indexOf(cell.x, cell.y)] = color;
        const reply = bestReply(after, enemy);
        const net = cell.attack + cell.defense * 0.6 - reply * 0.9;
        if (!best || net > best.net) best = { net, x: cell.x, y: cell.y };
      }
      if (best) return { x: best.x, y: best.y };
    }
    return { x: scored[0].x, y: scored[0].y };
  }

  // src/core/game.js
  var PLAYING = "playing";
  var USER_WIN = "userWin";
  var CHAR_WIN = "charWin";
  var DRAW = "draw";
  var MAX_UNDO = 3;
  function makeId(now) {
    return "g" + now.toString(36) + Math.random().toString(36).slice(2, 6);
  }
  function createGame(input) {
    const opts = input || {};
    const now = typeof opts.now === "number" ? opts.now : Date.now();
    return {
      id: opts.id || makeId(now),
      conversationId: String(opts.conversationId || ""),
      opponentId: String(opts.opponentId || ""),
      userColor: opts.userColor === WHITE ? WHITE : BLACK,
      level: LEVELS.indexOf(opts.level) >= 0 ? opts.level : "normal",
      board: createBoard(),
      moves: [],
      status: PLAYING,
      winner: 0,
      winLine: null,
      undoLeft: MAX_UNDO,
      cardMessageId: "",
      resultCardSent: false,
      statsCounted: false,
      startedAt: now,
      updatedAt: now
    };
  }
  function charColor(game) {
    return opponent(game.userColor);
  }
  function turnColor(game) {
    return game.moves.length % 2 === 0 ? BLACK : WHITE;
  }
  function isPlaying(game) {
    return !!game && game.status === PLAYING;
  }
  function isUserTurn(game) {
    return isPlaying(game) && turnColor(game) === game.userColor;
  }
  function lastMove(game) {
    return game.moves.length ? game.moves[game.moves.length - 1] : null;
  }
  function applyMove(game, x, y, now) {
    if (!isPlaying(game)) return { game, error: "not-playing" };
    if (!inBounds(x, y)) return { game, error: "out-of-bounds" };
    if (stoneAt(game.board, x, y) !== EMPTY) return { game, error: "occupied" };
    const stamp = typeof now === "number" ? now : Date.now();
    const color = turnColor(game);
    const board = game.board.slice();
    board[indexOf(x, y)] = color;
    const win = checkWin(board, x, y);
    const moves = game.moves.concat([{ x, y, color, at: stamp }]);
    let status = PLAYING;
    let winner = 0;
    let winLine = null;
    if (win) {
      winLine = win.line;
      winner = color;
      status = color === game.userColor ? USER_WIN : CHAR_WIN;
    } else if (isFull(board)) {
      status = DRAW;
    }
    return {
      game: Object.assign({}, game, {
        board,
        moves,
        status,
        winner,
        winLine,
        updatedAt: stamp
      }),
      error: null
    };
  }
  function undo(game, steps, now) {
    if (!isPlaying(game)) return { game, error: "not-playing" };
    if (!game.undoLeft) return { game, error: "no-undo" };
    if (!game.moves.length) return { game, error: "no-moves" };
    const count = Math.min(steps || 2, game.moves.length);
    const moves = game.moves.slice(0, game.moves.length - count);
    const stamp = typeof now === "number" ? now : Date.now();
    return {
      game: Object.assign({}, game, {
        board: boardFromMoves(moves),
        moves,
        status: PLAYING,
        winner: 0,
        winLine: null,
        undoLeft: game.undoLeft - 1,
        updatedAt: stamp
      }),
      error: null
    };
  }
  function resign(game, who, now) {
    if (!isPlaying(game)) return { game, error: "not-playing" };
    const stamp = typeof now === "number" ? now : Date.now();
    const userQuit = who === "user";
    return {
      game: Object.assign({}, game, {
        status: userQuit ? CHAR_WIN : USER_WIN,
        winner: userQuit ? charColor(game) : game.userColor,
        winLine: null,
        updatedAt: stamp
      }),
      error: null
    };
  }
  function agreeDraw(game, now) {
    if (!isPlaying(game)) return { game, error: "not-playing" };
    const stamp = typeof now === "number" ? now : Date.now();
    return {
      game: Object.assign({}, game, { status: DRAW, winner: 0, winLine: null, updatedAt: stamp }),
      error: null
    };
  }
  function outcomeOf(game) {
    if (game.status === USER_WIN) return "win";
    if (game.status === CHAR_WIN) return "lose";
    if (game.status === DRAW) return "draw";
    return "";
  }

  // src/core/summary.js
  function nameOf(options) {
    const opts = options || {};
    return opts.opponentName || "对方";
  }
  function userOf(options) {
    const opts = options || {};
    return opts.userName || "你";
  }
  function statusText(game, options) {
    if (!game) return "";
    const total = game.moves.length;
    if (game.status === PLAYING) {
      const turn = isUserTurn(game) ? "轮到你" : "轮到" + nameOf(options);
      return "第 " + total + " 手 · " + turn;
    }
    if (game.status === USER_WIN) return "第 " + total + " 手 · " + userOf(options) + "赢了";
    if (game.status === CHAR_WIN) return "第 " + total + " 手 · " + nameOf(options) + "赢了";
    return "第 " + total + " 手 · 和棋";
  }
  function resultText(game, options) {
    if (!game || game.status === PLAYING) return "";
    if (game.status === USER_WIN) return "你的五连成了";
    if (game.status === CHAR_WIN) return nameOf(options) + "连成五子";
    return "棋盘满了，和棋";
  }
  function contextLine(game, options) {
    if (!game) return null;
    const opts = options || {};
    const total = game.moves.length;
    const name = nameOf(opts);
    if (game.status === PLAYING) {
      const turn = isUserTurn(game) ? "现在轮到你下" : "现在轮到" + name + "下";
      const recent = game.moves.length ? "最近三手：" + game.moves.slice(-3).map(function(move) {
        return (move.color === game.userColor ? "你" : name) + " " + coordLabel(move.x, move.y);
      }).join("、") + "。" : "还没落子。";
      return "【五子棋】你与" + name + "在聊天弹框里对弈，共 " + total + " 手，" + turn + "。" + recent;
    }
    const result = game.status === USER_WIN ? "你赢了" : game.status === CHAR_WIN ? name + "赢了" : "和棋";
    const last = lastMove(game);
    const tail = last ? "最后一手在 " + coordLabel(last.x, last.y) + "。" : "";
    return "【五子棋】你与" + name + "刚下完一盘，共 " + total + " 手，" + result + "。" + tail;
  }
  function cardModelText(game, options) {
    if (!game) return "";
    const opts = options || {};
    const name = nameOf(opts);
    const me = userOf(opts);
    const total = game.moves.length;
    const myColor = game.userColor === BLACK ? "黑" : "白";
    if (game.status === PLAYING) {
      return me + "和" + name + "开始下五子棋，" + me + "执" + myColor + "，已下 " + total + " 手。";
    }
    const last = lastMove(game);
    const where = last ? coordLabel(last.x, last.y) : "";
    if (game.status === USER_WIN) {
      return me + "和" + name + "下完一盘五子棋，共 " + total + " 手，" + me + "执" + myColor + "，" + me + "赢了（" + where + " 五连）。";
    }
    if (game.status === CHAR_WIN) {
      return me + "和" + name + "下完一盘五子棋，共 " + total + " 手，" + me + "执" + myColor + "，" + name + "赢了（" + where + " 五连）。";
    }
    return me + "和" + name + "下完一盘五子棋，共 " + total + " 手，棋盘下满，和棋。";
  }
  function cardTitle(game, options) {
    if (!game) return "五子棋";
    if (game.status === PLAYING) return "对局中 · 第 " + game.moves.length + " 手";
    if (game.status === USER_WIN) return "你赢了";
    if (game.status === CHAR_WIN) return nameOf(options) + "赢了";
    return "和棋";
  }
  function cardSnapshot(game, options) {
    const opts = options || {};
    return {
      gameId: game.id,
      status: game.status,
      moves: game.moves.map(function(move) {
        return { x: move.x, y: move.y, color: move.color };
      }),
      winLine: game.winLine || null,
      userColor: game.userColor,
      level: game.level,
      opponentId: game.opponentId,
      opponentName: nameOf(opts),
      opponentAvatar: opts.opponentAvatar || "",
      title: cardTitle(game, opts),
      updatedAt: game.updatedAt
    };
  }
  function safeMoves(data) {
    const moves = data && data.moves || [];
    if (!Array.isArray(moves)) return [];
    return moves.filter(function(move) {
      return move && typeof move.x === "number" && typeof move.y === "number" && (move.color === 1 || move.color === 2) && move.x >= 0 && move.x < 15 && move.y >= 0 && move.y < 15 && move.color !== EMPTY;
    });
  }

  // src/ui/gameview.js
  var MOVE_MIN = 380;
  var MOVE_JITTER = 340;
  function btn(label, iconName, onClick, disabled) {
    return h("button", {
      type: "button",
      class: "gmk-btn",
      disabled: !!disabled,
      onclick: onClick
    }, [
      h("span", { html: icon(iconName) }),
      h("span", { text: label })
    ]);
  }
  function createGameView(options) {
    const opts = options || {};
    const host = opts.host;
    const names = opts.names || {};
    let game = opts.game;
    let thinking = false;
    let timer = null;
    let destroyed = false;
    let talking = false;
    const board = createBoardView({ onPlay: handlePlay });
    const statusEl = h("div", { class: "gmk-status" });
    const resultEl = h("div", { class: "gmk-result" });
    const actionsEl = h("div", { class: "gmk-actions" });
    const saysEl = h("div", { class: "gmk-says" });
    const input = h("input", {
      class: "gmk-input",
      type: "text",
      maxlength: "60",
      placeholder: "对他说点什么（只在你发送时才会打扰他）"
    });
    const sendBtn = h("button", {
      type: "button",
      class: "gmk-btn gmk-btn--primary",
      text: "说",
      onclick: sendTalk
    });
    const talkEl = h("div", { class: "gmk-talk" }, [
      saysEl,
      h("div", { class: "gmk-talk__row" }, [input, sendBtn]),
      h("div", { class: "gmk-hint", text: "落子不会打扰他；只有你在这里说话、或回主聊天里说，他才会回应。" })
    ]);
    if (!host || !host.caps.ai) talkEl.style.display = "none";
    const el = h("div", { class: "gmk-game" }, [
      h("div", { class: "gmk-board-wrap" }, [board.el]),
      statusEl,
      resultEl,
      actionsEl,
      talkEl
    ]);
    input.addEventListener("keydown", function(event) {
      if (event.key === "Enter") {
        event.preventDefault();
        sendTalk();
      }
    });
    function undoSteps() {
      let target = game.moves.length - 1;
      while (target > 0 && (target % 2 === 0 ? BLACK : WHITE) !== game.userColor) target -= 1;
      return game.moves.length - target;
    }
    function canUndo() {
      return isPlaying(game) && game.undoLeft > 0 && game.moves.length > 0 && undoSteps() > 0;
    }
    function renderActions() {
      clear(actionsEl);
      if (isPlaying(game)) {
        actionsEl.appendChild(btn("悔棋", "undo", doUndo, !canUndo()));
        actionsEl.appendChild(btn("认输", "flag", doResign));
        actionsEl.appendChild(btn("和棋", "handshake", doDraw));
      } else {
        actionsEl.appendChild(btn("再来一局", "refresh", function() {
          if (typeof opts.onRestart === "function") opts.onRestart();
        }));
      }
    }
    function render2() {
      const interactive = isUserTurn(game) && !thinking && !talking;
      board.render(game, { interactive });
      statusEl.textContent = statusText(game, names) + (thinking ? " · 正在想…" : "");
      resultEl.style.display = isPlaying(game) ? "none" : "";
      resultEl.textContent = isPlaying(game) ? "" : resultText(game, names);
      renderActions();
    }
    function setGame(next) {
      game = next;
      thinking = false;
      render2();
      if (typeof opts.onChange === "function") opts.onChange(game);
      if (!destroyed && isPlaying(game) && turnColor(game) === charColor(game)) scheduleCharMove();
    }
    function scheduleCharMove() {
      if (timer) clearTimeout(timer);
      thinking = true;
      render2();
      const delay = MOVE_MIN + Math.round(Math.random() * MOVE_JITTER);
      timer = setTimeout(function() {
        timer = null;
        runCharMove();
      }, delay);
    }
    function runCharMove() {
      if (destroyed || !isPlaying(game)) return;
      const move = chooseMove({ board: game.board, color: charColor(game), level: game.level });
      thinking = false;
      if (!move) {
        const drawn = agreeDraw(game, Date.now());
        setGame(drawn.game);
        return;
      }
      const result = applyMove(game, move.x, move.y, Date.now());
      if (result.error) {
        render2();
        return;
      }
      setGame(result.game);
    }
    function handlePlay(x, y) {
      if (!isUserTurn(game) || thinking || talking) return;
      const result = applyMove(game, x, y, Date.now());
      if (result.error) return;
      setGame(result.game);
    }
    function doUndo() {
      if (!canUndo()) return;
      if (timer) {
        clearTimeout(timer);
        timer = null;
      }
      const result = undo(game, undoSteps(), Date.now());
      if (result.error) {
        render2();
        return;
      }
      setGame(result.game);
    }
    function doResign() {
      if (!isPlaying(game)) return;
      const result = resign(game, "user", Date.now());
      if (result.error) return;
      setGame(result.game);
    }
    function doDraw() {
      if (!isPlaying(game)) return;
      const result = agreeDraw(game, Date.now());
      if (result.error) return;
      setGame(result.game);
    }
    function pushSay(role, text) {
      const node = h("div", {
        class: "gmk-say " + (role === "me" ? "gmk-say--me" : "gmk-say--char"),
        text
      });
      saysEl.appendChild(node);
      while (saysEl.children.length > 6) saysEl.removeChild(saysEl.firstChild);
      saysEl.scrollTop = saysEl.scrollHeight;
    }
    function buildMessages(text) {
      const opponent2 = opts.opponent || {};
      const opponentName = opponent2.handle || opponent2.name || names.opponentName || "对方";
      const personaText = String(opponent2.persona || opponent2.bio || "").slice(0, 1200);
      const line = contextLine(game, names) || "";
      const system = [
        "你是" + opponentName + "。",
        personaText ? "角色设定（照这个人的语气说话，不要跳出来解释设定）：\n" + personaText : "",
        line,
        "你正和" + (names.userName || "对方") + "一边下五子棋一边聊天。",
        "用一到两句话回应，40 字以内，可以有情绪、可以嘴上不服，但不要写旁白、不要报坐标列表、不要提“作为AI”。"
      ].filter(Boolean).join("\n");
      return [
        { role: "system", content: system },
        { role: "user", content: text }
      ];
    }
    async function sendTalk() {
      const text = input.value.trim();
      if (!text || talking) return;
      if (!host || !host.caps.ai) {
        host && host.toast("当前宿主没有可用的 AI 接口");
        return;
      }
      talking = true;
      input.value = "";
      pushSay("me", text);
      render2();
      const reply = await host.aiChat(buildMessages(text), { temperature: 0.9, timeout: 12e3 });
      talking = false;
      if (destroyed) return;
      if (reply.ok) pushSay("char", reply.text);
      else host.toast("他这次没接上话");
      render2();
    }
    render2();
    if (isPlaying(game) && turnColor(game) === charColor(game)) scheduleCharMove();
    return {
      el,
      getGame: function() {
        return game;
      },
      destroy: function() {
        destroyed = true;
        if (timer) clearTimeout(timer);
        timer = null;
        board.destroy();
      }
    };
  }

  // src/services/store.js
  var KEY_GAMES = "gmk:games";
  var KEY_STATS = "gmk:stats";
  var KEY_SETTINGS = "gmk:settings";
  var DEFAULT_SETTINGS = {
    level: "normal",
    allowTalk: true
  };
  var cache = /* @__PURE__ */ new Map();
  function getCachedGame(conversationId) {
    if (!conversationId) return null;
    return cache.get(String(conversationId)) || null;
  }
  function primeCache(games) {
    cache.clear();
    const map = games || {};
    Object.keys(map).forEach(function(key) {
      if (map[key]) cache.set(String(key), map[key]);
    });
  }
  async function loadGames(host) {
    const map = await host.storageGet(KEY_GAMES, {});
    const games = map && typeof map === "object" ? map : {};
    primeCache(games);
    return games;
  }
  async function loadGame(host, conversationId) {
    const id = String(conversationId || "");
    if (!id) return null;
    if (cache.has(id)) return cache.get(id);
    const games = await loadGames(host);
    return games[id] || null;
  }
  async function saveGame(host, game) {
    if (!game || !game.conversationId) return false;
    const id = String(game.conversationId);
    const games = await loadGames(host);
    games[id] = game;
    cache.set(id, game);
    await host.storageSet(KEY_GAMES, games);
    return true;
  }
  async function loadStats(host) {
    const map = await host.storageGet(KEY_STATS, {});
    const stats = map && typeof map === "object" ? map : {};
    return {
      win: Number(stats.win) || 0,
      lose: Number(stats.lose) || 0,
      draw: Number(stats.draw) || 0,
      played: Number(stats.played) || 0
    };
  }
  async function bumpStats(host, outcome) {
    const stats = await loadStats(host);
    if (outcome === "win") stats.win += 1;
    else if (outcome === "lose") stats.lose += 1;
    else if (outcome === "draw") stats.draw += 1;
    else return stats;
    stats.played += 1;
    await host.storageSet(KEY_STATS, stats);
    return stats;
  }
  async function loadSettings(host) {
    const saved = await host.storageGet(KEY_SETTINGS, {});
    const value = saved && typeof saved === "object" ? saved : {};
    return {
      level: ["gentle", "normal", "hard"].indexOf(value.level) >= 0 ? value.level : DEFAULT_SETTINGS.level,
      allowTalk: value.allowTalk !== false
    };
  }
  async function saveSettings(host, settings) {
    const next = {
      level: ["gentle", "normal", "hard"].indexOf(settings.level) >= 0 ? settings.level : DEFAULT_SETTINGS.level,
      allowTalk: settings.allowTalk !== false
    };
    await host.storageSet(KEY_SETTINGS, next);
    return next;
  }

  // src/ui/modal.js
  var MESSAGE_TYPE = "gomoku-card";
  var activeModal = null;
  function extractMessageId(result) {
    if (!result) return "";
    if (typeof result === "string") return result;
    if (result.id) return String(result.id);
    if (result.messageId) return String(result.messageId);
    if (result.message && result.message.id) return String(result.message.id);
    if (result.data && result.data.id) return String(result.data.id);
    return "";
  }
  function opponentLabel(opponent2) {
    return opponent2 && (opponent2.handle || opponent2.name) || "对手";
  }
  async function openGameModal(options) {
    const opts = options || {};
    const host = opts.host;
    if (!host) return null;
    if (activeModal) activeModal.close();
    ensureStyle();
    const conversationId = String(opts.conversationId || "");
    const conversation = opts.conversation || {};
    const settings = await loadSettings(host);
    const overlay = h("div", { class: "gmk-modal" });
    const panel = h("div", { class: "gmk-modal__panel" });
    const headName = h("div", { class: "gmk-modal__name", text: "五子棋" });
    const headSub = h("div", { class: "gmk-modal__sub", text: "和角色来一盘" });
    const headAvatar = h("span", {});
    const head = h("div", { class: "gmk-modal__head" }, [
      headAvatar,
      h("div", { class: "gmk-modal__title" }, [headName, headSub]),
      iconButton("close", "关闭", function() {
        close();
      })
    ]);
    const body = h("div", { class: "gmk-modal__body" });
    panel.appendChild(head);
    panel.appendChild(body);
    overlay.appendChild(panel);
    document.body.appendChild(overlay);
    let view = null;
    let opponent2 = opts.opponent || null;
    let closed = false;
    function setHead(name, sub, avatar) {
      headName.textContent = name || "五子棋";
      headSub.textContent = sub || "";
      clear(headAvatar);
      headAvatar.appendChild(avatarNode(avatar, name));
    }
    function cardOptions() {
      return {
        opponentName: opponentLabel(opponent2),
        opponentAvatar: opponent2 && opponent2.avatar || "",
        userName: opts.userName || "你"
      };
    }
    async function ensureOpponent(opponentId) {
      const id = String(opponentId || "");
      if (!id) return null;
      const char = await host.characterGet(id);
      if (!char) return { id, name: conversation.name || "对手", handle: "", avatar: conversation.avatar || "", persona: "" };
      return {
        id: String(char.id || id),
        name: char.name || "",
        handle: char.handle || "",
        avatar: char.avatar || "",
        persona: char.persona || char.bio || "",
        bio: char.bio || ""
      };
    }
    function destroyView() {
      if (view) {
        view.destroy();
        view = null;
      }
    }
    async function syncCard(game) {
      if (!game || !conversationId) return;
      const finished = !isPlaying(game);
      const payload = {
        conversationId,
        messageId: game.cardMessageId,
        cardData: cardSnapshot(game, cardOptions()),
        modelText: cardModelText(game, cardOptions())
      };
      if (game.cardMessageId && host.caps.updateCard) {
        await host.updateCard(payload);
        return;
      }
      if (!finished || game.resultCardSent) return;
      const created = await host.createCard({
        conversationId,
        messageType: MESSAGE_TYPE,
        isMe: !opponent2 || !opponent2.id,
        senderId: opponent2 && opponent2.id ? opponent2.id : void 0,
        cardData: payload.cardData,
        modelText: payload.modelText
      });
      if (created) {
        await saveGame(host, Object.assign({}, game, { resultCardSent: true }));
      } else {
        await host.createCard({
          conversationId,
          messageType: MESSAGE_TYPE,
          isMe: true,
          cardData: payload.cardData,
          modelText: payload.modelText
        });
      }
    }
    async function onGameChange(game) {
      if (!game) return;
      await saveGame(host, game);
      await syncCard(game);
      if (!isPlaying(game) && !game.statsCounted) {
        const outcome = outcomeOf(game);
        const marked = Object.assign({}, game, { statsCounted: true });
        await saveGame(host, marked);
        if (outcome) await bumpStats(host, outcome);
      }
    }
    function showGame(game) {
      destroyView();
      clear(body);
      function headSubText(current) {
        return "棋力：" + (LEVEL_LABELS[current.level] || "认真") + " · " + statusText(current, cardOptions());
      }
      view = createGameView({
        host,
        game,
        opponent: opponent2 || {},
        names: cardOptions(),
        onChange: function(next) {
          headSub.textContent = headSubText(next);
          onGameChange(next);
        },
        onRestart: function() {
          showSetup(true);
        }
      });
      body.appendChild(view.el);
      setHead(opponentLabel(opponent2), headSubText(game), opponent2 && opponent2.avatar);
    }
    function showSetup(keepOpponent) {
      destroyView();
      clear(body);
      setHead(opponentLabel(opponent2), "选择对手和先后手", opponent2 && opponent2.avatar);
      const members = conversation.members || [];
      let opponentId = keepOpponent && opponent2 ? opponent2.id : conversation.contactId || members[0] && members[0].id || "";
      let level = settings.level;
      let userColor = BLACK;
      const opponentField = h("div", { class: "gmk-field" }, [
        h("div", { class: "gmk-field__label", text: "对手" })
      ]);
      if (members.length > 1) {
        const select = h("select", { class: "gmk-select" });
        members.forEach(function(member) {
          select.appendChild(h("option", {
            value: member.id,
            text: member.handle || member.name || member.id
          }));
        });
        if (opponentId) select.value = opponentId;
        select.addEventListener("change", function() {
          opponentId = select.value;
        });
        opponentField.appendChild(select);
      } else {
        opponentField.appendChild(h("div", { class: "gmk-hint", text: opponentLabel(opponent2) + "（当前会话里的角色）" }));
      }
      const levelChips = h("div", { class: "gmk-chips" });
      LEVELS.forEach(function(item) {
        const chip = h("button", {
          type: "button",
          class: "gmk-chip" + (item === level ? " is-active" : ""),
          text: LEVEL_LABELS[item],
          onclick: function() {
            level = item;
            Array.prototype.forEach.call(levelChips.children, function(node) {
              node.classList.toggle("is-active", node.textContent === LEVEL_LABELS[level]);
            });
          }
        });
        levelChips.appendChild(chip);
      });
      const colorChips = h("div", { class: "gmk-chips" });
      const colorOptions = [{ value: BLACK, label: "我执黑（先手）" }, { value: WHITE, label: "我执白（后手）" }];
      colorOptions.forEach(function(item) {
        const chip = h("button", {
          type: "button",
          class: "gmk-chip" + (item.value === userColor ? " is-active" : ""),
          text: item.label,
          onclick: function() {
            userColor = item.value;
            Array.prototype.forEach.call(colorChips.children, function(node) {
              node.classList.toggle("is-active", node.textContent === item.label);
            });
          }
        });
        colorChips.appendChild(chip);
      });
      const startBtn = h("button", {
        type: "button",
        class: "gmk-btn gmk-btn--primary",
        text: "开始对局",
        onclick: start
      });
      body.appendChild(h("div", { class: "gmk-setup" }, [
        opponentField,
        h("div", { class: "gmk-field" }, [
          h("div", { class: "gmk-field__label", text: "棋力" }),
          levelChips
        ]),
        h("div", { class: "gmk-field" }, [
          h("div", { class: "gmk-field__label", text: "先后手" }),
          colorChips
        ]),
        h("div", { class: "gmk-hint", text: "落子不会产生任何 AI 请求。想让他说话时，再在主聊天或下方输入框里说一句。" }),
        startBtn
      ]));
      async function start() {
        startBtn.disabled = true;
        opponent2 = await ensureOpponent(opponentId);
        if (!opponent2) {
          host.toast("找不到对手角色");
          startBtn.disabled = false;
          return;
        }
        const savedSettings = await saveSettings(host, { level, allowTalk: settings.allowTalk });
        settings.level = savedSettings.level;
        const game = createGame({
          conversationId,
          opponentId: opponent2.id,
          userColor,
          level,
          now: Date.now()
        });
        await saveGame(host, game);
        if (host.caps.chat) {
          const created = await host.createCard({
            conversationId,
            messageType: MESSAGE_TYPE,
            isMe: true,
            cardData: cardSnapshot(game, cardOptions()),
            modelText: cardModelText(game, cardOptions())
          });
          game.cardMessageId = extractMessageId(created);
          await saveGame(host, game);
        } else {
          host.toast("当前宿主不支持聊天卡片，棋局只在弹框里进行");
        }
        showGame(game);
      }
    }
    function close() {
      if (closed) return;
      closed = true;
      destroyView();
      document.removeEventListener("keydown", onKeydown);
      if (overlay.parentNode) overlay.parentNode.removeChild(overlay);
      activeModal = null;
      removeStyleIfUnused();
      if (typeof opts.onClose === "function") opts.onClose();
    }
    function onKeydown(event) {
      if (event.key === "Escape") close();
    }
    overlay.addEventListener("click", function(event) {
      if (event.target === overlay) close();
    });
    document.addEventListener("keydown", onKeydown);
    activeModal = { close, el: overlay };
    const existing = conversationId ? await loadGame(host, conversationId) : null;
    if (existing) {
      const fresh = await ensureOpponent(existing.opponentId);
      if (fresh) opponent2 = fresh;
      showGame(existing);
    } else {
      opponent2 = opponent2 || await ensureOpponent(conversation.contactId);
      if (!opponent2 && host.caps.characterList) {
        const list = await host.characterList();
        if (list.length) opponent2 = await ensureOpponent(list[0].id);
      }
      showSetup(false);
    }
    return { close, el: overlay };
  }
  function closeGameModal() {
    if (activeModal) activeModal.close();
  }

  // src/services/host.js
  var AI_TIMEOUT = 12e3;
  function safe(fn, fallback) {
    try {
      const value = fn();
      if (value && typeof value.then === "function") {
        return value.catch(function() {
          return fallback;
        });
      }
      return value;
    } catch (err) {
      return fallback;
    }
  }
  function withTimeout(promise, ms, label) {
    let timer = null;
    const timeout = new Promise(function(resolve) {
      timer = setTimeout(function() {
        resolve({ ok: false, reason: "timeout", label: label || "timeout" });
      }, ms);
    });
    return Promise.race([promise, timeout]).then(function(value) {
      clearTimeout(timer);
      return value;
    }, function(err) {
      clearTimeout(timer);
      return { ok: false, reason: "error", error: err };
    });
  }
  function createHost(roche) {
    const api = roche || {};
    const chatApi = api.chat || {};
    const uiApi = api.ui || {};
    const storageApi = api.storage || {};
    const caps = {
      storage: typeof storageApi.get === "function" && typeof storageApi.set === "function",
      ui: typeof uiApi.toast === "function",
      chat: typeof chatApi.createCard === "function",
      updateCard: typeof chatApi.updateCard === "function",
      dispatch: typeof chatApi.dispatchCardAction === "function",
      character: typeof (api.character || {}).get === "function",
      characterList: typeof (api.character || {}).list === "function",
      conversation: typeof (api.conversation || {}).get === "function",
      conversationList: typeof (api.conversation || {}).list === "function",
      persona: typeof (api.persona || {}).getUserPersonaForConversation === "function",
      ai: typeof (api.ai || {}).chat === "function",
      confirm: typeof uiApi.confirm === "function",
      closeApp: typeof uiApi.closeApp === "function"
    };
    return {
      raw: api,
      caps,
      async storageGet(key, fallback) {
        if (!caps.storage) return fallback;
        const value = await safe(function() {
          return storageApi.get(key);
        }, void 0);
        return value === void 0 || value === null ? fallback : value;
      },
      async storageSet(key, value) {
        if (!caps.storage) return false;
        const res = await safe(function() {
          return storageApi.set(key, value);
        }, false);
        return res !== false;
      },
      async storageDelete(key) {
        if (!caps.storage || typeof storageApi.delete !== "function") return false;
        await safe(function() {
          return storageApi.delete(key);
        }, false);
        return true;
      },
      toast(message) {
        if (caps.ui) safe(function() {
          return uiApi.toast(String(message));
        }, null);
      },
      async confirm(options) {
        if (!caps.confirm) return true;
        const value = await safe(function() {
          return uiApi.confirm(options);
        }, true);
        return !!value;
      },
      closeApp() {
        if (caps.closeApp) safe(function() {
          return uiApi.closeApp();
        }, null);
      },
      async characterGet(id) {
        if (!caps.character || !id) return null;
        return await safe(function() {
          return api.character.get(id);
        }, null);
      },
      async characterList() {
        if (!caps.characterList) return [];
        const list = await safe(function() {
          return api.character.list();
        }, []);
        return Array.isArray(list) ? list : [];
      },
      async conversationGet(id) {
        if (!caps.conversation || !id) return null;
        return await safe(function() {
          return api.conversation.get(id);
        }, null);
      },
      async conversationList(options) {
        if (!caps.conversationList) return [];
        const list = await safe(function() {
          return api.conversation.list(options);
        }, []);
        return Array.isArray(list) ? list : [];
      },
      async createCard(payload) {
        if (!caps.chat) return null;
        return await safe(function() {
          return chatApi.createCard(payload);
        }, null);
      },
      async updateCard(payload) {
        if (!caps.updateCard) return false;
        const res = await safe(function() {
          return chatApi.updateCard(payload);
        }, false);
        return res !== false;
      },
      async dispatchCardAction(payload) {
        if (!caps.dispatch) return false;
        const res = await safe(function() {
          return chatApi.dispatchCardAction(payload);
        }, false);
        return res !== false;
      },
      /** 返回 { ok:true, text } 或 { ok:false, reason }，永不抛错。 */
      async aiChat(messages, options) {
        if (!caps.ai) return { ok: false, reason: "no_ai" };
        const opts = options || {};
        const payload = {
          messages,
          temperature: typeof opts.temperature === "number" ? opts.temperature : 0.85
        };
        const call = safe(function() {
          return api.ai.chat(payload);
        }, null);
        const raced = await withTimeout(Promise.resolve(call), opts.timeout || AI_TIMEOUT, "ai");
        if (!raced || raced.ok === false) return { ok: false, reason: raced && raced.reason || "error" };
        const text = typeof raced === "string" ? raced : raced.text || "";
        if (!text) return { ok: false, reason: "empty" };
        return { ok: true, text: String(text).trim() };
      }
    };
  }
  function resolveConversation(conversation, fallbackCharacter) {
    const conv = conversation || {};
    const isGroup = !!(conv.isGroup || conv.type === "group");
    const members = Array.isArray(conv.memberProfiles) ? conv.memberProfiles : [];
    const contactId = conv.contactId || conv.contact && conv.contact.id || "";
    const fallbackId = fallbackCharacter && fallbackCharacter.id ? fallbackCharacter.id : "";
    return {
      id: String(conv.id || conv.conversationId || ""),
      isGroup,
      name: conv.name || conv.title || conv.handle || "",
      avatar: conv.avatar || "",
      contactId: String(contactId || fallbackId || ""),
      members: members.map(function(item) {
        return {
          id: String(item.id || ""),
          name: item.name || "",
          handle: item.handle || item.displayName || "",
          avatar: item.avatar || ""
        };
      }).filter(function(item) {
        return item.id;
      })
    };
  }

  // src/ui/app.js
  var liveHost = null;
  function statBlock(value, label) {
    return h("div", { class: "gmk-stat" }, [
      h("div", { class: "gmk-stat__num", text: String(value) }),
      h("div", { class: "gmk-stat__label", text: label })
    ]);
  }
  async function mountApp(container, roche) {
    ensureStyle();
    const host = createHost(roche);
    liveHost = host;
    const content = h("div", { class: "gmk-page-content" });
    const title = h("div", { class: "gmk-page-title", text: "五子棋" });
    const root = h("div", { class: "gmk-root" }, [
      h("div", { class: "gmk-page-header" }, [
        title,
        iconButton("close", "关闭", function() {
          host.closeApp();
        })
      ]),
      content
    ]);
    clear(container);
    container.appendChild(root);
    const settings = await loadSettings(host);
    const stats = await loadStats(host);
    const games = await loadGames(host);
    const rows = Object.keys(games).map(function(key) {
      return games[key];
    }).filter(Boolean).sort(function(a, b) {
      return (b.updatedAt || 0) - (a.updatedAt || 0);
    }).slice(0, 6);
    const listEl = h("div", { class: "gmk-list" });
    if (!rows.length) {
      listEl.appendChild(h("div", { class: "gmk-empty", text: "还没有对局。回到聊天，点输入框右边的 + 号选「五子棋」就能开一盘。" }));
    }
    for (let i = 0; i < rows.length; i++) {
      const game = rows[i];
      const char = await host.characterGet(game.opponentId);
      const name = char && (char.handle || char.name) || "对手";
      const avatar = char && char.avatar || "";
      const sub = isPlaying(game) ? "进行中 · " + statusText(game, { opponentName: name }) : "已结束 · " + statusText(game, { opponentName: name });
      listEl.appendChild(h("button", {
        type: "button",
        class: "gmk-row",
        onclick: function() {
          openGameModal({
            host,
            conversationId: game.conversationId,
            conversation: { id: game.conversationId, contactId: game.opponentId, members: [] },
            opponent: char ? {
              id: char.id || game.opponentId,
              name: char.name || "",
              handle: char.handle || "",
              avatar: char.avatar || "",
              persona: char.persona || char.bio || ""
            } : null
          });
        }
      }, [
        avatarNode(avatar, name),
        h("div", { class: "gmk-row__main" }, [
          h("div", { class: "gmk-row__name", text: name }),
          h("div", { class: "gmk-row__sub", text: sub })
        ]),
        h("span", { class: "gmk-row__chev", html: icon("back", 16) })
      ]));
    }
    const levelChips = h("div", { class: "gmk-chips" });
    LEVELS.forEach(function(level) {
      const chip = h("button", {
        type: "button",
        class: "gmk-chip" + (level === settings.level ? " is-active" : ""),
        text: LEVEL_LABELS[level],
        onclick: async function() {
          settings.level = level;
          Array.prototype.forEach.call(levelChips.children, function(node) {
            node.classList.toggle("is-active", node.textContent === LEVEL_LABELS[level]);
          });
          await saveSettings(host, settings);
          host.toast("默认棋力已改为" + LEVEL_LABELS[level]);
        }
      });
      levelChips.appendChild(chip);
    });
    content.appendChild(h("div", { class: "gmk-section" }, [
      h("div", { class: "gmk-section__title", text: "战绩" }),
      h("div", { class: "gmk-stats" }, [
        statBlock(stats.win, "胜"),
        statBlock(stats.lose, "负"),
        statBlock(stats.draw, "和")
      ])
    ]));
    content.appendChild(h("div", { class: "gmk-section" }, [
      h("div", { class: "gmk-section__title", text: "最近对局" }),
      listEl
    ]));
    content.appendChild(h("div", { class: "gmk-section" }, [
      h("div", { class: "gmk-section__title", text: "默认棋力" }),
      levelChips,
      h("div", { class: "gmk-hint", text: "只影响新开的对局。落子由本地引擎计算，不会产生 AI 请求；想让他说话，回主聊天或弹框里说一句。" })
    ]));
    return { host };
  }
  async function unmountApp(container) {
    liveHost = null;
    if (container) container.replaceChildren();
    removeStyleIfUnused();
  }

  // src/chat/card.js
  var views = /* @__PURE__ */ new WeakMap();
  function subText(data) {
    const level = data.level === "gentle" ? "温柔" : data.level === "hard" ? "不放水" : "认真";
    const base = data.status === PLAYING ? "棋力：" + level : "棋力：" + level + " · 已结束";
    return base;
  }
  function render(container, message) {
    const data = message.cardData || {};
    clear(container);
    if (views.has(container)) {
      try {
        views.get(container).destroy();
      } catch (err) {
      }
      views.delete(container);
    }
    const board = createBoardView({ mini: true });
    board.render(gameFromSnapshot({
      moves: safeMoves(data),
      winLine: data.winLine || null,
      userColor: data.userColor
    }), { interactive: false });
    views.set(container, board);
    const playing = data.status === PLAYING;
    const btn2 = h("button", {
      type: "button",
      class: "gmk-card__btn",
      text: playing ? "继续下" : "看结果",
      onclick: function() {
        const roche = container.__gmkRoche;
        if (roche && roche.chat && typeof roche.chat.dispatchCardAction === "function") {
          roche.chat.dispatchCardAction({
            conversationId: message.conversationId,
            messageId: message.id,
            action: "open",
            payload: { gameId: data.gameId || "" }
          });
          return;
        }
        const host = createHost(roche);
        ensureStyle();
        openGameModal({ host, conversationId: message.conversationId });
      }
    });
    container.appendChild(h("div", { class: "gmk-card" }, [
      board.el,
      h("div", { class: "gmk-card__main" }, [
        h("div", { class: "gmk-card__title", text: data.title || "五子棋" }),
        h("div", { class: "gmk-card__sub", text: (data.opponentName ? "与 " + data.opponentName + " · " : "") + subText(data) }),
        btn2
      ])
    ]));
  }
  function mountCard(container, message, roche) {
    container.__gmkRoche = roche;
    render(container, message);
  }
  function updateCard(container, message, roche) {
    container.__gmkRoche = roche;
    render(container, message);
  }
  function unmountCard(container) {
    if (container && views.has(container)) {
      try {
        views.get(container).destroy();
      } catch (err) {
      }
      views.delete(container);
    }
  }
  async function onCardAction(message, action, payload, roche) {
    if (action !== "open") return;
    const host = createHost(roche);
    ensureStyle();
    await openGameModal({ host, conversationId: message && message.conversationId });
  }
  async function openPlusAction(ctx, roche) {
    const host = createHost(roche);
    ensureStyle();
    const conversationId = String(ctx && ctx.conversationId || "");
    let conversation = null;
    if (host.caps.conversation && conversationId) {
      const detail = await host.conversationGet(conversationId);
      conversation = resolveConversation(detail || { id: conversationId }, null);
    }
    if (!conversation) {
      conversation = { id: conversationId, isGroup: false, name: "", avatar: "", contactId: "", members: [] };
    }
    await openGameModal({
      host,
      conversationId,
      conversation,
      userName: ctx && ctx.userPersona && (ctx.userPersona.name || ctx.userPersona.handle) || "你"
    });
  }

  // src/main.js
  var PLUS_ICON = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"><path d="M4 4h16v16H4z"/><path d="M9.3 4v16M14.6 4v16M4 9.3h16M4 14.6h16"/><circle cx="9.3" cy="9.3" r="1.5" fill="currentColor" stroke="none"/><circle cx="14.6" cy="14.6" r="1.5" fill="currentColor" stroke="none"/></svg>';
  var FRESH_WINDOW = 12 * 60 * 60 * 1e3;
  window.RochePlugin.register({
    id: "gomoku-companion",
    name: "五子棋",
    version: "0.1.0",
    description: "在聊天 + 面板里和角色下一盘五子棋，棋局会以卡片回到主聊天。",
    // 宿主如果支持 onLoad，就把已存对局预先读进内存，主聊天的 contextProvider 才有局面可读
    onLoad(roche) {
      try {
        loadGames(createHost(roche)).catch(function() {
        });
      } catch (err) {
      }
    },
    apps: [
      {
        id: "gomoku-home",
        name: "五子棋",
        icon: "grid",
        iconImage: "",
        mount: mountApp,
        unmount: unmountApp
      }
    ],
    chat: {
      scope: { conversationTypes: ["direct", "group"] },
      messageTypes: [
        {
          id: MESSAGE_TYPE,
          name: "五子棋",
          scope: { conversationTypes: ["direct", "group"] },
          mount: mountCard,
          update: updateCard,
          unmount: unmountCard,
          onAction: onCardAction
        }
      ],
      plusActions: [
        {
          id: "gmk-play",
          label: "五子棋",
          iconSvg: PLUS_ICON,
          scope: { conversationTypes: ["direct", "group"] },
          open: openPlusAction
        }
      ],
      /**
       * 只有存在对局时才注入一句局面事实，让主聊天自己带着人设去接话。
       * 插件不写任何长期人设提示词。
       */
      contextProvider(ctx) {
        try {
          const conversationId = ctx && ctx.conversationId;
          if (!conversationId) return null;
          const game = getCachedGame(conversationId);
          if (!game) return null;
          if (!isPlaying(game) && Date.now() - (game.updatedAt || 0) > FRESH_WINDOW) return null;
          const contact = ctx.contact || {};
          const opponentName = contact.handle || contact.name || "对方";
          const persona = ctx.userPersona || {};
          const userName = persona.name || persona.handle || "你";
          return contextLine(game, { opponentName, userName });
        } catch (err) {
          return null;
        }
      }
    }
  });
  function cleanup() {
    closeGameModal();
    removeOrphanModals();
    ensureStyle();
    removeStyleIfUnused();
  }
})();
