# MongoDB findOne() null Handling

This repository demonstrates a common issue when using MongoDB's `findOne()` method: the return of `null` when no matching document is found.  This can cause unexpected errors if the code assumes a non-null result, even if empty.

The `bug.js` file shows the problematic code. `bugSolution.js` provides a solution by adding proper null checks before attempting to access properties.  Always check for `null` after a `findOne()` query to avoid unexpected application behavior.