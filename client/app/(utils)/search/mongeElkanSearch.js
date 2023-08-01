import jaroWinkler from "./jaroWinklerSearch";
export default function mongeElkan(s1, s2) {
    const a1 = s1.split(" ");
    const a2 = s2.split(" ");
  
    let cummax = 0;
  
    for (let i in a1) {
      let maxscore = 0;
      for (let j in a2) {
        maxscore = Math.max(maxscore, jaroWinkler(a1[i], a2[j]));
      }
      cummax += maxscore;
    }
  
    return cummax / a1.length;
  };