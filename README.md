# Frank's calculator

This calculator has special functionality such as a computationscreen and the added functionality 
of being able to use the equal key multiple times in a row to re-compute the last equation on 
the the display. The state is a little harder to understand so if you have any qeustions about
it feel free to contact me! 

## How to use

A static Github page has been provided to check out the application without having to an `npm install`.
If you clone the project all that is need to start the application is `npm install` which will install dependencies for React & Redux. After installing `npm start` will launch the local copy of the project. For building `npm build` can be used, and to create a static page like the one linked in the project you can use `npm deploy` after running the `npm build` command.


## Known issues


* Application does not work properly on smaller devices/screens.


## To be added features

- [ ] Make application useable by pressing numbers on the keyboard and numpad.
- [ ] More functionality such as found on the scientific calculator.
- [ ] Darkmode.


## Updatelog for Frank's calculator

### **Version 1.0.2**

```
- Bugfixes:

	- Changed how the decimal function is called, not requiring it to use state, and working properly.
	- Added formatting in the state.display to round numbers on 4 digits without polluting the calculations.
```

### **Version 1.0.1**

```
- Bugfixes:

	- Fixed and issue where computation did not display in computationScreen after using 	an operator.
	- Fixed an issue where the revert and percentage function did not change the state.
	- Delete does not crash the application after a decimal number is used.
	- Resolved an issue where decimals could be re-used after percentage already assigned decimals.

```

## Want to help?

Feel free to sent me a message on Github or fiddle with the application!
