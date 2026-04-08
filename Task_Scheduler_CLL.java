public class Task_Scheduler_CLL {

    static class Node {
        int id;
        Node next;

        Node(int id) {
            this.id = id;
        }
    }

    Node head = null;

    void add(int id) {
        Node n = new Node(id);
        if (head == null) {
            head = n;
            n.next = head;
        } else {
            Node temp = head;
            while (temp.next != head) temp = temp.next;
            temp.next = n;
            n.next = head;
        }
    }

    void display() {
        if (head == null) return;
        Node temp = head;
        do {
            System.out.println(temp.id);
            temp = temp.next;
        } while (temp != head);
    }

    public static void main(String[] args) {
        Task_Scheduler_CLL t = new Task_Scheduler_CLL();
        t.add(1);
        t.add(2);
        t.display();
    }
}