import type { Activity } from "../types"

type CalorieTrackerProps = {
	activities: Activity[],
}
export default function CalorieTracker({activities}): CalorieTrackerProps {
	return (
		<>
			<h2 className="text-4xl font-black text-white text-center">
				Resumen de Calorias
			</h2>
		</>
	)
}
