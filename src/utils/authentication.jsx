/* eslint-disable react/no-multi-comp */
import React, { Component } from 'react';
import {
  redirectIfNotAuthenticated,
  getJwt,
  redirectIfNotAdmin,
  redirectIfNotManager,
  redirectIfNotGroupManager,
} from './auth';
import { verifyToken } from '../apis/auth';
import { getUserById } from '../apis/user';

export class UserAuthentication extends Component {
  static async getInitialProps(ctx) {
    if (redirectIfNotAuthenticated(ctx)) {
      return {};
    }

    const jwt = getJwt(ctx);
    const { results } = await verifyToken(jwt);
    const { query } = ctx;
    const { user } = await getUserById(results.userId);
    return {
      accessToken: jwt,
      query,
      userId: results.userId,
      user,
    };
  }

  render() {
    return <div {...this.props} />;
  }
}

export class AdminAuthentication extends Component {
  static async getInitialProps(ctx) {
    const {
      accessToken,
      userId,
      query,
      user,
    } = await UserAuthentication.getInitialProps(ctx);
    redirectIfNotAdmin(user, ctx);
    return {
      accessToken,
      query,
      userId,
      user,
    };
  }

  render() {
    return <div {...this.props} />;
  }
}

export class ManagerAuthentication extends Component {
  static async getInitialProps(ctx) {
    const {
      accessToken,
      userId,
      query,
      user,
    } = await UserAuthentication.getInitialProps(ctx);
    redirectIfNotManager(user, ctx);
    return {
      accessToken,
      query,
      userId,
      user,
    };
  }

  render() {
    return <div {...this.props} />;
  }
}

export class GroupManagerAuthentication extends Component {
  static async getInitialProps(ctx) {
    const {
      accessToken,
      userId,
      query,
      user,
    } = await UserAuthentication.getInitialProps(ctx);
    redirectIfNotGroupManager(user, ctx);
    return {
      accessToken,
      query,
      userId,
      user,
    };
  }

  render() {
    return <div {...this.props} />;
  }
}
