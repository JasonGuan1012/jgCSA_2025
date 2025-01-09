public class Sign {
    private String message;
    private int width;

    // 构造方法，初始化 message 和 width
    public Sign(String message, int width) {
        this.message = message;
        this.width = width;
    }

    // numberOfLines 方法，计算需要几行来显示消息
    public int numberOfLines() {
        if (message.isEmpty()) {
            return 0;  // 如果消息为空，返回 0 行
        }
        // 计算行数，message.length() / width 向上取整
        return (message.length() + width - 1) / width;
    }

    // getLines 方法，把消息分成一行一行，用分号连接
    public String getLines() {
        if (message.isEmpty()) {
            return null;  // 如果消息为空，返回 null
        }

        StringBuilder result = new StringBuilder();
        int i = 0;
        while (i < message.length()) {
            // 获取当前行的子字符串，不超过 width 个字符
            int end = Math.min(i + width, message.length());
            result.append(message.substring(i, end));
            if (end < message.length()) {
                result.append(";");
            }
            i = end;
        }
        return result.toString();
    }

    public static void main(String[] args) {
        // 示例 1
        Sign sign1 = new Sign("ABC222DE", 3);
        System.out.println("Number of lines: " + sign1.numberOfLines());  // 输出 3
        System.out.println("Get lines: " + sign1.getLines());  // 输出 ABC;222;DE

        // 示例 2
        Sign sign2 = new Sign("ABCD", 10);
        System.out.println("Number of lines: " + sign2.numberOfLines());  // 输出 1
        System.out.println("Get lines: " + sign2.getLines());  // 输出 ABCD

        // 示例 3
        Sign sign4 = new Sign("", 4);
        System.out.println("Number of lines: " + sign4.numberOfLines());  // 输出 0
        System.out.println("Get lines: " + sign4.getLines());  // 输出 null

        // 示例 4
        Sign sign5 = new Sign("AB_CD_EF", 2);
        System.out.println("Number of lines: " + sign5.numberOfLines());  // 输出 4
        System.out.println("Get lines: " + sign5.getLines());  // 输出 AB;C;D;EF
    }
}
