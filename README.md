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
