/**
 * 🎨 Priya ki Diwali Rangoli
 *
 * Priya Diwali pe rangoli banati hai. Uska pattern ek diamond shape mein
 * hota hai stars (*) ka. Tu usse help kar pattern generate karne mein!
 *
 * Rules (use nested for loops):
 *   - Input n determines the size of the diamond
 *   - The diamond has 2n - 1 rows total
 *   - Row i (1-indexed) of the top half has i stars
 *   - Row i of the bottom half mirrors the top
 *   - Stars are separated by a single space
 *   - Each row has leading spaces for center alignment
 *   - The widest row has n stars: "* * * ... *" (2n-1 chars wide)
 *   - No trailing spaces on any row
 *
 * Pattern for n=3:
 *     *
 *   * *
 *   * * *
 *   * *
 *     *
 *
 * (Each row is a string in the returned array)
 *
 * Validation:
 *   - Agar n positive integer nahi hai (0, negative, decimal, non-number),
 *     return empty array []
 *
 * @param {number} n - Size of the diamond (number of stars in the widest row)
 * @returns {string[]} Array of strings forming the diamond pattern
 *
 * @example
 *   rangoli(1) // => ["*"]
 *   rangoli(2) // => [" *", "* *", " *"]
 *   rangoli(3) // => ["  *", " * *", "* * *", " * *", "  *"]
 */
export function rangoli(n) {
  // Your code here
  if (typeof n !== "number" || n <= 0 || !Number.isInteger(n)) {
    return [];
  }

  let result = [];
  let totalRows = 2 * n - 1;

  for (let row = 1; row <= totalRows; row++) {
    let stars;
    if (row <= n) {
      stars = row;
    } else {
      stars = 2 * n - row;
    }

    let spaces = n - stars;

    let rowStr = "";

    // leading spaces
    for (let s = 0; s < spaces; s++) {
      rowStr += " ";
    }

    // stars with single space separation
    for (let st = 0; st < stars; st++) {
      rowStr += "*";
      if (st !== stars - 1) {
        rowStr += " ";
      }
    }

    result.push(rowStr);
  }

  return result;
}

