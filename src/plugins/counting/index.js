const visit = require('unist-util-visit');

const plugin = () => {
  let number = 0;
  const transformer = async (ast) => {
    visit(ast, 'text', (node) => {
      const { value } = node;
      const replaced = value.replace(/\\n/g, '');
      number += replaced.length;
      if (node.value.includes('编辑')) {
        console.log(node);
      }
    });

    visit(ast, 'jsx', (node) => {
      const { value } = node;
      if (new RegExp(/^\<Author/).test(value)) {
        node.value = value.replace(/ count /, ` count={${number}} `);
      }
    });
  };
  return transformer;
};

module.exports = plugin;
