import crypto from "crypto";

// Generate random 6-character short code
const generateCode = () => {
  return crypto.randomBytes(3).toString("hex");
};

export default generateCode;
