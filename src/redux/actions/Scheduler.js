import { SCHEDULER_CHAIR, SCHEDULER_TABLE } from "redux/constants/Scheduler";

export const schedulerChairAction = (position) => {
    return {
      type: SCHEDULER_CHAIR,
      payload: position
    };
};

export const schedulerTableAction = (position) => {
    return {
      type: SCHEDULER_TABLE,
      payload: position
    };
};