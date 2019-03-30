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
      go: 0,
      cpp: 0,
      python: 0,
      javascripts: 0
    };

    setInterval(() => {}, 300);

    list.map(el => {
      console.log(el);
      axios.get(el.languages).then(res => {
        if (res.data.Go) stats.go += res.data.Go;
        if (res.data["C++"]) stats.cpp += res.data["C++"];
        if (res.data.Python) stats.python += res.data.Python;
      });
    });

    console.log(stats);

    console.log(list);
    return res.status(200).json(list);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Error" });
  }
};

module.exports = function(app) {
  app.get("/api/stats/google", get_stats);
};
