# CREATIONAL DESIGN PATTERNS:

Provide a mechanism to create an object and without revealing the creation method.

## Factory

Provides a template to create an object. Can be used when the type of object to create can be
different and needs to be specified in every instatiation. Does not require the keyword 'new' to instatiate.

```
class IceCreamFactory {
  constructor() {
    this.createIceCream = function(flavour) {
      let iceCream;

      if(flavour === 'chocolate') {
        iceCream = new Chocolate();
      }

      if(flavour === 'cream') {
        iceCream = new Cream();
      }
      return iceCream;
    }
  }
}

class Chocolate {
  constructor() {
    this.icecreamFlavour = "chocolate";
    this.message = function() {
      return `icecream is ${this.icecreamFlavour}`
    }
  }
}


const iceCreamFactory = new IceCreamFactory();

const chocolate = iceCreamFactory.createIceCream('chocolate');

console.log(chocolate.message());

```

## Constructor

Class based pattern that use the constructor present in the class to create specific types of objects

- Builder
- Abstract
- Prototype
- Singleton

Structural design patterns:

Patterns that concern the class/object composition. They let you add new functionalities to object so in case the
system changes it might be easy to add things to the core without affecting the rest

- Facade
- Decorator
- Proxy
- Flyweight
- Bridge
- Composite
- Adapter

Behavioral design patterns

They are used when we need dissimilar objects to communicate. They streamline the communication between objects
so they are always in sync.

- Revealing module
- Chain of responsabilty
- Strategy
- Interpreter
- Command
- Observer
- Iterator
- Mediator
- Visitor
- State
- Memento

Architectural design patterns

- MVC
- MVP
- MVVC

## What is a promise?

## What is a thunk?

A middlewhere that lets you call action creators that return a function instead
of an action object. (action will have payload etc..)

Thunk receives a dispatch method, and it gets syncronously dispatched when the
async operations have been completed.

## What is a reducer?

It's a function that determines changes to the application state. I uses the
the action received to make changes to the state

## What is a memoization?

Well sometimes when constantly updating the component (eg. setinterval), can happen
that we can trigger too many renders of the whole component. Memo is a high order component
that uses memoization in order to return cached result of same inputs. Timer is a good
scenario.

## Why use UseSelector ?

It's an alternative way to get the state instead of using mapStateToProps. Takes an argument
and returns the part of the state we want to get

## What is Connect ?

In order to use a state inside the component we would usually use this function and pass to it

- MapStateToProps => This is in order to subscribe to the components to the props update
- MapDispatchToProps => This is there as default but it facilitates dispatching calls to the store

## Immutable vs Mutable

The difference between immutable and mutable is that when changing value of reference variable
will affect value of original referenced variable.

Primitive datatypes -> immutable
Object variable -> mutable

## Rest vs spread

Same syntax but different uses. SPREAD operator can be used to create a copy of array and could
be used to add arguments to array, REST can just be used as a parameter to collect the remaining
values of an array. We would use spread operator for example to change

## Pure functions

It's a function that given the same input will always return the same output. Produces no
side effects. Pure function must not mutate any state. This will make the function impure.

Redux uses pure functions to achieve object composition

## React Lifecycles

componentWillMount - Executed just before rendering takes place both on the client as well as server-side.
componentDidMount - Executed on the client side only after the first render.
componentWillReceiveProps - Invoked as soon as the props are received from the parent class and before another render is called.
shouldComponentUpdate - Returns true or false value based on certain conditions. If you want your component to update, return true else return false. By default, it returns false.
componentWillUpdate - Called just before rendering takes place in the DOM.
componentDidUpdate - Called immediately after rendering takes place.
componentWillUnmount - Called after the component is unmounted from the DOM. It is used to clear up the memory spaces.

## What is a state in React and how is it used?

## Classical inheritance and prototypal inheritance ?

The difference between classical inheritance and prototypal inheritance is that:

- classical inheritance is limited to classes inheriting from other classes while
- prototypal inheritance supports the cloning of any object using an object linking mechanism.

A prototype acs like a template for the creation of a new object. This object can be changed and
Classes inherit from classes and create subclass relationships: hierarchical class taxonomies.
