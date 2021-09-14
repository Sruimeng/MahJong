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
	//�ͻ����б�
	public static Map<Channel,playerManager> ulist=new HashMap<Channel,playerManager>();
	public static int[] allMjArray=fapaiRandom.fapaiRandomInt();//�ܵ��齫����//��ȡһ��������齫����
	//public static int[] qipai=new int[13];//��������
	public static int[] qipai={1,2,3,17,17,17,7,7,7,14,15,13,25};
	//public static int[] qipai={1,2,3,17,17,17,7,7,8,14,15,13,25};
	public static int temppai=0;//���ڷ��Ƶ����ˣ���������12����ͨ���Ƽ�1
	public static int count=0;//�ĸ���ң����������޷���ȡ��ʼ����
	public static int linkNumber=0;//�����ĸ���Һ���ܿ�ʼ��Ϸ
	String result="";
	int valInt=5;//��ʼ��Int����
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
	public static String tempMahJong="";//��ǰ�齫���Ƕ���
	public static String tempPlayer="";//��ǰ�����aΪ0��bΪ1��cΪ2��dΪ3
	int resetNumber=0;
	
    public static ChannelGroup channels = new DefaultChannelGroup(GlobalEventExecutor.INSTANCE);
	@Override
	protected void channelRead0(ChannelHandlerContext ctx,BinaryWebSocketFrame msg) throws Exception 
	{ 	
		//��ȡ��ǰ��Ϣ��Ӧ��Channel
		Channel incoming = ctx.channel();
		
		//������Ϣ����
		byte[] data=IOUtil.readBytes(msg);
		//ȡ��ǰ�ĸ��ֽڣ�����������
		int type=ConvertUtil.fromBytesToInt(Arrays.copyOfRange(data, 0, 4));
		System.out.println("type="+type);
		switch(type)
		{
			case 1://����
				  valInt=ConvertUtil.fromBytesToInt(Arrays.copyOfRange(data, 4,8));
				  System.out.println("�յ�����>>>"+valInt);
			break;
			case 2://������
				  valFloat=ConvertUtil.fromBytesToFloat(Arrays.copyOfRange(data, 4,8));
				  System.out.println("�յ�������>>>"+valFloat);
			break;
			case 3://�ַ���
				  valString=ConvertUtil.fromBytesToString(Arrays.copyOfRange(data, 4,data.length));
				  System.out.println("�յ����ַ���>>>"+valString+"|||||����Ϊ��"+valString.length());
			break;
			case 4://�ַ����������
				valInt=ConvertUtil.fromBytesToInt(Arrays.copyOfRange(data, 4,8));
				valString=ConvertUtil.fromBytesToString(Arrays.copyOfRange(data, 8,data.length));
				valString=valString+valInt+"";
				valInt=5;
				System.out.println("�յ�int����>>>->"+valInt+"|||||����Ϊ��"+valString.length());
				System.out.println("�յ��ַ�����һ��int������>>>->"+valString+"|||||����Ϊ��"+valString.length());
				break;
			case 5:
				valInt=ConvertUtil.fromBytesToInt(Arrays.copyOfRange(data, 4,8));
				valInt1=ConvertUtil.fromBytesToInt(Arrays.copyOfRange(data, 8,12));
				valString=ConvertUtil.fromBytesToString(Arrays.copyOfRange(data, 12,data.length));
				valString=valInt+valString+valInt1+"";
				valInt=5;
				valInt1=5;
				
				System.out.println("�յ��ַ���2>>>->"+valString+"|||||����Ϊ��"+valString.substring(1,23));
				break;
			case 6:
				messageInt=ConvertUtil.fromBytesToInt(Arrays.copyOfRange(data, 4,8));
				valInt=ConvertUtil.fromBytesToInt(Arrays.copyOfRange(data, 8,12));
				mahjongChiNumberArray[0]=ConvertUtil.fromBytesToInt(Arrays.copyOfRange(data, 12,16));
				mahjongChiNumberArray[1]=ConvertUtil.fromBytesToInt(Arrays.copyOfRange(data, 16,20));
				mahjongChiNumberArray[2]=ConvertUtil.fromBytesToInt(Arrays.copyOfRange(data, 20,24));
				valString=valInt+"";
				valInt=5;
				System.out.println("�յ��ַ�����������>>>->"+valString+"|||||����Ϊ��"+valString.length());
				break;
			case 7:
				messageInt=ConvertUtil.fromBytesToInt(Arrays.copyOfRange(data, 4,8));
				valInt=ConvertUtil.fromBytesToInt(Arrays.copyOfRange(data, 8,12));
				gangNumber=ConvertUtil.fromBytesToInt(Arrays.copyOfRange(data, 12,16));
				valString=valInt+"";
				valInt=5;
				System.out.println("�յ��ַ�����������>>>->"+valString+"|||||����Ϊ��"+valString.length());
				break;
		    case 8:
		    	messageInt=ConvertUtil.fromBytesToInt(Arrays.copyOfRange(data, 4,8));
		    	huPlayer=ConvertUtil.fromBytesToInt(Arrays.copyOfRange(data, 8,12));
		    	System.out.println(huPlayer+"11111111");
		    	huNumber=ConvertUtil.fromBytesToInt(Arrays.copyOfRange(data, 12,16));
				System.out.println("�յ��ַ�������>>>->"+huPlayer+"||messageInt:"+messageInt+"||huNumber:"+huNumber);
				break;
		    case 9:
		    	messageInt=ConvertUtil.fromBytesToInt(Arrays.copyOfRange(data, 4,8));
		    	gettempPlayerInIntLength=ConvertUtil.fromBytesToInt(Arrays.copyOfRange(data, 8,12));
		    	gettempIntLength=ConvertUtil.fromBytesToInt(Arrays.copyOfRange(data, 12,16));
				System.out.println("�յ���ǰ��Ҽ����鳤��>>>->"+gettempPlayerInIntLength+"||messageInt:"+messageInt+"||gettempIntLength:"+gettempIntLength);
				break;
		    case 10:
		    	messageInt=ConvertUtil.fromBytesToInt(Arrays.copyOfRange(data, 4,8));
				System.out.println("�յ���ǰ��Ҽ����鳤��>>>->"+"||messageInt:"+messageInt);
				break;
		    case 11:
		    	messageInt=ConvertUtil.fromBytesToInt(Arrays.copyOfRange(data, 4,8));
		    	chiPlayer=ConvertUtil.fromBytesToInt(Arrays.copyOfRange(data, 8,12));
		    	chiNumber=ConvertUtil.fromBytesToInt(Arrays.copyOfRange(data, 12,16));
				System.out.println("�յ���ǰ��Ҽ����鳤��>>>->"+"||messageInt:"+messageInt);
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
					cf->{System.out.println("������������Ϊ��"+Constant.sendPlayerLinkeNumber+(4-linkNumber));}
			);
			if(linkNumber==4)
			{
				linkNumber=0;	
			}
		}
		
		//��ָ���û�������������
		if(valInt==0&&ulist.get(ctx.channel()).playOrder==Constant.eastPlayer)
    	{

    		qipai=fapaiRandom.qipaiInt(qipai, count, allMjArray, temppai);
			temppai=temppai+13;//�����
			result=IntListChange.IntToString(qipai);
			IOUtil.writeString
	        (
	        	incoming, 
	        	Constant.sendqipaiMahJong+result, 
	        	cf->{System.out.println("��������Ϊ0��"+Constant.sendqipaiMahJong+result);}
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
	        	cf->{System.out.println("��������Ϊ1��"+Constant.sendqipaiMahJong+result);}
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
	        	cf->{System.out.println("��������Ϊ2��"+Constant.sendqipaiMahJong+result);}
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
	        	cf->{System.out.println("��������Ϊ3��"+Constant.sendqipaiMahJong+result);}
	        );	
			valInt=5;
    	}
		
		
		
		//�������������û���Channel
		for (Channel channel : channels) 
		{		
			if(count<4)//4)
			{
				if (channel != incoming)
			    {//������ǵ�ǰ�û�
			    	//�����ı���Ϣ
			       // channel.writeAndFlush(new TextWebSocketFrame("[" + incoming.remoteAddress() + "]" + msg.content()));		        
			    }else 
			    {
			    	if(valString.equals("requestDirection"))
			    	{
			    		
			    		IOUtil.writeInt
				        (
				        	channel, 
				        	count,
				        	cf->{System.out.println("��������Ϊ��"+count);}
				        );	
			    		ulist.put(ctx.channel(),new playerManager(ctx.channel(),count));
			    		valString="";
			    		count++;//�����
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
				        	cf->{System.out.println("�û�"+(ulist.get(ctx.channel()).playOrder)+"��������Ϊ��"+Constant.sendRequestGangMahJongAndPlayer+nextMahJong);}
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
			    		temppai=0;//���ڷ��Ƶ����ˣ���������12����ͨ���Ƽ�1
			    		count=0;//�ĸ���ң����������޷���ȡ��ʼ����
			    		linkNumber=0;//�����ĸ���Һ���ܿ�ʼ��Ϸ
			    		result="";
			    		valInt=5;//��ʼ��Int����
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
			    	
			    	//�����ı���Ϣ
			        //channel.writeAndFlush(new TextWebSocketFrame("[��]" + msg.text() ));
			        //����������Ϣ
//			        IOUtil.writeInt
//			        (
//			        	channel, 
//			        	//qipai, 
//			        	1,
//			        	cf->{System.out.println("��������ͻ��˷����������......");}
//			        );	
//			        //���ظ�������Ϣ
//			        IOUtil.writeFloat
//			        (
//			        	channel, 
//			        	16.88f, 
//			        	cf->{System.out.println("��������ͻ��˷����������......");}
//			        );	
			    	
			        //�����ַ�����Ϣ
//			        IOUtil.writeString
//			        (
//			        	channel, 
//			        	result, 
//			        	cf->{System.out.println("��������ͻ��˷����������......");}
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
					        	cf->{System.out.println("�û�"+(ulist.get(ctx.channel()).playOrder)+"��������Ϊ��"+result+ulist.get(ctx.channel()).playOrder);}
					        );
						temppai++;
						valString="";
					}
			    	
					//�����ڴ˴���ֹ���ݴ���
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
						        	cf->{System.out.println("�û�"+(ulist.get(ctx.channel()).playOrder)+"��������Ϊ��"+Constant.sendNextPlayer+letterToLetter(tempPlayer));}
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
				//System.out.println("����������������ӣ�");
				//ctx.close();//���������������ʱ�Ͽ�����
			}
		}
		System.out.println("temppai"+temppai);
	}

	@Override
	public void handlerAdded(ChannelHandlerContext ctx) throws Exception 
	{ 
		//��ȡ��ǰ��Channel
		Channel incoming = ctx.channel();
		//���������û��б�֪ͨ������Ϣ
		for (Channel channel : channels) 
		{
		    channel.writeAndFlush(new TextWebSocketFrame("[SERVER] - " + incoming.remoteAddress() + " ����"));
		}
		//�����û���ӽ��б�
		channels.add(ctx.channel());
		//��ӡ��������־
		System.out.println("�ͻ���:"+incoming.remoteAddress() +"����");
	}
	
	@Override
	public void handlerRemoved(ChannelHandlerContext ctx) throws Exception 
	{  
		//��ȡ��ǰ��Channel
		Channel incoming = ctx.channel();
		//���������û��б�֪ͨ������Ϣ
		for (Channel channel : channels) 
		{
		    channel.writeAndFlush(new TextWebSocketFrame("[SERVER] - " + incoming.remoteAddress() + " �뿪"));
		}
		//�����û����б���ɾ��
		channels.remove(ctx.channel());
		//��ӡ��������־
		System.out.println("�ͻ���:"+incoming.remoteAddress() +"�뿪");		
	}
	
	@Override
	public void channelActive(ChannelHandlerContext ctx) throws Exception 
	{ 
		//��ȡ��ǰ��Channel
		Channel incoming = ctx.channel();
		//��ӡ��������־
		System.out.println("�ͻ���:"+incoming.remoteAddress()+"����");
	}
	
	@Override
	public void channelInactive(ChannelHandlerContext ctx) throws Exception 
	{
		//��ȡ��ǰ��Channel
		Channel incoming = ctx.channel();
		//��ӡ��������־
		System.out.println("�ͻ���:"+incoming.remoteAddress()+"����");
	}
	
	@Override
	public void exceptionCaught(ChannelHandlerContext ctx, Throwable cause)
	    throws Exception 
	{
		Channel incoming = ctx.channel();
		System.out.println("�ͻ���:"+incoming.remoteAddress()+"�쳣");
		// �������쳣�͹ر�����
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