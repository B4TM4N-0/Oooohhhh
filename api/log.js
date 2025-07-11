export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();

  const webhook = process.env.THE_KEY_BRO;

  try {
    const body = req.body;
    const result = await fetch(webhook, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    if (!result.ok) throw new Error("Failed to send webhook");
    res.status(200).json({ success: true });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}