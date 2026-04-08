public class Sliding_Window_Maximum {

    static void maxSlidingWindow(int[] nums, int k) {
        java.util.Deque<Integer> dq = new java.util.LinkedList<>();

        for (int i = 0; i < nums.length; i++) {

            if (!dq.isEmpty() && dq.peek() == i - k) {
                dq.poll();
            }

            while (!dq.isEmpty() && nums[dq.peekLast()] < nums[i]) {
                dq.pollLast();
            }

            dq.offer(i);

            if (i >= k - 1) {
                System.out.print(nums[dq.peek()] + " ");
            }
        }
    }

    public static void main(String[] args) {
        int[] arr = {1,3,-1,-3,5,3,6,7};
        int k = 3;
        maxSlidingWindow(arr, k);
    }
}