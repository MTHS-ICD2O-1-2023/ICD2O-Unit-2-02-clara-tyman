// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Mr. Coxall
// Created on: Sep 2020
// This file contains the JS functions for index.html

/**
 * Do basic math.
 */
function doMathClicked() {
  document.getElementById("add-math").innerHTML = "<p>32 + 21 = " + (32 + 21) + "</p>"
  document.getElementById("subtract-math").innerHTML = "<p>27 - 13 =  " + (27 - 13) + "</p>"  
  document.getElementById("multiply-math").innerHTML = "<p>8 + 5 × 3 = " + (8 + 5 * 3) + "</p>" 
  document.getElementById("divide-math").innerHTML = "<p>(6 ÷ 4) + 5 = " + (6 / 4 + 5) + "</p>"
  document.getElementById("exponent-math").innerHTML = "<p>7 + 3³ = " + (7 + 3 ** 3) + "</p>"
}
