const FB_STORAGE_USER_AVATAR = 'userAvatar'

const fbStorageUserAvatarPath = uid => {
	return `${FB_STORAGE_USER_AVATAR}/${uid}.jpg`
}

const CREATED_AT = 'createdAt'
const UPDATED_AT = 'updatedAt'

const FB_FS_USER = 'users/'
const FB_FS_SETTINGS = 'settings/'
const fbfsSettingsNotificationPath = uid => {
	return FB_FS_USER + uid + '/' + FB_FS_SETTINGS + 'notifications/'
}

const FB_FS_SETTINGS_NOTIFICATION_EMAIL = 'email'
const FB_FS_SETTINGS_NOTIFICATION_EMAIL_ORDER_UPDATES = 'orderUpdates'
const FB_FS_SETTINGS_NOTIFICATION_EMAIL_NEWS_LETTER = 'newsletter'
const FB_FS_SETTINGS_NOTIFICATION_EMAIL_CHATS = 'chats'
const FB_FS_SETTINGS_NOTIFICATION_EMAIL_COMMENTS = 'comments'
const FB_FS_SETTINGS_NOTIFICATION_PUSH = 'push'
const FB_FS_SETTINGS_NOTIFICATION_PUSH_ORDER_UPDATES = 'orderUpdates'
const FB_FS_SETTINGS_NOTIFICATION_PUSH_CHATS = 'chats'
const FB_FS_SETTINGS_NOTIFICATION_PUSH_COMMENTS = 'comments'

const fbfsSettingsGeneralPath = uid => {
	return FB_FS_USER + uid + '/' + FB_FS_SETTINGS + 'general/'
}

const FB_FS_SETTINGS_GENERAL_DISPLAY_NAME = 'displayName'
const FB_FS_SETTINGS_GENERAL_LANGUAGES = 'languages'
const FB_FS_SETTINGS_GENERAL_USER_AVATAR = FB_STORAGE_USER_AVATAR
const FB_FS_SETTINGS_GENERAL_SHORT_ID = 'shortId'

const FB_FS_SENSHI_BADGES_VERIFIED = 'verified'
const FB_FS_SENSHI_BADGES_FEMALE = 'female'
const FB_FS_SENSHI_BADGES_RISING_STAR = 'risingStar'
const FB_FS_SENSHI_BADGES_ONLINE = 'online'

const FB_FS_CHANNELS_FACEBOOK = 'facebook'
const FB_FS_CHANNELS_TWITCH = 'twitch'
const FB_FS_CHANNELS_YOUTUBE = 'youtube'

const FB_FS_GAMES_DOTA2 = 'Dota2'
const FB_FS_GAMES_PUBG = 'PUBG'
const FB_FS_GAMES_LOL = 'LOL'
const FB_FS_GAMES_APEX = 'Apex'
const FB_FS_GAMES_FORTNITE = 'Fortnite'

export {
	CREATED_AT,
	UPDATED_AT,
	fbStorageUserAvatarPath,
	FB_STORAGE_USER_AVATAR,
	FB_FS_USER,
	FB_FS_SETTINGS,
	fbfsSettingsNotificationPath,
	FB_FS_SETTINGS_NOTIFICATION_EMAIL,
	FB_FS_SETTINGS_NOTIFICATION_EMAIL_ORDER_UPDATES,
	FB_FS_SETTINGS_NOTIFICATION_EMAIL_NEWS_LETTER,
	FB_FS_SETTINGS_NOTIFICATION_EMAIL_CHATS,
	FB_FS_SETTINGS_NOTIFICATION_EMAIL_COMMENTS,
	FB_FS_SETTINGS_NOTIFICATION_PUSH,
	FB_FS_SETTINGS_NOTIFICATION_PUSH_ORDER_UPDATES,
	FB_FS_SETTINGS_NOTIFICATION_PUSH_CHATS,
	FB_FS_SETTINGS_NOTIFICATION_PUSH_COMMENTS,
	fbfsSettingsGeneralPath,
	FB_FS_SETTINGS_GENERAL_DISPLAY_NAME,
	FB_FS_SETTINGS_GENERAL_LANGUAGES,
	FB_FS_SETTINGS_GENERAL_USER_AVATAR,
	FB_FS_SETTINGS_GENERAL_SHORT_ID,
	FB_FS_SENSHI_BADGES_VERIFIED,
	FB_FS_SENSHI_BADGES_FEMALE,
	FB_FS_SENSHI_BADGES_RISING_STAR,
	FB_FS_SENSHI_BADGES_ONLINE,
	FB_FS_CHANNELS_FACEBOOK,
	FB_FS_CHANNELS_TWITCH,
	FB_FS_CHANNELS_YOUTUBE,
	FB_FS_GAMES_DOTA2,
	FB_FS_GAMES_PUBG,
	FB_FS_GAMES_LOL,
	FB_FS_GAMES_APEX,
	FB_FS_GAMES_FORTNITE,
}
