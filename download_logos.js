const fs = require('fs');
const https = require('https');
const path = require('path');

const dir = path.join(__dirname, 'public', 'images', 'clients');
if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

const download = (url, dest) => {
  return new Promise((resolve, reject) => {
    https.get(url, (response) => {
      if (response.statusCode === 200) {
        const file = fs.createWriteStream(dest);
        response.pipe(file);
        file.on('finish', () => {
          file.close();
          resolve(true);
        });
      } else if (response.statusCode === 301 || response.statusCode === 302) {
        download(response.headers.location, dest).then(resolve).catch(reject);
      } else {
        console.error(`Status ${response.statusCode} for ${url}`);
        resolve(false);
      }
    }).on('error', (err) => {
      reject(err);
    });
  });
};

const domains = {
  slb: 'slb.com',
  koc: 'kockw.com',
  baker_hughes: 'bakerhughes.com',
  al_mansoori: 'almansoori.biz'
};

async function main() {
  for (const [name, domain] of Object.entries(domains)) {
    console.log(`Downloading ${name} from ${domain}...`);
    try {
      const success = await download(`https://logo.clearbit.com/${domain}?size=400`, path.join(dir, `${name}.png`));
      if (!success) console.log(`Failed to download ${name}`);
    } catch (e) {
      console.error(`Failed ${name}: ${e.message}`);
    }
  }
}
main();
