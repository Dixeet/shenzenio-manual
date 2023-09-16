---

---

----

# MCxxxx Family<br>Language Reference

----

## Introduction

The MCxxxx family of microcontrollers employs a common programming system to simplify system design and
reduce new product development time. A program written for one member of the MCxxxx family can be re-used in any
other MCxxxx microcontroller with few or no changes (see note [[1]](/mcxxxx-language.html#note-1)).

Programs for the MCxxxx are assembled from a small but versatile set of operations. Each line of an MCxxxx
program can contain an instruction, which consists of the instruction’s name followed by zero or more instruction operands. Detailed descriptions of the available instructions and their usage are provided below.

MCxxxx microcontrollers are designed to be used in power-constrained environments and applications, and the
MCxxxx programming system has been designed accordingly. While a MCxxxx microcontroller is in a sleep state, it
consumes no power. Otherwise, power consumption is proportional to the number of instructions executed.

_[1] MCxxxx microcontrollers have varying features, pinouts, and program space limitations, described in the modelspecific datasheets. Some adaptation may be required to account for these model-specific differences._ {#note-1}

## Program Structure

Each line of an MCxxxx program must have the following structure:

`LABEL CONDITION INSTRUCTION COMMENT`

All components are optional, but must appear in the specified order if present. Examples of syntactically valid lines:

```
# This line is a comment.
loop: # until ACC is ten
teq acc 10
+ jmp end
  mov 50 x2
  add 1
  jmp loop
  end:
  mov 0 acc # reset counter
```

## Comments

Any text following a `#` symbol is ignored until the end of the line. Comments improve developer productivity by allowing the behavior of code to be described in-line with the program itself.
  
## Labels

Labels must appear first on a line, and are followed by a colon `:`. Labels are used as jump targets by the jmp instruction. Labels must begin with a letter and may contain alphabetic, numeric, and underscore characters.

## Conditional Execution
All instructions in the MCxxxx programming language are capable of **conditional execution**. Prefixing an instruction with a `+` or `-` symbol will cause that instruction to be enabled or disabled by **test instructions**. When an instruction is disabled by a test instruction, it will be skipped and will not consume power. Instructions with no prefix are never disabled and always execute normally. All conditional instructions start in a disabled state. A test instruction
must be executed to enable conditional instructions.

For an example of conditional instructions in use, see [Application Note 650: Touch-Activated Light Controller](/application-notes/an650).

## Registers

Registers are used as sources and destinations for data manipulated by MCxxxx instructions. The set of registers
varies between MCxxxx models. It is an error to use a register in a microcontroller program if that register is not present on that microcontroller.

`acc` is the primary general-purpose register used for internal computation on MCxxxx family microcontrollers. All
arithmetic operations implicitly use and modify the value of `acc`.

`dat` is a second register available on some MCxxxx family members. It can be used in most contexts where acc
is permitted.

The internal registers of MCxxxx microprocessors (`acc` and `dat`, if available) are initialized to the value 0.

The pin registers (`p0`, `p1`, `x0`, `x1`, `x2`, `x3`) are used when reading from or writing to the pins of MCxxxx microcontrollers. Reading and writing through the pins allows a single MCxxxx microcontroller to communicate and coordinate with other connected, compatible devices. Each pin on an MCxxxx family microcontroller functions as either a simple I/O or XBus interface. Refer to the appropriate datasheet for details on pin functionality.

`null` is a pseudo-register. Reading from the null register produces the value 0. Writing to the null register has no effect

## Instruction Operands

Each type of instruction requires a fixed number of operands. If an instruction has any associated operands, they must appear following the instruction name, separated by spaces. For the benefit of development productivity, the MCxxxx programming system does not require the use of redundant punctuation to separate instruction operands.

Instruction operands are described with the following notation:

| Notation | Meaning                                                  |
|:---------|:---------------------------------------------------------|
| R        | Register                                                 |
| I        | Integer [[1]](/mcxxxx-language.html#note-1b)             |
| R/I      | Register or integer [[1]](/mcxxxx-language.html#note-1b) |
| P        | Pin register (p0, p1, etc.)                              |
| L        | Label [[2]](/mcxxxx-language.html#note-2)                |

_[1] Integer values must be in the range
-999 to 999._{#note-1b}

_[2] Labels used as operands must be
defined elsewhere in the program_{#note-2}

## Basic Instructions

`nop`\
This instruction has no effect.

`mov R/I R`\
Copy the value of the first operand into the second operand.

`jmp L`\
Jump to the instruction following the specified label.

`slp R/I`\
Sleep for the number of time units specified by the operand.

`slx P`\
Sleep until data is available to be read on the XBus pin specified by the operand.

## Arithmetic Instructions

Registers can store integer values between `-999` and `999`, inclusive. If an arithmetic operation would produce a result outside this range, the closest allowed value is stored instead. For example, if `acc` contains the value `800` and the instruction add `400` is executed, then the value `999` will be stored in `acc`.

`add R/I`\
Add the value of the first operand to the value of the acc register and store the result in the acc register.

`sub R/I`\
Subtract the value of the first operand from the value of the acc register and store the result in the acc register.

`mul R/I`\
Multiply the value of the first operand by the value of the acc register and store the result in the acc register.

`not`\
If the value in acc is 0, store a value of 100 in acc. Otherwise, store a value of 0 in acc.

`dgt R/I`\
Isolate the specified digit of the value in the acc register and store the result in the acc register.

`dst R/I R/I`\
Set the digit of acc specified by the first operand to the value of the second operand.

Examples of the dgt and dst instructions:

| acc | Instruction | acc' |
|:---:|:-----------:|:----:|
| 596 |    dgt 0    |  6   |
| 596 |    dgt 1    |  9   |
| 596 |    dgt 2    |  5   |
|     |             |      |
| 596 |   dst 0 7   | 597  |
| 596 |   dst 1 7   | 576  |
| 596 |   dst 2 7   | 796  |

## Test Instructions

For more information on conditional execution and the `+` or `-` symbols, see [Conditional Execution](/mcxxxx-language.html#conditional-execution)

`teq R/I R/I`\
Test if the value of the first operand (A) is equal to the value of the second operand (B).

|      Condition      | Effect on ‘+’ Instructions | Effect on ‘-’ Instructions |
|:-------------------:|:--------------------------:|:--------------------------:|
|   A is equal to B   |          Enabled           |          Disabled          |
| A is not equal to B |          Disabled          |          Enabled           |

`tgt R/I R/I`\
Test if the value of the first operand (A) is greater than the value of the second operand (B).

|        Condition        | Effect on ‘+’ Instructions | Effect on ‘-’ Instructions |
|:-----------------------:|:--------------------------:|:--------------------------:|
|   A is greater than B   |          Enabled           |          Disabled          |
| A is not greater than B |          Disabled          |          Enabled           |

`tlt R/I R/I`\
Test if the value of the first operand (A) is less than the value of the second operand (B)

|      Condition       | Effect on ‘+’ Instructions | Effect on ‘-’ Instructions |
|:--------------------:|:--------------------------:|:--------------------------:|
|   A is less than B   |          Enabled           |          Disabled          |
| A is not less than B |          Disabled          |          Enabled           |

`tcp R/I R/I`\
Compare the value of the first operand (A) to the value of the second operand (B).

|      Condition      | Effect on ‘+’ Instructions | Effect on ‘-’ Instructions |
|:-------------------:|:--------------------------:|:--------------------------:|
| A is greater than B |          Enabled           |          Disabled          |
|   A is equal to B   |          Disabled          |          Disabled          |
|  A is less than B   |          Disabled          |          Enabled           |