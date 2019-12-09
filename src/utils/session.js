const ls = localStorage;
const SESSION_KEY = 'session';
const userData = {
    userName: 'claudio',
    email: 'harove@gmail.com',
};

export const login = () => {
    ls.setItem(SESSION_KEY, JSON.stringify(userData));
}

export const logout = () => {
    ls.removeItem(SESSION_KEY);
}

export const isLogin = () => {
    return !!ls.getItem(SESSION_KEY);
}