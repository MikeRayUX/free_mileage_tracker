import { createContext, useReducer } from "react";
import { Trip } from "../types";

type State = {
  newTrip: Trip;
  trips?: Trip[];
};

type Action = {
  type: string;
  payload?: any;
};

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "set_new_trip":
      return { ...state, newTrip: action.payload };
    case "reset_new_trip":
      return {
        ...state,
        newTrip: {
          id: null,
          date: null,
          formattedDate: null,
          classification: null,
          miles: 0,
        },
      };
    case "set_trips":
      return { ...state, trips: action.payload };
    default:
      return state;
  }
}

const initialState: State = {
  newTrip: {
    id: null,
    date: null,
    formattedDate: null,
    classification: null,
    miles: 0,
  },
  trips: []
};

export const TripContext = createContext<{
  state: State;
  dispatch: React.Dispatch<Action>;
}>({ state: initialState, dispatch: () => null });

export function TripProvider({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <TripContext.Provider value={{ state, dispatch }}>
      {children}
    </TripContext.Provider>
  );
}
