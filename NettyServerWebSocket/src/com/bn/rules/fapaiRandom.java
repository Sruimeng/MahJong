package com.bn.rules;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import com.bn.util.IntListChange;;

public class fapaiRandom {
	//ȡ��ʼ������
	public static int[] qipaiInt(int[] qipai,int count,int[] fapai,int temppai)
	{
		if(count>4)
		{
			return null;
		}else{
			System.arraycopy(fapai, temppai, qipai, 0, 13);
			return qipai;
		}

	}
	
	//ȡ��һ����
	public static int nextPai(int[] fapai,int temppai)
	{
		int nextPai;
		nextPai=fapai[temppai+1];
		return nextPai;
	}
	
	//����136����
	public static int[] fapaiRandomInt()
	{
		int count=0;
		int[] fapai=new int[136];
		List<Integer> list = new ArrayList<Integer>(); 
		for(int k=0;k<4;k++)
		{
			for(int j=1;j<10;j++)
			{
				list.add(j);
			}
			for(int x=11;x<20;x++)
			{
				list.add(x);
			}
			for(int y=21;y<30;y++)
			{
				list.add(y);
			}
			list.add(31);
			list.add(33);
			list.add(35);
			list.add(37);
			list.add(41);
			list.add(43);
			list.add(45);
		}
		
		
		Collections.shuffle(list);
		fapai=IntListChange.ListToInt(list);
//		for(int i=0;i<fapai.length;i++)
//		{
//			if(fapai[i]==41)
//			{
//				System.out.println(fapai[i]+":"+i);
//			}
//		
//		}
		return fapai;
	}
}
