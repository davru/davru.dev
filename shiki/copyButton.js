import { h, s } from 'hastscript';

export function copyButtonTransformer(options = {}) {
  const toggleMs = options.toggle || 2000;

  return {
    name: 'transformer-copy-button',
    pre(node) {
      const button = h(
        'button',
        {
          class: 'copy',
          'data-code': this.source,
          onclick: `
          navigator.clipboard.writeText(this.dataset.code);
          this.classList.add('copied');
          setTimeout(() => this.classList.remove('copied'), ${toggleMs})
        `
        },
        [
          s(
            'svg',
            {
              class: 'copy-default',
              width: '24',
              height: '24',
              viewBox: '0 0 24 24',
              fill: 'none',
              stroke: 'currentColor',
              'stroke-width': '2',
              'stroke-linecap': 'round',
              'stroke-linejoin': 'round'
            },
            [
              s('path', {
                d: 'M9 5h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2h-2'
              }),
              s('path', {
                d: 'M9 3m0 2a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v0a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2z'
              })
            ]
          ),
          s(
            'svg',
            {
              class: 'copy-success',
              width: '24',
              height: '24',
              viewBox: '0 0 24 24',
              fill: 'none',
              stroke: 'currentColor',
              'stroke-width': '2',
              'stroke-linecap': 'round',
              'stroke-linejoin': 'round'
            },
            [
              s('path', {
                d: 'M9 5h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2h-2'
              }),
              s('path', {
                d: 'M9 3m0 2a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v0a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2z'
              }),
              s('path', {
                stroke: '#50FA7B',
                d: 'M9 14l2 2l4 -4'
              })
            ]
          )
        ]
      );

      node.children.push(button);
    }
  };
}
