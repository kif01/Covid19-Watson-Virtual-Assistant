# UAE Covid19 Assistant
https://watson-covid-assistant-uae.eu-gb.mybluemix.net/

## Contributors
[Masa Abushamleh](https://github.com/nerdingitout)

## Description
A localized COVID-19 assistant in the UAE that aims to answer the user queries to everything that responds to queries on the daily life and updates related to COVID-19. The assistant helps the users learn information related to COVID-19, cases on daily basis, transportation, healthcare centers that test and treat COVID-19 patients, pets, tips on how to stay safe inside and outside the quarantine, and self-screening and much more!<br>
The assistant was built for both Arabic and English Languages and supports speech to text for both languages.<br>

## Technologies 
- Watson Assistant
- Watson Discovery
- Watson Speech to Text
- IBM Cloud Functions
- Twilio
- Watson Language Translator
- Node-Red

## Architecture Diagram 1 - Text Based 
<img width= "896" src="https://media.github.ibm.com/user/265755/files/fca93380-8570-11ea-9737-d14e5b85b985">
1- User can interact with the assistant through web or mobile application.<br>
2- The application calls Watson Assistant that is hosted on IBM Cloud.<br>
3- Watson Assistant makes calls to Cloud Functions to extract latest information about COVID-19 cases.<br>
4- Cloud Functions makes calls to COVID-19 cases API from Johns Hopkins CSSE.<br>
5- Watson Discovery is connected to Watson Assistant as a search skill. Watson Assistant can retrieve the information from Watson Discovery sends.<br>
6- Watson Discovery scans the Ministry of Health FAQ documents and responds with relevant information.<br>
7- If the user communicates with the Assistant with another language, the text is translated using Language Translator, they can also receive responses in their language.<br>
8- Translated text is sent to Watson Assistant, then the response is sent to Language Translator before being sent back to the user.

## Architecture Diagram 2 - Voice Based 
<img width="896" alt="Screen Shot 2020-04-23 at 1 51 26 PM" src="https://media.github.ibm.com/user/273026/files/054a3b80-856a-11ea-9e9f-76104185aefd">
1- User interacts with his mobile phone to call a number.<br>
2- User phones a call center phone number that is associated with a Twilio account.<br>
3- The Twilio number connects to a configured Voice Agent service through the SIP communication protocol<br>
4- Voice Agent calls the Watson Speech to Text service to transcribe the user input.<br>
5- Watson Assistant respond based on the user input.<br>
6- Results from Watson Assistant are transmitted back to the Voice Gateway service using the Watson Text to Speech service and thus back to the user who will hear the response.<br>
7- If user input was not found in Watson Assistant's dialog flow, then the assistant uses a search skill integrated with Watson Discovery.<br>
8-  Discovery is already fed with an FAQ file related to additional COVID-19 questions. So discovery looks for the answer in this file and sends it back to the assistant.<br>
9- If user asks a question about number of cases, then a Cloud Function gets triggered.<br> 
10- Cloud Function makes a call to COVID-19 cases API from Johns Hopkins CSSE, gets the answer and gives it back to the assistant.<br>

## Node-Red Flow (For Translation)
<img width="1345" alt="Screen Shot 2020-04-23 at 2 45 48 PM" src="https://media.github.ibm.com/user/273026/files/9c68c080-8575-11ea-8584-b6a9f84560ea">

## Deployment
The model was deployed on a web application.<br>
You can find the link to the main web appliation here: https://watson-covid-assistant-uae.eu-gb.mybluemix.net/<br>

* There is another model deployed using Node-Red to create an environment similar to the voice agent in case users want to test it instead of dialing the number, and as well to show some other features like language translator. This link is availble in the main web app using the "Voice & Translator" button, but you can as well check it here: https://node-red-aesoi.eu-gb.mybluemix.net/ui/#!/0?socketid=_3VyZzjtQcYXy8mrAACL


## Screenshots
<img width="1440" alt="Screen Shot 2020-04-27 at 6 45 25 PM" src="https://media.github.ibm.com/user/273026/files/bfdb9480-8902-11ea-8f40-db22324d4788">
<img width="1440" alt="Screen Shot 2020-04-27 at 6 43 57 PM" src="https://media.github.ibm.com/user/273026/files/c9fd9300-8902-11ea-8406-26edb3a11fad">

### Node-Red Urdu Language Translation
<img width="1437" alt="Screen Shot 2020-04-23 at 2 52 09 PM" src="https://media.github.ibm.com/user/273026/files/9377ef00-8575-11ea-90a5-1a902cfabec8">

