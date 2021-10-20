interface AuthConfig {
  domain: string;
  clientId: string;
  redirectUri: string;
}
const authConfig: AuthConfig = {
  domain: "dev-alpinelines.us.auth0.com",
  clientId: "Yo78PaeeyXZQcs5MHSI9WBhn13WO2eKe",
  redirectUri: 'http://localhost:4200/new-post'
}
export default authConfig;
