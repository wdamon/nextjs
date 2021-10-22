const Podcast = require('podcast')
const fs = require('fs')

export const generateRSSFeed = (articles) => {
  const baseUrl = 'https://preceptionsangha.com';
  const feed = new Podcast({
    title: "Preception",
    description: "A podcast on the precepts",
    siteUrl: baseUrl,
    feedUrl: `${baseUrl}/rss.xml`,
    link: baseUrl,
    language: "en", // optional, used only in RSS 2.0, possible values: http://www.w3.org/TR/REC-html40/struct/dirlang.html#langcodes
    imageUrl: "https://preceptionsangha.com/assets/blog/preception_cover.jpg",
    favicon: "https://preceptionsangha.com/favicon.ico",
    copyright: "All rights reserved 2021, William Damon and Evan Stanley",
    author: "William Damon and Evan S",
    itunesAuthor: "William Damon and Evan S",
    itunesExplicit: false,
    itunesOwner: {name: "William Damon and Evan S", email: "preceptionsangha@gmail.com"},
    itunesImage: "https://preceptionsangha.com/assets/blog/preception_cover.jpg",
    pubDate: new Date
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
      console.log(excerpt)
      feed.addItem({
        tite: title,
        url: url,
        link: url,
        content: `${baseUrl}${source}`,
        description: excerpt,
        itunesAuthor:  "Will Damon and Evan S",
        itunesExplicit: false,
        image: `${baseUrl}${coverImage}`,
        date: new Date(date),
      });
    }
  });
  fs.writeFileSync('public/rss.xml', feed.buildXml());
};

const buildAuthor = ({name}) => {
 return {
   name: name,
 }
}
