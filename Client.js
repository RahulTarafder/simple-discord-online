const { 
  ActionRowBuilder,
  ActivityOptions,
  ActivityType,
  ApplicationCommandManager,
  ApplicationCommandOptionType,
  ApplicationCommandType,
  Attachment,
  AttachmentBuilder,
  AttachmentPayload,
  AuditLogEvent,
  AutoModerationActionExecution,
  AutoModerationActionMetadata,
  AutoModerationRuleTriggerMetadata,
  AutoModerationRuleTriggerType,
  Awaitable,
  Base,
  BaseApplicationCommandData,
  BaseGuild,
  BaseGuildEmojiManager,
  BaseGuildTextChannel,
  BaseGuildVoiceChannel,
  BaseMessageComponent,
  BitField,
  ButtonBuilder,
  ButtonInteraction,
  ButtonStyle,
  CacheType,
  CacheWithLimitsOptions,
  CategoryChannel,
  Channel,
  ChannelFlags,
  ChannelManager,
  ChannelType,
  Client,
  ChatInputApplicationCommandData,
  ClientApplication,
  ClientEvents,
  ClientOptions,
  ClientPresence,
  ClientUser,
  Collection,
  ColorResolvable,
  Color,
  CommandInteraction,
  CommandInteractionOptionResolver,
  ComponentType,
  ContextMenuCommandInteraction,
  ContextMenuInteraction,
  DataResolver,
  DataStore,
  DMChannel,
  Embed,
  EmbedBuilder,
  Emoji,
  EmojiIdentifierResolvable,
  EmojiManager,
  ErrorCodes,
  Events,
  FetchOptions,
  FileOptions,
  ForumChannel,
  GatewayIntents,
  Guild,
  GuildApplicationCommandManager,
  GuildAuditLogs,
  GuildAuditLogsEntry,
  GuildBan,
  GuildBanManager,
  GuildChannel,
  GuildChannelManager,
  GuildChannelResolvable,
  GuildEmoji,
  GuildEmojiManager,
  GuildFeature,
  GuildIntegration,
  GuildInviteManager,
  GuildManager,
  GuildMember,
  GuildMemberManager,
  GuildMemberResolvable,
  GuildPreview,
  GuildScheduledEvent,
  GuildScheduledEventManager,
  GuildScheduledEventUser,
  GuildSticker,
  GuildStickerManager,
  GatewayIntentBits,
  HTTPError,
  Interaction,
  InteractionCollector,
  InteractionDeferOptions,
  InteractionReplyOptions,
  InteractionType,
  IntentsBitField,
  Invite,
  InviteManager,
  LimitedCollection,
  LocalizationMap,
  Message,
  MessageAdditions,
  MessageAttachment,
  MessageButton,
  MessageCollector,
  MessageComponentInteraction,
  MessageCreateOptions,
  MessageEditOptions,
  MessageEmbed,
  MessageFlags,
  MessageManager,
  MessageMentions,
  MessageOptions,
  MessagePayload,
  MessageReaction,
  MessageReactionResolvable,
  MessageSelectMenu,
  MessageSelectOption,
  MessageTarget,
  MessageType,
  ModalBuilder,
  ModalSubmitInteraction,
  ModalSubmitFields,
  MultipartData,
  NewsChannel,
  Options,
  PartialTypes,
  Partials,
  PermissionFlagsBits,
  PermissionOverwriteManager,
  PermissionOverwrites,
  Permissions,
  PermissionsBitField,
  Presence,
  PresenceManager,
  ReactionCollector,
  ReactionEmoji,
  ReactionManager,
  ReactionUserManager,
  Resolvable,
  Role,
  RoleManager,
  RoleResolvable,
  SelectMenuBuilder,
  SelectMenuInteraction,
  SelectMenuOptionBuilder,
  Shard,
  ShardClientUtil,
  ShardEvents,
  ShardManager,
  Snowflake,
  StageChannel,
  StageInstance,
  StageInstanceManager,
  Sticker,
  StickerManager,
  StickerPack,
  StickerResolvable,
  Sweepers,
  SystemChannelFlags,
  SystemChannelFlagsBitField,
  Team,
  TeamMember,
  TextChannel,
  ThreadChannel,
  ThreadChannelManager,
  ThreadChannelResolvable,
  ThreadManager,
  ThreadMember,
  ThreadMemberManager,
  ThreadMemberResolvable,
  Typing,
  User,
  UserContextMenuCommandData,
  UserFlags,
  UserFlagsBitField,
  UserManager,
  UserResolvable,
  Util,
  ValidationError,
  VerificationLevel,
  VoiceChannel,
  VoiceRegion,
  VoiceState,
  VoiceStateManager,
  Webhook,
  WebhookClient,
  WebhookMessageOptions,
  WebhookToken
} = require('discord.js');


class BOT extends Client {
  constructor() {
    super({
      partials: [
        Partials.Channel,
        Partials.GuildMember,
        Partials.Message,
        Partials.User,
      ],
      intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.GuildVoiceStates,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.GuildMembers,
      ],
      shards: "auto",
      failIfNotExists: false,
      allowedMentions: {
        parse: ["everyone", "roles", "users"],
        users: [],
        roles: [],
        repliedUser: false,
      },
    });
  }
  
  // events
   
  // apiRequest
/* Emitted before every API request. This event can emit several times for the same request, e.g. when hitting a rate limit.
PARAMETER    TYPE        DESCRIPTION
request      APIRequest     The request that is about to be sent    */
apiRequest(code) { 
  this.on("apiRequest", async (request) => {code(apiRequest)})
};

// apiResponse
/* Emitted after every API request has received a response. This event does not necessarily correlate to completion of the request, e.g. when hitting a rate limit.
PARAMETER    TYPE        DESCRIPTION
request      APIRequest     The request that is about to be sent    */
apiResponse(code) { 
  this.on("apiResponse", async (response) => {code(response)})
};

// the previous, apiRequest and apiResponse, are informational events that are emitted quite frequently, it is highly recommended to check request.path to filter the data.

// channelCreate
/* Emitted whenever a channel is created.
PARAMETER    TYPE        DESCRIPTION
channel      Channel     The channel that was created    */
channelCreate(code) {
this.on("channelCreate", async (channel) => {code(channel)});
};

// channelDelete
/* Emitted whenever a channel is deleted.
PARAMETER   TYPE      DESCRIPTION
channel     Channel   The channel that was deleted    */
channelDelete(code) {
this.on("channelDelete", async (channel) => {code(channel)});
};

// channelPinsUpdate
/* Emitted whenever the pins of a channel are updated. Due to the nature of the WebSocket event, not much information can be provided easily here - you need to manually check the pins yourself.
PARAMETER    TYPE         DESCRIPTION
channel      Channel      The channel that the pins update occurred in
time         Date         The time of the pins update    */
channelPinsUpdate(code) {
this.on("channelPinsUpdate", async (channel, time) => {code(channel, time)});
};

// channelUpdate
/* Emitted whenever a channel is updated - e.g. name change, topic change.
PARAMETER        TYPE        DESCRIPTION
oldChannel       Channel     The channel before the update
newChannel       Channel     The channel after the update    */
channelUpdate(code) {
this.on("channelUpdate", async (oldChannel, newChannel) => {code(oldChannel, newChannel)});
};

// debug
/* Emitted for general debugging information.
PARAMETER    TYPE         DESCRIPTION
info         string       The debug information    */
debug(code) {
this.on("debug", async (info) => {code(info)});
};

// emojiCreate
/* Emitted whenever a custom emoji is created in a guild.
PARAMETER    TYPE          DESCRIPTION
emoji        Emoji         The emoji that was created    */
emojiCreate(code) {
this.on("emojiCreate", async (emoji) => {code(emoji)});
};

// emojiDelete
/* Emitted whenever a custom guild emoji is deleted.
PARAMETER    TYPE         DESCRIPTION
emoji        Emoji        The emoji that was deleted    */
emojiDelete(code) {
this.on("emojiDelete", async (emoji) => {code(emoji)});
};

// emojiUpdate
/* Emitted whenever a custom guild emoji is updated.
PARAMETER    TYPE       DESCRIPTION
oldEmoji     Emoji      The old emoji
newEmoji     Emoji      The new emoji    */
emojiUpdate(code) {
this.on("emojiUpdate", async (oldEmoji, newEmoji) => {code(oldEmoji, newEmoji)});
};

// error
/* Emitted whenever the client's WebSocket encounters a connection error.
PARAMETER    TYPE     DESCRIPTION
error        Error    The encountered error    */
error(code) {
this.on("error", async (error) => {code(error)});
};

// guildBanAdd
/* Emitted whenever a member is banned from a guild.
PARAMETER    TYPE          DESCRIPTION
guild        Guild         The guild that the ban occurred in
user         User          The user that was banned    */
guildBanAdd(code) {
this.on("guildBanAdd", async (guild, user) => {code(guild, user)});
};

// guildBanRemove
/* Emitted whenever a member is unbanned from a guild.
PARAMETER    TYPE         DESCRIPTION
guild        Guild        The guild that the unban occurred in
user         User         The user that was unbanned    */
guildBanRemove(code) {
this.on("guildBanRemove", async (guild, user) => {code(guild, user)});
};

// guildCreate
/* Emitted whenever the client joins a guild.
PARAMETER    TYPE         DESCRIPTION
guild        Guild        The created guild    */
guildCreate(code) {
this.on("guildCreate", async (guild) => {code(guild)});
};

// guildDelete
/* Emitted whenever a guild is deleted/left.
PARAMETER    TYPE         DESCRIPTION
guild        Guild        The guild that was deleted    */
guildDelete(code) {
this.on("guildDelete", async (guild) => {code(guild)});
};

// guildIntegrationsUpdate
/* Emitted whenever a guild integration is updated
PARAMETER   TYPE    DESCRIPTION
guild       Guild   The guild whose integrations were updated   */
guildIntegrationsUpdate(code) {
this.on("guildIntegrationsUpdate", async (guild) => {code(guild)});
};

// guildMemberAdd
/* Emitted whenever a user joins a guild.
PARAMETER     TYPE               DESCRIPTION
member        GuildMember        The member that has joined a guild    */
guildMemberAdd(code) {
this.on("guildMemberAdd", async (member) => {code(member)});
};

// guildMemberAvailable
/* Emitted whenever a member becomes available in a large guild.
PARAMETER     TYPE               DESCRIPTION
member        GuildMember        The member that became available    */
guildMemberAvailable(code) {
this.on("guildMemberAvailable", async (member) => {code(member)});
};

// guildMemberRemove
/* Emitted whenever a member leaves a guild, or is kicked.
PARAMETER     TYPE               DESCRIPTION
member        GuildMember        The member that has left/been kicked from the guild    */
guildMemberRemove(code) {
this.on("guildMemberRemove", async (member) => {code(member)});
};

// guildMembersChunk
/* Emitted whenever a chunk of guild members is received (all members come from the same guild).
PARAMETER      TYPE                      DESCRIPTION
members        Array<GuildMember>        The members in the chunk
guild          Guild                     The guild related to the member chunk    */
guildMembersChunk(code) {
this.on("guildMembersChunk", async (members, guild, chunk) => {code(members, guild, chunk)});
};

// guildMemberUpdate
/* Emitted whenever a guild member changes - i.e. new role, removed role, nickname.
PARAMETER    TYPE               DESCRIPTION
oldMember    GuildMember        The member before the update
newMember    GuildMember        The member after the update    */
guildMemberUpdate(code) {
this.on("guildMemberUpdate", async (oldMember, newMember) => {code(oldMember, newMember)});
};

// guildScheduledEventCreate
/* Emitted whenever a guild scheduled event is created.
PARAMETER             TYPE                  DESCRIPTION
guildScheduledEvent   GuildScheduledEvent   The created guild scheduled event   */
guildScheduledEventCreate(code) {
this.on("guildScheduledEventCreate", async (guildScheduledEvent) => {code(guildScheduledEvent)});
};

// guildScheduledEventDelete
/* Emitted whenever a guild scheduled event is deleted.
PARAMETER             TYPE                  DESCRIPTION
guildScheduledEvent   GuildScheduledEvent   The deleted guild scheduled event   */
guildScheduledEventDelete(code) {
this.on("guildScheduledEventDelete", async (guildScheduledEvent) => {code(guildScheduledEvent)});
};

// guildScheduledEventUpdate
/* Emitted whenever a guild scheduled event gets updated.
PARAMETER                TYPE                   DESCRIPTION
oldGuildScheduledEvent   ?GuildScheduledEvent   The guild scheduled event object before the update
newGuildScheduledEvent   GuildScheduledEvent    The guild scheduled event object after the update  */
guildScheduledEventUpdate(code) {
this.on("guildScheduledEventUpdate", async (oldGuildScheduledEvent, newGuildScheduledEvent) => {code(oldGuildScheduledEvent, newGuildScheduledEvent)});
};

// guildScheduledEventUserAdd
/* Emitted whenever a user subscribes to a guild scheduled event
PARAMETER             TYPE                  DESCRIPTION
guildScheduledEvent   GuildScheduledEvent   The guild scheduled event
user                  User                  The user who subscribed */ 
guildScheduledEventUserAdd(code) {
this.on("guildScheduledEventUserAdd", async (guildScheduledEvent, user) => {code(guildScheduledEvent, user)});
};

// guildScheduledEventUserRemove
/* Emitted whenever a user unsubscribes from a guild scheduled event
PARAMETER             TYPE                  DESCRIPTION
guildScheduledEvent   GuildScheduledEvent   The guild scheduled event
user                  User                  The user who unsubscribed */ 
guildScheduledEventUserRemove(code) {
this.on("guildScheduledEventUserRemove", async (guildScheduledEvent, user) => {code(guildScheduledEvent, user)});
};

// guildUnavailable
/* Emitted whenever a guild becomes unavailable, likely due to a server outage.
PARAMETER    TYPE          DESCRIPTION
guild        Guild         The guild that has become unavailable    */
guildUnavailable(code) {
this.on("guildUnavailable", async (guild) => {code(guild)});
};

// guildUpdate
/* Emitted whenever a guild is updated - e.g. name change.
PARAMETER     TYPE      DESCRIPTION
oldGuild      Guild     The guild before the update
newGuild      Guild     The guild after the update    */
guildUpdate(code) {
this.on("guildUpdate", async (oldGuild, newGuild) => {code(oldGuild, newGuild)});
};

// interaction
/* DEPRECATED - Use interactionCreate instead */

// interactionCreate
/* Emitted when an interaction is created.
PARAMETER     TYPE          DESCRIPTION
interaction   Interaction   The interaction which was created  */
interactionCreate(code) {
this.on("interactionCreate", async (interaction) => {code(interaction)});
}

// invalidated
/* Emitted when the client's session becomes invalidated. 
NOTICE: You are expected to handle closing the process gracefully and preventing a boot loop if you are listening to this event. 
so, I'm not putting in an example because you really shouldn't be rolling your own graceful shutdown unless you are silly like me. */

// invalidRequestWarning
/* Emitted periodically when the process sends invalid requests to let users avoid the 10k invalid requests in 10 minutes threshold that causes a ban
PARAMETER                   TYPE                        DESCRIPTION
invalidRequestWarningData   InvalidRequestWarningData   Object containing the invalid request info  */
invalidRequestWarning(code) {
this.on("invalidRequestWarning", async (invalidRequestWarningData) => {code(invalidRequestWarningData)});
};

// inviteCreate
/* Emitted when an invite is created.
Permissions Required: MANAGE_GUILD permissions for the guild, or MANAGE_CHANNELS permissions for the channel.
PARAMETER   TYPE    DESCRIPTION
invite          Invite  The invite that was created  */
inviteCreate(code) {
this.on("inviteCreate", async (invite) => {code(invite)});
};

// inviteDelete
/* Emitted when an invite is deleted. 
Permissions Required: MANAGE_GUILD permissions for the guild, or MANAGE_CHANNELS permissions for the channel.
PARAMETER   TYPE    DESCRIPTION
invite          Invite  The invite that was deleted */
inviteDelete(code) {
this.on("inviteDelete", async (invite) => {code(invite)});
};

// message
/* DEPRECATED - Use messageCreate instead */

// messageCreate
/* Emitted whenever a message is created.
PARAMETER   TYPE      DESCRIPTION
message     Message   The created message */
messageCreate(code) {
this.on("messageCreate", async (message) => {code(message)});
};

// messageDelete
/* Emitted whenever a message is deleted.
PARAMETER      TYPE           DESCRIPTION
message        Message        The deleted message    */
messageDelete(code) {
this.on("messageDelete", async (message) => {code(message)});
};

// messageDeleteBulk
/* Emitted whenever messages are deleted in bulk.
PARAMETER    TYPE                              DESCRIPTION
messages     Collection<Snowflake, Message>    The deleted messages, mapped by their ID    */
messageDeleteBulk(code) {
this.on("messageDeleteBulk", async (messages) => {code(messages)});
};

// messageReactionAdd
/* Emitted whenever a reaction is added to a message.
PARAMETER              TYPE                   DESCRIPTION
messageReaction        MessageReaction        The reaction object
user                   User                   The user that applied the emoji or reaction emoji     */
messageReactionAdd(code) {
this.on("messageReactionAdd", async (messageReaction, user) => {code(messageReaction, user)});
}

// messageReactionRemove
/* Emitted whenever a reaction is removed from a message.
PARAMETER              TYPE                   DESCRIPTION
messageReaction        MessageReaction        The reaction object
user                   User                   The user that removed the emoji or reaction emoji     */
messageReactionRemove(code) {
this.on("messageReactionRemove", async (messageReaction, user) => {code(messageReaction, user)});
};

// messageReactionRemoveAll
/* Emitted whenever all reactions are removed from a message.
PARAMETER          TYPE           DESCRIPTION
message            Message        The message the reactions were removed from    */
messageReactionRemoveAll(code) {
this.on("messageReactionRemoveAll", async (message) => {code(message)});
};

// messageReactionRemoveEmoji
/* Emitted when a bot removes an emoji reaction from a cached message.
PARAMETER   TYPE              DESCRIPTION
reaction    MessageReaction   The reaction that was removed */
messageReactionRemoveEmoji(code) {
this.on("messageReactionRemoveEmoji", async (reaction) => {code(reaction)});
};

// messageUpdate
/* Emitted whenever a message is updated - e.g. embed or content change.
PARAMETER     TYPE           DESCRIPTION
oldMessage    Message        The message before the update
newMessage    Message        The message after the update    */
messageUpdate(code) {
this.on("messageUpdate", async (oldMessage, newMessage) => {code(oldMessage, newMessage)});
};

// presenceUpdate
/* Emitted whenever a guild member's presence changes, or they change one of their details.
PARAMETER    TYPE               DESCRIPTION
oldMember    GuildMember        The member before the presence update
newMember    GuildMember        The member after the presence update    */
presenceUpdate(code) {
this.on("presenceUpdate", async (oldMember, newMember) => {code(oldMember, newMember)});
};

// rateLimit
/* Emitted when the client hits a rate limit while making a request
PARAMETER       TYPE            DESCRIPTION
rateLimitData   RateLimitData   Object containing the rate limit info   */
rateLimit(code) {
this.on("rateLimit", async (rateLimitData) => {code(rateLimitData)});
}

// ready
/* Emitted when the client becomes ready to start working.    */
ready(code) {
this.on("ready", async (client) => {code(client)});
};

// roleCreate
/* Emitted whenever a role is created.
PARAMETER    TYPE        DESCRIPTION
role         Role        The role that was created    */
roleCreate(code) {
this.on("roleCreate", async (role) => {code(role)});
};

// roleDelete
/* Emitted whenever a guild role is deleted.
PARAMETER    TYPE        DESCRIPTION
role         Role        The role that was deleted    */
roleDelete(code) {
this.on("roleDelete", async (role) => {code(role)});
};

// roleUpdate
/* Emitted whenever a guild role is updated.
PARAMETER      TYPE        DESCRIPTION
oldRole        Role        The role before the update
newRole        Role        The role after the update    */
roleUpdate(code) {
this.on("roleUpdate", async (oldRole, newRole) => {code(oldRole, newRole)});
};

// shardDisconnect
/* Emitted when a shard's WebSocket disconnects and will no longer reconnect.
PARAMETER   TYPE         DESCRIPTION
event       CloseEvent   The WebSocket close event
id          number       The shard id that disconnected */
shardDisconnect(code) {
this.on("shardDisconnect", async (event, id) => {code(event, id)});
};

// shardError
/* Emitted whenever a shard's WebSocket encounters a connection error.
PARAMETER   TYPE    DESCRIPTION
error       Error   The encountered error
shardId     number  The shard that encountered this error   */
shardError(code) {
this.on("shardError", async (error, shardId) => {code(error, shardId)});
};

// shardReady
/* Emitted when a shard turns ready.
PARAMETER            TYPE               DESCRIPTION
id                   number             The shard id that turned ready
unavailableGuilds    ?Set <Snowflake>   Set of unavailable guild ids, if any  */
shardReady(code) {
this.on("shardReady", async (id, unavailableGuilds) => {code(id, unavailableGuilds)});
};

// shardReconnecting
/* Emitted when a shard is attempting to reconnect or re-identify.
PARAMETER   TYPE     DESCRIPTION
id          number   The shard id that is attempting to reconnect   */
shardReconnecting(code) {
this.on("shardReconnecting", async (id) => {code(id)});
};

// shardResume
/* Emitted when a shard resumes successfully.
PARAMETER        TYPE     DESCRIPTION
id               number   The shard id that resumed
replayedEvents   number   The amount of replayed events   */
shardResume(code) {
this.on("shardResume", async (id, replayedEvents) => {code(id, replayedEvents)});
};

// stageInstanceCreate
/* Emitted whenever a stage instance is created.
PARAMETER       TYPE            DESCRIPTION
stageInstance   StageInstance   The created stage instance  */
stageInstanceCreate(code) {
this.on("stageInstanceCreate", async (stageInstance) => {code(stageInstance)});
};

// stageInstanceDelete
/* Emitted whenever a stage instance is deleted.
PARAMETER       TYPE            DESCRIPTION
stageInstance   StageInstance   The deleted stage instance   */
stageInstanceDelete(code) {
this.on("stageInstanceDelete", async (stageInstance) => {code(stageInstance)});
};

// stageInstanceUpdate
/* Emitted whenever a stage instance gets updated - e.g. change in topic or privacy level
PARAMETER          TYPE             DESCRIPTION
oldStageInstance   ?StageInstance   The stage instance before the update
newStageInstance   StageInstance    The stage instance after the update     */
stageInstanceUpdate(code) {
this.on("stageInstanceUpdate", async (oldStageInstance, newStageInstance) => {code(oldStageInstance, newStageInstance)});
};

// stickerCreate
/* Emitted whenever a custom sticker is created in a guild.
PARAMETER   TYPE      DESCRIPTION
sticker     Sticker   The sticker that was created  */
stickerCreate(code) {
this.on("stickerCreate", async (sticker) => {code(sticker)});
};
// stickerDelete
/* Emitted whenever a custom sticker is deleted in a guild.
PARAMETER   TYPE      DESCRIPTION
sticker     Sticker   The sticker that was deleted  */
stickerDelete(code) {
this.on("stickerDelete", async (sticker) => {code(sticker)});
};

// stickerUpdate
/* Emitted whenever a custom sticker is updated in a guild.
PARAMETER    TYPE      DESCRIPTION
oldSticker   Sticker   The old sticker
newSticker   Sticker   The new sticker      */
stickerUpdate(code) {
this.on("stickerUpdate", async (oldSticker, newSticker) => {code(oldSticker, newSticker)});
};

// threadCreate
/* Emitted whenever a thread is created or when the client user is added to a thread.
PARAMETER      TYPE            DESCRIPTION
thread         ThreadChannel   The thread that was created
newlyCreated   boolean         Whether the thread was newly created  */
threadCreate(code) {
this.on("threadCreate", async (thread, newlyCreated) => {code(thread, newlyCreated)});
};

// threadDelete
/* Emitted whenever a thread is deleted.
PARAMETER   TYPE            DESCRIPTION
thread      ThreadChannel   The thread that was deleted     */
threadDelete(code) {
this.on("threadDelete", async (thread) => {code(thread)});
};

// threadListSync
/* Emitted whenever the client user gains access to a text or news channel that contains threads
PARAMETER   TYPE                                    DESCRIPTION
threads     Collection <Snowflake, ThreadChannel>   The threads that were synced */
threadListSync(code) {
this.on("threadListSync", async (threads) => {code(threads)});
};

// threadMembersUpdate
/* Emitted whenever members are added or removed from a thread. 
Permissions Required: GUILD_MEMBERS privileged intent
PARAMETER    TYPE                                   DESCRIPTION
oldMembers   Collection <Snowflake, ThreadMember>   The members before the update
newMembers   Collection <Snowflake, ThreadMember>   The members after the update    */
threadMembersUpdate(code) {
this.on("threadMembersUpdate", async (oldMembers, newMembers) => {code(oldMembers, newMembers)});
};

// threadMemberUpdate
/* Emitted whenever the client user's thread member is updated.
PARAMETER   TYPE           DESCRIPTION
oldMember   ThreadMember   The member before the update
newMember   ThreadMember   The member after the update      */
threadMemberUpdate(code) {
this.on("threadMemberUpdate", async (oldMember, newMember) => {code(oldMember, newMember)});
}

// threadUpdate
/* Emitted whenever a thread is updated - e.g. name change, archive state change, locked state change.
PARAMETER   TYPE            DESCRIPTION
oldThread   ThreadChannel   The thread before the update
newThread   ThreadChannel   The thread after the update     */
threadUpdate(code) {
this.on("threadUpdate", async (oldThread, newThread) => {code(oldThread, newThread)});
};

// typingStart
/* Emitted whenever a user starts typing in a channel.
PARAMETER      TYPE            DESCRIPTION
channel        Channel         The channel the user started typing in
user           User            The user that started typing    */
typingStart(code) {
this.on("typingStart", async (channel, user) => {code(channel, user)});
};

// userUpdate
/* Emitted whenever a user's details (e.g. username) are changed.
PARAMETER      TYPE        DESCRIPTION
oldUser        User        The user before the update
newUser        User        The user after the update    */
userUpdate(code) {
this.on("userUpdate", async (oldUser, newUser) => {code(oldUser, newUser)});
};

// voiceStateUpdate
/* Emitted whenever a user changes voice state - e.g. joins/leaves a channel, mutes/unmutes.
PARAMETER    TYPE             DESCRIPTION
oldMember    GuildMember      The member before the voice state update
newMember    GuildMember      The member after the voice state update    */
voiceStateUpdate(code) {
this.on("voiceStateUpdate", async (oldMember, newMember) => {code(oldMember, newMember)});
};

// warn
/* Emitted for general warnings. 
PARAMETER    TYPE       DESCRIPTION
info         string     The warning   */
warn(code) {
this.on("warn", async (info) => {code(info)});
};

// webhookUpdate
/* Emitted whenever a channel has its webhooks changed.
PARAMETER   TYPE           DESCRIPTION
channel     TextChannel    The channel that had a webhook update
            NewsChannel
            VoiceChannel        */
webhookUpdate(code) {
this.on("webhookUpdate", async (channel) => {code(channel)});
 };

// embed and button

// Create a new ActionRowBuilder 
/*
The ActionRowBuilder in discord.js is used to create and manage interactive components like buttons, select menus, and text inputs in a message. It organizes these components into a row within a message, allowing for a structured layout. Each action row can hold up to 5 components.
*/
ActionRow(component) {
return new ActionRowBuilder()
.addComponents(component);
};

// Create Button
/*
The ButtonBuilder in discord.js is used to create interactive buttons for messages. It allows customization of button style, label, emoji, and custom ID for interaction handling. Buttons can be added to an ActionRowBuilder to be sent within messages.
*/
Button(buttons) {
buttons.map((button) => {
return new ButtonBuilder()
.setCustomId(button.customId)
.setLabel(button.label)
.setStyle(button.style)
.setDisabled(button.disabled || false)
.setEmoji(button.emoji || null)
.setURL(button.url || null);
    });
};
// create Select Menu
/*
The StringSelectMenuBuilder in discord.js is used to create customizable select menus for messages. It allows for multiple options to be defined with labels, descriptions, and values. Users can interact with the menu to make selections which can then be handled by the bot
*/
SelectMenu(menu) {
menu.map((menu) => {
return new StringSelectMenuBuilder()
.setCustomId(menu.customId)
.setPlaceholder(menu.placeholder)
.addOptions(menu.options);
});
};
// create Menu Options
/*
The StringSelectMenuOptionBuilder in discord.js is a class used to define individual options within a select menu. It allows setting properties like label, value, description, and default selection status. These options are then added to a StringSelectMenuBuilder to create a complete select menu.
*/
MenuOption(options) {
options.map((options) => {
return new StringSelectMenuOptionBuilder()
.setLabel(options.label)
.setDescription(options.dec)
.setValue(options.value)
});
};
// create Embed
/*
The EmbedBuilder in discord.js is a utility class for creating rich message embeds. It provides a fluent interface to set properties like title, description, color, fields, and images. Embeds can enhance message presentation with structured and visually appealing content.
*/
Embed({
title,
description,
url,
color,
timestamp = new Date(),
footerText,
footerIcon,
thumbnail,
image,
authorName,
authorURL,
authorIcon,
fields
}) {
new MessageEmbed()
.setTitle(title)
.setDescription(description)
.setURL(url)
.setColor(color)
.setTimestamp(timestamp)
.setFooter({ text: footerText, iconURL: footerIcon })
.setThumbnail(thumbnail)
.setImage(image)
.setAuthor({ name: authorName, url: authorURL, iconURL: authorIcon })
.addFields(fields);
};
};


module.exports = {
  Client: new BOT, 
  ActionRowBuilder,
  ActivityOptions,
  ActivityType,
  ApplicationCommandManager,
  ApplicationCommandOptionType,
  ApplicationCommandType,
  Attachment,
  AttachmentBuilder,
  AttachmentPayload,
  AuditLogEvent,
  AutoModerationActionExecution,
  AutoModerationActionMetadata,
  AutoModerationRuleTriggerMetadata,
  AutoModerationRuleTriggerType,
  Awaitable,
  Base,
  BaseApplicationCommandData,
  BaseGuild,
  BaseGuildEmojiManager,
  BaseGuildTextChannel,
  BaseGuildVoiceChannel,
  BaseMessageComponent,
  BitField,
  ButtonBuilder,
  ButtonInteraction,
  ButtonStyle,
  Collection,
  CacheType,
  CacheWithLimitsOptions,
  CategoryChannel,
  Channel,
  ChannelFlags,
  ChannelManager,
  ChannelType,
  ChatInputApplicationCommandData,
  ClientApplication,
  ClientEvents,
  ClientOptions,
  ClientPresence,
  ClientUser,
  ColorResolvable,
  Color,
  CommandInteraction,
  CommandInteractionOptionResolver,
  ComponentType,
  ContextMenuCommandInteraction,
  ContextMenuInteraction,
  DataResolver,
  DataStore,
  DMChannel,
  Embed,
  EmbedBuilder,
  Emoji,
  EmojiIdentifierResolvable,
  EmojiManager,
  ErrorCodes,
  Events,
  FetchOptions,
  FileOptions,
  ForumChannel,
  GatewayIntents,
  Guild,
  GuildApplicationCommandManager,
  GuildAuditLogs,
  GuildAuditLogsEntry,
  GuildBan,
  GuildBanManager,
  GuildChannel,
  GuildChannelManager,
  GuildChannelResolvable,
  GuildEmoji,
  GuildEmojiManager,
  GuildFeature,
  GuildIntegration,
  GuildInviteManager,
  GuildManager,
  GuildMember,
  GuildMemberManager,
  GuildMemberResolvable,
  GuildPreview,
  GuildScheduledEvent,
  GuildScheduledEventManager,
  GuildScheduledEventUser,
  GuildSticker,
  GuildStickerManager,
  HTTPError,
  Interaction,
  InteractionCollector,
  InteractionDeferOptions,
  InteractionReplyOptions,
  InteractionType,
  IntentsBitField,
  Invite,
  InviteManager,
  LimitedCollection,
  LocalizationMap,
  Message,
  MessageAdditions,
  MessageAttachment,
  MessageButton,
  MessageCollector,
  MessageComponentInteraction,
  MessageCreateOptions,
  MessageEditOptions,
  MessageEmbed,
  MessageFlags,
  MessageManager,
  MessageMentions,
  MessageOptions,
  MessagePayload,
  MessageReaction,
  MessageReactionResolvable,
  MessageSelectMenu,
  MessageSelectOption,
  MessageTarget,
  MessageType,
  ModalBuilder,
  ModalSubmitInteraction,
  ModalSubmitFields,
  MultipartData,
  NewsChannel,
  Options,
  PartialTypes,
  PermissionFlagsBits,
  PermissionOverwriteManager,
  PermissionOverwrites,
  Permissions,
  PermissionsBitField,
  Presence,
  PresenceManager,
  ReactionCollector,
  ReactionEmoji,
  ReactionManager,
  ReactionUserManager,
  Resolvable,
  Role,
  RoleManager,
  RoleResolvable,
  SelectMenuBuilder,
  SelectMenuInteraction,
  SelectMenuOptionBuilder,
  Shard,
  ShardClientUtil,
  ShardEvents,
  ShardManager,
  Snowflake,
  StageChannel,
  StageInstance,
  StageInstanceManager,
  Sticker,
  StickerManager,
  StickerPack,
  StickerResolvable,
  Sweepers,
  SystemChannelFlags,
  SystemChannelFlagsBitField,
  Team,
  TeamMember,
  TextChannel,
  ThreadChannel,
  ThreadChannelManager,
  ThreadChannelResolvable,
  ThreadManager,
  ThreadMember,
  ThreadMemberManager,
  ThreadMemberResolvable,
  Typing,
  User,
  UserContextMenuCommandData,
  UserFlags,
  UserFlagsBitField,
  UserManager,
  UserResolvable,
  Util,
  ValidationError,
  VerificationLevel,
  VoiceChannel,
  VoiceRegion,
  VoiceState,
  VoiceStateManager,
  Webhook,
  WebhookClient,
  WebhookMessageOptions,
  WebhookToken
};

process.on("unhandledRejection", (reason, p) => {

    console.log(" [Error_Handling] :: Unhandled Rejection/Catch");

    console.log(reason, p);

});



process.on("uncaughtException", (err, origin) => {

    console.log(" [Error_Handling] :: Uncaught Exception/Catch");

    console.log(err, origin);

});



process.on("uncaughtExceptionMonitor", (err, origin) => {

    console.log(" [Error_Handling] :: Uncaught Exception/Catch (MONITOR)");

    console.log(err, origin);

});
