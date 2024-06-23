<div align="center">
	<p>
		<a href="https://www.npmjs.com/package/simple-discord-online"><img src="https://img.shields.io/npm/v/simple-discord-online.svg?maxAge=3600" alt="npm version" /></a>
		<a href="https://www.npmjs.com/package/simple-discord-online"><img src="https://img.shields.io/npm/dt/simple-discord-online.svg?maxAge=3600" alt="npm downloads" /></a>
	</p>
</div>

# simple-discord-online
Simple-discord-online is a valuable package designed to streamline the creation of Discord bot events, significantly easing the process for new developers venturing into bot development. By providing simplified tools and straightforward functionalities, it empowers users to quickly set up and manage bot events with minimal complexity. This accessibility not only reduces the learning curve but also encourages more people to engage in bot creation, fostering a more inclusive developer community around Discord applications.

# Install
```sh
npm install simple-discord-online
```

# Import
```js
const { Client } = require("simple-discord-online");
```

# Demo
```js
const { Client } = require("simple-discord-online");
const client = new Client({
    partials: {
        channel: true,
        guildMember: true,
        message: true,
        user: false,
        guild: false,
        guildEmoji: false,
        guildBan: false,
        messageReaction: true,
        presence: false,
        unknown: false,
    },
    intents: {
        guilds: true,
        guildMembers: true,
        guildBans: false,
        guildEmojisAndStickers: false,
        guildIntegrations: false,
        guildWebhooks: false,
        guildInvites: false,
        guildVoiceStates: true,
        guildPresences: false,
        guildMessages: true,
        guildMessageReactions: true,
        guildMessageTyping: false,
        directMessages: false,
        directMessageReactions: false,
        directMessageTyping: false,
        messageContent: true,
        guildScheduledEvents: false,
        autoModerationConfiguration: false,
        autoModerationExecution: false,
    },
});;

client.login("Token");

client.ready((client) => {
console.log(`Logged as ${client.user.tag}!`)
});
```

# Usages
// Create a new ActionRowBuilder 
/*
The ActionRowBuilder in discord.js is used to create and manage interactive components like buttons, select menus, and text inputs in a message. It organizes these components into a row within a message, allowing for a structured layout. Each action row can hold up to 5 components.
*/
```js
client.ActionRow(component);
```

// Create Button
/*
The ButtonBuilder in discord.js is used to create interactive buttons for messages. It allows customization of button style, label, emoji, and custom ID for interaction handling. Buttons can be added to an ActionRowBuilder to be sent within messages.
*/
```js
client.Button([
{ customId: 'primary', label: 'Primary', style: ButtonStyle.Primary },
{ customId: 'secondary', label: 'Secondary', style: ButtonStyle.Secondary },
{ customId: 'success', label: 'Success', style: ButtonStyle.Success },
{ customId: 'danger', label: 'Danger', style: ButtonStyle.Danger },
{ label: 'Link', style: ButtonStyle.Link, url: 'https://example.com' }
]);
```

// create Select Menu
/*
The StringSelectMenuBuilder in discord.js is used to create customizable select menus for messages. It allows for multiple options to be defined with labels, descriptions, and values. Users can interact with the menu to make selections which can then be handled by the bot
*/
```js
client.SelectMenu({
customId: "id",
placeholder: "placeholder",
options: [options]
})
```

// create Menu Options
/*
The StringSelectMenuOptionBuilder in discord.js is a class used to define individual options within a select menu. It allows setting properties like label, value, description, and default selection status. These options are then added to a StringSelectMenuBuilder to create a complete select menu.
*/
```js
client.MenuOption({
label: "label",
dec: "description",
value: "value"
});
```
// create Embed
/*
The EmbedBuilder in discord.js is a utility class for creating rich message embeds. It provides a fluent interface to set properties like title, description, color, fields, and images. Embeds can enhance message presentation with structured and visually appealing content.
*/
```js
client.Embed({
title = 'Title',
description = 'Description',
url = 'https://example.com',
color = '#ffffff',
timestamp,
footerText = 'Footer',
footerIcon = 'https://example.com',
thumbnail = 'https://example.com',
image = 'https://example.com',
authorName = 'Author',
authorURL = 'https://example.com',
authorIcon = 'https://example.com',
fields = [{
name: 'Field 1',
value: 'Value 1', inline: true },
{
name: 'Field 2',
value: 'Value 2', inline: true }
]
})
```

# Events
 apiRequest
Emitted before every API request. This event can emit several times for the same request, e.g. when hitting a rate limit.
PARAMETER    TYPE        DESCRIPTION
request      APIRequest     The request that is about to be sent    
```js
client.apiRequest((req) => {
    console.log(`apiRequest: ${req}`);
});
```

apiResponse
Emitted after every API request has received a response. This event does not necessarily correlate to completion of the request, e.g. when hitting a rate limit.
PARAMETER    TYPE        DESCRIPTION
request      APIRequest     The request that is about to be sent    
```js
client.apiResponse((res) => {
    console.log(`apiResponse: ${res}`);
});
```

the previous, apiRequest and apiResponse, are informational events that are emitted quite frequently, it is highly recommended to check request.path to filter the data.

channelCreate
Emitted whenever a channel is created.
PARAMETER    TYPE        DESCRIPTION
channel      Channel     The channel that was created    
```js
client.channelCreate((channel) => {
    console.log(`channelCreate: ${channel}`);
});
```

channelDelete
Emitted whenever a channel is deleted.
PARAMETER   TYPE      DESCRIPTION
channel     Channel   The channel that was deleted    
```js
client.channelDelete((channel) => {
    console.log(`channelDelete: ${channel}`);
});
```

channelPinsUpdate
Emitted whenever the pins of a channel are updated. Due to the nature of the WebSocket event, not much information can be provided easily here - you need to manually check the pins yourself.
PARAMETER    TYPE         DESCRIPTION
channel      Channel      The channel that the pins update occurred in
time         Date         The time of the pins update    
```js
client.channelPinsUpdate((channel, time) => {
    console.log(`channelPinsUpdate: ${channel}:${time}`);
});
```
    
channelUpdate
Emitted whenever a channel is updated - e.g. name change, topic change.
PARAMETER        TYPE        DESCRIPTION
oldChannel       Channel     The channel before the update
newChannel       Channel     The channel after the update    
```js
client.channelUpdate((oldChannel, newChannel) => {
    console.log(`channelUpdate -> a channel is updated - e.g. name change, topic change`);
});
```

debug
Emitted for general debugging information.
PARAMETER    TYPE         DESCRIPTION
info         string       The debug information    
```js
client.debug((info) => {
    console.log(`debug -> ${info}`);
});
```

emojiCreate
Emitted whenever a custom emoji is created in a guild.
PARAMETER    TYPE          DESCRIPTION
emoji        Emoji         The emoji that was created    
```js
client.emojiCreate((emoji) => {
    console.log(`a custom emoji is created in a guild`);
});
```

emojiDelete
Emitted whenever a custom guild emoji is deleted.
PARAMETER    TYPE         DESCRIPTION
emoji        Emoji        The emoji that was deleted    
```js
client.emojiDelete((emoji) => {
    console.log(`a custom guild emoji is deleted`);
});
```

emojiUpdate
Emitted whenever a custom guild emoji is updated.
PARAMETER    TYPE       DESCRIPTION
oldEmoji     Emoji      The old emoji
newEmoji     Emoji      The new emoji    
```js
client.emojiUpdate((oldEmoji, newEmoji) => {
    console.log(`a custom guild emoji is updated`);
});
```

error
Emitted whenever the client's WebSocket encounters a connection error.
PARAMETER    TYPE     DESCRIPTION
error        Error    The encountered error
```js
client.error((error) => {
    console.error(`client's WebSocket encountered a connection error: ${error}`);
});
```

guildBanAdd
Emitted whenever a member is banned from a guild.
PARAMETER    TYPE          DESCRIPTION
guild        Guild         The guild that the ban occurred in
user         User          The user that was banned    
```js
client.guildBanAdd((guild, user) => {
    console.log(`a member is banned from a guild`);
});
```

guildBanRemove
Emitted whenever a member is unbanned from a guild.
PARAMETER    TYPE         DESCRIPTION
guild        Guild        The guild that the unban occurred in
user         User         The user that was unbanned    
```js
client.guildBanRemove((guild, user) => {
    console.log(`a member is unbanned from a guild`);
});
```

guildCreate
Emitted whenever the client joins a guild.
PARAMETER    TYPE         DESCRIPTION
guild        Guild        The created guild
```js
client.guildCreate((guild) => {
    console.log(`the client joins a guild`);
    console.log({guild});
});
```

guildDelete
Emitted whenever a guild is deleted/left.
PARAMETER    TYPE         DESCRIPTION
guild        Guild        The guild that was deleted    
```js
client.guildDelete((guild) => {
    console.log(`the client deleted/left a guild`);
    console.log({guild});
});
```

guildIntegrationsUpdate
Emitted whenever a guild integration is updated
PARAMETER   TYPE    DESCRIPTION
guild       Guild   The guild whose integrations were updated   
```js
client.guildIntegrationsUpdate((guild) => {
    console.log(`a guild integration is updated`);
    console.log({guild});
});
```

guildMemberAdd
Emitted whenever a user joins a guild.
PARAMETER     TYPE               DESCRIPTION
member        GuildMember        The member that has joined a guild    
```js
client.guildMemberAdd((member) => {
    console.log(`a user joins a guild: ${member.tag}`);
});
```

guildMemberAvailable
Emitted whenever a member becomes available in a large guild.
PARAMETER     TYPE               DESCRIPTION
member        GuildMember        The member that became available    
```js
client.guildMemberAvailable((member) => {
    console.log(`member becomes available in a large guild: ${member.tag}`);
});
```

guildMemberRemove
Emitted whenever a member leaves a guild, or is kicked.
PARAMETER     TYPE               DESCRIPTION
member        GuildMember        The member that has left/been kicked from the guild
```js
client.guildMemberRemove((member) => {
    console.log(`a member leaves a guild, or is kicked: ${member.tag}`);
});
```

guildMembersChunk
Emitted whenever a chunk of guild members is received (all members come from the same guild).
PARAMETER      TYPE                      DESCRIPTION
members        Array<GuildMember>        The members in the chunk
guild          Guild                     The guild related to the member chunk    
```js
client.guildMembersChunk((members, guild, chunk) => {
    console.log(`a chunk of guild members is received`);
    console.log({members, guild, chunk});
});
```

guildMemberUpdate
Emitted whenever a guild member changes - i.e. new role, removed role, nickname.
PARAMETER    TYPE               DESCRIPTION
oldMember    GuildMember        The member before the update
newMember    GuildMember        The member after the update    
```js
client.guildMemberUpdate((oldMember, newMember) => {
    console.log(`a guild member changes - i.e. new role, removed role, nickname.`);
    console.log({oldMember, newMember});
});
```

guildScheduledEventCreate
Emitted whenever a guild scheduled event is created.
PARAMETER             TYPE                  DESCRIPTION
guildScheduledEvent   GuildScheduledEvent   The created guild scheduled event   
```js
client.guildScheduledEventCreate((guildScheduledEvent) => {
    console.log(`guild scheduled event is created.`);
    console.log({guildScheduledEvent});
});
```

guildScheduledEventDelete
Emitted whenever a guild scheduled event is deleted.
PARAMETER             TYPE                  DESCRIPTION
guildScheduledEvent   GuildScheduledEvent   The deleted guild scheduled event   
```js
client.guildScheduledEventDelete((guildScheduledEvent) => {
    console.log(`a guild scheduled event is deleted`);
    console.log({guildScheduledEvent});
});
```

guildScheduledEventUpdate
Emitted whenever a guild scheduled event gets updated.
PARAMETER                TYPE                   DESCRIPTION
oldGuildScheduledEvent   ?GuildScheduledEvent   The guild scheduled event object before the update
newGuildScheduledEvent   GuildScheduledEvent    The guild scheduled event object after the update  
```js
client.guildScheduledEventUpdate((oldGuildScheduledEvent, newGuildScheduledEvent) => {
    console.log(`guild scheduled event has been updated`);
    console.log({oldGuildScheduledEvent, newGuildScheduledEvent});
});
```

guildScheduledEventUserAdd
Emitted whenever a user subscribes to a guild scheduled event
PARAMETER             TYPE                  DESCRIPTION
guildScheduledEvent   GuildScheduledEvent   The guild scheduled event
user                  User                  The user who subscribed  
```js
client.guildScheduledEventUserAdd((guildScheduledEvent, user) => {
    console.log(`a user subscribed to a guild scheduled event`);
    console.log({guildScheduledEvent, user});
});
```

guildScheduledEventUserRemove
Emitted whenever a user unsubscribes from a guild scheduled event
PARAMETER             TYPE                  DESCRIPTION
guildScheduledEvent   GuildScheduledEvent   The guild scheduled event
user                  User                  The user who unsubscribed  
```js
client.guildScheduledEventUserRemove((guildScheduledEvent, user) => {
    console.log(`a user unsubscribed from a guild scheduled event`);
    console.log({guildScheduledEvent, user});
});
```

guildUnavailable
Emitted whenever a guild becomes unavailable, likely due to a server outage.
PARAMETER    TYPE          DESCRIPTION
guild        Guild         The guild that has become unavailable    
```js
client.guildUnavailable((guild) => {
    console.error(`a guild becomes unavailable, likely due to a server outage: ${guild}`);
});
```

guildUpdate
Emitted whenever a guild is updated - e.g. name change.
PARAMETER     TYPE      DESCRIPTION
oldGuild      Guild     The guild before the update
newGuild      Guild     The guild after the update    
```js
client.guildUpdate((oldGuild, newGuild) => {
    console.log(`a guild is updated`);
});
```

interaction
DEPRECATED - Use interactionCreate instead 

interactionCreate
Emitted when an interaction is created.
PARAMETER     TYPE          DESCRIPTION
interaction   Interaction   The interaction which was created  
```js
client.interactionCreate((interaction) => {
    console.log(`an interaction has been created`);
    console.log({interaction});
});
```

invalidated
Emitted when the client's session becomes invalidated. 
NOTICE: You are expected to handle closing the process gracefully and preventing a boot loop if you are listening to this event. 
so, I'm not putting in an example because you really shouldn't be rolling your own graceful shutdown unless you are silly like me. 

invalidRequestWarning
Emitted periodically when the process sends invalid requests to let users avoid the 10k invalid requests in 10 minutes threshold that causes a ban
PARAMETER                   TYPE                        DESCRIPTION
invalidRequestWarningData   InvalidRequestWarningData   Object containing the invalid request info  
```js
client.invalidRequestWarning((invalidRequestWarningData) => {
    console.error(`invalid requests have been noticed and may lead to a ban!`);
    console.error({invalidRequestWarningData});
});
```

inviteCreate
Emitted when an invite is created.
Permissions Required: MANAGE_GUILD permissions for the guild, or MANAGE_CHANNELS permissions for the channel.
PARAMETER   TYPE    DESCRIPTION
invite          Invite  The invite that was created  
```js
client.inviteCreate((invite) => {
    console.log(`An invite was created`);
    console.log({invite});
});
```

inviteDelete
Emitted when an invite is deleted. 
Permissions Required: MANAGE_GUILD permissions for the guild, or MANAGE_CHANNELS permissions for the channel.
PARAMETER   TYPE    DESCRIPTION
invite          Invite  The invite that was deleted 
```js
client.inviteDelete((invite) => {
    console.log(`an invite was deleted`);
    console.log({invite});
});
```

message
DEPRECATED - Use messageCreate instead 

messageCreate
Emitted whenever a message is created.
PARAMETER   TYPE      DESCRIPTION
message     Message   The created message 
```js
client.messageCreate((message) => {
    console.log(`a message was created`);
    console.log({message});
});
```

messageDelete
Emitted whenever a message is deleted.
PARAMETER      TYPE           DESCRIPTION
message        Message        The deleted message    
```js
client.messageDelete((message) => {
    console.log(`message is deleted -> ${message}`);
});
```

messageDeleteBulk
Emitted whenever messages are deleted in bulk.
PARAMETER    TYPE                              DESCRIPTION
messages     Collection<Snowflake, Message>    The deleted messages, mapped by their ID    
```js
client.messageDeleteBulk((messages) => {
    console.log(`messages are deleted -> ${messages}`);
});
```

messageReactionAdd
Emitted whenever a reaction is added to a message.
PARAMETER              TYPE                   DESCRIPTION
messageReaction        MessageReaction        The reaction object
user                   User                   The user that applied the emoji or reaction emoji     
```js
client.messageReactionAdd((messageReaction, user) => {
    console.log(`a reaction is added to a message`);
});
```

messageReactionRemove
Emitted whenever a reaction is removed from a message.
PARAMETER              TYPE                   DESCRIPTION
messageReaction        MessageReaction        The reaction object
user                   User                   The user that removed the emoji or reaction emoji     
```js
client.messageReactionRemove((messageReaction, user) => {
    console.log(`a reaction is removed from a message`);
});
```

messageReactionRemoveAll
Emitted whenever all reactions are removed from a message.
PARAMETER          TYPE           DESCRIPTION
message            Message        The message the reactions were removed from    
```js
client.messageReactionRemoveAll((message) => {
    console.log(`all reactions are removed from a message`);
});
```

messageReactionRemoveEmoji
Emitted when a bot removes an emoji reaction from a cached message.
PARAMETER   TYPE              DESCRIPTION
reaction    MessageReaction   The reaction that was removed 
```js
client.messageReactionRemoveEmoji((reaction) => {
    console.log(`A reaction emoji was removed`);
    console.log({reaction});
});
```

messageUpdate
Emitted whenever a message is updated - e.g. embed or content change.
PARAMETER     TYPE           DESCRIPTION
oldMessage    Message        The message before the update
newMessage    Message        The message after the update    
```js
client.messageUpdate((oldMessage, newMessage) => {
    console.log(`a message is updated`);
});
```

presenceUpdate
Emitted whenever a guild member's presence changes, or they change one of their details.
PARAMETER    TYPE               DESCRIPTION
oldMember    GuildMember        The member before the presence update
newMember    GuildMember        The member after the presence update    
```js
client.presenceUpdate((oldMember, newMember) => {
    console.log(`a guild member's presence changes`);
});
```

rateLimit
Emitted when the client hits a rate limit while making a request
PARAMETER       TYPE            DESCRIPTION
rateLimitData   RateLimitData   Object containing the rate limit info   
```js
client.rateLimit((rateLimitData) => {
    console.log(`the rate limit has been hit!  Slow'r down a tad.`);
    console.log({rateLimitData});
});
```

ready
Emitted when the client becomes ready to start working.    
```js
client.ready(() => {
	console.log(`I am ready! Logged in as ${client.user.tag}!`);
});
```

roleCreate
Emitted whenever a role is created.
PARAMETER    TYPE        DESCRIPTION
role         Role        The role that was created    
```js
client.roleCreate((role) => {
    console.log(`a role is created`);
});
```

roleDelete
Emitted whenever a guild role is deleted.
PARAMETER    TYPE        DESCRIPTION
role         Role        The role that was deleted    
```js
client.roleDelete((role) => {
    console.log(`a guild role is deleted`);
});
```

roleUpdate
Emitted whenever a guild role is updated.
PARAMETER      TYPE        DESCRIPTION
oldRole        Role        The role before the update
newRole        Role        The role after the update    
```js
client.roleUpdate((oldRole, newRole) => {
    console.log(`a guild role is updated`);
});
```

shardDisconnect
Emitted when a shard's WebSocket disconnects and will no longer reconnect.
PARAMETER   TYPE         DESCRIPTION
event       CloseEvent   The WebSocket close event
id          number       The shard id that disconnected 
```js
client.shardDisconnect((event, id) => {
    console.log(`shard with id ${id} has disconnected`);
    console.log({event, id});
});
```

shardError
Emitted whenever a shard's WebSocket encounters a connection error.
PARAMETER   TYPE    DESCRIPTION
error       Error   The encountered error
shardId     number  The shard that encountered this error   
```js
client.shardError((error, shardId) => {
    console.error(`a shard encountered a connection error`);
    console.error({error, shardId});
});
```

shardReady
Emitted when a shard turns ready.
PARAMETER            TYPE               DESCRIPTION
id                   number             The shard id that turned ready
unavailableGuilds    ?Set <Snowflake>   Set of unavailable guild ids, if any  
```js
client.shardReady((id, unavailableGuilds) => {
    console.log(`a shard turned ready`);
    console.log({id, unavailableGuilds});
});
```

shardReconnecting
Emitted when a shard is attempting to reconnect or re-identify.
PARAMETER   TYPE     DESCRIPTION
id          number   The shard id that is attempting to reconnect   
```js
client.shardReconnecting((id) => {
    console.log(`a shard with id ${id} is attempting to reconnect or re-identify`);
    console.log({id});
});
```

shardResume
Emitted when a shard resumes successfully.
PARAMETER        TYPE     DESCRIPTION
id               number   The shard id that resumed
replayedEvents   number   The amount of replayed events   
```js
client.shardResume((id, replayedEvents) => {
    console.log(`a shard resumes successfully`);
    console.log({id, replayedEvents});
});
```

stageInstanceCreate
Emitted whenever a stage instance is created.
PARAMETER       TYPE            DESCRIPTION
stageInstance   StageInstance   The created stage instance  
```js
client.stageInstanceCreate((stageInstance) => {
    console.log(`a stage instance was created`);
    console.log({stageInstance});
});
```

stageInstanceDelete
Emitted whenever a stage instance is deleted.
PARAMETER       TYPE            DESCRIPTION
stageInstance   StageInstance   The deleted stage instance   
```js
client.stageInstanceDelete((stageInstance) => {
    console.log(`a stage instance is deleted`);
    console.log({stageInstance});
});
```

stageInstanceUpdate
Emitted whenever a stage instance gets updated - e.g. change in topic or privacy level
PARAMETER          TYPE             DESCRIPTION
oldStageInstance   ?StageInstance   The stage instance before the update
newStageInstance   StageInstance    The stage instance after the update     
```js
client.stageInstanceUpdate((oldStageInstance, newStageInstance) => {
    console.log(`stage instance has changed in topic or privacy level`);
    console.log({oldStageInstance, newStageInstance});
});
```

stickerCreate
Emitted whenever a custom sticker is created in a guild.
PARAMETER   TYPE      DESCRIPTION
sticker     Sticker   The sticker that was created  
```js
client.stickerCreate((sticker) => {
    console.log(`a custom sticker is created`);
    console.log({sticker});
});
```

stickerDelete
Emitted whenever a custom sticker is deleted in a guild.
PARAMETER   TYPE      DESCRIPTION
sticker     Sticker   The sticker that was deleted  
```js
client.stickerDelete((sticker) => {
    console.log(`a custom sticker is deleted`);
    console.log({sticker});
});
```

stickerUpdate
Emitted whenever a custom sticker is updated in a guild.
PARAMETER    TYPE      DESCRIPTION
oldSticker   Sticker   The old sticker
newSticker   Sticker   The new sticker   
```js
client.stickerUpdate((oldSticker, newSticker) => {
    console.log(`a custom sticker is updated`);
    console.log({oldSticker, newSticker});
});
```

threadCreate
Emitted whenever a thread is created or when the client user is added to a thread.
PARAMETER      TYPE            DESCRIPTION
thread         ThreadChannel   The thread that was created
newlyCreated   boolean         Whether the thread was newly created  
```js
client.threadCreate((thread, newlyCreated) => {
    console.log(`a thread has been created or the client user is added to an existing thread.`);
    console.log({thread, newlyCreated});
});
```

threadDelete
Emitted whenever a thread is deleted.
PARAMETER   TYPE            DESCRIPTION
thread      ThreadChannel   The thread that was deleted     
```js
client.threadDelete((thread) => {
    console.log(`a thread was deleted`);
    console.log({thread});
});
```

threadListSync
Emitted whenever the client user gains access to a text or news channel that contains threads
PARAMETER   TYPE                                    DESCRIPTION
threads     Collection <Snowflake, ThreadChannel>   The threads that were synced 
```js
client.threadListSync((threads) => {
    console.log(`the client user gains access to a text or news channel that contains threads`);
    console.log({threads});
});
```

threadMembersUpdate
Emitted whenever members are added or removed from a thread. 
Permissions Required: GUILD_MEMBERS privileged intent
PARAMETER    TYPE                                   DESCRIPTION
oldMembers   Collection <Snowflake, ThreadMember>   The members before the update
newMembers   Collection <Snowflake, ThreadMember>   The members after the update    
```js
client.threadMembersUpdate((oldMembers, newMembers) => {
    console.log(`members are added or removed from a thread`);
    console.log({oldMembers, newMembers});
});
```

threadMemberUpdate
Emitted whenever the client user's thread member is updated.
PARAMETER   TYPE           DESCRIPTION
oldMember   ThreadMember   The member before the update
newMember   ThreadMember   The member after the update      
```js
client.threadMemberUpdate((oldMember, newMember) => {
    console.log(`the client user's thread member is updated`);
    console.log({oldMember, newMember});
});
```

threadUpdate
Emitted whenever a thread is updated - e.g. name change, archive state change, locked state change.
PARAMETER   TYPE            DESCRIPTION
oldThread   ThreadChannel   The thread before the update
newThread   ThreadChannel   The thread after the update     
```js
client.threadUpdate((oldThread, newThread) => {
    console.log(`thread is updated - e.g. name change, archive state change, locked state change.`);
    console.log({oldThread, newThread});
});
```

typingStart
Emitted whenever a user starts typing in a channel.
PARAMETER      TYPE            DESCRIPTION
channel        Channel         The channel the user started typing in
user           User            The user that started typing    
```js
client.typingStart((channel, user) => {
    console.log(`${user.tag} has started typing`);
});
```

userUpdate
Emitted whenever a user's details (e.g. username) are changed.
PARAMETER      TYPE        DESCRIPTION
oldUser        User        The user before the update
newUser        User        The user after the update    
```js
client.userUpdate((oldUser, newUser) => {
    console.log(`user's details (e.g. username) are changed`);
});
```

voiceStateUpdate
Emitted whenever a user changes voice state - e.g. joins/leaves a channel, mutes/unmutes.
PARAMETER    TYPE             DESCRIPTION
oldMember    GuildMember      The member before the voice state update
newMember    GuildMember      The member after the voice state update    
```js
client.voiceStateUpdate((oldMember, newMember) => {
    console.log(`a user changes voice state`);
});
```

warn
Emitted for general warnings. 
PARAMETER    TYPE       DESCRIPTION
info         string     The warning   
```js
client.warn((info) => {
    console.warn(`a general warning has been emitted`);
    console.warn({info});
});
```

webhookUpdate
Emitted whenever a channel has its webhooks changed.
PARAMETER   TYPE           DESCRIPTION
channel     TextChannel    The channel that had a webhook update
            NewsChannel
            VoiceChannel        
```js
client.webhookUpdate((channel) => {
    console.warn(`a channel's webhooks have changed`);
    console.warn({channel});
});
```