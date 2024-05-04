import { Activity } from "../types"

export type ActivityActions = {
	type: 'save-activity', payload: { newActivity: Activity }
}

type ActivityState = {
	activities: Activity[],
	activeId: Activity['id'],
}

export const initialState: ActivityState = {
	activities: [],
	activeId: '',
}

export const activityReducer = (
	state: ActivityState = initialState,
	action: ActivityActions,
) => {
		if(action.type === 'save-activity') {
			//Este codigo maneja la logica para actualizar el state
			return {
                ...state,
                activities: [...state.activities, action.payload.newActivity]
            }
		}
	return state
}