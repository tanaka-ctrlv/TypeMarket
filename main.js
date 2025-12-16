/*
  TESTERS
  - auto-grow textareas as one types (no tiny scrollbars)
*/

document.querySelectorAll(".tester").forEach((ta) => {
  const resize = () => {
    ta.style.height = "auto";
    ta.style.height = `${ta.scrollHeight}px`;
  };

  ta.addEventListener("input", resize);
  resize();
});
