package com.bn.rules;

import io.netty.channel.Channel;


public class playerManager {
	Channel c;//�˿ͻ����ŵ�
	public int playOrder;//���˳��
	public playerManager(Channel c,int playOrder)
	{
		this.c=c;
		this.playOrder=playOrder;
	}
}
