require('dotenv').config();

const { google } = require('googleapis');

const oAuth2Client = new google.auth.OAuth2(
  process.env.GOOGLE_CLIENT_ID,
  process.env.GOOGLE_CLIENT_SECRET,
  process.env.REDIRECT_URI
);

const SCOPES = ['https://www.googleapis.com/auth/calendar.events'];

const authorization = () => {
  const url = oAuth2Client.generateAuthUrl({
    access_type: 'offline',
    scope: SCOPES,
    prompt: 'consent',
  });
  return url;
};
 
const getatoken = async (code) => {
    try {
        const { tokens } = await oAuth2Client.getToken(code);
        
        if (!tokens.refresh_token) {
        console.error('No refresh token received');
        }
    
        await prisma.persona.update({ 
            where: { 
                id: personaId 
            }, 
            data: { 
                googleRefreshToken: tokens.refresh_token 
            }
        });
        return tokens;

    } catch (error) {
        console.error('Error taking tokens', error);
    }
};

const lookfortoken = async (tokenrenewed) => {
  if (!tokenrenewed) {
   console.log("U need a token for this");
  }
  
  oAuth2Client.setCredentials({
    refresh_token: tokenrenewed,
  });

  const calendar = google.calendar({ version: 'v3', auth: oAuth2Client });
  return calendar;
};

const permision = async (code) => {
  const code = req.query.code;
  if (!code) {
    return res.status(400).send('No authorization code provided');
  }
  
  try {
    const tokens = await getatoken(code);

    await prisma.persona.update({ 
            where: { 
                id: personaId 
            }, 
            data: { 
                googleRefreshToken: tokens.refresh_token 
            }
        });

    res.send('Authorization successful');
  } catch (error) {
    res.status(500).send('Authorization failed.');
  } 

}

const getevents = async () => {
  const userRefreshToken = 'TOKEN_FROM_YOUR_DB'; 
    
  try {
    const events = await getEvents(userRefreshToken);
    res.json(events);
  } catch (error) {
    res.status(500).send('Failed to get events.');
  }
}

module.exports(authorization, getatoken, lookfortoken, permision, getevents);
