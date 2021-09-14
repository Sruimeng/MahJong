package com.bn.util;

import java.util.List;

public class IntListChange {

	public static int[] ListToInt(List<Integer> ls)
	{
		int[] result=new int[ls.size()];
		for(int i=0;i<ls.size();i++)
		{
			result[i]=ls.get(i);
		}
		return result;
	}
	
	public static String IntToString(int[] in)
	{
		String result = "";
		for(int in_a:in)
		{
			result+=in_a+"<#>";
		}
		return result;
	}
	
}
