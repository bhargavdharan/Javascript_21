# Big O complexity notations

## Big O Cheat Sheet

--Big Os--

* O(1) Constant- no loops
* O(log N) Logarithmic- usually searching algorithms have log n if they are sorted (Binary Search)
* O(n) Linear- for loops, while loops through n items
* O(n log(n)) Log Linear- usually sorting operations
* O(n^2) Quadratic- every element in a collection needs to be compared to ever other element. Two
* nested loops
* O(2^n) Exponential- recursive algorithms that solves a problem of size N
* O(n!) Factorial- you are adding a loop for every element

Iterating through half a collection is still O(n)

Two separate collections: O(a * b)

--What can cause time in a function?--

* Operations (+, -, *, /)
* Comparisons (<, >, ==)
* Looping (for, while)
* Outside Function call (function())

--What causes Space complexity?--

* Variables
* Data Structures
* Function Call
* Allocations

## What is good code ?

Code is described on two points-

1.Readability

2.Scalability

## Rule Book

Follow these four rules instead of doing small little calculations

* Rule 1: Worst Case
* Rule 2: Remove Constants
* Rule 3: Different terms for inputs
* Rule 4: Drop Non Dominants

### Basic

* Data Structures(simply ways to store data) + Algorithms(simply functions or ways to use ds to write our prgms) = Programs

### 3 pillars of programming

We need consider Scalable in two things:

* Time & Speed

* Memory

First pillar:

* Readable

Second pillar:

* Time Complexity(speed)

Third pillar:

* Space Complexity(Memory)

* **Note** : In most programming languages, theres usually a trade off between speed and memory.

1. If you want things faster, then you have to sacrifice more memory.
2. If you want less memory, then you have to sacrifice with increased speed.

* When a program Executes, it has two ways to remember things

1. The Heap memory -- it is usually where we store variables that we assign values
2. The stack memory -- it is usually where we keep track of our function calls
