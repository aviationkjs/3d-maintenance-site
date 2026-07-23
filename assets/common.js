export const CATEGORIES = ["CSL", "상부", "하부", "벌크", "헤드"];

// SHA-256 of the admin password. The password itself is never stored in this file.
const ADMIN_HASH = "7b4f6f46093c9812bff7745ec3bc0f70d49ad40f18ae3bba91f719f15c0571f7";

async function sha256Hex(text) {
  const buf = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(text));
  return Array.from(new Uint8Array(buf)).map((b) => b.toString(16).padStart(2, "0")).join("");
}

export function isAdmin() {
  return sessionStorage.getItem("adminUnlocked") === "1";
}

export async function tryUnlockAdmin(password) {
  const hash = await sha256Hex(password);
  if (hash === ADMIN_HASH) {
    sessionStorage.setItem("adminUnlocked", "1");
    return true;
  }
  return false;
}

export function lockAdmin() {
  sessionStorage.removeItem("adminUnlocked");
}

export function renderItemCard(id, item) {
  return `
    <a class="item-card" href="detail.html?id=${encodeURIComponent(id)}">
      <div class="thumb">${item.glbUrl ? "3D 모델 보기" : "모델 없음"}</div>
      <p class="name">${escapeHtml(item.name || "이름 없음")}</p>
      <p class="cat">${escapeHtml(item.category || "미분류")}</p>
    </a>`;
}

export function escapeHtml(str) {
  return String(str).replace(/[&<>"']/g, (c) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
  }[c]));
}
