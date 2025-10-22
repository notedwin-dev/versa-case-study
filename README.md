# Versa Case Study - The Big Bang

### Problem:
There was a tale when 2 prime numbers collided and a big bang happened. Scientists found out the 2 prime numbers are 3 and 5 but they need a model to generate an array of numbers to predict when the big bang will happen again.

### Solution:
Create a script to iterate through 1 to 100 and replace any number divisible by 3 with the word
BIG number divisible by 5 with the word BANG. If the number is divisible by 3 and 5, replace it
with BIG BANG. Generate the array and output to `output.json` file with result as follow:
```
[“1”, “2”, “BIG”, “4”, “BANG”, “BIG”, “7”, “8”, “BIG”, “BANG”, “11”, “BIG”, “13”, “14”, “BIGBANG”,
…. all the way to 100]
```

### Case Study Requirements
The only requirements is to use either `TypeScript` or `JavaScript`. To simplify the task and not over-engineer, I chose to use JavaScript as the implementation can be kept clean while still have a error handling (try-catch statement) to catch any potential issues with outputting the result into `output.json`

## Setup Instructions:

**1. Prerequisites**
- it is required to have Node.js v12 or above.

2. Installation

```bash
# Clone this repository
git clone https://github.com/notedwin-dev/versa-case-study.git

# Locate the project directory
cd versa-case-study
```

3. Starting the application

```bash
# Starts the application which uses node command under the hood
npm run start

# Alternatively, you can run the node command directly without going through NPM.
node src/index.js
```

### Just In Case
Just in case if you do not want to run the project, I have attached the `output.json` under the `src` folder😊