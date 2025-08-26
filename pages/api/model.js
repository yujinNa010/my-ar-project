import fs from "fs";
import path from "path";

export default async function handler(req, res) {
  try {
    const filePath = path.join(process.cwd(), "public", "model.glb");
    const fileBuffer = fs.readFileSync(filePath);

    res.setHeader("Content-Type", "model/gltf-binary");
    res.status(200).send(fileBuffer);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to load model" });
  }
}
