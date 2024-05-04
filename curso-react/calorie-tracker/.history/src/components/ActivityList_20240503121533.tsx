type ActivityListProps = {
	activities: Activity[]
}
export default function ActivityList({ activities }: ActivityListProps) {
	return (
		<>
			<div>
				<h2 className="text-4xl font-bold text-slate-600 text-center">Comida y Actividades</h2>
				{activities.map(activity => (
					<div key={activity.id} className="px-5 py">
						<p>{activity.name}</p>
						<p>{activity.category.name}</p>
					</div>
				))}
			</div>
		</>
	)
}
