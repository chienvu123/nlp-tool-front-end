import {
  PermissionsAndroid,
  Platform,
  Alert,
  AsyncStorage,
} from "react-native";
import { User } from "constants/dataType";
import * as types from "constants/actionTypes";

/* eslint-disable */
class Instance {
  user = {
    userId: -1,
    name: "",
    email: "",
    phoneNumber: "",
    photoUrl: "",
    balance: 0,
    type: -1,
    address: "",
    birthday: "",
    gender: "",
    currentLocation: {},
  };
  doctor = {
    district: "",
    special: "",
    status: 1,
    clinicName: "",
    clinicAddress: "",
    experience: -1,
    timer: {
      time_begin: -1,
      time_end: -1,
      begin_of_week: -1,
      end_of_week: -1,
    },
  };
  location = null;
  token = ""; // token auth
  tokenFCM = ""; // token messaging
  setupInfo = (user = {}) => {
    this.user = { ...this.user, ...user };
    AsyncStorage.setItem("user", JSON.stringify(this.user));
  };
  setAuthToken = (token = "") => {
    this.token = token;
    AsyncStorage.setItem("token", token);
  };
  setTokenFCM = (tokenFCM) => {
    this.tokenFCM = tokenFCM;
    console.log("tokenFCM", tokenFCM);
    if (global.stringee) {
      global.stringee.registerPush(token, true, true, (result) => {
        if (result) {
          console.log("regispush stringee success");
        }
      });
    }
  };
  setUser = (user: User = {}, doctor = {}) => async (dispatch) => {
    this.user = { ...this.user, ...user };
    this.doctor = { ...this.doctor, ...doctor };
    if (user.name) {
      this.user.name = user.name.trim();
    }
    if (user.address) {
      this.user.address = user.address.trim();
    }
    AsyncStorage.setItem("user", JSON.stringify(this.user));
    if (this.user.type > 0) {
      AsyncStorage.setItem("doctor", JSON.stringify(this.doctor));
    }
    dispatch({
      type: types.SET_USER,
      user: this.user,
      doctor: this.doctor,
    });
  };
}

class UserModel {
  instance: Instance;
  static getInstance(): Instance {
    if (!this.instance) {
      this.instance = new Instance();
    }
    return this.instance;
  }
}

export default UserModel.getInstance();
