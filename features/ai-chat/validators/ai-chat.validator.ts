export function validateAIChatMessage(message: unknown) {
  if (typeof message !== "string") {
    throw new Error("Message must be a string.");
  }

  const value = message.trim();

  if (!value) {
    throw new Error("Message cannot be empty.");
  }

  if (value.length > 10000) {
    throw new Error("Message exceeds the maximum length.");
  }

  return value;
}

export function validateConversationId(conversationId: unknown) {
  if (conversationId === undefined) {
    return undefined;
  }

  if (typeof conversationId !== "string") {
    throw new Error("Conversation ID must be a string.");
  }

  const value = conversationId.trim();

  if (!value) {
    throw new Error("Conversation ID cannot be empty.");
  }

  return value;
}