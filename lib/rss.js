import { Feed } from "feed";
const fs = require('fs')

export const generateRSSFeed = (articles) => {
  const baseUrl = 'https://preceptionsangha.com';
  const feed = new Feed({
    title: "Preception",
    description: "A podcast on the precepts",
    id: baseUrl,
    link: baseUrl,
    language: "en", // optional, used only in RSS 2.0, possible values: http://www.w3.org/TR/REC-html40/struct/dirlang.html#langcodes
    image: "http://example.com/image.png",
    favicon: "https://preceptionsangha.com/favicon.ico",
    copyright: "All rights reserved 2021, William Damon and Evan Stanley",
    feedLinks: {
      rss2: `${baseUrl}/rss.xml`,
    },
    author: {
      name: "William Damon and Evan Stanley",
      email: "preceptionsangha@gmail.com",
      link: "https://www.preceptionsangha.com/posts/hello-world"
    }
  });
 
  // Add each article to the feed
  articles.forEach((post) => {
    const {
      title,
      date,
      slug,
      author,
      coverImage,
      excerpt,
      type,
      source,
    } = post;
    const url = `${baseUrl}/episodes/${slug}`;
    if (type == 'podcast'  ) {
      feed.addItem({
        tite: title,
        id: url,
        link: url,
        content: `${baseUrl}${source}`,
        description: excerpt,
        // author: [buildAuthor(author)],

        author: [{name: "Will Damon", email: "preceptionsangha@gmail.com"}, {name: "Evan S", email: "preceptionsangha@gmail.com"}],
        image: `${baseUrl}${coverImage}`,
        date: new Date(date),
      });
    }
  });

  fs.writeFileSync('public/rss.xml', feed.rss2());
};

const buildAuthor = ({name}) => {
 return {
   name: name,
 }
}
