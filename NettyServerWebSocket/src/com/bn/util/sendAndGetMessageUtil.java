package com.bn.util;

import org.omg.CORBA.ORBPackage.InconsistentTypeCode;

import com.bn.server.BinaryWebSocketFrameHandler;

import io.netty.channel.Channel;
import io.netty.channel.group.ChannelGroup;

public class sendAndGetMessageUtil {

	public static void sendTempPlayerAndMajong(Channel inconming,ChannelGroup channels,String message)
	{
		for(Channel channel:channels)
		{
			
			if(channel!=inconming)
			{
				System.out.println("BinaryWebSocketFrameHandler.tempMahJong:"+BinaryWebSocketFrameHandler.tempMahJong);
				if(!BinaryWebSocketFrameHandler.tempMahJong.equals(""))
				{
					IOUtil.writeString
			        (
			        	channel, 
			        	BinaryWebSocketFrameHandler.tempPlayer+Constant.sendNextPlayerMahJong+BinaryWebSocketFrameHandler.tempMahJong,
			        	cf->{System.out.println("�������û���������Ϊ��"+BinaryWebSocketFrameHandler.tempPlayer+Constant.sendNextPlayerMahJong+BinaryWebSocketFrameHandler.tempMahJong);}
			        );
					try{
						System.out.println("���ˣ�");
			            IOUtil.writeString
				        (
			            	channel, 
				        	Constant.sendNextPlayer+BinaryWebSocketFrameHandler.letterToLetter(BinaryWebSocketFrameHandler.tempPlayer), 
				        	cf->{System.out.println("��������Ϊ��"+Constant.sendNextPlayer+BinaryWebSocketFrameHandler.letterToLetter(BinaryWebSocketFrameHandler.tempPlayer));}
				        );
			           }catch(Exception e){
			               e.printStackTrace();
			           }
					
				}
			}
		}
	}
	
	
	public static void sendHuPlayerAndMajong(Channel incoming,ChannelGroup channels,String message)
	{
		for(Channel channel:channels)
		{	
			if(channel!=incoming)
			{
				if(BinaryWebSocketFrameHandler.huNumber!=0)
				{
					IOUtil.writeString
			        (
			        	channel, 
			        	message,
			        	cf->{System.out.println("�������û���������Ϊ��"+message);}
			        );	
				}
			}
		}
	}
	
	public static void sendPengPlayerAndMajong(Channel incoming,ChannelGroup channels,String message)
	{
		for(Channel channel:channels)
		{	
			if(channel!=incoming)
			{
				if(!BinaryWebSocketFrameHandler.tempMahJong.equals(""))
				{
					IOUtil.writeString
			        (
			        	channel, 
			        	message,
			        	cf->{System.out.println("�������û���������Ϊ��"+message);}
			        );	
				}
			}
		}
	}
	
	public static void sendStringMessageToOthersPlayers(Channel incoming,ChannelGroup channels,String message)
	{
		for(Channel channel:channels)
		{
			if(channel!=incoming)
			{
				IOUtil.writeString(
						channel,
						message,
						cf->{System.out.println("��������ҷ��͵���Ϣ��"+message);}
						);
				
			}
		}
	}
	
}
