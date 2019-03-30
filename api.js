const axios = require("axios");

//get github account statistics
const get_stats = async (req, res) => {
  try {
    const orgname = req.params.id || "google";
    const url = `https://api.github.com/orgs/${orgname}/repos`;
    const resp = await axios.get(url);
    let list = [];
    let stat = [];
    resp.data.map(item => {
      list.push({
        repo: item.git_url,
        languages: item.languages_url,
        language: item.language
      });
    });

    let stats = {
      go: 7885455,
      cpp: 8845478,
      python: 10215458,
      java: 54455554,
      javascripts: 458854558
    };

    //console.log(list);
    return res.status(200).json(stats);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Error" });
  }
};

module.exports = function(app) {
  app.get("/api/stats/google", get_stats);
};
