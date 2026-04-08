public class Library_DLL {

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
        n.next = head;
        if (head != null) head.prev = n;
        head = n;
    }

    void display() {
        Node temp = head;
        while (temp != null) {
            System.out.println(temp.title);
            temp = temp.next;
        }
    }

    public static void main(String[] args) {
        Library_DLL l = new Library_DLL();
        l.add("Book1");
        l.add("Book2");
        l.display();
    }
}