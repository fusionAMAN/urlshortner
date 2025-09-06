import urlDatabase from "../models/urlModel.js";
import generateCode from "../utils/generateCode.js";

// POST /shorten
export const shortenUrl = (req, res) => {
  const { longUrl } = req.body;

  if (!longUrl || !/^https?:\/\//.test(longUrl)) {
    return res.status(400).json({ error: "Invalid URL" });
  }

  const shortCode = generateCode();
  urlDatabase[shortCode] = longUrl;

  res.json({
    shortUrl: `http://localhost:3000/${shortCode}`,
    longUrl,
  });
};

// GET /:code
export const redirectUrl = (req, res) => {
  const { code } = req.params;
  const longUrl = urlDatabase[code];

  if (!longUrl) {
    return res.status(404).json({ error: "Short URL not found" });
  }

  res.redirect(longUrl);
};

// GET /list
export const listUrls = (req, res) => {
  res.json(urlDatabase);
};
