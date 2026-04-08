public class Zero_Sum_Subarrays {

    static void findSubarrays(int[] arr) {
        java.util.HashMap<Integer, Integer> map = new java.util.HashMap<>();
        int sum = 0;

        for (int i = 0; i < arr.length; i++) {
            sum += arr[i];

            if (sum == 0) {
                System.out.println("Subarray: 0 to " + i);
            }

            if (map.containsKey(sum)) {
                System.out.println("Subarray: " + (map.get(sum) + 1) + " to " + i);
            }

            map.put(sum, i);
        }
    }

    public static void main(String[] args) {
        int[] arr = {6, 3, -1, -3, 4, -2, 2, 4, 6, -12, -7};
        findSubarrays(arr);
    }
}