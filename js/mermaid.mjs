import mermaid from 'https://cdn.jsdelivr.net/npm/mermaid@11/dist/mermaid.esm.min.mjs';
mermaid.initialize({ startOnLoad: false });

/**
 * Use this function in the `postProcess` option of your Respec config.
 * Example:
 *
 * ```js
 * postProcess: [generateMermaidFigures],
 * ```
 *
 * It processes all elements with `class="mermaid"` and generate figures.
 * It can use the textContent of the elements itself (in the case of a
 * code block). It can also retrieve external files; set
 * `data-figure-name="figure-name.mermaid"`, where (relative to the
 * `index.html`) a file exists `./media/figure-name.mermaid`.
 *
 * In case the external file can't be found, an error will be shown in
 * the console.
 */
export async function generateMermaidFigures(config, document, utils) {
  const mermaidFigures = document.querySelectorAll('.mermaid');
  const generatedFigures = [];
  for (const figure of mermaidFigures) {
    const figureName = figure.dataset.figureName;
    if (figureName) {
      try {
        const fetchSource = await fetch(`./media/${figureName}`);
        const divElement = document.createElement('div');
        divElement.prepend(document.createTextNode(await fetchSource.text()));
        figure.replaceWith(divElement);
        generatedFigures.push(divElement);
      } catch (e) {
        utils.showError('Unable to generate Mermaid figure', {
          elements: [figure],
          cause: e,
        });
        return;
      }
    } else {
      generatedFigures.push(figure);
    }
  }
  if (generatedFigures.length == 0) {
    return;
  }
  await mermaid.run({
    nodes: generatedFigures,
  });
}
