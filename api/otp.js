import crypto from 'crypto';

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

  const { action, phone, code, signature } = req.body;
  const secretKey = process.env.OTP_SECRET || 'carecircle-secure-signature-salt-2026';

  if (action === 'send') {
    if (!phone) {
      return res.status(400).json({ error: 'Phone number is required.' });
    }

    // 1. Generate 4-digit code
    const generatedOtp = Math.floor(1000 + Math.random() * 9000).toString();

    // 2. Log code to server console (so developer/QA can retrieve it during local tests)
    console.log(`\n======================================================`);
    console.log(`[SMS GATEWAY SIMULATOR]`);
    console.log(`Recipient: ${phone}`);
    console.log(`OTP Code:  ${generatedOtp}`);
    console.log(`======================================================\n`);

    // 3. Compute cryptographic signature
    const hmac = crypto.createHmac('sha256', secretKey);
    hmac.update(`${phone}:${generatedOtp}`);
    const hash = hmac.digest('hex');

    const isDev = process.env.NODE_ENV === 'development' || (req.headers.host && (req.headers.host.includes('localhost') || req.headers.host.includes('127.0.0.1')));
    return res.status(200).json({
      success: true,
      message: 'Verification SMS simulated and logged to server console.',
      signature: hash,
      ...(isDev ? { debugOtp: generatedOtp } : {})
    });
  } 
  
  if (action === 'verify') {
    if (!phone || !code || !signature) {
      return res.status(400).json({ error: 'Phone, verification code, and signature are required.' });
    }

    // Recompute signature
    const hmac = crypto.createHmac('sha256', secretKey);
    hmac.update(`${phone}:${code}`);
    const expectedHash = hmac.digest('hex');

    if (expectedHash === signature) {
      return res.status(200).json({ success: true, message: 'OTP verified successfully.' });
    } else {
      return res.status(400).json({ success: false, error: 'Incorrect verification code.' });
    }
  }

  return res.status(400).json({ error: 'Invalid action parameter.' });
}
