// Collatz conjecture

const prompt = require('prompt-sync')();

function collatz(n)
{
	/* Calculate the number of steps needed 
	 * for a number to get to 1 in a Collatz
	 * sequence. Also log the intermediate
	 * numbers in between. */

	console.log(n);
	let steps = 0;
		
	while (n !== 1)
	{
		if (n % 2 === 0) n /= 2;
		else n = 3 * n + 1;
	
		steps++;
		console.log(n);
	}

	return steps;
}

function main()
{
	console.log("Collatz Sequence! Type q to quit");

	while (true)
	{
		const n = prompt('1st term of Collatz sequence: ');
	
		// Quit
		if (n.toUpperCase() == 'Q')
		{
			console.log("Thanks for trying out my program!");
			return;
		}
		// Collatz
		else if (!isNaN(n) && n >= 1) collatz(Number(n));
		// Wrong input
		else console.log("Invalid input, please try again.");
	}
}
main();
