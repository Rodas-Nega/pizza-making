// Created By: Rodas N.
// Created On: Oct 8 2020
// 
// This program runs a calculation of the accumulated costs and tax to make one pizza.
// 
game.splash("Pizza Order")
let Pizza = game.askForNumber("Enter the diameter of the pizza (inch):")
let LABOUR_COST = 0.75
let RENT = 1
let MATERIALS = 0.5
let HST = 1.13
Pizza = HST * (RENT + (LABOUR_COST + MATERIALS * Pizza))
game.splash("The cost of making your specified length of pizza is $" + convertToText(Pizza))
