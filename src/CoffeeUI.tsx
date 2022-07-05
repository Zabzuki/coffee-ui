//import * as React from 'react'

import { useState } from 'react'

enum MachineState {
	Free,
	Coffee,
	Espresso,
}

export const CoffeeUI = () => {
	const [coffee, setCoffee] = useState(0)
	const [espresso, setEspresso] = useState(0)
	const [machineState, setMachineState] = useState(MachineState.Free)

	// 	switch (message) {
	// 		case 'free':
	// 			setState(state)
	// 			break
	// 		case 'preparing coffee':
	// 			setState(state + 1)
	// 			break
	// 		case 'preparing espresso':
	// 			setState(state - 1)
	// 			break
	// 		default:
	// 			break
	// 	}

	const handleCoffee = () => {
		if (machineState === MachineState.Coffee) {
			setMachineState(MachineState.Free)
		}
		if (machineState === MachineState.Espresso) {
			setEspresso(espresso - 1)
		}

		setMachineState(MachineState.Coffee)
		setTimeout(() => setCoffee(coffee + 1), 1000)
		console.log(machineState)
		setMachineState(MachineState.Free)
	}
	const handleEspresso = () => {
		//if (state === -1) {
		//	setState(0)
		//}
		setTimeout(() => setEspresso(espresso + 1), 100)
	}
	return (
		<div>
			<ButtonComponent
				handleClick={handleCoffee}
				name="Coffee"
				class="coffeeBtn"
			/>
			<ButtonComponent
				handleClick={handleEspresso}
				name="Espresso"
				class="espressoBtn"
			/>
		</div>
	)
}
export const ButtonComponent = (props: any) => {
	return (
		<button
			className={props.className}
			onClick={props.handleClick}
			name={props.name}
		>
			{props.name}
		</button>
	)
}
