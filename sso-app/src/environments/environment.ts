export const environment = {
    production: false,
    keycloak: {
        issuer: "http://localhost:8080/realms/Test1",
        redirectUri: "http://localhost:4200",
        clientId: "test2",
        scope: "openid profile email offline_access"
    }
};