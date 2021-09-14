package com.bn.server;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.Stack;


public class QXZHX {
	
	//���Ե�main����
    public static void main(String arg[]) throws IOException {
        String str = "";
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in)); 
        System.out.println("�������������ʽ:"); 
        str = br.readLine(); 
        ArrayList postfix = transform(str);
        int result= calculate(postfix);
        System.out.println("�������ʽ���Ϊ:"+result); 
        
    }    

    //����׺���ʽת���ɺ�׺���ʽ
    public static ArrayList transform(String prefix) {
        int i, len = prefix.length();// ���ַ����鱣��ǰ׺���ʽ
        prefix=prefix+ '#';// ��ǰ׺���ʽ��'#'��β
        Stack<Character> stack = new Stack<Character>();// �����������ջ
        stack.push('#');// ������'#'��ջ
        ArrayList postfix = new ArrayList();
        // �����׺���ʽ���б�,���������֣�Ҳ�����ǲ�������֮ǰʹ�õ���ArrayList
        for (i = 0; i < len + 1; i++) {
            if (Character.isDigit(prefix.charAt(i))) {// ��ǰ�ַ���һ������
                if (Character.isDigit(prefix.charAt(i+1))) {// ��ǰ�ַ�����һ���ַ�Ҳ������(��λ��)
                    postfix.add(10 * (prefix.charAt(i)-'0') + (prefix.charAt(i+1)-'0'));
                    i++;
                } else {// ��ǰ�ַ�����һ���ַ���������(һλ��)
                    postfix.add((prefix.charAt(i)-'0'));
                }
            } else {// ��ǰ�ַ���һ��������
                switch (prefix.charAt(i)) {
                case '(':// ����ǿ�����
                    stack.push(prefix.charAt(i));// ������ֻ�Ƿ��뵽ջ�У������뵽��׺���ʽ��
                    break;
                case ')':// ����Ǳ�����
                    while (stack.peek() != '(') {
                        postfix.add(stack.pop());// �������ǲ���ջ��
                    }
                    stack.pop();// ����'('
                    break;
                default:// Ĭ�������:+ - * /
                    while (stack.peek() != '#'
                            && compare(stack.peek(), prefix.charAt(i))) {
                        postfix.add(stack.pop());// ���ϵ�ջ��ֱ����ǰ�Ĳ����������ȼ�����ջ��������
                    }
                    if (prefix.charAt(i) != '#') {// �����ǰ�Ĳ���������'#'(������)����ô�������ջ
                        stack.push(prefix.charAt(i));// ���ı�ʶ��'#'�ǲ���ջ��
                    }
                    break;
                }
            }
        }
        return postfix;
    }

    //�Ƚ������֮������ȼ�
    public static boolean compare(char peek, char cur) {// �����peek���ȼ�����cur������true��Ĭ�϶���peek���ȼ�Ҫ��
        if (peek == '*'
                && (cur == '+' || cur == '-' || cur == '/' || cur == '*')) {// ���cur��'('����ôcur�����ȼ���,�����')'���������洦��
            return true;
        } else if (peek == '/'
                && (cur == '+' || cur == '-' || cur == '*' || cur == '/')) {
            return true;
        } else if (peek == '+' && (cur == '+' || cur == '-')) {
            return true;
        } else if (peek == '-' && (cur == '+' || cur == '-')) {
            return true;
        } else if (cur == '#') {// ������ر�����˵��������׺���ʽ�Ľ�β����ô��Ҫ����������ջ�е����в���������׺���ʽ��
            return true;// ��curΪ'#'ʱ��cur�����ȼ�������͵�
        }
        return false;// �������ǲ��ÿ��ǵģ��������ȼ�һ������С��,curһ������ջ
    }
    
    //�����׺���ʽ
    public static int calculate(ArrayList postfix){//��׺���ʽ������˳����ǲ��������ֵ��Ⱥ�˳��
        int i,res=0,size=postfix.size();
        Stack<Integer> stack_num=new Stack<Integer>();
        for(i=0;i<size;i++){
            if(postfix.get(i).getClass()==Integer.class){//˵���ǲ���������������ð���
                stack_num.push((Integer)postfix.get(i));
            }else{//����ǲ�����
                int a=stack_num.pop();
                int b=stack_num.pop();//ע������ʱ��ǰ�ߺͺ���
                switch((Character)postfix.get(i)){
                case '+':
                    res=b+a;
                    break;
                case '-':
                    res=b-a;
                    break;
                case '*':
                    res=b*a;
                    break;
                case '/':
                    res=b/a;
                    break;
                }
                stack_num.push(res);
            }
        }
        res=stack_num.pop();
        return res;
    }
	    
}



