---
title: 'Intro to software design'
date: '2021-06-01'
---

### What is software design? 

Software design is the process oh helping programmers become software developers
and eventually software architects using the tools which help to visualize, 
measure, and build high-quality designs.

## What is computer code (or simply "code" for short)?

Code is set of instructions understood by a computer to perform a task.

## What is the difference between a programmer and a developer?
For some, there is no difference. For others, the implications exist that the 
developer has more holistic view of the entire software system and makes 
more informed decisions as to what is best for the system. 

## What is a software architect (or simple "architect")?

An architect is an experienced and wise software developer responsible for system-wide 
design decisions.

# Levels of design 

* Component & System design

* Class Relation design

* Encapsulation design

* Modularization design 

* Algorithm design


| Design level | Software tools | 
| --------------------------  |  ---------------------- | 
| Component & System design | Components and applications | 
|  Class Relation design | Group of classes | 
|  Encapsulation design | Classes | 
|  Modularization design | Functions | 
|  Algorithm design | Statements | 

# Statements 

A statement is a unit of software representing an action to be carried out.

## Algorithm design 

An algorithm is a sequence of statements designed to accomplish some task.

### Terms and definitions

** Machine code ** : A statement consisting of 1s and  s that a computer’s CPU consumes directly. Generally,not human readable.

** Assembly code ** : A human-readable version of machine code consisting of register designations and memory locations.

** Statement ** : A high-level programming language construct consisting of one or moreassembly code elements.

** Execute ** : The process of carrying out one or more statements.

** Variable ** : A named location in memory where data are stored.

** Conditions ** : A type of statement representing a decision.

** Loop ** : A   type   of   statement   allowing   for   a   collection   of statements to be executed more than once.

** Array ** : A collection of variables accessible by index.

** Algorithm ** : A sequenceof  statements  designedto  accomplish  a task.

# Function 

A function is a unit of a program containing a collection of statements.

## Modularization design

Modularization is the process of subdividing a program into functions

### Terms and concepts

** Function ** : A named collection of statements to perform a task. Also known as a procedure, sub program, or subroutine.

** Invoke ** : The process of executing a given function.

** Caller ** : The entity invoking a given function.

** Callee ** : A function that is invoked by a caller.

** Parameter ** : A datum sent into a function from the caller. This is also known as the function’s input.

** Return ** : The process of sending data out of a function back to the caller.

** Modularization ** : The practiceof subdividing a program into functions.


# Classes

A class is a program entity consisting of data and the operations that act on them

## Encapsulation design

Encapsulation is the process of creating classes to capture components of the system design

### Terms and concepts

** Class ** : A  programming  construct  consisting  of  data  and  the operations that act on them.

** Attribute ** : The data of a class, also known as a member variable.

** Operation ** : A function  associated  with  a  class,  also  known  as  a member function or method.

** Object ** : An instantiated class. This is a variable whose data typeis a class.

** Instantiation ** : The process of creating an object.

** Object-oriented ** : A  design  philosophy  centered  on  designing  programs with classes.

** Encapsulation ** : The process of creating classes to capture component of the system design.


# Group of classes

 There are several types of groupings that are possible in most languages that support classes:

* A class can be contained within another class. This means that a class can have an object as a member variable.

* A class’ method can use another class. This means that a member function can have a local variable that is of the type of another class.

* A class can be defined in terms of another class. This means that one class can be an extension of or a special type of another class. 

## Class relation design

The  process  of  grouping  related  classes  together tobetter  represent  a  design concern.

### Terms and concepts

** Composition ** : When the member variable of one class is an object of another class.

** Association ** : When the member variable of one class is a reference to an object of another class. 

** Nested class ** : A class defined within another class.

** Inheritance ** : When one class is defined in terms of another class.

** Base class ** : A  class  that  others  inherit from.  It  is  the  basis  of inheritance.

** Derived class ** : A class that inherits fromanother base class.

** Extension ** : A  type  of  inheritance  where  oneclass  assumes  all  the properties and methods of another class and adds a few.

** Polymorphism ** : An inheritance technique where various derived classes have different implementations but the same interfaces.


# Component a system 

A system is a collection of softwaredeliverables that meet the client’s needs

A component is a distinct part of a system that can be developed, substituted, and even executed independently of the rest of the system

### Terms and concepts

** System ** : The entire application developed for the client.

** Component ** : A distinct part of the system.

** Interface ** : A method of communication between components.

** Protocol ** : The language utilized in an interface.

-----------------------------------

# Components of Design

* Design visualization tools (called “tool”): help developers create, visualize, and communicate design ideas. 
* Quality metrics (called “metric”) : Metrics are rulers allowing us to measure the quality of a design idea
* Defect identification techniques (called “quality”): collection  of  tools  and  techniques  that  help  a  designer  avoid,  find,  and  eliminate bugs. 
* Best practices or techniques (called “strategy”). 


## Design Visualization Tools

* Flowchart
* Pseudocode
* Structure chart
* Data flow diagram
* Class diagram
* Component diagram
* Design document

## Metrics

* Efficiency
* Maintainability
* Cohesion
* Coupling
* Fidelity
* Robustness
* Convenience
* Abstraction
* Adaptability
* Alignment
* Redundancy


## Defect Identification Techniques

* Asserts
* Trace
* Test cases
* Drivers
* Unit test
* Test-Driven Development
* Debuggers
* V-Table

## Best practices, techniques, and strategies

* Decisions
* Collections
* Loops
* Recursion
* Top-down
* Botton-up
* Functional programming
* Noun identification
* Metaphors
* Data protection
* Polymorphism
* Is-A and Has-A
* Object Creation
* Algorithm abstraction
* State
* Ihheritance trees
* Message passing 
* Separation of concerns
* Command passing
* Interfaces
* Tokens and Entities
* Layered System Design

