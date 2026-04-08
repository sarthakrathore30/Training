public class Stock_Span {

    static void calculateSpan(int[] price) {
        java.util.Stack<Integer> stack = new java.util.Stack<>();
        int[] span = new int[price.length];

        for (int i = 0; i < price.length; i++) {
            while (!stack.isEmpty() && price[stack.peek()] <= price[i]) {
                stack.pop();
            }

            span[i] = stack.isEmpty() ? (i + 1) : (i - stack.peek());
            stack.push(i);
        }

        for (int s : span) {
            System.out.print(s + " ");
        }
    }

    public static void main(String[] args) {
        int[] price = {100, 80, 60, 70, 60, 75, 85};
        calculateSpan(price);
    }
}