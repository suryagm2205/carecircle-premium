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

  const { symptom, lang, customKey } = req.body;
  const apiKey = process.env.GEMINI_API_KEY || customKey || '';

  if (!apiKey) {
    return res.status(400).json({ error: 'Gemini API Key is missing.' });
  }

  const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${encodeURIComponent(apiKey)}`;
  
  const systemPrompt = `You are a medical translator and senior triage assistant.
The user is describing their symptoms: "${symptom}".
Your task is to:
1. Translate the symptom description to English (if it is not already in English).
2. Triage the risk level into one of two categories:
   - RED ALERT: For critical symptoms like chest tightness, chest pain, left arm pain, difficulty breathing, severe sudden dizziness, sudden weakness, or severe abdominal pain.
   - GREEN ALERT: For minor/moderate non-urgent symptoms like mild fatigue, slight headache, minor muscle soreness, or runny nose.
3. Respond in the senior's language (language code: ${lang}).

Format your response EXACTLY as a JSON object, with no markdown styling or wrapping backticks, in this structure:
{
  "translated_symptom": "[English translation of symptom description]",
  "risk_level": "[RED ALERT or GREEN ALERT]",
  "triage_recommendation": "[A warm, caring recommendation in ${lang} language, telling the user to contact their doctor or seek emergency help if RED, or to rest and monitor if GREEN. Keep it simple and easy to understand for an elder, max 2-3 sentences. Do not use markdown bolding.]"
}`;

  const requestData = {
    contents: [
      {
        parts: [
          { text: `Analyze symptom: "${symptom}"` }
        ]
      }
    ],
    systemInstruction: {
      parts: [
        { text: systemPrompt }
      ]
    },
    generationConfig: {
      temperature: 0.1,
      maxOutputTokens: 250,
      responseMimeType: "application/json"
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
