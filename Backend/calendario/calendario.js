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

module.exports(authorization, getatoken, lookfortoken);