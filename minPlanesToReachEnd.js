function minPlanesToReachEnd(fuel) {
  const n = fuel.length;
  if (n === 0) return -1;

  let currentMaxReach = fuel[0];
  let nextMaxReach = fuel[0];
  let planes = 1;

  for (let i = 1; i < n; i++) {
    if (i > currentMaxReach) {
      if (i > nextMaxReach) {
        return -1;
      }
      currentMaxReach = nextMaxReach;
      planes++;
    }
    nextMaxReach = Math.max(nextMaxReach, i + fuel[i]);
  }

  return planes;
}

// Test cases
console.log(minPlanesToReachEnd([2, 1, 2, 3, 1])); // Output: 2
console.log(minPlanesToReachEnd([1, 6, 3, 4, 5, 0, 0, 0, 6])); // Output: 3
