(() => {
  const url = new URL(window.location.href);
  const code = (url.searchParams.get("code") || "").trim().toUpperCase();
  const privateFragment = new URLSearchParams(url.hash.replace(/^#/, ""));
  const hasPrivateKey = Boolean(privateFragment.get("key"));

  const codeElement = document.getElementById("invite-code");
  const copyButton = document.getElementById("copy-code");
  const missingCode = document.getElementById("missing-code");
  const keyConfirmation = document.getElementById("key-confirmation");

  codeElement.textContent = code || "No code found";
  copyButton.hidden = !code;
  missingCode.hidden = Boolean(code);
  keyConfirmation.hidden = !hasPrivateKey;

  copyButton.addEventListener("click", async () => {
    if (!code) return;
    try {
      await navigator.clipboard.writeText(code);
      copyButton.textContent = "Copied";
    } catch {
      const selection = window.getSelection();
      const range = document.createRange();
      range.selectNodeContents(codeElement);
      selection.removeAllRanges();
      selection.addRange(range);
      copyButton.textContent = "Code selected";
    }
  });
})();
