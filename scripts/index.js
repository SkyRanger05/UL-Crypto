async function main() {

	let pyodide = await loadPyodide();

	// Pyodide is now ready for use....

	await pyodide.loadPackage("micropip");

	const micropip = pyodide.pyimport("micropip");

	await micropip.install(["pandas", "matplotlib", "matplotlib-pyodide"]);

	let pythonCode = await (await fetch("scripts/test.py")).text();

	document.getElementById("demo").innerHTML = pyodide.runPython(

		pythonCode

	);

}

main();
