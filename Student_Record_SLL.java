public class Student_Record_SLL {

    static class Node {
        int roll;
        String name;
        int age;
        String grade;
        Node next;

        Node(int r, String n, int a, String g) {
            roll = r;
            name = n;
            age = a;
            grade = g;
        }
    }

    Node head;

    void add(int r, String n, int a, String g) {
        Node newNode = new Node(r, n, a, g);
        newNode.next = head;
        head = newNode;
    }

    void display() {
        Node temp = head;
        while (temp != null) {
            System.out.println(temp.roll + " " + temp.name);
            temp = temp.next;
        }
    }

    public static void main(String[] args) {
        Student_Record_SLL list = new Student_Record_SLL();
        list.add(1, "A", 20, "A");
        list.add(2, "B", 21, "B");
        list.display();
    }
}