const linksConfiguration = [
  {
    name: 'IN_TPS',
  },
  {
    name: 'IN_PPS',
  },
];

const qq = document.querySelector('.links');
const linkTemplate = document.querySelector('#link-template').content;

function getLinkElement(parameter) {
  const linkElement = linkTemplate.querySelector('.link').cloneNode(true);
  linkElement.querySelector('.link__text').textContent = parameter;
  linkElement.querySelector('.link__options');
  console.log(linkElement);
  return linkElement;
}

linksConfiguration.forEach(function(element) {
  qq.append(getLinkElement(element.name));
  console.log(qq);
});

console.log(qq);