const axios = require("axios");

//get github account statistics
async function get_stats(req, res) {
  const resp = await axios.get("https://api.github.com/orgs/google/repos");
  let list = [];
  let stat = []
  resp.data.map(item => {
    if (item.language) {
      list.push({ repo: item.git_url, language: item.language });
    }
  });
  return res.json(list);
}

module.exports = function(app) {
  app.get("/", get_stats);
};
