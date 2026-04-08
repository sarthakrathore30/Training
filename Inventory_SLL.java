public class Inventory_SLL {

    static class Node {
        String name;
        int qty;
        int price;
        Node next;

        Node(String n, int q, int p) {
            name = n;
            qty = q;
            price = p;
        }
    }

    Node head;

    void add(String n, int q, int p) {
        Node newNode = new Node(n, q, p);
        newNode.next = head;
        head = newNode;
    }

    int totalValue() {
        int sum = 0;
        Node temp = head;
        while (temp != null) {
            sum += temp.qty * temp.price;
            temp = temp.next;
        }
        return sum;
    }

    public static void main(String[] args) {
        Inventory_SLL i = new Inventory_SLL();
        i.add("Item1", 2, 50);
        i.add("Item2", 3, 30);
        System.out.println(i.totalValue());
    }
}