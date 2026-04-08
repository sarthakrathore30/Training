public class Round_Robin_CLL {

    static class Node {
        int id;
        int burst;
        Node next;

        Node(int i, int b) {
            id = i;
            burst = b;
        }
    }

    Node head;

    void add(int id, int burst) {
        Node n = new Node(id, burst);
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
        Node temp = head;
        if (head == null) return;
        do {
            System.out.println("Process " + temp.id);
            temp = temp.next;
        } while (temp != head);
    }

    public static void main(String[] args) {
        Round_Robin_CLL r = new Round_Robin_CLL();
        r.add(1, 5);
        r.add(2, 3);
        r.display();
    }
}