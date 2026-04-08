public class Movie_DLL {

    static class Node {
        String title;
        Node prev, next;

        Node(String t) {
            title = t;
        }
    }

    Node head;

    void add(String t) {
        Node n = new Node(t);
        if (head == null) head = n;
        else {
            n.next = head;
            head.prev = n;
            head = n;
        }
    }

    void display() {
        Node temp = head;
        while (temp != null) {
            System.out.println(temp.title);
            temp = temp.next;
        }
    }

    public static void main(String[] args) {
        Movie_DLL m = new Movie_DLL();
        m.add("Movie1");
        m.add("Movie2");
        m.display();
    }
}