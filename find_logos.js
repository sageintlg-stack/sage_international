const https = require('https');

async function getWikiImage(title) {
  const url = `https://en.wikipedia.org/w/api.php?action=query&prop=pageimages&format=json&piprop=original&titles=${title}`;
  return new Promise((resolve) => {
    https.get(url, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        const json = JSON.parse(data);
        const pages = json.query.pages;
        const pageId = Object.keys(pages)[0];
        resolve(pages[pageId].original?.source);
      });
    });
  });
}

(async () => {
  console.log('SLB:', await getWikiImage('SLB_(company)'));
  console.log('KOC:', await getWikiImage('Kuwait_Oil_Company'));
  console.log('Baker Hughes:', await getWikiImage('Baker_Hughes'));
})();
