class Solution {
  public boolean judgeCircle(String moves) {
    HashMap map = new HashMap();
    map.put("U", 0);
    map.put("D", 0);
    map.put("L", 0);
    map.put("R", 0);

    boolean res = false;

    for (int i = 0; i < moves.length(); i++) {
      char c = moves.charAt(i);
      String k = String.valueOf(c);
      Object get = map.get(k);
      int num = (Integer) get + 1;
      map.put(k, num);
    }

    if ((map.get("U") == map.get("D")) && (map.get("L") == map.get("R"))) {
      res = true;
    } else {
      res = false;
    }

    return res;
  }
}