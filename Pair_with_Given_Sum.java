public class Pair_with_Given_Sum {

    public static boolean hasPair(int[] arr, int target) {
        java.util.HashMap<Integer, Integer> map = new java.util.HashMap<>();

        for (int i = 0; i < arr.length; i++) {
            int complement = target - arr[i];

            if (map.containsKey(complement)) {
                System.out.println("Pair found: " + arr[i] + " + " + complement + " = " + target);
                return true;
            }

            map.put(arr[i], i);
        }

        return false;
    }

    public static void main(String[] args) {
        int[] arr = {2, 7, 11, 15};
        int target = 9;

        if (!hasPair(arr, target)) {
            System.out.println("No pair found");
        }
    }
}