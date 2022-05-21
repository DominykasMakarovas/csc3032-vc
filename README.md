# csc3032-vc

To run the program:

1. Download the latest version of ngrok this is done to expose the IP as a public URI callback is required: https://ngrok.com/download
2. Clone the repo and npm install in the src or the main directory
3. Use command 'node app.js' within the src directory.
4. Open the Ngrok.exe and use the command 'ngrok http 8080' this will expose the port 8080 where the app is based.
5. Microsoft Authenticator needs to be installed to utilise the system, so download it via the Google Play or iOS App Store dependent on the OS of the smartphone device you have.

To use the issuer:
- Follow the webpage to go to the create credential webpage.
- Enter personal info
- Scan the generated QR code with Authenticator app
- Enter the pincode in the app

To use the verifier
- Go to the verify credential page via the home page
- Click on the button to generate the QR Code
- Scan the QR with Authenticator app
- Follow instructions on smartphone device to choose which VC to present

To use results
- Go to the get adjustments page via the home page
- Click on get adjustments
- Adjustments should appear in a table (if there are presented credentials)
- Press the print adjustments button to save adjustment table and data in a PDF.
