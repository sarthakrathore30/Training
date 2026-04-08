public class Social_Media_SLL {

    static class Node {
        int id;
        Node next;

        Node(int id) {
            this.id = id;
        }
    }

    Node head;

    void add(int id) {
        Node n = new Node(id);
        n.next = head;
        head = n;
    }

    void display() {
        Node temp = head;
        while (temp != null) {
            System.out.println(temp.id);
            temp = temp.next;
        }
    }

    public static void main(String[] args) {
        Social_Media_SLL s = new Social_Media_SLL();
        s.add(1);
        s.add(2);
        s.display();
    }
}