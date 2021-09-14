package com.bn.util;
import io.netty.buffer.ByteBuf;
import io.netty.channel.Channel;
import io.netty.channel.ChannelFuture;
import io.netty.channel.ChannelFutureListener;
import io.netty.channel.ChannelHandlerContext;
import io.netty.handler.codec.http.websocketx.BinaryWebSocketFrame;

public class IOUtil 
{
	//消息的前四个字节为长度字节数
	//第3个字节为类型编号     1-整数   2-浮点数   3--字符串
    
    public static void writeInt(ChannelHandlerContext ctx,int dataInt,ChannelFutureListener finishAction)
    {  	
    	byte[] typeBytes=ConvertUtil.fromIntToBytes(1);
    	byte[] data=ConvertUtil.fromIntToBytes(dataInt);    	
    	
    	final ByteBuf buf = ctx.alloc().buffer(4+4); 
        buf.writeBytes(typeBytes);
        buf.writeBytes(data);
        
        BinaryWebSocketFrame bwsf=new BinaryWebSocketFrame(buf);
        
        final ChannelFuture f = ctx.writeAndFlush(bwsf); 
        f.addListener(finishAction); 
    }
    
    public static void writeInt(Channel c,int dataInt,ChannelFutureListener finishAction)
    {  	
    	byte[] typeBytes=ConvertUtil.fromIntToBytes(1);
    	byte[] data=ConvertUtil.fromIntToBytes(dataInt);    	
    	
    	final ByteBuf buf = c.alloc().buffer(4+4); 
        buf.writeBytes(typeBytes);
        buf.writeBytes(data);
        
        BinaryWebSocketFrame bwsf=new BinaryWebSocketFrame(buf);
        
        final ChannelFuture f = c.writeAndFlush(bwsf); 
        f.addListener(finishAction); 
    }
    
    public static void writeFloat(ChannelHandlerContext ctx,float dataFloat,ChannelFutureListener finishAction)
    {  	
    	byte[] typeBytes=ConvertUtil.fromIntToBytes(2);
    	byte[] data=ConvertUtil.fromFloatToBytes(dataFloat);   	
    	
    	final ByteBuf buf = ctx.alloc().buffer(4+4); 
        buf.writeBytes(typeBytes);
        buf.writeBytes(data);
        
        BinaryWebSocketFrame bwsf=new BinaryWebSocketFrame(buf);
        
        final ChannelFuture f = ctx.writeAndFlush(bwsf); 
        f.addListener(finishAction); 
    }
    
    public static void writeFloat(Channel c,float dataFloat,ChannelFutureListener finishAction)
    {  	
    	byte[] typeBytes=ConvertUtil.fromIntToBytes(2);
    	byte[] data=ConvertUtil.fromFloatToBytes(dataFloat);   	
    	
    	final ByteBuf buf = c.alloc().buffer(4+4); 
        buf.writeBytes(typeBytes);
        buf.writeBytes(data);
        
        BinaryWebSocketFrame bwsf=new BinaryWebSocketFrame(buf);
        
        final ChannelFuture f = c.writeAndFlush(bwsf); 
        f.addListener(finishAction); 
    }
    
    public static void writeString(ChannelHandlerContext ctx,String dataString,ChannelFutureListener finishAction)
    {  	
    	byte[] typeBytes=ConvertUtil.fromIntToBytes(3);
    	byte[] data=ConvertUtil.fromStringToBytes(dataString);   	
    	
    	final ByteBuf buf = ctx.alloc().buffer(4+data.length); 
        buf.writeBytes(typeBytes);
        buf.writeBytes(data);
        
        BinaryWebSocketFrame bwsf=new BinaryWebSocketFrame(buf);
        
        final ChannelFuture f = ctx.writeAndFlush(bwsf); 
        f.addListener(finishAction); 
    }
    
    public static void writeString(Channel c,String dataString,ChannelFutureListener finishAction)
    {  	
    	byte[] typeBytes=ConvertUtil.fromIntToBytes(3);
    	byte[] data=ConvertUtil.fromStringToBytes(dataString);   	
    	final ByteBuf buf = c.alloc().buffer(4+data.length); 
        buf.writeBytes(typeBytes);
        buf.writeBytes(data);
        
        BinaryWebSocketFrame bwsf=new BinaryWebSocketFrame(buf);
        
        final ChannelFuture f = c.writeAndFlush(bwsf); 
        f.addListener(finishAction); 
    }
    
    public static byte[] readBytes(BinaryWebSocketFrame msg)
    {
    	ByteBuf buf=msg.content();   	
    	int count=buf.readableBytes();
    	byte[] data=new byte[count];
    	buf.readBytes(data);    	
    	return data;
    }

}
