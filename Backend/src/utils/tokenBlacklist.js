let blacklistedTokens = [];

export const blacklistToken = (token) => {
    blacklistedTokens.push(token);
};

export const isTokenBlacklisted = (token) => {
    return blacklistedTokens.includes(token);
};
