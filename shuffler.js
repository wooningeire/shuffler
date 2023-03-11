/**
 * Selects unique items from an iterable or array-like at random.
 * @param {Iterable} source The items to be delivered.
 * @param {object} [options] Options for the shuffler.
 * @param {number} [options.nLimit=Infinity] The maximum number of items to yield.
 * @param {boolean} [options.useSourceCopy=true] Whether to use a copy of the source when shuffling.
 * @returns {Generator}
 * @yields {*} A randomly selected item from the source.
 */
function* uniqueRandomItemsFrom(source, {nLimit=Infinity, useSourceCopy=true}={}) {
	const array = useSourceCopy ? Array.from(source) : source;

	// Progressively shuffle array's contents
	const iLowerBound = Math.max(0, array.length - nLimit);
	for (let i = array.length - 1; i >= iLowerBound; i--) {
		const iNew = Math.floor(Math.random() * (i + 1));
		yield array[iNew];

		[array[i], array[iNew]] = [array[iNew], array[i]];
	}
}