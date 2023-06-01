# SSO App Implementation using Angular and Keycloak

## Description
This repository contains a simple Angular app that implements basic functionalities for login and logout. The authentication and authorization process is implemented using the OIDC protocol and configured with Keycloak, an open-source authorization server.
Users can log in using either a username and password or an external Identity Provider. In this case, GitHub is used as the Identity Provider.

## Goal
This is a test application that will be further developed. The ultimate goal is to integrate SMART on FHIR with national electronic IDs (eIDs), such as ID Austria. SMART on FHIR relies on OAuth2 and OpenID Connect. To achieve this, Keycloak is used as the authorization server, which supports these standards. Initially, a regular app will be used for the eID linking process. Once the authentication with eIDs and Keycloak is implemented, the app can be replaced with a SMART on FHIR app.

## Credits
The SSO implementation is based on the content provided by https://github.com/henrisco82, with modifications and enhancements made.

## Prerequisites

- Running Docker system
- Keycloak installed as a Docker application
- Node and Angular CLI installed

## Development Environment

- OS: Ubuntu v22.04.2 LTS
- Docker: v24.0.2
- Node: v20.2.0
- Angular CLI: v16.0.3
- Keycloak: v21.1.1

## Instructions

1. Start your system.

2. Clone the GitHub repository to your preferred folder:
```
git clone https://github.com/larsgrespan/Angular_keycloak.git
```


3. Navigate to the cloned repository and change the directory to /sso-app:
```
cd /YOUR/CLONE/PATH/Angular_keycloak/sso-app
```


4. Start the SSO-App by running the following command:
```
ng serve
```


5. Open a browser and navigate to the following link to access the SSO-App:
```
http://localhost:4200
```


6. Open a second terminal and start the Keycloak Docker container:
```
docker run <container-id of Keycloak>
```


7. Open a new browser window and navigate to the following link to access the Keycloak app:
```
http://localhost:8080/
```

8. Log in to your Keycloak application.

9. Create a new realm.

10. Before completing the realm creation, you can upload configuration files. Upload the file provided in the GitHub repo:
 ```
 /YOUR/CLONE/PATH/Angular_keycloak/Keycloak/realm-export.json
 ```

11. Ensure that the realm is named 'Test1' and the client ID is named 'test2'.

12. You can now use the SSO-App and try logging in by clicking the login button.

13. Create your own user or log in using your GitHub account or the following credentials:
 - Username: lars
 - Password: passw0rd




