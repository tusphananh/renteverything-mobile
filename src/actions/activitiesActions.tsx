import {
  ActivitiesTypes,
  ActivityMaybe,
  AddMessageAction,
  AddProvideActivitiesAction,
  AddProvideActivityAction,
  AddRentActivitiesAction,
  AddRentActivityAction,
  MessageMaybe,
  RemoveProvideActivityAction,
  RemoveRentActivityAction,
  SetChatSocketAction,
  UpdateActivityAction,
} from '../constants/ActivitiesConstants';
import {getSocket} from '../libs/socket';
import env from '../config/env';

export const addProvideActivity = (
  activity: ActivityMaybe,
): AddProvideActivityAction => ({
  type: ActivitiesTypes.ADD_PROVIDE_ACTIVITY,
  payload: {
    activity,
  },
});

export const addProvideActivities = (
  activities: ActivityMaybe[],
): AddProvideActivitiesAction => ({
  type: ActivitiesTypes.ADD_PROVIDE_ACTIVITIES,
  payload: {
    activities,
  },
});

export const removeProvideActivity = (
  activityId: string,
): RemoveProvideActivityAction => ({
  type: ActivitiesTypes.REMOVE_PROVIDE_ACTIVITY,
  payload: {
    activityId,
  },
});

export const addRentActivity = (
  activity: ActivityMaybe,
): AddRentActivityAction => ({
  type: ActivitiesTypes.ADD_RENT_ACTIVITY,
  payload: {
    activity,
  },
});

export const addRentActivities = (
  activities: ActivityMaybe[],
): AddRentActivitiesAction => ({
  type: ActivitiesTypes.ADD_RENT_ACTIVITIES,
  payload: {
    activities,
  },
});

export const removeRentActivity = (
  activityId: string,
): RemoveRentActivityAction => ({
  type: ActivitiesTypes.REMOVE_RENT_ACTIVITY,
  payload: {
    activityId,
  },
});

export const addMessage = (message?: MessageMaybe): AddMessageAction => ({
  type: ActivitiesTypes.ADD_MESSAGE,
  payload: {
    message,
  },
});

export const setChatSocket = (): SetChatSocketAction => {
  const url = `${env.CHAT_SOCKET_URL}`;
  // console.log(url);
  const socket = getSocket(url);
  return {
    type: ActivitiesTypes.SET_CHAT_SOCKET,
    payload: {
      socket: socket,
    },
  };
};

export const updateActivity = (
  activity: ActivityMaybe,
): UpdateActivityAction => {
  return {
    type: ActivitiesTypes.UPDATE_ACTIVITY,
    payload: {
      activity: activity,
    },
  };
};
