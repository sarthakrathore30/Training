public class Undo_Redo_DLL {

    static class Node {
        String state;
        Node prev, next;

        Node(String s) {
            state = s;
        }
    }

    Node current;

    void add(String s) {
        Node n = new Node(s);
        if (current != null) {
            current.next = n;
            n.prev = current;
        }
        current = n;
    }

    void undo() {
        if (current.prev != null)
            current = current.prev;
    }

    void redo() {
        if (current.next != null)
            current = current.next;
    }

    void display() {
        System.out.println(current.state);
    }

    public static void main(String[] args) {
        Undo_Redo_DLL u = new Undo_Redo_DLL();
        u.add("A");
        u.add("B");
        u.undo();
        u.display();
    }
}