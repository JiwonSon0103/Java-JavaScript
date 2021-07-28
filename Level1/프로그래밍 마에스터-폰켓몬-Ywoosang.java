import java.util.ArrayList;
class Solution {
    public int solution(int[] nums) {
        int answer = 0;
        int number = nums.length/2;
        ArrayList<Integer> tmp = new ArrayList<>();
        for(int item: nums){
            boolean isUnique = true; 
            for(int i=0; i<tmp.size(); i++){
                if(tmp.get(i) == item){
                    isUnique = false;
                    break; 
                };
            }
            if(isUnique){
                tmp.add(item);
            }
        }
        if(number > tmp.size()){
            answer = tmp.size();
        } else {
            answer = number;
        };
        return answer;
    }
}