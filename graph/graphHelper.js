require('isomorphic-fetch');

const azure = require('@azure/identity');
const graph = require('@microsoft/microsoft-graph-client');
const authProviders =
    require('@microsoft/microsoft-graph-client/authProviders/azureTokenCredentials');

let _settings = undefined;
let _clientSecretCredential = undefined;
let _appClient = undefined;
//Login using the app credentials
function ensureGraphForAppOnlyAuth(settings) {
    _settings = settings
    // Ensure settings isn't null
    if (!_settings)
        throw new Error('Settings cannot be undefined');

    if (!_clientSecretCredential) {
        _clientSecretCredential = new azure.ClientSecretCredential(
            _settings.tenantId,
            _settings.clientId,
            _settings.clientSecret
        );
    }

    if (!_appClient) {
        const authProvider = new authProviders.TokenCredentialAuthenticationProvider(
            _clientSecretCredential, {
            scopes: ['https://graph.microsoft.com/.default']
        });

        _appClient = graph.Client.initWithMiddleware({
            authProvider: authProvider
        });
    }
}
//Retrieving user's joined teams
async function retrieveJoinedTeamsAsync(userId) {
    return _appClient?.api('/users/' + userId + '/joinedTeams')
        .get();
}
//retrieving user's joined channels
async function retrieveChannelsAsync(teamId) {
    return _appClient.api('/teams/' + teamId + '/channels')
        .get();
}
//retrieving user's conversations (currently not used)
async function retrieveConversationsAsync(channelId) {
    return _appClient.api('/groups/' + channelId + '/conversations').get()
}
async function retrieveUsersAsync() {
    return _appClient?.api('/users')
        .select(['displayName', 'id', 'mail'])
        .top(25)
        .orderby('displayName')
        .get();
}
async function retrieveUserEmail(id) {
    return _appClient?.api('/users/' + id)
        .select(['userPrincipalName'])
        .get();
}
module.exports = {
    ensureGraphForAppOnlyAuth,
    retrieveJoinedTeamsAsync,
    retrieveUserEmail,
    retrieveUsersAsync,
    retrieveChannelsAsync,
    retrieveConversationsAsync
}