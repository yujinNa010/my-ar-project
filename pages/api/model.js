import fs from "fs";
import path from "path";

export default function handler(req, res) {
  const filePath = path.join(process.cwd(), "public", "model.glb");
  const fileBuffer = fs.readFileSync(filePath);

  res.setHeader("Content-Type", "model/gltf-binary");
  res.send(fileBuffer);
}
