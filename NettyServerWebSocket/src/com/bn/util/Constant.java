package com.bn.util;

import java.util.HashMap;
import java.util.Map;

import com.bn.rules.playerManager;

import io.netty.channel.Channel;

public class Constant {
	
	//����б�
	public static int eastPlayer=0;
	public static int southPlayer=1;
	public static int westPlayer=2;
	public static int northPlayer=3;
	//�����ٳ���23���Ȼ���24����
	public static String sendNextMahJong="<#sendNextMahJong#>";//������һ����
	public static String sendNextDirection="<#sendNextDirection#>";//������һ����ҵķ���21
	public static String sendqipaiMahJong="<#sendqipaiMahJong#>";//��������
	public static String requestNextPlayer="<#requestNextPlayer#>";//�������ƣ�������һ����ҳ���
	public static String sendNextPlayer="<#sendNextPlayer#>";//�յ�������������,������һ�����
	public static String sendNextPlayerMahJong="<#sendNextPlayerMahJong#>";//�յ�������������,������һ�����
	public static String HuMahJongAndPlayer="<#HuMahJongAndPlayer#>";//���Ʒ���
	public static String sendHuMahJongAndPlayer="<#sendHuMahJongAndPlayer#>";//���ͺ�����Ϣ���������
	public static String pengMahJongAndPlayer="<#pengMahJongAndPlayer#>";//��������
	public static String sendPengMahJongAndPlayer="<#sendPengMahJongAndPlayer#>";//����������Ϣ���������
	public static String playerLinkNumber="<#playerLinkNumber#>";//������������
	public static String sendPlayerLinkeNumber="<#sendPlayerLinkeNumber#>";//��������ҷ�����������
	public static String chiMahJongAndPlayer="<#chiMahJongAndPlayer#>";//���ͳ���
	public static String sendChiMahJongAndPlayer="<#sendChiMahJongAndPlayer#>";//���ͳ�����Ϣ���������
	public static String gangMahJongAndPlayer="<#gangMahJongAndPlayer#>";//���ͳ���
	public static String sendGangMahJongAndPlayer="<#sendGangMahJongAndPlayer#>";//���ͳ�����Ϣ���������
	public static String sendRequestGangMahJongAndPlayer="<#sendRequestGangMahJongAndPlayer#>";//���ͳ�����Ϣ���������
	public static String sendTempPlayerAndIntArrayLength="<#sendTempPlayerAndIntArrayLength#>";//���͵�ǰ��Ҽ���ǰ������鳤�ȸ��������
	public static String resetGame="<#resetGame#>";//����������Ϸ
	public static String sendChiNumber="<#sendChiNumber#>";
}


