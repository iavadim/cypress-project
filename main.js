const posts = [
  {
    title: 'Heading post',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia ipsam, repellendus nisi non, a alias cumque aut tempore ad harum dicta consectetur possimus veritatis! Facere praesentium veniam minus omnis odio.',
  },
  {
    title: 'Heading post',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia ipsam, repellendus nisi non, a alias cumque aut tempore ad harum dicta consectetur possimus veritatis! Facere praesentium veniam minus omnis odio.',
  },
  {
    title: 'Heading post',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia ipsam, repellendus nisi non, a alias cumque aut tempore ad harum dicta consectetur possimus veritatis! Facere praesentium veniam minus omnis odio.',
  },
];

async function fetchPosts() {
  try {
    const response = await fetch(
      'https://jsonplaceholder.typicode.com/posts?_limit=3'
    );
  } catch (error) {
    alert('error fetch', error);
  }
}

const getArticleElement = ({ title, content }) =>
  `<article><h2>${title}</h2><div><p>${content}</p></div></article>`;

const articleSection = document.querySelector('section');
articleSection.innerHTML = posts
  .map((post) => getArticleElement(post))
  .join('');
