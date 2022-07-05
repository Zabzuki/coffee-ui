/**
 * @jest-environment jsdom
 */
import * as React from 'react'
import { render } from '@testing-library/react'
import { CoffeeUI } from './CoffeeUI'

describe('Coffee UI', () => {
	it('should have coffee and espresso buttons', () => {
		const { container } = render(<CoffeeUI />)
		const coffeeButton = (container as any).getElementsByClassName('coffeeBtn')
		const espressoButton = (container as any).getElementsByClassName(
			'espressoBtn',
		)
		expect(coffeeButton.length).toBe(1)
		expect(coffeeButton[0].tagName).toEqual('BUTTON')
		expect(espressoButton.length).toBe(1)
		expect(espressoButton[0].tagName).toEqual('BUTTON')
	})
	it('should have the initial coffees and espressos counter', () => {
		const { container } = render(<CoffeeUI />)
		const coffeesCounter = (container as any).getElementsByClassName('coffees')
		const espressosCounter = (container as any).getElementsByClassName(
			'espressos',
		)
		expect(coffeesCounter[0].textContent).toEqual('42')
		expect(espressosCounter[0].textContent).toEqual('17')
	})
	it('should have a proper format', () => {
		const { container } = render(<CoffeeUI />)
		const coffeeButton = (container as any).getElementsByClassName('coffeeBtn')
		const espressoButton = (container as any).getElementsByClassName(
			'espressoBtn',
		)
		expect(coffeeButton.length).toBe(1)
		expect(coffeeButton[0].textContent).toEqual('Coffee (42)')
		expect(espressoButton.length).toBe(1)
		expect(espressoButton[0].textContent).toEqual('Espresso (17)')
	})
	it('should increment counter when coffee is clicked', () => {
		const { container } = render(<CoffeeUI />)
		const coffeeButton = (container as any).getElementsByClassName('coffeeBtn')
		coffeeButton[0].click()
		expect(coffeeButton[0].textContent).toEqual('Coffee (43)')
	})
	it('should decrement counter when coffee is clicked again', () => {
		const { container } = render(<CoffeeUI />)
		const coffeeButton = (container as any).getElementsByClassName('coffeeBtn')
		coffeeButton[0].click()
		expect(coffeeButton[0].textContent).toEqual('Coffee (43)')
		coffeeButton[0].click()
		expect(coffeeButton[0].textContent).toEqual('Coffee (42)')
	})
	it('should increment counter when espresso is clicked', () => {
		const { container } = render(<CoffeeUI />)
		const espressoButton = (container as any).getElementsByClassName(
			'espressoBtn',
		)
		espressoButton[0].click()
		expect(espressoButton[0].textContent).toEqual('Espresso (18)')
	})
	it('should decrement counter when espresso is clicked again', () => {
		const { container } = render(<CoffeeUI />)
		const espressoButton = (container as any).getElementsByClassName(
			'espressoBtn',
		)
		espressoButton[0].click()
		expect(espressoButton[0].textContent).toEqual('Espresso (18)')
		espressoButton[0].click()
		expect(espressoButton[0].textContent).toEqual('Espresso (17)')
	})
	it('should cancel the coffee order when espresso is clicked', () => {
		const { container } = render(<CoffeeUI />)
		const coffeeButton = (container as any).getElementsByClassName('coffeeBtn')
		const espressoButton = (container as any).getElementsByClassName(
			'espressoBtn',
		)
		coffeeButton[0].click()
		expect(coffeeButton[0].textContent).toEqual('Coffee (43)')
		espressoButton[0].click()
		expect(coffeeButton[0].textContent).toEqual('Coffee (42)')
		expect(espressoButton[0].textContent).toEqual('Espresso (18)')
	})
	it('should cancel the espresso order when coffee is clicked', () => {
		const { container } = render(<CoffeeUI />)
		const coffeeButton = (container as any).getElementsByClassName('coffeeBtn')
		const espressoButton = (container as any).getElementsByClassName(
			'espressoBtn',
		)
		espressoButton[0].click()
		expect(espressoButton[0].textContent).toEqual('Espresso (18)')
		coffeeButton[0].click()
		expect(coffeeButton[0].textContent).toEqual('Coffee (43)')
		expect(espressoButton[0].textContent).toEqual('Espresso (17)')
	})
})
