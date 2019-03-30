const axios = require("axios");

//get github account statistics
async function get_stats(req, res) {
  const resp = await axios.get("https://api.github.com/orgs/google/repos");
  let list = [];
  let stat = [];
  resp.data.map(item => {
    list.push({ repo: item.git_url, languages: item.languages_url });
  });

  let stats = {};

  list.map(async el => {
    if (el.languages) {
      const langs = await axios.get(el.languages);
      
    }
  });
  return res.json(list);
}

module.exports = function(app) {
  app.get("/", get_stats);
};
