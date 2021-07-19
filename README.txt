How to run the application
•	The application is in the folder labelled bulletin-system
• open the keys folder and install "server.crt" to the "Trusted Root Certification Authorities"
•	Open the main folder in vs code
•	Run the following command in a powershell terminal:

npm run start:server

•	Run the following command in a node terminal:

ng serve --ssl true --ssl-cert "keys\certificate.pem" --ssl-key "keys\privatekey.pem"

•	Open the app on https://localhost:4200  (make sure you use HTTPS)
•	Accept any security risks that may show up (there shouldnt be any)
•	The application should open on its welcome page.


Note: all code used in this application is from the references below unless otherwise attributed in the respective code files.

References

The IIE. 2021. APDS7311 LAB GUIDE. The Independent Institute of Education:Unpublished.
Google LLC. 2021. Angular Material. [Online]. Available at: https://material.angular.io/ [Accessed 1 May 2021].
