public class Learning {
    public static void main(String[] args) {
        String str = "aaaabbbbccccdddeertvkhjghjgsgu";
        StringBuilder sb = new StringBuilder("");
        System.out.println(removeDuplicate(str, 0, sb));
    }

    public static String removeDuplicate(String str, int currIndex, StringBuilder sb) {
        // Base Case
        if (currIndex == str.length() - 1) {
            sb.append(str.charAt(currIndex));
            return sb.toString();
        }

        // Making the curr and next character variable :
        char currChar = str.charAt(currIndex);
        char nextChar = str.charAt(currIndex + 1);

        // logic
        if (currChar != nextChar) {
            sb.append(currChar);
        }

        // recursive call

        return removeDuplicate(str, ++currIndex, sb);
    }
}
