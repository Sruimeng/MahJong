package com.bn.server;

import io.netty.bootstrap.ServerBootstrap;
import com.bn.util.*;
import io.netty.channel.ChannelFuture;
import io.netty.channel.ChannelOption;
import io.netty.channel.EventLoopGroup;
import io.netty.channel.nio.NioEventLoopGroup;
import io.netty.channel.socket.nio.NioServerSocketChannel;

public class WebsocketChatServer 
{
    private int port;

    public WebsocketChatServer(int port) 
    {
        this.port = port;
    }

    public void doTask() throws Exception 
    {
    	//�������ڽ�����������Ķ��߳��¼���Ϣѭ����
        EventLoopGroup bossGroup = new NioEventLoopGroup();
        //��������ִ�о���ҵ���߼��ĵĶ��߳��¼���Ϣѭ����
        EventLoopGroup workerGroup = new NioEventLoopGroup();
        try {
            ServerBootstrap b = new ServerBootstrap(); 
            b.group(bossGroup, workerGroup)
             .channel(NioServerSocketChannel.class) 
             .childHandler(new WebsocketChatServerInitializer())  
             //����tcp��������BACKLOG����Ϊ128
             .option(ChannelOption.SO_BACKLOG, 128)          
             .childOption(ChannelOption.SO_KEEPALIVE, true); 

            System.out.println("3D�齫������ ������...");

            //�󶨶˿ڣ�������sync���������ȴ��󶨹�������
            ChannelFuture f = b.bind(port).sync(); 

            //����sync�������̣߳���֤����˹رպ�main�������˳�
            f.channel().closeFuture().sync();

        } finally 
        {
        	//���ŵعر��߳���
            workerGroup.shutdownGracefully();
            bossGroup.shutdownGracefully();
        }
    }
}
