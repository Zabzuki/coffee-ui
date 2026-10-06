import { useState } from 'react'

const BASE_COFFEES = 42
const BASE_ESPRESSOS = 17

type Order = 'none' | 'coffee' | 'espresso'

/**
 * UI component that remotely controls a coffee machine.
 *
 * The machine makes one beverage at a time, so at most one order can be
 * pending. Clicking a drink toggles its order; clicking the other drink while
 * one is pending cancels the first and starts the second.
 */
export const CoffeeUI = () => {
	const [order, setOrder] = useState<Order>('none')

	const coffees = BASE_COFFEES + (order === 'coffee' ? 1 : 0)
	const espressos = BASE_ESPRESSOS + (order === 'espresso' ? 1 : 0)

	const orderCoffee = () =>
		setOrder((current) => (current === 'coffee' ? 'none' : 'coffee'))
	const orderEspresso = () =>
		setOrder((current) => (current === 'espresso' ? 'none' : 'espresso'))

	return (
		<div>
			<button className="coffeeBtn" onClick={orderCoffee}>
				Coffee (<span className="coffees">{coffees}</span>)
			</button>
			<button className="espressoBtn" onClick={orderEspresso}>
				Espresso (<span className="espressos">{espressos}</span>)
			</button>
		</div>
	)
}
