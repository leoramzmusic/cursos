type ActivityListProps = {
	activities: Activity[]
}
export default function ActivityList({activities}: ActivityListProps) {
	console.log(activities)
	return (
		<>
			<div>
				<h2 className="text-4xl font-bold text-slate-600 text-center">Comida y Actividades</h2>
			</div>
		</>
	)
}
