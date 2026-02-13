export async function readJsonBody(req, { limitBytes = 1_000_000 } = {}) {
  return await new Promise((resolve, reject) => {
    let size = 0;
    let raw = "";

    req.on("data", (chunk) => {
      size += chunk.length;
      if (size > limitBytes) {
        reject(Object.assign(new Error("Payload too large"), { statusCode: 413 }));
        req.destroy();
        return;
      }
      raw += chunk.toString();
    });

    req.on("end", () => {
      try {
        const json = raw ? JSON.parse(raw) : {};
        resolve(json);
      } catch (err) {
        reject(Object.assign(new Error("Invalid JSON"), { statusCode: 400 }));
      }
    });

    req.on("error", (err) => {
      reject(Object.assign(new Error("Request error"), { statusCode: 400 }));
    });
  });
}
