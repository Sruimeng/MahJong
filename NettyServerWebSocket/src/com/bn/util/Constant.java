package com.bn.util;

import java.util.HashMap;
import java.util.Map;

import com.bn.rules.playerManager;

import io.netty.channel.Channel;

public class Constant {
	
	//玩家列表
	public static int eastPlayer=0;
	public static int southPlayer=1;
	public static int westPlayer=2;
	public static int northPlayer=3;
	//不能再出现23长度或者24长度
	public static String sendNextMahJong="<#sendNextMahJong#>";//发送下一张牌
	public static String sendNextDirection="<#sendNextDirection#>";//发送下一下玩家的方向21
	public static String sendqipaiMahJong="<#sendqipaiMahJong#>";//发送起牌
	public static String requestNextPlayer="<#requestNextPlayer#>";//结束出牌，请求下一个玩家出牌
	public static String sendNextPlayer="<#sendNextPlayer#>";//收到结束出牌请求,返回下一个玩家
	public static String sendNextPlayerMahJong="<#sendNextPlayerMahJong#>";//收到结束出牌请求,返回下一个玩家
	public static String HuMahJongAndPlayer="<#HuMahJongAndPlayer#>";//胡牌发送
	public static String sendHuMahJongAndPlayer="<#sendHuMahJongAndPlayer#>";//发送胡牌信息给其他玩家
	public static String pengMahJongAndPlayer="<#pengMahJongAndPlayer#>";//发送碰牌
	public static String sendPengMahJongAndPlayer="<#sendPengMahJongAndPlayer#>";//发送碰牌信息给其他玩家
	public static String playerLinkNumber="<#playerLinkNumber#>";//发送连接人数
	public static String sendPlayerLinkeNumber="<#sendPlayerLinkeNumber#>";//给其他玩家发送连接人数
	public static String chiMahJongAndPlayer="<#chiMahJongAndPlayer#>";//发送吃牌
	public static String sendChiMahJongAndPlayer="<#sendChiMahJongAndPlayer#>";//发送吃牌信息给其他玩家
	public static String gangMahJongAndPlayer="<#gangMahJongAndPlayer#>";//发送吃牌
	public static String sendGangMahJongAndPlayer="<#sendGangMahJongAndPlayer#>";//发送吃牌信息给其他玩家
	public static String sendRequestGangMahJongAndPlayer="<#sendRequestGangMahJongAndPlayer#>";//发送吃牌信息给其他玩家
	public static String sendTempPlayerAndIntArrayLength="<#sendTempPlayerAndIntArrayLength#>";//发送当前玩家及当前玩家数组长度给其他玩家
	public static String resetGame="<#resetGame#>";//发送重新游戏
	public static String sendChiNumber="<#sendChiNumber#>";
}


