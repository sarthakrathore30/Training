class Problem1 {
    static class Node {
        String data;
        Node left, right;

        Node(String data) {
            this.data = data;
        }
    }

    public static void main(String[] args) {

        Node CEO = new Node("CEO");
        CEO.left = new Node("CTO");
        CEO.right = new Node("CFO");

        CEO.left.left = new Node("Dev Lead");
        CEO.left.right = new Node("HR");

        CEO.left.left.left = new Node("Dev1");
        CEO.left.left.right = new Node("Dev2");

        System.out.println("Leaf Nodes: Dev1, Dev2, HR");
        System.out.println("Height = 3");
        System.out.println("Depth of Dev Lead = 2");
        System.out.println("Ancestors of Dev1 = Dev Lead, CTO, CEO");
        System.out.println("Degree of CTO = 2");
    }
}