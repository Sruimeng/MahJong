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
			        	cf->{System.out.println("给其他用户发送数据为："+BinaryWebSocketFrameHandler.tempPlayer+Constant.sendNextPlayerMahJong+BinaryWebSocketFrameHandler.tempMahJong);}
			        );
					try{
						System.out.println("走了：");
			            IOUtil.writeString
				        (
			            	channel, 
				        	Constant.sendNextPlayer+BinaryWebSocketFrameHandler.letterToLetter(BinaryWebSocketFrameHandler.tempPlayer), 
				        	cf->{System.out.println("发送数据为："+Constant.sendNextPlayer+BinaryWebSocketFrameHandler.letterToLetter(BinaryWebSocketFrameHandler.tempPlayer));}
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
			        	cf->{System.out.println("给其他用户发送数据为："+message);}
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
			        	cf->{System.out.println("给其他用户发送数据为："+message);}
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
						cf->{System.out.println("给其他玩家发送的信息："+message);}
						);
				
			}
		}
	}
	
}
