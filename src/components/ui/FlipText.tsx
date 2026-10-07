/**
 * Replicates the template's flip-text-wrap hover effect. In the original,
 * main.js finds every ".flip-text-wrap .btn-text" on page load and rewrites
 * its innerHTML into this exact duplicated-span structure, which pure CSS
 * :hover (in the Buttons CSS section of chrome.css) then animates — no JS
 * drives the animation itself, only the initial DOM shape. React can just
 * render that shape directly, so no client-side effect is needed here.
 */
export default function FlipText({ children }: { children: string }) {
  return (
    <span className="btn-text">
      <span className="btn-text-inner">
        <span>{children}</span>
        <span>{children}</span>
      </span>
    </span>
  );
}
