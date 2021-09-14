package com.bn.rules;

import io.netty.channel.Channel;


public class playerManager {
	Channel c;//此客户的信道
	public int playOrder;//玩家顺序
	public playerManager(Channel c,int playOrder)
	{
		this.c=c;
		this.playOrder=playOrder;
	}
}
