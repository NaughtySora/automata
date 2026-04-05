# Automata
abstract mathematical models of machines that perform computations on an input by moving through a series of states or configurations.
They are the foundation of theoretical computer science, designed to follow a predetermined sequence of operations automatically.

## Categories
1. FA (Finite Automata) or FSM (Finite-State Machine)
- Machine with finite number of states.
- Has no additional memory besides remembering current state. 
- Subcategories by output: Moore, Mealy, Neither(None).
- Subcategories by determinism: DFA, NFA.
2. PDA (Push Down Automata)
- FSM with stack, can store more information.
3. TM (Turing Machine)
- A mathematical model,represents the capability of modern computers.
- Unlimited memory.
- Can read and write to the memory any amount of time.
- Categories: multi-tape, non-deterministic, multi-head.
4. LBA (Linear-Bounded Automata)
- TM with limited memory, usually <= size of input, 
can be arbitrary linear size.


# FA
## DFA (Deterministic Finite Automata)
- Can only have one possible next state.
- State change example, s1 -> s2

#### Usage
- Lexical analysis (tokenizer).
- Simple pattern matching.
- Protocol state tracking.
- UI state machines.
- Doors, turnstile logic.

## NFA (Nondeterministic Finite Automata)
- Can have multiple next states.
- State change example, s1 -> {s2, s5, s10}

#### Usage
- Regex engines.
- Pattern recognition.

## Mealy
- Changes state depending on both current state and input.
- Outputs both new state and data.

#### Usage 
- Signal processing.
- Synchronous circuits.
- Streaming data transformation.
- Protocols that emit events per input.

## Moore
- Changes state depending on current state.
- Output decided only on state.

#### Usage
- Counters.
- Sequence detectors.
- Finite control in digital circuits.
- Embedded systems.

## None
- Doesn't produce an output.

### Notes
- Since all the automata attributes are just a concept
the implementation of the machine is not required to be
specifically Moore or Mealy, or DFA or NFA etc.

- Machine can be implemented as just bare state and methods to control it,
and higher abstractions can use it differently.

- Automata is pretty flexible concept, can be used in many ways
and serve many purposes. 
Event-Driven Automata, Distributed, Functional and so on.

# PDA

## DPDA
- Simple, cannot recognize all CFLs.

## NPDA
- Can recognize all context-free languages.

## Acceptance
- Final state, accept if PDA ends in an specific state.
- Empty stack, accept if stack is empty.
- Both.

#### Usage
- Parsing programming languages. 
- Compiler syntax analysis. 
- Expression evaluation.
- Parenthesis/bracket matching.
- Basic DSL interpreters.
