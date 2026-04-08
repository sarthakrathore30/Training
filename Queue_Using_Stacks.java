public class Queue_Using_Stacks {
    java.util.Stack<Integer> s1 = new java.util.Stack<>();
    java.util.Stack<Integer> s2 = new java.util.Stack<>();

    void enqueue(int x) {
        s1.push(x);
    }

    int dequeue() {
        if (s2.isEmpty()) {
            while (!s1.isEmpty()) {
                s2.push(s1.pop());
            }
        }
        return s2.pop();
    }

    public static void main(String[] args) {
        Queue_Using_Stacks q = new Queue_Using_Stacks();
        q.enqueue(1);
        q.enqueue(2);
        q.enqueue(3);

        System.out.println(q.dequeue()); // 1
    }
}