## Device configuration UI component

This is a simplified example of a UI component which remotely controls a coffee
machine which can dispense coffee and espresso. The UI element allows users to
order either a coffee or an espresso and displays the number of dispensed
beverages.

![Coffee or Espress](coffee-espresso.png)

The main goal is to implement the UI component [`CoffeeUI`](./CoffeeUI.tsx) with the
following behaviour:

1. Add a `button` to order a coffee

   - with a text that reads `Coffee (42)`, where `42` is the number of dispensed
     coffees so far
   - with a CSS class called `coffeeBtn`
   - contain the number of dispensed coffees in a `span` with the class
     `coffees`
   - when a user clicks the button, the number of dispensed coffees should be
     increased by one

2. Add a similar `button` to order a espresso

   - number of dispensed espressos so far is `17`
   - CSS class: `espressoBtn`
   - `span.espressos` which contains the number of dispensed espressos
   - when clicked, increase number of dispensed espressos

3. The coffee machine can only make one beverage at a time, so if the user
   orders an espresso after having ordered a coffee, the coffee order is
   cancelled.

4. Users can cancel their order, so if the user has ordered a coffee and clicks
   the coffee button a second time, the order should be cancelled.
