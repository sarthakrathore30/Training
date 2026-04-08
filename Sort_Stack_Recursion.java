public class Sort_Stack_Recursion {

    static void insert(java.util.Stack<Integer> stack, int x) {
        if (stack.isEmpty() || stack.peek() <= x) {
            stack.push(x);
            return;
        }

        int temp = stack.pop();
        insert(stack, x);
        stack.push(temp);
    }

    static void sortStack(java.util.Stack<Integer> stack) {
        if (!stack.isEmpty()) {
            int x = stack.pop();
            sortStack(stack);
            insert(stack, x);
        }
    }

    public static void main(String[] args) {
        java.util.Stack<Integer> stack = new java.util.Stack<>();
        stack.push(3);
        stack.push(1);
        stack.push(4);
        stack.push(2);

        sortStack(stack);
        System.out.println(stack);
    }
}