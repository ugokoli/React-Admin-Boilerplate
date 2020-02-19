/*
 * Copyright (c) 2019.
 * Ugonna Okoli
 * ugokoli.com
 */

import jwt from "jsonwebtoken";

const TOKEN_JWT = "JWT_TOKEN";
const TOKEN_LAST_ACTIVITY = "LAST_ACTIVITY";

class Session {
    constructor() {
        Session.setLastActivityTime = Session.setLastActivityTime.bind(this);
        Session.getLastActivityTime = Session.getLastActivityTime.bind(this);
        this.setToken = this.setToken.bind(this);
        this.getToken = this.getToken.bind(this);
        this.getProfile = this.getProfile.bind(this);
        this.loggedIn = this.loggedIn.bind(this);
        this.logout = this.logout.bind(this);
    }

    static setLastActivityTime() {
        //Save Last Activity time in local storage
        localStorage.setItem(TOKEN_LAST_ACTIVITY, Date.parse(new Date()));//saves in timestamp milliseconds
    }

    static getLastActivityTime() {
        return localStorage.getItem(TOKEN_LAST_ACTIVITY);
    }

    setToken(token) {
        //Save Auth Token in local storage
        localStorage.setItem(TOKEN_JWT, token);
    }

    getToken() {
        return localStorage.getItem(TOKEN_JWT);
    }

    decodeToken() {
        return jwt.decode(this.getToken());
    }

    isTokenExpired() {
        try {
            const decoded = this.decodeToken();
            return (decoded.exp < Date.now() / 1000);
        } catch (e) {
            return true;
        }
    }

    getDuration() {
        const decoded = this.decodeToken();
        return decoded.exp;
    }

    getProfile() {
        return this.decodeToken();
    }

    loggedIn() {
        return this.getToken() && !this.isTokenExpired();
    }

    logout() {
        localStorage.removeItem(TOKEN_JWT);
    }
}

export default Session;