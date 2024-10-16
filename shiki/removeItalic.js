export function removeItalic() {
  return {
    name: 'transformer-remove-italic',
    span(node) {
      if (node.properties.style) {
        node.properties.style = node.properties.style.replace(
          ';font-style:italic',
          ''
        );
      }
    }
  };
}
