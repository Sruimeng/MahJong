package com.bn.server;


import java.io.Console;
import java.util.Arrays;
import java.util.HashMap;
import java.util.Map;

import io.netty.channel.*;
import io.netty.channel.group.*;
import io.netty.handler.codec.AsciiHeadersEncoder.NewlineType;
import io.netty.handler.codec.http.websocketx.*;
import io.netty.util.concurrent.*;
import com.bn.util.*;
import com.bn.rules.*;


public class BinaryWebSocketFrameHandler extends SimpleChannelInboundHandler<BinaryWebSocketFrame> 
{
	//客户端列表
	public static Map<Channel,playerManager> ulist=new HashMap<Channel,playerManager>();
	public static int[] allMjArray=fapaiRandom.fapaiRandomInt();//总的麻将总数//获取一个随机的麻将数组
	//public static int[] qipai=new int[13];//起牌数组
	public static int[] qipai={1,2,3,17,17,17,7,7,7,14,15,13,25};
	//public static int[] qipai={1,2,3,17,17,17,7,7,8,14,15,13,25};
	public static int temppai=0;//现在发牌到哪了，起牌增加12，普通发牌加1
	public static int count=0;//四个玩家，第五个玩家无法获取起始手牌
	public static int linkNumber=0;//连接四个玩家后才能开始游戏
	String result="";
	int valInt=5;//初始化Int类型
	int valInt1=5;
	float valFloat;
	int[] mahjongChiNumberArray= new int[3];
	String message;
	int messageInt;
	int gangNumber;
	
	int chiNumber;
	int chiPlayer;
	
	int gettempPlayerInIntLength=0;
	int gettempIntLength=0;
	public static int huNumber=0;
	int huPlayer;
	public static String valString;
	public static String tempMahJong="";//当前麻将的是多少
	public static String tempPlayer="";//当前玩家是a为0，b为1，c为2，d为3
	int resetNumber=0;
	
    public static ChannelGroup channels = new DefaultChannelGroup(GlobalEventExecutor.INSTANCE);
	@Override
	protected void channelRead0(ChannelHandlerContext ctx,BinaryWebSocketFrame msg) throws Exception 
	{ 	
		//获取当前消息对应的Channel
		Channel incoming = ctx.channel();
		
		//接收消息数据
		byte[] data=IOUtil.readBytes(msg);
		//取出前四个字节，看数据类型
		int type=ConvertUtil.fromBytesToInt(Arrays.copyOfRange(data, 0, 4));
		System.out.println("type="+type);
		switch(type)
		{
			case 1://整数
				  valInt=ConvertUtil.fromBytesToInt(Arrays.copyOfRange(data, 4,8));
				  System.out.println("收到整数>>>"+valInt);
			break;
			case 2://浮点数
				  valFloat=ConvertUtil.fromBytesToFloat(Arrays.copyOfRange(data, 4,8));
				  System.out.println("收到浮点数>>>"+valFloat);
			break;
			case 3://字符串
				  valString=ConvertUtil.fromBytesToString(Arrays.copyOfRange(data, 4,data.length));
				  System.out.println("收到纯字符串>>>"+valString+"|||||长度为："+valString.length());
			break;
			case 4://字符串混合整数
				valInt=ConvertUtil.fromBytesToInt(Arrays.copyOfRange(data, 4,8));
				valString=ConvertUtil.fromBytesToString(Arrays.copyOfRange(data, 8,data.length));
				valString=valString+valInt+"";
				valInt=5;
				System.out.println("收到int类型>>>->"+valInt+"|||||长度为："+valString.length());
				System.out.println("收到字符串加一个int类型数>>>->"+valString+"|||||长度为："+valString.length());
				break;
			case 5:
				valInt=ConvertUtil.fromBytesToInt(Arrays.copyOfRange(data, 4,8));
				valInt1=ConvertUtil.fromBytesToInt(Arrays.copyOfRange(data, 8,12));
				valString=ConvertUtil.fromBytesToString(Arrays.copyOfRange(data, 12,data.length));
				valString=valInt+valString+valInt1+"";
				valInt=5;
				valInt1=5;
				
				System.out.println("收到字符串2>>>->"+valString+"|||||长度为："+valString.substring(1,23));
				break;
			case 6:
				messageInt=ConvertUtil.fromBytesToInt(Arrays.copyOfRange(data, 4,8));
				valInt=ConvertUtil.fromBytesToInt(Arrays.copyOfRange(data, 8,12));
				mahjongChiNumberArray[0]=ConvertUtil.fromBytesToInt(Arrays.copyOfRange(data, 12,16));
				mahjongChiNumberArray[1]=ConvertUtil.fromBytesToInt(Arrays.copyOfRange(data, 16,20));
				mahjongChiNumberArray[2]=ConvertUtil.fromBytesToInt(Arrays.copyOfRange(data, 20,24));
				valString=valInt+"";
				valInt=5;
				System.out.println("收到字符串及吃数组>>>->"+valString+"|||||长度为："+valString.length());
				break;
			case 7:
				messageInt=ConvertUtil.fromBytesToInt(Arrays.copyOfRange(data, 4,8));
				valInt=ConvertUtil.fromBytesToInt(Arrays.copyOfRange(data, 8,12));
				gangNumber=ConvertUtil.fromBytesToInt(Arrays.copyOfRange(data, 12,16));
				valString=valInt+"";
				valInt=5;
				System.out.println("收到字符串及吃数组>>>->"+valString+"|||||长度为："+valString.length());
				break;
		    case 8:
		    	messageInt=ConvertUtil.fromBytesToInt(Arrays.copyOfRange(data, 4,8));
		    	huPlayer=ConvertUtil.fromBytesToInt(Arrays.copyOfRange(data, 8,12));
		    	System.out.println(huPlayer+"11111111");
		    	huNumber=ConvertUtil.fromBytesToInt(Arrays.copyOfRange(data, 12,16));
				System.out.println("收到字符串及胡>>>->"+huPlayer+"||messageInt:"+messageInt+"||huNumber:"+huNumber);
				break;
		    case 9:
		    	messageInt=ConvertUtil.fromBytesToInt(Arrays.copyOfRange(data, 4,8));
		    	gettempPlayerInIntLength=ConvertUtil.fromBytesToInt(Arrays.copyOfRange(data, 8,12));
		    	gettempIntLength=ConvertUtil.fromBytesToInt(Arrays.copyOfRange(data, 12,16));
				System.out.println("收到当前玩家及数组长度>>>->"+gettempPlayerInIntLength+"||messageInt:"+messageInt+"||gettempIntLength:"+gettempIntLength);
				break;
		    case 10:
		    	messageInt=ConvertUtil.fromBytesToInt(Arrays.copyOfRange(data, 4,8));
				System.out.println("收到当前玩家及数组长度>>>->"+"||messageInt:"+messageInt);
				break;
		    case 11:
		    	messageInt=ConvertUtil.fromBytesToInt(Arrays.copyOfRange(data, 4,8));
		    	chiPlayer=ConvertUtil.fromBytesToInt(Arrays.copyOfRange(data, 8,12));
		    	chiNumber=ConvertUtil.fromBytesToInt(Arrays.copyOfRange(data, 12,16));
				System.out.println("收到当前玩家及数组长度>>>->"+"||messageInt:"+messageInt);
				break;
					
		}
		if(valString.equals(Constant.playerLinkNumber))
		{
			linkNumber=linkNumber+1;
			message=Constant.sendPlayerLinkeNumber+(4-linkNumber);
			sendAndGetMessageUtil.sendStringMessageToOthersPlayers(incoming, channels, message);
			IOUtil.writeString(
					incoming, 
					Constant.sendPlayerLinkeNumber+(4-linkNumber), 
					cf->{System.out.println("发送连接人数为："+Constant.sendPlayerLinkeNumber+(4-linkNumber));}
			);
			if(linkNumber==4)
			{
				linkNumber=0;	
			}
		}
		
		//向指定用户发送起牌数据
		if(valInt==0&&ulist.get(ctx.channel()).playOrder==Constant.eastPlayer)
    	{

    		qipai=fapaiRandom.qipaiInt(qipai, count, allMjArray, temppai);
			temppai=temppai+13;//最后解除
			result=IntListChange.IntToString(qipai);
			IOUtil.writeString
	        (
	        	incoming, 
	        	Constant.sendqipaiMahJong+result, 
	        	cf->{System.out.println("发送数据为0："+Constant.sendqipaiMahJong+result);}
	        );	
			valInt=5;
    	}else if(valInt==1&&ulist.get(ctx.channel()).playOrder==Constant.southPlayer)
    	{
    		qipai=fapaiRandom.qipaiInt(qipai, count, allMjArray, temppai);
			temppai=temppai+13;
			result=IntListChange.IntToString(qipai);
			IOUtil.writeString
	        (
	        	incoming, 
	        	Constant.sendqipaiMahJong+result, 
	        	cf->{System.out.println("发送数据为1："+Constant.sendqipaiMahJong+result);}
	        );	
			valInt=5;
    	}else if(valInt==2&&ulist.get(ctx.channel()).playOrder==Constant.westPlayer)
    	{
    		qipai=fapaiRandom.qipaiInt(qipai, count, allMjArray, temppai);
			temppai=temppai+13;
			result=IntListChange.IntToString(qipai);
			IOUtil.writeString
	        (
	        	incoming, 
	        	Constant.sendqipaiMahJong+result, 
	        	cf->{System.out.println("发送数据为2："+Constant.sendqipaiMahJong+result);}
	        );	
			valInt=5;
    	}else if(valInt==3&&ulist.get(ctx.channel()).playOrder==Constant.northPlayer)
    	{
    		qipai=fapaiRandom.qipaiInt(qipai, count, allMjArray, temppai);
			temppai=temppai+13;
			result=IntListChange.IntToString(qipai);
			IOUtil.writeString
	        (
	        	incoming, 
	        	Constant.sendqipaiMahJong+result, 
	        	cf->{System.out.println("发送数据为3："+Constant.sendqipaiMahJong+result);}
	        );	
			valInt=5;
    	}
		
		
		
		//遍历所有在线用户的Channel
		for (Channel channel : channels) 
		{		
			if(count<4)//4)
			{
				if (channel != incoming)
			    {//如果不是当前用户
			    	//返回文本消息
			       // channel.writeAndFlush(new TextWebSocketFrame("[" + incoming.remoteAddress() + "]" + msg.content()));		        
			    }else 
			    {
			    	if(valString.equals("requestDirection"))
			    	{
			    		
			    		IOUtil.writeInt
				        (
				        	channel, 
				        	count,
				        	cf->{System.out.println("发送数据为："+count);}
				        );	
			    		ulist.put(ctx.channel(),new playerManager(ctx.channel(),count));
			    		valString="";
			    		count++;//最后解除
			    	}
			    	if(messageInt==11)
					{
						System.out.println("messageInt:"+messageInt);
						message=valString+Constant.sendChiMahJongAndPlayer+mahjongChiNumberArray[0]+"<#>"+mahjongChiNumberArray[1]+"<#>"+mahjongChiNumberArray[2];
						sendAndGetMessageUtil.sendStringMessageToOthersPlayers(incoming, channels, message);
						valString="";
						messageInt=0;
					}else if (messageInt==12) {
						System.out.println("messageInt:"+messageInt);
						int nextMahJong=fapaiRandom.nextPai(allMjArray, temppai);
						IOUtil.writeString
				        (
				        	incoming, 
				        	Constant.sendRequestGangMahJongAndPlayer+nextMahJong,
				        	cf->{System.out.println("用户"+(ulist.get(ctx.channel()).playOrder)+"发送数据为："+Constant.sendRequestGangMahJongAndPlayer+nextMahJong);}
				        );
						
						temppai++;
						message=valString+Constant.sendGangMahJongAndPlayer+gangNumber;
						sendAndGetMessageUtil.sendStringMessageToOthersPlayers(incoming, channels, message);
						messageInt=0;
						valString="";
					}else if (messageInt==13) {
						message=huPlayer+Constant.sendHuMahJongAndPlayer+huNumber;
						sendAndGetMessageUtil.sendHuPlayerAndMajong(incoming, channels, message);
						messageInt=0;
						valString="";
					}else if (messageInt==14) {
						message=gettempPlayerInIntLength+Constant.sendTempPlayerAndIntArrayLength+gettempIntLength;
						sendAndGetMessageUtil.sendStringMessageToOthersPlayers(incoming, channels, message);
						messageInt=0;
					}else if (messageInt==15) {
						resetNumber=3-resetNumber;
						System.out.println("resetGame");
			    		temppai=0;//现在发牌到哪了，起牌增加12，普通发牌加1
			    		count=0;//四个玩家，第五个玩家无法获取起始手牌
			    		linkNumber=0;//连接四个玩家后才能开始游戏
			    		result="";
			    		valInt=5;//初始化Int类型
			    		valInt1=5;
			    		mahjongChiNumberArray= new int[3];
			    		message="";
			    		messageInt=0;
			    		gangNumber=0;
			    		gettempPlayerInIntLength=0;
			    		gettempIntLength=0;
			    		huNumber=0;
			    		resetNumber++;
			    		allMjArray=fapaiRandom.fapaiRandomInt();
					}else if (messageInt==16) {
						message=chiPlayer+Constant.sendChiNumber+chiNumber;
						sendAndGetMessageUtil.sendStringMessageToOthersPlayers(incoming, channels, message);
					}
			    	
			    	//返回文本消息
			        //channel.writeAndFlush(new TextWebSocketFrame("[你]" + msg.text() ));
			        //返回整数消息
//			        IOUtil.writeInt
//			        (
//			        	channel, 
//			        	//qipai, 
//			        	1,
//			        	cf->{System.out.println("服务器向客户端发送数据完毕......");}
//			        );	
//			        //返回浮点数消息
//			        IOUtil.writeFloat
//			        (
//			        	channel, 
//			        	16.88f, 
//			        	cf->{System.out.println("服务器向客户端发送数据完毕......");}
//			        );	
			    	
			        //返回字符串消息
//			        IOUtil.writeString
//			        (
//			        	channel, 
//			        	result, 
//			        	cf->{System.out.println("服务器向客户端发送数据完毕......");}
//			        );	
			    	
			    	if(valString.equals("requestNextMahJong"))
					{
						int nextMahJong=fapaiRandom.nextPai(allMjArray, temppai);
						//int nextMahJong=17;
						result=Constant.sendNextMahJong+nextMahJong;
							IOUtil.writeString
					        (
					        	incoming, 
					        	result,
					        	cf->{System.out.println("用户"+(ulist.get(ctx.channel()).playOrder)+"发送数据为："+result+ulist.get(ctx.channel()).playOrder);}
					        );
						temppai++;
						valString="";
					}
			    	
					//放置在此处防止数据错乱
					if(valString.length()==23||valString.length()==24)
					{
						if(valString.substring(0,21).equals(Constant.requestNextPlayer))
						{
							tempPlayer=valString.substring(21,22);
							tempMahJong=valString.substring(22,valString.length());
							
							sendAndGetMessageUtil.sendTempPlayerAndMajong(incoming, channels, "");
							try{
					            Thread.sleep(1000);
					            IOUtil.writeString
						        (
					            	incoming, 
						        	Constant.sendNextPlayer+letterToLetter(tempPlayer), 
						        	cf->{System.out.println("用户"+(ulist.get(ctx.channel()).playOrder)+"发送数据为："+Constant.sendNextPlayer+letterToLetter(tempPlayer));}
						        );
					           }catch(Exception e){
					               e.printStackTrace();
					           }
						}
						tempMahJong="";
						valString="";
					}
					
					if(valString.length()==26||valString.length()==27)
					{
						if(valString.substring(1,25).equals(Constant.pengMahJongAndPlayer))
						{
							tempPlayer=valString.substring(0,1);
							tempMahJong=valString.substring(25,valString.length());
							
							message=tempPlayer+Constant.sendPengMahJongAndPlayer+tempMahJong;
							sendAndGetMessageUtil.sendPengPlayerAndMajong(incoming, channels, message);
						}
						message="";
						valString="";
					}
					
			    }
				
				
			}else
			{
				count=0;
				//System.out.println("第五名玩家请求连接！");
				//ctx.close();//当第五名玩家连接时断开连接
			}
		}
		System.out.println("temppai"+temppai);
	}

	@Override
	public void handlerAdded(ChannelHandlerContext ctx) throws Exception 
	{ 
		//获取当前的Channel
		Channel incoming = ctx.channel();
		//遍历在线用户列表，通知上线消息
		for (Channel channel : channels) 
		{
		    channel.writeAndFlush(new TextWebSocketFrame("[SERVER] - " + incoming.remoteAddress() + " 加入"));
		}
		//将新用户添加进列表
		channels.add(ctx.channel());
		//打印服务器日志
		System.out.println("客户端:"+incoming.remoteAddress() +"加入");
	}
	
	@Override
	public void handlerRemoved(ChannelHandlerContext ctx) throws Exception 
	{  
		//获取当前的Channel
		Channel incoming = ctx.channel();
		//遍历在线用户列表，通知下线消息
		for (Channel channel : channels) 
		{
		    channel.writeAndFlush(new TextWebSocketFrame("[SERVER] - " + incoming.remoteAddress() + " 离开"));
		}
		//将新用户从列表中删除
		channels.remove(ctx.channel());
		//打印服务器日志
		System.out.println("客户端:"+incoming.remoteAddress() +"离开");		
	}
	
	@Override
	public void channelActive(ChannelHandlerContext ctx) throws Exception 
	{ 
		//获取当前的Channel
		Channel incoming = ctx.channel();
		//打印服务器日志
		System.out.println("客户端:"+incoming.remoteAddress()+"在线");
	}
	
	@Override
	public void channelInactive(ChannelHandlerContext ctx) throws Exception 
	{
		//获取当前的Channel
		Channel incoming = ctx.channel();
		//打印服务器日志
		System.out.println("客户端:"+incoming.remoteAddress()+"掉线");
	}
	
	@Override
	public void exceptionCaught(ChannelHandlerContext ctx, Throwable cause)
	    throws Exception 
	{
		Channel incoming = ctx.channel();
		System.out.println("客户端:"+incoming.remoteAddress()+"异常");
		// 当出现异常就关闭连接
		cause.printStackTrace();
		ctx.close();
	}
	
	public static String letterToLetter(String tempPlayer)
	{
		if(tempPlayer.equals("a"))
		{
			return "b";
		}else if (tempPlayer.equals("b")) {
			return "c";
		}else if (tempPlayer.equals("c")) {
			return "d";
		}
		return "a";
	}
}