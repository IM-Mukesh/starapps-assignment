function minPlanesToReachEnd(fuel) {
  const n = fuel.length;
  // here if the length of the fuel is 0 then directly returning -1
  if (n === 0) return -1;

  let currentMaxReach = fuel[0];
  let nextMaxReach = fuel[0];
  let planes = 1;

  // here we are traversing through 1 to last element
  for (let i = 1; i < n; i++) {
    //
    if (i > currentMaxReach) {
      console.log("updating", i);
      // if we don't have the fuel require to go to next airport then retuning -1 otherwise updating plane count to 1 and updating currentMaxReach
      if (i > nextMaxReach) {
        return -1;
      }
      currentMaxReach = nextMaxReach;
      planes++;
    }
    // assigning maximum value to nextMaxReach
    nextMaxReach = Math.max(nextMaxReach, i + fuel[i]);
  }
  return planes;
}

// basic test cases
console.log(minPlanesToReachEnd([2, 1, 2, 3, 1])); // Output: 2
console.log(minPlanesToReachEnd([1, 6, 3, 4, 5, 0, 0, 0, 6])); // Output: 3
