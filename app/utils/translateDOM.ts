// Store for original text content
interface TextNodeInfo {
  node: Text;
  originalText: string;
  parentElement: Element;
}

let textNodesCache: TextNodeInfo[] = [];

/**
 * Collects all text nodes from the DOM for translation
 * Only collects actual text nodes, not entire elements
 */
export function collectTextNodes(): {
  nodes: TextNodeInfo[];
  texts: string[];
} {
  const nodes: TextNodeInfo[] = [];
  const texts: string[] = [];

  // Clear cache
  textNodesCache = [];

  // Elements to exclude
  const excludeSelectors = [
    "script",
    "style",
    "code",
    "pre",
    "noscript",
    "[data-no-translate]",
    ".translation-button",
    ".translation-panel",
  ];

  const walker = document.createTreeWalker(
    document.body,
    NodeFilter.SHOW_TEXT,
    {
      acceptNode: (node) => {
        const parent = node.parentElement;

        // Skip if no parent or parent is excluded
        if (!parent || excludeSelectors.some((sel) => parent.closest(sel))) {
          return NodeFilter.FILTER_REJECT;
        }

        // Skip if already translated
        if (parent.hasAttribute("data-translated")) {
          return NodeFilter.FILTER_REJECT;
        }

        // Only accept text nodes with meaningful content
        const text = node.textContent?.trim();
        if (text && text.length > 0) {
          return NodeFilter.FILTER_ACCEPT;
        }

        return NodeFilter.FILTER_REJECT;
      },
    }
  );

  const processedTexts = new Set<string>();

  while (walker.nextNode()) {
    const textNode = walker.currentNode as Text;
    const text = textNode.textContent?.trim();

    if (text && text.length > 0 && textNode.parentElement) {
      // Avoid duplicate translations of the same text
      const uniqueKey = `${text}_${textNode.parentElement.tagName}`;
      if (!processedTexts.has(uniqueKey)) {
        processedTexts.add(uniqueKey);

        const nodeInfo: TextNodeInfo = {
          node: textNode,
          originalText: textNode.textContent || "",
          parentElement: textNode.parentElement,
        };

        nodes.push(nodeInfo);
        texts.push(text);
        textNodesCache.push(nodeInfo);
      }
    }
  }

  return { nodes, texts };
}

/**
 * Apply translations to collected text nodes
 */
export function applyTranslations(
  nodes: TextNodeInfo[],
  translations: string[]
): void {
  nodes.forEach((nodeInfo, index) => {
    if (translations[index] && nodeInfo.node.isConnected) {
      try {
        // Only modify if the node is still in the DOM
        if (nodeInfo.node.parentElement) {
          // Safely update the text node content
          nodeInfo.node.textContent = translations[index];

          // Mark parent as translated
          nodeInfo.parentElement.setAttribute("data-translated", "true");
        }
      } catch (error) {
        // Silently skip nodes that can't be modified
        console.warn("Could not translate node:", error);
      }
    }
  });
}

/**
 * Reset all elements to their original text
 */
export function resetToOriginal(): void {
  textNodesCache.forEach((nodeInfo) => {
    try {
      // Only reset if the node is still connected to the DOM
      if (nodeInfo.node.isConnected && nodeInfo.node.parentElement) {
        nodeInfo.node.textContent = nodeInfo.originalText;
        nodeInfo.parentElement.removeAttribute("data-translated");
      }
    } catch (error) {
      // Silently skip nodes that can't be reset
      console.warn("Could not reset node:", error);
    }
  });

  // Clear the cache
  textNodesCache = [];
}

/**
 * Clear the original text cache
 */
export function clearCache(): void {
  textNodesCache = [];
}

/**
 * Check if page is currently translated
 */
export function isTranslated(): boolean {
  return document.querySelectorAll("[data-translated]").length > 0;
}
