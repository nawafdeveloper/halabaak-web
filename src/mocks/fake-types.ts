export type ChatItemType = {
    chat_id: string;
    chat_type: 'single' | 'group';
    avatar: string;
    last_message_context: string;
    last_message_media: string | null;
    last_message_sender_is_me: boolean;
    last_message_sender_nickname: string;
    is_unreaded_chat: boolean;
    unreaded_messages_length: number;
    is_archived_chat: boolean;
    is_muted_chat_notifications: boolean;
    is_pinned_chat: boolean;
    is_favourite_chat: boolean;
    is_blocked_chat: boolean;
};