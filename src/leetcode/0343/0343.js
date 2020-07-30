/**
 * @param {number} n
 * @return {number}
 */
var integerBreak = function(n) {
  if (n <= 2) return 1
  if (n === 3) return 2
  // dp[i][j] 和为i的数分j段 的最大乘积
  const dp = Array.from(
    {length: n + 1}, 
    () => Array.from({length: n + 1}, () => 1)
  );

  // 第i个数分i份 都是 1*1... 所以都是1
  for(let i = 0; i <= n; i++) {
    // dp[i][i] = 1;
    const half = Math.floor(i / 2);
    dp[i][2] = half * (i - half);
    dp[i][1] = i;
  }

  for(let i = 2; i <= n; i++) {
    // i 最少分2份 最多只能分i份
    for(let j = 2; j < i; j++) {
      let max = dp[i][j];
      
      // 状态转移
      for(let k = 1; k <= i - 2; k++) {
        for(let m = 1; m <= Math.min(j-2, k); m++) {
          max = Math.max(max, dp[i-k][j-m] * dp[k][m]);
        }
      }

      dp[i][j] = max;
    }
  }

  return dp[n].reduce((acc, cur) => Math.max(acc, cur));
};

module.exports.integerBreak = integerBreak;