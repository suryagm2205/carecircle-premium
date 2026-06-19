export default async function handler(req, res) {
  // CORS Headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { message, systemPrompt, customKey } = req.body;

  // Prioritize server-side private environment variable, fallback to user's custom key in settings
  const apiKey = process.env.GEMINI_API_KEY || customKey || '';

  if (!apiKey) {
    return res.status(400).json({ 
      error: 'Gemini API Key is missing. Please configure it in your Vercel Environment Variables (GEMINI_API_KEY) or enter it in Settings.' 
    });
  }

  const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${encodeURIComponent(apiKey)}`;
  
  const requestData = {
    contents: [
      {
        parts: [
          { text: message }
        ]
      }
    ],
    systemInstruction: {
      parts: [
        { text: systemPrompt }
      ]
    },
    generationConfig: {
      temperature: 0.7,
      maxOutputTokens: 350
    }
  };

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(requestData)
    });

    if (!response.ok) {
      const errorText = await response.text();
      return res.status(response.status).json({ error: `Gemini API returned error: ${errorText}` });
    }

    const data = await response.json();
    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).json({ error: `Backend server error: ${error.message}` });
  }
}
