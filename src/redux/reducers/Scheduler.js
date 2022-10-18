import { SCHEDULER_CHAIR, SCHEDULER_TABLE } from "redux/constants/Scheduler";

const initState = {
  loading: false,
  positionChair: [],
  positionTable: [],
};

const scheduler = (state = initState, action) => {
  switch (action.type) {
    case SCHEDULER_CHAIR:
      const newArr = [...state.positionChair, action.payload];
      const filterChair = newArr
        .reverse()
        .filter((item, i) => newArr.findIndex((a) => a.id === item.id) === i);

      return {
        ...state,
        loading: true,
        positionChair: [...filterChair],
      };
    case SCHEDULER_TABLE:
      const newArrTable = [...state.positionTable, action.payload];
      const filterTablle = newArrTable
        .reverse()
        .filter((item, i) => newArrTable.findIndex((a) => a.id === item.id) === i);
      return {
        ...state,
        loading: true,
        positionTable: [...filterTablle],
      };

    default:
      return state;
  }
};

export default scheduler;
