// import browserDefinitions from '../selenium-browsers.json';
// import os from 'os';

// export const extractTools: { [type: string]: Function } = {
//   chrome: async (response: Response) => {
//     const data = await response.text();
//     return `http://chromedriver.storage.googleapis.com/${data}/chromedriver_${os.platform()}64.zip`;
//   },
//   github: async (response: Response) => {
//     const data = await response.json();
//     for (const release of data) {
//       if (release.draft || release.prelease) continue;

//       for (const version of release.assets) {
//         if (version.name.indexOf(os.platform) >= 0) {
//           return version.browser_download_url;
//         }
//       }
//     }
//   }
// };

// export default (async () => {
//   console.log(browserDefinitions);
//   for (const browser of browserDefinitions) {
//     const data = await fetch(browser.releases.url).then(async (response) =>
//       extractTools[browser.releases.type](response)
//     );
//   }
// })();
