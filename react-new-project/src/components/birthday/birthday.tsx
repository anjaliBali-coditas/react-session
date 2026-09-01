import {
    createContext,
    use,
    useReducer,
    type PropsWithChildren
} from "react";

type Status = "invited" | "uninvited" | "maybe";

interface BirthdayProps extends PropsWithChildren {}

interface BirthdayData {
    mrudula: Status;
    anjali: Status;
    ani: Status;
}

type Action =
    | {
          type: "MRUDULA_STATUS";
          status: Status;
      }
    | {
          type: "ANJALI_STATUS";
          status: Status;
      }
    | {
          type: "ANI_STATUS";
          status: Status;
      };

interface BirthdayContextType {
    state: BirthdayData;
    dispatch: React.Dispatch<Action>;
}

const initialState: BirthdayData = {
    mrudula: "invited",
    anjali: "maybe",
    ani: "uninvited"
};

const BirthdayContext =
    createContext<BirthdayContextType | null>(null);

const reducer = (
    state: BirthdayData,
    action: Action
): BirthdayData => {
    switch (action.type) {
        case "MRUDULA_STATUS":
            return {
                ...state,
                mrudula: action.status
            };

        case "ANJALI_STATUS":
            return {
                ...state,
                anjali: action.status
            };

        case "ANI_STATUS":
            return {
                ...state,
                ani: action.status
            };

        default:
            return state;
    }
};

const useBirthdayContext = () => {
    const context = use(BirthdayContext);

    if (!context) {
        throw new Error("Birthday must be inside Birthday");
    }

    return context;
};

const Birthday = ({ children }: BirthdayProps) => {
    const [state, dispatch] = useReducer(
        reducer,
        initialState
    );

    return (
        <BirthdayContext value={{ state, dispatch }}>
            {children}
        </BirthdayContext>
    );
};

Birthday.Mrudula = () => {
    const { state, dispatch } = useBirthdayContext();

    return (
        <div>
            <h3>Mrudula</h3>

            <p>{state.mrudula}</p>

            <button
                onClick={() =>
                    dispatch({
                        type: "MRUDULA_STATUS",
                        status: "uninvited"
                    })
                }
            >
                Uninvited
            </button>

            <button
                onClick={() =>
                    dispatch({
                        type: "MRUDULA_STATUS",
                        status: "maybe"
                    })
                }
            >
                Maybe
            </button>
        </div>
    );
};

export default Birthday;