const tipOptions = [
	{
		id: 'tip-10',
		value: .10,
		label: '10%'
	},
	{
		id: 'tip-20',
		value: .20,
		label: '20%'
	},
	{
		id: 'tip-50',
		value: .50,
		label: '50%'
	},
]
export default function TipPercentageForm() {
	return (
		<div>
			<h3 className="font-black text-2xl">Propina:</h3>
			<form>
				{tipOptions.map(tip => (
					<div>

					</div>
				))}
				
			</form>
		</div>
	)
}
