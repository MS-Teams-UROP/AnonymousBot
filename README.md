# anonymous-bot

This bot can be used to send anonymous messages to teams channels.

## How to use this bot
Demo of the bot can be found [here](https://www.youtube.com/watch?v=gHB4X5Tunrk)

Unfortunately, the bot has not been configured for the public to use, due to the graph APi permissions required.

A user can start a personal teams chat with this bot. The user then needs to specify a team and channel for the bot to send an anonymous message to. The bot will then send the mssage to the channel on the user's behalf, while hiding the user's identity.
Commands:
'/start' : begin dialogue with bot, bot will prompt user to choose a team
'/help' : get information on how to use the bot
## Prerequisites

1. [Node.js](https://nodejs.org) version 10.14.1 or higher

    ```bash
    # determine node version
    node --version
    ```
2. [Azure Active Directory](https://learn.microsoft.com/bs-latn-ba/azure/active-directory/fundamentals/)
3. [Microsoft Graph API](https://learn.microsoft.com/en-us/graph/use-the-api) for retrieving the teams and channels that the user is a part of.
The following Graph API **Application Permissions** must be granted to the app:
* `Channel.ReadBasic.All`
* `Team.ReadBasic.All`
4. [Azure App Service](https://azure.microsoft.com/en-us/products/app-service/) for hosting the bot's server.
5. [Azure Bot Resource](https://learn.microsoft.com/en-us/azure/bot-service/abs-quickstart?view=azure-bot-service-4.0&tabs=userassigned) to register your bot with Azure Bot Services and to connect your bot to channels, in this case MS teams

## Testing the bot using Bot Framework Emulator

[Bot Framework Emulator](https://github.com/microsoft/botframework-emulator) is a desktop application that allows bot developers to test and debug their bots on localhost or running remotely through a tunnel.

- Install the Bot Framework Emulator version 4.9.0 or greater from [here](https://github.com/Microsoft/BotFramework-Emulator/releases)

### Connect to the bot using Bot Framework Emulator

- Launch Bot Framework Emulator
- File -> Open Bot
- Enter a Bot URL of `http://localhost:3978/api/messages`
Warning: Running the bot with the emulator will not allow you to message a teams channel.
## Deploy the bot to Azure

To learn more about deploying a bot to Azure, see [Deploy your bot to Azure](https://aka.ms/azuredeployment) for a complete list of deployment instructions.


## Further reading

- [Bot Framework Documentation](https://docs.botframework.com)
- [Bot Basics](https://docs.microsoft.com/azure/bot-service/bot-builder-basics?view=azure-bot-service-4.0)
- [Dialogs](https://docs.microsoft.com/en-us/azure/bot-service/bot-builder-concept-dialog?view=azure-bot-service-4.0)
- [Gathering Input Using Prompts](https://docs.microsoft.com/en-us/azure/bot-service/bot-builder-prompts?view=azure-bot-service-4.0)
- [Activity processing](https://docs.microsoft.com/en-us/azure/bot-service/bot-builder-concept-activity-processing?view=azure-bot-service-4.0)
- [Azure Bot Service Introduction](https://docs.microsoft.com/azure/bot-service/bot-service-overview-introduction?view=azure-bot-service-4.0)
- [Azure Bot Service Documentation](https://docs.microsoft.com/azure/bot-service/?view=azure-bot-service-4.0)
- [Azure CLI](https://docs.microsoft.com/cli/azure/?view=azure-cli-latest)
- [Azure Portal](https://portal.azure.com)
- [Channels and Bot Connector Service](https://docs.microsoft.com/en-us/azure/bot-service/bot-concepts?view=azure-bot-service-4.0)
- [Restify](https://www.npmjs.com/package/restify)
- [dotenv](https://www.npmjs.com/package/dotenv)
