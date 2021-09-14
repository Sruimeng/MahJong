package com.bn.util;

public class ConvertUtil 
{
	//将字符串编码转换为字节数组
	public static byte[] fromStringToBytes(String s)
	{
		byte[] ba=new byte[s.length()*2];
		for(int i=0;i<s.length();i++)
		{
			int c=s.charAt(i);
			byte[] temp=fromIntToBytes(c);
			ba[i*2+0]=temp[0];
			ba[i*2+1]=temp[1];
		}
		return ba;
	}
	
	//将浮点数转换为字节数组
	public static byte[] fromFloatToBytes(float f)
	{
		int ti=Float.floatToIntBits(f);
		return fromIntToBytes(ti);
	}
	
	//将整数变为四字节数组，索引大的字节为高位
	public static byte[] fromIntToBytes(int k)
	{
		byte[] buff = new byte[4];
		buff[0]=(byte)(k&0x000000FF);
		buff[1]=(byte)((k&0x0000FF00)>>>8);
		buff[2]=(byte)((k&0x00FF0000)>>>16);
		buff[3]=(byte)((k&0xFF000000)>>>24);
		
		return buff;
	}
	
	//将字符编码字节数组转化为字符串
	public static String fromBytesToString(byte[] bufId)
	{
		int count=bufId.length;
		StringBuilder sb=new StringBuilder();
		for(int i=0;i<count/2;i++)
		{
			int c=fromBytesToInt(new byte[]{bufId[i*2+0],bufId[i*2+1],0,0});
			sb.append((char)c);
		}
		return sb.toString();
	}
	
	//将字节数组转四字节整数
	public static int fromBytesToInt(byte[] buff)
	{
		return (buff[3] << 24) 
			+ ((buff[2] << 24) >>> 8) 
			+ ((buff[1] << 24) >>> 16) 
			+ ((buff[0] << 24) >>> 24);
	}
	
	public static float fromBytesToFloat(byte[] buf)
	{
		int k= fromBytesToInt(buf);		
		return Float.intBitsToFloat(k);
	}
}
