/**
 * @param  {string}  moves
 * @return {boolean}
 */
const judgeCircle = (moves) => {
  let map = {U: 0, D: 0, R: 0, L: 0};
  let res;
  for(let i = 0; i < moves.length; i++) {
    map[moves[i]] +=1;
  }
  (map.U === map.D && map.R === map.L) ? res = true : res = false;
  
  return res;
}
