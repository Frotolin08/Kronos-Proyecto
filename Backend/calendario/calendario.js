const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const { google } = require('googleapis');

const oAuth2Client = new google.auth.OAuth2(
  process.env.GOOGLE_CLIENT_ID,
  process.env.GOOGLE_CLIENT_SECRET,
  process.env.REDIRECT_URI
);

const SCOPES = ['https://www.googleapis.com/auth/calendar.events'];

const setupcalendario = () => {

  const authorization = () => {
    const url = oAuth2Client.generateAuthUrl({
      access_type: 'offline',
      scope: SCOPES,
      prompt: 'consent',
    });
    return url;
  };
  
  const getatoken = async (code, personaId) => {
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
    throw new Error("No token provided");
    }
    
    oAuth2Client.setCredentials({
      refresh_token: tokenrenewed,
    });

    const calendar = google.calendar({ version: 'v3', auth: oAuth2Client });
    return calendar;
  };

  const permision = async (req, res) => {
    const code = req.query.code;
    if (!code) {
      return res.status(400).send('No authorization code provided');
    }

    const personaId = req.personaId; 
    
    try {
      await getatoken(code, personaId);
      res.send('Authorization successful');
    } catch (error) {
      res.status(500).send('Authorization failed.');
    } 

  };

  const getevents = async (req, res) => {
    try {
      const personaId = req.personaId; 
      const persona = await prisma.persona.findUnique({
        where: { id: personaId },
        select: { googleRefreshToken: true }
      });

      if (!persona || !persona.googleRefreshToken) {
        return res.status(401).send('User not linked to a Google account');
      }
      const calendar = await lookfortoken(persona.googleRefreshToken);
      const events = await calendar.events.list({
        calendarId: 'primary',
        timeMin: (new Date()).toISOString(),
        maxResults: 10,
        singleEvents: true,
        orderBy: 'startTime',
      });
      res.json(events.data.items);

    } catch (error) {
      console.error('Failed to get events:', error);
      res.status(500).send('Failed to get events');
    }
  };

  const redirectwithgoogle = async (req, res) => {
    const url = authorization();
    res.redirect(url);
  };
  
  const createevents = async (req, res) => {
    try {
      const personaId = req.personaId;
      const eventdetails = req.body;

      if (!eventdetails) {
        return res.status(400).send('No event details provided');
      }

      const persona = await prisma.persona.findUnique({
        where: { id: personaId },
        select: { googleRefreshToken: true }
      });

      if (!persona || !persona.googleRefreshToken) {
        return res.status(401).send('User not linked to a Google account');
      }

      const calendar = await lookfortoken(persona.googleRefreshToken);
      const res_event = await calendar.events.insert({
        calendarId: 'primary',
        resource: eventdetails,
      });
      res.status(201).json(res_event.data);

    } catch (error) {
      console.error('Failed to create event:', error);
      res.status(500).send('Failed to create event');
    }
  };

  const deleteevents = async (req, res) => {
    try {
      const { eventId } = req.params;
      const personaId = req.personaId;

      const persona = await prisma.persona.findUnique({
        where: { id: personaId },
        select: { googleRefreshToken: true }
      });

      if (!persona || !persona.googleRefreshToken) {
        return res.status(401).send('User not linked to a Google account');
      }

      const calendar = await lookfortoken(persona.googleRefreshToken);
      await calendar.events.delete({
        calendarId: 'primary',
        eventId: eventId,
      });

      res.status(204).send();
    } catch (error) {
      console.error('Failed to delete event:', error);
      res.status(500).send('Failed to delete event');
    }
  };

  
  const updateevents = async (req, res) => {
    try {
      const { eventId } = req.params; 
      const eventdetails = req.body; 
      const personaId = req.personaId;

      const persona = await prisma.persona.findUnique({
        where: { id: personaId },
        select: { googleRefreshToken: true }
      });

      if (!persona || !persona.googleRefreshToken) {
        return res.status(401).send('User not linked to a Google account');
      }

      const calendar = await lookfortoken(persona.googleRefreshToken);
      const updatedEvent = await calendar.events.update({
        calendarId: 'primary',
        eventId: eventId,
        resource: eventdetails,
      });

      res.status(200).json(updatedEvent.data);

    } catch (error) {
      console.error('Failed to update event:', error);
      res.status(500).send('Failed to update event');
    }
  };

  return {
    authorization,
    getatoken,
    lookfortoken,
    permision,
    getevents,
    redirectwithgoogle,
    createevents,
    deleteevents,
    updateevents
  };
};

module.exports = setupcalendario;
